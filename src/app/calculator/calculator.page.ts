import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  constructor(
    public router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  preVal = "";
  val = "0";
  newVal = "0";
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

  zero() {
    if (parseInt(this.val) > 0 || this.val.search(".") > 0) {
      this.val = this.val + "0";
    }
  }

  one() {
    if (parseFloat(this.val) > 0 || this.val.slice(this.val.length-1,this.val.length) == ".") {
      this.val = this.val + "1";
    }
    else {
      this.val = "1";
    }
  }

  two() {
    if (parseFloat(this.val) > 0 || this.val.slice(this.val.length-1,this.val.length) == ".") {
      this.val = this.val + "2";
    }
    else {
      this.val = "2";
    }
  }

  three() {
    if (parseFloat(this.val) > 0 || this.val.slice(this.val.length-1,this.val.length) == ".") {
      this.val = this.val + "3";
    }
    else {
      this.val = "3";
    }
  }

  four() {
    if (parseFloat(this.val) > 0 || this.val.slice(this.val.length-1,this.val.length) == ".") {
      this.val = this.val + "4";
    }
    else {
      this.val = "4";
    }
  }

  five() {
    if (parseFloat(this.val) > 0 || this.val.slice(this.val.length-1,this.val.length) == ".") {
      this.val = this.val + "5";
    }
    else {
      this.val = "5";
    }
  }

  six() {
    if (parseFloat(this.val) > 0 || this.val.slice(this.val.length-1,this.val.length) == ".") {
      this.val = this.val + "6";
    }
    else {
      this.val = "6";
    }
  }

  seven() {
    if (parseFloat(this.val) > 0 || this.val.slice(this.val.length-1,this.val.length) == ".") {
      this.val = this.val + "7";
    }
    else {
      this.val = "7";
    }
  }

  eight() {
    if (parseFloat(this.val) > 0 || this.val.slice(this.val.length-1,this.val.length) == ".") {
      this.val = this.val + "8";
    }
    else {
      this.val = "8";
    }
  }

  nine() {
    if (parseFloat(this.val) > 0 || this.val.slice(this.val.length-1,this.val.length) == ".") {
      this.val = this.val + "9";
    }
    else {
      this.val = "9";
    }
  }

  comma() {
    if (this.val.search(".") < 1) {
      this.val = this.val + ".";
    }
  }

  add() {
    if (parseFloat(this.val) > 0) {
      this.val = this.val + "+";
    }
  }

  sub() {
    if (parseFloat(this.val) > 0) {
      this.val = this.val + "-";
    }
  }

  mul() {
    if (parseFloat(this.val) > 0) {
      this.val = this.val + "*";
    }
  }

  div() {
    if (parseFloat(this.val) > 0) {
      this.val = this.val + "/";
    }
  }

  rem() {
    if (this.val == "Kesalahan") {
      this.val = "0";
    }
    else if (this.val.length > 1) {
      this.val = this.val.slice(0, this.val.length - 1);
    }
    else {
      this.val = "0";
    }
  }

  clear() {
    this.val = "0";
  }

  result() {
    try {
      this.preVal = this.val;
      this.newVal = eval(this.val);
      this.val = this.newVal;
    } catch (error) {
      this.val = "Kesalahan"
    }
  }

}
