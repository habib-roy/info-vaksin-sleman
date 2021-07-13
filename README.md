![Vercel Deployment](https://therealsujitk-vercel-badge.vercel.app/?app=info-vaksin-sleman) ![Language](https://img.shields.io/github/languages/top/habib-roy/info-vaksin-sleman) ![Issues](https://img.shields.io/github/issues/habib-roy/info-vaksin-sleman) ![PRs](https://img.shields.io/github/issues-pr/habib-roy/info-vaksin-sleman) ![License](https://img.shields.io/github/license/habib-roy/info-vaksin-sleman)

## Info Vaksin Sleman
Informasi kegiatan vaksinasi dari fasilitas kesehatan di daerah Sleman

### Sumber kurasi data dari :

- Jadwal dan Kuota

    ```https://daftarvaksin.slemankab.go.id/_adm/api/data_jadwal?id_faskes=74&nik=&umur=```
- Daftar referensi fasilitas kesehatan

    ```https://daftarvaksin.slemankab.go.id/_adm/api/list-faskes```
- Data referensi rumah sakit di Sleman
    
    ```https://sirs.kemkes.go.id/fo/home/rekap_rs_all?id=3404```
- Data referensi lokasi rumah sakit di DIY
    
    ```http://geoportal.slemankab.go.id/layers/geonode:_3404_50kb_pt_fasilitas_kesehatan_kabsleman_dptr_2018```
- Data referensi lokasi _amenity clinic_ dan _amenity hospital_ dari openstreetmap

### Akses data menggunakan API
- Daftar faskes
    
    ```/api/v1/faskes```
- Daftar jadwal dan kuota vaksin tiap faskes
    
    ```/api/v1/jadwal-faskes?id_faskes={id}```
- Daftar jadwal dan kuota vaksin semua faskes
    
    ```/api/v1/jadwal```

### Kontributor

![Contributors Stats](https://contrib.rocks/image?repo=habib-roy/info-vaksin-sleman)