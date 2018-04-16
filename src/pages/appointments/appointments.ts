import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewAppointmentPage } from '../new-appointment/new-appointment';

@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html'
})
export class AppointmentsPage {

  constructor(public navCtrl: NavController) {
  }
  goToNewAppointment(params){
    if (!params) params = {};
    this.navCtrl.push(NewAppointmentPage);
  }
}
