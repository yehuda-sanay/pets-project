const clinicVisitsRouter = require('express').Router()
const { getClinicVisits,
    createClinicVisit,
    getClinicVisitById,
    deleteClinicVisit,
    updateClinicVisit } = require('../controllers/clinicVisits-ctrl');

clinicVisitsRouter.get('/', getClinicVisits);
clinicVisitsRouter.get('/byId/:id', getClinicVisitById);
clinicVisitsRouter.post('/add', createClinicVisit);
clinicVisitsRouter.put('/update/:id', updateClinicVisit);
clinicVisitsRouter.delete('/delete/:id', deleteClinicVisit);

module.exports = clinicVisitsRouter