var express = require('express');
var router = express.Router();

var user = require('../controllers/controller');

//Register user
router.post('/register', user.register);

//Login user
router.post('/login', user.login);

var middleware = require('../controllers/middleware');

router.use(middleware);

//Read all employees
router.get('/read', user.read);

//Create employee
router.post('/create', user.create);

//Edit update employee
router.post('/update/', user.update);

//Delete employee
router.post('/delete', user.delete);



module.exports = router;