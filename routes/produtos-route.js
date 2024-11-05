const express = require('express')
const route = express.Router();

route.get('/', (req, res) => {
    res.send('Uma Lista Enorme De Produtos')
})

route.get('/promo', (req, res) => {
    res.send("todos os produtos em promoção")
})

route.get('/pesquisa', (req, res) => {
    res.send('Voce Acaba De Pesquisar: ' + req.query.nome)
})

module.exports = route