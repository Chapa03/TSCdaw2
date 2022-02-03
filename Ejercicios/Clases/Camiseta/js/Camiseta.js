var Camiseta = /** @class */ (function () {
    //Constructor
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    //Setters
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camiseta.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camiseta.prototype.setTalla = function (talla) {
        this.talla = talla;
    };
    Camiseta.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    //Getters
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    Camiseta.prototype.getMarca = function () {
        return this.marca;
    };
    Camiseta.prototype.getTalla = function () {
        return this.talla;
    };
    Camiseta.prototype.getPrecio = function () {
        return this.precio;
    };
    return Camiseta;
}());
