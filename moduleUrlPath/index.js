console.log("\nChargement moduleUrlPath");
var url = require("url");
var querystring = require("querystring");
var path = require("path");
var adresse = "http://www.domaine.com:3000/index.php?getvar=toto#label";

//affichage de l'adresse
console.log(adresse);
console.log("\nadresse parsee");
//affichage des propriétés de l'adresse parsée
var adresseParse = url.parse(adresse);
console.log("href = " + adresseParse.href);
console.log("protocol = " + adresseParse.protocol);
console.log("host = " + adresseParse.host);
console.log("hostname = " + adresseParse.hostname);
console.log("port = " + adresseParse.port);
console.log("pathname = " + adresseParse.pathname);
console.log("search = " + adresseParse.search);
console.log("path = " + adresseParse.path);
console.log("query = " + adresseParse.query);
console.log("hash = " + adresseParse.hash);

//affichage de l'adresse parsée en format d'objet
console.log("\nce qui donne en format objet");
console.log(url.parse(adresseParse, true));

//construire une adresse à partir d'un objet
console.log("\nconstruire une adresse a partir d'un objet");
var adresseObjet = {protocol: "http", hostname: "www.exemple.com", port: 3001};
console.log(adresseObjet);
console.log(url.format(adresseObjet));

console.log("\nresolve");
console.log(url.resolve("/un/deux", "trois"));
console.log(url.resolve("/un/deux/", "trois"));
console.log(url.resolve("http://test.com/un/deux", "trois"));
console.log(url.resolve("http://test.com/un/deux/", "trois"));

console.log("\nquerystring");
var queryObjet = {search: "toto", ord: "asc"};
var queryStr = querystring.stringify(queryObjet);
console.log(queryStr);
var queryStrParse = querystring.parse(queryStr);
console.dir(queryStrParse);

//output : [Object: null prototype] { search: 'toto', ord: 'asc' }
//https://stackoverflow.com/questions/20803224/use-cases-for-object-createnull

console.log("\npath");
console.log(path.normalize("/un//deux/..//trois"));
console.log(path.join("/un", "deux/../trois", "quatre"));
console.log(path.basename("/un/deux/trois/"));
console.log(path.basename("/un/deux/index.php"));
console.log(path.extname("/un/deux/index.php"));