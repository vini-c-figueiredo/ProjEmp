const EmpRepository = require('../Repositories/EmpRepository');

class EmpController {
    async create(request, response) {
        const New = await EmpRepository.Create();
        response.json(New);


    }

    async index(request, response) {
        const Tot = await EmpRepository.FindAll();
        response.json(Tot);


    }

    async delete(request, response) {
        const del = await EmpRepository.delete();
        response.json(del);


    }


};



module.exports = new EmpController(); 