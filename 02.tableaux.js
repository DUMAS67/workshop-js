
var tab1 = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
var lg=console.log;

tab1.forEach(function (element) {
    lg(element)
}
);

lettreA(tab1);

function lettreA(array) {
    for (let index = 0; index < array.length; index++) {
        lg(array[index]);
    }
}

var lettreADansToutesLesVilles = tab1.every(function (element) {
    return element.includes("a");
})

lg(lettreADansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret = tab1.some(function(element){
    return element.includes('-');
})

lg(auMoinsUneVilleAvecUnTiret);

function trouverEspTiret(element){
    return !element.includes(' ') && !element.includes('-');
}

var villesSansTiretSansEspace=tab1.filter(trouverEspTiret);
lg(villesSansTiretSansEspace);

function trouverS(element){
    return element.endsWith('s');
}

var villesTerminantParS =tab1.filter(trouverS).map(function (element){return element.toUpperCase()});

lg(villesTerminantParS);
