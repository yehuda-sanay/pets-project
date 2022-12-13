const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log("connection succeed.."); })
    .catch((err) => { console.error("connection falid", err); })
module.exports = mongoose.connection;