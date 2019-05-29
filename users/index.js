const db = require('../db/connection');
const users = db.get('users');

const express = require('express');
const router = express.Router();

router.get('/getUsers', (req, res, next) => {
    users.find().then(doc => {
        res.json(doc)
    })
})

module.exports = router;