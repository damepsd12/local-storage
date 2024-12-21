// routes/authRoutes.js
const express = require('express')
// const { Router } = require("express");
const signUp = require("../controllers/signUp");
const login = require("../controllers/login");
const auth = require("../controllers/auth");
const user = require("../controllers/user"); 
const dashboard = require("../controllers/dashboard");
//const express = require('express');

const signUpHandler = require('../controllers/signUp');
const loginHandler = require('../controllers/login');

const router = express.Router();

// Route pour l'inscriptoin
router.post('/signup', signUpHandler);

// Route POST pour la connexion
router.post('/login', loginHandler);



module.exports = router;   