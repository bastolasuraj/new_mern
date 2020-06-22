const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const {Schema} = mongoose
const UserSchema = new Schema({
    username: {type: String, required: "Username is required", unique: true},
    password: {type: String, required: "Password is required"},
    usertype: {type: String, enum: ['Customer', 'Business', 'Superuser'], default: 'Customer'}
    // hashpass: {type:String}
}, {
    timestamps: true
})
UserSchema.pre('save', function (next) {
    const user = this
    if (!user.isModified('password')) next()
    bcrypt.hash(user.password, 12, function (error, hashedPassword) {
        if (error) throw new Error("Could Not Hash The Password")
        user.password = hashedPassword;
        next()
    })
})
module.exports = mongoose.model('Users', UserSchema)