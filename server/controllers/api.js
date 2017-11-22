const express = require('express')
const config = require('../config')
const router = express.Router()

const apiController = function(io, nextId, entries) {

  // HELLO
  router.get('/', function (req, res) {
    res.json({
      message: 'Freenote Server v' + config.version
    })
  })



  // ALL
  router.route('/notes')

    // CREATE A NOTE
    .post(function (req, res) {
      let newNote = {
        id: nextId++,
        title: "",
        text: "",
        deleted: false
      }
      entries.push(newNote)

      res.json({ message: 'Created ' + newNote }).status(200)
      io.emit('pleaseFetch')
    })


    // READ ALL NOTES
    .get(function (req, res) {
      res.status(200).json(entries)
    })



  // BY ID
  router.route('/notes/:note_id')

    // UPDATE A NOTE
    .put(function (req, res) {
      entries.map((note) => {
        if (note.id === parseInt(req.params.note_id)) {
          let body = req.body
          if (body.title !== undefined)
            note.title = body.title
          if (body.text !== undefined)
            note.text = body.text
          if (body.deleted !== undefined)
            note.title = body.text
        }
      })

      res.json({ message: 'Updated ' + req.params.note_id })
      io.emit('pleaseFetch')
    })

    // SOFT DELETE A NOTE
    .delete(function (req, res) {
      entries.map((note) => {
        if (note.id === parseInt(req.params.note_id))
          note.deleted = !note.deleted
      })

      res.json({ message: 'Soft deleted ' + req.params.note_id })
      io.emit('pleaseFetch')
    })


  return router
}

module.exports = apiController
