import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.page.html',
  styleUrls: ['./addnews.page.scss'],
})
export class AddnewsPage implements OnInit {
  now_id = 0
  new_judul = ""
  new_deskripsi = ""
  new_url = ""
  new_tujuan = 1
  new_tanggal = new Date().toDateString();

  arr_tujuan: any[] = []

  constructor(private router: Router, private newsService: NewsService, private userService: UserserviceService) { }

  ngOnInit() {
    this.now_id = parseInt(localStorage.getItem("id")?? "0");

    this.newsService.listTujuanInstansi().subscribe(
      (data) => {
        this.arr_tujuan = data;
      }
    )
  }

  public alertButtons = ['OK'];

  addNews() {
    // this.newsService.addNews(this.newsService.news.length+1, this.userService.now_username_login, this.new_judul, this.new_deskripsi, this.new_url, this.new_tujuan, this.new_tanggal, 0)

    // this.new_judul = ""
    // this.new_deskripsi = ""
    // this.new_url = ""
    // this.new_tujuan = "Tidak tahu"
    // this.new_tanggal = new Date().toISOString()

    // this.newsService.sortByDate(false)
    // this.router.navigate(['/home'])

    this.newsService.addKejadian(this.new_judul, this.new_deskripsi, this.new_url, this.new_tanggal, this.now_id, this.new_tujuan).subscribe(
      (response: any) => {
        if (response.result == "success") {
          alert("success")

          this.new_judul = ""
          this.new_deskripsi = ""
          this.new_url = ""
          this.new_tujuan = 1

          this.router.navigate(['/home'])
        }
        else {
          alert(response.message)
        }
      }
    );
  }
}
