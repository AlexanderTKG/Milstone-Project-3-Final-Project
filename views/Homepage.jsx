const React = require("react");
const Default = require("./layout/Navbar");

function HomePage() {
  console.log("HomePage");
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"/>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href='/Home-Page/HomePage.css' />
      </head>
      <body>

      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <a class="navbar-brand" href="#">
          <img src="/images/AMD.png" alt="logo" 
          style={{
            width: '40px',
          }}
          />
        </a>
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
{/* ---------------------------------------------------------------------------------- */}
      <a>
        <h1>Hello world</h1>
      </a>
      </body>
    </html>

  )
  }

module.exports = HomePage;