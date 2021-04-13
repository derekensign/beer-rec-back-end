const models = require('../models')
const axios = require('axios')
const beerController = {}

beerController.search = async (req,res) => {

    console.log(req)
    try {
        let beers = await models.beer.findAll({
            where : {
                style: req.query.style
            }
        })
    
        console.log(beers)
        res.send(beers)

    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

beerController.favorite = async (req, res) => {

    console.log(req)
    try {
        const beer = await models.beer.findOne({
            where: {
                id: req.params.beerId
            }
        })

        console.log(beer)

        const user = await models.user.findOne({
            where: {
                id: req.params.userId
            }
        })

        console.log(user)

        await user.addBeer(beer)
        let result = await user.getBeers()
        res.json({beer, user, result})
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

module.exports = beerController