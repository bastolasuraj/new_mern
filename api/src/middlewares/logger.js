const {API_KEY} = require("../config")
exports.logger = (req, res, next)=>{
    // console.log("-------",req.headers.authorization)
    req.appId = API_KEY
    next();//moving forward
}
