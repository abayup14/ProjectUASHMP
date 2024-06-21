import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  now_username_login = "";

  users = [
    {
      username: "steven",
      fullname: "Steven Christopher",
      url_foto: "",
      password: "s"
    },
    {
      username: "abayu",
      fullname: "Andreas Bayu",
      url_foto: "",
      password: "a"
    },
  ]
  constructor() { }

  addUser(p_username: string, p_namaLengkap: string, p_url: string, p_pass: string) {
    this.users.push({
      username: p_username,
      fullname: p_namaLengkap,
      url_foto: p_url,
      password: p_pass
    })
  }

}
