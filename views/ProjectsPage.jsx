const React = require('react')
const Default = require('./layout/Navbar')

function ProjectPage () {
    console.log('Project Page')
    return (
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Projects</title>
        <style>
          {`
          body {
            font-family: Arial, Helvetica, sans-serif;
          }
          
          .flip-card {
            background-color: transparent;
            width: 300px;
            height: 300px;
            perspective: 1000px;
          }
          
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          }
          
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }
          
          .flip-card-front {
            background-color: #bbb;
            color: black;
          }
          
          .flip-card-back {
            background-color: #113a18;
            color: white;
            transform: rotateY(180deg);
          }
          .color {
            background-color: #836973;
          }
          `}
        </style>
      </head>
      <body class='color'>
        <header>
          <Default></Default>
        </header>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="/images/ElementGame.jpg" alt="Avatar" style=
              {{
                width: '300px',
                height: '300px', 
              }}/>
            </div>
            <div class="flip-card-back">
              <h1>Element Game</h1> 
              <p>Similar to Rock, paper, and scissors</p> 
              <a href='https://alexandertkg.github.io/Game-Project/' >Click me</a>
            </div>
          </div>
        </div>
      </body>
    </html>
    )
}

module.exports = ProjectPage
