const express = require('express');
const router = express.Router();
const {getLogin, getRegistration,saveRegistration} = require('../controllers/authController');

router.get('/', (req, res) => {
    res.render('home',{title: "Home page"});
});

router.get('/login', getLogin);
router.get('/register', getRegistration);
router.post('/register', saveRegistration);

module.exports = router;