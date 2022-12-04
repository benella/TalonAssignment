const express = require('express')
const router = express.Router()
const Event = require('../models/event')
const paginate = require('../utils/paginate')

/**
 * Listing Events as paginated response
 */
router.get('/', function (req, res) {
  const query = {}

  if (req.query.eventType) {
    query.eventType = { $in: req.query.eventType.split(',') }
  }

  paginate(Event, query, '-time', req, res)
})

/**
 * Listing all distinct values of Event types
 */
router.get('/filter-options/eventType', function (req, res) {
  Event.distinct('eventType').then((options) => {
    res.json({ options })
  })
})

module.exports = router
