;
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusPage } from "../bus/bus";
import { Bus } from "../../models/Onibus";


@IonicPage()
@Component({
  selector: "page-onibuslistapessoa",
  templateUrl: "onibuslistapessoa.html"
})
export class OnibuslistapessoaPage {
  public buu: Bus;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.buu=this.navParams.get("bu");

  }


  listaonibus(){
    this.navCtrl.setRoot(BusPage);
  }
}
