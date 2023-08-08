const UserRepository = require('../Repositories/UserRepository');
const CrypService = require('../Services/Crypt');

class UserController {
    async create(request, response) {
        const { username, password } = request.body;
        const pass = await CrypService.Crypto(password);

        const fi = await UserRepository.Create(username, pass);

        response.send('Usuário criado!');

    }

    async delete(request, response) {

    }


};



module.exports = new UserController(); 