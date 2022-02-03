//declaración de una clase
class Startup {
    private text: String;

    //Constructor
    constructor (texto: String) {
        this.text = texto;
    }
    
    public main() : number {
        console.log(this.text);
        return 0;
    }
}

let s = new Startup("Hola mundo!");
s.main();

