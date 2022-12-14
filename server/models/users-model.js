const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: true,
      minlength:6,
    },
    passwordValidation: {
      type: String,
      required: true,
    },
    pets:[{type: mongoose.Schema.Types.ObjectId,
          ref:'Pets'}]
  },
  { timeseries: true }
);


module.exports = mongoose.model("Users", UsersSchema);