const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', function(req, res, next){
    res.send({type: "GET"});
});

router.post('/users', function(req, res, err){
    User.create(req.body).then(function(user){
        res.send(user);
    });
});

module.exports = router;