const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
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
      if (err)
        console.log('USERS: Error:', req.body, err)
        res.status(401).json({
          success: false,
          message: 'USERS: Error'
        })
        return false
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
        res.status(401).json({
          success: false,
          message: 'AUTH: Error'
        })
        return false
      }

      // USER NOT FOUND
      if (!user) {
        console.log('AUTH: Failed to authenticate with provided username and password')
        res.status(401).json({
          success: false,
          message: 'AUTH: Failed to authenticate with provided username and password'
        })
      }

      // USER FOUND
      else {
        bcrypt.compare(req.body.password, user.password, function (err, result) {
          // PASSWORD MATCHES
          if (result === true) {
            var token = jwt.sign(user, config.secret, {
              expiresIn: config.tokenExpiration
            })
            console.log('AUTH: Token created for ' + user.username)
            res.status(200).json({
              success: true,
              message: 'AUTH: Token created for ' + user.username,
              token: token,
              expires: config.tokenExpiration,
              firstName: user.firstName,
              lastName: user.lastName,
              username: user.username,
              email: user.email,
              admin: user.admin
            })
          }

          // PASSWORD DOES NOT MATCH
          else {
            console.log('AUTH: Failed to authenticate with provided username and password')
            res.status(401).json({
              success: false,
              message: 'AUTH: Failed to authenticate with provided username and password'
            })
          }
        })
      }
    })
  })


  // AUTHORIZATION
  router.use('/notes', function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token']

    if (token) {
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          res.status(401).json({
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
      return res.status(401).json({
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
          res.status(400).json({
            success: false,
            message: 'POST: Error'
          })
          return false
        }

        console.log('POST: Created ' + note)
        res.status(200).json({
          success: true,
          message: 'POST: Created ' + note
        })
        io.emit('pleaseFetch')
      })
    })


    // READ ALL NOTES
    .get(function (req, res) {
      Note.find({})
      .exec(function (err, notes) {
        if(err) {
          console.error('GET: Error:', req.body, err)
          res.status(400).json({
            success: false,
            message: 'GET: Error'
          })
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
            res.status(400).json({
              success: false,
              message: 'GET: Error'
            })
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
            res.status(400).json({
              success: false,
              message: 'PUT: Error'
            })
            return false
          }

          console.log('PUT: Updated note:', note)
          res.status(200).json({
            success: true,
            message: 'PUT: Updated ' + req.body
          })
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
              res.status(400).json({
                success: false,
                message: 'PUT: Error'
              })
              return false
            }

            console.log('PUT: Toggled delete on note:', note)
            res.status(200).json({
              success: true,
              message: 'PUT: Toggled delete on note: ' + note
            })
            io.emit('pleaseFetchSingle', { id: note._id })
          })
        }
      )
    })


  return router
}

module.exports = apiController
