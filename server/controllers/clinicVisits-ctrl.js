const clinicVisitsModel = require('../models/clinicVisits-model');

const getClinicVisits = async (req, res) => {
    await clinicVisitsModel.find({})
        .then((clinicVisits, error) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            }
            if (clinicVisits.length == 0) {
                return res.json({ success: false, massage: "no clinicVisits" })
            }
            res.status(200).json({ success: true, clinicVisits })
        })
}
const getClinicVisitById = async (req, res) => {
    await clinicVisitsModel.findById(req.params.id)
        .then(clinicVisit => {
            if (!clinicVisit) {
                return res.json({ success: false, massage: "clinicVisit is not available" })
            }
            return res.status(200).json({ success: true, clinicVisit })
        })
        .catch(error => res.status(400).json({ success: false, error }))
}
const createClinicVisit = async (req, res) => {
    //TODO validation
    await clinicVisitsModel.insertMany(req.body.clinicVisit)
        .then(() => res.status(300).json({ success: true, massage: "clinicVisit added succesfuly" }))
        .catch((error) => res.status(400).json({ success: false, error }))
}
const updateClinicVisit = async (req, res) => {
    await clinicVisitsModel.findByIdAndUpdate(req.params.id, req.body.clinicVisit)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
}
const deleteClinicVisit = async (req, res) => {
    await clinicVisitsModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false ,error}))
}


module.exports = {
    getClinicVisits,
    createClinicVisit,
    getClinicVisitById,
    deleteClinicVisit,
    updateClinicVisit
}