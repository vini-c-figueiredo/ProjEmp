const { Router } = require('express');

const EmpController = require('./app/controller/EmpController');
const UserController = require('./app/controller/UserController');
const AuthController = require('./app/controller/AuthController');


const router = Router();

router.post('/new', EmpController.create);
router.get('/tot', EmpController.index);
router.delete('/del', EmpController.delete);

//User Login
router.post('/newUser', UserController.create);
router.delete('/DelUser', UserController.delete);

//Auth
router.get('/Auth', AuthController.Token);

module.exports = router;