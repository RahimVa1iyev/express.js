const authorize = (req,res,next) =>{
    const {user} = req.query

    if(user === "rahim"){
        req.user ={name:"rahim", id:2}
        next()
    }
    else{
        res.status(401).send("UNAUTHORIZED")
    }
}

module.exports = authorize