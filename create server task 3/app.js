//Meitav itah && Ben salomon
"use strict";

const http = require("http"); // Import Node.js core module
const fs = require("fs"); // import fs module

// read html file as a string
let html = fs.readFileSync(__dirname + "/templates/page.html", "utf8");

//  creating server

const server = http.createServer(function (req, res) {
  // write http header
  res.writeHead(200, { "Content-Type": "text/html" });
  // write html
  // file to the client
  res.end(html);
});

server.listen(3000); //listen for any incoming requests
console.log(`your url to server: http://localhost:${3000}/`);
