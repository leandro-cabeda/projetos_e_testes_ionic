import { CarroserviceProvider } from './../../providers/carroservice/carroservice';
import { CarroPage } from './../carro/carro';
import { Carro } from './../../models/Carro';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {Http} from '@angular/http';
import { HttpErrorResponse } from "@angular/common/http";



@IonicPage()
@Component({
  selector: "page-new",
  templateUrl: "new.html"
})
export class NewPage implements OnInit {
  public carros: Carro[]; // do tipo da classe Carro da pasta models de Carro.ts em forma de vetor
  //any[] vetor que aceita qualquer tipo

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _http: Http,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private _carroService: CarroserviceProvider
  ) {
    /*this.carros=[
    {"nome":"uno","preco":30000},
    {"nome":"Corsa","preco":25000},
    {"nome":"Fiest","preco":18000},
    {"nome":"BMW","preco":47000}

    ];*/
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }*/

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      // criando o loader
      content: "Buscando carros. Aguarde..."
    });

    loader.present(); // faz mostrar o loader

     this._carroService.lista().subscribe(carros => {
         this.carros = carros;
         loader.dismiss();
       }, (err: HttpErrorResponse) => {
         //console.log(err);
         loader.dismiss();
         this._alertCtrl
           .create({
             title: "Falha na conexão",
             subTitle:"Não foi possível carregar a lista de carros. Tente novamente mais tarde!",
             buttons: [{ text: "Ok" }]
           })
           .present();
       });
    /*this._http
      .get("http://localhost:8080/api/carro/listaTodos")
      .map(res => res.json()) // mapeamento para formato json
      .toPromise()
      .then(resultado => {
        // parametro   // then = retorno com sucesso
        this.carros = resultado; // recebeu parametro
        //console.log("recebeu resultado");
        loader.dismiss(); // esconder o loader
      })
      .catch(err => {
        console.log("erro");
        loader.dismiss();
        this._alertCtrl
          .create({
            // criar mensagem de alerta
            title: "falha na conexão", // titulo da mensagem
            buttons: [{ text: "Estou ciente" }], // cria um botão com uma mensagem
            subTitle:
              "Não foi possível obter a lista de carros. Tente mais tarde" // um subtitulo
          })
          .present(); // apresenta a mensagem
      }); // quando receber o resultado da promise, execute o then
    console.log("já passou pelo then das instruções..");*/
  }

  abreCarro(carro: Carro) {
    //console.log("Carros: "+carro.nome);
    this.navCtrl.push(CarroPage, { c: carro });
  }
}
