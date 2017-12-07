const express = require('express')
const jwt = require('jsonwebtoken')

const Note = require('../models/note')
const User = require('../models/user')
const config = require('../config')
const router = express.Router()

const apiController = function(io) {

  // HELLO
  router.get('/', function (req, res) {
    res.json({
      message: 'Freenote Server v' + config.version
    })
  })


  // TESTING: POST A NEW USER
  router.post('/users', function (req, res) {
    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      admin: req.body.admin
    })

    user.save(function (err) {
      if (err) throw err
      res.json(user)
    })
  })


  // AUTHENTICATION
  router.post('/authenticate', function (req, res) {
    User.findOne({
      username: req.body.username
    }, function (err, _user) {
      // User needs to be converted to a plain object
      var user = JSON.parse(JSON.stringify(_user));

      // ERROR
      if (err) {
        console.log('AUTH: Error:', req.body, err)
        res.status(400).send('AUTH: Error')
        return false
      }

      // FAILURE
      if (!user) {
        console.log('AUTH: Failed to authenticate with provided username and password')
        res.json({
          success: false,
          message: 'AUTH: Failed to authenticate with provided username and password'
        })
      }

      else {
        if (user.password != req.body.password) {
          console.log('AUTH: Failed to authenticate with provided username and password')
          res.json({
            success: false,
            message: 'AUTH: Failed to authenticate with provided username and password'
          })
        }

        // SUCCESS
        else {
          var token = jwt.sign(user, config.secret, {
            expiresIn: 1440 // 24 hours
          })
          console.log('AUTH: Token created for ' + user.username)
          res.json({
            success: true,
            message: 'AUTH: Token created for ' + user.username,
            token: token,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            admin: user.admin
          })
        }
      }
    })
  })


  // AUTHORIZATION
  router.use(function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token']

    if (token) {
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          return res.json({
            success: false,
            message: 'AUTH: Failed to authenticate token.'
          })
        }
        else {
          req.decoded = decoded
          next();
        }
      })
    }
    else {
      return res.status(403).send({
        success: false,
        message: 'AUTH: No token provided.'
      })
    }
  })


  // ALL
  router.route('/notes')

    // CREATE A NOTE
    .post(function (req, res) {
      let note = new Note({
        user: 'tatu',
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
