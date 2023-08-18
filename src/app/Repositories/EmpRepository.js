const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class EmpRepository {
    async FindAll() {
        const QtdTot = await prisma.QtdDias.count();
        const json = {
            "count": QtdTot,
            "ok": true
        };
        console.log(json);
        return json

    }

    async Create() {
        const New = await prisma.QtdDias.create({
            data: {}
        });
        console.log(New);
        return New

    }

    async delete() {
        const DelTot = await prisma.QtdDias.deleteMany();
        console.log(DelTot);
        return DelTot

    }


};




module.exports = new EmpRepository();