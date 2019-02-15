console.log("\nChargement moduleStream");

var stream = require("stream");
var events = require("events"); //juste pour un test
var fs = require("fs");

function readPush() {
    var readable = new stream.Readable();
    console.log("\nDétails de l'objet readable");
    console.dir(readable);
    // console.log(readable instanceof events.EventEmitter); //true, peut émettre des events

    readable._read = function (size) {
        console.log("Méthode _read() appelée");
        // readable.push("Bonjour"); //infini
    };

    readable.on("data", function (chunk) {
        console.log(chunk);
    });

    readable.push("Bonjour1");
    readable.push("Bonjour2");
}

function readFile(encoding) {

    var readable = new stream.Readable();
    var content = fs.readFileSync("stream.txt"); //lecture synchrone !

    if (encoding != null) {
        readable.setEncoding(encoding); //defaut : buffer
    }

    readable._read = function (size) { //taille buffer
        console.log("Méthode _read() sur fichier appelée sur le fichier avec event data " + encoding);
        if (content) readable.push(content);
        content = null;
    };

    readable.on("data", function (chunk) {
        console.log(chunk);
    });
}

/***
 * fonctionne pas ?
 */
function dataFile() {

    var readable = new stream.Readable();
    var content = fs.readFileSync("stream.txt"); //lecture synchrone !

    readable._read = function (size) { //taille buffer
        console.log("Méthode _read() sur fichier appelée sur le fichier avec methode read ");
        if (content) readable.push(content);
        content = "";
    };

    var buf = readable.read(); //devrait déclencher _read()
    console.log(buf);
}

function dataFile2() {

    var readable = new stream.Readable();
    var content = fs.readFileSync("stream.txt"); //lecture synchrone !

    readable._read = function (size) { //taille buffer
        console.log("Méthode _read() sur fichier appelée sur le fichier avec methode read2 ");
        if (content) readable.push(content);
        content = "";
    };

    readable.on("readable", function () {
        var buf = readable.read();
        console.log(buf);
    });

}

function keyb_read() {

    var readable = new stream.Readable();

    readable._read = function (size) { //taille buffer
        process.stdin.removeAllListeners("data").on("data", function (chunk) { //removeAllListeners sinon ajoute à chaque fois
            readable.push(chunk);
        });
    };

    readable.on("data", function (chunk) {
        console.log(chunk);
    });

}

function keyb_read2() {

    var readable = new stream.Readable();

    readable._read = function (size) { //taille buffer
        process.stdin.removeAllListeners("data").on("data", function (chunk) {
            readable.push(chunk);
        });
    };

    readable.on("readable", function () {
        console.log(readable.read());
    });

}

//pour démontrer que lors d'une pause, la lecture continue (bufferisé) mais pas le traitement
function keyb_exit() {

    process.stdin.on("data", function (chunk) {
        chunk = chunk.toString().replace(/[\r\n]/g, "");
        console.log(chunk);
        if (chunk == "exit") {
            this.pause();
            setTimeout(function () {
                process.stdin.resume();
            }, 4000)
        }
    });
}

function writeStream() {
    var writable = new stream.Writable();
    console.log("\nDétails de l'objet writable");
    console.log(writable);

    writable._write = function (chunk, encoding, callback) {
        console.log("Appel write1");
        callback();
    };

    var ret1 = writable.write("1234567890", function () {
        console.log("Fin write1");
    });
    console.log("Retour write1 = " + ret1);

    var ret2 = writable.write("2", function () {
        console.log("Fin write2");
    });
    console.log("Retour write2 = " + ret2);

    var ret3 = writable.write("3");
    console.log("Retour write3 = " + ret3);

}


module.exports.readPush = readPush;
module.exports.readFile = readFile;
module.exports.dataFile = dataFile;
module.exports.dataFile2 = dataFile2; //fonctionne pas !?
module.exports.keyb_read = keyb_read;
module.exports.keyb_read2 = keyb_read2;
module.exports.keyb_exit = keyb_exit;
module.exports.writeStream = writeStream;
