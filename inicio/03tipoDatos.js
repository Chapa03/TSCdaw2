var booleano = true;
var numero = 34;
var hexadecimal = 0xf00D;
var binario = 10;
var octal = 485;
var nombre = "Chapa";
var apellidos = 'Chaparro Arteaga';
var direccion = "Callefalsa 123";
var frase = "Hola, soy ".concat(nombre, " ").concat(apellidos, " y vivo en ").concat(direccion);
var cadena;
var lista1 = [1, 2, 3];
var lista2 = ["Chapa", "Alberto", "Jorge", "Alejandro"];
var Animals;
(function (Animals) {
    Animals[Animals["cat"] = 0] = "cat";
    Animals[Animals["lion"] = 1] = "lion";
    Animals[Animals["dog"] = 2] = "dog";
    Animals[Animals["cow"] = 3] = "cow";
    Animals[Animals["monjey"] = 4] = "monjey";
})(Animals || (Animals = {}));
;
//let cadenaAnimales: string = Animals.cat;
var foo = 123;
console.log("Variable foo antes del if: " + foo);
if (true) {
    var foo = 456;
    console.log("Variable foo dentro del if: " + foo);
}
console.log("Variable foo fuera y después del if: " + foo);
cadena = "La variable booleano es = " + booleano
    + "<br/>" + frase
    + "<br/>Me gustan los trenes y el número " + numero
    + "Yo y mis frenes <3 : " + lista2
    + "jajajjaj xd " + lista1;
document.body.innerHTML = cadena;
