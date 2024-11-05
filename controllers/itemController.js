const produtos = require('../routes/produtos-route')
const express = require('express')
const app = express()
const home = require('../routes/home-route')

app.use('/', home)

app.use('/items', produtos)

module.exports = app