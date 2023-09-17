const express = require('express')
const router = express.Router()
const Book = require('../modals/BookModal')

router.get('/getallBooks', async (req, res) => {
  try {
    const Books = await Book.find()
    res.status(200).send(Books)
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    })
  }
})

router.post('/getBookById', async (req, res) => {
  try {
    console.log('heollo world', req.body)
    const BookInfo = await Book.find({ _id: req.body.bookId })
    //    const BookInfo = await Book.find({ _id: '64f8b4516811b034ba590a95' })
    console.log(BookInfo)
    res.status(200).send(BookInfo[0])
  } catch (err) {
    console.log(err)
    res.status(404).json({
      status: 'failed',
      message: err,
    })
  }
})
module.exports = router
