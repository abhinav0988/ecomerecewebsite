let express = require("express")
let router = express.Router()
let UserController = require("../controller/userController")
let ProductController = require("../controller/productController")
let CartController = require("../controller/cartController")
// let mid = require("../midlleware/auth")


router.post("user",UserController.createUser)
router.post("login",UserController.userLogin)
router.post("product",ProductController.createProduct )
router.post("cart",CartController.createCart)

module.exports = router