const controllers = require("../controllers")
// const {auth} =require('../config')
module.exports = (app) => {
    app
        .get("/api/users",controllers.userList)
        .post("/api/users", controllers.userCreate)

    app
        .get("/api/users/:id", controllers.userDetails)
        .put("/api/users/:id", controllers.userUpdate)
        .delete("/api/users/:id", controllers.userDelete)

    //User Login
    app.post("/api/login", controllers.login)
}