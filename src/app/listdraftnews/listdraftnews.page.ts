import { Component, OnInit } from '@angular/core';
import { DexieService } from '../dexie.service';

@Component({
  selector: 'app-listdraftnews',
  templateUrl: './listdraftnews.page.html',
  styleUrls: ['./listdraftnews.page.scss'],
})
export class ListdraftnewsPage implements OnInit {

  constructor(private dexie:DexieService) { }

  ngOnInit() {
  }

}
