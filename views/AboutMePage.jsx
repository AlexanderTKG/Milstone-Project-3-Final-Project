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
                background-color: #2980b9;
                color: white;
                transform: rotateY(180deg);
              }
              `}
            </style>
          </head>
          <body>
          <header>
            <Default></Default>
          </header>
          <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="/images/ElementGame.jpg" alt="Avatar" style={{
                width: '300px', 
                height: '300px',
                }} />
            </div>
            <div class="flip-card-back">
              <h1>Element Game</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
          </body>
        </html>
    )
}

module.exports = Aboutus