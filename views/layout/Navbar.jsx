const React = require('react')


function Default(html) {
  console.log('navbar')
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
        <style>
          {`
          .home-color: rgb(197, 191, 202);
          `}
        </style>
      </head>
      <body>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            <img className='logo' src='/images/AMD.png' width={'30'} height={'30'} class="d-inline-block align-top" alt='logo' />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse nav justify-content-center" id="navbarNav">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link active home-color" href="/">Home</a>
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
      </body>
    </html>
  );
}


module.exports = Default