const mongoose = require('mongoose')

const PetsSchema = new mongoose.Schema(
  {
    petName: {
      type: String,
      required: true,
    },
    kindOfPet: {
      type: String,
      require: true
    },
    breed: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    vet: {
        type: String,
        required: true,
    },
    clinicVisits: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Clinic visits",
    }],
  },
  { timeseries: true }
);


module.exports = mongoose.model("Pets", PetsSchema);