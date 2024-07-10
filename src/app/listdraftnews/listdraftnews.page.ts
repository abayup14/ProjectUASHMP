import { Component, OnInit } from '@angular/core';
import { DexieService, MyNews } from '../dexie.service';

@Component({
  selector: 'app-listdraftnews',
  templateUrl: './listdraftnews.page.html',
  styleUrls: ['./listdraftnews.page.scss'],
})
export class ListdraftnewsPage implements OnInit {
  news:MyNews[] = [];

  constructor(private dexie:DexieService) { }

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

}
