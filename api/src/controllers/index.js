const users = require("./users")
console.log(users)
// console.log(...users)
module.exports = {
    ...users
}