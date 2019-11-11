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
  }

  hitungkeliling() {
    this.keliling = (parseInt(this.ab) + parseInt(this.bc) + parseInt(this.cd) + parseInt(this.da)).toFixed(2);
  }

}
