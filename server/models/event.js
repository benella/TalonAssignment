const mongoose = require('mongoose')
const User = require('./user')

const eventSchema = new mongoose.Schema({
  user: [User.schema],
  os: { type: String, required: true },
  eventType: { type: String, required: true },
  severity: { type: String, required: true },
  time: { type: String, required: true }
})

module.exports = mongoose.model('Event', eventSchema)
