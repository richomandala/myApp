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
    this.menuCtrl.enable(false, "menu")
    this.menuCtrl.swipeGesture(false, "menu");
  }

  ngOnInit() {
  }

  username: string = "";
  password: string = "";
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
    
    if (this.username == "bangundatar" && this.password == "richo212") {
      this.msg = "Login Sukses.";
      this.color = "success";
      this.notif();
      setTimeout(function(){location.href="./bangundatar"},2100);
    }
    else if (this.username == "calculator" && this.password == "richo212") {
      this.msg = "Login Sukses.";
      this.color = "success";
      this.notif();
      setTimeout(function(){location.href="./calculator"},2100);
    }
    else if (this.username == "latihan" && this.password == "richo212") {
      this.msg = "Login Sukses.";
      this.color = "success";
      this.notif();
      setTimeout(function(){location.href="./latihanpage"},2100);
    }
    else if (this.username == "" && this.password == "") {
      this.msg = "Username & Password Wajib Diisi.";
      this.color = "warning";
      this.notif();
    }
    else if (this.username == "" || this.password == "") {
      this.msg = "Username & Password Wajib Diisi.";
      this.color = "warning";
      this.notif();
    }
    else {
      this.msg = "Username atau Password Salah.";
      this.color = "danger";
      this.notif();
    }
  }

}
