const express = require('express');
const router = express.Router();
const Event = require('../models/event');

router.get('/', function(req, res, next) {
  Event.find({}).then((events) => {
    res.json({
      objects: events
    })
  });
});

module.exports = router;
