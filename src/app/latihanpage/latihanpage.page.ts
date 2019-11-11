import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latihanpage',
  templateUrl: './latihanpage.page.html',
  styleUrls: ['./latihanpage.page.scss'],
})
export class LatihanpagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  bil1: string;
  bil2: string;
  hasil: number;

  tambah() {
    this.hasil = parseInt(this.bil1) + parseInt(this.bil2);
  }
  kurang() {
    this.hasil = parseInt(this.bil1) - parseInt(this.bil2);
  }
  kali() {
    this.hasil = parseInt(this.bil1) * parseInt(this.bil2);
  }
  bagi() {
    this.hasil = parseInt(this.bil1) / parseInt(this.bil2);
  }

}
