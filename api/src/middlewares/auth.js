const {verify} = require('jsonwebtoken')
const {JW_SECRET_ACCESS_TOKEN} = require('../config')
const {Users} = require('../models')
exports.auth =  (req, res, next) => {
    const authorization = req.headers.authorization
    console.log("",req.path)
    if(req.path==="/api/login"){
        next()
        return
    }
    // console.log(authorization)
    if (!authorization) {
        throw new Error("Unauthorized Access")
    }
    const accessToken = authorization.split(" ")[1]
    // console.log(accessToken)
    const payload = verify(accessToken, JW_SECRET_ACCESS_TOKEN)
    console.log("----", payload)
    if(!payload){
        throw new Error("Not a registered user")
    }
    if(payload.type!=='accessToken'){
        throw new Error("Unauthorized")
    }
    const user = Users.findById(payload.userId).then(user=>{

    })
    if(!user){
        throw new Error("Not a registered User")
    }
    console.log("user---",user)
    next()
}