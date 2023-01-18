const React = require('react')
const Default = require('./layout/Navbar')

function Aboutus () {
    console.log('About Us Page')
    return (
        <html>
          <head>
            <meta charSet='utf-8'/>
            <meta name="viewport" content="width=device-width, initial-1" />
            <title>AboutPage</title>
          </head>
          <body>
          <header>
            <Default></Default>
          </header>
            <h1>About Page</h1>
          </body>
        </html>
    )
}

module.exports = Aboutus