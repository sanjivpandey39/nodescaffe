const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home',{title: "Home page"});
});

router.get('/login', (req, res) => {
    res.send({name:"sanjiv"});
})

module.exports = router;