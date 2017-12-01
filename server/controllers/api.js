const express = require('express')
const Note = require('../models/note')
const config = require('../config')
const router = express.Router()

const apiController = function(io) {

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
      let note = new Note({
        user: 'test',
        title: '',
        text: '',
        deleted: false
      })

      note.save(function (err) {
        if(err) {
          console.error('POST: Error:', req.body, err)
          res.status(400).send('POST: Error')
          return false
        }

        console.log('POST: Created ' + note)
        res.status(200).send('POST: Created ' + note)
        io.emit('pleaseFetch')
      })
    })


    // READ ALL NOTES
    .get(function (req, res) {
      Note.find({})
      .exec(function (err, notes) {
        if(err) {
          console.error('GET: Error:', req.body, err)
          res.status(400).send('GET: Error')
          return false
        }

        // console.log('GET: Returned ', notes)
        res.status(200).json(notes)
      })
    })


  // BY ID
  router.route('/notes/:_id')

    // READ A NOTE
    .get(function (req, res) {
      Note.findById(
        req.params._id,
        function (err, note) {
          if(err) {
            console.error('GET: Error:', req.body, err)
            res.status(400).send('GET: Error')
            return false
          }

          res.status(200).json(note)
        }
      )
    })

    // UPDATE A NOTE
    .put(function (req, res) {
      Note.findByIdAndUpdate(
        req.params._id, 
        {'$set': req.body}, 
        function(err, note) {
          if (err) {
            console.error('PUT: Error:', req.body, err)
            res.send('PUT: Error').status(400)
            return false
          }

          console.log('PUT: Updated note:', note)
          res.send('PUT: Updated ' + req.body).status(200)
          io.emit('pleaseFetchSingle', { id: note._id })
        }
      )
    })

    // SOFT DELETE A NOTE
    .delete(function (req, res) {
      Note.findById(
        req.params._id,
        function (err, note) {
          note.deleted = !note.deleted
          note.save(function(err, updatedNote) {
            if (err) {
              console.error('PUT: Error:', req.body, err)
              res.send('PUT: Error').status(400)
              return false
            }

            console.log('DELETE: Toggled delete on note:', note)
            res.send('DELETE: Toggled delete on note: ' + note).status(200)
            io.emit('pleaseFetchSingle', { id: note._id })
          })
        }
      )
    })


  return router
}

module.exports = apiController
