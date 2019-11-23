import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-trapesium',
  templateUrl: './trapesium.page.html',
  styleUrls: ['./trapesium.page.scss'],
})
export class TrapesiumPage implements OnInit {

  constructor(
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true, "menu");
    this.menuCtrl.swipeGesture(true, "menu");
  }

  ngOnInit() {
  }

  t;
  ab;
  bc;
  cd;
  da;
  luas = "0.00";
  keliling = "0.00";
  
  hitungluas() {
    this.luas = ((parseInt(this.ab) + parseInt(this.cd)) * parseInt(this.t) / 2).toFixed(2);
    if (this.luas == "NaN") {
      this.luas = "0.00";
    }
  }

  hitungkeliling() {
    this.keliling = (parseInt(this.ab) + parseInt(this.bc) + parseInt(this.cd) + parseInt(this.da)).toFixed(2);
    if (this.keliling == "NaN") {
      this.keliling = "0.00";
    }
  }

}
