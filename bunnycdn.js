let axios = require("axios");

function create_pull_zone(api, name, original_url, type) {
let URL =  'https://bunnycdn.com/api/pullzone';  
let config = {
  headers: {
    "Content-Type": "application/json",
      'Accept': "application/json",
      'AccessKey': api
  }
}

let data = {
  'Name': name,
  'Type': type,
  'OriginUrl': original_url
}
axios.post(URL, data, config).then(function(response){
  console.log(response.data)
}).catch(function(error){
  console.log(error.response.data)
})

}

function delete_pull_zone(api, id) {
let URL =  'https://bunnycdn.com/api/pullzone/'+ id;  
let config = {
  headers: {
    "Content-Type": "application/json",
      'Accept': "application/json",
      'AccessKey': api
  }
}


axios.post(URL, config).then(function(response){
  console.log(response.staus)
}).catch(function(error){
  console.log(error.response.data)
})

} 

let api = process.env.API;

delete_pull_zone(api,  142672);
