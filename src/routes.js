const { Router } = require('express');

const EmpController = require('./app/controller/EmpController');
const UserController = require('./app/controller/UserController');
const AuthController = require('./app/controller/AuthController');
const JWT = require('./app/middleware/VerifyJWT');


const router = Router();

//Auth
router.get('/Auth', AuthController.Token);

//Rotas Processo
router.post('/new', JWT.verify, EmpController.create);
router.get('/tot', JWT.verify, EmpController.index);
router.delete('/del', JWT.verify, EmpController.delete);

//User Login
router.post('/newUser', UserController.create);
router.delete('/DelUser', UserController.delete);

module.exports = router;