How to create a easy fake api in Codeanywhere
===

How many times you create google _"json fake api"_ to create a file to emulate some response, I did it a lot until I find 2 nice node pakages **json-server** & **fakerjs** using together you can create a very simple fake api to consume for your PoC _(Prove of Concepts)_

Lets start
---

Clone this repo on codeanywhere once, enter the projecct

```bash
sudo apt update
#confirm node
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt-get install nodejs
nodejs -v
#v10.17.0
npm install
```

_**That's it!**_

Usage
---

**Setup the server**

Just start the server on your ssh console in the projecct

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

\{^_^}/ hi!

  Loading index.js
  Done

  Resources
  http://localhost:3000/comments
  http://localhost:3000/posts
  http://localhost:3000/users

  Home
  http://localhost:3000
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
