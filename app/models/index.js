import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserModel from './userModel.js'
import todoModel from './todoModel.js'
import TodoModel from './todoModel.js'



mongoose.Promise = global.Promise
const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.User = new UserModel(mongoose)
db.Todo = new TodoModel(mongoose)
//db.todo = require('./todo.model')(mongoose)
export default db
