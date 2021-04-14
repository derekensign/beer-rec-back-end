const models = require('../models')

const userController = {}

userController.createUser = async (req, res) => {
    try {
        const user = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password 
        })
        console.log(user)
        res.json({ message: 'signup successful', user})
    } catch (error) {
        res.status(400)
        res.json({ error: 'email already taken'})
    }
}

userController.login = async (req, res) => {
    try{
        const user = await models.user.findOne({
            where: {
                email: req.body.email
            }
        })

    if (user.password === req.body.password) {
        res.status(200)
        res.json({message: 'login success', user})
    }
    else {
        res.status(401).json({ error: 'invalid credentials' })
    }
    } catch (error) {
        res.status(400).json({error: 'login failed'})
    }
}

userController.profile = async (req,res) => {

    console.log(req)
    try {
        const user = await models.user.findOne({
            where: {
                id: req.query.id
            }
        })
        
        beers = await user.getBeers()
        console.log(beers)
        res.send(beers)

    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

module.exports = userController
