const express = require('express')
const {products} = require('./data.js')
const logger = require('./logger.js')
const authorize = require('./authorize.js')
const app = express()


app.use('/api/products',[authorize,logger])

app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.get('/about',(req,res)=>{
    res.send("About  Page")
})

app.get('/api/products',(req,res)=>{
    console.log(req.user);
    res.send("Products  Page")
})

app.get('/api/v1/tasks',(req,res)=>{
    res.send("Tasks  Page")
})

app.listen(5000,(req,res)=>{
    console.log('Server listening port 5000...');
})