import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendamentoPage } from './agendamento';

@NgModule({
  declarations: [
    AgendamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendamentoPage),
  ],
  exports: [
    AgendamentoPage
  ]
})
export class AgendamentoPageModule {}
