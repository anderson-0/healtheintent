const express = require('express')
const routes = express.Router();
const HealtheIntentController = require('../controllers/HealtheIntentController')
routes.get('/', async (req, res) => {
  res.send('Hello World!')
})
routes.get('/clipboard/:patientId', HealtheIntentController.getPatientClipboard)
routes.get('/messages/:patientId', HealtheIntentController.getPatientMessages)
routes.post('/messages', HealtheIntentController.createPatientMessage)
routes.get('/personnels', HealtheIntentController.getPersonnels)
routes.post('/personnels', HealtheIntentController.createPersonnel)
// routes.post('/folders/:patientId', HealtheIntentController.createPatientFolder)
routes.get('/folders', HealtheIntentController.getFolders)

module.exports = routes;
