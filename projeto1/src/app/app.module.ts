import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewPage } from './../pages/new/new';
import { CarroPage } from './../pages/carro/carro';
import { BusPage } from './../pages/bus/bus';
import { OnibusPage } from './../pages/onibus/onibus';
import { ListaAgendamentosPage } from "../pages/lista-agendamentos/lista-agendamentos";
import { ConsultaPage } from "../pages/consulta/consulta";
import { ListaconsultaPage } from "../pages/listaconsulta/listaconsulta";
import { OnibuslistapessoaPage } from "../pages/onibuslistapessoa/onibuslistapessoa";
import { BoxComponent } from './../components/box/box';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import{IonicStorageModule} from '@ionic/storage';
import { BrMaskerModule } from 'brmasker-ionic-3';

import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AgendamentosServiceProvider } from '../providers/agendamentos-service/agendamentos-service';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import { AgendamentosDaoProvider } from '../providers/agendamentos-dao/agendamentos-dao';
import { CarroserviceProvider } from '../providers/carroservice/carroservice';
import { OnibusserviceProvider } from '../providers/onibusservice/onibusservice';
import { OnibusDaoProvider } from '../providers/onibus-dao/onibus-dao';
import { BusserviceProvider } from '../providers/busservice/busservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewPage,
    CarroPage,
    BusPage,
    OnibusPage,
    BoxComponent,
    ListaAgendamentosPage,
    ConsultaPage,
    ListaconsultaPage,
    OnibuslistapessoaPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    BrMaskerModule,
    /*IonicStorageModule.forRoot({
      name:"pdm",
      storeName:"agendamentos",
      driverOrder:["indexeddb"]
    }),*/
    IonicStorageModule.forRoot({
      name:"bus",
      storeName:"consulta",
      driverOrder:["indexeddb"]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewPage,
    CarroPage,
    BusPage,
    OnibusPage,
    ListaAgendamentosPage,
    ConsultaPage,
    ListaconsultaPage,
    OnibuslistapessoaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AgendamentosServiceProvider,
    AgendamentosDaoProvider,
    CarroserviceProvider,
    OnibusserviceProvider,
    OnibusDaoProvider,
    BusserviceProvider
  ]
})
export class AppModule {}
