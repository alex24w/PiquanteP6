const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

/* Route to the controllers that allows identification
   Route vers le controllers qui permet l'identifications */
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;