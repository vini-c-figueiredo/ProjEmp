const UserRepository = require('../Repositories/UserRepository');
const bcrypt = require('bcrypt');

class Crypt {
    async Crypto(password) {
        const saltRounds = 10;
        const pass = await bcrypt.hash(password, saltRounds);

        return pass;
    }

    async Descrypto(password, hashedPassword) {
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    }
};



module.exports = new Crypt();