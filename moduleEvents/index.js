console.log("\nChargement moduleEvents")
var events = require("events");

//événement simple
var objEvent = new events.EventEmitter();
objEvent.addListener("event1", function () {
    console.log("objEvent a reçu un event1")
});

//événement multiple
var objEventMulti = new events.EventEmitter();
objEventMulti.addListener("event1", function () {
    console.log("1 - objEventMulti a reçu un event1")
});
objEventMulti.addListener("event1", function () {
    console.log("2 - objEventMulti a reçu un event1")
});

//listener avec nom (f) pour pouvoir l'enlever
objEventMulti.addListener("event1", f = function () {
    console.log("3 - objEventMulti a reçu un event1 (listener f)")
});

//once s'effectue une fois seulement et est ensuite enlavé
objEventMulti.once("event1", function () {
    console.log("4 - objEventMulti a reçu un event1 (événement unique)")
});

//événement parametres
var objEventParametres = new events.EventEmitter();
objEventParametres.addListener("event1", function (prenom, nom) {
    console.log("objEventParametres prénom = " + prenom + " nom = " + nom)
});

//événement parametres JSON
var objEventParametresJson = new events.EventEmitter();
objEventParametresJson.addListener("event1", function (p) {
    console.log("objEventParametres prénom = " + p.prenom + " nom = " + p.nom)
});

module.exports = function () {
    objEvent.emit("event1");
    objEventMulti.emit("event1");
    console.log("suppression du listener f");
    objEventMulti.removeListener("event1", f);
    objEventMulti.emit("event1");
    console.log("liste des listeners sur objEventMulti : \n" + objEventMulti.listeners("event1"));
    console.log("listener avec paramèteres");
    objEventParametres.emit("event1", "Frank", "Théodoloz");
    console.log("listener avec objet en paramètre");
    p1 = {prenom: "James", nom: "Bond"};
    console.log(p1);
    objEventParametresJson.emit("event1", p1);
};
