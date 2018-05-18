'use strict';

const { Router } = require('express');

const router = Router();

const passport = require("passport");

const {
 addVehicle, getVehicles
} = require('../controllers/vehicleCtrl');

const {isLoggedIn} = require('../controllers/authCtrl');


router.get('/vehicles', isLoggedIn, getVehicles);

router.post('/newCar', isLoggedIn, addVehicle);

module.exports = router;