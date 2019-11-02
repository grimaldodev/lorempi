How to create a easy fake api
===

How many times you create google _"json fake api"_ to create a file to emulate some response, I did it a lot until I find 2 nice node pakages **json-server** & **fakerjs** using together you can create a very simple fake api to consume for your PoC _(Prove of Concepts)_

Lets start
---

Instal global your node packages:
```bash
npm install -g json-server
npm install --save faker
```
_**That's it!**_

Usage
---

**Setup the server**

To use them, only create a new folder, inside this new folder link the **faker** package, then create a file to export your new api routes, let me use some code to explain.

``` bash
mkdir my-fake-api
cd my-fake-api
npm link faker
touch index.js
```
Once you have your _index.js_, open it in any code editor and import the package and export your data object as module

`~/my-fake-api/index.js`
``` javascript
//Import the package faker
var faker = require('faker');

//Each key of this obect represents an enpoint
const data = {
  posts: []
}

module.exports = function () {
  //Iterate 20 times means, create 20 records
  for (let i = 0; i < 20; i++) {
    /**
     * Push an object every iteration
     * executing faker methods filling the keys
     **/
    data.posts.push({
      _id: faker.random.uuid(),
      content: faker.lorem.paragraph(),
      creation: faker.date.past()
    })
  }
  // Once is completed return your new object
  return data;
}
```

**Run JSON Run!**

Lets test this beauty, in your terminal execute the command `json-server [file-name]` and _voilà!_ you have your new server.

```bash
# you can use a specific port!!!
~/my-fake-api: json-server index.js --port 4000

\{^_^}/ hi!

  Loading index.js
  Done

  Resources
  http://localhost:4000/posts

  Home
  http://localhost:4000
```

Conclution
---

This couple of libraries will save you alot of time, also they are really exentensive, in the case of _**json-server**_ you can emulate a simple **CRUD** to create, delete or update any record.

Dig into the documentation and save time on your next PoC, Demo or Simple proyect.

Documentation
===
json-server: https://github.com/typicode/json-server

fakerjs: https://github.com/marak/Faker.js/

> Invest time in knowledge is save time in the future
