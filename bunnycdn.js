let axios = require("axios");

function create_pull_zone(api, name, original_url, type) {
  const options = {
    url: "https://bunnycdn.com/api/pullzone",
    headers: {
      "Content-Type": "application/json",
      'Accept': "application/json",
      'AccessKey': api
    },
    body: {
      'Name': name,
      'Type': type,
      'OriginUrl': original_url
    }
  };
  
  equest.post('https://flaviocopes.com/todos', {
  json: {
    todo: 'Buy the milk'
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(`statusCode: ${res.statusCode}`)
  console.log(body)
})

let api = process.env.API;

create_pull_zone(api, "test", "http://goga.com", 0);
