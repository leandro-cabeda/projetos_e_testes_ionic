import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private foto: string="../assets/icon/favicon.ico";
  private nome: string="teste aula";

  constructor(public navCtrl: NavController) {

  }

}
