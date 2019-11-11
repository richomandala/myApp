import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-layanglayang',
  templateUrl: './layanglayang.page.html',
  styleUrls: ['./layanglayang.page.scss'],
})
export class LayanglayangPage implements OnInit {

  constructor(
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {
  }

  d1;
  d2;
  da;
  ab;
  luas = "0.00";
  keliling = "0.00";

  hitungluas() {
    this.luas = (parseInt(this.d1) * parseInt(this.d2) / 2).toFixed(2);
  }

  hitungkeliling() {
    this.keliling = (2 * (parseInt(this.da) + parseInt(this.ab))).toFixed(2);
  }

}
