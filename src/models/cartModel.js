const mongoose=require("mongoose")
const ObjectId=mongoose.Schema.Types.ObjectId

const cartSchema=new mongoose.Schema({

    userId:{
        type:ObjectId,
        ref:'userModel',
        default:"guest"
    },

    productId:{
            type:ObjectId,
            required:true,
            ref:'productModel',
        },
        

        
       },  {timestamps:true})
       
    

module.exports=mongoose.model('carts',cartSchema)