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
            background-color: #008F7A;
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