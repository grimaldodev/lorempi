var faker = require('faker');

module.exports = function() {
    var data = []
    for (let p = 0; p < 10; p++) {
        data.push({
            _id: faker.random.uuid(),
            content: faker.lorem.paragraph(),
            creation: faker.date.past()
        })
    }
    return data;
}