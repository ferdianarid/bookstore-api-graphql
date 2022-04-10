const Books = require("../models/Books")
const Users = require("../models/Users")

module.exports = {
    Query: {
        getAllBooks: async() => await Books.find({}),
        getSelectedBook: async(_, args) => await Books.findById(args._id),

        getAllUsers: async() => await Users.find({}),
        getSelectedUser: async(_, args) => await Users.findById(args._id)
    },
    Mutation: {
        createBooks: async(_, args) => {
            const books = new Books(args)
            await books.save()

            return books
        },
        updateBooks: async(_, args) => {
            const book = await Books.findByIdAndUpdate(args._id, args, { new: true })
            return book
        },
        deleteBooks: async(_, args) => {
            const bookId = args._id
            const deleteBook = await Books.findByIdAndRemove(bookId)

            if (deleteBook) return true;
            return false;
            // (deleteBook ? { message: "Success delete book", data: book } : "Failed delete book")
        },

        createUsers: async(_, args) => {
            const users = new Users(args)
            await users.save()

            return users
        },
        updateUsers: async(_, args) => {
            const users = await Users.findByIdAndUpdate(args._id, args, { new: true })
            return users
        },
        deleteUsers: async(_, args) => {
            const UsersId = args._id
            const deleteUsers = await Users.findByIdAndRemove(UsersId)

            if (deleteUsers) return true;
            return false;
        }
    }
}