import { Component, ViewChild, AfterViewInit,
  ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CFLivePage } from '../c-flive/c-flive';



@Component({
  selector: 'page-new-appointment',
  templateUrl: 'new-appointment.html'
})
export class NewAppointmentPage implements AfterViewInit {

  constructor(public navCtrl: NavController) {
  }

  goToCFLivePage(params){
    if (!params) params = {};
    this.navCtrl.push(CFLivePage);
  }



    //@ViewChild('someInput') someInput: ElementRef;
    @ViewChild('testingInput') testingInput: ElementRef;
    @ViewChild('doctorName') doctorName: ElementRef;
    @ViewChild('appointmentDate') appointmentDate: ElementRef;
   // @ViewChild('notification') note: ElementRef;
  
    ngAfterViewInit() {

      //this.someInput.nativeElement.value = "Anchovies! 🍕🍕";
    }

    addNewAppointment(){

      //let testingVar;
      //testingVar = this.testingInput.nativeElement.value;
      //alert(testingVar);
      //localStorage.setItem('testingKey', testingVar);
      
      let docNameVar = this.doctorName.nativeElement.value;
      let appDateVar = this.appointmentDate.nativeElement.value;
      console.log(docNameVar);
      console.log(appDateVar);
      //let noteVar = this.note.nativeElement.value;

    var appointmentObj = {docname:docNameVar, appdate:appDateVar};
  

      localStorage.setItem('appointment', JSON.stringify(appointmentObj) );
      console.log(JSON.stringify(appointmentObj));

      this.goToCFLivePage(NewAppointmentPage);


    }
  

}
