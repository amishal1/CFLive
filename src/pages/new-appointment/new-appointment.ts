import { Component, ViewChild, AfterViewInit,
  ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-new-appointment',
  templateUrl: 'new-appointment.html'
})
export class NewAppointmentPage implements AfterViewInit {

  constructor(public navCtrl: NavController) {
  }

 


    @ViewChild('someInput') someInput: ElementRef;
    @ViewChild('testingInput') testingInput: ElementRef;
  
    ngAfterViewInit() {
      this.someInput.nativeElement.value = "Anchovies! 🍕🍕";
    }

    addNewPill(){
      let testingVar;
      testingVar = this.testingInput.nativeElement.value;
      alert(testingVar);
      localStorage.setItem('testingKey', testingVar);
      
    }
  

}
