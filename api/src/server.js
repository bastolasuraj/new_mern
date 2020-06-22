const express = require("express")
const bodyParser = require("body-parser")
const {APP_PORT, DB_URL} = require("./config")
const {logger, auth} = require("./middlewares")
const mongoose = require("mongoose")
const app = express()
app.use(bodyParser.json())
app.use(logger)
app.use(auth)
/*
Mongoose Connection
 */
mongoose.Promise = global.Promise
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected")
}).catch(() => {
    console.log("Database Not Connected")
})
/*
Required by EJS
 */
app.use(express.static(__dirname + '/assets'))
app.set('views', __dirname + '/views')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
/*
Required by EJS
 */
require("./routes")(app)
app.get("/", (req, res) => {
    // console.log("Appid =",req.appId)
    res.render('index')
})
app.get("/*/*", (req, res) => {
    res.status(404).send("Page Not Found")
})
app.listen(APP_PORT, () => {
    console.log(`App is Running on http://localhost:${APP_PORT}`)
})