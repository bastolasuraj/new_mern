const {Users} = require('../models');
const bcrypt = require('bcrypt')
const {sign, verify} = require("jsonwebtoken")
const {ACCESS_TOKEN_EXP, JW_SECRET_ACCESS_TOKEN,JW_SECRET_REFRESH_TOKEN,REFRESH_TOKEN_EXP} = require('../config')
exports.userList = async (req, res) => {
    // res.send("User List")
    const list = await Users.find()
    res.status(200).send({
        data: list,
    })
}
exports.userCreate = (req, res) => {
    new Users(req.body)
        .save()
        .then((newUser) => {
            res.status(301).send({
                message: "User Created Successfully",
                data: newUser
            })
        })
        .catch((error) => {
            // throw new Error("Unable to create User")
            res.status(500).send({
                data: null,
                error: error.message
            })
        })
}
exports.userDetails = async (req, res) => {
    const user = await Users.findById(req.params.id)
    res.status(200).send({
        data: user,
    })
}
exports.userUpdate = async (req, res) => {
    let user = await Users.findById(req.params.id)
    if (user) {
        console.log(req.body)
        user = await Users.updateOne({_id: req.params.id}, {$set: req.body})
    }
    res.send({
        data: user,
    })
}
exports.userDelete = async (req, res) => {
    let user = await Users.findById(req.params.id)
    if (user) {
        // console.log(req.body)
        user = await Users.remove({_id: req.params.id})
    }
    res.send({
        data: user,
    })
    // res.send("Delete User")
}
exports.login = async (req, res) => {
    const user = await Users.findOne({username: req.body.username})
    if (user) {
        let accessToken
        let refreshToken
        bcrypt.compare(req.body.password, user.password, (error, matched) => {
            if (error) throw new Error("Password Mismatched")
            // console.log("Password Matched :: ",matched)
            if (matched) {
                accessToken = sign({
                    userId: user.id,
                    type: "accessToken"
                }, JW_SECRET_ACCESS_TOKEN, {expiresIn: ACCESS_TOKEN_EXP})
                // console.log(accessToken)
                refreshToken = sign({
                    userId: user.id,
                    type: "refreshToken"
                }, JW_SECRET_REFRESH_TOKEN, {expiresIn: REFRESH_TOKEN_EXP})
                // console.log(refreshToken)

            }
            res.status(200).send({
                accessToken:accessToken,
                refreshToken:refreshToken,
                username:user.username,
                expiresIn:ACCESS_TOKEN_EXP,
                usertype:user.usertype?user.usertype:""
            })
            // res.cookie("refreshToken",refreshToken)
        })
    } else {
        throw new Error("Unauthorized Access")
    }

    // if(accessToken)
}