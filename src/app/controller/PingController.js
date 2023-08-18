const PingRepository = require('../Repositories/PingRepository');

class PingController {
    async ping(request, response) {
        const ping = await PingRepository.ping();

        return response.json({ result: ping });

    }
}



module.exports = new PingController(); 