'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./auth_route'));
router.use(require('./user_route'));
router.use(require('./vehicle_route'));


module.exports = router;