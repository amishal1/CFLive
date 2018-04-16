import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InformationPage } from '../information/information';
import { AppointmentsPage } from '../appointments/appointments';
import { NewAppointmentPage } from '../new-appointment/new-appointment';
import { PillsPage } from '../pills/pills';
import { AddPillPage } from '../add-pill/add-pill';
import { WeightControlPage } from '../weight-control/weight-control';
import { DietTipsPage } from '../diet-tips/diet-tips';
import { StatisticsPage } from '../statistics/statistics';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-c-flive',
  templateUrl: 'c-flive.html'
})
export class CFLivePage {

  constructor(public navCtrl: NavController) {
  }
  goToInformation(params){
    if (!params) params = {};
    this.navCtrl.push(InformationPage);
  }goToAppointments(params){
    if (!params) params = {};
    this.navCtrl.push(AppointmentsPage);
  }goToNewAppointment(params){
    if (!params) params = {};
    this.navCtrl.push(NewAppointmentPage);
  }goToPills(params){
    if (!params) params = {};
    this.navCtrl.push(PillsPage);
  }goToAddPill(params){
    if (!params) params = {};
    this.navCtrl.push(AddPillPage);
  }goToWeightControl(params){
    if (!params) params = {};
    this.navCtrl.push(WeightControlPage);
  }goToDietTips(params){
    if (!params) params = {};
    this.navCtrl.push(DietTipsPage);
  }goToStatistics(params){
    if (!params) params = {};
    this.navCtrl.push(StatisticsPage);
  }goToAbout(params){
    if (!params) params = {};
    this.navCtrl.push(AboutPage);
  }
}
