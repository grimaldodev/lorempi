var faker = require('faker');

module.exports = function() {
    var data = []
    for (let u = 0; u < 20; u++) {
        data.push({
            _id: faker.random.uuid(),
            content: faker.lorem.paragraph(),
            creation: faker.date.past(),
            parent: faker.random.uuid()
        })
    }
    return data;
}