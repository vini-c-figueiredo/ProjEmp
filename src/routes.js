const { Router } = require('express');

const EmpController = require('./app/controller/EmpController');


const router = Router();

router.post('/new', EmpController.create);
router.get('/tot', EmpController.index);
router.delete('/del', EmpController.delete);

module.exports = router;