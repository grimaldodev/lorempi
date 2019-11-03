How to create a easy fake api
===

How many times you create google _"json fake api"_ to create a file to emulate some response, I did it a lot until I find 2 nice node pakages **json-server** & **fakerjs** using together you can create a very simple fake api to consume for your PoC _(Prove of Concepts)_

Lets start
---

Instal global your node packages:
```bash
npm install -g json-server
```
Clone this repo and init
```bash
git clone git@github.com:grimaldodev/lorempi.git
cd lorempi
npm install
```

_**That's it!**_

Usage
---

**Setup the server**

Just navigate inside the folder and start the server

``` bash
npm start
```

Customize
---

Inside the folder `routes` each file with lower dash will respresents a route, like `_users.js` will have the logit to create the users. To create a new route add the file with following the name convention and import the faker module, exports the object and import it into `routes/index.js`.

`~/routes/_[rute-name].js`
``` javascript
//Import the package faker
var faker = require('faker');

module.exports = function () {
  var data = [];
  //Iterate many times as you wish
  for (let i = 0; i < 20; i++) {
    /**
     * Push an object every iteration
     * executing faker methods filling the keys
     **/
    data.push({
      ...
    })
  }
  // Once is completed return your new object
  return data;
}
```

**Run JSON Run!**

Lets test this beauty, in your terminal execute the command `npm start` and _voilà!_ you have your new server.

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
