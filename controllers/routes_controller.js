const express = require('express')
const r0utes = express.Router()

// Home route
/* r0utes.get('/', (req, res) => {
    res.render('HomePage', {title: 'Homepage'})
}) */

//About me route
r0utes.get('/about', (req, res) => {
    res.render('AboutMePage', {title: 'About Me'})
})

//Project route
r0utes.get('/projects', (req, res) => {
    res.render('ProjectsPage', {title: 'Projects'})
})



module.exports = r0utes


