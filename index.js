console.time("Durée d'exécution du script");

//Test simple module situé à la racine
require("./moduleHelloWorld");

//Test module externe sans index (spécifier nom fichier)
require("./moduleExterne1SansIndex/nomFichier");

//Test module externe avec main différent de index.js (sépcifié dans package.json)
require("./moduleExterne2Main");

//Test module externe avec export des méthodes (avec index.js)
console.log("Premier appel de moduleExterne3");
var colorize = require("./moduleExterne3");
console.log("Second appel de moduleExterne3 pour voir qu'il est chargé qu'une fois même avec une autre assignation");
var colorize2 = require("./moduleExterne3");
console.log("Affichage des infos du module");
console.log(colorize);
console.log("Note : console.log(module) dans le module affiche encore plus d'infos !");
console.log(colorize("Test méthode par défaut du module"));
console.log(colorize.rainbowize("Test méthode du module"));
console.log(colorize2.souligneEnRouge("Test avec méthode déclarée dans l'export"));

//console : calcul durée depuis ligne 1
console.timeEnd("Durée d'exécution du script");

//Test events
var testEvents = require("./moduleEvents");
testEvents();

//Test events sur classe
require("./moduleEventsClass");

//Test Console
require("./moduleConsole");

//Test Url et Path
require("./moduleUrlPath");

//Test Buffer
require("./moduleBuffer");

//Test Timer
require("./moduleTimer");

//TODO FINIR Test Stream
var testStream = require("./moduleStream");
testStream.readPush();
testStream.readFile("");
testStream.readFile("hex");
testStream.readFile("utf8");
// testStream.dataFile(); //fonctionne pas
testStream.dataFile2();
// testStream.keyb_read();
// testStream.keyb_read2();
testStream.keyb_exit();
testStream.writeStream();

//TODO Test Fichiers
//TODO Test TCP
//TODO Test UDP

//Test Http
var t = setTimeout(function(){
    require("./moduleHttp");
    require("./moduleSocketIo");
    clearTimeout(t);
}, 5000);
