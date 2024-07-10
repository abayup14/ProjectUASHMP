import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  news:any[] = []
  now_login_username = ""
  now_id = 0;

  constructor(private newsService: NewsService, private userService: UserserviceService) {}

  ngOnInit() {
    this.newsService.kejadianList().subscribe(
      (data) => {
        this.news = data;
        this.now_login_username = localStorage.getItem("fullname") ?? "";
        this.now_id = parseInt(localStorage.getItem("id")?? "0");
      });
  }

  addLike(id: number) {
    this.newsService.addLikeKejadian(id).subscribe((response: any) => {
      if (response.result === 'success') {
        alert("Berhasil like kejadian")
        this.newsService.kejadianList().subscribe(
          (data) => {
            this.news = data;
          }
        );
      }
      else {
        alert(response.message)
      }
    });
  }
}
