import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bus } from "../../models/Onibus";

@Injectable()
export class BusserviceProvider {

  constructor(public http: HttpClient) {
    //console.log('Hello BusserviceProvider Provider');
  }

  /*lista() {
    return this.http.get<Bus[]>("http://localhost:8080/api/bus/listaTodos");
      //"http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o"
  }*/

  lista() {
    return this.http.get<Bus[]>("https://api-bus-evolution.herokuapp.com/api/buscalinhas");
    //"http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o"
  }

}
