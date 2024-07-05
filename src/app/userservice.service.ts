import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  // users = [];

  link = "https://ubaya.me/hybrid/160421058/project_uas/"


  // users = [
  //   {
  //     username: "steven",
  //     fullname: "Steven Christopher",
  //     url_foto: "",
  //     password: "s"
  //   },
  //   {
  //     username: "abayu",
  //     fullname: "Andreas Bayu",
  //     url_foto: "",
  //     password: "a"
  //   },
  // ]
  constructor(private http: HttpClient) { }

  register(u_username: string, u_fullname: string, u_password: string, u_foto_profil: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', u_username);
    body.set('fullname', u_fullname);
    body.set('password', u_password);
    body.set('foto_profil', u_foto_profil);
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "register.php", urlEncodedData, { headers });
  }

  login(u_username:string, u_password:string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', u_username);
    body.set('password', u_password);
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "login_uas.php", urlEncodedData, { headers });
  }

}
