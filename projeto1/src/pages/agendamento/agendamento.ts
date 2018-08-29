import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Carro } from "../../models/Carro";
import { Agendamentos } from "../../models/agendamentos";
import { AgendamentosDaoProvider } from "../../providers/agendamentos-dao/agendamentos-dao";
import { AgendamentosServiceProvider } from "../../providers/agendamentos-service/agendamentos-service";
import { NewPage } from "../new/new";



@IonicPage()
@Component({
  selector: 'page-agendamento',
  templateUrl: 'agendamento.html',
})
export class AgendamentoPage {
  public carro: Carro;
  public precoTotal:number;
  public agendamento : Agendamentos;
  public _alerta: Alert;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private _agendamentoService: AgendamentosServiceProvider,
  private _agendamentoDao: AgendamentosDaoProvider, private _alertCtrl:AlertController) {
    //console.log("Antes parametros ");
    this.carro=navParams.get("carro");
    this.precoTotal=navParams.get("precoTotal");
    //console.log("depois do agedamento ");
    this.agendamento=new Agendamentos(this.carro,this.precoTotal);
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad AgendamentoPage');
  }*/

  agenda()
  {
    this.agendamento.enviado=false;
    //console.log("Dados:  "+this.agendamento.nome + "   |  "+ this.agendamento.email);
    let mensagem="";

    if (!this.agendamento.nome || !this.agendamento.endereco || !this.agendamento.email)
    {
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Preencha todos os campos!',
        buttons: [
          { text: 'ok' }
        ]
      }).present(); // faz a mensagem aparecer na tela do usuário já

      return;
    }

      this._alerta = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [
        {
          text: 'ok',
         handler: () => {
            this.navCtrl.setRoot(NewPage);
          }
        }
      ]
    });
    this._agendamentoDao.ehDuplicado(this.agendamento)
    .mergeMap(ehDuplicado => {

      if(ehDuplicado)
      {
        throw new Error("Agendamento existente!!");
      }

      return this._agendamentoService.agenda(this.agendamento)

    })
    .mergeMap((valor)=>{   // trata o retorno do observable
      let observable=this._agendamentoDao.salva(this.agendamento);
      if(valor instanceof Error)
      {
        throw valor;
      }
      return observable;
    }).finally(()=>{  // sempre executa ao final da requisição

          this._alerta.setSubTitle(mensagem);
          this._alerta.present();
      }

    )
    .subscribe(
      ()=> // executa quando recebeu retorno
      mensagem="agendamento realizado com sucesso!",
      (err:Error)=> mensagem=err.message

    );

  }

}
