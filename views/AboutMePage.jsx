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
            <style>
              {`
              body {
                background: -webkit-linear-gradient(252deg, #6b7dd3, #7dbae9);
                background: -moz-linear-gradient(252deg, #6b7dd3, #7dbae9);
                background: -ms-linear-gradient(252deg, #6b7dd3, #7dbae9);
                background: -o-linear-gradient(252deg, #6b7dd3, #7dbae9);
                background: linear-gradient(252deg, #6b7dd3, #7dbae9)
              }
              `}
            </style>
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