console.log("\nChargement moduleExterne3");
console.log("Module externe avec export des méthodes");

//dépendance
var colors = require("colors");

function default_action_in_yellow(string) {
    return string.yellow;
}

function rainbowize(string) {
    return colors.rainbow(string);
}

colors.setTheme({
    custom: ['red', 'underline']
});

//sans .trucmuche = fonction par défaut
module.exports = default_action_in_yellow;

module.exports.rainbowize = rainbowize;

//fonction declarée dans l'export
module.exports.souligneEnRouge = function (string) {
    return string.custom;
};

//output des fonctions du module (plus d'infos que depuis "l'extérieur")
// console.log(module);