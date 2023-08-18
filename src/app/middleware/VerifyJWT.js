const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthJWT {
    async verify(request, response, next) {
        const Secret = process.env.Secret;
        const token = request.headers['x-access-token'];
        jwt.verify(token, Secret, (err, decoded ) => {
            if(err) {
                return response.status(401).end();
            };

            request.userId = decoded.userId;
            next();
        });





        


    }


}


module.exports = new AuthJWT();