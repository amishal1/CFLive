import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewAppointmentPage } from '../new-appointment/new-appointment';

@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html'
})
export class AppointmentsPage {

  public docName;
  public appDate;
  constructor(public navCtrl: NavController) {
  }
  goToNewAppointment(params){
    if (!params) params = {};
    this.navCtrl.push(NewAppointmentPage);
  }

 

  ngAfterViewInit() {
    let testingVar ;
    testingVar = localStorage.getItem('appointment');

    testingVar =  JSON.parse(testingVar);

    console.log(testingVar.docname);

    this.docName = testingVar.docname;
    this.appDate = testingVar.appdate;
  }

  
  
  


}
