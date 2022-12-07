const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const eventsRouter = require('./routes/events')

const app = express()

const DB_URL = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@talonassignmentevents.vnlwccr.mongodb.net/events?retryWrites=true&w=majority`

mongoose.connect(DB_URL, { keepAlive: true })
  .then(() => {
    console.log('Connected to Mongo Atlas')
  })
  .catch(() => {
    console.log('Failed to connected to Mongo Atlas (DATABASE_USERNAME and DATABASE_PASSWORD are required)')
  })

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/events', eventsRouter)

app.use('/static', express.static(path.join(__dirname, 'public/angular-ui')))
app.use('/*', (req, res) => res.sendFile(path.join(__dirname, 'public/angular-ui/index.html')))

module.exports = app
