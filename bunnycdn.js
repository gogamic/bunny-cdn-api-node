let request = require("request");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

function create_pull_zone(api, name, original_url, type) {
  const options = {
    url: "https://bunnycdn.com/api/pullzone",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      AccessKey: api
    },
    body: {
      Name: name,
      Type: type,
      OriginUrl: original_url
    }
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      const info = JSON.parse(body);
      console.log(info);
    } else {
      console.log(response);
    }
  }

  request(options, callback);
}
let api = process.env.API;
create_pull_zone(api, "test", "http://goga.com", 0);
