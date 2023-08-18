const EmpRepository = require('../Repositories/EmpRepository');

class EmpController {
    async create(request, response) {

        const New = await EmpRepository.Create();
        return response.json(New);


    }

    async index(request, response) {

        const Tot = await EmpRepository.FindAll();
        return response.json(Tot);


    }

    async delete(request, response) {

        const del = await EmpRepository.delete();
        return response.json(del);


    }


};

module.exports = new EmpController(); 