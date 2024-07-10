import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { DexieService } from '../dexie.service';

@Component({
  selector: 'app-draftnews',
  templateUrl: './draftnews.page.html',
  styleUrls: ['./draftnews.page.scss'],
})
export class DraftnewsPage implements OnInit {
  new_id = 0
  new_judul = ""
  new_deskripsi = ""
  new_url = ""
  new_tujuan = 0
  new_tanggal = new Date().toISOString()
  arr_tujuan: any[] = []
  public alertButtons = ['OK'];


  constructor(private news: NewsService, private dexie:DexieService) { }

  ngOnInit() {
    var user_id:any = localStorage.getItem("id");
    if (user_id != null) {
      this.new_id = user_id * 1
    } else {
      this.new_id = 0
    }
    this.news.listTujuanInstansi().subscribe(
      (data) => {
        this.arr_tujuan = data;
      }
    )
  }

  addDraftNews(judul:string, desk:string, url:string, tujuan:number, tanggal:string) {
    this.dexie.addNews(
      judul,
      desk,
      url,
      tujuan,
      tanggal,
      this.new_id
    ).then(
      () => {
        alert("News added successfully")
      }
    ).catch(error => {
      alert("Error adding news: " + error)
    })
  }

}
