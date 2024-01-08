const express=require('express') 
const app=express()
require('dotenv').config()

const catrgoryRoute=require('./routes/categoryRoute')

// app.use('/',(req,res)=>{
//     // res.json({message:'This is a express server'})
// })

app.use('/api',catrgoryRoute)

const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})

