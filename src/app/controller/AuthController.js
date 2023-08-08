const jwt = require('jsonwebtoken');
const UserRepository = require('../Repositories/UserRepository');
const ServiceCrypt = require('../Services/Crypt');
require('dotenv').config();

class Auth {
    async Token(request, response) {
        const Secret = process.env.Secret;
        const { username, password } = request.body;
        const hashedPassword = await UserRepository.Find(username);

        if(!hashedPassword[0].id) {
            return response.status(404).json({ error:'Login invalid!' });
        }

        const log = await ServiceCrypt.Descrypto(password, hashedPassword[0].password);

        if(!log) {
            return response.status(404).json({ error:'Login invalid!' });
        }

        const token = jwt.sign({ id: hashedPassword.id }, Secret, {expiresIn: 60});

        return response.json({Auth: true, token});



}


}




module.exports = new Auth();