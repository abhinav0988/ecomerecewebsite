const productModel = require('../models/productModel')

let stringRegex = /^[A-Za-z]{1}[A-Za-z 0-9-_.]{0,1000}$/
let priceRegex = /^\d+(,\d{3})*(\.\d{1,2})?$/

const createProduct = async function (req, res) {
    try {

        let data = req.body

        

        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, message: "plzz enter some  data " })
        }


        let {title,price, quantity} = data

        // ------------------ Title validation ------------------------//

        if (!title) {

            return res.status(400).send({ status: false, message: "title is required" })
        }
        if (!stringRegex.test(title)) {

            return res.status(400).send({ Status: false, message: "title name is not valid" })
        }
        let duplicateTitle = await productModel.findOne({ title: title })

        if (duplicateTitle) {

            return res.status(400).send({ status: false, message: "title already exist" })
        }

        if (!price) {
            return res.status(400).send({ status: false, message: "price is required" })
        }
        if (!priceRegex.test(price)) {
            return res.status(400).send({ status: false, message: "plzz enter valid price" })
        }
        if (!quantity) {
            return res.status(400).send({ status: false, message: "quamtity is required" })
        }
        
        const productCreate = await productModel.create(data)
        let finalProduct= await productModel.findOne({_id:productCreate._id}).select({"__v": 0})
        return res.status(201).send({ status: true, message: "Success", data: finalProduct })
    }
    catch (err) {
        return res.status(500).send({ Status: false, message: err.message })
    }
}






module.exports.createProduct  = createProduct 