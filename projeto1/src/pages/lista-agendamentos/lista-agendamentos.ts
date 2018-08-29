import { AgendamentosServiceProvider } from './../../providers/agendamentos-service/agendamentos-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Agendamentos } from "../../models/agendamentos";
import { AgendamentosDaoProvider } from "../../providers/agendamentos-dao/agendamentos-dao";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@IonicPage()
@Component({
  selector: 'page-lista-agendamentos',
  templateUrl: 'lista-agendamentos.html',
})
export class ListaAgendamentosPage {
  private agendamentos: Agendamentos[];
  private _alerta;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _alertCtrl: AlertController,
    private _agendamentosService: AgendamentosServiceProvider,
    private _agendamentoDao: AgendamentosDaoProvider,
    public http: HttpClient) {
  }

  ionViewDidLoad() {
    this._agendamentoDao.listaTodos()
        .subscribe(
          (agendamentos: Agendamentos[]) => {
            this.agendamentos = agendamentos;
          }
        )
  }

  reenvia(agendamento: Agendamentos)
  {
       this._alerta=this._alertCtrl.create({
         title: "Aviso",
         buttons: [
           {
             text: "ok"
           }
         ]
       });

      let mensagem="";

      this._agendamentosService.agenda(agendamento).mergeMap((valor)=>{
        let observable=this._agendamentoDao.salva(agendamento);

        if(valor instanceof Error)
        {
          throw valor;
        }
        return observable;
      })
      .finally(()=>{
        this._alerta.setSubTitle(mensagem);
        this._alerta.present();
      })
      .subscribe(
          ()=> mensagem="Agendamento realizado!", // função sucesso
          (err:Error)=>mensagem=err.message   // função erro
      );

  }

}
