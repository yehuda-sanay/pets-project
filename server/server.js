const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
require('./DB')
const path = require('path');
const cookieParser= require('cookie-parser');

const usersRouter = require('../server/routes/users-router')
const veterinariansRouter = require('./routes/veterinarians-router')
const petsRouter = require('./routes/pets-router')
const clinicVisitsRouter = require('./routes/clinicVisits-router')
const passport = require('passport');
require('./config/passport')(passport);
const app = express();
const port = 8080;

app.use(passport.initialize())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(cookieParser())

app.use('/veterinarian',veterinariansRouter)
app.use('/clinicVisits',clinicVisitsRouter)
app.use('/pets',petsRouter)
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send({ massage: "success" })
})
app.listen(port, () => {
    console.log(process.env.CONNECTION_STRING);
    console.log(`server listen on port: ${port}`);
})
//*****************************************************************/
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}
//*******************************************************************/