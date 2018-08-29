import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consulta } from "../../models/Consulta";
import { Observable } from "rxjs/Observable";


@Injectable()
export class OnibusserviceProvider {
  private url = "http://localhost:8080/api";
  constructor(public http: HttpClient) {
    //console.log('Hello OnibusserviceProvider Provider');
  }

  enviar(consulta:Consulta)
  {
    return this.http.post(this.url+ "/consulta/enviar",consulta)
    .do(()=>{

      consulta.retorno=true;
    })
    .catch((err)=> Observable.of(new Error("falha na confirmação!"))
    );
  }
}
