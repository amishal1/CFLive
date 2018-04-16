import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CFLivePage } from '../pages/c-flive/c-flive';
import { InformationPage } from '../pages/information/information';
import { AppointmentsPage } from '../pages/appointments/appointments';
import { NewAppointmentPage } from '../pages/new-appointment/new-appointment';
import { PillsPage } from '../pages/pills/pills';
import { AddPillPage } from '../pages/add-pill/add-pill';
import { WeightControlPage } from '../pages/weight-control/weight-control';
import { DietTipsPage } from '../pages/diet-tips/diet-tips';
import { StatisticsPage } from '../pages/statistics/statistics';
import { AboutPage } from '../pages/about/about';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CFLivePage,
    InformationPage,
    AppointmentsPage,
    NewAppointmentPage,
    PillsPage,
    AddPillPage,
    WeightControlPage,
    DietTipsPage,
    StatisticsPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CFLivePage,
    InformationPage,
    AppointmentsPage,
    NewAppointmentPage,
    PillsPage,
    AddPillPage,
    WeightControlPage,
    DietTipsPage,
    StatisticsPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}