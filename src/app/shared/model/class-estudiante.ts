export class ClassEstudiante {

    constructor(public id:number, public nombre:string, public ciudad:string, public fotoUrl?:string){

        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.fotoUrl = fotoUrl;
    }

    getEdad(): number{
        return 0;
    }
}
