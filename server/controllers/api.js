const express = require('express')
const package = require('../package.json')
const router = express.Router()

var nextId = 1
var entries = [
  {
    id: 0,
    title: "Title",
    text: "Text",
    deleted: false
  }
]

// HELLO
router.get('/', function (req, res) {
  res.json({
    message: 'Freenote Server v' + package.version
  })
})


// GET ALL NOTES
router.get('/notes', function (req, res) {
  res.status(200).json(entries)
})


// CREATE NEW NOTE
router.post('/notes/new', function (req, res) {
  entries.push({
    id: nextId++,
    title: "",
    text: "",
    deleted: false
  })
  res.status(200).json(entries)
})


module.exports = router