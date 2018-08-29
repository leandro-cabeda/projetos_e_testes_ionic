import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carro } from "../../models/Carro";


@Injectable()
export class CarroserviceProvider {
  constructor(public http: HttpClient) {
    //console.log('Hello CarroserviceProvider Provider');
  }

  lista()
  {
    return this.http.get<Carro[]>("http://localhost:8080/api/carro/listaTodos");
  }

}
