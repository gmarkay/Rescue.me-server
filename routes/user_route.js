'use strict';

const { Router } = require('express');

const router = Router();

const passport = require("passport");


const {
  getUsers, addDefaultLocation, saveUserLocation, getUserLocation
} = require('../controllers/userCtrl');

const {isLoggedIn} = require('../controllers/authCtrl');


router.get('/profile', isLoggedIn, getUsers);

router.get('/userLocation', getUserLocation);

router.patch('/addCurrentLocation', isLoggedIn, saveUserLocation);

router.patch('/addlocation', isLoggedIn, addDefaultLocation);


module.exports = router;