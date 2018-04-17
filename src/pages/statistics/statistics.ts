import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html'
})
export class StatisticsPage {

  public displayedBMI; 

  constructor(public navCtrl: NavController) {
  }


  ngAfterViewInit() {
    let testingVar ;
    testingVar = localStorage.getItem('bmi');

    testingVar =  JSON.parse(testingVar);

    console.log(testingVar.height+" "+testingVar.weight);

    this.displayedBMI = this.calBMI(testingVar.height, testingVar.weight);

  }

  calBMI(hght, wght ){
    let heightStoredInMeters = hght /100;
    let weightStored = hght;
    let bmi = weightStored / (heightStoredInMeters*heightStoredInMeters);
    console.log(bmi);
    return bmi;
  }
  
}
