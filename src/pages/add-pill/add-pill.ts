import { Component, ViewChild,
  ElementRef  } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add-pill',
  templateUrl: 'add-pill.html'
})
export class AddPillPage {

  constructor(public navCtrl: NavController) {
  }

  @ViewChild('pillName') pillName: ElementRef;
  @ViewChild('dosage') dosage: ElementRef;

  addNewPill(){
    let pillNameVar = this.pillName.nativeElement.value;
      let dosageVar = this.dosage.nativeElement.value;
      console.log(pillNameVar);
      console.log(dosageVar);
      //let noteVar = this.note.nativeElement.value;

    var pillObj = {pillname:pillNameVar, dosage:dosageVar};
  

      localStorage.setItem('pill', JSON.stringify(pillObj) );
      console.log(JSON.stringify(pillObj));

  }
  
}
