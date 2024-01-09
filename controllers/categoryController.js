const Category=require('../models/categoryModel')

exports.testFunction=(req,res)=>{
    res.send('This is from the catrgory controller')
}

//to insert the category
exports.postCategory=async(req,res)=>{
    let category=new Category({
        category_name:req.body.category_name
        // database name key    // user input key
    })
    category=await category.save()
    if(!category){
        return res.status(400).json({error:'Somethings went wrong'}) // bad request 
    }
    res.send(category)
}

// to retrive all data 
exports.categoryList=async(req,res)=>{
    const category = await Category.find()
    if(!category){
        return res.status(400).json({error:'Somethings went wrong'})
    }
    res.send(category)
}

// to view category details
exports.categoryDetails=async(req,res)=>{
    const category= await Category.findById(req.params.id)
    if(!category){
        return res.status(400).json({error:'Somethings went wrong'})
    }
    res.send(category)    
}

// to update category 
exports.updateCategory=async(req,res)=>{
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            category_name:req.body.category_name
        },
        {new:true}
    )
    if(!category){
        return res.status(400).json({error:'Somethings went wrong'})
    }
    res.send(category)  
}
