import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agendamentos } from "../../models/agendamentos";
import { Observable } from "rxjs/Observable";


@Injectable()
export class AgendamentosServiceProvider {

  private url="http://localhost:8080/api";

  constructor(public http: HttpClient) 
  {
    


  }

  agenda(agendamento:Agendamentos)
  // httpCliente retorna um observable
  {
    return this.http.post(this.url+ "/agendamento/agenda",agendamento)
    .do(()=>{
      //console.log(">> "+agendamento);
      agendamento.enviado=true;
    })
    .catch((err)=> Observable.of(new Error("falha no agendamento!"))
    );
  }

}
