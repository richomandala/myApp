import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-jajargenjang',
  templateUrl: './jajargenjang.page.html',
  styleUrls: ['./jajargenjang.page.scss'],
})
export class JajargenjangPage implements OnInit {

  constructor(
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {
  }

  a;
  t;
  ab;
  bc;
  cd;
  da;
  luas = "0.00";
  keliling = "0.00";

  hitungluas() {
    this.luas = (parseInt(this.a) * parseInt(this.t)).toFixed(2);
  }

  hitungkeliling() {
    this.keliling = (parseInt(this.ab) + parseInt(this.bc) + parseInt(this.cd) + parseInt(this.da)).toFixed(2);
  }

}
