const vr1Router = require('./vr1')

const mainRoute = require('express').Router()


mainRoute.use('/vr1', vr1Router)
//mainRoute.use('/product',vr1Router)


module.exports = mainRoute