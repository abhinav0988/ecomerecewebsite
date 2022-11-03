const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, required: "First Name is Required", trim: true },
    email: { type: String, required: "Email is Required", unique: true, trim: true, lowercase: true },
    Number: { type: Number, required: "Mobile is Required", unique: true, trim: true },
    password: { type: String, required: "Password is Required", trim: true }, 

}, { timestamps: true })

module.exports = mongoose.model("user", userSchema)