const dotenv = require("dotenv")

exports.handler = function(event, context, callback) {
  const {body} = event
  const parsedBody = JSON.parse(body)
  const sgMail = require('@sendgrid/mail');
  
  if (dotenv) {
    dotenv.config()
  }
  
  if (!parsedBody.email) {
    callback(null, {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        error: "Email param should be present"
      }
    })
    return
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'loscrankersmailing@robot.zapier.com',
    from: 'info@loscrankers.com',
    subject: 'New Subscriber',
    text: parsedBody.email,
    html: parsedBody.email,
  };
  
  sgMail.send(msg).then(() => {
    callback(null, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        message: `Email '${parsedBody.email}' registered`
      }
    })
  }, error => {
    console.error("send-email error:", error)
    callback(null, {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        error
      }
    })
  });
}