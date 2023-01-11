const React = require('react')
const Default = require('./layout/Navbar')

function Aboutus () {
    console.log('About Us Page')
    return (
      <Default>
        <header>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='stylesheet' href='..\public\styles\Aboutus.css'  />
          <title>About Us</title>
        </header>
        
        <body>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <h1>About Us</h1>
              </div>
              <div className='col-md-6'></div>
            </div>
          </div>
        </body>
      </Default>
    );
}

module.exports = Aboutus