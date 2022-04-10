const mongoose = require("mongoose")

const UsersSchema = mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    current_age: Number,
    address: String,
    university: String,
    country: String,
    roles: String
})

const Users = mongoose.model("Users", UsersSchema)

module.exports = Users