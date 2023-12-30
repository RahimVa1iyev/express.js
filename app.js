const express = require('express')
const {products} = require('./data.js')
const app = express()

app.get('/' ,(req,res) => {
    res.send("<h1>Home Page</h1> <a href='/api/products' >products</a>")
})

app.get('/api/products', (req,res) =>{
    const newProducts = products.map(product => {
        const {id,name,image} = product
        return {id,name,image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req,res)=>{
    const {productID} = req.params
    console.log(productID);

    const singleProduct = products.find((product)=> product.id === Number(productID) )

    if(!singleProduct) return res.status(404).send("<h1>Products not found</h1>")
    
    return res.json(singleProduct)
})

app.get('/api/v1/query', (req,res) => {
    const {search,limit} = req.query

    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>  product.name.startsWith(search))
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }

    return res.json(sortedProducts)

})

app.listen(5000,(req,res)=>{
    console.log('Server listening port 5000...');
})