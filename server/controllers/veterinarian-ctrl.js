const VeterinariansModal = require('../models/veterinarians-model');

const getVeterinarians = async(req, res) => {
    await VeterinariansModal.find({}).then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no Veterinarians was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};

const getVeterinarianById = async(req,res) => {
    await VeterinariansModal.findById(req.params.id)
    .then(result => {
        return !result ?
        res.status(200).json({ successes: true }, result)
        :  res.status(300).json({ successes: false, msg: "no Veterinarian was found" })
    }).catch(error=> res.status(400).json({ successes: false , error})) 
};

const addVeterinarian = async(req,res) => {
    await VeterinariansModal.insertMany(req.body.veterinarian)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

const updateVeterinarian = async(req,res) => {
    await VeterinariansModal.findByIdAndUpdate(req.params.id, req.body.veterinarian)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

const deleteVeterinarian = async(req,res) => {
    await VeterinariansModal.findByIdAndRemove(req.params.id, req.body.veterinarian)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

module.exports = {getVeterinarians,getVeterinarianById,addVeterinarian,updateVeterinarian,deleteVeterinarian}