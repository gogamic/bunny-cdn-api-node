let axios = require("axios");
var request = require('request');



// create_pull_zone
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
  if (response.status == 200) {
    console.log("host added")
  }
}).catch(function(error){
  console.log(error.response.data)
})

}

// delete
function delete_pull_zone(api, id) {
request({
  method: 'DELETE',
  url: 'https://bunnycdn.com/api/pullzone/'+ id,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'AccessKey': api,
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

}


// purge
function purge_cache(api, id) {
let URL =  'https://bunnycdn.com/api/pullzone/{id}/purgeCache';  
let config = {
  headers: {
    "Content-Type": "application/json",
      'Accept': "application/json",
      'AccessKey': api
  }
}

axios.post(URL, config).then(function(response){
  if (response.status == 200){
    console.log('sucess')
  }
 
}).catch(function(error){
  console.log(error.response.data)
})

}

// new_host
function add_host_name(api, id, Hostname) {
let URL =  'https://bunnycdn.com/api/pullzone/addHostname';  
let config = {
  headers: {
    "Content-Type": "application/json",
      'Accept': "application/json",
      'AccessKey': api
  }
}

let data = {
  "PullZoneId": id,
  "Hostname": Hostname,
}
axios.post(URL, data, config).then(function(response){
  if (response.status == 204) {
    console.log("host added")
  }
}).catch(function(error){
  console.log(error.response.data)
})

}














