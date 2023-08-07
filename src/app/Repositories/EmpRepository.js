const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class EmpRepository {
    async FindAll() {
        const QtdTot = await prisma.QtdDias.count();
        return QtdTot

    }

    async Create() {
        const New = await prisma.QtdDias.create({
            data: {}
        });
        return New

    }

    async delete() {
        const DelTot = await prisma.QtdDias.deleteMany();
        return DelTot

    }


};




module.exports = new EmpRepository();