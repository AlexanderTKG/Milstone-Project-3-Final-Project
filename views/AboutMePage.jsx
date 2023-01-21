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
                  background: linear-gradient(252deg, #6b7dd3, #7dbae9);
                  font-family: Arial, Helvetica, sans-serif;
                  margin: 0;
                }
                
                html {
                  box-sizing: border-box;
                }
                
                *, *:before, *:after {
                  box-sizing: inherit;
                }
                
                .column {
                  float: center;
                  width: 33.3%;
                  margin-bottom: 16px;
                  padding: 0 8px;
                }
                
                .card {
                  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                  margin: 8px;
                }
                
                .about-section {
                  padding: 50px;
                  text-align: center;
                  background-color: #474e5d;
                  color: white;
                }
                
                .container {
                  padding: 0 16px;
                  align-items: right;
                }
                
                .container::after, .row::after {
                  content: "";
                  clear: both;
                  display: table;
                }
                
                .title {
                  color: grey;
                }
                
                .button {
                  border: none;
                  outline: 0;
                  display: inline-block;
                  padding: 8px;
                  color: white;
                  background-color: #000;
                  text-align: center;
                  cursor: pointer;
                  width: 100%;
                }
                
                .button:hover {
                  background-color: #555;
                }
                
                @media screen and (max-width: 650px) {
                  .column {
                    width: 100%;
                    display: block;
                  }
                }
                
                `}
              </style>
          </head>
          <body>
          <header>
            <Default></Default>
          </header>
          <div class="about-section">
            <h1>About me Page</h1>
          </div>
            <div class="column" >
              <div class="card">
                <img src="/images/cat.jpg" alt="cat" 
                style={{
                  width: '100%',
                  }} />
                <div class="container">
                  <h2>Alexander Martinez-De Jesus</h2>
                  <p class="title">Software Develaper</p>
                  <p>Comming soon Icon links</p>
                  <a href='https://github.com/AlexanderTKG?tab=repositories'><button class="button">git link</button></a>
                </div>
              </div>
            </div>
          </body>
        </html>
    )
}

module.exports = Aboutus