import { Carro } from './../../models/Carro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendamentoPage } from "../agendamento/agendamento";


@IonicPage()
@Component({
  selector: 'page-carro',
  templateUrl: 'carro.html',
})
export class CarroPage {

  public carro : Carro;
  public acessorios : any[];
  private precoTotal: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
    // pega o parametro "carro" que foi passado no push
    this.carro=navParams.get("c");
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CarroPage');
    this.precoTotal = this.carro.preco;
    this.acessorios = [{ nome: "Freio ABS", valor: 800.00 },
    { nome: "Ar-condicionado", valor: 2000.00 },
    { nome: "GPS", valor: 1000.00 },
    { nome: "Air-bag", valor: 2500.00 }];
  }

  atualizaTotal(status, acessorio) {

    status ?
      this.precoTotal += acessorio.valor :
      this.precoTotal -= acessorio.valor;

    if (status)
      console.log(">> " + acessorio.nome + " - ligado");
    else
      console.log(">> " + acessorio.nome + " - desligado");
  }

  abreAgendamento(){
    console.log(">>" + this.carro.nome);
    
    this.navCtrl.push(AgendamentoPage.name, 
    {carro : this.carro, precoTotal: this.precoTotal});

  }

}
