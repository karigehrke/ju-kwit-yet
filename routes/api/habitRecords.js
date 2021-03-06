const router = require('express').Router()
const habitRecordsController = require('../../controllers/habitsRecordsController')

// MATCHES WITH /api/habitrecords/
router.route('/')
  .get(habitRecordsController.findAll)
  .post(habitRecordsController.create)
  .delete(habitRecordsController.deleteRecords)
  .put(habitRecordsController.updateRecord)

// MATCHES WITH /api/habitrecords/:userid
router.route('/:userid')
  .get(habitRecordsController.findHabitRecordsByUserId)

module.exports = router