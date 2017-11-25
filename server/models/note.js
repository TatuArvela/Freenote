const mongoose = require('mongoose')
const Schema = mongoose.Schema


module.exports = mongoose.model('note', new Schema({
  user: {
    type: String,
    required: true
  },
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  deleted: {
    type: Boolean,
  }
}, {
  versionKey: false
}))