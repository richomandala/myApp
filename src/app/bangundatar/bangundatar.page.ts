import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bangundatar',
  templateUrl: './bangundatar.page.html',
  styleUrls: ['./bangundatar.page.scss'],
})
export class BangundatarPage implements OnInit {

  constructor(
    public router : Router
  ) {}

  ngOnInit() {
  }

  persegi() {
    this.router.navigate(['./persegi']);
  }

  persegipanjang() {
    this.router.navigate(['./persegipanjang']);
  }

  segitiga() {
    this.router.navigate(['./segitiga']);
  }

  lingkaran() {
    this.router.navigate(['./lingkaran']);
  }

  jajargenjang() {
    this.router.navigate(['./jajargenjang']);
  }

  belahketupat() {
    this.router.navigate(['./belahketupat']);
  }

  layanglayang() {
    this.router.navigate(['./layanglayang']);
  }

  trapesium() {
    this.router.navigate(['./trapesium']);
  }

}
