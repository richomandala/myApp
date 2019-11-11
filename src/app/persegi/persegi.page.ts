import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persegi',
  templateUrl: './persegi.page.html',
  styleUrls: ['./persegi.page.scss'],
})
export class PersegiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  s;
  luas = "0.00";
  keliling = "0.00";

  hitung() {
    this.luas = (parseInt(this.s) * parseInt(this.s)).toFixed(2);
    this.keliling = (parseInt(this.s) * 4).toFixed(2);
  }

}
