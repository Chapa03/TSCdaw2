class Camiseta {
    private color : String;
    private modelo : String;
    private marca : String;
    private talla : String;
    private precio : number;

    //Constructor
    //Se pueden utilizar indistintamente los artibutos directos o los setters para el constructor
    constructor (color : String, modelo : String, marca : String, talla : String, precio : number) {
        //this.setColor(color);
        this.color = color;
        //this.setModelo(modelo);
        this.modelo = modelo;
        //this.setMarca(marca);
        this.marca = marca;
        //this.setTalla(talla);
        this.talla = talla;
        //this.setPrecio(precio);
        this.precio = precio;
    }

    //Setters
    public setColor(color : String) : void {
        this.color = color;
    }

    public setModelo(modelo : String) : void {
        this.modelo = modelo;
    }

    public setMarca(marca : String) : void {
        this.marca = marca;
    }

    public setTalla(talla : string) : void {
        this.talla = talla;
    }

    public setPrecio(precio : number) : void {
        this.precio = precio;
    }

    //Getters
    public getColor() : String {
        return this.color;
    }

    public getModelo() : String {
        return this.modelo;
    }

    public getMarca() : String {
        return this.marca;
    }

    public getTalla() : String {
        return this.talla;
    }

    public getPrecio() : number {
        return this.precio;
    }
}