// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Hello World! API')
})

// Language Controller
const languagesController = require('./controllers/languages_controller.js')
app.use('/languages', languagesController)

// LISTEN
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log(`http://localhost:${PORT}/languages/`);
  console.log(`http://localhost:${PORT}/languages/random`);
  console.log(`http://localhost:${PORT}/languages/english`);
  console.log(`http://localhost:${PORT}/languages/spanish`);
  console.log(`http://localhost:${PORT}/languages/korean`);
  console.log(`http://localhost:${PORT}/languages/swedish`);
  console.log(`http://localhost:${PORT}/languages/hindi`);
  console.log(`http://localhost:${PORT}/languages/swahili`);
})