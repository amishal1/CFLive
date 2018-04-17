import { Component, ViewChild,
  ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DietTipsPage } from '../diet-tips/diet-tips';

@Component({
  selector: 'page-weight-control',
  templateUrl: 'weight-control.html'
})
export class WeightControlPage {

  constructor(public navCtrl: NavController) {
  }

  @ViewChild('height') height: ElementRef;
  @ViewChild('weight') weight: ElementRef;

  goToDietTips(params){
    if (!params) params = {};
    this.navCtrl.push(DietTipsPage);
  }

  addBMI(){

    let heightVar = this.height.nativeElement.value;
      let weightVar = this.weight.nativeElement.value;
      console.log(heightVar);
      console.log(weightVar);
      //let noteVar = this.note.nativeElement.value;

    var BMIObj = {height:heightVar, weight:weightVar};
  

      localStorage.setItem('bmi', JSON.stringify(BMIObj) );
      console.log(JSON.stringify(BMIObj));

  }
}
