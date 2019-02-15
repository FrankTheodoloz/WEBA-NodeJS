console.log("\nChargement moduleHttp")

var http = require("http");
var util = require("util");
var fs = require("fs");
var url = require("url");

var serverIp = "192.168.1.123";

var port1 = 3000;
// var server = http.createServer(function (request, response){
http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html");
    response.write("<h3>Pure Node.js server for WEBA</h3>");
    response.end();
}).listen(port1, serverIp);
// server.listen(port,serverIp);
console.log("Serveur HTTP " + serverIp.green + " démarré sur le port " + ("" + port1).yellow);

var port2 = 3001;
var server2 = http.createServer(function (request, response) {

    console.log(request.url);

    var filename = url.parse(request.url).pathname;
    // if (filename == "/favicon.ico") return;
    if (filename == "/") filename = __dirname + "/index.html";

    fs.exists(filename, function (exists) {
        if (!exists) filename = __dirname + "/404.html";
        var file = fs.createReadStream(filename);
        file.pipe(response);
    });
});

server2.listen(port2, serverIp);
console.log("Serveur HTTP " + serverIp.green + " démarré sur le port " + ("" + port2).yellow);
