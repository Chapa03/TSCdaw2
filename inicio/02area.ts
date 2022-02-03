//TypeScript es un lenguaje tipado. Tenemos que añadir el tipo de dato que contienen las variables
function area(shape: string, width: number, height: number){
    var area = width * height;
    return "Soy un " + shape + " con un área de " + area + " cm cuadrados.";
}

document.body.innerHTML = area("cuadrado", 15, 20);