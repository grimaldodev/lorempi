var faker = require('faker');

const data = {
  posts: [],
  users:[],
  comments: []
}

for (let u = 0; u < 10; u++) {
  data.users.push({
    _id: faker.random.uuid(),
    email: faker.internet.email(),
    password: faker.internet.password()
  })
}

for (let i = 0; i < 10; i++) {
  data.posts.push({
    _id: faker.random.uuid(),
    content: faker.lorem.paragraph(),
    creation: faker.date.past()
  })
}

for(let j = 0; j < 20; j++) {
  data.comments.push({
    _id: faker.random.uuid(),
    content: faker.lorem.paragraph(),
    creation: faker.date.past(),
    parent: faker.random.uuid()
  })
}

module.exports = function () {
  return data;
}

