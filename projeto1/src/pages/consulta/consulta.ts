import { Observable } from 'rxjs/Observable';
import { ListaconsultaPage } from './../listaconsulta/listaconsulta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Consulta } from "../../models/Consulta";
import { Bus } from "../../models/Onibus";
import { OnibusDaoProvider } from "../../providers/onibus-dao/onibus-dao";
import { Pessoas } from "../../models/Pessoas";


@IonicPage()
@Component({
  selector: "page-consulta",
  templateUrl: "consulta.html"
})
export class ConsultaPage {
  public bu: Bus;
  public consulta: Consulta;
  public alerta: Alert;
  public alerta2: Alert;
  public p: Pessoas;
  public confirmar: boolean=false;
  public verdade:boolean=false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertaCr: AlertController,
    public busdao: OnibusDaoProvider
   
  ) {
    this.bu = navParams.get("bu");
    this.confirmar = navParams.get("confirmar");
    this.consulta = new Consulta();
    this.consulta.bus=this.bu;
    this.p=new Pessoas();
  }


  listaconsulta()
  {
     this.navCtrl.setRoot(ListaconsultaPage);
  }

  enviar()
  {
    let msg="";
    this.consulta.retorno=false;

    if (!this.consulta.nome
    || !this.consulta.cidade
    || !this.consulta.cpf
    || !this.consulta.codigo)
    {
      this.alertaCr
        .create({
          title: "Preenchimento obrigatório dos campos",
          subTitle: "Preencha todos os campos!",
          buttons: [{ text: "Aceitar" }]
        })
        .present();

          return;
    }

         if (this.consulta.codigo === this.bu.codigo)
        {
                this.verdade=true;
        }

        if (!this.verdade)
        {
            this.alerta2 = this.alertaCr.create({
             title: "Código inválido do ônibus!!",
             buttons: [{ text: "Aceitar" }]
           });

           this.alerta2.present();
        }
        else
        {

          this.alerta = this.alertaCr.create({
                title: "Aviso",
                buttons: [{ text: "Aceitar"}]

            });

            this.busdao
            .igual(this.consulta)
            .mergeMap(igual => {
              if (igual) {

                  throw new Error("Envio existente!!");
              }
             
                if (this.confirmar) {
                  this.p.confirmar = true;
                  this.p.nome = this.consulta.nome;
                  this.p.cpf = this.consulta.cpf;
                  this.p.cidade = this.consulta.cidade;
                  this.consulta.bus.pessoa = this.p;
                } else {
                  this.p.confirmar =false;
                  this.p.nome = this.consulta.nome;
                  this.p.cpf = this.consulta.cpf;
                  this.p.cidade = this.consulta.cidade;
                  this.consulta.bus.pessoa = this.p;
                }

                let observable = this.busdao.salva(this.consulta);
                

              return observable;
            })
            .finally(() => {
              this.alerta.setSubTitle(msg);

              this.alerta.present();

            })
            .subscribe(() =>{

             msg="Código Verificado e Enviado com Sucesso!!";
                  //this.navCtrl.setRoot(ListaconsultaPage);
            
            },

             (err: Error) =>  msg=err.message

            );


        }

  }
}
