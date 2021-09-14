# Node Intro

This is PRE-Express. Once we get to Express, this will not be steps needed to build apps.

## Requirements

* Have Node installed
* Will install Nodemon as well


## Overview



```javascript
const http = require('http')
 
const port = 3000
 
const server = http.createServer(function(request, response){
   response.end ("hi class")
})
 
server.listen(port)
console.log(`Server is now up and running @ port: ${port}`)
```

You'll use this data file to get Jeopardy questions and answers.