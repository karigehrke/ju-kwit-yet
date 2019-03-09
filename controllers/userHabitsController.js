const db = require('../models')

module.exports = {
  findAll: function(req, res) {
    db.UserHabits.findAll({})
      .then(function(allUserHabits) {
        res.json(allUserHabits)
      })
  },

  findById: function(req, res) {
    db.UserHabits.findOne({
      where: {
        userId: req.params.id
      }
    })
      .then(function(singleUserHabits) {
        res.json(singleUserHabits)
      })
  },

  create: function(req, res) {
    db.UserHabits.create(req.body)
      .then(function(createdHabit) {
        res.json(createdHabit)
      })
  },

  remove: function (req, res) {
    db.UserHabits.destroy({
      where: {
        userId: req.params.id,
        habitId: req.body.habitId
      }
    })
      .then(function(response) {
        res.json(response)
      })
  }
}