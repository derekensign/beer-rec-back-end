const beerController = require('../controllers/beerController')

const express = require('express')
const beerRoutes = express.Router()

beerRoutes.get('/search', beerController.search)
beerRoutes.post('/:beerId/favorite/', beerController.favorite)



module.exports = beerRoutes