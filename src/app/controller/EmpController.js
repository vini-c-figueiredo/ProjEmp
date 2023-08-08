const EmpRepository = require('../Repositories/EmpRepository');
const UserRepository = require('../Repositories/UserRepository');
const ServiceCrypt = require('../Services/Crypt');

class EmpController {
    async create(request, response) {
        const { token } = request.headers;


        const New = await EmpRepository.Create();
        response.json(New);


    }

    async index(request, response) {
        const { token } = request.headers;



        const Tot = await EmpRepository.FindAll();
        response.json(Tot);


    }

    async delete(request, response) {
        const { token } = request.headers;



        const del = await EmpRepository.delete();
        response.json(del);


    }


};



module.exports = new EmpController(); 