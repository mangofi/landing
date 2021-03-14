const fetch = require('node-fetch')
const base64 = require("base-64");
const crypto = require("crypto");

const BASE = "https://us1.api.mailchimp.com/3.0"
const apiKey = process.env.MAILCHIMP_API_KEY;

module.exports = {
  addMember: async (listId, email) => {
    return fetch(
      BASE+`/lists/${listId}/members`,
      {
        method: "POST",
        headers: {
          'Authorization': `Basic ${base64.encode(`anystring:${apiKey}`)}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        	"email_address": email,
        	"status": "subscribed"
        })
      }
    )
  },
  addTags: async (listId, email, tags) => {
    const subscriberHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex')

    return fetch(
      BASE+`/lists/${listId}/members/${subscriberHash}/tags`,
      {
        method: "POST",
        headers: {
          'Authorization': `Basic ${base64.encode(`anystring:${apiKey}`)}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tags: tags
        })
      }
    )
  }
}