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

// userController.login = async (req, res) => {
//     try{
//         const user = await models.user.findOne({
//             where: {
//                 email: req.body.email
//             }
//         })

//     if (user.password === req.body.password) {
//         res.json({message: 'login success', user})
//     }
//     else {
//         res.status(401).json({ error: 'login failed' })
//     }
//     } catch (error) {
//         res.status(400).json({error: 'login failed'})
//     }
// }

module.exports = userController