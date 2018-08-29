
import { Carro } from "./Carro";

export class Agendamentos {

    constructor (public carro : Carro  = null,
                 public precoTotal : number = 0,
                 public nome : string = '',
                 public endereco : string = '',
                 public email  : string = '',
                 public data : string = new Date().toISOString(),
                 public confirmado: boolean = false,
                 public enviado : boolean = false)
                {


    }


}
