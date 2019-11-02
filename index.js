var faker = require('faker');

const data = {
  posts: [],
  users:[]
}

module.exports = function () {
  for (let i = 0; i < 20; i++) {
    data.posts.push({
      _id: faker.random.uuid(),
      content: faker.lorem.paragraph(),
      creation: faker.date.past()
    })
  }
  return data;
}
