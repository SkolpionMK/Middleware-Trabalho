const express = require('express')
const route = express.Router();
const PegaIP = require('../middleware/pegueiteuIP')

route.get('/', (req, res) => {
    res.send(PegaIP(req))
})

module.exports = route