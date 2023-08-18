const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class PingRepository {
    async ping() {
        try {
            const ping = await prisma.user.count();
            return true;
        }
        catch {
            return false;
        };
};

};


module.exports = new PingRepository();