import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lingkaran',
  templateUrl: './lingkaran.page.html',
  styleUrls: ['./lingkaran.page.scss'],
})
export class LingkaranPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  r;
  luas = "0.00";
  keliling = "0.00";

  hitung() {
    this.luas = (3.14159265359 * parseInt(this.r) * parseInt(this.r)).toFixed(2);
    this.keliling = (2 * 3.14159265359 * parseInt(this.r)).toFixed(2);
  }

}
