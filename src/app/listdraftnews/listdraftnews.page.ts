import { Component, OnInit } from '@angular/core';
import { DexieService, MyNews } from '../dexie.service';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-listdraftnews',
  templateUrl: './listdraftnews.page.html',
  styleUrls: ['./listdraftnews.page.scss'],
})
export class ListdraftnewsPage implements OnInit {
  news:MyNews[] = [];

  constructor(private dexie:DexieService, private newsService:NewsService) { }

  ngOnInit() {
    this.getDraftNews()
  }

  async getDraftNews() {
    try {
      this.news = await this.dexie.getAllNews()
    } catch (error) {
      console.error("error loading news: " + error)
    }
  }

  publish(id:number) {
    var new_news = this.news.find(item => item.id === id);
    if (new_news) {
      this.newsService.addKejadian(
        new_news.judul,
        new_news.deskripsi,
        new_news.gambar,
        new_news.tanggal,
        new_news.user_id,
        new_news.tujuan_instansi
      ).subscribe(
        (response:any) => {
          if (response.result == "success") {
            alert("Success add news")
            this.dexie.deleteNews(id)
          } else {
            alert(response.message)
          }
        }
      )
    }

  }
}
