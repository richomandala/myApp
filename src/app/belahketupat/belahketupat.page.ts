import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-belahketupat',
  templateUrl: './belahketupat.page.html',
  styleUrls: ['./belahketupat.page.scss'],
})
export class BelahketupatPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  d1;
  d2;
  s;
  luas = "0.00";
  keliling = "0.00";

  hitungluas() {
    this.luas = (parseInt(this.d1) * parseInt(this.d2) / 2).toFixed(2);
  }

  hitungkeliling() {
    this.keliling = (4 * parseInt(this.s)).toFixed(2);
  }

}
