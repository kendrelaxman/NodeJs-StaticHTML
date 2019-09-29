// HTTP Module for Creating Server and Serving Static Files Using Node.js
// Static Files: HTML, CSS, JS, Images
// Get Complete Source Code from Pabbly.com

var http = require("http");
var fs = require("fs");
var path = require("path");

http
  .createServer(function(req, res) {
    if (req.url === "/") {
      fs.readFile("./index.html", "UTF-8", function(err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      });
    } else if (req.url.match(".css$")) {
      var cssPath = path.join(__dirname, "public", req.url);
      var fileStream = fs.createReadStream(cssPath, "UTF-8");
      res.writeHead(200, { "Content-Type": "text/css" });
      fileStream.pipe(res);
    } else if (req.url.match(".img$")) {
      var imagePath = path.join(__dirname, "public", req.url);
      var fileStream = fs.createReadStream(imagePath);
      res.writeHead(200, { "Content-Type": "image/jpg" });
      fileStream.pipe(res);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("No Page Found");
    }
  })
  .listen(8000);
