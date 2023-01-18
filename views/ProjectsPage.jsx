const React = require('react')
const Default = require('./layout/Navbar')

function ProjectPage () {
    console.log('Project Page')
    return (
        <html>
          <head>
            <meta charSet='utf-8'/>
            <meta name="viewport" content="width=device-width, initial-1" />
            <title>projects</title>
          </head>
          <body>
          <header>
            <Default></Default>
          </header>
            <h1>project</h1>
          </body>
        </html>
    )
}

module.exports = ProjectPage