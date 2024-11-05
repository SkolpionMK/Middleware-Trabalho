const express = require('express')
const app = express()
const PORT = 3000
const itens = require('./controllers/itemController')

app.use('/', itens)

app.listen(PORT, () => {
    console.log('Servidor Rodando')
})