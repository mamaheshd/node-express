const mongoose=require('mongoose')

const categorySchema=new mongoose.Schema({
    category_name:{
        type:String,
        require:true,
        unique:true,
        trim:true // remove whitespace
    }
},{timestamps:true})
// createdAt
// updatedAt

module.exports=mongoose.model('Category',categorySchema)