const React = require('react')
const Default = require('./layout/Navbar')

function ProjectPage () {
    console.log('Project Page')
    return (
      <Default>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Projects</title>
          <link rel="stylesheet" href="styles.css" />
          <script src="Game.js" defer></script>
        </head>
        <body>
          <h1>Hello world</h1>
        </body>
        </html>
      </Default>
    );
}

module.exports = ProjectPage