const React = require("react");
const Default = require("./layout/Navbar");

function HomePage() {
  console.log("HomePage");
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <title>Home</title>
        <style>
          {`
          .time {
            text-align: center;
            color: #2C73D2;
          }
          .test {
            background: rgb(52,74,83);
            background: linear-gradient(90deg, rgba(52,74,83,1) 0%, rgba(72,92,110,1) 35%, rgba(100,108,135,1) 100%);
          }
          `}
        </style>
      </head>
      <body class='test'>
        <header>
          <Default></Default>
        </header>
{/* ---------------------------------------------------------------------------------- */}
      <a>
        <h1 class="time">Hello world</h1>
      </a>
      </body>
    </html>

  )
  }

module.exports = HomePage;