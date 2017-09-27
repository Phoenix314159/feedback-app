const config = require('../../config/config'),
      {main, total} = require('./css/thanks');

module.exports = () => {
    
    return `
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
     <body style="${total}">
      <div style="${main}">
         <h1 style="color: white">Thanks For Voting!!!</h3>
         <a href="${config.redirectUrl}"><button class="btn btn-primary" style="margin-top: 5vh">Home</button></a>
       <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
       <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
      </div>
     </body>
    `
}
