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
          <title>Life Water Fire Spell cast</title>
          <link rel="stylesheet" href="styles.css" />
          <script src="Game.js" defer></script>
        </head>
        <body>
          <div class="chosenSpell">
            <button class="spellChosen" data-selection="Life">🌱</button>
            <button class="spellChosen" data-selection="Fire">🔥</button>
            <button class="spellChosen" data-selection="Water">💧</button>
          </div>
          <div class="result">
            <div>
              Player
            </div>
            <div data-final-column>
              Enemy
            </div>
          </div>
        </body>
        </html>
      </Default>
    );
}

module.exports = ProjectPage