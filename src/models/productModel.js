const mongoose=require('mongoose')

const productSchema= new mongoose.Schema({
  title: {type:String, required:"title is required", trim:true, unique: true},
  price: {type:Number,required:"price is required"},
  quantity:{type:Number,required:true},
  deletedAt: {type:Date}, 
  isDeleted: {type:Boolean, default: false},
},{timestamps:true})

module.exports=mongoose.model("product",productSchema)