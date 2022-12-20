const petsModel = require('../models/pets-model');

const getPets = async (req, res) => {
    await petsModel.find({})
        .then((Pets, error) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            }
            if (Pets.length == 0) {
                return res.json({ success: false, massage: "no Pets" })
            }
            res.status(200).json({ success: true, Pets })
        })
}
const getPetById = async (req, res) => {
    await petsModel.findById(req.params.id)
        .then(Pet => {
            if (!Pet) {
                return res.json({ success: false, massage: "Pet is not available" })
            }
            return res.status(200).json({ success: true, Pet })
        })
        .catch(error => res.status(400).json({ success: false, error }))
}
const createPet = async (req, res) => {
    //TODO validation
    await petsModel.insertMany(req.body.Pet)
        .then(() => res.status(300).json({ success: true, massage: "Pet added succesfuly" }))
        .catch((error) => res.status(400).json({ success: false, error }))
}
const updatePet = async (req, res) => {
    await petsModel.findByIdAndUpdate(req.params.id, req.body.Pet)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
}
const deletePet = async (req, res) => {
    await petsModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false ,error}))
}


module.exports = {
    getPets,
    createPet,
    getPetById,
    deletePet,
    updatePet
}