const veterinariansRouter = require('express').Router()
const { getVeterinarians, getVeterinarianById, addVeterinarian, updateVeterinarian, deleteVeterinarian } = require('../controllers/veterinarian-ctrl');

veterinariansRouter.get('/', getVeterinarians);
veterinariansRouter.get('/byId/:id', getVeterinarianById);
veterinariansRouter.post('/add', addVeterinarian);
veterinariansRouter.put('/update/:id', updateVeterinarian);
veterinariansRouter.delete('/delete/:id', deleteVeterinarian);

module.exports = veterinariansRouter
