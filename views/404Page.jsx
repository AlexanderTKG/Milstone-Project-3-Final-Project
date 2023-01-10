const React = require('react')
const Default = require('./layouts/Default')

function Aboutus () {
    console.log('About Us Page')
    return (
      <Default>
        <html>
          <head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <style>
              {`
                body {
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
                  float: left;
                  width: 30.5%;
                  margin-bottom: 16px;
                  padding: 0 8px;
                }

                .card {
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                  margin: 8px;
                }

                .about-section {
                  padding: 50px;
                  text-align:center;
                  background-color: #474e5d;
                  color: white;
                }

                .container {
                  padding: 0 16px;
                }

                .container::after, row::after {
                  contact:"";
                  clear:both;
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
                  text-align:center;
                  cursor: pointer;
                  width: 100%;
                }

                .button:hover {
                  background-color: #555
                }

                @media screen and (max-width: 650px) {
                  .column {
                    width: 100%;
                    display: block;
                  }
                }
              `}
            </style>

            {/* Social Media Links */}
            <style>
              {`
              @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
                  $timing        : 265ms;
                  $iconColor     : #00B5F5;
                  $accent        : #002A8F;
                  $bluefade      : #0043E0;
                  $gradient      : #00B5F5;
                  
                  @mixin transformScale($size: 1) {
                      transform: scale($size);
                      -ms-transform: scale($size);
                      -webkit-transform: scale($size);
                  }
                  
                  body {
                      background-color: rgba($iconColor, 0.05);
                  }
                  
                  .social-container {
                      width: 100px;
                      margin: 0;
                      text-align: center;
                  }
                  
                  .social-icons {
                      padding: 0;
                      list-style: none;
                      margin: 1em;
                    
                      li {
                          display: inline-block;
                          margin: 0.15em;
                          position: relative;
                          font-size: 1.2em;
                      }
                  
                      i {
                          color: #fff;
                          position: absolute;
                          top: 21px;
                          left: 21px;
                          transition: all $timing ease-out;
                      }
                  
                      a {
                          display: inline-block;
                        
                          &:before {
                              @include transformScale();
                              content: " ";
                              width: 60px;
                              height: 60px;
                              border-radius: 100%;
                              display: block;
                              background: linear-gradient(45deg, $iconColor, $accent);
                              transition: all $timing ease-out;
                          }
                          
                          &:hover:before {
                              transform: scale(0);
                              transition: all $timing ease-in;
                          }
                          
                          &:hover i {
                              @include transformScale(2.2);
                              color: $iconColor;
                              background: -webkit-linear-gradient(45deg, $iconColor, $accent);
                              -webkit-background-clip: text;
                              -webkit-text-fill-color: transparent;
                              transition: all $timing ease-in;
                          }
                      }
                  }
                  `}
            </style>
          </head>
          <body>
            <div class="about-section">
              <h1>About Us</h1>
              <p>There's no saying no to grandma's cooking</p>
              <p>
                We're just three people who found the beauty in our grandma's
                cooking
              </p>
            </div>

            <h2
              style={{
                textAlign: "center",
              }}
            >
              Our Team
            </h2>
            <div class="row">
              <div class="column">
                <div class="card">
                  <img
                    src="https://cdn.discordapp.com/attachments/1032436615991275533/1035905150063235282/IMG_0042.webp"
                    alt="Alexander"
                    style={{
                      width: "100%",
                    }}
                  />
                  <div class="container">
                    <h2>Alexander Martinez-De Jesus</h2>
                    <p class="title">CEO & founder</p>
                    <p>alexmdj@gmail.com</p>
                    <p>
                      <div class="social-container">
                        <ul class="social-icons">
                          <li>
                            <a href="#">
                              <i class="fa fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-codepen"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </p>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <img
                    src="https://media.discordapp.net/attachments/1032436615991275533/1035902850288582686/IMG_7517.jpg?width=509&height=488"
                    alt="Binal"
                    style={{
                      width: "100%",
                    }}
                  />
                  <div class="container">
                    <h2>Binal Dalia</h2>
                    <p class="title">CEO & founder</p>
                    <p>binald@gmail.com</p>
                    <p>
                      <div class="social-container">
                        <ul class="social-icons">
                          <li>
                            <a href="#">
                              <i class="fa fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-codepen"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </p>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <img
                    src="https://i.imgur.com/XKvxQHWl.png"
                    alt="Ashley"
                    style={{
                      width: "100%",
                    }}
                  />
                  <div class="container">
                    <h2>Ashley Vieira</h2>
                    <p class="title">CEO & founder</p>
                    <p>ashleyv@gmail.com</p>
                    <p>
                      <div class="social-container">
                        <ul class="social-icons">
                          <li>
                            <a href="#">
                              <i class="fa fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-codepen"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      </Default>
    );
}

module.exports = Aboutus