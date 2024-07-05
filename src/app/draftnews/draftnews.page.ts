import { Component, OnInit } from '@angular/core';
import { DexieService } from '../dexie.service';

@Component({
  selector: 'app-draftnews',
  templateUrl: './draftnews.page.html',
  styleUrls: ['./draftnews.page.scss'],
})
export class DraftnewsPage implements OnInit {
  new_judul = ""
  new_deskripsi = ""
  new_url = ""
  new_tujuan = "Tidak tahu"
  new_tanggal = new Date().toISOString()
  arr_tujuan: string[] = []
  public alertButtons = ['OK'];


  constructor(private dexie:DexieService) { }

  ngOnInit() {
  }

  addDraftNews() {
    // this.dexie.addNews()
  }

}
