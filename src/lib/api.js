const BASE = `https://mangofi.co/.netlify/functions`

const emailSignup = (email) => {
  return fetch(BASE + "/signup", {
    method: "POST",
    mode: "no-cors",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      email
    })
  })
}

export default {
  emailSignup
}