const config = require('../../config/config');

let emailRedirectUrl = `http://localhost:${config.clientPort}`

if(process.env.NODE_ENV === 'production'){
    emailRedirectUrl = config.redirectUrl;
}

module.exports = survey => {
    return `
      <html>
        <body>
          <div style="text-align: center">
            <h3>I'd like your input!</h3>
            <p>Please answer the following question</p>
            <p>${survey.body}</p>
            <div>
               <a href=${emailRedirectUrl}>Yes</a>
               <a href=${emailRedirectUrl}>No</a>
            </div>
          </div>
        </body>
      </html>
    `
}
