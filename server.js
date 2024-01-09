const express=require('express') 
const app=express()
require('dotenv').config()
const morgan=require('morgan')
require('./db/connection')

const catrgoryRoute=require('./routes/categoryRoute')

// app.use('/',(req,res)=>{
//     // res.json({message:'This is a express server'})
// })

// middlewere
app.use(morgan('dev'))

// route
app.use('/api',catrgoryRoute)

const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})

