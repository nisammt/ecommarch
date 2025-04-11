

const { adminSignup, adminLogin, checkAdmin } = require('../../controllers/adminController')
const {adminMiddile}= require('../../middlewares/adminMiddile')

const adminRouter = require('express').Router()


adminRouter.post('/admin-signup',adminSignup)
adminRouter.post('/admin-login',adminLogin)
adminRouter.get('/check-admin',adminMiddile,checkAdmin)
//adminRouter.get('/getallusers',adminMiddile,getallUsers)
//adminRouter.get('/check-admin',adminMiddile,checkAdmin)
//adminRouter.put ('/edituser', )

module.exports = adminRouter
