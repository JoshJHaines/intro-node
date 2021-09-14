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
	console.log(request.url);

	if (request.url === "/game") {
		// response.end("Check back later for games details")
		fs.readFile("./public/game.htmls", function (error, data) {
			if (error) {
				return response.end(`${error}`);
			} else {
				response.writeHead(200, { "Content-type": "text/html" });
				response.write(data);
				return response.end();
			}
		});
	} else {
		response.end();
	}
});

server.listen(port);
console.log(`Server is now up and running @ port: ${port}`);
