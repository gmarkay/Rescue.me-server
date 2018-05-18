# Rescue.me-server

Rescue.me is an Ionic V1 Mobile application built for android leveraging Cordva plugins, and google maps API. 
Using Rescue.me users with car troubles can request aid by pinning their location via google maps. Users within five miles
will be notified, and given the option to rescue the stranded motorist.

Please find the front end for these server here:https://github.com/gmarkay/Rescue.me-ionic



## Technologies
 
 - Node.js
 
 - Sequelize

  -PSQL
  
 - facebook OAUTH
 
 - ngrok
  
  ### If you would like to run Rescue.me locally, follow these instructions 
  $ https://github.com/gmarkay/Rescue.me-server.git
  $ npm install
  $ mkdir config && touch config/config.json && touch config/authConfig.js
  in config.json add
  ```
  {
  "development": {
    "database": "AAAA",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },

  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

  ```
 You will now need to create a facebook developer account and register this app
see Creating a New Facebook Application in this tutorial
 https://codeburst.io/node-js-rest-api-facebook-login-121114ee04d8
 once your app is registered
 add this to your authConfig.js 
 'use strict';

const FacebookStrategy = require('passport-facebook').Strategy;
```
var User = require('../models/').User

module.exports.loginStrat = new FacebookStrategy({
  clientID: 'Your client Id',
  clientSecret: 'Your client Secret',
  callbackURL: "Url we will create shortly"

},

function (accessToken, refreshToken, profile, cb) {
  User.findOrCreate({where: {fb_id: profile.id, display_name: profile.displayName},})
  .then(()=>{
    return cb(null, profile);
  });
});

```
Once that is set up run your server

$node server.js
In another terminal window 
$ ngrok http 8080
You must add the ngrok url provided, + /auth/facebook/callback to your facebook developer app under
facebook login > settings> Valid OAuth Redirect URIs.

add it to the callbackUrl in authConfig.js and also add it to the constant on the front end: https://github.com/gmarkay/Rescue.me-ionic
