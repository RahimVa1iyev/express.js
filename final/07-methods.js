const express = require('express')
const {people} = require('./data.js')

const app = express() ; 

app.use(express.static('./methods-public'))

// parse json
app.use(express.json())

// parse form-data
app.use(express.urlencoded({extended :false}))

app.get('/api/people',(req,res) =>{
    res.status(200).json({success:true , data : people})
})

// json
app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success :false , msj: 'please provide name value'})
    }

    res.status(201).json({success:true,person:name})
})

// form-data
app.post('/login', (req,res) => {
   const {name} = req.body
   if(!name){
    return res.status(401).send("Unauthorized")
   }
   res.status(200).send(`<h1>Hello ${name}</h1>`)
})

app.put('/api/people/:id',(req,res) => {
    const {id} = req.params
    const {name} =req.body
    const person = people.find(person => person.id === Number(id))
    if(!person){
        return res
        .status(404)
        .json(`Person not found by id ${id}`)
    }

    const updatedPeople = people.map(person =>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })

    res.status(200).json({success: true , data : updatedPeople})
})

app.delete('/api/people/:id' , (req,res) => {
    const {id} = req.params
    const person = people.find(person => person.id === Number(id))
    if(!person){
        return res
        .status(404)
        .json(`Person not found by id ${id}`)
    }

    const deletedPerson = people.filter(person => person.id !== Number(id))
    return res.status(200).json({success:true , data : deletedPerson})

})


app.listen(5000,(req,res)=>{
    console.log('Server listening port 5000...');
})