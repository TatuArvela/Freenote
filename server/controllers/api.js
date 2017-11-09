const express = require('express')
const package = require('../package.json')
const router = express.Router()


// HELLO
router.get('/', function (req, res) {
  res.json({
    message: 'Freenote Server v' + package.version
  })
})


// GET ALL NOTES
router.get('/notes', function (req, res) {
  entries = [
    {
      id: -1,
      title: "Title",
      text: "Text",
      deleted: false
    }
  ]
  res.status(200).json(entries)
})


module.exports = router