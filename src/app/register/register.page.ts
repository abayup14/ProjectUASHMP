import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  new_username = ""
  new_namaLengkap = ""
  new_url = ""
  new_pass = ""
  alert_message = ""

  alertButtons = ['OK'];

  constructor(
    private userservice: UserserviceService,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.new_username = ""
    this.new_namaLengkap = ""
    this.new_pass = ""
    this.new_url = ""
  }

  async register() {
    this.userservice.register(
      this.new_username,
      this.new_namaLengkap,
      this.new_pass,
      this.new_url
    ).subscribe(
      (response: any) => {
        if (response.result === "success") {
          this.alert_message = "Berhasil Register"
          this.new_username = ""
          this.new_namaLengkap = ""
          this.new_url = ""
          this.new_pass = ""
          this.router.navigate(["/login"])
        }
      }
    )

    await this.presentAlert()
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Information',
      message: this.alert_message,
      buttons: ['OK']
    });
    await alert.present();
  }

  // konfirmasi = [
  //   {
  //     text: "Batal",
  //     role: "cancel"
  //   },
  //   {
  //     text: "Register",
  //     role: "confirm",
  //     handle: () => {
  //       this.register()
  //     }
  //   }
  // ]
}
