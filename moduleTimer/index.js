console.log("\nChargement moduleTimer");
console.log("affichage de l'heure avec 1 seconde d'intervale et clearInterval après 3 affichage");

var count=3;
i = setInterval(function(){

    var d = new Date();
    console.log ("count %d : %s", count--, d);
    if(count === 0){
        clearInterval(i);
        console.log("compteur terminé");
    }
},1000);

//setTimeout(callback, ms) clearTimeout(i) déclencher une action dans x ms
//voir chargement moduleHttp