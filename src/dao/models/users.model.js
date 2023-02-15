const mongoose = require('mongoose')

const userCollection = 'user'

const userSchema = mongoose.Schema({
  name: String,
  lastname: String,
  isActive: {
    type: Boolean,
    default: true
  }
})

const User = mongoose.model(userCollection, userSchema)

module.exports = User