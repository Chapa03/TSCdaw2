function area(shape, width, height) {
    var area = width * height;
    return "Soy un " + shape + " con un área de " + area + " cm cuadrados.";
}
document.body.innerHTML = area("cuadrado", 15, 20);
