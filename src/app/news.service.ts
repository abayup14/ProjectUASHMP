import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // news = [
  //   {
  //     id: 1,
  //     username: "steven",
  //     judul: "Listrik Padam di Wilayah Surabaya Timur",
  //     deskripsi: "Hari ini, saya dan sejumlah warga Surabaya Timur dikejutkan oleh insiden listrik padam yang tiba-tiba terjadi. Suasana kaget dan kekhawatiran langsung menyelimuti pikiran saya ketika lampu-lampu di sekitar kami mati secara bersamaan. Pemadaman ini tidak hanya menimbulkan ketidaknyamanan, tetapi juga mengganggu jalannya aktivitas harian kami.",
  //     url_gambar: "https://purisuryajaya.com/wp-content/uploads/2020/07/Listrik-Bawah-Tanah.jpg",
  //     tujuan_instansi: "PLN",
  //     tanggal: new Date(2024, 4, 10).toISOString(),
  //     jumlah_like: 5,
  //     comment: [
  //       "Semoga PLN bisa cepat memperbaiki masalah ini. Kita semua butuh listrik untuk aktivitas sehari-hari.",
  //       "Kok sering banget ya listrik padam di Surabaya Timur? Harusnya ada langkah konkret dari PLN untuk mengatasi ini.",
  //       "Pernah dengar tentang rencana pemadaman listrik tapi nggak pernah dikabari jadinya repot. Komunikasi PLN harus lebih baik lagi."]
  //   },
  //   {
  //     id: 2,
  //     username: "abayu",
  //     judul: "Pencurian di Perumahan Surabaya Selatan",
  //     deskripsi: "Hari ini, saya dan para tetangga di perumahan Surabaya Selatan dihebohkan oleh sebuah kejadian yang mengejutkan yaitu pencurian. Pencurian ini bukan hanya menyebabkan kerugian materi, tetapi juga meninggalkan luka psikologis yang dalam bagi korban.",
  //     url_gambar: "https://img2.beritasatu.com/cache/beritasatu/480x310-3/2023/06/1685950141-1115x610.webp",
  //     tujuan_instansi: "Polisi",
  //     tanggal: new Date(2024, 4, 5).toISOString(),
  //     jumlah_like: 1,
  //     comment: [
  //       "Kepolisian harus segera bertindak tegas dan melakukan patroli lebih intensif di wilayah ini. Jangan biarkan kejahatan merajalela.",
  //       "Kami berharap para korban bisa segera mendapatkan keadilan dan pemulihan setelah kejadian tragis ini.",
  //       "Mari saling mendukung dan menguatkan satu sama lain dalam menghadapi situasi yang sulit seperti ini."
  //     ]
  //   },
  //   {
  //     id: 3,
  //     username: "steven",
  //     judul: "Air Tiba-tiba Jadi Keruh dan Bau Tidak Sedap di Surabaya Barat",
  //     deskripsi: "Hari ini, saya dan warga kampung saya dikejutkan dengan kondisi air keruh dan bau tidak sedap yang keluar dari keran. Awalnya, saya tidak menyadari masalah ini sampai saya hendak mengisi gelas dengan air dari keran, dan airnya terlihat sangat keruh dan berwarna tidak biasa. Kondisi ini sangat mengganggu kegiatan sehari-hari dan menimbulkan kekhawatiran akan kualitas air yang kami gunakan.",
  //     url_gambar: "https://asset-2.tstatic.net/aceh/foto/bank/images/air-pdam-keruh-pelanggan-kecewa.jpg",
  //     tujuan_instansi: "PDAM",
  //     tanggal: new Date(2024, 4, 15).toISOString(),
  //     jumlah_like: 3,
  //     comment: [
  //       "Saya juga mengalami hal yang sama. Sangat mengkhawatirkan kualitas air yang kita gunakan sehari-hari.",
  //       "Ini perlu segera ditangani oleh pihak berwenang agar masyarakat tidak khawatir akan kesehatan mereka.",
  //       "Kita harus meningkatkan kesadaran akan pentingnya menjaga kebersihan air dan lingkungan sekitar.",
  //       "Semoga PDAM segera memberikan penjelasan dan solusi terkait masalah ini.",
  //     ]
  //   }
  // ]

  news = []
  link = "https://ubaya.me/hybrid/160421058/project_uas";

  kejadianList(): Observable<any> {
    return this.http.get(this.link + "/kejadians.php");
  }

  kejadianDetail(id: number): Observable<any> {
    return this.http.get(this.link + "/kejadian_detail.php?id=" + id);
  }

  listTujuanInstansi(): Observable<any> {
    return this.http.get(this.link + "/get_tujuan_instansi.php");
  }

  addKejadian(k_judul: string, k_deskripsi: string,  k_gambar_kejadian: string, k_tanggal: string, k_users_id: number, k_tujuan_instansi_id: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('judul', k_judul);
    body.set('deskripsi', k_deskripsi);
    body.set('gambar_kejadian', k_gambar_kejadian);
    body.set('tanggal', k_tanggal);
    body.set('users_id', k_users_id.toString());
    body.set('tujuan_instansi_id', k_tujuan_instansi_id.toString());
    const urlEncodedData = body.toString();
    return this.http.post(
      this.link + "/new_kejadian.php", urlEncodedData, { headers });
  }

  addLikeKejadian(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('id', id.toString()); const urlEncodedData = body.toString();
    return this.http.post(this.link + "/kejadian_likes.php", urlEncodedData, { headers });
  }

  constructor(private http: HttpClient) { }
}
