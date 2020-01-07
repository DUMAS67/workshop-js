function Personne(nom, prenom, pseudo, getNomComplet) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () { return this.prenom +' '+ this.nom + ' ' + this.pseudo }
}

function Client(nom, prenom, pseudo, numeroClient,getInfos) {
    Personne.call(this,nom,prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function () {return this.numeroClient + ' ' + this.prenom +' ' +this.nom}
}

var lg = console.log;
var jules = new Personne('LEMAITRE','Jules','Jules77');
var paul = new Personne('LEMAITRE','Paul', 'Paul44');

// Function qui affiche l'intégralité du contenu d'un Objet instancié par contructeur
function afficherPersonne(element) {

    lg(element.prenom);
    lg(element.nom);
    lg(element.pseudo);
    lg(element.getNomComplet());
}

afficherPersonne(jules);
jules.pseudo = 'Jules44';
afficherPersonne(jules);
lg(jules.age); // valeur non affectée

// ajout de l'attribut age à Personne
Personne.prototype.age = 'NON RENSEIGNE';
lg(jules.age);
jules.age = 30;
lg(jules.age);

// Ajout d'un attribut fonction à Personne

Personne.prototype.getInitiales = function () { return this.prenom.charAt(0) + ' ' + this.nom.charAt(0)   };
lg(jules.getInitiales());


var robert = {
    nom: 'Robert',
    prenom: 'LEPREFET',
    pseudo: 'robert77',
    getNomComplet: function () { this.nom + '' + this.prenom + ' ' + this.pseudo }
}

afficherPersonne(robert);
var steve = new Client ('LUCAS','Steve', 'steve44', 'A01');
afficherPersonne(steve);
lg(steve.numeroClient);
lg(steve.getInfos());