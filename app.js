const express = require('express')
const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth')
const app = express() 

app.use(express.static('./methods-public'))


// parse json
app.use(express.json())

// parse form-data
app.use(express.urlencoded({extended :false}))

// form-data

app.use('/login',authRouter)

app.use('/api/people',peopleRouter)


app.listen(5000,(req,res)=>{
    console.log('Server listening port 5000...');
})