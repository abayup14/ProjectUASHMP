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
  new_komen = ""

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

  addLike(id: number) {
    this.newsService.addLikeKejadian(id).subscribe((response: any) => {
      if (response.result === 'success') {
        alert("Berhasil like kejadian")
        this.newsService.kejadianList().subscribe(
          (data) => {
            this.item = data;
          }
        );
      }
      else {
        alert(response.message)
      }
    });
  }
  addComment(id:number) {
    this.newsService.addKomen(this.new_komen, id).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("success")
          this.new_komen = ""
        } else {
          alert(response.message)
        }
      }
    )
  }
}
