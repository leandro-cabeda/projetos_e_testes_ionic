
import { Bus } from './../../models/Onibus';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaPage } from "../consulta/consulta";


@IonicPage()
@Component({
  selector: 'page-onibus',
  templateUrl: 'onibus.html',
})
export class OnibusPage {
  public bu : Bus;
  public confirmar:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {

    this.bu=navParams.get("bu");
    console.log("Código do onibus: "+this.bu.codigo);

  }


  marcar(status)
  {
      if(status)
      {
        this.confirmar=true;
      }



  }

  consultar()
  {

       this.navCtrl.push(ConsultaPage,{bu:this.bu,confirmar:this.confirmar});
  }

}
