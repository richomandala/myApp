import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public router : Router,
    public toastController: ToastController,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false, "menu");
  }

  ngOnInit() {
  }

  username: string;
  password: string;
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

  login() {
    
    if (this.username == "richo" && this.password == "richo212") {
      this.msg = "Login Sukses.";
      this.color = "success";
      this.notif();
      this.router.navigate(['./bangundatar']);
    }
    else {
      this.msg = "Username atau Password Salah.";
      this.color = "danger";
      this.notif();
    }
  }

}
