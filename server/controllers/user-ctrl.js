const UsersModal = require('../models/users-model');

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//validation

// const joi=require('@hapi/joi');

// const schema = {
//     firstName: joi.string().required,
//     email: joi.string().email().required(),
//     password: joi.string().required().min(6)
// }
const getUserById = async (req, res) => {
  await UsersModal.findById(req.params.id)
    .then((result) => {
      return !result
      ? res.status(300).json({ successes: false, msg: "no user was found" })
      : res.status(201).json({ successes: true , result});
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};


const getUsers = async(req, res) => {
    await UsersModal.find().populate("pets").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no users was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const updateUser = async (req, res) => {
  await UsersModal.findByIdAndUpdate(req.params.id, req.body.user)
      .then(result => res.status(200).json({ success: true, result }))
      .catch(error => res.status(400).json({ success: false, error }))
}

const signup = async (req, res, next) => {
  const { firstName,lastName, email,phone, password } = req.body;
  let existingUser;
  try {
    existingUser = await UsersModal.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exists! Login Instead" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const user = new UsersModal({
    firstName,
    lastName,
    email,
    phone,
    password: hashedPassword,
  });

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ message: user });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await UsersModal.findOne({ email: email });
  } catch (err) {
    return new Error(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "User not found. Signup Please" });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Inavlid Email / Password" });
  }
  const token = jwt.sign({ id: existingUser._id }, process.env.SECRET_KEY, {
    expiresIn: "35s",
  });

  console.log("Generated Token\n", token);

  if (req.cookies[`${existingUser._id}`]) {
    req.cookies[`${existingUser._id}`] = "";
  }

  res.cookie(String(existingUser._id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 30), // 30 seconds
    httpOnly: true,
    sameSite: "lax",
  });

  return res
    .status(200)
    .json({ message: "Successfully Logged In", user: existingUser, token });
};

const verifyToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[1];
  if (!token) {
    res.status(404).json({ message: "No token found" });
  }
  jwt.verify(String(token), process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(400).json({ message: "Invalid TOken" });
    }
    console.log(user.id);
    req.id = user.id;
  });
  next();
};

const getUser = async (req, res, next) => {
  const userId = req.id;
  let user;
  try {
    user = await UsersModal.findById(userId, "-password").populate("pets");
  } catch (err) {
    return new Error(err);
  }
  if (!user) {
    return res.status(404).json({ messsage: "User Not FOund" });
  }
  return res.status(200).json({ user });
};
const refreshToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const prevToken = cookies.split("=")[1];
  if (!prevToken) {
    return res.status(400).json({ message: "Couldn't find token" });
  }
  jwt.verify(String(prevToken), process.env.SECRET_KEY, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Authentication failed" });
    }
    res.clearCookie(`${user.id}`);
    req.cookies[`${user.id}`] = "";

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: "35s",
    });
    console.log("Regenerated Token\n", token);

    res.cookie(String(user.id), token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 30), // 30 seconds
      httpOnly: true,
      sameSite: "lax",
    });

    req.id = user.id;
    next();
  });
};

const logout = (req, res, next) => {
  const cookies = req.headers.cookie;
  const prevToken = cookies.split("=")[1];
  if (!prevToken) {
    return res.status(400).json({ message: "Couldn't find token" });
  }
  jwt.verify(String(prevToken), process.env.SECRET_KEY, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Authentication failed" });
    }
    res.clearCookie(`${user.id}`);
    req.cookies[`${user.id}`] = "";
    return res.status(200).json({ message: "Successfully Logged Out" });
  });
};

exports.logout = logout;
exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
exports.refreshToken = refreshToken;
exports.getUsers=getUsers   
exports.updateUser=updateUser
exports.getUserById=getUserById