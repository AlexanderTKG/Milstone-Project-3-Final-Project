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
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"/>
          <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
          <link rel='stylesheet' href='Elements-Game.css' />
          <title>Life Water Fire Spell cast</title>
          <style>
            {`
            body {
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
        <body>
          <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/projects">Projects</a>
                </li>    
              </ul>
            </div>  
          </nav>
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
    );
}

module.exports = Elements