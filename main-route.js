// Dependencies
const express = require('express')
const methodOverride = require('method-override')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

// Routes
app.get('/', (req, res) => {
    res.render('Homepage', {title: 'Homepage'})
})

const routesController = require('./controllers/routes_controller')
app.use('/', routesController)

// 404 Paage
app.get('*', (req, res) => {
    res.status(404).send('404 Not Found')})


// Listing Port
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})



