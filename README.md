# Node Intro

This is PRE-Express. Once we get to Express, this will not be steps needed to build apps.  You will obviously need Node. A very useful addition would be to download Nodemon. This will make it so you will not need to turn off and run your server again each time you make a change that you would like to see.

## Requirements

* [Node](https://nodejs.org/en/download/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [GitHub](https://www.github.com)


## Overview

### In Terminal
First you will need to initialize/create the application. Create the directory where you would like this to live. Once you are in your new directory: 

1. Run  ‘nmp init’
2. Change Entry Point to "app.js"
3. Enter till asked if correct (yes)
4. Touch "app.js"
5. code . to open your IDE

### In app.js
Ok, so now you have the app started and your main JS file in there. Go into that app.js file and paste in:

```javascript
const http = require('http')
 
const port = 3000
 
const server = http.createServer(function(request, response){
   response.end ("hi class")
})
 
server.listen(port)
console.log(`Server is now up and running @ port: ${port}`)
```

This should give you what you need to have a sever and run it on port 3000 in your browser.

### In Terminal
1. Run ‘node app.js’[^1] 


### Browser
1. http://localhost:3000/
2. You should see a page with "hi class"


## Create Git Repo

### GitHub
1. Create new repo with app name
2. Do not add readme or anything. 

### In Terminal
1. git init
2. git add .
3. git commit -m "first commit"
4. git remote add origin https://github.com/'USERNAME'/'repo-name'.git [^2] 



- 'git push' will throw an error
- 'git push origin master' will push to your repo only once. You need to set the upstream to continually push.
1. git push --set-upstream origin master

## Creating different URLs
### In app.js
``` javascript
if (request.url === "/" && request.method === "GET") {
		// response.end("Check back later for games details")
		fs.readFile("text.txt", function (error, data) {
			if (error) {
				response.writeHead(400)
				return response.end(`${error}`);
			} else {
				response.writeHead(200, { "Content-type": "text/html" });
				response.write(data);
				return response.end();
			}
		});
	}
```
1. Create if statement with the 'request.url'. Adding the 'request.method' in the if statement makes it stronger.
2. Inside the if statement, use node file share. 'fs.action' This could be readFile,writeFile,appendFile,[^3] etc.you will need to designate a path or specific file and declare a callback function with error & data in that order.
3. Create another if statement to declare error. The writeHead should be 400 and return the error message.
4. Create an else statement to return the data.
## Server Status

- 200 - OK
- 400 - Bad Request
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

## CRUD

- Create
  - POST
- Read
  - GET
- Update
  - PUT
- Delete
  - DELETE

## Using Postman

filled out soon


[^1]: Running with node will require you to turn the server off with "CTRL C" and start the server each time you make changes. Using Nodemon will allow you to use the browser refresh button for changes to show.

[^2]: You can copy the link needed for this straight from your empty GitHub repo page. 

[^3]: https://www.w3schools.com/nodejs/nodejs_filesystem.asp


