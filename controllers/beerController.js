const models = require('../models')
const axios = require('axios')
const beerController = {}

beerController.search = async (req,res) => {
    try {
        let beers = await models.beer.findAll({
            where : {
                style: req.body.style
            }
        })
    
        console.log(beers)
        res.send(beers)

    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

module.exports = beerController