const mongoose = require('mongoose')

const VeterinariansSchema = new mongoose.Schema(
  {
    clinicName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      require: true
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    seniority: {
      type: Number,
      required: true,
    },
    opening: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    users:[{ type: mongoose.Schema.Types.ObjectId,
       ref: 'Users' }],

    Recommendations:[{
    }],

  },
  { timeseries: true }
);


module.exports = mongoose.model("Veterinarians", VeterinariansSchema);