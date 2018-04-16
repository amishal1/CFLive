import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPillPage } from '../add-pill/add-pill';

@Component({
  selector: 'page-pills',
  templateUrl: 'pills.html'
})
export class PillsPage {

  constructor(public navCtrl: NavController) {
  }
  goToAddPill(params){
    if (!params) params = {};
    this.navCtrl.push(AddPillPage);
  }
}
