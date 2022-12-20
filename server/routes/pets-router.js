const petsRouter = require('express').Router()
const { getPets, getPetById, createPet, updatePet, deletePet } = require('../controllers/pets-ctrl');

petsRouter.get('/', getPets);
petsRouter.get('/byId/:id', getPetById);
petsRouter.post('/add', createPet);
petsRouter.put('/update/:id', updatePet);
petsRouter.delete('/delete/:id', deletePet);

module.exports = petsRouter