const express = require('express')
const router = express.Router()

router.post('/', (req,res) => {
    const {name} = req.body
    if(!name){
     return res.status(401).send("Unauthorized")
    }
    res.status(200).send(`<h1>Hello ${name}</h1>`)
 })

 module.exports = router