import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bangundatar',
  templateUrl: './bangundatar.page.html',
  styleUrls: ['./bangundatar.page.scss'],
})
export class BangundatarPage implements OnInit {

  constructor(
    public router : Router,
    public menuCtrl: MenuController,
    public toastController: ToastController
  ) {
    this.menuCtrl.enable(false, "menu");
    this.menuCtrl.swipeGesture(false, "menu")
  }

  ngOnInit() {
  }

  msg: string;
  color: string;

  async notif() {
    const toast = await this.toastController.create({
      message: this.msg,
      color: this.color,
      duration: 2000
    });
    toast.present();
  }

  logout() {
    this.msg = "Logout Sukses.";
    this.color = "success";
    this.notif();
    this.router.navigate(['./home']);
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
