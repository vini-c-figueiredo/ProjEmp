const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class UserRepository {
    async Find(username) {
        const hashedPassword = await prisma.user.findMany({
            select: {
                password: true
            },
            where:{
                user: username
            }
        });

        return hashedPassword;

    }

    async Create(username, password) {
        const NewUser = await prisma.user.Create({
            data: {
                user: username,
                password: password
            }
        });

        return NewUser;

    }

    async delete(id) {

    }


};




module.exports = new UserRepository();