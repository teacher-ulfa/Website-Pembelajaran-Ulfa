# Ruang Belajar PAI - SMA Negeri 1 Krembung (SMANIKRE)
### Pendidik: Ulfatul Husna, S.Ag., M.Pd.

Portal web pembelajaran terpadu Pendidikan Agama Islam & Budi Pekerti (PAI & BP) berbasis Kurikulum Merdeka (Fase E Kelas X dan Fase F Kelas XI-XII) dengan pendekatan **Pembelajaran Mendalam (Deep Learning)**, **Moderasi Beragama (Wasathiyah)**, dan **Kurikulum Berbasis Cinta (KBC)**.

---

## 🚀 Panduan Publish ke GitHub Pages

Proyek ini telah dikonfigurasi secara otomatis dengan **GitHub Actions** (`.github/workflows/deploy.yml`) dan base path relatif (`base: './'`).

### Langkah 1: Buat Repositori Baru di GitHub
1. Buka [GitHub.com](https://github.com) lalu masuk ke akun Anda.
2. Klik tombol **New** (Buat Repositori Baru).
3. Beri nama repositori (contoh: `portal-pai-smanikre` atau `ruangbelajar-pai`).
4. Pilih **Public**, lalu klik **Create repository**.

### Langkah 2: Unggah Kode ke GitHub
Buka terminal pada komputer Anda di folder proyek ini, lalu jalankan perintah:
```bash
git init
git add .
git commit -m "Initial commit - Portal Pembelajaran PAI SMANIKRE"
git branch -M main
git remote add origin https://github.com/<USERNAME-ANDA>/<NAMA-REPOSITORI>.git
git push -u origin main
```
*(Ganti `<USERNAME-ANDA>` dan `<NAMA-REPOSITORI>` dengan akun dan nama repo Anda)*.

---

### Langkah 3: Aktifkan GitHub Pages (1x Klik)
1. Di halaman repositori GitHub Anda, klik tab **Settings** (Pengaturan).
2. Di menu sebelah kiri, klik **Pages**.
3. Pada bagian **Build and deployment** > **Source**, ubah dari *Deploy from a branch* menjadi **GitHub Actions**.
4. Selesai! GitHub Actions akan otomatis melakukan *build* dan *deploy*.
5. Dalam 1-2 menit, tautan website Anda akan langsung aktif, misalnya:
   `https://<username-anda>.github.io/<nama-repositori>/`

---

## 🛠️ Pengembangan Lokal (Development)

```bash
# Instal dependensi
npm install

# Jalankan server lokal
npm run dev

# Uji build produksi
npm run build
```

---

## 📂 Struktur Fitur Utama
- **Direktori Perangkat PAI**: Modul Ajar (RPM), Silabus CP & ATP, PROTA-PROMES, LKPD Siswa Kelas X & XII, Bahan Tayang Presentasi PPT.
- **Penyimpanan Cloud Google Drive**: Tautan langsung ke folder Google Drive resmi Ibu Ulfatul Husna.
- **Game Edukasi Interaktif**:
  - Game **IQRA: Tahfizh Puzzle** (QS. Al-Baqarah: 155-156 & QS. Ibrahim: 9).
  - Integrasi Aplikasi Web **IQRA 4** (Google Sites Belajar.id).
  - Kuis Cerdas Cermat PAI & Puzzle Susun Rukun.
- **Galeri Dokumentasi KBM**: Foto kegiatan KBM kontekstual, pembiasaan ibadah di masjid sekolah, dan proyek moderasi beragama P5-PPRA.
