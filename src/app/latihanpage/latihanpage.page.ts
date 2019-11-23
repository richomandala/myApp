import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-latihanpage',
  templateUrl: './latihanpage.page.html',
  styleUrls: ['./latihanpage.page.scss'],
})
export class LatihanpagePage implements OnInit {

  constructor(
    public router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  bil1: string;
  bil2: string;
  hasil: number;
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
