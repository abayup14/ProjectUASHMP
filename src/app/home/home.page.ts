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

  constructor(private newsService: NewsService, private userService: UserserviceService) {}

  ngOnInit() {
    this.newsService.kejadianList().subscribe(
      (data) => {
        this.news = data;
        this.now_login_username = localStorage.getItem("fullname") ?? "";
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
