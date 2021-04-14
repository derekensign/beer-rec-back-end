const userController = require('../controllers/userController')

const express = require('express')
const userRoutes = express.Router()
const axios = require('axios')

userRoutes.post('/', userController.createUser)
userRoutes.post('/login', userController.login)
userRoutes.get('/beers', userController.profile)

module.exports = userRoutes