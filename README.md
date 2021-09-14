# Node Intro

This is PRE-Express. Once we get to Express, this will not be steps needed to build apps.

## Requirements

* Have Node installed
* Will install Nodemon as well


## Overview

### In Terminal
1. Run  ‘nmp init’
2. Change Entry Point to app.js
3. Enter till asked if correct (yes)
4. Touch app.js

### In app.js

```javascript
const http = require('http')
 
const port = 3000
 
const server = http.createServer(function(request, response){
   response.end ("hi class")
})
 
server.listen(port)
console.log(`Server is now up and running @ port: ${port}`)
```

### In Terminal
1. Run ‘node app.js’

### Browser
1. http://localhost:3000/
