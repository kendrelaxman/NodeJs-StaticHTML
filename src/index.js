var http = require("http"),
  fs = require("fs");

// configure our application
const Express = require("express");
const app = new Express();
app.use(Express.static(__dirname + "/assets"));

fs.readFile("./index.html", function(err, html) {
  if (err) {
    throw err;
  }
  http
    .createServer(function(request, response) {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    })
    .listen(3000);
});
