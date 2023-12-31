const express = require('express')
const app = express()
const bookRouter = require('./router/BookRouter')
const DB = require('./DB.js')
const cors = require('cors')
const bodyParser = require('body-parser')
console.log(bookRouter)
app.get('/', (req, res) => {
  // res.status(200).json({
  //   message: 'it is successful',
  // })
  res.status(200).send('it is successful')
})
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/books', bookRouter)

// app.use('/books', bookRouter)
const port = 8000  || process.env.PORT;

app.listen(port, () => {
  console.log('project listen in port 8000')
})
