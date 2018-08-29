import { OnibusPage } from './../onibus/onibus';
import { Bus } from './../../models/Onibus';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpErrorResponse } from "@angular/common/http";
import { BusserviceProvider } from "../../providers/busservice/busservice";


@IonicPage()
@Component({
  selector: "page-bus",
  templateUrl: "bus.html"
})
export class BusPage {
  public bus: Bus[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private busservice: BusserviceProvider
  ) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad BusPage');

    let loader = this.loadingCtrl.create({
      // criando o loader
      content: "Buscando Linhas de Ônibus. Aguarde..."
    });

    loader.present(); // faz mostrar o loader

    this.busservice.lista()
    .subscribe((onibus) => {
        this.bus = onibus;

          setTimeout(function() {
            loader.dismiss();
          }, 1000);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        loader.dismiss();
        this.alertCtrl.create({
            title: "Falha na conexão",
            subTitle:
              "Não foi possível carregar a lista de ônibus. Tente novamente mais tarde!",
            buttons: [{ text: "Confirmar" }]
          })
          .present();
      }
    );
  }

  abreBus(bu: Bus) {
    this.navCtrl.push(OnibusPage, { bu });
  }
}
