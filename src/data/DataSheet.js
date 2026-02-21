export const siberAmanData = [
      {
    "id": 1,
    "kategori": "Social Engineering",
    "judul": "Teknik Phishing Melalui WhatsApp",
    "image": "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800",
    "deskripsi": "Penipuan yang menyamar sebagai kurir paket atau undangan pernikahan digital (APK).",
    "artikel-par1": "Serangan siber berbasis berkas APK (Android Package Kit) yang dimodifikasi merupakan salah satu bentuk rekayasa sosial (social engineering) yang sangat berbahaya. Penyerang biasanya memanipulasi aplikasi tertentu agar memiliki kemampuan tersembunyi untuk mengakses data sensitif pada perangkat korban. Dengan membungkus program jahat tersebut ke dalam format aplikasi standar Android, pelaku berharap korban tidak menaruh curiga saat diminta untuk mengunduh dan memasangnya secara manual di luar toko aplikasi resmi.",
    "artikel-par2": "Strategi utama yang digunakan oleh pelaku adalah manipulasi nama berkas untuk menciptakan rasa urgensi atau keingintahuan. Nama-nama berkas seperti 'Undangan Pernikahan', 'Foto Paket', atau 'Tagihan Listrik' sering digunakan untuk memancing korban agar segera mengeklik dan membukanya. Taktik ini sangat efektif karena menyasar aktivitas sehari-hari yang umum dilakukan masyarakat, sehingga kewaspadaan digital korban sering kali menurun demi melihat isi dari pesan tersebut.",
    "artikel-par3": "Setelah berkas APK tersebut terpasang, aplikasi akan meminta izin akses yang sangat luas, terutama izin untuk membaca dan mengirim SMS. Begitu akses diberikan, aplikasi jahat ini akan bekerja di latar belakang tanpa sepengetahuan pemilik ponsel. Fungsi utamanya adalah memantau setiap pesan masuk, terutama pesan yang berisi kode OTP (One-Time Password) dari aplikasi perbankan, dompet digital, atau akun media sosial, kemudian meneruskannya secara otomatis ke server milik penyerang.",
    "artikel-par4": "Dampak dari keberhasilan serangan ini sangat fatal karena menyentuh aspek finansial dan privasi data. Dengan menguasai kode OTP, penyerang dapat dengan mudah menembus sistem keamanan dua faktor (Two-Factor Authentication) dan mengambil alih akun penting milik korban. Hal ini memungkinkan pelaku untuk menguras saldo rekening, melakukan transaksi ilegal atas nama korban, hingga menyalahgunakan data pribadi untuk tindak kriminal lainnya di dunia maya.",
    "artikel-par5": "Untuk menghindari ancaman ini, pengguna harus selalu waspada dan tidak sembarangan mengunduh berkas dari sumber yang tidak dikenal, terutama yang dikirim melalui platform pesan instan. Sangat disarankan untuk tetap menggunakan toko aplikasi resmi seperti Google Play Store dan selalu menonaktifkan izin 'Install Unknown Apps' pada pengaturan perangkat. Selain itu, membaca dengan teliti setiap permintaan izin (permission) saat memasang aplikasi baru adalah langkah krusial untuk memastikan keamanan data pribadi tetap terjaga.",
    "solusi": [
      "Jangan pernah menginstal aplikasi di luar Play Store.",
      "Periksa izin aplikasi, pastikan tidak ada izin baca SMS.",
      "Gunakan antivirus mobile yang terupdate."
    ],
    "tingkat_risiko": "High"
  },
  {
    "id": 2,
    "kategori": "Web Vulnerability",
    "judul": "SQL Injection (SQLi) Dasar",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    "deskripsi": "Celah pada input form yang memungkinkan penyerang mengakses database.",
    "artikel": "Penyerang memasukkan perintah SQL seperti ' OR 1=1 -- pada kolom login untuk masuk tanpa password.",
    "solusi": [
      "Gunakan Prepared Statements atau Parameterized Queries.",
      "Validasi semua input dari pengguna.",
      "Gunakan Web Application Firewall (WAF)."
    ],
    "tingkat_risiko": "Critical"
  },
  {
    "id": 3,
    "kategori": "Network Security",
    "judul": "Man-in-the-Middle (MitM) Attack",
    "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    "deskripsi": "Pencegatan data saat bertransaksi di WiFi publik yang tidak aman.",
    "artikel": "Penyerang membuat WiFi palsu untuk mencuri data kartu kredit atau login yang dikirimkan melalui jaringan tersebut.",
    "solusi": [
      "Gunakan VPN saat terkoneksi ke WiFi publik.",
      "Pastikan website menggunakan protokol HTTPS.",
      "Lupakan (forget) jaringan WiFi publik setelah selesai digunakan."
    ],
    "tingkat_risiko": "Medium"
  }
]