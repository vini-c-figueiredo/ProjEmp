const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthJWT {
    async verify(request, response, next) {
        const Secret = process.env.Secret;
        const token = request.headers['x-access-token'];;
        console.log(token);
        jwt.verify(token, Secret, (err, decoded ) => {
            if(err) {
                console.log('Deu ruim');
                return response.status(401).end();
            };
            console.log('Deu bom');

            request.userId = decoded.userId;
            next();
        });





        


    }


}


module.exports = new AuthJWT();