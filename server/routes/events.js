const express = require('express');
const router = express.Router();
const Event = require('../models/event');

router.get('/', function(req, res, next) {
  const pageSize = +req.query.pagesize || 10;
  const offset = +req.query.offset || 0;

  Event.find().skip(offset).limit(pageSize).then((events) => {
    res.json({
      objects: events,
      pageSize: pageSize,
      offset: offset
    })
  });
});

module.exports = router;
