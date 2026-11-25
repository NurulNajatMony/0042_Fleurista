# 🌸 Fleurista : Aplikasi Katalog & Pre-Order Buket dan Gift Box UMKM

- **Nama Mahasiswa:** Nurul Najat Mony
- **NIM:** `20240140042`
- **Dosen Pengampu:** Haris Setyawan, S.T., M.Eng.
- **Repositori:** `0042_Fleurista`
- **Tema:** UMKM

## 📖 Deskripsi Aplikasi
**Fleurista** adalah aplikasi mobile berbasis Android yang dibangun menggunakan **Jetpack Compose** dan arsitektur **MVVM (Model-View-ViewModel)** untuk membantu UMKM lokal dalam mengelola katalog buket bunga, *gift box*, serta pemesanan *pre-order* secara praktis. Aplikasi ini mengimplementasikan autentikasi **JWT (Access Token & Refresh Token)** dengan **hak akses berbasis peran (Admin Toko dan Pelanggan)**, integrasi **REST API MySQL** (tanpa Room Database), serta fitur **penyimpanan file lokal** untuk menyimpan dan membaca kembali nota pesanan (`.txt`).

---

## 📋 Pemenuhan Persyaratan Minimal Fitur Aplikasi

| No | Kategori | Persyaratan Minimal | Status |
| :-: | :--- | :--- | :---: |
| 1 | **Autentikasi** | Login, Register, Access Token (JWT), Refresh Token | 🔄 Backend Selesai |
| 2 | **Otorisasi (Hak Akses)** | Role-Based UI (`Admin Toko` & `Pelanggan`) | 🔄 RBAC Backend Selesai |
| 3 | **Navigasi & Routing** | Multi-halaman menggunakan **Navigator Compose** | ⏳ Direncanakan (P11) |
| 4 | **Manajemen State** | Arsitektur **MVVM** (`ViewModel` + `StateFlow`) | 🔄 Model Data Siap |
| 5 | **Tabel / Data** | **6 Entitas Utama Berelasi** (`users`, `categories`, `products`, `addresses`, `orders`, `reviews`) | ✅ Selesai |
| 6 | **Fitur (5 CRUDS Penuh)** | 5 Fitur dengan operasi **CRUDS penuh (Tambah, Lihat, Ubah, Hapus, Cari)** | ⏳ Direncanakan (P12–P14) |
| 7 | **Integrasi REST API** | Request & parsing JSON dari REST API (Node.js + Express) | 🔄 API Autentikasi Siap |
| 8 | **Database** | **MySQL** (Tanpa Room Database) | ✅ Selesai (`schema.sql`) |
| 9 | **Penyimpanan File Lokal** | Simpan & baca file nota pesanan lokal (`.txt`) | ⏳ Direncanakan (P14) |
| 10 | **UI / UX** | UI/UX matang dengan penerapan murni **Jetpack Compose** | 🔄 Tema Warna Siap |

---

## 🛠️ Rincian 5 Modul CRUDS Penuh (Tambah, Lihat, Ubah, Hapus, Cari)

| No | Modul Fitur | Create (Tambah) | Read (Lihat) | Update (Ubah) | Delete (Hapus) | Search (Cari) | Status |
| :-: | :--- | :--- | :--- | :--- | :--- | :--- | :---: |
| 1 | **Pengelolaan Kategori Produk** | Tambah kategori | Lihat daftar kategori | Ubah kategori | Hapus kategori | Cari nama kategori | ⏳ Direncanakan |
| 2 | **Katalog Buket & Stok** | Tambah buket/gift box | Lihat katalog & detail | Ubah info, harga & stok | Hapus produk | Cari buket & filter kategori | ⏳ Direncanakan |
| 3 | **Transaksi Pesanan Pre-Order** | Buat pesanan pre-order | Lihat daftar & detail pesanan | Ubah status / detail pesanan Pending | Hapus / batalkan pesanan | Cari kode pesanan / produk / status | ⏳ Direncanakan |
| 4 | **Profil & Alamat Pengiriman** | Tambah alamat pengiriman | Lihat profil & daftar alamat | Ubah profil & alamat | Hapus alamat pengiriman | Cari label alamat / penerima | ⏳ Direncanakan |
| 5 | **Ulasan & Rating Produk** | Tambah rating & ulasan | Lihat daftar ulasan | Ubah ulasan sendiri | Hapus ulasan | Cari komentar / filter bintang | ⏳ Direncanakan |

---

## 📅 Laporan Progres Mingguan (Pertemuan 9 – Pertemuan 16)

| Minggu | Pertemuan | Pembaruan Progres | Status |
| :---: | :---: | :--- | :---: |
| **Minggu 1** | **Pertemuan 9** | - Penyusunan dokumen **SRS** aplikasi Fleurista<br>- Perancangan skema 6 tabel MySQL yang saling terhubung beserta 5 modul CRUDS<br>- Persiapan repositori `0042_Fleurista` & dokumentasi `README.md` | ✅ Selesai |
| **Minggu 2** | **Pertemuan 10** | - Pembuatan skema database MySQL (`schema.sql` & `seed.sql`)<br>- Implementasi Backend REST API & Endpoint Autentikasi JWT (Access + Refresh Token)<br>- Pengaturan Tema Material 3 Fleurista & Model 6 Entitas di Android | ✅ Selesai |
| **Minggu 3** | **Pertemuan 11** | - Pengaturan Retrofit, JWT Interceptor, DataStore, & Navigation Compose<br>- Implementasi UI & ViewModel Login, Register, serta Role-Based UI | 🔄 Berikutnya |
| **Minggu 4** | **Pertemuan 12** | - Implementasi CRUDS 1 (Kategori Produk) & CRUDS 2 (Katalog Buket & Stok) | ⏳ Direncanakan |
| **Minggu 5** | **Pertemuan 13** | - Implementasi CRUDS 4 (Profil & Alamat Pengiriman) & CRUDS 3 (Transaksi Pre-Order) | ⏳ Direncanakan |
| **Minggu 6** | **Pertemuan 14** | - Implementasi CRUDS 5 (Ulasan/Rating Produk) & Simpan/Baca Nota Lokal `.txt` | ⏳ Direncanakan |
| **Minggu 7** | **Pertemuan 15** | - Penyempurnaan UI/UX Jetpack Compose, Validasi Form, & Pengujian Menyeluruh | ⏳ Direncanakan |
| **Minggu 8** | **Pertemuan 16** | - Finalisasi `README.md`, pengecekan keselarasan akhir SRS, & persiapan presentasi/demo | ⏳ Direncanakan |
