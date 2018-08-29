import { Bus } from "./Onibus";

export class Consulta {
         public bus: Bus;

         constructor(
          public nome: string = "",
          public cidade: string = "",
          public codigo: string = "",
          public cpf: string = "",
          public data: string = new Date().toISOString(),
          public retorno: boolean = false) {

          }
       }






