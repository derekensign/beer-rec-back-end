const beerController = require('../controllers/beerController')

const express = require('express')
const beerRoutes = express.Router()

beerRoutes.get('/search', beerController.search)
beerRoutes.post('/:userId/favorite/:beerId', beerController.favorite)

module.exports = beerRoutes