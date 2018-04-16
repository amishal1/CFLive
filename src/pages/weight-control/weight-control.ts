import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DietTipsPage } from '../diet-tips/diet-tips';

@Component({
  selector: 'page-weight-control',
  templateUrl: 'weight-control.html'
})
export class WeightControlPage {

  constructor(public navCtrl: NavController) {
  }
  goToDietTips(params){
    if (!params) params = {};
    this.navCtrl.push(DietTipsPage);
  }
}
