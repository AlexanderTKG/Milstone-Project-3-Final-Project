const React = require("react");
const Default = require("./layout/Navbar");

function HomePage() {
  console.log("HomePage");
  return (
    <Default>
      <html lang='en' >
        <head>
          <title>Home</title>
          <meta charSet="utf=8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            {`
            body {
              -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
              box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
            }
            `}
          </style>
        </head>
        <body>
        <header>
          <h2>Cities</h2>
        </header>

        <section>
          <nav>
            <ul>
              <li><a href="#">London</a></li>
              <li><a href="#">Paris</a></li>
              <li><a href="#">Tokyo</a></li>
            </ul>
          </nav>
          
          <article>
            <h1>London</h1>
            <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
            <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
          </article>
        </section>

        <footer>
          <p>Footer</p>
        </footer>
        </body>
      </html>
    </Default>
  );
}

module.exports = HomePage;