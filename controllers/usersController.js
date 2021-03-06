const bcrypt = require('bcryptjs')
const passport = require('passport')
const db = require('../models')

module.exports = {
  findByOne: function(req, res) {
    db.Users.findOne({
      where: {
        userName: req.body.userName
      }
    })
      .then((user) => {
        res.json(user)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  login: passport.authenticate('local', {session: false},
     function(req, res) {
      console.log(res)
    })
  ,
  tempLogin: function(req, res) {
    const { userName, password } = req.body
    db.Users.findOne({
      where: { userName: userName }
    }).then(user => {
      if (!user) {
        res.json({errorMessage: 'Username or Password Incorrect'})
      }
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err
        if (isMatch) {
          console.log(`matched password here`)
          res.json({id: user.id, userName: user.userName})
        } else {
          res.json({errorMessage: 'Username or Password Incorrect'})
        }
      })
    })
  },

  logInSuccess: function(req, res) {
    console.log(`hit logged in function`)
    res.send(`hello world `)
  },

  logout: function(req, res) {
    req.logout()
    res.redirect('/')
  },

  create: function(req, res) {
    //create user and save encrypted password
    const { firstName, lastName, email, userName, password } = req.body
    let errors = []

    if ( !firstName || !lastName || !email || !userName || !password ) {
      errors.push({msg: 'Please enter all fields'})
    }

    if ( password.length < 6 ) {
      errors.push({msg: 'Password must be at least 6 characters'})
    }

    if ( errors.length > 0 ) {
      res.json({errors})
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err
          let hashedPassword = hash
          db.Users.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            userName: userName,
            password: hashedPassword
          })
            .then(function(newUser) {
              const { id, userName } = newUser.dataValues
              const newUserResponseData = {
                id,
                userName
              }
              res.json(newUserResponseData)
            })
        })
      })
    }
  }
}