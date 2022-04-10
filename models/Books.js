const mongoose = require("mongoose")

const BooksSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    publisher: String,
    category: String,
    remaining: Number,
    release_year: Number,
})

const Books = mongoose.model('Books', BooksSchema)

module.exports = Books