
import { OnibuslistapessoaPage } from './../onibuslistapessoa/onibuslistapessoa';
import { OnibusDaoProvider } from './../../providers/onibus-dao/onibus-dao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Consulta } from "../../models/Consulta";
import { BusPage } from "../bus/bus";
import { Bus } from "../../models/Onibus";



@IonicPage()
@Component({
  selector: 'page-listaconsulta',
  templateUrl: 'listaconsulta.html',
})
export class ListaconsultaPage {
  private consulta: Consulta[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private busdao:OnibusDaoProvider) {

  }

  ionViewDidLoad() {

    this.busdao.listaTodos().subscribe((consultas: Consulta[])=>this.consulta=consultas);
  }

  visualizar(bu:Bus)
  {
    this.navCtrl.push(OnibuslistapessoaPage,{bu});
  }

  listaonibus(){
    this.navCtrl.setRoot(BusPage);
  }

}
