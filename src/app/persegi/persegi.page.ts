import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-persegi',
  templateUrl: './persegi.page.html',
  styleUrls: ['./persegi.page.scss'],
})
export class PersegiPage implements OnInit {

  constructor(
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true, "menu");
    this.menuCtrl.swipeGesture(true, "menu");
  }

  ngOnInit() {
  }

  s;
  luas = "0.00";
  keliling = "0.00";

  hitung() {
    this.luas = (parseInt(this.s) * parseInt(this.s)).toFixed(2);
    this.keliling = (parseInt(this.s) * 4).toFixed(2);
    if (this.luas == "NaN") {
      this.luas = "0.00";
    }
    if (this.keliling == "NaN") {
      this.keliling = "0.00";
    }
  }

}
