const mongoose = require("mongoose")
const cartModel = require('../models/cartModel')
const userModel = require('../models/userModel')
const productModel = require('../models/productModel')


const isValidObjectId = function (ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId)
}

const createCart = async (req, res) => {
    try {

        const data = req.body
        

        let { productId, userId, cartId } = data

        if (Object.keys(data).length === 0) {
            return res.status(400).send({ status: false, messsage: "Please enter some data" })
        }

        if (!isValidObjectId(productId)) {
            return res.status(400).send({ status: false, messsage: "plzz enter valid productId" })
        }

        const isProductPresent = await productModel.findOne({ _id: productId, isDeleted: false })

        if (!isProductPresent) {
            return res.status(404).send({ status: false, messsage: `product not found by this prodct id ${productId}` })
        }
        const isuserpresent = await userModel.findOne({_id:userId,isDeleted:false})
        if(!isuserpresent ){
            return res.status(404).send({ status: false, messsage: `user not found by this prodct id ${productId}` })

        }
        
      if (cartId) {
            if (!isValidObjectId(cartId)) {
                return res.status(400).send({ status: false, messsage: "plzz enter valid cartId" })
            }
        }
        

        if (checkCart) {
            if (!cartId) {
                return res.status(400).send({ status: false, messsage: "plzz enter cartId" })
            }

            let existCart = await cartModel.findOne({ _id: cartId, userId: userId })

            if (!existCart) {
                return res.status(400).send({ status: false, messsage: "does not exist cartId with given user / cart does not exist" })
            }

        }

        
        let createCart = await cartModel.create(data)

        
        return res.status(201).send({ status: true, message: "cart added", data: createCart })

    } catch (err) {
        return res.status(500).send({ Status: false, message: err.message })
    }
}

module.exports.createCart = createCart