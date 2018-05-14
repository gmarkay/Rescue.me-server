'use strict';

const { Router } = require('express');

const router = Router();

const passport = require("passport");


const {
  getUsers, addDefaultLocation
} = require('../controllers/userCtrl');

const {isLoggedIn} = require('../controllers/authCtrl');


router.get('/profile', isLoggedIn, getUsers);

router.patch('/addlocation', isLoggedIn, addDefaultLocation);


module.exports = router;