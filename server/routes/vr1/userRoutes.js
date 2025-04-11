const {login, logout, userCheking, forgotPassword, resetPassword, deleteUser, getUserd9etails, updateUser } = require('../../controllers/ooouserController')
const { userMiddile } = require('../../middlewares/userMiddile')
const {adminMiddile} = require ('../../middlewares/adminMiddile')
const { userSignup, userLogin, userProfile, userLogout, userCheck, getallUsers, getUserdetails } = require('../../controllers/userController')

const userRouter = require('express').Router()


userRouter.post('/login',userLogin)
userRouter.get('/profile',userMiddile,userProfile)
userRouter.post('/logout',userLogout)
userRouter.get('/user-check' ,userMiddile,userCheck)
userRouter.get('/users',adminMiddile,getallUsers)
userRouter.get('/user-details/:id', adminMiddile,getUserdetails)

//userRouter.post('/forgotpwd', forgotPassword)
userRouter.post('/reset',resetPassword) 

userRouter.put('/update-user', adminMiddile,updateUser)




module.exports = userRouter