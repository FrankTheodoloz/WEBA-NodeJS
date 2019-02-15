console.log("\nChargement de moduleBuffer");

//(node:6509) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues.
// Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.

// var buf1 = new Buffer("abcde");
console.log("\nabcde");
var buf1 = new Buffer.from("abcde");
console.log(buf1); //utf8 de abcde
console.log("taille : " + buf1.length); //5

// var buf2 = new Buffer("abcdé");
console.log("\nabcdé");
var buf2 = new Buffer.from("abcdé");
console.log(buf2); //utf8 de abcdé
console.log("taille : " + buf2.length); //6

console.log("\nabcde (string)");
var s1 = "abcde";
console.log("taille : " + s1.length); //

console.log("\nabcdé (string)");
var s2 = "abcdé";
console.log("taille : " + s2.length);

// var buf3 = new Buffer(6);
console.log("\nbuffer de 6 positions")
var buf3 = new Buffer.alloc(6);
console.log(buf3);

console.log("\nremplissage en ASCII 65..taille du buffer");
var from = 65; //ASCII pour A
for (var i = 0; i < buf3.length; i++) {
    buf3[i] = from++;
}
console.log(buf3);
console.log(buf3.toString());

console.log("\nremplissage d'un buffer de 5 pos, offset 2, length 2 avec 'Bonjour'");
var buf4 = new Buffer.alloc(5);
buf4.write("Bonjour", 2, 2);
console.log(buf4);
console.log(buf4.toString());