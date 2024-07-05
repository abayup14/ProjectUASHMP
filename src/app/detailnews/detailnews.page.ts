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
  item:any = {}

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.newsService.kejadianDetail(params['id']).subscribe(
        (data) => {
          this.item = data;
        }
      );
    });
  }

  // addLike(id: number) {
  //   this.item = this.newsService.kejadianDetail(id)
  //   this.item.jumlah_like++
  // }
}
