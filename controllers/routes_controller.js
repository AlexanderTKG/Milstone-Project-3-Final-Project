const express = require('express')
const r0utes = express.Router()

// Home route
r0utes.get('/', (req, res) => {
    res.render('Homepage')
})