import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-persegipanjang',
  templateUrl: './persegipanjang.page.html',
  styleUrls: ['./persegipanjang.page.scss'],
})
export class PersegipanjangPage implements OnInit {

  constructor(
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {
  }

  p;
  l;
  luas = "0.00";
  keliling = "0.00";

  hitung() {
    this.luas = (parseInt(this.p) * parseInt(this.l)).toFixed(2);
    this.keliling = (2 * (parseInt(this.p) + parseInt(this.l))).toFixed(2);
  }

}
