const { getCart, addtoCart, deleteCart, productRemove } = require("../../controllers/cartController");
const { userMiddile } = require("../../middlewares/userMiddile");

const cartRouter  =require("express").Router();
cartRouter.get('/getcart',userMiddile, getCart);
cartRouter.post('/addcart',userMiddile, addtoCart);
cartRouter.delete('/deletecart-item',productRemove);
cartRouter.delete('/clearcart',deleteCart );
module.exports = cartRouter;




