import { Injectable } from '@angular/core';
import Dexie from 'dexie';

export interface MyNews {
  id: number,
  judul: string,
  deskripsi: string,
  gambar: string,
  tujuan_instansi: number,
  tanggal: string,
  user_id: number
}

@Injectable({
  providedIn: 'root'
})
export class DexieService extends Dexie {
  listNews: Dexie.Table<MyNews, number>;

  constructor() {
    super("dbProjectUASHMP");
    this.version(1).stores({
      listNews: "++id, judul, deskripsi, gambar, tujuan_instansi, tanggal, user_id"
    });

    this.listNews = this.table("myNews");
   }

   async addNews(id:number, judul:string, deskripsi:string, gambar:string, tujuan_instansi:number, tanggal:string, user_id:number): Promise<void> {
    await this.listNews.add({
      id,
      judul,
      deskripsi,
      gambar,
      tujuan_instansi,
      tanggal,
      user_id
    });
  }

   async getAllNews(): Promise<any[]> {
    return this.listNews.toArray();
  }
}
