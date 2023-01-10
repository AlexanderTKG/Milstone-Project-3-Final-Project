const React = require("react");
const Default = require("./layouts/Default");

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
          <p>Here, we believe that our Grandma's desserts are too sweet to not share. In honor of them, we've put together a collection of their best recipes. Enjoy!</p>
          <img src="../public/images/vcimage1.webp" />
        </body>
      </html>
    </Default>
  );
}

module.exports = HomePage;