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
  user_id = "";
  username = ""
  fullname = ""
  foto_profil = ""

  constructor(
    private router: Router,
    private userservice: UserserviceService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.user_id = localStorage.getItem("id") ?? ""
    this.username = localStorage.getItem("username") ?? ''
    this.fullname = localStorage.getItem("fullname")?? ''
    this.foto_profil = localStorage.getItem("foto_profil")?? ''
  }

  // async login() {
  //   if (this.userservice.users.find(u => u.username === this.login_username && u.password === this.login_password)) {
  //     this.alert_message = 'Login success';
  //     this.userservice.now_username_login = this.login_username
  //     this.router.navigate(['/home']);
  //   } else {
  //     this.alert_message = 'Username / Password not found';
  //   }

  //   await this.presentAlert();
  // }

  async login() {
    this.userservice.login(this.login_username,this.login_password).subscribe(
      (response: any) => {
        if(response.result==='success'){
          alert("Login Success")
          this.fullname=response.fullname
          localStorage.setItem("id", this.user_id)
          localStorage.setItem("username",this.username)
          localStorage.setItem("fullname",this.fullname)
          localStorage.setItem("foto_profil",this.foto_profil)
          this.router.navigate(["/home"])
        } else {
          alert(response.message)
        }
      });

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
