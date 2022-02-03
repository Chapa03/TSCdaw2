let booleano: boolean = true;

let numero: number = 34;

let hexadecimal: number = 0xf00D;
let binario: number = 0b1010;
let octal: number = 0o745;

let nombre: string = "Chapa";
let apellidos: string = 'Chaparro Arteaga';
let direccion: string = `Callefalsa 123`;
let frase: string = `Hola, soy ${nombre} ${apellidos} y vivo en ${direccion}`;

let cadena: string;

let lista1: number[] = [1, 2, 3];
let lista2: Array<string> = ["Chapa", "Alberto", "Jorge", "Alejandro"];

enum Animals {cat, lion, dog, cow, monjey};
//let cadenaAnimales: string = Animals.cat;

//Dos tipos de datos posibles para la misma variable.
let miVar: string | number = "Pepe";
miVar = 58;

var foo = 123;
console.log("Variable foo antes del if: " + foo);
if(true) {
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
