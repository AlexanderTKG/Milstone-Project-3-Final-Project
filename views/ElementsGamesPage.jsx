const React = require('react')
const Default = require('./layout/Navbar')

function Elements () {
    console.log('Elements Game')
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Life Water Fire Spell cast</title>
          <script>
            {`
            const selectionButtons = document.querySelectorAll('[data-selection]')
            const finalColumn = document.querySelector("[data-final-column");
            const SELECTION = [
                {
                    name: 'Life',
                    emoji: '🌱',
                    beats: 'Water'
                },
                {
                    name: 'Water',
                    emoji: '💧',
                    beats: 'Fire'
                },
                {
                    name: 'Fire',
                    emoji: '🔥',
                    beats: 'Life'
                }
            ]
            selectionButtons.forEach(selectionButton => {
                selectionButton.addEventListener('click', e => { 
                    const selectionName = selectionButton.dataset.selection
                    const selection = SELECTION.find(selection => selection.name === selectionName)
                    makeSelection(selection)
                })
            })
            
            function makeSelection(selection) { 
                const computerSelection = randomSelection()
                const yourWinner = isWinner(selection, computerSelection)
                const computerWinner = isWinner(computerSelection, selection)
            
                addResult(computerSelection, computerWinner)
                addResult(selection, yourWinner);
            
                if (yourWinner) points(yourScore)
                if (computerWinner) points(computerScore);
            }
            
            function addResult(selection, winner) {
                const div = document.createElement('div')
                div.innerText = selection.emoji
                div.classList.add('result-selection')
                if (winner) div.classList.add('winner')
                finalColumn.after(div)
            
            }
            
            function isWinner(selection, opponentSelection) { 
                return selection.beats === opponentSelection.name
            }
            
            function randomSelection() { 
                const randomIndex = Math.floor(Math.random() * SELECTION.length)
                return SELECTION[randomIndex]
            }
            `}
          </script>
          <style>
            {`
            .body {
              background-color: rgb(84, 97, 97);
              -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
              box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
            }
            /* this is for the button*/
            .chosenSpell {
              display: flex;
              justify-content: center;
            }
            
            .spellChosen {
              background: none;
              border: none;
              outline: none;
              cursor: pointer;
              font-size: 5rem;
              transition: 100ms;
            }
            
            .spellChosen:hover {
              transform: scale(1.2);
            }
            
            /*This is part of the Player and the computer*/
            .result {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              align-items: center;
              text-align: center;
              font-size: 3.5rem;
              font-style: italic;
              color: #FFFFFF;
              text-shadow: 3px 5px 2px #474747;
            }
            
            .battle-score {
              margin-left: 1rem;
              font-size: 2rem;
              color: #333;
            }
            
            
            .result-selection{
              opacity: .3;
              font-size: 3.5rem;
            }
            
            .result-selection.winner {
              opacity: 1;
              font-size: 3.5rem;
            }
            `}
          </style>
        </head>
        <body class='body'>
          <header>
            <Default></Default>
          </header>
          <div class="chosenSpell">
            <button class="spellChosen" data-selection="Life">🌱</button>
            <button class="spellChosen" data-selection="Fire">🔥</button>
            <button class="spellChosen" data-selection="Water">💧</button>
          </div>
          {/* <!-----> */}
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
    );
}

module.exports = Elements