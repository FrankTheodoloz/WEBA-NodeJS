var http = require("http");
var fs = require("fs");

var serverIp = "192.168.1.123";
var port = 8080;

var server = http.createServer(function (request, response) {
    fs.readFile(__dirname + '/index.html', 'utf-8', function (error, content) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(content);
    });
});

var io = require("socket.io").listen(server);

server.listen(port, serverIp);

//lors d'une connexion
io.sockets.on('connection', function (socket) {

    socket.on('newUser', function (name) {
        socket.userName = name;
        socket.emit('sysMessage', 'Bienvenue ' + name);
        socket.broadcast.emit('sysMessage', name + ' a rejoint le chat')
    });


    socket.on('sendMessage', function (message) {
        socket.emit('receiveMessage', socket.userName, message);
        socket.broadcast.emit('receiveMessage', socket.userName, message);

    });

});

server.listen(8080);
console.log("Serveur HTTP socket.io " + serverIp.green + " démarré sur le port " + ("" + port).yellow);
