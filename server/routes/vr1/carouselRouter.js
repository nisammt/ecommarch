const { addCarousel, getCarousel } = require("../../controllers/carouselController");
const { adminMiddile } = require("../../middlewares/adminMiddile");


const {upload} = require('../../middlewares/multermiddile')

const carouselRouter = require('express').Router()

carouselRouter.post("/add-carousel", adminMiddile, upload.single("image"),addCarousel)
carouselRouter.get("/get-carousel", getCarousel)
carouselRouter.post("/search-carosel", )
 


module.exports = carouselRouter