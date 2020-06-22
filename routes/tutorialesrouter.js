const express = require('express')
const router = express.Router()
const  tutorialesController = require('../controllers/tutorialescontroller');

//ASIGNO EL CONTROLADOR CORRESPONDIENTE A CADA RUTA
router.get('/',tutorialesController.getTutoriales);
router.get('/:id',tutorialesController.findById);
router.post('/',tutorialesController.addTutorial);
router.delete('/:id',tutorialesController.deleteTutorial);
router.delete('/',tutorialesController.deleteAll);
router.put('/:id',tutorialesController.modTutorial);

module.exports = router