import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Storage} from '@ionic/storage';
import { Agendamentos } from "../../models/agendamentos";
import { Observable } from "rxjs/Observable";


@Injectable()
export class AgendamentosDaoProvider {


  constructor(private _storage:Storage)
  {

  }

  private geraChave(agendamento: Agendamentos)
  {
    return agendamento.email + agendamento.data.substr(0,10);
  }

  salva(agendamento: Agendamentos)
  {
    let chave=this.geraChave(agendamento);
    let promise=this._storage.set(chave,agendamento);
    return Observable.fromPromise(promise);

  }

// verifica se agendamento já foi gravado
ehDuplicado(agendamento:Agendamentos)
{
  let chave=this.geraChave(agendamento);
  let promise=this._storage.get(chave).then(dado=>dado?true:false);

  return Observable.fromPromise(promise);
}

  listaTodos()
  {
    let agendamentos: Agendamentos[]=[];

    let promise=this._storage.forEach((agendamento:Agendamentos)=>{
      agendamentos.push(agendamento);
    }).then(()=>agendamentos);

    return Observable.fromPromise(promise);
  }

}
