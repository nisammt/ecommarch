const { createCategory, getCategory } = require('../../controllers/categoryController')
const { upload } = require('../../middlewares/multermiddile')
const categoryRoter = require('express').Router()


categoryRoter.get("/categorylist", getCategory) 
categoryRoter.post("/create-category", upload.single("image"),createCategory)
categoryRoter.put ("edit-category/:id"), 
categoryRoter.delete("delete-category/:id")
categoryRoter



module.exports = categoryRoter




