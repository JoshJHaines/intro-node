const http = require("http");

const fs = require("fs");

const port = 3000;

// const server = http.createServer(function(request, response){
//     response.end ("hi class")
// })

// const server = http.createServer(function(request, response){
//     response.setHeader("Content-Type", "application/json")
//     response.end (JSON.stringify({text: "hello class", numbers: [1,2,3]}))
// })

const server = http.createServer(function (request, response) {
	console.log(request.method)
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
	if (request.url === "/create-file" && request.method === "POST"){
		let body = ""

		request.on("data", function (data){
			body += data.toString()
		})
		
		request.on("end", function(){
			let parsedBody = JSON.parse(body)

			fs.writeFile(parsedBody.fileName, parsedBody.message,function (error) {
				if (error){
					response.writeHead(400)
					response.end(`${error}`)
					response.end()
				} else {
					//default, if successful will show 200
					// response.writeHead(200, { "Content-type": "text/html" });
					console.log("created file")
					response.end('Created File');
				};
			});
			console.log(parsedBody)
		})
		
	} 
	if (request.url === "/update-file" && request.method === "PUT"){
		let body = ""

		request.on("data", function (data){
			body = data.toString()
		})
		
		request.on("end", function(){
			let parsedBody = JSON.parse(body)

			fs.appendFile(parsedBody.fileName, `\n${parsedBody.message}`,function (error) {
				// \n will append the test to a new line
				if (error){
					response.writeHead(400)
					response.end(`${error}`)
					response.end()
				} else {
					//default, if successful will show 200
					// response.writeHead(200, { "Content-type": "text/html" });
					console.log(`Updated file with: ${parsedBody.message}`)
					response.end(`Updated File::: ${parsedBody.message}`);
				};
			});
			console.log(parsedBody)
		})
		
	} 
	else {
		response.end();
	}
});

server.listen(port);
console.log(`Server is now up and running @ port: ${port}`);
