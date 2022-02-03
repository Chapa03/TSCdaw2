function resultado(operacion, n1, n2) {
    var divito;
    var c = new Calculo(n1, n2);
    (operacion == 0) ?
        divito.innerHTML = "El resultado de la suma del primer número: " + n1 + "más el segundo número: " + n2 + " es igual a = " + operar(c, operacion)
        : "El resultado de la resta del primer número: " + n1 + "menos el segundo número: " + n2 + " es igual a = " + operar(c, operacion);
}
function operar(numeros, operacion) {
    return (operacion == 0) ? numeros.sumar() : numeros.restar();
}
