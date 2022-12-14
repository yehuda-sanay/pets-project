const mongoose = require('mongoose')

const ClinicVisitsSchema= new mongoose.Schema(
 {
    visitDate:{
        type:String,
        require:true
    },
    medicalProblem:{
        type:String,
        require:true
    },
    medicalCare: {
        type:String,

    },
    medicalObservation: {
        type:String

    }


 }
)
module.exports = mongoose.model("Clinic visits", ClinicVisitsSchema);