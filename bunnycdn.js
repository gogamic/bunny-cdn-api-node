let axios = require("axios");
var request = require("request");

// create_pull_zone
function create_pull_zone(api, name, original_url, type) {
  let URL = "https://bunnycdn.com/api/pullzone";
  let config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      AccessKey: api
    }
  };

  let data = {
    Name: name,
    Type: type,
    OriginUrl: original_url
  };
  axios
    .post(URL, data, config)
    .then(function(response) {
      if (response.status == 200) {
        console.log("host added");
      }
    })
    .catch(function(error) {
      console.log(error.response.data);
    });
}

// delete_pull _zone
function delete_pull_zone(api, id) {
  request(
    {
      method: "DELETE",
      url: "https://bunnycdn.com/api/pullzone/" + id,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        AccessKey: api
      }
    },
    function(error, response, body) {
      console.log("Status:", response.statusCode);
      console.log("Headers:", JSON.stringify(response.headers));
      console.log("Response:", body);
    }
  );
}

// purge
function purge_cache(api, id) {
  let URL = "https://bunnycdn.com/api/pullzone/{id}/purgeCache";
  let config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      AccessKey: api
    }
  };

  axios
    .post(URL, config)
    .then(function(response) {
      if (response.status == 200) {
        console.log("sucess");
      }
    })
    .catch(function(error) {
      console.log(error.response.data);
    });
}

// add_new_host
function add_host_name(api, id, Hostname) {
  let URL = "https://bunnycdn.com/api/pullzone/addHostname";
  let config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      AccessKey: api
    }
  };

  let data = {
    PullZoneId: id,
    Hostname: Hostname
  };
  axios
    .post(URL, data, config)
    .then(function(response) {
      if (response.status == 204) {
        console.log("host added");
      }
    })
    .catch(function(error) {
      console.log(error.response.data);
    });
}

// delete_a_host
function delete_host_name(api, id, hostname) {
  request(
    {
      method: "DELETE",
      url:
        "https://bunnycdn.com/api/pullzone/deleteHostname?id=" +
        id +
        "&hostname=" +
        hostname,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        AccessKey: api
      }
    },
    function(error, response, body) {
      console.log("Status:", response.statusCode);
      if (response.statusCode == 200) {
        console.log("deleted");
      } else {
        console.log("Response:", body);
      }
    }
  );
}

// load_free_ssl

function free_ssl(api, Hostname) {
  let URL =
    "https://bunnycdn.com/api/pullzone/loadFreeCertificate?hostname=" +
    Hostname;
  let config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      AccessKey: api
    }
  };

  axios
    .post(URL, config)
    .then(function(response) {
      console.log(response.status);
      if (response.status == 200) {
        console.log("SSl generated");
      }
    })
    .catch(function(error) {
      console.log(error.response.data);
    });
}

// add_new_blockedip
function new_blocked_ip(api, id, ip) {
  let URL = "https://bunnycdn.com/api/pullzone/addBlockedIp";
  let config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      AccessKey: api
    }
  };

  let data = {
    PullZoneId: id,
    BlockedIp: ip
  };
  axios
    .post(URL, data, config)
    .then(function(response) {
      console.log(response.status);
      if (response.status == 200) {
        console.log("host added");
      }
    })
    .catch(function(error) {
      console.log(error.response.status);
      console.log(error.response.data);
    });
}

// remove_blocked_ip

function remove_blocked_ip(api, id, ip) {
  let URL = "https://bunnycdn.com/api/pullzone/removeBlockedIp";
  let config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      AccessKey: api
    }
  };

  let data = {
    PullZoneId: id,
    BlockedIp: ip
  };
  axios
    .post(URL, data, config)
    .then(function(response) {
      console.log(response.status);
      if (response.status == 200) {
        console.log("host added");
      }
    })
    .catch(function(error) {
      console.log(error.response.status);
      console.log(error.response.data);
    });
}

// billing
function get_billing_info(api) {
  let URL = "https://bunnycdn.com/api/billing";
  let config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      AccessKey: api
    }
  };

  axios
    .get(URL, config)
    .then(function(response) {
      console.log(response.status);
      if (response.status == 200) {
        console.log(response.data);
      }
    })
    .catch(function(error) {
      console.log(error.response.status);
      console.log(error.response.data);
    });
}

// exporting_modules
module.exports.create_pull_zone = create_pull_zone;
module.exports.delete_pull_zone = delete_pull_zone;
module.exports.purge_cache = purge_cache;
module.exports.add_host_name = add_host_name;
module.exports.delete_host_name = delete_host_name;
module.exports.get_free_ssl = free_ssl;
module.exports.new_blocked_ip = new_blocked_ip;
module.exports.remove_blocked_ip = remove_blocked_ip;
module.exports.get_billing_info = get_billing_info;
