const express = require('express')
const r0utes = express.Router()

// Home route
r0utes.get('/', (req, res) => {
    res.render('HomepPage', {title: 'Homepage'})
})

//About me route
r0utes.get('/about', (req, res) => {
    res.render('AboutMePage', {title: 'About Me'})
})

module.exports = r0utes