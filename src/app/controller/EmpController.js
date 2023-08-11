const EmpRepository = require('../Repositories/EmpRepository');
const UserRepository = require('../Repositories/UserRepository');
const ServiceCrypt = require('../Services/Crypt');

class EmpController {
    async create(request, response) {
        const { token } = request.headers;


        const New = await EmpRepository.Create();
        return response.json(New);


    }

    async index(request, response) {
        const { token } = request.headers;



        const Tot = await EmpRepository.FindAll();
        return response.json(Tot);


    }

    async delete(request, response) {
        const { token } = request.headers;



        const del = await EmpRepository.delete();
        return response.json(del);


    }


};



module.exports = new EmpController(); 