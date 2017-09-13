const config = require('../../config/config');

module.exports = survey => {
    return `
      <html>
        <body>
          <div style="text-align: center">
            <h3>I'd like your input!</h3>
            <p>Please answer the following question:</p>
            <p>${survey.body}</p>
            <div>
               <a href="${config.redirectUrl}/api/survey/thanks">Yes</a>
               <a href="${config.redirectUrl}/api/survey/thanks">No</a>
            </div>
          </div>
        </body>
      </html>
    `
}
