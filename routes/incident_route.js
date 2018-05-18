'use strict';

const { Router } = require('express');

const router = Router();

const passport = require("passport");

const {
  addIncident, getIncidents, stopSendingNotifications
} = require('../controllers/incidentCtrl');

const {isLoggedIn} = require('../controllers/authCtrl');

router.post('/newIncident', isLoggedIn, addIncident);

router.get('/incidents', isLoggedIn, getIncidents);

router.patch('/noticationRead', isLoggedIn, stopSendingNotifications);

module.exports = router;