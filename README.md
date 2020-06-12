# bunny-cdn-python

Bunny CDN is the fastest and Cheapest CDN

This is a bunny cdn node.js module for buny cdn API

# How to Use IT

As of now there are 4 commands whch are listed below with their patrameters
<br>
1.create_pull_zone(api, name, original_url, type)
<br>
2.delete_pull_zone(api, id)
<br>
3.purge_cache(api, id)
<br>
4.add_host_name(api, id, Hostname)

<!--
<br>
5.force_ssl(api, id, Hostname, ssl)
<br>
6.get_free_ssl(api, Hostname)
<br>
7.billing_info(api, Hostname)
<br>
8.add_newblocked_ip(api, pullzoneid, ip)
<br>
9.remove_blocked_ip(api, pullzoneid, ip)
-->

# Example

```
import { purge_cache } from 'bunnycdn';

purge_cache(api, id)

```

# INFO

1. This is not a official bunny cdn module
2. ssl must be an Boolean value
3. api and ID must be an Integer
4. ip must be an string
