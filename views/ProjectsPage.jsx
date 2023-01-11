const React = require('react')
const Default = require('./layout/Navbar')

function ProjectPage () {
    console.log('Project Page')
    return (
      <Default>
        <header>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='stylesheet' href='..\public\styles\Aboutus.css'  />
          <title>Project Page</title>
        </header>
        
        <body>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <h1>Project Page</h1>
              </div>
              <div className='col-md-6'></div>
            </div>
          </div>
        </body>
      </Default>
    );
}

module.exports = ProjectPage