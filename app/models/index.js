import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserModel from './userModel.js'



mongoose.Promise = global.Promise
const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.User = new UserModel(mongoose)
//db.todo = require('./todo.model')(mongoose)
export default db
