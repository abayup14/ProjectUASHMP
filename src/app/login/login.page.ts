import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login_username = '';
  login_password = '';
  alert_message = '';

  constructor(
    private router: Router,
    private userservice: UserserviceService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async login() {
    if (this.userservice.users.find(u => u.username === this.login_username && u.password === this.login_password)) {
      this.alert_message = 'Login success';
      this.userservice.now_username_login = this.login_username
      this.router.navigate(['/home']);
    } else {
      this.alert_message = 'Username / Password not found';
    }

    await this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Information',
      message: this.alert_message,
      buttons: ['OK']
    });
    await alert.present();
  }

  toReg() {
    this.router.navigate(["/register"])
  }

}
