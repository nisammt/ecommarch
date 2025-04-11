const { createProduct, productDetails, getAllproduct, updateProduct, deleteProduct } = require('../../controllers/productController')
const { adminMiddile } = require('../../middlewares/adminMiddile')

const { upload } = require('../../middlewares/multermiddile')

const productsRouter = require('express').Router()

productsRouter.post("/create-product", upload.single("image"),createProduct)
productsRouter.get("/getproduct",getAllproduct)
productsRouter.get("/products/:id",productDetails)
productsRouter.put("/update-product/:id",adminMiddile, updateProduct)
productsRouter.delete("/delete-product/:id",adminMiddile ,deleteProduct)



module.exports = productsRouter