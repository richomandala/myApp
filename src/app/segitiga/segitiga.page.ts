import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segitiga',
  templateUrl: './segitiga.page.html',
  styleUrls: ['./segitiga.page.scss'],
})
export class SegitigaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  a;
  t;
  ab;
  bc;
  ca;
  luas = "0.00";
  keliling = "0.00";

  hitungluas() {
    this.luas = (parseInt(this.a) * parseInt(this.t) / 2).toFixed(2);
  }

  hitungkeliling() {
    this.keliling = (parseInt(this.ab) + parseInt(this.bc) + parseInt(this.ca)).toFixed(2);
  }

}
