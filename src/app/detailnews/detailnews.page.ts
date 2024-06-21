import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-detailnews',
  templateUrl: './detailnews.page.html',
  styleUrls: ['./detailnews.page.scss'],
})
export class DetailnewsPage implements OnInit {
  id = 0
  // news:any[] = []
  item:any

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"] * 1
    })
    this.item = this.newsService.getNewsByID(this.id)
  }

  addLike(id: number) {
    this.item = this.newsService.getNewsByID(id)
    this.item.jumlah_like++
  }
}
