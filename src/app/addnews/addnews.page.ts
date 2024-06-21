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
  new_judul = ""
  new_deskripsi = ""
  new_url = ""
  new_tujuan = "Tidak tahu"
  new_tanggal = new Date().toISOString()

  arr_tujuan: string[] = []

  constructor(private router: Router, private newsService: NewsService, private userService: UserserviceService) { }

  ngOnInit() {
    this.arr_tujuan = ["Pemkot", "PLN", "PDAM", "Polisi", "Tidak tahu"]
  }

  public alertButtons = ['OK'];

  addNews() {
    this.newsService.addNews(this.newsService.news.length+1, this.userService.now_username_login, this.new_judul, this.new_deskripsi, this.new_url, this.new_tujuan, this.new_tanggal, 0)

    this.new_judul = ""
    this.new_deskripsi = ""
    this.new_url = ""
    this.new_tujuan = "Tidak tahu"
    this.new_tanggal = new Date().toISOString()

    this.newsService.sortByDate(false)
    this.router.navigate(['/home'])
  }

}
