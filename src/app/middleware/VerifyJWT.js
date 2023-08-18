const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthJWT {
    async verify(request, response, next) {
        const Secret = process.env.Secret;
        console.log('Entrou verify');
        const { token } = request.body;
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