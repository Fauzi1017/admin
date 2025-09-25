# Admin Panel - Nande Nihon CMS

Sistem manajemen konten (CMS) untuk website Nande Nihon dengan fitur autentikasi admin yang aman.

## Fitur

### 🔐 Autentikasi Admin
- Login/logout yang aman menggunakan Supabase Auth
- Session management otomatis
- Redirect otomatis jika belum login

### 📊 Dashboard Overview
- Statistik konten (Team, Testimoni, Artikel)
- Recent activity feed
- Quick access ke semua fitur

### 👥 Manajemen Team
- Tambah/edit/hapus anggota tim
- Upload foto profil
- Informasi kontak dan social media
- Preview real-time

### 💬 Manajemen Testimoni
- Tambah/edit/hapus testimoni
- Upload foto testimoni
- Preview testimoni sebelum publish

### 📝 Manajemen Artikel
- Tambah/edit/hapus artikel
- Status publish/unpublish
- Rich text editor untuk konten

## Struktur File

```
admin/
├── index.html          # Halaman utama admin
├── login.html          # Halaman login
├── dashboard.html      # Dashboard admin utama
├── addteam.html        # Form tambah team (legacy)
├── testimoni-form.html # Form tambah testimoni (legacy)
└── README.md          # Dokumentasi ini
```

## Cara Menggunakan

### 1. Akses Admin Panel
1. Buka `admin/index.html` di browser
2. Klik "Login to Admin Panel"
3. Masukkan email dan password admin

### 2. Mengelola Konten

#### Team Members
1. Pilih menu "Team" di sidebar
2. Klik "Add Member" untuk menambah anggota baru
3. Isi form dengan data lengkap
4. Klik "Save" untuk menyimpan

#### Testimonials
1. Pilih menu "Testimoni" di sidebar
2. Klik "Add Testimonial" untuk menambah testimoni baru
3. Isi form dengan data testimoni
4. Klik "Save" untuk menyimpan

#### Articles
1. Pilih menu "Artikel" di sidebar
2. Klik "Add Article" untuk menambah artikel baru
3. Isi judul dan konten artikel
4. Centang "Published" jika ingin langsung publish
5. Klik "Save" untuk menyimpan

### 3. Edit/Delete Konten
- Klik tombol "Edit" untuk mengubah data
- Klik tombol "Delete" untuk menghapus data
- Konfirmasi penghapusan di popup

## Konfigurasi Supabase

Pastikan database Supabase sudah dikonfigurasi dengan tabel berikut:

### Tabel `team`
```sql
CREATE TABLE team (
    id SERIAL PRIMARY KEY,
    photo TEXT,
    nama TEXT NOT NULL,
    jabatan TEXT,
    moto TEXT,
    email TEXT,
    instagram TEXT,
    twitter TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### Tabel `testimoni`
```sql
CREATE TABLE testimoni (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    old INTEGER,
    image TEXT,
    text_testi TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### Tabel `notes`
```sql
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    is_published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW()
);
```

## Keamanan

- Semua halaman admin memerlukan autentikasi
- Session otomatis expire jika tidak aktif
- Redirect otomatis ke login jika session invalid
- Input validation pada semua form
- XSS protection dengan HTML escaping

## Teknologi

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Supabase (Database + Auth)
- **Styling**: Custom CSS dengan design system modern
- **Icons**: SVG icons inline

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Troubleshooting

### Login Gagal
1. Pastikan email dan password benar
2. Periksa koneksi internet
3. Cek konfigurasi Supabase

### Data Tidak Muncul
1. Periksa koneksi ke Supabase
2. Pastikan tabel database sudah dibuat
3. Cek browser console untuk error

### Styling Rusak
1. Pastikan file CSS ter-load dengan benar
2. Cek path ke asset files
3. Clear browser cache

## Support

Untuk bantuan teknis, hubungi developer atau cek dokumentasi Supabase.
