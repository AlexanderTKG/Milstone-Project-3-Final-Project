const React = require("react");
const Default = require("./layout/Navbar");

function HomePage() {
  console.log("HomePage");
  return (
    <Default>
      <html>
        <head>
          <title>Our Company</title>
        </head>
        <body>
          <h1>Welcome to Our Company</h1>
          <p></p>
          <img src="../public/images/vcimage1.webp" />
        </body>
      </html>
    </Default>
  );
}

module.exports = HomePage;