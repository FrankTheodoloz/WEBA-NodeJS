console.log("\nChargement moduleEventsClass");
var events = require("events");
var util = require("util");

function Server(port) {
    this.port = port;
    console.log("Création d'un serveur sur le port " + port);
}

//faire hériter la classe du module util
util.inherits(Server, events.EventEmitter);

var server0 = new Server(3001);
var server1 = new Server(3002);

server0.addListener("Connexion", function () {
    console.log("Une connexion a été effectuée sur le port " + this.port);
});

server1.addListener("Connexion", function () {
    console.log("Une connexion a été effectuée sur le port " + this.port);
});

//amélioration
[server0, server1].forEach(function (server) {
    server.addListener("Event", function () {
        console.log("Event " + this.port);
    })

});

server0.emit("Connexion");
server1.emit("Connexion");
server0.emit("Event");
server1.emit("Event");