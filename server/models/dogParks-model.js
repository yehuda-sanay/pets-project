const mongoose = require('mongoose')

const DogParksSchema= new mongoose.Schema(
 {
    city:{
        type:String,
        require:true
    },
    neighborhood:{
        type:String,
        require:true
    },
    street: {
        type:String,
        require:true
    }

 }
)
module.exports = mongoose.model("Dog parks", DogParksSchema);