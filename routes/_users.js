var faker = require('faker');

module.exports = function() {
    var data = []
    for (let u = 0; u < 5; u++) {
        data.push({
            _id: faker.random.uuid(),
            email: faker.internet.email(),
            password: faker.internet.password()
        })
    }
    return data;
}