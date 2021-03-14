/* eslint-disable */
const Mailchimp = require("./lib/mailchimp")
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID

const updateMember = async (email, callback) => {
  console.log("Updating member:", email)
  const response = await Mailchimp.addTags(MAILCHIMP_LIST_ID, email, [
    {
      name: "website",
      status: "active"
    }
  ])
  
  if (response.ok) {
    console.log(`Member ${email} updated`)
    callback(null, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: `Member ${email} updated`
      })
    })
  } else {
    callback(null, {
      statusCode: json.status,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Mailchimp error",
        error: json
      })
    })
  }
}

const addMember = async (email, callback) => {
  console.log("Adding member:", email)
  const response = await Mailchimp.addMember(MAILCHIMP_LIST_ID, email, callback)

  response.json().then(json => {
    if (json.status >= 401) {
      console.log("Error:", json.status)
      callback(null, {
        statusCode: json.status,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(json)
      })
      return
    }

    console.log(`Member ${email} subscribed`)
    updateMember(email, callback)
  }).catch(err => {
    console.log(err)
    callback(null, {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Error adding member",
        error: err
      })
    })
  })
}

exports.handler = function(event, context, callback) {
  const parsedBody = JSON.parse(event.body)

  try {
    addMember(parsedBody.email, callback)
    console.log("Function done!")
  } catch (error) {
    console.log("Error", error)
    callback(null, {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Error adding member",
        error
      })
    })
  }
}
