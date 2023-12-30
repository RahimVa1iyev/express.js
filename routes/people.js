const express = require('express')
const router = express.Router()
let {people} = require('../data')


router.get('/',(req,res) =>{
    res.status(200).json({success:true , data : people})
})

// json
router.post('/',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success :false , msj: 'please provide name value'})
    }
    
    res.status(201).json({success:true,person:name})
})


router.put('/:id',(req,res) => {
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

router.delete('/:id' , (req,res) => {
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


module.exports = router