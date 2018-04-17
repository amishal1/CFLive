import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPillPage } from '../add-pill/add-pill';

@Component({
  selector: 'page-pills',
  templateUrl: 'pills.html'
})
export class PillsPage {

  public pillName;
  public dosage;

  constructor(public navCtrl: NavController) {
  }
  goToAddPill(params){
    if (!params) params = {};
    this.navCtrl.push(AddPillPage);
  }

  ngAfterViewInit() {
    let testingVar ;
    testingVar = localStorage.getItem('pill');

    testingVar =  JSON.parse(testingVar);

    console.log(testingVar.docname);

    this.pillName = testingVar.pillname;
    this.dosage = testingVar.dosage;
  }
}
