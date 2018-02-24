var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = mongoose.model('User');
var Register = mongoose.model('Register');


var key = 'kdirj34k22kdj4kli34sb';
var userController = {};

userController.read = function (req, res) {
    User.find({}).exec(function (err,users) {
        if (err) {
            console.log('Error:', err)
        }
        else {
            res.json({
                employees: users
            })
        }
    });
};

userController.create = function (req,res) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err) {
            console.log(err);
            res.json({
                message: 'User could not be created'
            })
        }
        else {
            console.log('Successfully created a employee');
            res.json({
                message: 'Successfully created employee',
                employee_id: user._id,
                employee_details: user
            });
        }
    })
};

userController.update = function (req,res) {
    User.findByIdAndUpdate(req.param('_id'), {$set: {name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary}}, {new: true}, function (err,users) {
        console.log(req.body.name);
        if (err) {
            console.log('Error', err);
            res.json({
                message: 'Error'
            })
        }
        else {
            res.json({
                message: 'Employee details updated successfully',
                Employee_details: users
            })
        }
    });
};

userController.delete = function (req,res) {
    User.remove({_id: req.param('_id')}, function (err) {
        if (err) {
            console.log('Error', err)
        }
        else {
            console.log('Employee deleted');
            res.json({
                success: true,
                message: 'Employee deleted',
            })
        }
    });
};

userController.register = function (req,res) {
    var register = new Register(req.body);

    register.save(function (err) {
        if (err) {
            console.log('Error', err)
        }
        else {
            console.log('Registeration has been completed');
            res.json({
                message: 'registeration is complete',
                user: register
            })
        }
    })
};

userController.login = function (req,res) {
    Register.findOne({username: req.param('username')}, function (err,users) {
        if (err) {
            console.log('Error',err);
            res.json('Error')
        }
        else if(!users) {
            console.log('Error, please register first');
            res.json({
                message: 'Please Register first'
            })
        }
        else if(req.param('password') != users.password) {
            console.log(req.param('password'));
            console.log(users.password);
            console.log('Wrong password');
            res.json({
                message:'wrong password'
            })
        }
        else {
            const payload = {
                passwd: users.password
            };
            var token = jwt.sign(payload, key, {
                expiresIn : 8800
            });
            res.json({
                success:true,
                message: 'Authentication successful',
                jwt_token: token
            });
        }
    })
};



module.exports = userController;
