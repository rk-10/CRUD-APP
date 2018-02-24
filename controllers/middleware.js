var jwt = require('jsonwebtoken');

var privatekey = 'kdirj34k22kdj4kli34sb';

var isauthenticated = function (req,res,next) {

    var token = req.body.token || req.params.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, privatekey, function (err,decoded) {
            if (err) {
                console.log('Error', err);
                res.json({
                    success: false,
                    message: 'This token is not valid'
                })
            }
            else {
                req.decoded = decoded;
                next()
            }
        })
    }
    else {
        res.json({
            success: false,
            message: 'No token provided'
        })
        //  res.status(403).send({
        //     success: false,
        //     message: 'No token provided'
        // });
    }
};

module.exports = isauthenticated;