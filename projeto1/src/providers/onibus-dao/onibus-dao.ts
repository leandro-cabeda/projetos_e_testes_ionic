//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Consulta } from "../../models/Consulta";
import { Observable } from "rxjs/Observable";

@Injectable()
export class OnibusDaoProvider {

  constructor(private storage:Storage) {
    //console.log('Hello OnibusDaoProvider Provider');
  }


private Chave(consulta: Consulta)
  {
    return consulta.cpf + consulta.data.substr(0,10);
  }

  salva(consulta: Consulta)
  {
    consulta.retorno=true;
    let chave=this.Chave(consulta);
    let promise=this.storage.set(chave,consulta);
    return Observable.fromPromise(promise);

  }

 igual(consulta: Consulta)
{
  let chave=this.Chave(consulta);
  let promise=this.storage.get(chave).then(retorno=>retorno?true:false);

  return Observable.fromPromise(promise);
}

listaTodos()
  {
    let consultas: Consulta[]=[];

    let promise=this.storage.forEach((consulta:Consulta)=>{
      consultas.push(consulta);
    }).then(()=>consultas);

    return Observable.fromPromise(promise);
  }

}
