console.log("\nChargement moduleConsole");

//+ voir console.time

var util = require("util");

//formatage
console.log("\nvoici un string '%s' et voici un nombre '%d'", "abc", "123", "le texte 'en trop' est ajouté à la suite.", "Et encore un bout ici :)");

var objet = {prenom: "Frank", nom: "Théodoloz", taille: 187};

//affichage d'un objet
console.log("\naffichage d'un objet");
console.log(objet);

//écrire avec util.format
console.log("\nconsole format avec %s et %d");
var texte = util.format("Le prénom est %s et le nom %s\n", objet.prenom, objet.nom);
texte += util.format("il mesure %d cm.", objet.taille);
console.log(texte);

//en utilisant l'objet
console.log("\nconsole format avec %j");
var texteObjet = util.format("Voici l'objet de l'utilisateur : %j", objet);
console.log(texteObjet);

//en utilisant toString
objet.toString = function () {
    return util.format("objet : %j", this)
};
console.log("\nen invoquant toString avec %j");
console.log(objet);
var texteToString = util.format("la personne est %s : ", objet);
console.log(texteToString);

var objet3 = {prenom: "Frank", nom: "Théodoloz", taille: 187, adresse:{rue:"Av. des Verchères 16D", localite:"1226 Thônex"}};
objet3.toString = function () {
    return util.format("le prénom : %s, le nom %s et la taille %d cm.", this.prenom, this.nom, this.taille);
};
console.log("En invoquant toString avec %s et %d");
console.log("" + objet3);

//inspect
console.log("inspect avec profondeur 2 par défaut");
console.log(util.inspect(objet3));
console.log("inspect avec profondeur 0");
console.log(util.inspect(objet3,{depth:0}));
