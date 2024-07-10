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
  new_tanggal = new Date().toDateString()
  arr_tujuan: any[] = []
  public alertButtons = ['OK'];
  nama_tujuan = ""

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
    if (tujuan == 1) {
      this.nama_tujuan = "Pemkot"
    } else if (tujuan == 2) {
      this.nama_tujuan = "PLN"
    } else if (tujuan == 3) {
      this.nama_tujuan = "PDAM"
    } else if (tujuan == 4) {
      this.nama_tujuan = "Polisi"
    } else {
      this.nama_tujuan = "Tidak Tahu"
    }
    this.dexie.addNews(
      judul,
      desk,
      url,
      tujuan,
      this.nama_tujuan,
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
