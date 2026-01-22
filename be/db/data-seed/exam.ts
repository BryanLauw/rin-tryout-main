import { QuestionType } from "@prisma/client"

export type Question = {
  imageUrl?: string
  txtField?: string
  question: string
  options: string[]
  answerIndex: number[] | string[]
  type?: QuestionType
}

export type ujianSession = {
  name: string
  description?: string
  duration?: number
  numOfQuestions?: number
  questions: Question[]
}

export type Ujian = {
  name: string
  description?: string
  items: ujianSession[]
}


// Tes Potensi Skolastik (TPS)
const soalPU: ujianSession = {
  name: "Penalaran Umum",
  description: "Ada 30 soal yang akan dikerjakan dalam 30 menit, dengan komposisi: Penalaran Induktif 10 soal 10 menit, Penalaran Deduktif 10 soal 10 menit, Penalaran Kuantitaf 10 soal 10 menit",
  questions: [
    // Penalaran Induktif
    {
      txtField: `Panggung kesenian tradisional, seperti lenong atau ludruk, merupakan wadah untuk menanamkan nilai-nilai etika dan moral. Apabila panggung kesenian tradisional punah, orang-orang mencari hiburan melalui panggung-panggung modern dan tidak terjadi regenerasi karena anak-anak muda tidak lagi mengenalnya. Di sisi lain, gedung-gedung kesenian tradisional satu per satu mulai tutup dan para pelaku seninya beralih profesi.`,
      question: `Berdasarkan paragraf di atas, apabila gedung-gedung kesenian tradisional satu per satu mulai tutup dan para pelaku seninya beralih profesi, manakah di bawah ini simpulan yang PALING MUNGKIN BENAR?`,
      options: [
          `Panggung kesenian tradisional telah punah.`,
          `Panggung kesenian tradisional pernah punah.`,
          `Panggung kesenian tradisional sudah pasti punah.`,
          `Panggung kesenian tradisional pada akhirnya punah.`,
          `Panggung kesenian tradisional mungkin akan punah.`,
          ],
      answerIndex: [3]
    },
    {
      txtField: `Kendaraan ojek online makin menjamur akhir-akhir ini karena dirasakan lebih murah dalam memberikan tarif. Selain itu, respons yang cepat membuat perjalanan menjadi lebih singkat dan waktu perjalanan dapat diprediksi. Akan tetapi, banyaknya kendaraan ojek online menimbulkan kepadatan di jalan raya sehingga kemacetan tidak dapat dihindari.`,
      question: `Berdasarkan informasi tersebut, manakah pertanyaan yang PASTI BENAR?`,
      options: [
          `Kemacetan di jalan terjadi karena tarif ojek online yang murah.`,
          `Semua orang yang menggunakan ojek online tiba ditujuan tepat waktu.`,
          `Moda transportasi lain memberikan tarif yang lebih mahal dibandingkan kendaraan ojek online.`,
          `Waktu perjalanan moda transportasi lain tidak dapat diprediksi.`,
          `Beberapa permasalahan lalu lintas terjadi karena menjamurnya kendaraan ojek online.`,
          ],
      answerIndex: [4]
    },
    {
      txtField: `Tingkat kematian yang disebabkan serangan jantung makin meningkat akhir-akhir ini. Dokter menyebutkan saat ini banyak masyarakat yang mengonsumsi makanan berkolesterol tinggi sebagai pemicu serangan jantung.`,
      question: `Manakah pernyataan berikut yang akan MEMPERLEMAH pendapat dokter tersebut?`,
      options: [
          `Penyakit jantung bukan merupakan penyakit yang paling membahayakan.`,
          `Masyarakat tidak menyadari pentingnya gaya hidup sehat.`,
          `Makanan yang mengandung kolesterol tinggi meningkatkan risiko kematian.`,
          `Produk-produk makanan saat ini digemari oleh masyarakat.`,
          `Masyarakat tidak memperhatikan kandungan gizi dalam makanannya.`,
          ],
      answerIndex: [3]
    },
    {
      txtField: `Dalam beberapa bulan terakhir diberlakukan syarat bagi penumpang kereta api untuk menunjukkan tiket, KTP, dan surat keterangan sehat kepada petugas stasiun, Riki telah membeli tiket kereta api dan merasa dirinya sehat.`,
      question: `Simpulan berdasarkan informasi dalam teks tersebut adalah Riki dapat melakukan perjalanan dengan menggunakan kereta api. Manakah pernyataan berikut yang menggambarkan kualitas simpulan tersebut?`,
      options: [
          `Simpulan tersebut pasti benar.`,
          `Simpulan tersebut mungkin benar.`,
          `Simpulan tersebut pasti salah.`,
          `Simpulan tidak relevan dengan informasi yang diberikan.`,
          `Simpulan tidak dapat dinilai karena informasi tidak cukup.`,
          ],
      answerIndex: [4]
    },
    {
      type: "MULTIPLE_SELECTION",
      txtField: `Pakar meteorologi menyebutkan bahwa wilayah Z sering mengalami banjir bandang karena tingginya curah hujan dan kurangnya penanganan limbah.`,
      question: `Pilih pernyataan yang MEMPERLEMAH pendapat pakar meteorologi tersebut. (Jawaban bisa lebih dari satu)`,
      options: [
          `Pemerintah telah membangun bendungan di wilayah Z untuk mengendalikan debit air saat hujan`,
          `Warga di wilayah Z menanam banyak pohon di sekitar sungai untuk mengurangi banjir.`,
          `Industri di wilayah Z lebih memilih membuang limbah ke sungai daripada ke tempat pembuangan sampah yang sesuai.`,
          `Pemerintah telah memperbaiki sistem drainase di wilayah Z untuk mengurangi genangan air saat hujan.`,
          `Warga di wilayah Z mengubah pola tanam mereka dengan mengurangi tanaman yang membutuhkan banyak air.`,
          ],
      answerIndex: [0,3]
    },
    {
      txtField: `Seorang ekonom menyebutkan bahwa nilai ekspor negara W menurun karena kurangnya diversifikasi produk dan ketergantungan pada satu pasar ekspor.`,
      question: `Penyataan-pernyataan berikut yang mendukung pendapat pakar ekonomi tersebut adalah....`,
      options: [
          `Pemerintah telah mempromosikan produk-produk unggulan negara W di pasar ekspor lainnya.`,
          `Perusahaan di negara W memilih untuk memproduksi barang yang laku di satu pasar ekspor pada tahun sebelumnya.`,
          `Pemerintah telah menambah tarif impor untuk barang sejenis yang diproduksi di dalam negeri.`,
          `Industri di negara W telah memperluas pasar domestik mereka.`,
          `Inflasi mengakibatkan nilal ekspor negara W menurun.`,
          ],
      answerIndex: [1]
    },
    {
      txtField: `Ahli kesehatan A mengatakan, "Seseorang yang makan makanan cepat saji lebih rentan mengalami obesitas daripada seseorang yang makan makanan sehat."
      \nAhli kesehatan B mengatakan, "Seseorang yang jarang berolahraga lebih rentan mengalami obesitas daripada seseorang yang rutin berolahraga."
      \nData menunjukkan bahwa sebagian besar orang yang mengalami obesitas makan makanan cepat saji dan tidur kurang dari 6 jam per hari.`,
      question: `Manakah kesimpulan berikut yang berkaitan dengan data tersebut?`,
      options: [
          `Memperkuat pernyataan ahli kesehatan A.`,
          `Memperkuat pernyataan ahli kesehatan B.`,
          `Memperlemah pernyataan ahli kesehatan A.`,
          `Memperlemah pernyataan ahli kesehatan B.`,
          `Tidak relevan dengan pernyataan ahli kesehatan A dan ahli kesehatan B.`,
          ],
      answerIndex: [0]
    },
    {
      txtField: `Sebuah artikel menyatakan bahwa daerah yang rawan terkena gempa bumi telah dipasangi sensor gempa yang dapat memberikan peringatan dini saat gempa bumi terjadi.`,
      question: `Simpulan berdasarkan informasi dalam artikel tersebut adalah bahwa daerah tersebut tidak akan terkena gempa bumi lagi karena sudah dipasang sensor gempa. Manakah pernyataan berikut yang menggambarkan kualitas simpulan tersebut?`,
      options: [
          `Simpulan tersebut pasti salah.`,
          `Simpulan tersebut mungkin benar.`,
          `Simpulan tersebut pasti benar.`,
          `Simpulan tidak relevan dengan informasi yang diberikan.`,
          `Simpulan tidak dapat dinilai karena informasi tidak cukup.`,
          ],
      answerIndex: [0]
    },
    {
      txtField: `Akhir-akhir ini, banyak kasus begal yang meresahkan warga Yogyakarta. Seorang warga menyatakan bahwa kasus begal terjadi karena korban memiliki yang mencolok sehingga mengundang perhatian.`,
      question: `Manakah pernyataan berikut yang memperkuat pendapat warga tersebut?`,
      options: [
          `Begal biasa dilakukan pada malam hari di tempat yang minim penerangan.`,
          `Biasanya, begal memilih pengendara secara acak untuk dijadikan korbannya.`,
          `Korban begal sebenarnya adalah musuh geng mereka yang sudah diincar sebelumnya.`,
          `Kebanyakan korban begal merupakan ibu-ibu yang berkendara sendiri dan mengenakan tas branded yang berharga mahal.`,
          `Selain begal, di Yogyakarta juga marak terjadi klitih yang mengincar anak usia sekolah.`,
          ],
      answerIndex: [3]
    },
    {
      type: "MULTIPLE_SELECTION",
      txtField: `Staf keuangan Swalayan X menyatakan bahwa angka penjualan di Swalayan X mengalami peningkatan sekitar 25% dibandingkan tahun lalu, karena diterapkannya program member, yaitu jika pembeli menjadi member maka akan mendapatkan voucher diskon yang dapat digunakan saat belanja selanjutnya.`,
      question: `Manakah pernyataan-pernyataan di bawah ini yang jika benar akan MEMPERLEMAH pernyataan dari Staf keuangan Swalayan X tersebut? (Jawaban bisa lebih dari satu)`,
      options: [
          `Keberhasilan program member di Swalayan X sudah dapat dilihat pada tahun sebelumnya.`,
          `Kenaikan penjualan di Swalayan X tidak hanya karena diterapkannya program member.`,
          `Swalayan X belum pernah menerapkan program member sebelumnya.`,
          `Harga kebutuhan di Swalayan X sangat tinggi dibanding swalayan yang lainnya.`,
          `Voucher diskon yang diperoleh member adalah potongan harga hingga 50% jika total belanja mencapai satu juta rupiah.`,
          ],
      answerIndex: [0,1,3]
    },
    // Penalaran Deduktif
    {
      txtField: `Kegiatan ekstrakulikuler dilakukan di luar ruangan jika diadakan pada hari Minggu. Jika kegiatan ekstrakulikuler dilakukan di luar ruangan, siswa mengenakan pakaian dinas lapangan.`,
      question: `Simpulan yang paling tepat adalah ....`,
      options: [
          `Jika kegiatan tidak diadakan pada hari Minggu, siswa tidak mengenakan pakaian dinas lapangan.`,
          `Jika siswa tidak mengenakan pakaian dinas lapangan, kegiatan ekstrakulikuler tidak diadakan pada hari Minggu.`,
          `Jika kegiatan ekstrakulikuler tidak dilakukan di luar ruangan, siswa tidak mengenakan pakaian dinas lapangan.`,
          `Jika siswa mengenakan pakaian dinas lapangan, kegiatan diadakan pada hari Minggu.`,
          `Jika kegiatan ekstrakulikuler dilakukan di luar ruangan, kegiatan tersebut tidak diadakan pada hari Minggu.`,
          ],
      answerIndex: [1]
    },
    {
      txtField: `Pada saat menjelang liburan, Santi berencana pergi ke luar kota. Jika Santi pergi ke Yogyakarta, ia akan mengajak adiknya. Jika Santi pergi ke Bali, ia akan mengajak temannya. Pada saat liburan, ia tidak mengajak adik atau temannya.`,
      question: `Simpulan yang paling tepat adalah ....`,
      options: [
          `Santi tidak pergi ke Bali, tetapi pergi ke Yogyakarta.`,
          `Santi tidak pergi ke Yogyakarta, tetapi pergi ke Bali.`,
          `Santu tidak pergi ke Bali tau ke Yogyakarta.`,
          `Santi memutuskan liburan ke kota lain.`,
          `Santi pergi ke Bali atau ke Yogyakarta`,
          ],
      answerIndex: [2]
    },
    {
      txtField: `Jika guru Matematika menambah jam pelajaran di hari Rabu, nilai siswa banyak yang meningkat. Jika nilai siswa banyak yang meningkat, siswa dapat mengikuti kegiatan ekstrakulikuler.`,
      question: `Simpulan yang tepat adalah ...`,
      options: [
          `Jika guru Matematika manambah jam pelajaran, nilai siswa banyak yang meningkat`,
          `Guru Matematika menambah jam pelajaran di hari Rabu jika siswa tidak mengikuti kegiatan eksrakulikuler`,
          `Jika guru Matematika menambah jam pelajaran di hari Rabu, ekstrakulikuler ditiadakan`,
          `Siswa dapat mengikuti kegiatan ekstrakulikuler jika guru Matematika menambah jam pelajaran di hari Rabu`,
          `Nilai siswa banyak yang meningkat jika tidak mengikuti kegiatan ekstrakulikuler`,
          ],
      answerIndex: [3]
    },
    {
      txtField: `Jika pantai di daerah X ramai dikunjungi wisatawan, perekonomian masyarakat daerah tersebut meningkat.
      \nJika ekosistem di pantai daerah X tidak dijaga dengan baik, hasil tangkapan nelayan daerah tersebut akan tercemar. Saat ini perekonomian masyarakat daerah X tidak mengalami peningkatan atau hasil tangkapan nelayan daerah x tidak tercemar.`,
      question: `Simpulan yang tepat adalah ...`,
      options: [
          `Pantai daerah X belum ramai dikunjungi wisatawan, tetapi ekosistem pantai di daerah tersebut tidak dijaga dengan baik.`,
          `Pantai daerah X ramai dikunjungi wisatawan, tetapi ekosistem pantai di daerah tersebut dijaga dengan baik.`,
          `Ekosistem pantai di daerah tersebut dijaga dengan baik karena belum ramai dikunjungi wisatawan.`,
          `Pantai daerah X tidak ramai dikunjungi wisatawan atau ekosistem di pantai daerah tersebut dijaga dengan baik.`,
          `Pantai X belum ramai dikunjungi wisatawan atau ekosistem pantai di daerah tersebut tidak dijaga dengan baik.`,
          ],
      answerIndex: [3]
    },
    {
      txtField: `Jerawat bukan penyakit. Semua penyakit ada obatnya.`,
      question: `Simpulan yang tepat adalah ....`,
      options: [
          `Beberapa penyakit ada obatnya`,
          `Semua jerawat tidak ada obatnya`,
          `Sesuatu yang ada obatnya adalah bukan penyakit`,
          `Sesuatu yang ada obatnya bukan jerawat`,
          `Kebanyakan jerawat ada obatnya`,
          ],
      answerIndex: [1]
    },
    {
      txtField: `Semua Negara yang termasuk dalam 10 negara yang paling bahagia di dunia versi World Happiness Report mempunyai pendapatan perkapita yang besar dan tingkat korupsinya yang rendah.
      \nDenmark termasuk dalam 10 negara paling bahagia di dunia versi World Happiness Report.`,
      question: `Simpulan yang tepat adalah ....`,
      options: [
          `Bisa jadi Denmark mempunyai pendapatan per kapita yang besar`,
          `Denmark mempunyai pendapatan per kapita dan tingkat korupsi yang tinggi`,
          `Denmark tidak termasuk dalam 10 negara paling berbahagia di dunia versi World Happiness Report`,
          `Denmark mempunyai pendapatan per kapita yang besar dan tingkat korupsinya yang rendah`,
          `Denmark mempunyai tingkat korupsi dan pendapatan per kapita yang rendah`,
          ],
      answerIndex: [3]
    },
    {
      txtField: `Semua karyawan menghadiri acara family gathering. Acara family gathering dilaksanakan hari Sabtu.`,
      question: `Simpulan yang tepat adalah ....`,
      options: [
          `Semua karyawan hadir di hari Sabtu`,
          `Semua karyawan lama tidak hadir di hari Sabtu`,
          `Semua karyawan baru tidak hadir di hari Sabtu`,
          `Semua karyawan hadir kecuali di hari Sabtu`,
          `Tak semua karyawan hadir di hari Sabtu`,
          ],
      answerIndex: [0]
    },
    {
      txtField: `Tidak satu pun badak di Ujung Kulon bercula dua. Kebanyakan badak di Ujung kulon bertubuh kecil.`,
      question: `Simpulan yang tepat adalah ....`,
      options: [
          `Semua badak bercula dua`,
          `Sedikit badak bertumbuh kecil`,
          `Beberapa badak bertubuh kecil tidak bercula dua`,
          `Beberapa badak tinggal di Ujung Kulon`,
          `Beberapa badak bercula Satu`,
          ],
      answerIndex: [2]
    },
    {
      txtField: `Semua perusahaan otomotif sering melakukan inovasi. Perusahaan otomotif yang sering melakukan inovasi, suka mengikuti pameran. Sebagian perusahaan otomotif yang mengikuti pameran, tidak mempunyai pangsa pasar yang besar.`,
      question: `Simpulan yang tepat adalah ....`,
      options: [
          `Sebagian perusahaan otomotif mempunyai pangsa pasar yang besar`,
          `Sebagian perusahaan otomotif suka mengikuti pameran dan tidak suka melakukan Inovasi`,
          `Semua perusahaan otomotif tidak mempunyai pangsa pasar yang besar tetapi sering melakukan inovasi`,
          `Semua perusahaan otomotif tidak mempunyai pangsa pasar yang besar tetapi suka melakukan promosi`,
          `Semua perusahhan otomatis sering melakukan inovasi tetapi tidak suka mengikuti pameran`,
          ],
      answerIndex: [0]
    },
    {
      txtField: `Semua guru berangkat ke sekolah pada pagi hari dan pulang pada petang hari. Sebagian orang lulusan Fakultas Keguruan dan Ilmu pendidikan (FKIP) berprofesi sebagai guru. Intan adalah lulusan FKIP Universitas Tanjungpura Pontianak. Intan berangkat kerja di pagi hari dan pulang pada petang hari`,
      question: `Simpulan yang tepat adalah ....`,
      options: [
          `Intan bukan guru`,
          `Tidak dapat ditarik kesimpulan`,
          `Intan pulang kerja pada pagi hari`,
          `Intan adalah pegawai negeri`,
          `Intan adalah guru`,
          ],
      answerIndex: [1]
    },
    // Penalaran Kuantitatif
    {
      //txtField: ``,
      question: `Komposisi detergen dan pewangi untuk mencuci pakaian adalah 4:3. Jika 6 takaran detergen dapat digunakan untuk mencuci 3 kg pakaian, takaran pewangi yang dibutuhkan untuk mencuci 12 kg pakaian adalah ....`,
      options: [
          `6 takar`,
          `9 takar`,
          `12 takar`,
          `18 takar`,
          `24 takar`,
          ],
      answerIndex: [3]
    },
    {
      //txtField: ``,
      question: `Pendapatan A lebih rendah 30% daripada pendapatan B, berapa pendapatan B jika pendapatan A adalah Rp2.100.000,00?`,
      options: [
          `Rp900.000,00`,
          `Rp1.470.000,00`,
          `Rp2.370.000,00`,
          `Rp2.570.000,00`,
          `Rp3.000.000,00`,
          ],
      answerIndex: [4]
    },
    {
      //txtField: ``,
      question: `Manakah di antara bilangan berikut ini yang nilainya PALING MENDEKATI hasil pengurangan $1,92 - \\frac{50}{47}$?`,
      options: [
          `45%`,
          `54%`,
          `85%`,
          `65%`,
          `64%`,
          ],
      answerIndex: [2]
    },
    {
      //txtField: ``,
      question: `Berat angkatan atlet angkat besi pada latihan kesatu sampai kedua secara berturut-turut adalah 98, 107 kilogram, sedangkan pada latihan keempat sampai ketujuh adalah 114, 112, 121, 119 kilogram. Jika tren berat angkatan tersebut bersifat konstan, berapa kilogram berat angkatan pada latihan ketiga?`,
      options: [
          `105`,
          `107`,
          `109`,
          `113`,
          `116`,
          ],
      answerIndex: [0]
    },
    {
      //txtField: ``,
      question: `Hasil perhitungan yang lebih besar dari $7,77+\\frac{5}{6}$ adalah ....`,
      options: [
          `$\\frac{9}{12} + 7,75$`,
          `$\\frac{12}{13} + 7,79$`,
          `$\\frac{13}{17} + 7,78$`,
          `$\\frac{15}{19} + 7,76$`,
          `$\\frac{19}{23} + 7,71$`,
          ],
      answerIndex: [1]
    },
    {
      //txtField: ``,
      question: `Untuk mengecat sebuah dinding dibutuhkan perbandingan cat dan air sebesar 3:1. Jika dinding seluas $600$ $m^2$ membutuhkan 2 liter air, volume cat yang dibutuhkan untuk dinding seluas $2400$ $m^2$ adalah ....`,
      options: [
          `8 liter`,
          `12 liter`,
          `16 liter`,
          `18 liter`,
          `24 liter`,
          ],
      answerIndex: [4]
    },
    {
      //txtField: ``,
      question: `Jumlah produksi guci dari sebuah pabrik gerabah selama lima hari berturut-turut adalah sebanyak 24, 27, 22, 25, dan 20. Sementara itu, jumlah produksi pot pada hari yang sama adalah 13, 9, 11, 7, dan 9. Jika tren dari kedua produksi bersifat konstan, berapa banyak produksi guci dan pot pada hari keenam?`,
      options: [
          `15 guci dan 5 buah pot.`,
          `15 guci dan 13 buah pot.`,
          `17 guci dan 11 buah pot.`,
          `23 guci dan 5 buah pot.`,
          `23 guci dan 13 buah pot.`,
          ],
      answerIndex: [3]
    },
    {
      //txtField: ``,
      question: `Setiap hari, A selalu berhasil menjual 18 suvenir yang dibuatnya dengan harga satuan Rp10.000,00. Pendapatan B dari hasil berjualan minuman adalah Rp125.000,00 hingga Rp175.000,00 per hari. Sementara itu, pendapatan C sebagai penjaga toko adalah Rp1.050.000,00 per minggu. Berdasarkan informasi tersebut, manakah pernyataan yang paling tepat mengenai pendapat ketiga orang tersebut?`,
      options: [
          `Pendapatan B paling rendah.`,
          `Pendapatan C paling tinggi.`,
          `Pendapatan C lebih besar daripada pendapatan A.`,
          `Pendapatan B lebih besar daripada pendapatan C.`,
          `Pendapat A dan C tidak mungkin setara.`,
          ],
      answerIndex: [4]
    },
    {
      //txtField: ``,
      question: `Karyawan A mendapatkan gaji minimal Rp840.000,00 per minggu. Karyawan B mendapatkan gaji antara Rp110.000,00 hingga Rp125.000,00 per hari, tergantung dari beban kerjanya. Sementara itu, karyawan C mendapatkan penghasilan harian dari pengangkutan 10 orang per hari, dengan tarif Rp12.000,00 per orang. Jika diasumsikan mereka bekerja 7 hari seminggu, manakah mernyataan yang PALING TEPAT?`,
      options: [
          `Gaji karyawan C paling tinggi.`,
          `Gaji karyawan B paling rendah.`,
          `Gaji karyawan A dapat setara dengan gaji karyawan C.`,
          `Gaji karyawan C lebih tinggi daripada karyawan A.`,
          `Gaji karyawan C lebih tinggi daripada karyawan B.`,
          ],
      answerIndex: [2]
    },
    {
      //txtField: ``,
      question: `Jumlah penjualan bunga mawar di sebuah toko selama lima hari berturut-turut adalah 30, 35, 37, 42, dan 44. Sementara itu jumlah penjualan bunga melati untuk lima hari yang sama adalah 13, 14, 16, 19, dan 23. Jika tren penjualan tersebut bersifat konstan, berapa jumlah penjualan bunga mawar dan melati pada hari keenam?`,
      options: [
          `49 bunga mawar dan 28 bunga melati`,
          `49 bunga mawar dan 29 bunga Melati`,
          `49 bunga mawar dan 30 bunga Melati`,
          `52 bunga mawar dan 28 bunga Melati`,
          `42 bunga mawar dan 29 bunga Melati`,
          ],
      answerIndex: [0]
    },
  ],
}

const soalPPU: ujianSession = {
  name: "Pengetahuan dan Pemahaman Umum",
  description: "Ada 20 soal yang akan dikerjakan dalam 15 menit",
  questions: [
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Literasi adalah istilah umum yang merujuk kepada seperangkat kemampuan dan keterampilan individu dalam membaca, menulis, berbicara, menghitung, dan memecahkan masalah pada tingkat keahlian tertentu yang diperlukan dalam kehidupan sehari-hari.(2) Dari definisi itu, literasi tidak bisa dilepaskan dari kemampuan berbahasa.(3) Namun, tingkat literasi di Indonesia masih sangat rendah.(4) Berdasarkan survei yang dilakukan tahun 2016 literasi menempatkaan Indonesia berada di posisi ke-61 dari 62 negara.(5) Data ini menunjukkan bahwa tingkat literasi di Indonesia sangat rendah.
      \n&nbsp;&nbsp;&nbsp;&nbsp;(6) Keluarga merupakan lembaga pendidikan informal yang berperan paling penting dalam pengembangan literasi karena keluarga, terutama ibu, adalah sekolah pertama bagi anak dan sangat berpengaruh terhadap perilaku dan perkembangan anak.(7) Keluarga di rumah adalah wadah efektif yang memiliki kuantitas waktu lebih banyak dibandingkan Pendidikan formal sehingga diharapkan mampu menjadi penggerak literasi bagi anak.(8) Oleh karena itu, literasi pertama kali harus dimulai dari keluarga sebagai pilar utama penggerak literasi, selanjutnya akan menukar kepada masyarakat, dan berakhir dengan terbentuknya budaya literasi tinggi.`,
      question: "Dari bacaan di atas, frasa yang berpola makna sama dengan frasa wawasan budaya adalah ....",
      options: [
        "istilah umum", 
        "perilaku literasi", 
        "pendidikan formal", 
        "sekolah pertama", 
        "wadah efektif"
      ],
      answerIndex: [1],
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Literasi adalah istilah umum yang merujuk kepada seperangkat kemampuan dan keterampilan individu dalam membaca, menulis, berbicara, menghitung, dan memecahkan masalah pada tingkat keahlian tertentu yang diperlukan dalam kehidupan sehari-hari.(2) Dari definisi itu, literasi tidak bisa dilepaskan dari kemampuan berbahasa.(3) Namun, tingkat literasi di Indonesia masih sangat rendah.(4) Berdasarkan survei yang dilakukan tahun 2016 literasi menempatkaan Indonesia berada di posisi ke-61 dari 62 negara.(5) Data ini menunjukkan bahwa tingkat literasi di Indonesia sangat rendah.
      \n&nbsp;&nbsp;&nbsp;&nbsp;(6) Keluarga merupakan lembaga pendidikan informal yang berperan paling penting dalam pengembangan literasi karena keluarga, terutama ibu, adalah sekolah pertama bagi anak dan sangat berpengaruh terhadap perilaku dan perkembangan anak.(7) Keluarga di rumah adalah wadah efektif yang memiliki kuantitas waktu lebih banyak dibandingkan Pendidikan formal sehingga diharapkan mampu menjadi penggerak literasi bagi anak.(8) Oleh karena itu, literasi pertama kali harus dimulai dari keluarga sebagai pilar utama penggerak literasi, selanjutnya akan menukar kepada masyarakat, dan berakhir dengan terbentuknya budaya literasi tinggi.`,
      question: `Bentuk *ke-an* pada kata *kemampuan* pada kalimat ke 2 mempunyai kesamaan makna dengan bentuk *ke-an* dalam kalimat ....`,
      options: [
        "Harga benda tidak menjamin *kebahagian* hidup.",
        "Siswa itu memiliki celana yang *kebesaran*.",
        "Dengan belajar rajin, kita memperoleh banyak *keuntungan*.",
        "Banyak warga *kedinginan* di perkampungan kumuh ketika musim hujan.",
        "Siswa itu *ketiduran* ketika sedang pelajaran matematika.",
      ],
      answerIndex: [2],
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Minum air putih atau air mineral merupakan hal yang paling penting dilakukan untuk menjaga kesehatan tubuh. (2) .... (3) Dengan minum air putih, tubuh akan terbebas dari segala bentuk toksin yang berbahaya. (4) Air putih juga mampu memberikan nutrisi penting bagi sel-sel tubuh. (5) Dengan demikian, tubuh akan terus terhidrasi dan saluran pencernaan akan terbantu.
      \n&nbsp;&nbsp;&nbsp;&nbsp;(6) Tubuh kita membutuhkan rata-rata delapan gelas air per hari. (7) Tidak hanya membersihkan tubuh dari berbagai unsur pencemar, tetapi air putih juga mampu mengisi daya tubuh tanpa harus menambah kalori. (8) Oleh karena itu, air putih sangat penting bagi tubuh manusia. (9) Menjaga tubuh tetap terhidrasi dan minum air putih dengan delapan gelas per hari secara rutin adalah sebuah keharusan. (9) Dengan demikian, pastikan Anda selalu menyediakan sebotol air minum, baik saat menonton televisi, membaca buku, bermain bersama teman-teman, maupun saat berkendara.`,
      question: "Ungkapan yang tepat untuk menyimpulkan situasi bacaan tersebut ....",
      options: [
        "air putih sehat",
        "air putih segar",
        "air putih baik",
        "air putih higienis",
        "air putih penting",
      ],
      answerIndex: [4],
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Minum air putih atau air mineral merupakan hal yang paling penting dilakukan untuk menjaga kesehatan tubuh. (2) .... (3) Dengan minum air putih, tubuh akan terbebas dari segala bentuk toksin yang berbahaya. (4) Air putih juga mampu memberikan nutrisi penting bagi sel-sel tubuh. (5) Dengan demikian, tubuh akan terus terhidrasi dan saluran pencernaan akan terbantu.
      \n&nbsp;&nbsp;&nbsp;&nbsp;(6) Tubuh kita membutuhkan rata-rata delapan gelas air per hari. (7) Tidak hanya membersihkan tubuh dari berbagai unsur pencemar, tetapi air putih juga mampu mengisi daya tubuh tanpa harus menambah kalori. (8) Oleh karena itu, air putih sangat penting bagi tubuh manusia. (9) Menjaga tubuh tetap terhidrasi dan minum air putih dengan delapan gelas per hari secara rutin adalah sebuah keharusan. (9) Dengan demikian, pastikan Anda selalu menyediakan sebotol air minum, baik saat menonton televisi, membaca buku, bermain bersama teman-teman, maupun saat berkendara.`,
      question: `Kalimat 6 dan 7 dalam bacaan tersebut mengandung hubungan ....`,
      options: [
        "perujukan",
        "peluasan",
        "pemerian",
        "sebab-akibat",
        "penguat",
      ],
      answerIndex: [4],
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Kebudayaan yang dimiliki suatu kelompok tidak akan terhindar dari pengaruh kebudayaan kelompok lain dengan adanya kontak antarkelompok lain atau melalui proses difusi. (2) Suatu kelompok sosial akan mengadopsi suatu kebudayaan tertentu apabila kebudayaan tersebut berguna untuk mengatasi atau memenuhi tuntutan yang dihadapinya. (3) Adopsi tersebut dipengaruhi oleh faktor-faktor fisikal, seperti iklim, topografi sumber daya alam, dan sejenisnya.
      \n&nbsp;&nbsp;&nbsp;&nbsp;(4) Perkembangan zaman juga mendorong terjadinya perubahan-perubahan di segala bidang termasuk dalam kebudayaan. (5) Mau tidak mau kebudayaan yang dianut semua kelompok akan bergeser, baik secara lambat maupun cepat, yang akan menimbulkan konflik antarkelompok yang menghendaki perubahan dan yang tidak menghendaki perubahan. (6) Hal yang terpenting dalam proses pengembangan suatu kebudayaan adalah adanya kontrol atau kendali terhadap perilaku regular yang ditampilkan oleh para penganutnya. (7) Tidak jarang perilaku yang ditampilkan kelompok tertentu bertolak belakang dengan perilaku yang dianut di dalam kelompok sosialnya. (8) Oleh karena itu, kontrol sosial diperlukan untuk memfilter nilai-nilai yang sesuai dengan kebudayaan suatu kelompok.`,
      question: "Frasa tidak menghendaki perubahan kalimat (5) memiliki makna asosiatif dengan kata ....",
      options: [
        "tradisional",
        "fanatik",
        "ortodoks",
        "konservatif",
        "pemanfaatan",
      ],
      answerIndex: [0],
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Kebudayaan yang dimiliki suatu kelompok tidak akan terhindar dari pengaruh kebudayaan kelompok lain dengan adanya kontak antarkelompok lain atau melalui proses difusi. (2) Suatu kelompok sosial akan mengadopsi suatu kebudayaan tertentu apabila kebudayaan tersebut berguna untuk mengatasi atau memenuhi tuntutan yang dihadapinya. (3) Adopsi tersebut dipengaruhi oleh faktor-faktor fisikal, seperti iklim, topografi sumber daya alam, dan sejenisnya.
      \n&nbsp;&nbsp;&nbsp;&nbsp;(4) Perkembangan zaman juga mendorong terjadinya perubahan-perubahan di segala bidang termasuk dalam kebudayaan. (5) Mau tidak mau kebudayaan yang dianut semua kelompok akan bergeser, baik secara lambat maupun cepat, yang akan menimbulkan konflik antarkelompok yang menghendaki perubahan dan yang tidak menghendaki perubahan. (6) Hal yang terpenting dalam proses pengembangan suatu kebudayaan adalah adanya kontrol atau kendali terhadap perilaku regular yang ditampilkan oleh para penganutnya. (7) Tidak jarang perilaku yang ditampilkan kelompok tertentu bertolak belakang dengan perilaku yang dianut di dalam kelompok sosialnya. (8) Oleh karena itu, kontrol sosial diperlukan untuk memfilter nilai-nilai yang sesuai dengan kebudayaan suatu kelompok.`,
      question: "Sinonim kata difusi dalam kalimat (1) adalah ....",
      options: [
        "pertukaran",
        "penyatuan",
        "pembauran",
        "pemerataan",
        "pemanfaatan",
      ],
      answerIndex: [2],
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Dibandingkan negara-negara lain di dunia, tingkat literasi anak-anak dan orang dewasa di Indonesia sangat rendah. (2) Kemampuan membaca, berhitung, dan pengetahuan sains anak-anak Indonesia berada di bawah Singapura, Vietnam, Malaysia, dan Thailand berdasarkan hasil tes PISA yang diujarkan OECD pada 2016. (3) Data ini disimpulkan dari hasil penilaian PIAAC, yaitu tes kompetensi sukarela untuk orang dewasa yang berusia 16 tahun ke atas. (4) Rendahnya literasi merupakan masalah mendasar yang memiliki dampak sangat luas bagi kemajuan bangsa. (5) Literasi rendah berkontribusi terhadap rendahnya produktivitas bangsa. (6) Ini berujung pada rendahnya pertumbuhan dan akhirnya berdampak terhadap rendahnya tingkat kesejahteraan yang ....(7) Literasi rendah juga berkontribusi secara signifikan terhadap kemiskinan, pengangguran, dan kesenjangan.`,
      question: `Kalimat manakah yang paling tepat sebagai kalimat inti nomor (3)?`,
      options: [
        "Data disimpulkan",
        "Data dari penilaian",
        "Data hasil dari penilaian",
        "Data dari penilaian PIAAC",
        "Data disimpulkan dari tes",
      ],
      answerIndex: [0]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Dibandingkan negara-negara lain di dunia, tingkat literasi anak-anak dan orang dewasa di Indonesia sangat rendah. (2) Kemampuan membaca, berhitung, dan pengetahuan sains anak-anak Indonesia berada di bawah Singapura, Vietnam, Malaysia, dan Thailand berdasarkan hasil tes PISA yang diujarkan OECD pada 2016. (3) Data ini disimpulkan dari hasil penilaian PIAAC, yaitu tes kompetensi sukarela untuk orang dewasa yang berusia 16 tahun ke atas. (4) Rendahnya literasi merupakan masalah mendasar yang memiliki dampak sangat luas bagi kemajuan bangsa. (5) Literasi rendah berkontribusi terhadap rendahnya produktivitas bangsa. (6) Ini berujung pada rendahnya pertumbuhan dan akhirnya berdampak terhadap rendahnya tingkat kesejahteraan yang ....(7) Literasi rendah juga berkontribusi secara signifikan terhadap kemiskinan, pengangguran, dan kesenjangan.`,
      question: `Kalimat manakah yang paling cocok sebagai penggabungan kalimat 4 dan 5?`,
      options: [
        `Rendahnya literasi merupakan masalah mendasar yang memiliki dampak sangat luas bagi kemajuan bangsa sehingga literasi rendah berkontribusi terhadap rendahnya produktivitas bangsa.`,
        `Rendahnya literasi merupakan masalah mendasar yang memiliki dampak sangat luas bagi kemajuan bangsa sehingga berkontribusi terhadap rendahnya produktivitas bangsa.`,
        `Rendahnya literasi merupakan masalah mendasar yang memiliki dampak sangat luas bagi kemajuan bangsa dan berkontribusi terhadap rendahnya produktivitas bangsa.`,
        `Rendahnya literasi merupakan masalah mendasar yang memiliki dampak sangat luas bagi kemajuan bangsa karena literasi rendah berkontribusi terhadap rendahnya produktivitas bangsa.`,
        `Rendahnya literasi merupakan masalah mendasar yang memiliki dampak sangat luas bagi kemajuan bangsa sebab berkontribusi terhadap rendahnya produktivitas bangsa.`
      ],
      answerIndex: [4]
    },
    {
      txtField: `(1) Ambon turun hujan meskipun Indonesia masih dalam masa musim kemarau dan kekeringan panjang. (2) Menurut BMKG, Ambon memang sedang berada di puncak hujan. (3) Indonesia merupakan wilayah yang unik karena terbagi menjadi dua wilayah Lintang Utara dan Lintang Selatan oleh adanya garis khatulistiwa atau ekuator mengalami curah hujan yang tinggi sepanjang tahun dan Lintang Selatan oleh adanya garis khatulistiwa. (4) Kasubid Analisis Informasi Iklan BMKG, Adi Ripaldi, menjelaskan bahwa wilayah yang dekat khatulistiwa atau ekuator mengalami curah hujan yang tinggi di sepanjang tahun. (5) Wilayah-wilayah ini tidak mengenal musim hujan dan musim kemarau. (6) "Artinya, mau ini bulan apa pun memang (daerah dekat ekuator) curah hujannya tinggi terus", Kata Adi. (7) Adapun daerah Jawa, Bali, Sulawesi Selatan disebut dengan tipe monsunal.`,
      question: `Simpulan yang tepat dari bacaan di atas adalah ....`,
      options: [
          `Indonesia terbagi menjadi dua wilayah lintang Utara dan Lintang Selatan.`,
          `Ambon merupakan salah satu wilayah di Indonesia yang mempunyai curah hujan yang tinggi.`,
          `Ambon sedang berada pada puncak musim hujan.`,
          `Indonesia masih dalam masa musim kemarau dan kekeringan panjang.`,
          `Wilayah di Indonesia mengalami musim hujan dan kemarau.`,
      ],
      answerIndex: [4]
    },
    {
      txtField: `Rambut adalah mahkota. Ungkapan itu menunjukan bahwa begitu pentingnya rambut bagi seseorang. Tak berlebihan jika merawat rambut akhirnya menjadi sangat penting untuk penampilan. Jumlah penduduk Indonesia yang sangat besar membuat tempat-tempat cukur rambut dan *barbershop* tumbuh di berbagai kota.`,
      question: `Kata berimbuhan berikut yang salah adalah ....`,
      options: [
          `berlebihan`,
          `menjadi`,
          `pentingnya`,
          `menunjukan`,
          `penampilan`,
      ],
      answerIndex: [3]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Literasi media bertujuan agar generasi muda dapat melek teknologi. (2) Dengan literasi media, diharapkan generasi muda dapat memahami bagaimana pemanfaatan media digital. (3) Literasi media membantu generasi muda mengemabangkan pemahaman yang lebih baik. (4) Literasi media juga membantu generasi muda untuk dapat mengendalikan pengaruh media dalam kehidupan sehari-hari. (5) Adanya internet untuk media sosial menyebabkan penyebaran hoax yang sangat mudah. (6) Inilah yang membuat pentingnya literasi media bagi generasi muda yang sedang berkembang dan mencari segala hal yang ingin diketahui. (7) Media yang digunakan oleh anak-anak harus ada pengawasan dari orang tua. (8) Edukasi (....) orang tua dan guru sangat penting (....) generasi muda dikenal sebagia generasi yang suka kebebasan. (9) Untuk itu, tugas orang tua, guru, dan orang-orang di sekitarnya adalah memantau penggunaan media sosial anak.`,
      question: `Kata diharapkan dalam kalimat (2) harusnya ....`,
      options: [
          `dibiarkan saja (sudah benar)`,
          `diganti *harapannya*`,
          `diganti *diharap*`,
          `didahului kata *yang*`,
          `dihilangkan karena mubazir`,
      ],
      answerIndex: [0]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Literasi media bertujuan agar generasi muda dapat melek teknologi. (2) Dengan literasi media, diharapkan generasi muda dapat memahami bagaimana pemanfaatan media digital. (3) Literasi media membantu generasi muda mengemabangkan pemahaman yang lebih baik. (4) Literasi media juga membantu generasi muda untuk dapat mengendalikan pengaruh media dalam kehidupan sehari-hari. (5) Adanya internet untuk media sosial menyebabkan penyebaran hoax yang sangat mudah. (6) Inilah yang membuat pentingnya literasi media bagi generasi muda yang sedang berkembang dan mencari segala hal yang ingin diketahui. (7) Media yang digunakan oleh anak-anak harus ada pengawasan dari orang tua. (8) Edukasi (....) orang tua dan guru sangat penting (....) generasi muda dikenal sebagia generasi yang suka kebebasan. (9) Untuk itu, tugas orang tua, guru, dan orang-orang di sekitarnya adalah memantau penggunaan media sosial anak.`,
      question: `Judul yang paling tepat untuk teks tersebut adalah ....`,
      options: [
          `Tujuan Literasi Media`,
          `Tugas Literasi Media`,
          `Peranan Literasi Media`,
          `Pentingnya Literasi Media`,
          `Dampak Literasi Media`,
      ],
      answerIndex: [0]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Literasi media bertujuan agar generasi muda dapat melek teknologi. (2) Dengan literasi media, diharapkan generasi muda dapat memahami bagaimana pemanfaatan media digital. (3) Literasi media membantu generasi muda mengemabangkan pemahaman yang lebih baik. (4) Literasi media juga membantu generasi muda untuk dapat mengendalikan pengaruh media dalam kehidupan sehari-hari. (5) Adanya internet untuk media sosial menyebabkan penyebaran hoax yang sangat mudah. (6) Inilah yang membuat pentingnya literasi media bagi generasi muda yang sedang berkembang dan mencari segala hal yang ingin diketahui. (7) Media yang digunakan oleh anak-anak harus ada pengawasan dari orang tua. (8) Edukasi (....) orang tua dan guru sangat penting (....) generasi muda dikenal sebagia generasi yang suka kebebasan. (9) Untuk itu, tugas orang tua, guru, dan orang-orang di sekitarnya adalah memantau penggunaan media sosial anak.`,
      question: `Kalimat manakah yang isinya sama dengan kalimat (7)?`,
      options: [
          `Pengawasan media digunakan oleh anak-anak harus ada dari orang tua.`,
          `Pengawasan media digunakan oleh anak-anak dari orang tua harus ada.`,
          `Pengawasan dari orang tua untuk media yang digunakan oleh anak-anak harus ada.`,
          `Harus ada pengawasan dari orang tua untuk media yang digunakan oleh anak-anak.`,
          `Harus ada pengawasan untuk media yang digunakan oleh anak-anak dari orang tua.`,
      ],
      answerIndex: [3]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Literasi media bertujuan agar generasi muda dapat melek teknologi. (2) Dengan literasi media, diharapkan generasi muda dapat memahami bagaimana pemanfaatan media digital. (3) Literasi media membantu generasi muda mengemabangkan pemahaman yang lebih baik. (4) Literasi media juga membantu generasi muda untuk dapat mengendalikan pengaruh media dalam kehidupan sehari-hari. (5) Adanya internet untuk media sosial menyebabkan penyebaran hoax yang sangat mudah. (6) Inilah yang membuat pentingnya literasi media bagi generasi muda yang sedang berkembang dan mencari segala hal yang ingin diketahui. (7) Media yang digunakan oleh anak-anak harus ada pengawasan dari orang tua. (8) Edukasi (....) orang tua dan guru sangat penting (....) generasi muda dikenal sebagia generasi yang suka kebebasan. (9) Untuk itu, tugas orang tua, guru, dan orang-orang di sekitarnya adalah memantau penggunaan media sosial anak.`,
      question: `Kata yang paling tepat untuk melengkapi kalimat (8) adalah ....`,
      options: [
          `*oleh* dan *disebabkan*`,
          `*oleh* dan *mengingat*`,
          `*oleh* dan *dikarenakan*`,
          `*dari* dan *mengingat*`,
          `*dari* dan *dikarenakan*`,
      ],
      answerIndex: [3]
    },
    {
      txtField: `(1) Putung rokok adalah salah satu bentuk sampah yang paling umum di dunia yang menyebabkan kerusakan lingkungan yang parah. (2) Analisis distribusi sampah putung rokok di lingkungan perkotaan dapat menghasilkan wawasan yang berguna untuk intervensi lebih lanjut mengurangi sampah ini. (3) Informasi tentang putung rokok yang dibuang di ruang publik dikumpulkan melalui pengamatan sosial sistematis di berbagai sampel daerah di Madrid, Spanyol. (...) (4) Analisis data dilakukan secara kualitatif dengan menggunakan lokasi sebagai parameter utama.

      \n(5) Ditemukan bahwa lokasi perhotelan dan perhentian angkutan umum merupakan tempat dengan konsentrasi putung rokok tertinggi. (6) Lokasi selanjutnya adalah pintu masuk lokasi pendidikan dan taman bermain. (7) Daerah (....) kota menunjukkan jumlah putung rokok tertinggi dibandingkan dengan daerah pinggiran kota. (8) Penelitian ini merupakan studi yang memperkirakan dan memetakan sampah putung rokok di wilayah perkotaan besar. (9) Temuan dalam penelitian ini menunjukkan sifat putung rokok yang ada di mana-mana di lingkungan perkotaan. (10) Oleh karena itu, diperlukan adanya intervensi kesehatan masyarakat dan lingkungan.`,
      question: `Kalimat pasif yang tepat untuk mengisi rumpang pada paragraf 1 adalah ....`,
      options: [
          `Diperkirakan kepadatan putung rokok di ruang publik di seluruh kota mudah terkumpul. puntung rokok di ruang publik seluruh kota adalah data yang harus dikumpulkan.`,
          `Perkiraan kepadatan puntung rokok di ruang publik seluruh kota adalah data yang harus dikumpulkan.`,
          `Data yang terkumpul digunakan untuk memperkirakan kepadatan putung rokok di ruang publik di seluruh kota.`,
          `Pengumpulan data dilakukan untuk mengukur kepadatan putung rokok di ruang publik di seluruh kota.`,
          `Informasi tentang kepadatan putung rokok di ruang publik terkumpul sebagai data primer.`,
      ],
      answerIndex: [3]
    },
    {
      txtField: `(1) Putung rokok adalah salah satu bentuk sampah yang paling umum di dunia yang menyebabkan kerusakan lingkungan yang parah. (2) Analisis distribusi sampah putung rokok di lingkungan perkotaan dapat menghasilkan wawasan yang berguna untuk intervensi lebih lanjut mengurangi sampah ini. (3) Informasi tentang putung rokok yang dibuang di ruang publik dikumpulkan melalui pengamatan sosial sistematis di berbagai sampel daerah di Madrid, Spanyol. (...) (4) Analisis data dilakukan secara kualitatif dengan menggunakan lokasi sebagai parameter utama.

      \n(5) Ditemukan bahwa lokasi perhotelan dan perhentian angkutan umum merupakan tempat dengan konsentrasi putung rokok tertinggi. (6) Lokasi selanjutnya adalah pintu masuk lokasi pendidikan dan taman bermain. (7) Daerah (....) kota menunjukkan jumlah putung rokok tertinggi dibandingkan dengan daerah pinggiran kota. (8) Penelitian ini merupakan studi yang memperkirakan dan memetakan sampah putung rokok di wilayah perkotaan besar. (9) Temuan dalam penelitian ini menunjukkan sifat putung rokok yang ada di mana-mana di lingkungan perkotaan. (10) Oleh karena itu, diperlukan adanya intervensi kesehatan masyarakat dan lingkungan.`,
      question: `Kata yang tepat untuk mengisi rumpang pada frasa (....) kota dalam kalimat (7) adalah ....`,
      options: [
          `inti`,
          `sisi`,
          `fokus`,
          `untuk`,
          `pusat`,
      ],
      answerIndex: [4]
    },
    {
      txtField: `(1) Putung rokok adalah salah satu bentuk sampah yang paling umum di dunia yang menyebabkan kerusakan lingkungan yang parah. (2) Analisis distribusi sampah putung rokok di lingkungan perkotaan dapat menghasilkan wawasan yang berguna untuk intervensi lebih lanjut mengurangi sampah ini. (3) Informasi tentang putung rokok yang dibuang di ruang publik dikumpulkan melalui pengamatan sosial sistematis di berbagai sampel daerah di Madrid, Spanyol. (...) (4) Analisis data dilakukan secara kualitatif dengan menggunakan lokasi sebagai parameter utama.

      \n(5) Ditemukan bahwa lokasi perhotelan dan perhentian angkutan umum merupakan tempat dengan konsentrasi putung rokok tertinggi. (6) Lokasi selanjutnya adalah pintu masuk lokasi pendidikan dan taman bermain. (7) Daerah (....) kota menunjukkan jumlah putung rokok tertinggi dibandingkan dengan daerah pinggiran kota. (8) Penelitian ini merupakan studi yang memperkirakan dan memetakan sampah putung rokok di wilayah perkotaan besar. (9) Temuan dalam penelitian ini menunjukkan sifat putung rokok yang ada di mana-mana di lingkungan perkotaan. (10) Oleh karena itu, diperlukan adanya intervensi kesehatan masyarakat dan lingkungan.`,
      question: `Gagasan pada kalimat (8) dapat diungkapkan melalui kalimat ....`,
      options: [
          `Konsentrasi putung rokok tertinggi membuat lokasi perhotelan dan perhentian angkutan umum menjadi pusat temuan penelitian.`,
          `Jumlah putung rokok terkonsentrasi di tempat-tempat tertentu, misalnya lokasi perhotelan dan per- hentian angkutan umum.`,
          `Para ahli menemukan bahwa hotel dan perhentian angkutan umum adalah tempat favorit para perokok.`,
          `Penelitian ini dilakukan khusus terkonsentrasi pada lokasi perhotelan dan perhentian angkutan umum yang banyak dikunjungi orang.`,
          `Hasil penelitian menunjukkan bahwa konsentrasi di lokasi perhotelan dan terminal angkutan umum.`,
      ],
      answerIndex: [1]
    },
    {
      txtField: `(1) Bumi saat ini berputar dengan arah rotasinya bergerak dari barat ke timur. (2) Matahari kelihatan terbit dari timur. (3) Jika bumi dilihat dari atas Kutub Utara, arah rotasinya berlawanan dengan arah jarum jam. (4) Apa yang terjadi jika matahari terbit dari barat? (5) Bumi akan mengalami perubahan, mulai dari perubahan pada lanskap alam di beberapa benua hingga perubahan iklim.
      
      \n(6) Jika arah matahari terbit berubah, bukit pasir yang gersang akan menggantikan hamparan hutan hujan Amazon di Amerika Selatan. (7) Gurun akan menutupi Amerika Utara. (8) Sebaliknya, lanskap kering di Amerika Tengah, Gurun Sahara di Afrika Barat, dan Arab Saudi akan berubah menjadi hijau.
      
      \n(9) Dampak lain, setelah mempresentasikan hasil simulasi komputer tahun 2018 di Austria, Eropa Barat disimpulkan akan beku akibat musim dingin dahsyat oleh para ahli. (10) Namun, simulasi tersebut tidak menunjukkan apakah daerah tropis akan mengalami perubahan drastis seperti yang dialami Eropa.`,
      question: `Dari bacaan tersebut, frasa yang berpola makna sama dengan frasa *makanan enak* adalah ....`,
      options: [
          `jarum jam`,
          `perubahan iklim`,
          `lanskap kering`,
          `simulasi komputer`,
          `persamaan geosains`,
      ],
      answerIndex: [2]
    },
    {
      txtField: `(1) Bumi saat ini berputar dengan arah rotasinya bergerak dari barat ke timur. (2) Matahari kelihatan terbit dari timur. (3) Jika bumi dilihat dari atas Kutub Utara, arah rotasinya berlawanan dengan arah jarum jam. (4) Apa yang terjadi jika matahari terbit dari barat? (5) Bumi akan mengalami perubahan, mulai dari perubahan pada lanskap alam di beberapa benua hingga perubahan iklim.
      
      \n(6) Jika arah matahari terbit berubah, bukit pasir yang gersang akan menggantikan hamparan hutan hujan Amazon di Amerika Selatan. (7) Gurun akan menutupi Amerika Utara. (8) Sebaliknya, lanskap kering di Amerika Tengah, Gurun Sahara di Afrika Barat, dan Arab Saudi akan berubah menjadi hijau.
      
      \n(9) Dampak lain, setelah mempresentasikan hasil simulasi komputer tahun 2018 di Austria, Eropa Barat disimpulkan akan beku akibat musim dingin dahsyat oleh para ahli. (10) Namun, simulasi tersebut tidak menunjukkan apakah daerah tropis akan mengalami perubahan drastis seperti yang dialami Eropa.`,
      question: `Dari bacaan tersebut, kalimat yang berpola dasar sama dengan pola dasar kalimat *Karena Budi tekun belajar, prestasi belajarnya meningkat dengan pesat* adalah ....`,
      options: [
          `Jika bumi dilihat dari atas Kutub Utara, arah rotasinya berlawanan dengan arah jarum jam.`,
          `Bumi akan mengalami perubahan, mulai dari perubahan pada lanskap alam di beberapa benua hingga perubahan iklim.`,
          `Jika arah matahari terbit berubah, bukit pasir yang gersang akan menggantikan hamparan hutan hujan Amazon di Amerika Selatan.`,
          `Sebaliknya, lanskap kering di Amerika Tengah, Gurun Sahara di Afrika Barat, dan Arab Saudi akan berubah menjadi hijau.`,
          `Namun, simulasi tersebut tidak menunjukkan apakah daerah tropis akan mengalami perubahan drastis seperti yang dialami Eropa.`,
      ],
      answerIndex: [0]
    },
    {
      txtField: `(1) Bumi saat ini berputar dengan arah rotasinya bergerak dari barat ke timur. (2) Matahari kelihatan terbit dari timur. (3) Jika bumi dilihat dari atas Kutub Utara, arah rotasinya berlawanan dengan arah jarum jam. (4) Apa yang terjadi jika matahari terbit dari barat? (5) Bumi akan mengalami perubahan, mulai dari perubahan pada lanskap alam di beberapa benua hingga perubahan iklim.
      
      \n(6) Jika arah matahari terbit berubah, bukit pasir yang gersang akan menggantikan hamparan hutan hujan Amazon di Amerika Selatan. (7) Gurun akan menutupi Amerika Utara. (8) Sebaliknya, lanskap kering di Amerika Tengah, Gurun Sahara di Afrika Barat, dan Arab Saudi akan berubah menjadi hijau.
      
      \n(9) Dampak lain, setelah mempresentasikan hasil simulasi komputer tahun 2018 di Austria, Eropa Barat disimpulkan akan beku akibat musim dingin dahsyat oleh para ahli. (10) Namun, simulasi tersebut tidak menunjukkan apakah daerah tropis akan mengalami perubahan drastis seperti yang dialami Eropa.`,
      question: `Ungkapan, *Eropa Barat disimpulkan akan beku akibat musim dingin dahsyat oleh para ahli* dapat disempurnakan menjadi kalimat aktif ....`,
      options: [
          `Dahsyatnya musim dingin disimpulkan para ahli akan membekukan Eropa Barat.`,
          `Para ahli menyimpulkan bahwa Eropa Barat akan beku akibat musim dingin dahsyat.`,
          `Disimpulkan para ahli bahwa Eropa Barat akan beku akibat musim dingin dahsyat.`,
          `Eropa Barat akan membeku akibat musim dingin dahsyat menurut kesimpulan para ahli.`,
          `Kesimpulan para ahli menunjukkan bahwa Eropa Barat akan beku akibat musim dingin dahsyat.`,
      ],
      answerIndex: [1]
    }
  ],
}

const soalPBM: ujianSession = {
  name: "Kemampuan Memahami Bacaan dan Menulis",
  description: "Ada 20 soal yang akan dikerjakan dalam 25 menit",
  questions: [
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Keberadaan industri olahraga di tingkat dunia terus berkembang pesat. (2) Beberapa negara maju seperti Amerika, Inggris, Jerman, Perancis, dan Cina telah menjadikan olahraga sebagai industri **prioritas** sekaligus pemasok devisa negara. (3) Bahkan, olahraga terus **didesain** sebagai industri modern berskala global. (4) Salah satu jejak munculnya industri olahraga dapat dirujuk saat Peter Ueberroth sukses mengusung bisnis dalam penyelenggaraan Olimpiade Los Angeles 1984. (5) Pada saat itu, penyelenggaraan olimpiade berhasil mencetak laba 227,7 juta **dollar** AS yang ditandai dengan munculnya produk Nike sebagai sponsor kegiatan tersebut. (6) Sejak saat itu, berbagai negara terus mengembangkan industri olahraga. (7) Pasar olahraga global terus menunjukkan **tren** kenaikan dari tahun ke tahun. (8) Pertumbuhan industri olahraga itu dipicu oleh perkembangan internet dan digitalisasi. (9) (....), tiap-tiap kawasan memiliki **spesifikasi** dalam pengembangan industri olahraga. (10) Misalnya, Amerika Serikat mengedepankan industri olahraga basket, sedangkan Eropa, terutama Inggris, industri sepakbola.
      \nDiadaptasi dari https://kompaspedia.kompas.id/`,
      question: `Apa inti isi teks tersebut?`,
      options: [
        `Negara maju menjadikan olahraga sebagai industri.`,
        `Industri olahraga di dunia berkembang pesat.`,
        `Olahraga dirancang sebagai industri berskala besar.`,
        `Olimpiade ditengarai sebagai tonggak industri olahraga.`,
        `Industri olahraga modern tumbuh berskala global.`,
      ],
      answerIndex: [1]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Keberadaan industri olahraga di tingkat dunia terus berkembang pesat. (2) Beberapa negara maju seperti Amerika, Inggris, Jerman, Perancis, dan Cina telah menjadikan olahraga sebagai industri **prioritas** sekaligus pemasok devisa negara. (3) Bahkan, olahraga terus **didesain** sebagai industri modern berskala global. (4) Salah satu jejak munculnya industri olahraga dapat dirujuk saat Peter Ueberroth sukses mengusung bisnis dalam penyelenggaraan Olimpiade Los Angeles 1984. (5) Pada saat itu, penyelenggaraan olimpiade berhasil mencetak laba 227,7 juta **dollar** AS yang ditandai dengan munculnya produk Nike sebagai sponsor kegiatan tersebut. (6) Sejak saat itu, berbagai negara terus mengembangkan industri olahraga. (7) Pasar olahraga global terus menunjukkan **tren** kenaikan dari tahun ke tahun. (8) Pertumbuhan industri olahraga itu dipicu oleh perkembangan internet dan digitalisasi. (9) (....), tiap-tiap kawasan memiliki **spesifikasi** dalam pengembangan industri olahraga. (10) Misalnya, Amerika Serikat mengedepankan industri olahraga basket, sedangkan Eropa, terutama Inggris, industri sepakbola.
      \nDiadaptasi dari https://kompaspedia.kompas.id/`,
      question: `Kata sambung yang paling tepat untuk melengkapi kalimat (9) adalah ....`,
      options: [
        `oleh karena itu`,
        `dengan demikian`,
        `selain itu`,
        `selanjutnya`,
        `meskipun demikian`,
      ],
      answerIndex: [2]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Keberadaan industri olahraga di tingkat dunia terus berkembang pesat. (2) Beberapa negara maju seperti Amerika, Inggris, Jerman, Perancis, dan Cina telah menjadikan olahraga sebagai industri **prioritas** sekaligus pemasok devisa negara. (3) Bahkan, olahraga terus **didesain** sebagai industri modern berskala global. (4) Salah satu jejak munculnya industri olahraga dapat dirujuk saat Peter Ueberroth sukses mengusung bisnis dalam penyelenggaraan Olimpiade Los Angeles 1984. (5) Pada saat itu, penyelenggaraan olimpiade berhasil mencetak laba 227,7 juta **dollar** AS yang ditandai dengan munculnya produk Nike sebagai sponsor kegiatan tersebut. (6) Sejak saat itu, berbagai negara terus mengembangkan industri olahraga. (7) Pasar olahraga global terus menunjukkan **tren** kenaikan dari tahun ke tahun. (8) Pertumbuhan industri olahraga itu dipicu oleh perkembangan internet dan digitalisasi. (9) (....), tiap-tiap kawasan memiliki **spesifikasi** dalam pengembangan industri olahraga. (10) Misalnya, Amerika Serikat mengedepankan industri olahraga basket, sedangkan Eropa, terutama Inggris, industri sepakbola.
      \nDiadaptasi dari https://kompaspedia.kompas.id/`,
      question: `Penulisan kata bercetak tebal dalam teks tersebut yang salah terdapat pada kalimat ....`,
      options: [
        `2`,
        `3`,
        `5`,
        `7`,
        `9`,
      ],
      answerIndex: [2]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Tantangan seorang guru masa kini adalah tidak hanya mengurusi siswa, namun juga mengubah cara pandang orang tua siswa dan masyarakat secara umum dari cara pandang lama atau tradisional ke arah pandang yang modern. (2) Paradigma pendidikan masa lampau bagi para orang tua adalah orientasi pendidikan berbasis nilai akademik. (3) Dewasa ini, banyak orang tua masih mengutamakan nilai akademik yang tinggi daripada karakter yang baik. (4) Nilai ujian memang penting. (5) Kerja keras, disiplin, menghargai orang lain, simpati, jujur, dan lain-lain adalah yang terpenting dari pencapaian proses pembelajaran. (6) Ada lima kemampuan yang wajib dimiliki setiap siswa saat ini. (7) Kelima kemampuan tersebut adalah kemampuan berpikir kritis, memecahkan masalah, berkomunikasi, berkreativitas, dan berkolaborasi (8) Kemampuan tersebut tidak dapat diukur dengan angka-angka.`,
      question: `Kata yang paling tepat menggantikan paradigma dalam kalimat 2 adalah ....`,
      options: [
        `ukuran standar`,
        `kerangka berpikir`,
        `matriks dasar`,
        `sudut pandang`,
        `pola acuan`,
      ],
      answerIndex: [3]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Tantangan seorang guru masa kini adalah tidak hanya mengurusi siswa, namun juga mengubah cara pandang orang tua siswa dan masyarakat secara umum dari cara pandang lama atau tradisional ke arah pandang yang modern. (2) Paradigma pendidikan masa lampau bagi para orang tua adalah orientasi pendidikan berbasis nilai akademik. (3) Dewasa ini, banyak orang tua masih mengutamakan nilai akademik yang tinggi daripada karakter yang baik. (4) Nilai ujian memang penting. (5) Kerja keras, disiplin, menghargai orang lain, simpati, jujur, dan lain-lain adalah yang terpenting dari pencapaian proses pembelajaran. (6) Ada lima kemampuan yang wajib dimiliki setiap siswa saat ini. (7) Kelima kemampuan tersebut adalah kemampuan berpikir kritis, memecahkan masalah, berkomunikasi, berkreativitas, dan berkolaborasi (8) Kemampuan tersebut tidak dapat diukur dengan angka-angka.`,
      question: `Kalimat manakah yang paling tepat sebagai perluasan kalimat 4 agar padu dengan kalimat yang lain?`,
      options: [
        `Nilai ujian yang tinggi memang penting dan dapat mengukur perilaku siswa.`,
        `Nilai ujian yang tinggi memang penting sebagai ukuran prestasi dan perilaku siswa.`,
        `Nilai ujian yang tinggi memang penting, namun itu bukan satu-satunya tolok ukur.`,
        `Nilai ujian memang penting untuk mengukur perkembangan prestasi dan perilaku siswa.`,
        `Nilai ujian yang tinggi menunjukkan bahwa siswa mempunyai prestasi yang baik.`,
      ],
      answerIndex: [2]
    },
    {
      txtField: `Jadi, proses pembelajaran secara aktif dapat menempatkan siswa dalam suatu situasi yang membuat mereka terlibat dalam aktivitas yang telah dirancang oleh guru untuk tujuan tertentu.`,
      question: `Manakah perbaikan kalimat di atas yang paling efektif?`,
      options: [
        `Jadi, pembelajaran secara aktif menempatkan siswa ke suatu situasi yang membuat mereka terlibat dalam aktivitas yang telah dirancang oleh guru untuk tujuan tertentu.`,
        `Jadi, pembelajaran secara aktif dapat menempatkan siswa dalam suatu situasi yang membuat mereka terlibat dalam aktivitas yang telah dirancang oleh guru untuk tujuan tertentu.`,
        `Jadi, pembelajaran secara aktif menempatkan siswa dalam suatu situasi yang membuat mereka terlibat dalam aktivitas yang telah dirancang oleh guru untuk tujuan tertentu.`,
        `Jadi, proses pembelajaran secara aktif menempatkan siswa dalam suatu situasi yang membuat mereka terlibat dalam aktivitas yang telah dirancang oleh guru untuk tujuan tertentu.`,
        `Jadi, proses pembelajaran secara aktif dapat menempatkan siswa dalam suatu situasi yang membuat mereka terlibat dalam aktivitas yang telah dirancang oleh guru untuk tujuan tertentu,`,
      ],
      answerIndex: [2]
    },
    {
      txtField: `Menurut penulis buku "Demokrasi Pancasila di Era Kemajemukan, menjelaskan gotong-royong merupakan kegiatan yang dilakukan secara bersama-sama agar kegiatan tersebut dapat berjalan dengan lancar, ball. dan terasa lebih ringan. Begitu pula, lembaga-lembaga masyarakat adat seperti Lembaga Desa Adat Ba selalu mengatur gotong royong ini serta fungsi dan manfaatnya.`,
      question: `Penulisan judul buku dan nama lembaga pada teks di atas yang benar adalah ....`,
      options: [
        `Demokrasi Pancasila di Era Kemajemukan; "Lembaga Desa Adat Bali"`,
        `*Demokrasi Pancasila di Era Kemajemukan*; Lembaga Desa Adat Bali`,
        `*Demokrasi Pancasila di Era Kemajemukan*; "Lembaga Desa Adat Bali"`,
        `Demokrasi Pancasila di Era Kemajemukan; Lembaga Desa Adat Bali`,
        `"Demokrasi Pancasila di Era Kemajemukan"; "Lembaga Desa Adat Bali"`,
      ],
      answerIndex: [2]
    },
    {
      txtField: `Pengambilan sampel tanpa memahami struktur hidung bisa menyebabkan kesakitan, Risiko pendarahan bisa terjadi jika tangkai swab mengenai pembuluh darah.
      \nPERINGATAN!\n
      \n- Masyarakat tidak boleh sembarangan membeli alat kesehatan.
      \n- Alat kesehatan seperti alat tes rapid antigen tidak boleh dibeli dan dipakai secara mandiri.
      \n- Semua alat kesehatan yang telah mendapat izin edar tercatat dalam infoalkes.kemenkes.go.id`,
      question: `Berdasarkan bacaan di atas dapat disimpulkan bahwa penggunaan alat rapid tes berbasis antigen secara sendiri ....`,
      options: [
        `dikhawatirkan berpotensi meningkatkan penularan covid-19`,
        `dikahwatikan membahayakan masyarakat dan hasilnya tidak akurat`,
        `diatur dan dibatasi berdasarkan hukum yang berlaku`,
        `boleh dilakukan di rumah tanpa bantuan petugas medis`,
        `bisa menimbulkan penyakit`,
      ],
      answerIndex: [1]
    },
    {
      txtField: `Pengambilan sampel tanpa memahami struktur hidung bisa menyebabkan kesakitan, Risiko pendarahan bisa terjadi jika tangkai swab mengenai pembuluh darah.
      \nPERINGATAN!\n
      \n- Masyarakat tidak boleh sembarangan membeli alat kesehatan.
      \n- Alat kesehatan seperti alat tes rapid antigen tidak boleh dibeli dan dipakai secara mandiri.
      \n- Semua alat kesehatan yang telah mendapat izin edar tercatat dalam infoalkes.kemenkes.go.id`,
      question: `Kata memahami pada kalimat "Pengambilan sampel tanpa memahami struktur hidung bisa menyebabkan kesakitan" memiliki makna ....`,
      options: [
        `mengenali`,
        `menguasai`,
        `mengetahui`,
        `memperhatikan`,
        `mempertimbangkan`,
      ],
      answerIndex: [2]
    },
    {
      txtField: `Pengambilan sampel tanpa memahami struktur hidung bisa menyebabkan kesakitan, Risiko pendarahan bisa terjadi jika tangkai swab mengenai pembuluh darah.
      \nPERINGATAN!\n
      \n- Masyarakat tidak boleh sembarangan membeli alat kesehatan.
      \n- Alat kesehatan seperti alat tes rapid antigen tidak boleh dibeli dan dipakai secara mandiri.
      \n- Semua alat kesehatan yang telah mendapat izin edar tercatat dalam infoalkes.kemenkes.go.id`,
      question: `Penulisan kata swab pada teks di atas seharusnya adalah ....`,
      options: [
        `'swab'`,
        `Swab`,
        `*swab*`,
        `"swab"`,
        `**Swab**`,
      ],
      answerIndex: [2]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Marsialapari menjadi salah satu tradisi yang masih melekat dan sudah sejak lama dilestarikan masyarakat Mandailing, Tapanuli Selatan, Sumatra Utara. (2) Dalam tradis tolong menolong ini laksanakan pada saat menanam dan memanen padi. (3) Hal ini juga diungkapkan dalam artikel berjudul Marsialipari, Tradisi Gotong Royong Yang Mengakar Kuat Di Masyarakat Mandailing. (4) Di samping itu, tradisi Marsialapari ini juga menunjukkan adanya nilai kasih sayang dan persatuan yang hidup dalam khazanah Budaya masyarakat Mandailing. (5) Menurut hasil kajian Lembaga Adat Dalian Na Tolu tradisi ini tidak sekadar aktivitas dalam melakukan gotong royong, tetapi juga cermin nilai-nilai budaya masyarakat Mandailing. (6) Dalam tradisi ini tercermin adanya esensi kasih sayang dan persatuan yang tertanam dalam diri masyarakat Mandailing. (7) Semua lembaga memperhatikan adat dan tradisi budaya yang ada di daerah Sumatera Utara, khususnya Tapanuli Selatan.`,
      question: `Kalimat (2) perlu disempurnakan dengan cara ....`,
      options: [
        `menghilangkan *dalam*`,
        `menghilangka *tolong-menolong*`,
        `menghilangkan *ini*`,
        `menggantikan *dilaksakan* dengan *terlaksana*`,
        `menghilangkan *pada*`,
      ],
      answerIndex: [0]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Marsialapari menjadi salah satu tradisi yang masih melekat dan sudah sejak lama dilestarikan masyarakat Mandailing, Tapanuli Selatan, Sumatra Utara. (2) Dalam tradis tolong menolong ini laksanakan pada saat menanam dan memanen padi. (3) Hal ini juga diungkapkan dalam artikel berjudul Marsialipari, Tradisi Gotong Royong Yang Mengakar Kuat Di Masyarakat Mandailing. (4) Di samping itu, tradisi Marsialapari ini juga menunjukkan adanya nilai kasih sayang dan persatuan yang hidup dalam khazanah Budaya masyarakat Mandailing. (5) Menurut hasil kajian Lembaga Adat Dalian Na Tolu tradisi ini tidak sekadar aktivitas dalam melakukan gotong royong, tetapi juga cermin nilai-nilai budaya masyarakat Mandailing. (6) Dalam tradisi ini tercermin adanya esensi kasih sayang dan persatuan yang tertanam dalam diri masyarakat Mandailing. (7) Semua lembaga memperhatikan adat dan tradisi budaya yang ada di daerah Sumatera Utara, khususnya Tapanuli Selatan.`,
      question: `Kata yang harus dihilangkan pada kalimat (4) adalah ....`,
      options: [
        `ini`,
        `juga`,
        `adanya`,
        `nilai`,
        `khazanah`,
      ],
      answerIndex: [0]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Marsialapari menjadi salah satu tradisi yang masih melekat dan sudah sejak lama dilestarikan masyarakat Mandailing, Tapanuli Selatan, Sumatra Utara. (2) Dalam tradis tolong menolong ini laksanakan pada saat menanam dan memanen padi. (3) Hal ini juga diungkapkan dalam artikel berjudul Marsialipari, Tradisi Gotong Royong Yang Mengakar Kuat Di Masyarakat Mandailing. (4) Di samping itu, tradisi Marsialapari ini juga menunjukkan adanya nilai kasih sayang dan persatuan yang hidup dalam khazanah Budaya masyarakat Mandailing. (5) Menurut hasil kajian Lembaga Adat Dalian Na Tolu tradisi ini tidak sekadar aktivitas dalam melakukan gotong royong, tetapi juga cermin nilai-nilai budaya masyarakat Mandailing. (6) Dalam tradisi ini tercermin adanya esensi kasih sayang dan persatuan yang tertanam dalam diri masyarakat Mandailing. (7) Semua lembaga memperhatikan adat dan tradisi budaya yang ada di daerah Sumatera Utara, khususnya Tapanuli Selatan.`,
      question: `Kalimat yang tidak berkaitan dengan gagasan utama bacaan adalah kalimat ....`,
      options: [
        `5`,
        `3`,
        `7`,
        `1`,
        `6`,
      ],
      answerIndex: [2]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Marsialapari menjadi salah satu tradisi yang masih melekat dan sudah sejak lama dilestarikan masyarakat Mandailing, Tapanuli Selatan, Sumatra Utara. (2) Dalam tradis tolong menolong ini laksanakan pada saat menanam dan memanen padi. (3) Hal ini juga diungkapkan dalam artikel berjudul Marsialipari, Tradisi Gotong Royong Yang Mengakar Kuat Di Masyarakat Mandailing. (4) Di samping itu, tradisi Marsialapari ini juga menunjukkan adanya nilai kasih sayang dan persatuan yang hidup dalam khazanah Budaya masyarakat Mandailing. (5) Menurut hasil kajian Lembaga Adat Dalian Na Tolu tradisi ini tidak sekadar aktivitas dalam melakukan gotong royong, tetapi juga cermin nilai-nilai budaya masyarakat Mandailing. (6) Dalam tradisi ini tercermin adanya esensi kasih sayang dan persatuan yang tertanam dalam diri masyarakat Mandailing. (7) Semua lembaga memperhatikan adat dan tradisi budaya yang ada di daerah Sumatera Utara, khususnya Tapanuli Selatan.`,
      question: `Penulisan judul artikel dan nama lembaga pada kalimat (3) dan (5) yang benar adalah ....`,
      options: [
        `"*Marsialapali*, Tradisi Gotong Royong yang Mengakar Kuat di Masyarakat Mandailing"; "Lembaga Adat Dalian Na Tolu"`,
        `*Marsialapali, Tradisi Gotong Royong yang Mengakar Kuat di Masyarakat Mandailing*; Lembaga Adat Dalian Na Tolu`,
        `*Marsialapali*, Tradisi Gotong Royong yang Mengakar Kuat di Masyarakat Mandailing; Lembaga Adat Dalian Na Tolu`,
        `"*Marsialapali*, Tradisi Gotong Royong yang Mengakar Kuat di Masyarakat Mandailing"; Lembaga Adat Dalian Na Tolu`,
        `*Marsialapali*, Tradisi Gotong Royong yang Mengakar Kuat di Masyarakat Mandailing; *Lembaga Adat Dalian Na Tolu*`,
      ],
      answerIndex: [3]
    },
    {
      txtField: `"Sudah sewajarnya pemerintah terus mempercepat pemudahan bisnis dengan menyederhanakan sistem perizinan, di antaranya meluncurkan program pengurusan satu pintu (One Single Submissions /OSS) yang merupakan tindak lanjut dari Perpres Nomor 91 Tahun 2017 tentang Percepatan Kemudahan Berusaha.`,
      question: `Kalimat manakah yang paling tepat sebagai kalimat inti dari kalimat di atas ....`,
      options: [
        `Pemerintah mempercepat pemudahan bisnis.`,
        `Pemerintah menyederhanakan sistem perizinan.`,
        `Pemerintah meluncurkan program pengurusan satu pintu.`,
        `Pengurusan satu pintu merupakan tindak lanjut peraturan presiden.`,
        `Pemudahan bisnis merupakan percepatan kemudahan berusaha.`,
      ],
      answerIndex: [0]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Menurut Undang-Undang Nomor 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup mengamanatkan perlunya upaya mempertahankan keanekaragaman hayati (kehati) sebagai modal pembangunan nasional yang **kontinu** (1). Salah satu **strategi** yang dapat dilakukan adalah pembangunan taman kehati yang dilakukan di luar kawasan hutan (2). Dengan semakin menurunnya **kwalitas** lingkungan, terutama di wilayah yang bukan kawasan hutan, diperlukan upaya pelestarian kehati melalui pembangunan taman kehati di setiap daerah (3). Pembangunan taman kehati dapat digunakan untuk mempertahankan kehati setempat yang sudah semakin langka dan menjadi ikon suatu kota (4). Misalnya saja kota Jakarta yang mempunyai ikon salak condet, akan sangat bagus jika Jakarta memiliki taman kehati yang salah satu fungsinya adalah mempertahankan **eksistensi** salak condet (5). (...) taman kehati juga bisa dimanfaatkan untuk mempertahankan keberadaan **spesies** tumbuhan yang dulunya sangat umum (6).`,
      question: `Kata sambung yang paling tepat untuk mengisi titik-titik di atas adalah ....`,
      options: [
        `Sebaliknya`,
        `Selain itu`,
        `Selanjutnya`,
        `Sementara itu`,
        `Namun`,
      ],
      answerIndex: [1]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Menurut Undang-Undang Nomor 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup mengamanatkan perlunya upaya mempertahankan keanekaragaman hayati (kehati) sebagai modal pembangunan nasional yang **kontinu** (1). Salah satu **strategi** yang dapat dilakukan adalah pembangunan taman kehati yang dilakukan di luar kawasan hutan (2). Dengan semakin menurunnya **kwalitas** lingkungan, terutama di wilayah yang bukan kawasan hutan, diperlukan upaya pelestarian kehati melalui pembangunan taman kehati di setiap daerah (3). Pembangunan taman kehati dapat digunakan untuk mempertahankan kehati setempat yang sudah semakin langka dan menjadi ikon suatu kota (4). Misalnya saja kota Jakarta yang mempunyai ikon salak condet, akan sangat bagus jika Jakarta memiliki taman kehati yang salah satu fungsinya adalah mempertahankan **eksistensi** salak condet (5). (...) taman kehati juga bisa dimanfaatkan untuk mempertahankan keberadaan **spesies** tumbuhan yang dulunya sangat umum (6).`,
      question: `Penulisan kata bercetak tebal yang salah pada teks tersebut terdapat pada kalimat ....`,
      options: [
        `1`,
        `2`,
        `3`,
        `5`,
        `6`,
      ],
      answerIndex: [2]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Menurut Undang-Undang Nomor 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup mengamanatkan perlunya upaya mempertahankan keanekaragaman hayati (kehati) sebagai modal pembangunan nasional yang **kontinu** (1). Salah satu **strategi** yang dapat dilakukan adalah pembangunan taman kehati yang dilakukan di luar kawasan hutan (2). Dengan semakin menurunnya **kwalitas** lingkungan, terutama di wilayah yang bukan kawasan hutan, diperlukan upaya pelestarian kehati melalui pembangunan taman kehati di setiap daerah (3). Pembangunan taman kehati dapat digunakan untuk mempertahankan kehati setempat yang sudah semakin langka dan menjadi ikon suatu kota (4). Misalnya saja kota Jakarta yang mempunyai ikon salak condet, akan sangat bagus jika Jakarta memiliki taman kehati yang salah satu fungsinya adalah mempertahankan **eksistensi** salak condet (5). (...) taman kehati juga bisa dimanfaatkan untuk mempertahankan keberadaan **spesies** tumbuhan yang dulunya sangat umum (6).`,
      question: `Kalimat yang tepat untuk memperbaiki kalimat ke-1 teks di atas adalah ....`,
      options: [
        `Menurut Undang-Undang Nomor 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup mengamanatkan perlunya upaya mempertahankan keanekaragaman hayati (kehati) sebagai modal pembangunan nasional yang kontinu.`,
        `Menurut Undang-Undang Nomor 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup bahwa perlunya upaya mempertahankan keanekaragaman hayati (kehati) sebagai modal pembangunan nasional yang kontinu.`,
        `Undang-Undang Nomor 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup mengamanatkan perlunya upaya mempertahankan keanekaragaman hayati (kehati) sebagai modal pembangunan nasional yang kontinu.`,
        `Menurut Undang-Undang Nomor 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup diamanatkan perlunya upaya mempertahankan keanekaragaman hayati (kehati) sebagai modal pembangunan nasional yang kontinu.`,
        `Undang-Undang Nomor 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup diamanatkan bahwa perlunya upaya mempertahankan keanekaragaman hayati (kehati) sebagai modal pembangunan nasional yang kontinu.`,
      ],
      answerIndex: [2]
    },
    {
      txtField: `Menurut penulis buku "Demokrasi Pancasila di Era Kemajemukan, menjelaskan gotong-royong merupakan kegiatan yang dilakukan secara bersama-sama agar kegiatan tersebut dapat berjalan dengan lancar, baik, dan terasa lebih ringan.`,
      question: `Kata yang harus dihilangkan pada kalimat tersebut adalah ....`,
      options: [
        `penulis`,
        `buku`,
        `menjelaskan`,
        `secara`,
        `dapat`,
      ],
      answerIndex: [2]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Pada hakikatnya, manusia hidup dalam sebuah kesatuan ruang yang terdiri atas beberapa komponen yang berkaitan. (2) Ruang tersebut dikenal sebagai lingkungan hidup. (3) Dalam perundang-undangan, lingkungan hidup dianggap sebagai kesatuan ruang dengan semua benda, daya, keadaan, dan makhluk hidup, termasuk di dalamnya manusia dan perilakunya. (4) Semua hal itu memengaruhi kelangsungan perikehidupan dan kesejahteraan manusia serta makhluk hidup lainnya. (5) Lingkungan hidup terdiri atas tiga kompoknen, yaitu lingkungan alam, lingkungan buatan, dan lingkungan sosial. (6) Lingkungan sosial sangat berpengaruh terhadap pembangunan manusia seutuhnya. (7) Akan tetapi, kebutuhan manusia tidak ada batasnya sering membuat manusia bertindak berlebihan. (8) Mereka mengeksploitasi lingkungan sebesar-besarnya demi memenuhi kebutuhan hidup. (9) Kebutuhan hidup setiap manusia pasti berbeda, bergantung pada jabatan, gaya hidup, usia, dan jenis kelaminnya.
      \nDiadaptasi dari https://www.kompas.com/`,
      question: `Kalimat yang tidak berkaitan dengan gagasan utama bacaan di atas adalah kalimat ....`,
      options: [
        `8`,
        `7`,
        `6`,
        `5`,
        `4`,
      ],
      answerIndex: [4]
    },
  ],
}

const soalPK: ujianSession = {
  name: "Pengetahuan Kuantitatif",
  description: "Ada 20 soal yang akan dikerjakan dalam 20 menit.",
  questions: [
    {
      txtField: ``,
      question: `Diketahui barisan aritmetika:
      \n$U_2 + U_4 + U_6 = 15$
      \n$U_3 + U_5 + U_7 = 27$
      \n$U_1 + U_2 + U_3 + ... + U_20 = ....$`,
      options: [
        `600`,
        `610`,
        `620`,
        `630`,
        `640`,
      ],
      answerIndex: [2]
    },
    {
      txtField: ``,
      question: `Jika vertikal sembarang titik $(x_0, y_0)$ ke garis $I:y = ax + b$ didefinisikan sebagai $|y_0 - (ax_0 + b)|$. Rata-rata jarak vertikal titik (0,-3), (1,3), dan (2,5) ke garis $m:y = 2x - 1$ adalah ....`,
      options: [
        `0`,
        `1`,
        `2`,
        `3`,
        `6`,
      ],
      answerIndex: [2]
    },
    {
      txtField: ``,
      question: `Modal sebuah barang adalah Rp720.000,00. Berapa harga yang harus dipasang pada barang tersebut agar pedagang bisa menjual dengan potongan harga 10% dan tetap untung 25%?`,
      options: [
        `Rp1.200.000,00`,
        `Rp1.000.000,00`,
        `Rp960.000,00`,
        `Rp862.000,00`,
        `Rp840.000,00`,
      ],
      answerIndex: [1]
    },
    {
      txtField: ``,
      question: `Banyaknya susunan lima angka berbeda dari angka 5,6,7,8, dan 9 dari kiri ke kanan, dengan angka pertamanya BUKAN 5 dan angka terakhir 8 atau 9 adalah ....`,
      options: [
        `18`,
        `36`,
        `90`,
        `96`,
        `192`,
      ],
      answerIndex: [2]
    },
    {
      txtField: `KPK dari dua buah bilangan prima $x$ dan $y$ adalah 14, dengan $x > y$.`,
      question: `Nilai dari $3x-y$ adalah ....`,
      options: [
        `-1`,
        `13`,
        `19`,
        `21`,
        `23`,
      ],
      answerIndex: [2]
    },
    {
      txtField: ``,
      question: `Nilai $x$ yang memenuhi pertidaksamaan $5^{2x} - 6 \\cdot 5^{x+1} + 125 < 0$ yang dimana x anggota bilangan riil adalah ....`,
      options: [
        `$1 < x < 2$`,
        `$5 < x < 25$`,
        `$x < -1$ atau $x > 2$`,
        `$x < 1$ atau $x > 2$`,
        `$x < 5$ atau $x > 25$`,
      ],
      answerIndex: [0]
    },
    {
      txtField: ``,
      question: `Apabila $x$, $y$, dan $z$ adalah bilangan bulat dan didefinisikan x # y # z $= x^2 - y : z$, maka nilai dari 3 # (-6) # 3 adalah ....`,
      options: [
        `4`,
        `5`,
        `6`,
        `11`,
        `12`,
      ],
      answerIndex: [3]
    },
    {
      txtField: `Barisan $14, (p-1), 6, 2, -2, ....$ adalah barisan aritmetika.`,
      question: `Nilai p adalah ....`,
      options: [
        `7`,
        `8`,
        `9`,
        `10`,
        `11`,
      ],
      answerIndex: [4]
    },
    {
      txtField: `Diberikan a, b, c adalah anggota bilangan riil (nyata).
      \n $a+b+c = 7$
      \n $\\frac{1}{a+b} + \\frac{1}{b+c} + \\frac{1}{c+a} = \\frac{7}{10}$`,
      question: `Maka, nilai $\\frac{a}{b + c} + \\frac{b}{c + a} + \\frac{c}{a + b} = $ ....`,
      options: [
        `$\\frac{19}{10}$`,
        `$\\frac{21}{10}$`,
        `$\\frac{23}{10}$`,
        `$\\frac{25}{10}$`,
        `$\\frac{27}{10}$`,
      ],
      answerIndex: [0]
    },
    {
      txtField: ``,
      question: `Luas seluruh sisi balok 96 $cm^2$ apabila alasnya berbentuk persegi, maka paling besar balok tersebut dapat dibuat dengan volume ....$cm^3$`,
      options: [
        `32`,
        `64`,
        `96`,
        `112`,
        `124`,
      ],
      answerIndex: [1]
    },
    {
      txtField: ``,
      question: `Kamar Akbar berbentuk balok dengan ukuran panjang:lebar:tinggi = 5:5:4. Di langit-langit kamar terdapat lampu yang letaknya tepat pada pusat bidang langit-langit. Pada salah satu dinding kamar dipasang saklar yang letaknya tepat di tengah-tengah dinding. Jarak saklar ke lampu adalah ....`,
      options: [
        `$\\frac{3}{2}$ m`,
        `$\\frac{5}{2}$ m`,
        `$\\frac{1}{2}\\sqrt{34}$ m`,
        `$\\frac{1}{2}\\sqrt{41}$ m`,
        `$\\sqrt{14}$ m`,
      ],
      answerIndex: [3]
    },
    {
      txtField: ``,
      question: `Nilai $\\frac{2^{14} - 2^{12}}{2^{11}+2^{10}} = $ ....`,
      options: [
        `1`,
        `2`,
        `3`,
        `4`,
        `5`,
      ],
      answerIndex: [3]
    },
    {
      txtField: `H = 12`,
      question: `LASWJ ZE XWSWD EJE UWJC PANIWOQG EJOAYPW WZWHWD ....`,
      options: [
        `GQZW`,
        `WUWI`,
        `XAHWHWJC`,
        `DWNEIWQ`,
        `QHWN`,
      ],
      answerIndex: [2]
    },
    {
      txtField: ``,
      question: `Jika diketahui $x = \\frac{1}{2}$ adalah solusi dari persamaan $^a \\log{x} + ^a \\log{(2x+1)} = b$, maka nilai dari $2a - 6b = $ ....`,
      options: [
        `$-5a$`,
        `$-4a$`,
        `$-3a$`,
        `$2a$`,
        `$a$`,
      ],
      answerIndex: [3]
    },
    {
      imageUrl: `![Diagram](https://iili.io/2PrEFmN.png "Diagram")`,
      // txtField: ``,
      question: `Jika diberikan input x = 5, manakah pernyataan berikut yang benar dengan menjalan prosedur yang disajikan diagram?
      \n(1) $y + 3x$ bilangan ganjil
      \n(2) $z > 11$
      \n(3) $y + z$ bilangan prima
      \n(4) $w + 2z$ bilangan genap`,
      options: [
        `(1), (2), dan (3)`,
        `(1) dan (3)`,
        `(2) dan (4)`,
        `(4)`,
        `(1), (2), (3), dan (4)`,
      ],
      answerIndex: [3]
    },
    {
      question: `Himpunan penyelesaian dari |$\\frac{1}{4}x^2-10$|$<6$ adalah ....`,
      options: [
        `$-8<8$`,
        `$x<4$ atau $x>4$`,
        `$-4<x<4$ atau $x<-8$ atau $x>8$`,
        `$-4<x<4$`,
        `$-8<x<-4$ atau $4<x<8$`,
      ],
      answerIndex: [4]
    },
    {
      txtField: `Diketahui x,y,z didefinisikan x @ y ? z = $(x+2y)^z$`,
      question: `Nilai dari 5 @ -3 ? 100 adalah ....`,
      options: [
        `-2`,
        `-1`,
        `0`,
        `1`,
        `2`,
      ],
      answerIndex: [3]
    },
    {
      question: `Nilai $(\\frac{1}{2^3 \times 3^{-6}})^{\\frac{1}{3}} =$ ....`,
      options: [
        `$\\frac{9}{2}$`,
        `$\\frac{2}{9}$`,
        `$18$`,
        `$\\frac{1}{18}$`,
        `$9$`,
      ],
      answerIndex: [0]
    },
    {
      txtField: `Diketahui f dan g adalah fungsi yang mempunyai invers. Jika $f(g(x)) = 2x - 1$ dan $g(x+1) = x - 3$`,
      question: `Maka nilai $f^{-1}(3) \\cdot g^{-1}(3)$ adalah ....`,
      options: [
        `14`,
        `9`,
        `0`,
        `-9`,
        `-14`,
      ],
      answerIndex: [4]
    },
    {
      question: `Jika a dan b dua bilangan real dengan $ \\lim_{x\\to\\infty} \\frac{x^2 + 2ax + b}{x - 2} = 3$`,
      options: [
        `-35`,
        `-30`,
        `-15`,
        `-3`,
        `-1`,
      ],
      answerIndex: [0]
    },
  ],
};
  
// Tes Literasi

const soalLitdo: ujianSession = {
  name: "Literasi Bahasa Indonesia",
  description: "Ada 30 soal yang akan dikerjakan dalam 42,5 menit",
  questions: [
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Kereta maglev (*magnetic levitation*) adalah kereta api yang mengambang di atas rel. Kereta maglev mengambang dan bergerak berdasarkan tarikan dan tolakan elektromagnetik, seperti dua kutub magnet sejenis tolak-menolak dan dua kutub magnet berbeda jenis tarik menarik. Tidak adanya kontak dengan rel membuat gesekan sangat kecil sehingga kereta dapat bergerak dengan tenang, halus, dan cepat.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Ada dua sistem teknologi maglev, yaitu sistem suspense elektromagnetik (SSE) dan sistem suspense elektrodinamik (SSD). Di dalam SSE, pada bagian bawah kereta di kedua sisi dipasang suatu struktur kuat (bogle) berbentuk huruf C tegak sehingga posisi rel berada di atas ujung bogie bagian bawah. Perangkat elektromagnet dipasang di ujung bogie di bawah rel. Ketika dialiri arus listrik dari bateral, perangkat elektromagnet berubah menjadi magnet dan terjadi tarik-menarik dengan rel kereta. Akibatnya, bogie tertarik ke atas menyebabkan kereta mengambang sekitar 1,5 cm di atas rel kereta. Maglev dengan sistem ini dapat bergerak dengan kelajuan rendah maupun tinggi. Sayangnya, SSE kurang stabil dibanding SSD. Di dalam SSD, di sepanjang rel dipasang perangkat elektromagnet dan di bagian bawah dari kereta dipasang magnet permanen. Ketika elektromagnet menjadi magnet, terjadi tolak-menolak dengan magnet permanen dan menyebabkan kereta terangkat sekitar 10 cm. Terangkatnya kereta memerlukan waktu sehingga kereta sistem SSD ini harus dilengkapi dengan roda agar dapat bergerak pada kelajuan rendah Sistem elektronik untuk SSE dan SSD harus handal agar tarikan dan dorongan dapat berlangsung pada saat-saat yang diinginkan.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Kereta maglev ramah lingkungan karena tidak ada proses pembakaran dan hampir tidak ada polusi suara meskipun masih mengalami gangguan suara. Tiadanya hambatan dengan rel membuat kereta dapat melaju sangat cepat sampai 500 km/jam. Sayangnya, jalur kereta maglev adalah jalur khusus, tidak bisa menggunakan jalur kereta biasa. Hal ini menjadi salah satu penyebab sangat mahalnya biaya pembangunan kereta maglev. Namun, mengingat jumlah kelebihan yang telah diungkapkan di atas dan perkembangan teknologi yang diharapkan dapat mereduksi biaya produksi, kereta maglev diharapkan bisa menjadi kereta massal di masa depan.`,
      question: `Pilih beberapa pernyataan berikut yang sesuai bacaan di atas!`,
      options: [
        "Mendapat hambatan udara lebih kecil dibanding kereta biasa.",
        "Mendapat tarikan dan dorongan melalui pasangan dua magnet permanen.",
        "Sumber utama energi magelev berupa energi listrik.",
        "Maglev dengan sistem SSE dapat mengambang di udara pada kelajuan rendah.",
        "Maglev dengan sistem SSE tidak dapat mengambang di udara pada kelajuan renda.",
      ],
      answerIndex: [0,2,3,4]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Kereta maglev (*magnetic levitation*) adalah kereta api yang mengambang di atas rel. Kereta maglev mengambang dan bergerak berdasarkan tarikan dan tolakan elektromagnetik, seperti dua kutub magnet sejenis tolak-menolak dan dua kutub magnet berbeda jenis tarik menarik. Tidak adanya kontak dengan rel membuat gesekan sangat kecil sehingga kereta dapat bergerak dengan tenang, halus, dan cepat.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Ada dua sistem teknologi maglev, yaitu sistem suspense elektromagnetik (SSE) dan sistem suspense elektrodinamik (SSD). Di dalam SSE, pada bagian bawah kereta di kedua sisi dipasang suatu struktur kuat (bogle) berbentuk huruf C tegak sehingga posisi rel berada di atas ujung bogie bagian bawah. Perangkat elektromagnet dipasang di ujung bogie di bawah rel. Ketika dialiri arus listrik dari bateral, perangkat elektromagnet berubah menjadi magnet dan terjadi tarik-menarik dengan rel kereta. Akibatnya, bogie tertarik ke atas menyebabkan kereta mengambang sekitar 1,5 cm di atas rel kereta. Maglev dengan sistem ini dapat bergerak dengan kelajuan rendah maupun tinggi. Sayangnya, SSE kurang stabil dibanding SSD. Di dalam SSD, di sepanjang rel dipasang perangkat elektromagnet dan di bagian bawah dari kereta dipasang magnet permanen. Ketika elektromagnet menjadi magnet, terjadi tolak-menolak dengan magnet permanen dan menyebabkan kereta terangkat sekitar 10 cm. Terangkatnya kereta memerlukan waktu sehingga kereta sistem SSD ini harus dilengkapi dengan roda agar dapat bergerak pada kelajuan rendah Sistem elektronik untuk SSE dan SSD harus handal agar tarikan dan dorongan dapat berlangsung pada saat-saat yang diinginkan.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Kereta maglev ramah lingkungan karena tidak ada proses pembakaran dan hampir tidak ada polusi suara meskipun masih mengalami gangguan suara. Tiadanya hambatan dengan rel membuat kereta dapat melaju sangat cepat sampai 500 km/jam. Sayangnya, jalur kereta maglev adalah jalur khusus, tidak bisa menggunakan jalur kereta biasa. Hal ini menjadi salah satu penyebab sangat mahalnya biaya pembangunan kereta maglev. Namun, mengingat jumlah kelebihan yang telah diungkapkan di atas dan perkembangan teknologi yang diharapkan dapat mereduksi biaya produksi, kereta maglev diharapkan bisa menjadi kereta massal di masa depan.`,
      question: `Pernyataan di bawah ini yang merupakan opini penulis yang sesuai dengan bacaan tersebut adalah ....`,
      options: [
        "menjadikan kereta maglev sebagai kereta massal di masa depan",
        "membangun kereta maglev pada rel yang telah ada",
        "mengembangkan kereta sistem SSE yang melayang 10 cm di atas rel",
        "merancang dan membangun kereta sistem SSD tanpa roda",
        "membangun kereta maglev dengan kestabilan tinggi",
      ],
      answerIndex: [0]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Kereta maglev (*magnetic levitation*) adalah kereta api yang mengambang di atas rel. Kereta maglev mengambang dan bergerak berdasarkan tarikan dan tolakan elektromagnetik, seperti dua kutub magnet sejenis tolak-menolak dan dua kutub magnet berbeda jenis tarik menarik. Tidak adanya kontak dengan rel membuat gesekan sangat kecil sehingga kereta dapat bergerak dengan tenang, halus, dan cepat.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Ada dua sistem teknologi maglev, yaitu sistem suspense elektromagnetik (SSE) dan sistem suspense elektrodinamik (SSD). Di dalam SSE, pada bagian bawah kereta di kedua sisi dipasang suatu struktur kuat (bogle) berbentuk huruf C tegak sehingga posisi rel berada di atas ujung bogie bagian bawah. Perangkat elektromagnet dipasang di ujung bogie di bawah rel. Ketika dialiri arus listrik dari bateral, perangkat elektromagnet berubah menjadi magnet dan terjadi tarik-menarik dengan rel kereta. Akibatnya, bogie tertarik ke atas menyebabkan kereta mengambang sekitar 1,5 cm di atas rel kereta. Maglev dengan sistem ini dapat bergerak dengan kelajuan rendah maupun tinggi. Sayangnya, SSE kurang stabil dibanding SSD. Di dalam SSD, di sepanjang rel dipasang perangkat elektromagnet dan di bagian bawah dari kereta dipasang magnet permanen. Ketika elektromagnet menjadi magnet, terjadi tolak-menolak dengan magnet permanen dan menyebabkan kereta terangkat sekitar 10 cm. Terangkatnya kereta memerlukan waktu sehingga kereta sistem SSD ini harus dilengkapi dengan roda agar dapat bergerak pada kelajuan rendah Sistem elektronik untuk SSE dan SSD harus handal agar tarikan dan dorongan dapat berlangsung pada saat-saat yang diinginkan.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Kereta maglev ramah lingkungan karena tidak ada proses pembakaran dan hampir tidak ada polusi suara meskipun masih mengalami gangguan suara. Tiadanya hambatan dengan rel membuat kereta dapat melaju sangat cepat sampai 500 km/jam. Sayangnya, jalur kereta maglev adalah jalur khusus, tidak bisa menggunakan jalur kereta biasa. Hal ini menjadi salah satu penyebab sangat mahalnya biaya pembangunan kereta maglev. Namun, mengingat jumlah kelebihan yang telah diungkapkan di atas dan perkembangan teknologi yang diharapkan dapat mereduksi biaya produksi, kereta maglev diharapkan bisa menjadi kereta massal di masa depan.`,
      question: `Kelemahan SSD dibandingkan SSE adalah ....`,
      options: [
        "melayang terlalu tinggi, 10 cm di atas rel",
        "tidak dapat melayang pada awal geraknya",
        "tidak bisa bergerak dengan cepat",
        "bergerak kurang tenang dan kurang halus",
        "sistem elektroniknya kurang handal",
      ],
      answerIndex: [1]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Kereta maglev (*magnetic levitation*) adalah kereta api yang mengambang di atas rel. Kereta maglev mengambang dan bergerak berdasarkan tarikan dan tolakan elektromagnetik, seperti dua kutub magnet sejenis tolak-menolak dan dua kutub magnet berbeda jenis tarik menarik. Tidak adanya kontak dengan rel membuat gesekan sangat kecil sehingga kereta dapat bergerak dengan tenang, halus, dan cepat.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Ada dua sistem teknologi maglev, yaitu sistem suspense elektromagnetik (SSE) dan sistem suspense elektrodinamik (SSD). Di dalam SSE, pada bagian bawah kereta di kedua sisi dipasang suatu struktur kuat (bogle) berbentuk huruf C tegak sehingga posisi rel berada di atas ujung bogie bagian bawah. Perangkat elektromagnet dipasang di ujung bogie di bawah rel. Ketika dialiri arus listrik dari bateral, perangkat elektromagnet berubah menjadi magnet dan terjadi tarik-menarik dengan rel kereta. Akibatnya, bogie tertarik ke atas menyebabkan kereta mengambang sekitar 1,5 cm di atas rel kereta. Maglev dengan sistem ini dapat bergerak dengan kelajuan rendah maupun tinggi. Sayangnya, SSE kurang stabil dibanding SSD. Di dalam SSD, di sepanjang rel dipasang perangkat elektromagnet dan di bagian bawah dari kereta dipasang magnet permanen. Ketika elektromagnet menjadi magnet, terjadi tolak-menolak dengan magnet permanen dan menyebabkan kereta terangkat sekitar 10 cm. Terangkatnya kereta memerlukan waktu sehingga kereta sistem SSD ini harus dilengkapi dengan roda agar dapat bergerak pada kelajuan rendah Sistem elektronik untuk SSE dan SSD harus handal agar tarikan dan dorongan dapat berlangsung pada saat-saat yang diinginkan.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Kereta maglev ramah lingkungan karena tidak ada proses pembakaran dan hampir tidak ada polusi suara meskipun masih mengalami gangguan suara. Tiadanya hambatan dengan rel membuat kereta dapat melaju sangat cepat sampai 500 km/jam. Sayangnya, jalur kereta maglev adalah jalur khusus, tidak bisa menggunakan jalur kereta biasa. Hal ini menjadi salah satu penyebab sangat mahalnya biaya pembangunan kereta maglev. Namun, mengingat jumlah kelebihan yang telah diungkapkan di atas dan perkembangan teknologi yang diharapkan dapat mereduksi biaya produksi, kereta maglev diharapkan bisa menjadi kereta massal di masa depan.`,
      question: `Alasan utama kereta maglev dikembangkan adalah ....`,
      options: [
        "menggunakan sumber energi listrik",
        "dapat melayang di udara",
        "tidak menimbulkan polusi",
        "dapat bergerak sangat cepat",
        "tidak ada pengaruh gesekan",
      ],
      answerIndex: [2]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Kereta maglev (*magnetic levitation*) adalah kereta api yang mengambang di atas rel. Kereta maglev mengambang dan bergerak berdasarkan tarikan dan tolakan elektromagnetik, seperti dua kutub magnet sejenis tolak-menolak dan dua kutub magnet berbeda jenis tarik menarik. Tidak adanya kontak dengan rel membuat gesekan sangat kecil sehingga kereta dapat bergerak dengan tenang, halus, dan cepat.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Ada dua sistem teknologi maglev, yaitu sistem suspense elektromagnetik (SSE) dan sistem suspense elektrodinamik (SSD). Di dalam SSE, pada bagian bawah kereta di kedua sisi dipasang suatu struktur kuat (bogle) berbentuk huruf C tegak sehingga posisi rel berada di atas ujung bogie bagian bawah. Perangkat elektromagnet dipasang di ujung bogie di bawah rel. Ketika dialiri arus listrik dari bateral, perangkat elektromagnet berubah menjadi magnet dan terjadi tarik-menarik dengan rel kereta. Akibatnya, bogie tertarik ke atas menyebabkan kereta mengambang sekitar 1,5 cm di atas rel kereta. Maglev dengan sistem ini dapat bergerak dengan kelajuan rendah maupun tinggi. Sayangnya, SSE kurang stabil dibanding SSD. Di dalam SSD, di sepanjang rel dipasang perangkat elektromagnet dan di bagian bawah dari kereta dipasang magnet permanen. Ketika elektromagnet menjadi magnet, terjadi tolak-menolak dengan magnet permanen dan menyebabkan kereta terangkat sekitar 10 cm. Terangkatnya kereta memerlukan waktu sehingga kereta sistem SSD ini harus dilengkapi dengan roda agar dapat bergerak pada kelajuan rendah Sistem elektronik untuk SSE dan SSD harus handal agar tarikan dan dorongan dapat berlangsung pada saat-saat yang diinginkan.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Kereta maglev ramah lingkungan karena tidak ada proses pembakaran dan hampir tidak ada polusi suara meskipun masih mengalami gangguan suara. Tiadanya hambatan dengan rel membuat kereta dapat melaju sangat cepat sampai 500 km/jam. Sayangnya, jalur kereta maglev adalah jalur khusus, tidak bisa menggunakan jalur kereta biasa. Hal ini menjadi salah satu penyebab sangat mahalnya biaya pembangunan kereta maglev. Namun, mengingat jumlah kelebihan yang telah diungkapkan di atas dan perkembangan teknologi yang diharapkan dapat mereduksi biaya produksi, kereta maglev diharapkan bisa menjadi kereta massal di masa depan.`,
      question: `Kalimat berikut ini yang merupakan fakta adalah..`,
      options: [
        "Di dalam SSE, pada bagian bawah kereta di kedua sisi dipasang suatu struktur kuat (bogie) berbentuk huruf C tegak sehingga posisi rel berada di atas ujung bogie bagian bawah.",
        "Ketika elektromagnet menjadi magnet, terjadi tolak-menolak dengan magnet permanen dan menye babkan kereta terangkat sekitar 10 cm.",
        `Mengingat jumlah kelebihan yang telah diungkapkan di atas dan perkembangan teknologi yang diharapkan dapat mereduksi biaya produksi, kereta maglev diharapkan bisa menjadi kereta massal di masa depan.`,
        `Tidak adanya kontak dengan rel membuat gesekan sangat kecil sehingga kereta dapat bergerak dengan tenang, halus, dan cepat.`,
        `Sayangnya, SSE kurang stabil dibanding SSD.`,
      ],
      answerIndex: [0]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Kereta maglev (*magnetic levitation*) adalah kereta api yang mengambang di atas rel. Kereta maglev mengambang dan bergerak berdasarkan tarikan dan tolakan elektromagnetik, seperti dua kutub magnet sejenis tolak-menolak dan dua kutub magnet berbeda jenis tarik menarik. Tidak adanya kontak dengan rel membuat gesekan sangat kecil sehingga kereta dapat bergerak dengan tenang, halus, dan cepat.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Ada dua sistem teknologi maglev, yaitu sistem suspense elektromagnetik (SSE) dan sistem suspense elektrodinamik (SSD). Di dalam SSE, pada bagian bawah kereta di kedua sisi dipasang suatu struktur kuat (bogle) berbentuk huruf C tegak sehingga posisi rel berada di atas ujung bogie bagian bawah. Perangkat elektromagnet dipasang di ujung bogie di bawah rel. Ketika dialiri arus listrik dari bateral, perangkat elektromagnet berubah menjadi magnet dan terjadi tarik-menarik dengan rel kereta. Akibatnya, bogie tertarik ke atas menyebabkan kereta mengambang sekitar 1,5 cm di atas rel kereta. Maglev dengan sistem ini dapat bergerak dengan kelajuan rendah maupun tinggi. Sayangnya, SSE kurang stabil dibanding SSD. Di dalam SSD, di sepanjang rel dipasang perangkat elektromagnet dan di bagian bawah dari kereta dipasang magnet permanen. Ketika elektromagnet menjadi magnet, terjadi tolak-menolak dengan magnet permanen dan menyebabkan kereta terangkat sekitar 10 cm. Terangkatnya kereta memerlukan waktu sehingga kereta sistem SSD ini harus dilengkapi dengan roda agar dapat bergerak pada kelajuan rendah Sistem elektronik untuk SSE dan SSD harus handal agar tarikan dan dorongan dapat berlangsung pada saat-saat yang diinginkan.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Kereta maglev ramah lingkungan karena tidak ada proses pembakaran dan hampir tidak ada polusi suara meskipun masih mengalami gangguan suara. Tiadanya hambatan dengan rel membuat kereta dapat melaju sangat cepat sampai 500 km/jam. Sayangnya, jalur kereta maglev adalah jalur khusus, tidak bisa menggunakan jalur kereta biasa. Hal ini menjadi salah satu penyebab sangat mahalnya biaya pembangunan kereta maglev. Namun, mengingat jumlah kelebihan yang telah diungkapkan di atas dan perkembangan teknologi yang diharapkan dapat mereduksi biaya produksi, kereta maglev diharapkan bisa menjadi kereta massal di masa depan.`,
      question: `Kalimat di bawah ini yang termasuk opini adalah ....`,
      options: [
        "Ada dua sistem teknologi maglev, yaitu sistem suspense elektromagnetik (SSE) dan sistem suspense elektrodinamik (SSD).",
        "Kereta maglev (magnetic levitation) adalah kereta api yang mengambang di atas rel.",
        "Kereta maglev mengambang dan bergerak berdasarkan tarikan dan tolakan elektromagnetik.",
        `Sistem elektromagnetik untuk SSE dan SSD harus handal agar tarikan dan dorongan dapat berlang-sung pada saat-saat yang diinginkan.`,
        `Tiadanya hambatan dengan rel membuat kereta dapat melaju sangat cepat sampai 500 km/jam.`,
      ],
      answerIndex: [3]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Diet pescatarian masih tergolong sebagai salah satu tipe diet vegetarian. Istilah pescatarian ber- asal dari kata pesce (bahasa Italia) yang berarti ikan, sedangkan kata tarian diambil dari vegetarian. Orang yang menjalani diet pescatarian menghindari konsumsi daging mentah dan daging unggas, tetapi dapat mengonsumsi sayuran, buah-buahan, biji-bijian, kacang-kacangan, dan produk olahannya (seperti tahu dan tempe), jamur, ikan (baik ikan air laut maupun ikan air tawar, termasuk ikan tilapia, seafood (termasuk udang, cumi-cumi, kerang, dan gurita), telur, susu, dan produk olahannya (seperti yoghurt dan keju). Meski demikian, ada pula sebagian orang yang menjalani diet pescatarian memilih untuk tidak mengonsumsi telur beserta susu dan produk olahannya sama sekali. Diet ini disebut dengan pescatarian.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Orang melakukan diet pescatarian didasarkan pada pertimbangan ideal, baik sosial maupun personal. Salah satu alasan mengapa banyak orang mulai menjalani diet vegetarian dan pescatarian adalah karena kepedulian terhadap lingkungan. Alasan ini muncul dari anggapan bahwa konsumsi daging hewan dan unggas bisa berdampak buruk terhadap lingkungan. Hal ini dikarenakan industri tersebut dapat menghasilkan banyak polusi dan memicu pemanasan global. Namun, ada pula yang memilih untuk menjalani diet pescatarian karena alasan kesehatan. Ini dikarenakan pola makan pescatarian didominasi oleh makanan bernilai gizi tinggi, seperti ikan, seafood, sayur, dan buah-buahan.`,
      question: `Dalam bacaan terdapat pernyataan "orang melakukan diet pescatarian didasarkan pada pertimbangan ideal, baik sosial maupun personal". Pernyataan berikut ini yang merupakan penjelasan yang tepat atas pernyataan tersebut adalah ....`,
      options: [
        "Alasan orang menjalani diet vegetarian dan pescatarian adalah karena kepedulian terhadap pelestarian lingkungan.",
        "Anggapan bahwa konsumsi daging hewan dari industri peternakan hewan terdampak buruk terhadap lingkungan.",
        "Konsumsi daging hewan dari industri peternakan dapat menghasilkan banyak polusi dan memicu pemanasan global.",
        "Pertimbangan orang yang memilih untuk menjalani diet vegetarian atau pescatarian adalah karena alasan kesehatan.",
        "Pemilihan pola makan atau diet pescatarian dengan alasan peduli pelestarian lingkungan dan alasan peduli kesehatan.",
      ],
      answerIndex: [4]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Diet pescatarian masih tergolong sebagai salah satu tipe diet vegetarian. Istilah pescatarian ber- asal dari kata pesce (bahasa Italia) yang berarti ikan, sedangkan kata tarian diambil dari vegetarian. Orang yang menjalani diet pescatarian menghindari konsumsi daging mentah dan daging unggas, tetapi dapat mengonsumsi sayuran, buah-buahan, biji-bijian, kacang-kacangan, dan produk olahannya (seperti tahu dan tempe), jamur, ikan (baik ikan air laut maupun ikan air tawar, termasuk ikan tilapia, seafood (termasuk udang, cumi-cumi, kerang, dan gurita), telur, susu, dan produk olahannya (seperti yoghurt dan keju). Meski demikian, ada pula sebagian orang yang menjalani diet pescatarian memilih untuk tidak mengonsumsi telur beserta susu dan produk olahannya sama sekali. Diet ini disebut dengan pescatarian.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Orang melakukan diet pescatarian didasarkan pada pertimbangan ideal, baik sosial maupun personal. Salah satu alasan mengapa banyak orang mulai menjalani diet vegetarian dan pescatarian adalah karena kepedulian terhadap lingkungan. Alasan ini muncul dari anggapan bahwa konsumsi daging hewan dan unggas bisa berdampak buruk terhadap lingkungan. Hal ini dikarenakan industri tersebut dapat menghasilkan banyak polusi dan memicu pemanasan global. Namun, ada pula yang memilih untuk menjalani diet pescatarian karena alasan kesehatan. Ini dikarenakan pola makan pescatarian didominasi oleh makanan bernilai gizi tinggi, seperti ikan, seafood, sayur, dan buah-buahan.`,
      question: `Berdasarkan teks di atas pengertian diet pescatarian adalah ....`,
      options: [
        "Diet dengan cara tidak memakan segala macam jenis daging dan ikan serta produk olahan yang mengandung lemak.",
        "Diet dengan tidak mengonsumsi daging mentah dan daging unggas, tetapi dapat mengonsumsi sayuran, buah-buahan, biji-bijian, kacang-kacangan, ikan.",
        "Diet dengan tidak mengonsumsi segala jenis olahan daging dan hanya diperbolehkan mengonsumsi sayuran dan produk olahan.",
        "Diet dengan tidak mengonsumsi daging mentah, tetapi harus mengonsumsi susu dan produk olahannya sebagai pengganti lemak dalam tubuh.",
        "Diet vegetarian, yaitu hanya memakan semua jenis sayuran, kacang-kacangan, dan biji-bijian.",
      ],
      answerIndex: [1]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Diet pescatarian masih tergolong sebagai salah satu tipe diet vegetarian. Istilah pescatarian ber- asal dari kata pesce (bahasa Italia) yang berarti ikan, sedangkan kata tarian diambil dari vegetarian. Orang yang menjalani diet pescatarian menghindari konsumsi daging mentah dan daging unggas, tetapi dapat mengonsumsi sayuran, buah-buahan, biji-bijian, kacang-kacangan, dan produk olahannya (seperti tahu dan tempe), jamur, ikan (baik ikan air laut maupun ikan air tawar, termasuk ikan tilapia, seafood (termasuk udang, cumi-cumi, kerang, dan gurita), telur, susu, dan produk olahannya (seperti yoghurt dan keju). Meski demikian, ada pula sebagian orang yang menjalani diet pescatarian memilih untuk tidak mengonsumsi telur beserta susu dan produk olahannya sama sekali. Diet ini disebut dengan pescatarian.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Orang melakukan diet pescatarian didasarkan pada pertimbangan ideal, baik sosial maupun personal. Salah satu alasan mengapa banyak orang mulai menjalani diet vegetarian dan pescatarian adalah karena kepedulian terhadap lingkungan. Alasan ini muncul dari anggapan bahwa konsumsi daging hewan dan unggas bisa berdampak buruk terhadap lingkungan. Hal ini dikarenakan industri tersebut dapat menghasilkan banyak polusi dan memicu pemanasan global. Namun, ada pula yang memilih untuk menjalani diet pescatarian karena alasan kesehatan. Ini dikarenakan pola makan pescatarian didominasi oleh makanan bernilai gizi tinggi, seperti ikan, seafood, sayur, dan buah-buahan.`,
      question: `Judul yang tepat berdasarkan teks di atas adalah ....`,
      options: [
        "Perbedaan Diet Vegetarian dan Pescatarian",
        "Ciri-ciri Diet Pescatarian",
        "Diet Pescatarian",
        "Definisi Diet Pescatarian",
        "Cara Diet Pescatarian",
      ],
      answerIndex: [1]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Diet pescatarian masih tergolong sebagai salah satu tipe diet vegetarian. Istilah pescatarian ber- asal dari kata pesce (bahasa Italia) yang berarti ikan, sedangkan kata tarian diambil dari vegetarian. Orang yang menjalani diet pescatarian menghindari konsumsi daging mentah dan daging unggas, tetapi dapat mengonsumsi sayuran, buah-buahan, biji-bijian, kacang-kacangan, dan produk olahannya (seperti tahu dan tempe), jamur, ikan (baik ikan air laut maupun ikan air tawar, termasuk ikan tilapia, seafood (termasuk udang, cumi-cumi, kerang, dan gurita), telur, susu, dan produk olahannya (seperti yoghurt dan keju). Meski demikian, ada pula sebagian orang yang menjalani diet pescatarian memilih untuk tidak mengonsumsi telur beserta susu dan produk olahannya sama sekali. Diet ini disebut dengan pescatarian.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Orang melakukan diet pescatarian didasarkan pada pertimbangan ideal, baik sosial maupun personal. Salah satu alasan mengapa banyak orang mulai menjalani diet vegetarian dan pescatarian adalah karena kepedulian terhadap lingkungan. Alasan ini muncul dari anggapan bahwa konsumsi daging hewan dan unggas bisa berdampak buruk terhadap lingkungan. Hal ini dikarenakan industri tersebut dapat menghasilkan banyak polusi dan memicu pemanasan global. Namun, ada pula yang memilih untuk menjalani diet pescatarian karena alasan kesehatan. Ini dikarenakan pola makan pescatarian didominasi oleh makanan bernilai gizi tinggi, seperti ikan, seafood, sayur, dan buah-buahan.`,
      question: `Ringkasan yang terdapat pada teks di atas adalah ....`,
      options: [
        "Orang yang menjalani diet pescatarian menghindari konsumsi daging mentah dan daging unggas, tetapi dapat mengonsumsi sayuran, buah-buahan, biji-bijian, kacang-kacangan, dan produk olah- annya (seperti tahu dan tempe), jamur, ikan (baik ikan air laut maupun ikan air tawar, termasuk ikan tilapia, seafood (termasuk udang, cumi-cumi, kerang dan gurita), telur, susu, dan produk olahannya (seperti yoghurt dan keju).",
        "Diet pescatarian masih tergolong sebagai salah satu diet vegetarian yang hanya memperbolehkan makan buah-buahan dan sayur-sayuran, sesekali boleh mengonsumsi olahan susu, ikan, kacang, dan biji.",
        "Diet pescatarian masih tergolong sebagai salah satu tipe diet vegetarian, tetapi boleh mengonsumsi ikan, susu, dan produk olahan yang didasarkan pada pertimbangan ideal, baik sosial maupun personal dengan berbagai alasan.",
        "Alasan diet pescatarian karena alasan kesehatan, pola makan pescatarian didominasi oleh makanan bernilai gizi tinggi, seperti ikan, seafood, sayur, dan buah-buahan, serta alasan pelestarian lingkungan.",
        "Orang yang menjalani diet pescatarian menghindari konsumsi daging mentah dan daging unggas dengan alasan untuk kesehatan dan ingin melestarikan buah-buahan dan sayur-sayuran.",
      ],
      answerIndex: [2]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Tanaman kopi umumnya berdaun hijau sepanjang tahun, berbunga putih, dan menghasilkan buah kopi yang mirip dengan buah ceri, tetapi terbungkus dengan cangkang yang keras. Pemanenan buah kopi dari tandannya biasanya dilakukan secara manual, dipilih buah yang matang dan berwarna merah. Biji kopi kemudian dipisahkan dari kulit buah dan cangkangnya melalui penggilingan langsung atau dikeringkan terlebih dahulu di bawah sinar matahari. Sebelum digiling buah kopi umumnya dicuci saat penggilingan. Di Indonesia, buah kopi umumnya dikeringkan dengan dijemur di bawah sinar matahari hingga kadar airnya tersisa 30-35%. Pemisahan biji dari cangkangnya dapat dilakukan dengan lebih mudah pada biji kopi kering. Biji kopi yang sudah bersih kemudian disangrai dengan derajat dan waktu pemanasan tertentu. Akhirnya, kopinya dihaluskan menjadi bubuk yang siap diseduh dengan air panas untuk menghadirkan minuman kopi.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Rasa nikmat minuman kopi sangat ditentukan oleh suhu pemanasan dan tingkat kegosongan selama pemanggangan, selain juga ditentukan oleh jenis pohon kopinya. Di Indonesia dikenal dua jenis kopi, yaitu Arabica dan Robusta. Biji kopi Arabica mempunyai ukuran agak besar, pipih sedikit memanjang, dan agak rapuh. Di lain pihak, biji kopi Robusta berukuran lebih kecil, berbentuk bulat, dan terlihat padat. Tanaman kopi Arabica tidak tahan panas dan rentan terhadap penyakit, tetapi cita rasa kopi Arabica lebih banyak disukai masyarakat.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Zat aktif yang terdapat dalam biji kopi disebut kafein. Zat ini berasa pahit dan dipercaya dapat memberikan efek stimulasi terhadap sistem saraf pusat, seperti mengurangi rasa kantuk, mengurangi rasa lelah, meningkatkan stamina tubuh, meningkatkan daya tangkap panca indera, dan meningkatkan detak jantung. Dekafein merupakan modifikasi produk kopi untuk mengurangi kadar kafein dan meningkatkan cita rasa kopi. Beberapa metode yang dapat dilakukan dalam dekafeinasi antara lain melalui ekstraksi menggunakan air, pelarut kimia, karbondioksida superkritis, dan minyak biji bunga matahari. Dekafeinasi juga dapat dilakukan menggunakan arang aktif, mikroorganisme, atau enzim tertentu. Gas CO2 banyak terdapat di udara dan ekstraksi dengan pelarut CO2 superkritis dapat mengurangi kadar kafein dalam biji kopi hingga 96%, tetapi teknologi pengerjaannya memerlukan biaya yang tinggi.`,
      question: `Dekafeinasi dengan metode ekstraksi yang mahal, tetapi efektif untuk mengurangi kadar kafein dalam biji kopi adalah ....`,
      options: [
        "menggunakan pelarut air",
        "menggunakan pelarut kimia",
        "menggunakan karbondioksida superkritis",
        "memanfaatkan mikroorganisme",
        "memanfaatkan enzim sebagai biokatalis",
      ],
      answerIndex: [2]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Tanaman kopi umumnya berdaun hijau sepanjang tahun, berbunga putih, dan menghasilkan buah kopi yang mirip dengan buah ceri, tetapi terbungkus dengan cangkang yang keras. Pemanenan buah kopi dari tandannya biasanya dilakukan secara manual, dipilih buah yang matang dan berwarna merah. Biji kopi kemudian dipisahkan dari kulit buah dan cangkangnya melalui penggilingan langsung atau dikeringkan terlebih dahulu di bawah sinar matahari. Sebelum digiling buah kopi umumnya dicuci saat penggilingan. Di Indonesia, buah kopi umumnya dikeringkan dengan dijemur di bawah sinar matahari hingga kadar airnya tersisa 30-35%. Pemisahan biji dari cangkangnya dapat dilakukan dengan lebih mudah pada biji kopi kering. Biji kopi yang sudah bersih kemudian disangrai dengan derajat dan waktu pemanasan tertentu. Akhirnya, kopinya dihaluskan menjadi bubuk yang siap diseduh dengan air panas untuk menghadirkan minuman kopi.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Rasa nikmat minuman kopi sangat ditentukan oleh suhu pemanasan dan tingkat kegosongan selama pemanggangan, selain juga ditentukan oleh jenis pohon kopinya. Di Indonesia dikenal dua jenis kopi, yaitu Arabica dan Robusta. Biji kopi Arabica mempunyai ukuran agak besar, pipih sedikit memanjang, dan agak rapuh. Di lain pihak, biji kopi Robusta berukuran lebih kecil, berbentuk bulat, dan terlihat padat. Tanaman kopi Arabica tidak tahan panas dan rentan terhadap penyakit, tetapi cita rasa kopi Arabica lebih banyak disukai masyarakat.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Zat aktif yang terdapat dalam biji kopi disebut kafein. Zat ini berasa pahit dan dipercaya dapat memberikan efek stimulasi terhadap sistem saraf pusat, seperti mengurangi rasa kantuk, mengurangi rasa lelah, meningkatkan stamina tubuh, meningkatkan daya tangkap panca indera, dan meningkatkan detak jantung. Dekafein merupakan modifikasi produk kopi untuk mengurangi kadar kafein dan meningkatkan cita rasa kopi. Beberapa metode yang dapat dilakukan dalam dekafeinasi antara lain melalui ekstraksi menggunakan air, pelarut kimia, karbondioksida superkritis, dan minyak biji bunga matahari. Dekafeinasi juga dapat dilakukan menggunakan arang aktif, mikroorganisme, atau enzim tertentu. Gas CO2 banyak terdapat di udara dan ekstraksi dengan pelarut CO2 superkritis dapat mengurangi kadar kafein dalam biji kopi hingga 96%, tetapi teknologi pengerjaannya memerlukan biaya yang tinggi.`,
      question: `Salah satu ciri khas kopi Arabica adalah ...`,
      options: [
        "Biji kopinya berukuran agak besar dan berbentuk pipih.",
        "Tekstur biji kopinya berbentuk bulat dan terlihat padat.",
        "Kandungan kafeinnya lebih tinggi dibandingkan Robusta",
        "Tanaman kopinya tahan terhadap hama dan penyakit.",
        "Cita rasa minuman kopinya kurang disukai masyarakat.",
      ],
      answerIndex: [0]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Tanaman kopi umumnya berdaun hijau sepanjang tahun, berbunga putih, dan menghasilkan buah kopi yang mirip dengan buah ceri, tetapi terbungkus dengan cangkang yang keras. Pemanenan buah kopi dari tandannya biasanya dilakukan secara manual, dipilih buah yang matang dan berwarna merah. Biji kopi kemudian dipisahkan dari kulit buah dan cangkangnya melalui penggilingan langsung atau dikeringkan terlebih dahulu di bawah sinar matahari. Sebelum digiling buah kopi umumnya dicuci saat penggilingan. Di Indonesia, buah kopi umumnya dikeringkan dengan dijemur di bawah sinar matahari hingga kadar airnya tersisa 30-35%. Pemisahan biji dari cangkangnya dapat dilakukan dengan lebih mudah pada biji kopi kering. Biji kopi yang sudah bersih kemudian disangrai dengan derajat dan waktu pemanasan tertentu. Akhirnya, kopinya dihaluskan menjadi bubuk yang siap diseduh dengan air panas untuk menghadirkan minuman kopi.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Rasa nikmat minuman kopi sangat ditentukan oleh suhu pemanasan dan tingkat kegosongan selama pemanggangan, selain juga ditentukan oleh jenis pohon kopinya. Di Indonesia dikenal dua jenis kopi, yaitu Arabica dan Robusta. Biji kopi Arabica mempunyai ukuran agak besar, pipih sedikit memanjang, dan agak rapuh. Di lain pihak, biji kopi Robusta berukuran lebih kecil, berbentuk bulat, dan terlihat padat. Tanaman kopi Arabica tidak tahan panas dan rentan terhadap penyakit, tetapi cita rasa kopi Arabica lebih banyak disukai masyarakat.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Zat aktif yang terdapat dalam biji kopi disebut kafein. Zat ini berasa pahit dan dipercaya dapat memberikan efek stimulasi terhadap sistem saraf pusat, seperti mengurangi rasa kantuk, mengurangi rasa lelah, meningkatkan stamina tubuh, meningkatkan daya tangkap panca indera, dan meningkatkan detak jantung. Dekafein merupakan modifikasi produk kopi untuk mengurangi kadar kafein dan meningkatkan cita rasa kopi. Beberapa metode yang dapat dilakukan dalam dekafeinasi antara lain melalui ekstraksi menggunakan air, pelarut kimia, karbondioksida superkritis, dan minyak biji bunga matahari. Dekafeinasi juga dapat dilakukan menggunakan arang aktif, mikroorganisme, atau enzim tertentu. Gas CO2 banyak terdapat di udara dan ekstraksi dengan pelarut CO2 superkritis dapat mengurangi kadar kafein dalam biji kopi hingga 96%, tetapi teknologi pengerjaannya memerlukan biaya yang tinggi.`,
      question: `Efek berikut yang bukan merupakan akibat konsumsi kafein adalah ....`,
      options: [
        "mengurangi rasa kantuk",
        "mengurangi rasa lelah",
        "menurunkan detak jantung",
        "meningkatkan daya tangkap panca indera",
        "Meningkatkan stamina tubuh",
      ],
      answerIndex: [2]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Tanaman kopi umumnya berdaun hijau sepanjang tahun, berbunga putih, dan menghasilkan buah kopi yang mirip dengan buah ceri, tetapi terbungkus dengan cangkang yang keras. Pemanenan buah kopi dari tandannya biasanya dilakukan secara manual, dipilih buah yang matang dan berwarna merah. Biji kopi kemudian dipisahkan dari kulit buah dan cangkangnya melalui penggilingan langsung atau dikeringkan terlebih dahulu di bawah sinar matahari. Sebelum digiling buah kopi umumnya dicuci saat penggilingan. Di Indonesia, buah kopi umumnya dikeringkan dengan dijemur di bawah sinar matahari hingga kadar airnya tersisa 30-35%. Pemisahan biji dari cangkangnya dapat dilakukan dengan lebih mudah pada biji kopi kering. Biji kopi yang sudah bersih kemudian disangrai dengan derajat dan waktu pemanasan tertentu. Akhirnya, kopinya dihaluskan menjadi bubuk yang siap diseduh dengan air panas untuk menghadirkan minuman kopi.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Rasa nikmat minuman kopi sangat ditentukan oleh suhu pemanasan dan tingkat kegosongan selama pemanggangan, selain juga ditentukan oleh jenis pohon kopinya. Di Indonesia dikenal dua jenis kopi, yaitu Arabica dan Robusta. Biji kopi Arabica mempunyai ukuran agak besar, pipih sedikit memanjang, dan agak rapuh. Di lain pihak, biji kopi Robusta berukuran lebih kecil, berbentuk bulat, dan terlihat padat. Tanaman kopi Arabica tidak tahan panas dan rentan terhadap penyakit, tetapi cita rasa kopi Arabica lebih banyak disukai masyarakat.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Zat aktif yang terdapat dalam biji kopi disebut kafein. Zat ini berasa pahit dan dipercaya dapat memberikan efek stimulasi terhadap sistem saraf pusat, seperti mengurangi rasa kantuk, mengurangi rasa lelah, meningkatkan stamina tubuh, meningkatkan daya tangkap panca indera, dan meningkatkan detak jantung. Dekafein merupakan modifikasi produk kopi untuk mengurangi kadar kafein dan meningkatkan cita rasa kopi. Beberapa metode yang dapat dilakukan dalam dekafeinasi antara lain melalui ekstraksi menggunakan air, pelarut kimia, karbondioksida superkritis, dan minyak biji bunga matahari. Dekafeinasi juga dapat dilakukan menggunakan arang aktif, mikroorganisme, atau enzim tertentu. Gas CO2 banyak terdapat di udara dan ekstraksi dengan pelarut CO2 superkritis dapat mengurangi kadar kafein dalam biji kopi hingga 96%, tetapi teknologi pengerjaannya memerlukan biaya yang tinggi.`,
      question: `Dekafeinasi adalah ...`,
      options: [
        "Dekafein merupakan zat aktif yang terdapat dalam biji kopi.",
        "Dekafein merupakan metode menggunakan arang aktif, mikroorganisme, atau enzim tertentu.",
        "Zat yang dapat memberikan efek stimulasi terhadap sistem saraf pusat, seperti mengurangi rasa kantuk, mengurangi rasa lelah, meningkatkan stamina tubuh, meningkatkan daya tangkap panca indera, dan meningkatkan detak jantung.",
        "Zat aktif yang terdapat dalam kopi sebagai modifikasi untuk mengurangi kadar kafein di dalam kopi.",
        "Dekafein merupakan modifikasi produk kopi untuk mengurangi kadar kafein dan meningkatkan cita rasa kopi.",],
      answerIndex: [4]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Tanaman kopi umumnya berdaun hijau sepanjang tahun, berbunga putih, dan menghasilkan buah kopi yang mirip dengan buah ceri, tetapi terbungkus dengan cangkang yang keras. Pemanenan buah kopi dari tandannya biasanya dilakukan secara manual, dipilih buah yang matang dan berwarna merah. Biji kopi kemudian dipisahkan dari kulit buah dan cangkangnya melalui penggilingan langsung atau dikeringkan terlebih dahulu di bawah sinar matahari. Sebelum digiling buah kopi umumnya dicuci saat penggilingan. Di Indonesia, buah kopi umumnya dikeringkan dengan dijemur di bawah sinar matahari hingga kadar airnya tersisa 30-35%. Pemisahan biji dari cangkangnya dapat dilakukan dengan lebih mudah pada biji kopi kering. Biji kopi yang sudah bersih kemudian disangrai dengan derajat dan waktu pemanasan tertentu. Akhirnya, kopinya dihaluskan menjadi bubuk yang siap diseduh dengan air panas untuk menghadirkan minuman kopi.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Rasa nikmat minuman kopi sangat ditentukan oleh suhu pemanasan dan tingkat kegosongan selama pemanggangan, selain juga ditentukan oleh jenis pohon kopinya. Di Indonesia dikenal dua jenis kopi, yaitu Arabica dan Robusta. Biji kopi Arabica mempunyai ukuran agak besar, pipih sedikit memanjang, dan agak rapuh. Di lain pihak, biji kopi Robusta berukuran lebih kecil, berbentuk bulat, dan terlihat padat. Tanaman kopi Arabica tidak tahan panas dan rentan terhadap penyakit, tetapi cita rasa kopi Arabica lebih banyak disukai masyarakat.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Zat aktif yang terdapat dalam biji kopi disebut kafein. Zat ini berasa pahit dan dipercaya dapat memberikan efek stimulasi terhadap sistem saraf pusat, seperti mengurangi rasa kantuk, mengurangi rasa lelah, meningkatkan stamina tubuh, meningkatkan daya tangkap panca indera, dan meningkatkan detak jantung. Dekafein merupakan modifikasi produk kopi untuk mengurangi kadar kafein dan meningkatkan cita rasa kopi. Beberapa metode yang dapat dilakukan dalam dekafeinasi antara lain melalui ekstraksi menggunakan air, pelarut kimia, karbondioksida superkritis, dan minyak biji bunga matahari. Dekafeinasi juga dapat dilakukan menggunakan arang aktif, mikroorganisme, atau enzim tertentu. Gas CO2 banyak terdapat di udara dan ekstraksi dengan pelarut CO2 superkritis dapat mengurangi kadar kafein dalam biji kopi hingga 96%, tetapi teknologi pengerjaannya memerlukan biaya yang tinggi.`,
      question: `Pernyataan berikut yang tidak sesuai dengan teks di atas adalah ...`,
      options: [
        "Rasa nikmat minuman kopi sangan ditentukan oleh suhu pemanasan dan tingkat kegosongan selama pemanggangan, selain juga ditentukan oleh jenis pohon kopinya.",
        "Permanenan buah kopi dari tandannya biasanya dilakukan secara manual, dipilih buah yang matang dan berwarna merah.",
        "Di Indonesia, buah kopi umumnya dikeringkan dengan dijemur di bawah sinar matahari hingga kadar airnya tersisa 30 hingga 35%.",
        "Gas CO2 banyak terdapat di udara dan ekstraksi dengan pelarut CO2 superkritis dapat mengurangi kadar kafein dalam biji kopi hingga 96%, tetapi teknologi pengerjaannya memerlukan biaya yang tidak terlalu tinggi.",
        "Beberapa metode yang dapat dilakukan dalam dekafeinasi antara lain melalui ekstraksi menggunakan air, pelarut kimia, karbondioksida superkritis, dan minyak biji bunga matahari.",
      ],
      answerIndex: [3]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Walaupun mutasi genetika pada bakteri dan virus dapat menimbulkan epidemi, beberapa epidemi disebabkan oleh bakteri dan virus yang tidak mengalami perubahan genetika secara signifikan. Dalam menganalisa kasus kedua, para ahli telah menemukan faktor-faktor sosial dan lingkungan yang penting dari epidemi tersebut.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Penyakit polio, misalnya, muncul semua suatu epidemi pada awal abad ke-20 karena sanitasi modern mampu memperlambat penyebaran polio sampai usia dewasa, sehingga polio menyebabkan kelumpuhan. Sebelumnya, infeksi terjadi pada masa bayi yang akan memunculkan imunitas seumur hidup tanpa mengalami kelumpuhan. Dengan demikian, faktor higienis yang mencegah terjadinya epidemi tipus secara tidak langsung memunculkan epidemik polio yang melumpuhkan. Contoh lain adalah penyakit lyme, yang disebabkan oleh bakteri yang disebarkan melalui kotoran rusa. Penyakit ini hanya muncul secara sporadis selarna akhir abad ke-19, tetapi sekarang menjadi sering timbul di beberapa tempat di Amerika Utara disebabkan oleh peningkatan populasi rusa yang terjadi bersamaan dengan pertumbuhan kota-kota satelit dan peningkatan aktivitas rekreasi alam terbuka pada habitat rusa. Hal yang sama juga menjadi faktor munculnya epidemi demam berdarah di Asia pada tahun 1950-an yang terjadi karena perubahan-perubahan. Ekologis yang meningkatkan populasi nyamuk *Aedes Aegepty*, nyamuk penyebar virus demam berdarah setiap saat dapat muncul di Amerika Utara karena penyebaran secara tidak sengaja satu jenis nyamuk lain, yaitu *aedes albopictus*.`,
      question: `Menurut teks di atas, ketiadaan sanitasi modern akan memunculkan mana dari berikut ini?`,
      options: [
        "Penyebaran penyakit demam berdarah.",
        "Epidemi tipus.",
        "Epidemi polio melumpuhkan pada bayi-bayi.",
        "Epidemi polio melumpuhkan pada orang dewasa.",
        "Penyebaran penyakit di berbagai aspek.",
      ],
      answerIndex: [1]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Walaupun mutasi genetika pada bakteri dan virus dapat menimbulkan epidemi, beberapa epidemi disebabkan oleh bakteri dan virus yang tidak mengalami perubahan genetika secara signifikan. Dalam menganalisa kasus kedua, para ahli telah menemukan faktor-faktor sosial dan lingkungan yang penting dari epidemi tersebut.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Penyakit polio, misalnya, muncul semua suatu epidemi pada awal abad ke-20 karena sanitasi modern mampu memperlambat penyebaran polio sampai usia dewasa, sehingga polio menyebabkan kelumpuhan. Sebelumnya, infeksi terjadi pada masa bayi yang akan memunculkan imunitas seumur hidup tanpa mengalami kelumpuhan. Dengan demikian, faktor higienis yang mencegah terjadinya epidemi tipus secara tidak langsung memunculkan epidemik polio yang melumpuhkan. Contoh lain adalah penyakit lyme, yang disebabkan oleh bakteri yang disebarkan melalui kotoran rusa. Penyakit ini hanya muncul secara sporadis selarna akhir abad ke-19, tetapi sekarang menjadi sering timbul di beberapa tempat di Amerika Utara disebabkan oleh peningkatan populasi rusa yang terjadi bersamaan dengan pertumbuhan kota-kota satelit dan peningkatan aktivitas rekreasi alam terbuka pada habitat rusa. Hal yang sama juga menjadi faktor munculnya epidemi demam berdarah di Asia pada tahun 1950-an yang terjadi karena perubahan-perubahan. Ekologis yang meningkatkan populasi nyamuk *Aedes Aegepty*, nyamuk penyebar virus demam berdarah setiap saat dapat muncul di Amerika Utara karena penyebaran secara tidak sengaja satu jenis nyamuk lain, yaitu *aedes albopictus*.`,
      question: `Manakah dari pernyataan berikut disimpulkan tentang nyamuk *aedes albopictus* berdasarkan informasi yang tertera pada teks?`,
      options: [
        "Nyamuk tersebut menyebabkan epidemi demam berdarah pada tahun 1950-an.",
        "Nyamuk ini menggantikan *aedes aegepty* di Asia ketika faktor-faktor ekologis mengubah habitat *Aedes Aegepty*.",
        "Nyamuk tersebut hanya berkembang di Asia.",
        "Nyamuk tersebut dapat menyebarkan virus demam berdarah.",
        "Nyamuk tersebut sangat berbahaya dan menyebabkan kematian.",
      ],
      answerIndex: [3]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Walaupun mutasi genetika pada bakteri dan virus dapat menimbulkan epidemi, beberapa epidemi disebabkan oleh bakteri dan virus yang tidak mengalami perubahan genetika secara signifikan. Dalam menganalisa kasus kedua, para ahli telah menemukan faktor-faktor sosial dan lingkungan yang penting dari epidemi tersebut.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Penyakit polio, misalnya, muncul semua suatu epidemi pada awal abad ke-20 karena sanitasi modern mampu memperlambat penyebaran polio sampai usia dewasa, sehingga polio menyebabkan kelumpuhan. Sebelumnya, infeksi terjadi pada masa bayi yang akan memunculkan imunitas seumur hidup tanpa mengalami kelumpuhan. Dengan demikian, faktor higienis yang mencegah terjadinya epidemi tipus secara tidak langsung memunculkan epidemik polio yang melumpuhkan. Contoh lain adalah penyakit lyme, yang disebabkan oleh bakteri yang disebarkan melalui kotoran rusa. Penyakit ini hanya muncul secara sporadis selarna akhir abad ke-19, tetapi sekarang menjadi sering timbul di beberapa tempat di Amerika Utara disebabkan oleh peningkatan populasi rusa yang terjadi bersamaan dengan pertumbuhan kota-kota satelit dan peningkatan aktivitas rekreasi alam terbuka pada habitat rusa. Hal yang sama juga menjadi faktor munculnya epidemi demam berdarah di Asia pada tahun 1950-an yang terjadi karena perubahan-perubahan. Ekologis yang meningkatkan populasi nyamuk *Aedes Aegepty*, nyamuk penyebar virus demam berdarah setiap saat dapat muncul di Amerika Utara karena penyebaran secara tidak sengaja satu jenis nyamuk lain, yaitu *aedes albopictus*.`,
      question: `Manakah dari pernyataan berikut ini yang benar akan memperkuat pernyataan pengarang tentang penyebab penyebaran penyakit lyme di Amerika Utara?`,
      options: [
        "Populasi rusa lebih rendah pada akhir abad ke-19 bila dibandingkan dengan pertengahan abad ke-20.",
        "Para peminat rekreasi di alam terbuka telah secara rutin mengambil langkah-langkah untuk melindungi diri mereka terhadap penyakit lyme.",
        "Para ahli belum dapat mengembangkan vaksin yang dapat mencegah penyakit lyme.",
        "Peningkatan rekreasi di alam terbuka bermula sejak akhir abad ke-19.",
        "Semua pernyataan benar.",
      ],
      answerIndex: [0]
    },
    {
      txtField: `
      \n### TEKNOLOGI KUANTUM DAN KOMPUTER MASA DEPAN
      \n### Oleh: Djoko Wiryawan
      \n&nbsp;&nbsp;&nbsp;&nbsp;Kecepatan komputer mengolah informasi sangat ditentukan oleh prosesornya. Dalam tekno-logi akan digital silicon (konvensional), untuk meningkatkan kecepatan prosesor, kecepatan transistor dalam cip prosesor harus ditingkatkan. Upaya meningkatkan kerapatan transistor ini tidak mungkin dilakukan terus-menerus tanpa batas karena suatu saat pasti akan mencapai maksimum, yaitu ketika ukuran transistor sudah tidak dapat diperkecil lagi. Pada keadaan ini perlu ditemukan teknologi baru, misalnya teknologi kuantum, untuk meningkatkan kecepatan prosesor.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Istilah kuantum (quantum), belakangan ini mulai popular dan sering digunakan dalam berbagai konsep yang memperkenalkan suatu paradigma baru, misalnya quantum learning, quantum teaching, quantum business, dan sebagainya. Kiranya tidak berlebihan jika dikatakan bahwa istilah kuantum pertama kali diperkenalkan oleh Max Planck, seorang fisikawan Jerman, dari teori kuantum cahaya untuk menjelaskan radiasi benda hitam. Secara tidak langsung teori inilah yang melahirkan fisika kuantum yang mempunyai efek dominan pada skala sistem atomik.

      \n&nbsp;&nbsp;&nbsp;&nbsp;Sejalan dengan perkembangan ilmu fisika dan informasi, belakangan ini mulai dikembangkan komputasi kuantum yang menggunakan prinsip-prinsip fisika kuantum. Komputasi kuantum ini nantinya diharapkan dapat melahirkan teknologi kuantum yang memungkinkan terobosan teknologi untuk mewujudkan komputer masa depan (komputer kuantum) yang bekerja dengan cara yang sama sekali berbeda dengan komputer konvensional yang dikenal saat ini. (Dikutip dari Harian Kompas, 27 Mei 2001, halaman 22)`,
      question: `Kecepatan pengolahan informasi masa depan dalam sistem komputer yang berteknologi digital silicon, seperti sekarang, tidak akan lagi diharapkan maksimum karena ....`,
      options: [
        "cip prosesor bermasalah",
        "ukuran transistornya tidak dapat diperkecil lagi",
        "transistornya sudah lemah",
        "teknologi bersifat konvensional",
        "transistornya sudah tidak kuat",
      ],
      answerIndex: [1]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Peningkatan suhu ekstrem di kawasan Kalimantan karena perubahan iklim telah mengancam populasi lebah. (2) Perubahan suhu telah memengaruhi seberapa buruk pestisida memengaruhi perilaku lebah. (3) Terdapat dampak yang tidak pasti dalam perubahan iklim terutama di wilayah Kalimantan bagian timur sebagai daerah terkena dampak terbanyak. (4) Sejumlah Pakar Penelitian telah meneliti peristiwa tersebut. (5) Studi tersebut telah dipublikasikan di Global Change Biology dengan judul "Toxic temperatures: bee behaviours exhibit divergent pesticide toxicity relationships with warming."

      \n&nbsp;&nbsp;&nbsp;&nbsp;(6) Peristiwa suhu ekstrem di masa depan dalam perubahan iklim dapat meningkatkan dampak pestisida pada populasi lebah dan layanan penyerbukan mereka. (7) Beberapa jenis pestisida, terutama yang termasuk dalam kelas neonicotinoid, diketahui memengaruhi lebah dan serangga penting lainnya, dan diyakini berkontribusi pada penurunan populasi. (8) Namun, respons yang dilaporkan oleh lebah terhadap ancaman ini di seluruh dunia sering kali tampak berbeda, menunjukkan adanya faktor lain yang berinteraksi. Sekarang mereka telah menunjukkan bahwa suhu lingkungan dapat memengaruhi tingkat di mana pestisida dapat mengubah sekelompok perilaku lebah besar. (9) Perilaku tersebut penting untuk kelangsungan hidup mereka dan kemampuan mereka dalam penyerbukan tanaman. (10) Petani lebah merasa senang dengan peristiwa tersebut karena dapat beristirahat sejenak sambil memikirkan langkah yang tepat untuk mengatasi peristiwa tersebut.`,
      question: `Kalimat yang melemahkan argumen pada teks di atas adalah ....`,
      options: [
        `Studi tersebut telah dipublikasikan di Global Change Biology dengan judul "Toxic temperatures: bee behaviours exhibit divergent pesticide toxicity relationships with warming".`,
        "Namun, respons yang dilaporkan oleh lebah terhadap ancaman ini di seluruh dunia sering kali tampak berbeda, menunjukkan adanya faktor lain yang berinteraksi.",
        "Beberapa jenis pestisida, terutama yang termasuk dalam kelas neonicotinoid, diketahui memengaruhi lebah.",
        "Perilaku tersebut penting untuk kelangsungan hidup mereka dan kemampuan mereka dalam penyerbukan tanaman.",
        "Petani lebah merasa senang dengan peristiwa tersebut karena dapat beristirahat sejenak sambil memikirkan langkah yang tepat untuk mengatasi peristiwa tersebut.",
      ],
      answerIndex: [4]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Fungsi pendidikan adalah serangkaian tugas ataupun misi yang diemban dan dilaksanakan oleh pendidikan. Dari pengertian ini dapat dijelaskan bahwa sesungguhnya kegiatan atau praktik pendidikan di mana pun bukanlah kegiatan tanpa makna dan tujuan yang jelas. Kegiatan pendidikan tersirat suatu tugas atau misi yang harus diwujudkan. Oleh karena itu, para pendidik, pengelola pendidikan, dan pihak- pihak yang terlibat dalam kegiatan pendidikan seharusnya selalu menyadari akan tugas atau misi kegiatan pendidikan yang dilaksanakan atau yang dikelolanya.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Dari segi kultural dan sosial, fungsi pendidikan adalah menumbuhkan nilai-nilai insaniah serta menyiapkan tenaga kerja produktif. Sementara itu, Bock mengatakan bahwa peran pendidikan adalah memasyarakatkan ideologi dan nilai-nilai sosio-kultural bangsa, mempersiapkan tenaga kerja untuk mendorong perubahan sosial; serta memeratakan kesempatan dan pendapatan. Dari sumber tersebut jelas bahwa kegiatan atau praktik pendidikan memiliki misi atau tugas bukan hanya menjadikan peserta didik tumbuh dan berkembang potensi atau kemampuannya, melainkan juga (1) menjaga dan melestarikan nilai-nilai yang dianggap baik dan benar oleh masyarakat dan bangsa serta (2) menyiapkan peserta didik menjadi tenaga kerja produktif. Di pihak lain, fungsi pendidikan nasional menurut Undang-Undang Nomor 20 Tahun 2003 adalah mengembangkan kemampuan dan membentuk watak serta peradaban bangsa yang bermartabat dalam rangka mencerdaskan bangsa.`,
      question: `Simpulan teks di atas yang paling tepat adalah ....`,
      options: [
        "Tujuan pendidikan nasional di Indonesia telah mencakup segi kultural dan sosial dan menjangkau semua lapisan masyarakat dalam hal mencerdaskan bangsa serta menyiapkan tenaga kerja produktif.",
        "Pendidikan bertugas menjadikan peserta didik tumbuh dan berkembang potensinya, melestarikan nilai-nilai yang baik dan benar, serta menyiapkan tenaga produktif.",
        "Fungsi pendidikan nasional menurut Undang-Undang No. 20 Tahun 2003 selaras dengan pendapat Bock yang mengatakan bahwa peran pendidikan adalah memasyarakatkan ideologi.",
        "Kegiatan pendidikan memiliki misi bukan hanya menjadikan peserta didik tumbuh dan berkembang potensinya, melainkan juga menjaga dan melestarikan nilai-nilal yang dianggap baik dan benar.",
        "Pendidikan nasional menurut Undang-Undang No. 20 Tahun 2003 berfungsi mengembangkan kemampuan membentuk watak serta peradaban bangsa yang bermartabat dalam rangka mencerdaskan bangsa.",
      ],
      answerIndex: [1]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Fungsi pendidikan adalah serangkaian tugas ataupun misi yang diemban dan dilaksanakan oleh pendidikan. Dari pengertian ini dapat dijelaskan bahwa sesungguhnya kegiatan atau praktik pendidikan di mana pun bukanlah kegiatan tanpa makna dan tujuan yang jelas. Kegiatan pendidikan tersirat suatu tugas atau misi yang harus diwujudkan. Oleh karena itu, para pendidik, pengelola pendidikan, dan pihak- pihak yang terlibat dalam kegiatan pendidikan seharusnya selalu menyadari akan tugas atau misi kegiatan pendidikan yang dilaksanakan atau yang dikelolanya.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Dari segi kultural dan sosial, fungsi pendidikan adalah menumbuhkan nilai-nilai insaniah serta menyiapkan tenaga kerja produktif. Sementara itu, Bock mengatakan bahwa peran pendidikan adalah memasyarakatkan ideologi dan nilai-nilai sosio-kultural bangsa, mempersiapkan tenaga kerja untuk mendorong perubahan sosial; serta memeratakan kesempatan dan pendapatan. Dari sumber tersebut jelas bahwa kegiatan atau praktik pendidikan memiliki misi atau tugas bukan hanya menjadikan peserta didik tumbuh dan berkembang potensi atau kemampuannya, melainkan juga (1) menjaga dan melestarikan nilai-nilai yang dianggap baik dan benar oleh masyarakat dan bangsa serta (2) menyiapkan peserta didik menjadi tenaga kerja produktif. Di pihak lain, fungsi pendidikan nasional menurut Undang-Undang Nomor 20 Tahun 2003 adalah mengembangkan kemampuan dan membentuk watak serta peradaban bangsa yang bermartabat dalam rangka mencerdaskan bangsa.`,
      question: `Agar menjadi paragraf yang baik, kalimat penutup peragraf ke-2 yang paling sesuai adalah ....`,
      options: [
        "Dengan demikian, fungsi pendidikan selain untuk mencerdaskan bangsa, menyiapkan tenaga kerja produktif, juga membentuk watak.",
        `Dengan demikian, fungsi pendidikan adalah menjadikan siswa terampil dan siap menjadi tenaga kerja produktif dan menjunjung tinggi nama bangsa.`,
        "Oleh karena itu, tugas pendidikan membentuk siswa menjadi warga negara yang berkepribadian luhur, beriman, dan bertaqwa.",
        "Karena itulah, fungsi utama pendidikan adalah membentuk siswa yang cerdas dan terampil dalam menghadapi semua permasalahan.",
        "Oleh sebab itu, sebagai pendidik, guru harus selalu siap berkorban untuk membentuk anak bangsa menjadi manusia yang berguna.",
      ],
      answerIndex: [0]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Telah ditemukan fosil tengkorak dinosaurus titan atau Titanosaurus yang hampir lengkap di Formasi Winton Kapur Akhir Queensland, Australia. (2) Penemuan fosil tersebut telah diterbitkan dalam jurnal *Royal Society Open Science* secara daring belum lama ini. (3) Jurnal tersebut juga menyebutkan bahwa, jenis dinosaurus sauropoda Titanosaurian beragam dan melimpah sepanjang periode Kapur dengan distribusi global. (4) Namun, beberapa spesimen titanosaurus hanya diwakili dengan kumpulan kerangka tengkorak kepala saja. (5) Evolusi awal dinosaurus sauropoda titanosaurian yang masih kurang dipahami dikarenakan oleh catatan fosil klad hanya mencakup sebagian zaman kapur dengan contoh dari setiap benua. (6) Salah satu hambatan terbesar untuk menyelesaikan filogenetik titanosaurus adalah kelangkaan sisa-sisa tengkorak. (7) Beberapa tengkorak titanosaurus yang paling terkenal berasal dari zaman kapur terbaru, yaitu *Rapetosaurus krausei* dari Madagaskar, *Nemegtosaurus mongoliensis*, dan *Quaesitosaurus orientalis* dari Mongolia. (8) Untuk dinosaurus titan yang baru ditemukan ini memiliki nama ilmiah Diamantinasaurus matildae yang ditemukan dari Formasi Winton Kapur Akhir Queensland, Australia dan diwakili oleh tiga spesimen, termasuk satu yang mengawetkan tempurung otak dan beberapa elemen tengkorak lainnya. (9) Dalam makalah baru, mereka yang merupakan para ahli paleontologi dari Curtin University menggambarkan spesimen keempat *Diamantinasaurus matildae* yang mengawetkan tengkorak yang lebih lengkap, termasuk banyak elemen tengkorak yang sebelumnya tidak dikenal untuk spesies ini, serta kerangka parsial.
      \n&nbsp;&nbsp;&nbsp;&nbsp;(10) "Di sini, kami mendeskripsikan spesimen keempat *Diamantinasaurus matildae* yang mempertahankan tengkorak lebih lengkap termasuk banyak elemen tengkorak yang sebelumnya tidak diketahui untuk takson ini serta kerangka parsial postkranial," tulis peneliti. (11) *Diamantinasaurus matildae* hidup pada awal Zaman Kapur sekitar 94 juta tahun yang lalu. (12) Dinosaurus ini pertama kali dideskripsikan dan diberi nama pada tahun 2009 berdasarkan penemuan fosil di Formasi Winton Australia. (13) *Diamantinasaurus matildae* adalah titanosaurian berukuran sedang yang berukuran panjang 16 m atau sekitar 52 kaki dan berat mencapai 25 ton. (14) Hanya tiga spesimen, termasuk satu yang mengawetkan tempurung otak dan beberapa elemen tengkorak lainnya, yang diketahui sebelumnya.
      \nSumber: www.nationalgeographicindonesia.com`,
      question: `Berdasarkan teks tersebut, manakah pernyataan yang tidak sesuai?`,
      options: [
        "Penemuan fosil tengkorak dinosaurus titan atau Titanosaurus yang hampir lengkap di Australia.",
        "Penemuan fosil tengkorak dinosaurus titan atau Titanosaurus telah diterbitkan dalam jurnal *Royal Society Open Science* secara daring belum lama ini.",
        "Beberapa tengkorak titanosaurus yang paling banyak berasal dari zaman kapur terbaru, yaitu *Rapetosaurus krausei* dari Madagaskar, *Nemegtosaurus mongoliensis*, dan *Quaesitosaurus orientalis* dari Mongolia.",
        "*Diamantinasaurus matildae* hidup pada awal Zaman Kapur sekitar 94 juta tahun yang lalu.",
        "*Diamantinasaurus matildae* adalah titanosaurian berukuran sedang yang berukuran panjang 16 m atau sekitar 52 kaki dan berat mencapai 25 ton.",],
      answerIndex: [2]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Telah ditemukan fosil tengkorak dinosaurus titan atau Titanosaurus yang hampir lengkap di Formasi Winton Kapur Akhir Queensland, Australia. (2) Penemuan fosil tersebut telah diterbitkan dalam jurnal *Royal Society Open Science* secara daring belum lama ini. (3) Jurnal tersebut juga menyebutkan bahwa, jenis dinosaurus sauropoda Titanosaurian beragam dan melimpah sepanjang periode Kapur dengan distribusi global. (4) Namun, beberapa spesimen titanosaurus hanya diwakili dengan kumpulan kerangka tengkorak kepala saja. (5) Evolusi awal dinosaurus sauropoda titanosaurian yang masih kurang dipahami dikarenakan oleh catatan fosil klad hanya mencakup sebagian zaman kapur dengan contoh dari setiap benua. (6) Salah satu hambatan terbesar untuk menyelesaikan filogenetik titanosaurus adalah kelangkaan sisa-sisa tengkorak. (7) Beberapa tengkorak titanosaurus yang paling terkenal berasal dari zaman kapur terbaru, yaitu *Rapetosaurus krausei* dari Madagaskar, *Nemegtosaurus mongoliensis*, dan *Quaesitosaurus orientalis* dari Mongolia. (8) Untuk dinosaurus titan yang baru ditemukan ini memiliki nama ilmiah Diamantinasaurus matildae yang ditemukan dari Formasi Winton Kapur Akhir Queensland, Australia dan diwakili oleh tiga spesimen, termasuk satu yang mengawetkan tempurung otak dan beberapa elemen tengkorak lainnya. (9) Dalam makalah baru, mereka yang merupakan para ahli paleontologi dari Curtin University menggambarkan spesimen keempat *Diamantinasaurus matildae* yang mengawetkan tengkorak yang lebih lengkap, termasuk banyak elemen tengkorak yang sebelumnya tidak dikenal untuk spesies ini, serta kerangka parsial.
      \n&nbsp;&nbsp;&nbsp;&nbsp;(10) "Di sini, kami mendeskripsikan spesimen keempat *Diamantinasaurus matildae* yang mempertahankan tengkorak lebih lengkap termasuk banyak elemen tengkorak yang sebelumnya tidak diketahui untuk takson ini serta kerangka parsial postkranial," tulis peneliti. (11) *Diamantinasaurus matildae* hidup pada awal Zaman Kapur sekitar 94 juta tahun yang lalu. (12) Dinosaurus ini pertama kali dideskripsikan dan diberi nama pada tahun 2009 berdasarkan penemuan fosil di Formasi Winton Australia. (13) *Diamantinasaurus matildae* adalah titanosaurian berukuran sedang yang berukuran panjang 16 m atau sekitar 52 kaki dan berat mencapai 25 ton. (14) Hanya tiga spesimen, termasuk satu yang mengawetkan tempurung otak dan beberapa elemen tengkorak lainnya, yang diketahui sebelumnya.
      \nSumber: www.nationalgeographicindonesia.com`,
      question: `Pilih pernyataan di bawah ini yang sesuai dengan bacaan!`,
      options: [
        "Telah ditemukan fosil tengkorak dinosaurus titan atau Titanosaurus yang sudah lengkap di Formasi Winton Kapur Akhir Queensland, Australia.",
        "Dinosaurus titan yang baru ditemukan ini memiliki nama ilmiah *Diamantinasaurus matildae* yang ditemukan dari Formasi Winton Kapur Akhir Queensland, Australia dan diwakili oleh tiga spesimen, termasuk satu yang mengawetkan tempurung otak dan beberapa elemen tengkorak lainnya.",
        "Evolusi awal dinosaurus sauropoda titanosaurian yang mudah dipahami karena oleh catatan fosil klad hanya mencakup sebagian zaman kapur dengan contoh dari setiap benua.",
        "*Diamantinasaurus matildae* adalah titanosaurian berukuran sedang yang berukuran panjang 16 m atau sekitar 52 kaki dan berat mencapai 25 ton.",
        "Terdapat tiga spesimen, termasuk satu yang mengawetkan tempurung otak dan beberapa elemen tengkorak lainnya, yang diketahui sebelumnya.",
      ],
      answerIndex: [1,3,4]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;(1) Telah ditemukan fosil tengkorak dinosaurus titan atau Titanosaurus yang hampir lengkap di Formasi Winton Kapur Akhir Queensland, Australia. (2) Penemuan fosil tersebut telah diterbitkan dalam jurnal *Royal Society Open Science* secara daring belum lama ini. (3) Jurnal tersebut juga menyebutkan bahwa, jenis dinosaurus sauropoda Titanosaurian beragam dan melimpah sepanjang periode Kapur dengan distribusi global. (4) Namun, beberapa spesimen titanosaurus hanya diwakili dengan kumpulan kerangka tengkorak kepala saja. (5) Evolusi awal dinosaurus sauropoda titanosaurian yang masih kurang dipahami dikarenakan oleh catatan fosil klad hanya mencakup sebagian zaman kapur dengan contoh dari setiap benua. (6) Salah satu hambatan terbesar untuk menyelesaikan filogenetik titanosaurus adalah kelangkaan sisa-sisa tengkorak. (7) Beberapa tengkorak titanosaurus yang paling terkenal berasal dari zaman kapur terbaru, yaitu *Rapetosaurus krausei* dari Madagaskar, *Nemegtosaurus mongoliensis*, dan *Quaesitosaurus orientalis* dari Mongolia. (8) Untuk dinosaurus titan yang baru ditemukan ini memiliki nama ilmiah Diamantinasaurus matildae yang ditemukan dari Formasi Winton Kapur Akhir Queensland, Australia dan diwakili oleh tiga spesimen, termasuk satu yang mengawetkan tempurung otak dan beberapa elemen tengkorak lainnya. (9) Dalam makalah baru, mereka yang merupakan para ahli paleontologi dari Curtin University menggambarkan spesimen keempat *Diamantinasaurus matildae* yang mengawetkan tengkorak yang lebih lengkap, termasuk banyak elemen tengkorak yang sebelumnya tidak dikenal untuk spesies ini, serta kerangka parsial.
      \n&nbsp;&nbsp;&nbsp;&nbsp;(10) "Di sini, kami mendeskripsikan spesimen keempat *Diamantinasaurus matildae* yang mempertahankan tengkorak lebih lengkap termasuk banyak elemen tengkorak yang sebelumnya tidak diketahui untuk takson ini serta kerangka parsial postkranial," tulis peneliti. (11) *Diamantinasaurus matildae* hidup pada awal Zaman Kapur sekitar 94 juta tahun yang lalu. (12) Dinosaurus ini pertama kali dideskripsikan dan diberi nama pada tahun 2009 berdasarkan penemuan fosil di Formasi Winton Australia. (13) *Diamantinasaurus matildae* adalah titanosaurian berukuran sedang yang berukuran panjang 16 m atau sekitar 52 kaki dan berat mencapai 25 ton. (14) Hanya tiga spesimen, termasuk satu yang mengawetkan tempurung otak dan beberapa elemen tengkorak lainnya, yang diketahui sebelumnya.
      \nSumber: www.nationalgeographicindonesia.com`,
      question: `Kapan dinosaurus titan hidup?`,
      options: [
        "Pada zaman kapur 49 juta tahun yang lalu",
        "Pada zaman batu 94 juta tahun yang lalu",
        "Hidup pada zaman batu 49 juta tahun lalu",
        "Pada zaman kapur 94 juta tahun yang lalu",
        "Pada zaman batu 194 juta tahun yang lalu",
      ],
      answerIndex: [3]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Drs. H. Mohammad Hatta atau yang lebih dikenal dengan Bung Hatta adalah wakil presiden pertama Indonesia, selain itu beliau juga adalah seorang pejuang, negarawan, dan juga ekonom. Lelaki kelahiran Fort de Kock, Hindia Belanda (Sekarang Bukittinggi, Sumatera Barat, Indonesia) 12 Agustus 1902 yang bernama lahir Mohammad Attar merupakan anak kedua dari pasangan Muhammad Djamil dan Siti Saleha. 
      \n&nbsp;&nbsp;&nbsp;&nbsp;Pada 18 November 1945, Bung Hatta menikah dengan Rahmi Hatta dan setelah 3 hari menikah mereka pindah dan tinggal Yogyakarta, Pernikahan mereka dikaruniai 3 orang anak perempuan yaitu Meutia Farida Hatta, Gembala Rabi'ah Hatta, dan Halida Nuriah Hatta. Moh. Hatta menjadi wakil presiden pertama di Indonesia, la sangat berperan dalam membantu Soekarno dan para pendiri bangsa untuk mencapai kemerdekaan. Selain menjabat sebagai wakil presiden Bung Hatta juga pernah menjabat menjadi perdana menteri dalam Kabinet Hatta I-II dan RIS. Pada tahun 1956 Bung Hatta mengundurkan diri sebagai wakil presiden akibat perselisihan dengan Presiden Soekarno. Hatta merupakan sosok yang memiliki kegemaran membaca dan dikenal sebagai Bapak Koperasi Indonesia. Hatta juga menggalakkan ekonomi dengan semangat gotong royong pada masyarakat. Koperasi juga menjadi pilar ekonomi dari tingkat paling kecil yaitu desa. Dengan desa yang berdaya ekonomi dan pangan, akan membuat bangsa menjadi lebih kuat.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Atas jasanya nama Bung Hatta diabadikan dalam nama sebuah bandar udara internasional di Tangerang. Banten, Indonesia bersama dengan Ir. Soekarno yaitu Bandara Soekarno-Hatta. Selain di Indonesia nama beliau juga diabadikan menjadi sebuah nama jalan bernama mohammed hattastraat di Zuiderpolder, Haarlem Belanda. Pada 14 Maret 1980 pada usia 77 tahun, Bung Hatta meninggal dunia di Jakarta.`,
      question: `Apa peristiwa penting yang ada di hidup Bung Hatta?`,
      options: [
        "Pernah menjabat sebagai wakil presiden dan menjabat menjadi perdana menteri dalam Kabinet Hatta I-II dan RIS.",
        "Bung Hatta setia dalam membantu Soekarno dan para pendiri bangsa untuk mencapai kemerdekaan.",
        "Selain sebagai wakil presiden pertama Indonesia, Bung Hatta juga seorang pejuang, negarawan, dan juga ekonom.",
        "Nama Bung Hatta banyak diabadikan untuk menamai gedung dan nama jalan di Indonesia.",
        "Banyak menorehkan prestasi dan sebagai bapak ekonomi.",
      ],
      answerIndex: [0]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Drs. H. Mohammad Hatta atau yang lebih dikenal dengan Bung Hatta adalah wakil presiden pertama Indonesia, selain itu beliau juga adalah seorang pejuang, negarawan, dan juga ekonom. Lelaki kelahiran Fort de Kock, Hindia Belanda (Sekarang Bukittinggi, Sumatera Barat, Indonesia) 12 Agustus 1902 yang bernama lahir Mohammad Attar merupakan anak kedua dari pasangan Muhammad Djamil dan Siti Saleha. 
      \n&nbsp;&nbsp;&nbsp;&nbsp;Pada 18 November 1945, Bung Hatta menikah dengan Rahmi Hatta dan setelah 3 hari menikah mereka pindah dan tinggal Yogyakarta, Pernikahan mereka dikaruniai 3 orang anak perempuan yaitu Meutia Farida Hatta, Gembala Rabi'ah Hatta, dan Halida Nuriah Hatta. Moh. Hatta menjadi wakil presiden pertama di Indonesia, la sangat berperan dalam membantu Soekarno dan para pendiri bangsa untuk mencapai kemerdekaan. Selain menjabat sebagai wakil presiden Bung Hatta juga pernah menjabat menjadi perdana menteri dalam Kabinet Hatta I-II dan RIS. Pada tahun 1956 Bung Hatta mengundurkan diri sebagai wakil presiden akibat perselisihan dengan Presiden Soekarno. Hatta merupakan sosok yang memiliki kegemaran membaca dan dikenal sebagai Bapak Koperasi Indonesia. Hatta juga menggalakkan ekonomi dengan semangat gotong royong pada masyarakat. Koperasi juga menjadi pilar ekonomi dari tingkat paling kecil yaitu desa. Dengan desa yang berdaya ekonomi dan pangan, akan membuat bangsa menjadi lebih kuat.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Atas jasanya nama Bung Hatta diabadikan dalam nama sebuah bandar udara internasional di Tangerang. Banten, Indonesia bersama dengan Ir. Soekarno yaitu Bandara Soekarno-Hatta. Selain di Indonesia nama beliau juga diabadikan menjadi sebuah nama jalan bernama mohammed hattastraat di Zuiderpolder, Haarlem Belanda. Pada 14 Maret 1980 pada usia 77 tahun, Bung Hatta meninggal dunia di Jakarta.`,
      question: `Keistimewaan yang terdapat pada tokoh tersebut adalah ....`,
      options: [
        "turut berjuang dalam memerdekakan Indonesia bersama Soekarno",
        "mendapat julukan bapak proklamator",
        "nama Bung Hatta diabadikan sebagai nama tempat dan jalan",
        "memiliki hobi membaca",
        "dikenal sebagai bapak koperasi Indonesia karena sebagai promotor adanya koperasi di Indonesia",
      ],
      answerIndex: [4]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Drs. H. Mohammad Hatta atau yang lebih dikenal dengan Bung Hatta adalah wakil presiden pertama Indonesia, selain itu beliau juga adalah seorang pejuang, negarawan, dan juga ekonom. Lelaki kelahiran Fort de Kock, Hindia Belanda (Sekarang Bukittinggi, Sumatera Barat, Indonesia) 12 Agustus 1902 yang bernama lahir Mohammad Attar merupakan anak kedua dari pasangan Muhammad Djamil dan Siti Saleha. 
      \n&nbsp;&nbsp;&nbsp;&nbsp;Pada 18 November 1945, Bung Hatta menikah dengan Rahmi Hatta dan setelah 3 hari menikah mereka pindah dan tinggal Yogyakarta, Pernikahan mereka dikaruniai 3 orang anak perempuan yaitu Meutia Farida Hatta, Gembala Rabi'ah Hatta, dan Halida Nuriah Hatta. Moh. Hatta menjadi wakil presiden pertama di Indonesia, la sangat berperan dalam membantu Soekarno dan para pendiri bangsa untuk mencapai kemerdekaan. Selain menjabat sebagai wakil presiden Bung Hatta juga pernah menjabat menjadi perdana menteri dalam Kabinet Hatta I-II dan RIS. Pada tahun 1956 Bung Hatta mengundurkan diri sebagai wakil presiden akibat perselisihan dengan Presiden Soekarno. Hatta merupakan sosok yang memiliki kegemaran membaca dan dikenal sebagai Bapak Koperasi Indonesia. Hatta juga menggalakkan ekonomi dengan semangat gotong royong pada masyarakat. Koperasi juga menjadi pilar ekonomi dari tingkat paling kecil yaitu desa. Dengan desa yang berdaya ekonomi dan pangan, akan membuat bangsa menjadi lebih kuat.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Atas jasanya nama Bung Hatta diabadikan dalam nama sebuah bandar udara internasional di Tangerang. Banten, Indonesia bersama dengan Ir. Soekarno yaitu Bandara Soekarno-Hatta. Selain di Indonesia nama beliau juga diabadikan menjadi sebuah nama jalan bernama mohammed hattastraat di Zuiderpolder, Haarlem Belanda. Pada 14 Maret 1980 pada usia 77 tahun, Bung Hatta meninggal dunia di Jakarta.`,
      question: `Keteladanan yang terdapat pada kutipan teks biografi tersebut adalah ....`,
      options: [
        "menjadi wakil presiden pertama di Indonesia",
        "berperan dalam berperang mempertahankan kemerdekaan",
        "memiliki kegemaran membaca",
        "hidup sederhana dan bersahaja",
        "seorang pejuang, negarawan, dan juga ekonom",
      ],
      answerIndex: [2]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Bahasa yang Taksa dan Samar-samar Perlu dijelaskan bahwa sebagai aparatus komunikasi, bahasa memiliki rupa-rupa keterbatasan dan ketidaksempurnaan. Banyak kekuranglengkapan yang melekat erat (inheren) di dalam sosok bahasa itu sendiri, yang pada gilirannya justru dapat mencuatkan aneka kesalahpahaman. Sebab pertama dari kekuranglengkapan dan kekurangsempurnaan bahasa adalah ihwal penandaan atau penyimbolan unsur-unsur kebahasaan. Penandaan komponen-komponen bahasa tersebut lazimnya dilakukan baik secara konvensional maupun inkonvensional.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Penyimbolan secara konvensional dilaksanakan atas dasar kesepahaman dan kesepakatan bersama di antara sesama warga pemakaian bahasa dalam sebuah masyarakat bahasa. Karena dasar utamanya adalah kesepakatan atau konvensi, maka lazimnya hasil penyimbolan yang demikian itu tidak banyak menghadirkan persoalan. Ambillah contoh kata Jawa segawon yang dalam bahasa Indonesia anjing, dan dalam bahasa Inggris dog. Penamaan terhadap sosok binatang piaraan yang buas, berbulu bagus, tidak terlalu besar, dan sukanya meraung-raung keras itu dilakukan secara konvensional. Karena simbol tersebut muncul dalam kesepakatan atau kesepahaman bersama, tidak ditemukan persoalan pemakaian unsur kebahasaan tersebut di dalam praktik komunikasi.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Penyimbolan kedua dilakukan secara arbitrer. Artinya, satuan lingual tertentu digunakan untuk menyimboli sesuatu entitas di alam raya ini secara semena-mena dan tidak selalu jelas alasan dan justifikasinya. Karena itu, simbolisasi yang demikian rentan terhadap aneka kesamaran dan ketaksaan. Sejumlah pakar bahkan dengan tegas menyebutkan, kesamaan dan ketaksaan tersebut sesungguhnya merupakan sifat kebahasaan melekat, sebagai akibat yang tidak terhindarkan lagi dari simbolisasi arbitrer itu.`,
      question: `Masalah utama yang dibicarakan dalam paragraf pertama pada teks di atas adalah ....`,
      options: [
        "Bahasa memiliki rupa-rupa keterbatasan dan ketidaksempurnaan.",
        "Kekuranglengkapan di dalam sosok bahasa dapat mencuatkan kesalahpahaman.",
        "Penyebab kekuranglengkapan dan ketidaksempurnaan bahasa.",
        "Penandaan unsur-unsur kebahasaan dilakukan baik secara konvensional maupun inkonvensional.",
        "Ketidaksempurnaan bahasa sehingga banyak pihak yang memiliki kebiasaan salah berbahasa.",
      ],
      answerIndex: [0]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Bahasa yang Taksa dan Samar-samar Perlu dijelaskan bahwa sebagai aparatus komunikasi, bahasa memiliki rupa-rupa keterbatasan dan ketidaksempurnaan. Banyak kekuranglengkapan yang melekat erat (inheren) di dalam sosok bahasa itu sendiri, yang pada gilirannya justru dapat mencuatkan aneka kesalahpahaman. Sebab pertama dari kekuranglengkapan dan kekurangsempurnaan bahasa adalah ihwal penandaan atau penyimbolan unsur-unsur kebahasaan. Penandaan komponen-komponen bahasa tersebut lazimnya dilakukan baik secara konvensional maupun inkonvensional.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Penyimbolan secara konvensional dilaksanakan atas dasar kesepahaman dan kesepakatan bersama di antara sesama warga pemakaian bahasa dalam sebuah masyarakat bahasa. Karena dasar utamanya adalah kesepakatan atau konvensi, maka lazimnya hasil penyimbolan yang demikian itu tidak banyak menghadirkan persoalan. Ambillah contoh kata Jawa segawon yang dalam bahasa Indonesia anjing, dan dalam bahasa Inggris dog. Penamaan terhadap sosok binatang piaraan yang buas, berbulu bagus, tidak terlalu besar, dan sukanya meraung-raung keras itu dilakukan secara konvensional. Karena simbol tersebut muncul dalam kesepakatan atau kesepahaman bersama, tidak ditemukan persoalan pemakaian unsur kebahasaan tersebut di dalam praktik komunikasi.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Penyimbolan kedua dilakukan secara arbitrer. Artinya, satuan lingual tertentu digunakan untuk menyimboli sesuatu entitas di alam raya ini secara semena-mena dan tidak selalu jelas alasan dan justifikasinya. Karena itu, simbolisasi yang demikian rentan terhadap aneka kesamaran dan ketaksaan. Sejumlah pakar bahkan dengan tegas menyebutkan, kesamaan dan ketaksaan tersebut sesungguhnya merupakan sifat kebahasaan melekat, sebagai akibat yang tidak terhindarkan lagi dari simbolisasi arbitrer itu.`,
      question: `Kesimpulan dari teks di atas adalah ....`,
      options: [
        "kesamaan dan ketaksaan di dalam sosok bahasa adalah suatu keniscayaan",
        "kesamaran dan ketaksaan di dalam sosok bahasa merupakan hal yang bisa dihindari",
        "kesamaran dan ketaksaan di dalam sosok bahasa terjadi sebagai akibat simbolisasi",
        "kesamaran dan ketaksaan di dalam sosok bahasa bisa mamunculkan aneka kesalahpahaman",
        "tidak dapat ditarik kesimpulan",
      ],
      answerIndex: [2]
    },
  ],
}

  // Beres
const soalLitBing: ujianSession = {
  name: "Literasi Bahasa Inggris",
  description: "Ada 20 soal yang akan dikerjakan dalam 20 menit",
  questions: [
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Social media advertising is a type of digital marketing that utilizes social networks such as Facebook, Twitter, and Instagram to deliver paid advertisements to your target audience in a quick and effective way to connect with customers and boost your marketing campaigns.
      \n&nbsp;&nbsp;&nbsp;&nbsp;By leveraging various data sources, advertisers are able to hyper target their audiences and deliver personalized content based on demographics and user behavior. When an audience social media advertisers may see more interaction and conversion. Social media advertisements are also cost effective, offering the potential for high rates of return.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Social media advertising is a must if you want to quickly reach new target markets. More and more companies - including the world's top performing brands utilize social media companies and reach out to new consumers. To keep up with the competition, we need to earn how these ads work and how they can benefit your company.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Because both the internet and the content marketing are constantly evolving, there are many ways to go about your advertising strategy on social media platforms: the types of advertising your preferred platforms and the audience you want to reach.
      \n&nbsp;&nbsp;&nbsp;&nbsp;When considering social media advertising options, such as which advertising platform to use, remember that each platform has its own audience. That means you want to choose customers. If you are already active on social media, pay attention to which platforms perform well and which organic posts get the most interaction to target the best audience.`,
      question: `Which of the following statements expresses the main idea of the text?`,
      options: [
          `The use of social media advertisements can be effective when adjusted to the types of platforms and their audiences.`,
          `The most important impact to consider in using social media advertisement is the interaction with users.`,
          `Social media platforms are now widely used by advertising comparative to promote their products.`,
          `Using various social media platforms is a must to make the advertisements cost-effective.`,
          `Social media is the only effective way to interact with the news market.`,
          ],
      answerIndex: [0]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Improving the mental health and wellbeing of young people is a global priority. Approximately 80% of the population will experience mental il-fhealth at some point in their life. 75% of mental disorders begin before the age of 25. Mental ill health changes the course of young people's lives. (...) It can also cut lives short through an increased risk of dying by suicide, treatment side effects, and higher rates of chronic physical health conditionh Good-quality, impactful rese should bential to helping young people cope with mental health challenges. Young people with lived experience should be integral partners in designing, implementing and translating this research.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Expertise based on experience matters. Young people who experience mental health challenges can provide unique insights that others do not have. Through roles such as youth advisors and peer researchers, they can put that knowledge to use. They are best placed to make a participant information and consent form meaningful and comprehensible for people their age. They can advise whether an intervention is appealing and practical. In doing this, they should consider time and resource investment in development and testing. Involving people with lived experience in research helps to improve funding success, recruitment rates and research outcomes. Across the research cycle, young people can increase the charice of research making a real difference.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Young people with the most relevant experience should be offered opportunities. Typically, youth partners are not able to speak on behalf of all young people. However, it is important to ensure that they have experiences that are relevant to the research area. Someone who has experienced suicidal ideation cannot necessarily speak to the needs of young people who hear voices. Representation of other intersecting experiences and contexts matters too. These may include experiences of voluntary versus involuntary treatment, genders and sexualities, and socioeconomic backgrounds.`,
      question: `The author illustrates the importance of involving youths with lived experience in mental health studies in paragraph(s)?`,
      options: [
          `1`,
          `2`,
          `3`,
          `1 and 2`,
          `2 and 3`,
          ],
      answerIndex: [4]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Improving the mental health and wellbeing of young people is a global priority. Approximately 80% of the population will experience mental il-fhealth at some point in their life. 75% of mental disorders begin before the age of 25. Mental ill health changes the course of young people's lives. (...) It can also cut lives short through an increased risk of dying by suicide, treatment side effects, and higher rates of chronic physical health conditionh Good-quality, impactful rese should bential to helping young people cope with mental health challenges. Young people with lived experience should be integral partners in designing, implementing and translating this research.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Expertise based on experience matters. Young people who experience mental health challenges can provide unique insights that others do not have. Through roles such as youth advisors and peer researchers, they can put that knowledge to use. They are best placed to make a participant information and consent form meaningful and comprehensible for people their age. They can advise whether an intervention is appealing and practical. In doing this, they should consider time and resource investment in development and testing. Involving people with lived experience in research helps to improve funding success, recruitment rates and research outcomes. Across the research cycle, young people can increase the charice of research making a real difference.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Young people with the most relevant experience should be offered opportunities. Typically, youth partners are not able to speak on behalf of all young people. However, it is important to ensure that they have experiences that are relevant to the research area. Someone who has experienced suicidal ideation cannot necessarily speak to the needs of young people who hear voices. Representation of other intersecting experiences and contexts matters too. These may include experiences of voluntary versus involuntary treatment, genders and sexualities, and socioeconomic backgrounds.`,
      question: `Which of the following sentences can complete the missing sentence in paragraph 1?`,
      options: [
          `The lives of young people are valuable so that treatment should be given.`,
          `It impacts their health and their social, emotional and functional outcomes.`,
          `An example includes the ways young people deal with their mental disorders.`,
          `It explains the increasing rates of mental ill-health issues among young people.`,
          `The changes of life style are thus required to decrease the rate of mental ill-health cases.`,
          ],
      answerIndex: [1]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Improving the mental health and wellbeing of young people is a global priority. Approximately 80% of the population will experience mental il-fhealth at some point in their life. 75% of mental disorders begin before the age of 25. Mental ill health changes the course of young people's lives. (...) It can also cut lives short through an increased risk of dying by suicide, treatment side effects, and higher rates of chronic physical health conditionh Good-quality, impactful rese should bential to helping young people cope with mental health challenges. Young people with lived experience should be integral partners in designing, implementing and translating this research.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Expertise based on experience matters. Young people who experience mental health challenges can provide unique insights that others do not have. Through roles such as youth advisors and peer researchers, they can put that knowledge to use. They are best placed to make a participant information and consent form meaningful and comprehensible for people their age. They can advise whether an intervention is appealing and practical. In doing this, they should consider time and resource investment in development and testing. Involving people with lived experience in research helps to improve funding success, recruitment rates and research outcomes. Across the research cycle, young people can increase the charice of research making a real difference.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Young people with the most relevant experience should be offered opportunities. Typically, youth partners are not able to speak on behalf of all young people. However, it is important to ensure that they have experiences that are relevant to the research area. Someone who has experienced suicidal ideation cannot necessarily speak to the needs of young people who hear voices. Representation of other intersecting experiences and contexts matters too. These may include experiences of voluntary versus involuntary treatment, genders and sexualities, and socioeconomic backgrounds.`,
      question: `Based on the passage, if a study focuses on anxiety disorders, the experience included should be taken from someone who....`,
      options: [
          `eats in an unhealthy portion`,
          `suffers from physical injuries`,
          `regularly lies in different occasions`,
          `constantly feels worried for no reason`,
          `shows the difficulty of managing suicidal thoughts`,
          ],
      answerIndex: [3]
    },
    {
      txtField: `#### TEXT 1
      \n&nbsp;&nbsp;&nbsp;&nbsp;Every day we chew food with our teeth. We can crush hard food using molars. Our teeth are coated with a protective layer called tooth enamel. This layer is only a few millimeters of food without causing pain to the soft tissue under it.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Scientists believe tooth enamel is the hardest biological tissue in the human body, Dental scientists have done a lot of research to replicate this super thin but strong structure for longer teeth health. Recently material scientists and chemical engineers have created synthetic tooth enamel that is even stronger that what is found in our teeth. They also studied both to more closely resemble the composition and structure of the real substance.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Tooth enamel is constantly bombarded by the strike of acids and bases from food and drink. It is contending with new bacteria and changes in the mouth's microbiome. Enamel can be strong brushing and habitual teeth grinding. Time, wear, and decay bore holes through a tooth's outer layers, resulting in cavities and other dental issues. Unlike a broken bone, enamel defenses itself.
      \n&nbsp;&nbsp;&nbsp;&nbsp;The origin of enamel's strength comes from its complex and intricate structure. Protective minerals are made of tiny, interconnected tubes called nanorods, which are filled with lattice grids, a type of calcium phosphate mineral.
      \n### TEXT 2
      \n&nbsp;&nbsp;&nbsp;&nbsp;Tooth enamel is a hard substance that is found on the outermost part of our teeth. Enamel is considered as the hardest substance in our body. It is known even harder than our bones. How it decays or breaks down when bacteria breaks down the sugar in food creating an acid hole. About two percent of enamel is made of some organic materials known as enamelin.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Enamels plays an important role in protecting the tooth's to reduce the discomfort we feel due to hot or cold foods.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Although tooth enamel is a hard and protective coating, it can easily crack. When the enamel breaks, it is no longer able to protect the teeth adequately. Tooth decay and enamel darnage and presence of acids in the food we eat. Acids cause erosion of the enamel. Once your tooth enamel is destroyed, your body will not make more of an effort to replace it. Therefore, we should avoid acids.`,
      question: `According to the two texts, which of the following will most likely happen in the future?`,
      options: [
          `Because of the use of enamel specific protein, tooth enamel will not be bombarded anymore by the acids and bases from food and drink.`,
          `An enamel specific protein known as enamelin will be implemented on the tooth so that the eroded tooth enamel can repair itself.`,
          `Tooth enamel made from bone-similar structure will be developed to replace natural tooth enamel.`,
          `Synthetic tooth enamel that has physical properties similar to the real one will be used to replace the damaged tooth enamel.`,
          `Synthetic tooth enamel that contains anti-bacterial coating will be able to maintain the discomfort we feel due to hot or cold food.`,
          ],
      answerIndex: [3]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Tooth enamel is a hard substance that is found on the outermost part of our teeth. Enamel is considered as the hardest substance in our body. It is known even harder than our bones. How it decays or breaks down when bacteria breaks down the sugar in food creating an acid hole. About two percent of enamel is made of some organic materials known as enamelin.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Enamels plays an important role in protecting the tooth's to reduce the discomfort we feel due to hot or cold foods.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Although tooth enamel is a hard and protective coating, it can easily crack. When the enamel breaks, it is no longer able to protect the teeth adequately. Tooth decay and enamel damage and presence of acids in the food we eat. Acids cause erosion of the enamel. Once your tooth enamel is destroyed, your body will not make more of an effort to replace it. Therefore, we should avoid acids.`,
      question: `The word "it" in paragraph 1 refers to...`,
      options: [
          `Substance of our body`,
          `Tooth enamel`,
          `Our tooth`,
          `Outermost part of our body`,
          `Bacteria from foods and drinks`,
          ],
      answerIndex: [1]
    },
    {
      txtField: `UCI Gravel World Championship 2022, October 8-9, Italy
| Lequack Jul 10, 2022 10:23 | Maybe we can get a look at what this gravel thing really is. Honestly, I myself haven't seen a gravel race yet. Let's see if it's actually a thing or a gimmick.|
|--------------------------------|-----------------------------------------|
| Stonerider Jul 10, 2022 13:58  | For one thing, the route is rather more in keeping with the chalk roads of Strade Bianche than the rocker terrain on offer on the North American grave scene. Gravel bikes emerged as means of tracking a wider range of surfaces than a conventional road or mountain bike.|
| Cyclingnews Jul 10, 2022 20:15 | The rules allow the use of any kind of bike-gravel, road, cyclo-cross or mountain bike-provided that it weighs at least 6.8 kg, and there are no restrictions on type width. Wheel changes are permitted at feed zones, but bike changes are not allowed: riders must finish aboard the same frame on which they started. |
| Red Rick Jul 10, 2022 22:33 | It looks a lot more fun than most road racing.|
| Lequack Jul 10, 2022 22:23 | Unfortunately, the profiles leave much to be desired. I just hope it is similar to cobbled races in a way that it can generate action without climbs.|
| Saunaking Jul 10, 2022 11:10 | I do not think it is a gimmick since it is definitely growing. UCI has basically created a road race course for the worlds - no climbing and pretty gravel from what I have read.|
| Tobydawq Jul 11, 2022 13:45    | @Red Rick, sometimes I wonder why you even follow road cycling. However, yes, it looks interesting. I will definitely take a look. |
\nAdapted from:https://forum.cyclingnews.com`,
      question: `What is the tone of the thread with regards to the gravel race as world championship?`,
      options: [
          `Confused`,
          `Concerned`,
          `Underestimating`,
          `Uncertain`,
          `Neutral`,
          ],
      answerIndex: [4]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Artificial Intelligence (AI) is rapidly entering health care and serving major roles. These include automating routine tasks in medical practice and managing medical resources. As developers create Al systems to take on these tasks, several risks and challenges emerge.
      \n&nbsp;&nbsp;&nbsp;&nbsp;The most obvious risk is that Al systems will sometimes be wrong. This can result in patient injury or other health-care problems. An Al system possibly recommends the wrong drug for a patient or fails to notice a tumor on a radiological scan. Of course, many injuries occur due to medical error in the health care system today, even without the involvement of AL. Al errors potentially different for at least two reasons. First, patients and providers may react differently to injuries resulting from software than from human error. Second, if Al systems become widespread, an underlying problem in one Al system might result in injuries to thousands of patients.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Moreover, training Al systems requires large amount of data from sources. However, health data are often problematic. Data are typically fragmented across many different systems. Even aside from the variety Just mentioned, patients typically see different providers and switch insurance companies. This would lead to data split in multiple systems and multiple formats.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Another set of risks arise around privacy. The requirement of large datasets creates incentives for developers to collect such data from many patients. Some patients may be concerned that this collection may violate their privacy. In fact, lawsuits have been filled based on data-sharing between large health care systems and Al developers
      \n&nbsp;&nbsp;&nbsp;&nbsp;The integration of Al into the health system will undoubtedly change the role of health care providers. A hopeful vision is that providers will be enabled to provide more-personalized and better care, freed to spend more time interacting with patients as humans. <u>A less hopeful vision would see providers struggling to weather monsoon of uninterpretable predictions and recommendations from competing algorithms<u>. In either case, medical education will need to prepare providers to evaluate and interpret the Al systems they will encounter in the evolving health care environment.
      \nAdapted from:https://www.brooking.edu/`,
      question: `The author holds the assumption about Al developers that...`,
      options: [
          `their business practice could leak patients' personal data.`,
          `most of them have been jailed for wrongdoings in data-sharing`,
          `they often violate patients' rights for privacy through forceful data.`,
          `they commercialize patients' data to maximize profits of their business.`,
          `They cooperate with large health care centers in monetizing patients' data.`,
          ],
      answerIndex: [4]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Artificial Intelligence (AI) is rapidly entering health care and serving major roles. These include automating routine tasks in medical practice and managing medical resources. As developers create Al systems to take on these tasks, several risks and challenges emerge.
      \n&nbsp;&nbsp;&nbsp;&nbsp;The most obvious risk is that Al systems will sometimes be wrong. This can result in patient injury or other health-care problems. An Al system possibly recommends the wrong drug for a patient or fails to notice a tumor on a radiological scan. Of course, many injuries occur due to medical error in the health care system today, even without the involvement of AL. Al errors potentially different for at least two reasons. First, patients and providers may react differently to injuries resulting from software than from human error. Second, if Al systems become widespread, an underlying problem in one Al system might result in injuries to thousands of patients.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Moreover, training Al systems requires large amount of data from sources. However, health data are often problematic. Data are typically fragmented across many different systems. Even aside from the variety Just mentioned, patients typically see different providers and switch insurance companies. This would lead to data split in multiple systems and multiple formats.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Another set of risks arise around privacy. The requirement of large datasets creates incentives for developers to collect such data from many patients. Some patients may be concerned that this collection may violate their privacy. In fact, lawsuits have been filled based on data-sharing between large health care systems and Al developers
      \n&nbsp;&nbsp;&nbsp;&nbsp;The integration of Al into the health system will undoubtedly change the role of health care providers. A hopeful vision is that providers will be enabled to provide more-personalized and better care, freed to spend more time interacting with patients as humans. <u>A less hopeful vision would see providers struggling to weather monsoon of uninterpretable predictions and recommendations from competing algorithms<u>. In either case, medical education will need to prepare providers to evaluate and interpret the Al systems they will encounter in the evolving health care environment.
      \nAdapted from:https://www.brooking.edu/`,
      question: `Which of the following best restates the underlined sentence in paragraph 5?`,
      options: [
          `In the future, reading between the lines could be hampered by forecasts and commendations from confusing algorithm.`,
          `There is a strong possibility that algorithms will support with each other, yielding guesses and suggestions that are hardly understood by providers.`,
          `Providers can be less flexible about their ability to understand calculations and advice generated by opposite algorithm.`,
          `A more pessimistic view on Al in health care is rooted in conflicting algorithms which cause predictions and suggestions impossible to deduce by providers.`,
          `A new season would come and bring more challenges from providers which fail to infer projections and recommendations from competing algorithms.`,
          ],
      answerIndex: [3]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Fast food is widely known in most populated countries. Now, fast food has become part of urban people's life because it offers a delicious quick-meal at a small price. However, consuming fast food such as hot dog, hamburger, fried chicken, soft drink, and many other may frequently cause several bad impacts on your health.
      \n&nbsp;&nbsp;&nbsp;&nbsp;In many countries, dieticians often emphasize the dangers of consuming too much fast food. Fast food is high in calories but they come from unhealthy fat and added sugars. Therefore, the food provides few nutrients. The imbalanced content from this kind of food may trigger various diseases. Obesity is one of the most possible impact of consuming too much fast food. Besides, it can also increase the risk of hypertension, heart attack, as well as diabetes.
      \n&nbsp;&nbsp;&nbsp;&nbsp;A study showed that children who consumed a lot of fast food had lower IQ than children who ate less fast food. Although the difference was subtle, the study proved that fast food that children consumed at age between 6 and 24 months gave a small but significant effect on their IQ when they reached 8 years old.
      \n&nbsp;&nbsp;&nbsp;&nbsp;In addition, most fast food meals have the artificial additives and sweetener to maintain their texture consistency, to give them longer shelf-life, and also to enhance the flavor. These substances contribute to the good taste of fast food.
      \n&nbsp;&nbsp;&nbsp;&nbsp;1). Pregnant women should also avoid eating fast food. 2). Eating such food is not only bad for the mother herself but also the baby. 3). The baby will be so vulnerable of hypertension and diabetes. 4). There fore, we should consult a doctor before consuming fast food. 5). The cause is the preservatives in fast food that are harmful to both mother and her baby. 6). Moreover, a number of studies in China have found that the rate of breast cancer among women has risen due to the consumption of fast food.`,
      question: `Which of the statements in paragraph 5 is NOT relevant to the topic discussed in the passage?`,
      options: [
          `1`,
          `2`,
          `3`,
          `4`,
          `5`,
          ],
      answerIndex: [3]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Fast food is widely known in most populated countries. Now, fast food has become part of urban people's life because it offers a delicious quick-meal at a small price. However, consuming fast food such as hot dog, hamburger, fried chicken, soft drink, and many other may frequently cause several bad impacts on your health.
      \n&nbsp;&nbsp;&nbsp;&nbsp;In many countries, dieticians often emphasize the dangers of consuming too much fast food. Fast food is high in calories but they come from unhealthy fat and added sugars. Therefore, the food provides few nutrients. The imbalanced content from this kind of food may trigger various diseases. Obesity is one of the most possible impact of consuming too much fast food. Besides, it can also increase the risk of hypertension, heart attack, as well as diabetes.
      \n&nbsp;&nbsp;&nbsp;&nbsp;A study showed that children who consumed a lot of fast food had lower IQ than children who ate less fast food. Although the difference was subtle, the study proved that fast food that children consumed at age between 6 and 24 months gave a small but significant effect on their IQ when they reached 8 years old.
      \n&nbsp;&nbsp;&nbsp;&nbsp;In addition, most fast food meals have the artificial additives and sweetener to maintain their texture consistency, to give them longer shelf-life, and also to enhance the flavor. These substances contribute to the good taste of fast food.
      \n&nbsp;&nbsp;&nbsp;&nbsp;1). Pregnant women should also avoid eating fast food. 2). Eating such food is not only bad for the mother herself but also the baby. 3). The baby will be so vulnerable of hypertension and diabetes. 4). There fore, we should consult a doctor before consuming fast food. 5). The cause is the preservatives in fast food that are harmful to both mother and her baby. 6). Moreover, a number of studies in China have found that the rate of breast cancer among women has risen due to the consumption of fast food.`,
      question: `Here are the jumbled sentences from the paragraph that follows the last paragraph of the passage. Please reorder the following sentences.
      \nA. As we have mentioned, it could trigger various diseases on adults and make children have lower IQ.
      \nB. Fast food meets the needs of urban people of quickly served food.
      \nC. From the facts above, there is definitely nothing nutritional about fast food, it simply feeds your hunger and craving.
      \nD. However, consuming this delightful meal regularly may bring some bad impacts on health.
      \nE. in addition, a study shows that consuming fast food has negative effects on pregnant women and their babies.
      \nThe best order of the sentences above is ---`,
      options: [
          `b-a-d-c-e`,
          `b-d-c-e-a`,
          `b-d-a-e-c`,
          `b-d-c-e-a`,
          `b-e-d-c-a`,
          ],
      answerIndex: [2]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;From small committees to national elections, group decision making can be complicated. Unfortunately, it may not always settle on the best choice. That's partly because some members of the group do research on their own, and others take their cues from the people around them.
      \n&nbsp;&nbsp;&nbsp;&nbsp;That distinction is readily observed around election time. "Many voters couldn't tell you the policy platforms for the candidates they're voting for," says applied mathematician Vicky Chuqiao Yang at the Santa Fe Institute. "Many individuals are uninformed, and they're most likely to rely on information they get from others".
      \n&nbsp;&nbsp;&nbsp;&nbsp;Social scientists have long sought ways to study the phenomenon of group decision-making, but that's a tricky undertaking. Researchers in a range of disciplines have tried to tackle the problem, with parallel efforts often leading to conflicting conclusions. Most existing models examine the effect of a single variable, which means they don't capture the whole picture.
      \n&nbsp;&nbsp;&nbsp;&nbsp;"The outcome of collective decision making is the result of complex interactions of many variables," says Yang, "And those integractions are rarely taken into account" in previous work. To overcome that challange, Yang recently developed a mathematical framework that captures the influence of multiple interactions among members of a group. "You can plug in multiple effects and see their behavior and how they manifest in the group at the same time", she explains.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Those effects include the influence of social leaners. The model predicted, for example, that decision making groups have a critical threshold of people who get their Information from others. Below that threshold, the group chooses the high-quality outcome. Above it, the group can end up choosing the better or worse option.
      \n&nbsp;&nbsp;&nbsp;&nbsp;The mathematical model is both simple and general. It can accurately reflect the multitude of moving parts within a system. The model also predicted a significant role for "committed minorities, or people who refuse to change their minds, no matter the evidence. These committed minorities can be bolstered, Yang says, by social learners, though every group is different. Yang says she hopes the model will help bring together parallel work from different disciplines. .... "but we don't yet have a holistic understanding that gives a recipe for good collective decision making," she said. "Our work brings us one step closer to it."
      \nAdapted from https://www.sciencedaily.com`,
      question: `The paragraph following the passage most likely discusses ....`,
      options: [
          `How decision making is applied at individual level.`,
          `How to reach an agreement on group decision-making.`,
          `What other disciplines have found about group decision-making.`,
          `Why collective decision making is better than the individual one.`,
          `How to achieve consensus in a group decision making process.`,
          ],
      answerIndex: [2]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Social media advertising is a type of digital marketing that utilizes social networks such as Facebook, Twitter, and Instagram to deliver paid advertisements to your target audience in a quick and effective way to connect with customers and boost your marketing campaigns.
      \n&nbsp;&nbsp;&nbsp;&nbsp;By leveraging various data sources, advertisers are able to hyper target their audiences and deliver personalized content based on demographics and user behavior. When an audience social media advertisers may see more interaction and conversion. Social media advertisements are also cost effective, offering the potential for high rates of return.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Social media advertising is a must if you want to quickly reach new target markets. More and more companies-including the world's top performing brands - utilize social media companies and reach out to new consumers. To keep up with the competition, we need to earn how these ads work and how they can benefit your company.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Because both the internet and the content marketing are constantly evolving, there are many ways to go about your advertising strategy on social media platforms; the types of advertising your preferred platforms and the audience you want to reach.
      \n&nbsp;&nbsp;&nbsp;&nbsp;When considering social media advertising options, such as which advertising platform to use, remember that each platform has its own audience. That means you want to choose customers. If you are already active on social media, pay attention to which platforms perform well and which organic posts get the most interaction to target the best audience.`,
      question: `Which of the following is closest in meaning to the phrase "to keep up with" in Text Paragraph 3?`,
      options: [
          `to observe`,
          `to practice`,
          `to participate`,
          `to face`,
          `to evaluate`,
          ],
      answerIndex: [1]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Hypebeast is defined by Urban Dictionary as: "A kid that collects clothing, shoes, and accessories for the sole purpose of impressing others". Some people accept that hypebeast is a slang for someone who is a 'beast' (or obsessed) about hyped-up fashion brands. Thus, they will enact whatever means to achieve that hype. The term has been attributed to (usually) well-off youth, who are obsessed in purchasing popular and high-end streetwear brands. They camp out overnight to await the next sneaker release from famous streetwear brands. On the other hand, they ignore brands that haven't been hyped online. They also constantly show off their sneaker and snapback collections.
      \n&nbsp;&nbsp;&nbsp;&nbsp;These people spend much of their time curating their social media image by projecting a certain lifestyle. They love to post pictures of their outfits of the day, or OOTD, and count the likes. However, it is commonly considered an insult to be called a hypebeast, because it is generally the urban version of "social climber".`,
      question: `According to the passage, hypebeasts feel that they ... not miss the current street fashion trends.`,
      options: [
          `should`,
          `must`,
          `shall`,
          `may`,
          `can`,
          ],
      answerIndex: [1]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Hypebeast is defined by Urban Dictionary as: "A kid that collects clothing, shoes, and accessories for the sole purpose of impressing others". Some people accept that hypebeast is a slang for someone who is a 'beast' (or obsessed) about hyped-up fashion brands. Thus, they will enact whatever means to achieve that hype. The term has been attributed to (usually) well-off youth, who are obsessed in purchasing popular and high-end streetwear brands. They camp out overnight to await the next sneaker release from famous streetwear brands. On the other hand, they ignore brands that haven't been hyped online. They also constantly show off their sneaker and snapback collections.
      \n&nbsp;&nbsp;&nbsp;&nbsp;These people spend much of their time curating their social media image by projecting a certain lifestyle. They love to post pictures of their outfits of the day, or OOTD, and count the likes. However, it is commonly considered an insult to be called a hypebeast, because it is generally the urban version of "social climber".`,
      question: `According to the passage, hypebeast dedicate time to ... their social media persona in order to escalate their social status.`,
      options: [
          `rely on`,
          `focus on`,
          `enhance`,
          `present`,
          `declare`,
          ],
      answerIndex: [2]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Hypebeast is defined by Urban Dictionary as: "A kid that collects clothing, shoes, and accessories for the sole purpose of impressing others". Some people accept that hypebeast is a slang for someone who is a 'beast' (or obsessed) about hyped-up fashion brands. Thus, they will enact whatever means to achieve that hype. The term has been attributed to (usually) well-off youth, who are obsessed in purchasing popular and high-end streetwear brands. They camp out overnight to await the next sneaker release from famous streetwear brands. On the other hand, they ignore brands that haven't been hyped online. They also constantly show off their sneaker and snapback collections.
      \n&nbsp;&nbsp;&nbsp;&nbsp;These people spend much of their time curating their social media image by projecting a certain lifestyle. They love to post pictures of their outfits of the day, or OOTD, and count the likes. However, it is commonly considered an insult to be called a hypebeast, because it is generally the urban version of "social climber".`,
      question: `Hypebeasts ... with hyped-up fashion brands would ignore brands that are not hyped up online.`,
      options: [
          `obsess`,
          `obsessed`,
          `is obsessed`,
          `are obsessed`,
          `who obsessed`,
          ],
      answerIndex: [1]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;A doctor in pediatric respiratory medicine reported that with the rising popularity of vaping the hospitals are treating many life threatening cases. The doctor is concerned that e-cigarettes are advertised in the UK, given the severe reaction they can cause in children and a lack of scientific studies on their safety.
      \n&nbsp;&nbsp;&nbsp;&nbsp;E-cigarettes are promoted in the UK as a way to quit smoking because they let people inhale nicotine in vapor rather than breathing in smoke. The Director of Public Health England said vaporing is 95% safer than smoking, but is not without risks. He asserted that smoking kills half of lifelong smokers and accounts for almost 220 death in England every day. While it is not completely risk free, UK regulated e-cigarettes carry a fraction of the risk of smoked tobacco.
      \n&nbsp;&nbsp;&nbsp;&nbsp;This is supported by Dr. Hopkinson, the Medical Director of the British Lung Foundation. He stated that if people switch completely from smoking to vaping, they will substantially reduce their health risk as e-cigarettes do not contain tobacco and any harmful components that present at a much lower lever. He advises people who switch to vaping to try to quit vaping in the long term too but not at the expense of relapsing to smoking.
      \n&nbsp;&nbsp;&nbsp;&nbsp;But there are arguments about how safe vaping really is. The World Health Organization says e-cigarettes are undoubtedly harmful and should therefore be subject to regulation. It also raises concerns about vaping being aggressively marketed at young people, it is also concerned about the possibility of e-smoking leading to the renormalizing of smoking.
      \n&nbsp;&nbsp;&nbsp;&nbsp;A researcher studying the effects of vaping said the findings show that vaping is not safe, especially for the lungs or young people. He belives that it is dangerous to announce that e-cigarettes are much safer than tobacco. In conclusion, the best advice that can be given is. "If you smoke, switch to vaping: if you don't smoke don't vape"`,
      question: `Which of the following is the best summary of the passage?`,
      options: [
          `Vaping is being aggressively advertised as an effective means to help smokers stop their habit. As a result, both smokers and non-smokers are turning to e-cigarettes. This might reduce the number of deaths caused by smoking.`,
          `Severe lung diseases caused by vaping have caused a lot of concern among health authorities in the UK. This is mainly caused by the successful marketing strategies of e-cigarettes which are targeting the most vulnerable sector, the youth.`,
          `A heated argument is going on about the benefits and safety of vaping. The parties gainst vaping say that there is no scientific evidence that it is safe. However, the opposing parties claim that vaping is 95% safer than smoking which causes the deaths of hundreds of people daily.`,
          `It is argued that vaping is much safer than smoking can be used as a method to stop smoking. Nevertheless, arguments are being raised about its safety. There is evidence that it can cause severe reactions, particularly in teenagers. Therefore, people who are non-smokers are advised to avoid vaping.`,
          `Although vaping has already caused some deaths among young people, nothing has been done to prohibit the marketing of e-cigarettes. This is because health authorities believe that it is still better to vape than to smoke regular tobacco cigarettes. The latter takes the lives of approximately 200 people a day.`,
          ],
      answerIndex: [3]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;In the enchanting realm of the beauty, where cosmetics promise to accentuate our features and boost confidence, a less glamorous reality emerges--the potential dangers hidden within these beauty products. As we explore the multifaceted risks associated with cosmetics, it becomes evident that an informed approach is crucial to maintaining both personal health and environment well-being.
      \n&nbsp;&nbsp;&nbsp;&nbsp;One major hazard lies in the chemical composition of cosmetics. Common ingredients like parabens, phthalates, and formaldehyde have raised red flags due to their association with hormonal imbalances and potential links to serious health issues, including cancer. The question arises: how can consumers navigate product labels to discer these harmful components and make informed choices for their well-being?
      \n&nbsp;&nbsp;&nbsp;&nbsp;Our body's largest organ, the skin, is not impervious to the risks of cosmetics. Harsh chemicals and synthetic fragrances can lead to irritations and allergies, prompting the need for a nuanced understanding of individual skin sensitivities. Additionally, the danger extends to misleading marketing practices that create unrealistic expectations.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Beyond personal health risks, the environmental footprint of the cosmetic industry adds another layer of concern. Excessive packaging, single-use plastics, and the disposal of expired products contribute to pollution. Here, consumers play a pivotal role in questioning industry practices and seeking eco-friendly alternatives.
      \n&nbsp;&nbsp;&nbsp;&nbsp;In conclusion, the danger of cosmetics necessitates a vigilant and informed consumer approach. By questioning ingredients, understanding individual skin sensitivities, deciphering marketing claims, and advocating for sustainable practices, consumers can navigate the cosmetic landscape with a discerning eye, ensuring that beauty routines align with both personal and planetary well-being.`,
      question: `The best title for the test is:`,
      options: [
          `Exploring the World of Beauty`,
          `Cosmetic Dangers: A Closer Look`,
          `Mastering Skin Sensitivities`,
          `The Beauty Industry's Environmental Impact`,
          `Achieving Flawless Beauty Safely`,
          ],
      answerIndex: [1]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;In the enchanting realm of the beauty, where cosmetics promise to accentuate our features and boost confidence, a less glamorous reality emerges--the potential dangers hidden within these beauty products. As we explore the multifaceted risks associated with cosmetics, it becomes evident that an informed approach is crucial to maintaining both personal health and environment well-being.
      \n&nbsp;&nbsp;&nbsp;&nbsp;One major hazard lies in the chemical composition of cosmetics. Common ingredients like parabens, phthalates, and formaldehyde have raised red flags due to their association with hormonal imbalances and potential links to serious health issues, including cancer. The question arises: how can consumers navigate product labels to discer these harmful components and make informed choices for their well-being?
      \n&nbsp;&nbsp;&nbsp;&nbsp;Our body's largest organ, the skin, is not impervious to the risks of cosmetics. Harsh chemicals and synthetic fragrances can lead to irritations and allergies, prompting the need for a nuanced understanding of individual skin sensitivities. Additionally, the danger extends to misleading marketing practices that create unrealistic expectations.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Beyond personal health risks, the environmental footprint of the cosmetic industry adds another layer of concern. Excessive packaging, single-use plastics, and the disposal of expired products contribute to pollution. Here, consumers play a pivotal role in questioning industry practices and seeking eco-friendly alternatives.
      \n&nbsp;&nbsp;&nbsp;&nbsp;In conclusion, the danger of cosmetics necessitates a vigilant and informed consumer approach. By questioning ingredients, understanding individual skin sensitivities, deciphering marketing claims, and advocating for sustainable practices, consumers can navigate the cosmetic landscape with a discerning eye, ensuring that beauty routines align with both personal and planetary well-being.`,
      question: `The tone of the text is:`,
      options: [
          `Informativs`,
          `Enthuastic`,
          `Critical`,
          `Humorous`,
          `Indifferent`,
          ],
      answerIndex: [0]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;In the enchanting realm of the beauty, where cosmetics promise to accentuate our features and boost confidence, a less glamorous reality emerges--the potential dangers hidden within these beauty products. As we explore the multifaceted risks associated with cosmetics, it becomes evident that an informed approach is crucial to maintaining both personal health and environment well-being.
      \n&nbsp;&nbsp;&nbsp;&nbsp;One major hazard lies in the chemical composition of cosmetics. Common ingredients like parabens, phthalates, and formaldehyde have raised red flags due to their association with hormonal imbalances and potential links to serious health issues, including cancer. The question arises: how can consumers navigate product labels to discer these harmful components and make informed choices for their well-being?
      \n&nbsp;&nbsp;&nbsp;&nbsp;Our body's largest organ, the skin, is not impervious to the risks of cosmetics. Harsh chemicals and synthetic fragrances can lead to irritations and allergies, prompting the need for a nuanced understanding of individual skin sensitivities. Additionally, the danger extends to misleading marketing practices that create unrealistic expectations.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Beyond personal health risks, the environmental footprint of the cosmetic industry adds another layer of concern. Excessive packaging, single-use plastics, and the disposal of expired products contribute to pollution. Here, consumers play a pivotal role in questioning industry practices and seeking eco-friendly alternatives.
      \n&nbsp;&nbsp;&nbsp;&nbsp;In conclusion, the danger of cosmetics necessitates a vigilant and informed consumer approach. By questioning ingredients, understanding individual skin sensitivities, deciphering marketing claims, and advocating for sustainable practices, consumers can navigate the cosmetic landscape with a discerning eye, ensuring that beauty routines align with both personal and planetary well-being.`,
      question: `The relationship between 'chemical composition of cosmetics and health' is similar to the phenomenon between...`,
      options: [
          `Exercise and weight loss`,
          `Nutrition and energy levels`,
          `Education and intelligence`,
          `Sunscreen and sun protection`,
          `Smoking and lung cancer`,
          ],
      answerIndex: [4]
    },
  ],
}

const soalPM: ujianSession = {
  name: "Penalaran Matematika",
  description: "Ada 20 soal yang akan dikerjakan dalam 42,5 menit",
  questions: [
    {
      txtField: `Sebuah kolam berbentuk persegi dengan panjang sisi 4 m. Sebuah batu akan dilemparkan tepat di tengah kolam sehingga timbul riak gelombang berbentuk lingkaran. Riak gelombang yang terjadi akan melebar 10 cm setiap detik.`,
      question: `Jika $R(t)$ menyatakan jari-jari riak gelombang setelah $t$ detik, maka $R(t)$ dapat dinyatakan dengan persamaan .... (dalam cm)`,
      options: [
          `$R(t) = 10t$`,
          `$R(t) = 5t$`,
          `$R(t) = 2,5t$`,
          `$R(t) = 10t - 4$`,
          `$R(t) = 5t - 4$`,
          ],
      answerIndex: [0]
    },
    {
      txtField: `Sebuah kolam berbentuk persegi dengan panjang sisi 4 m. Sebuah batu akan dilemparkan tepat di tengah kolam sehingga timbul riak gelombang berbentuk lingkaran. Riak gelombang yang terjadi akan melebar 10 cm setiap detik.`,
      question: `Luas di dalam lingkaran riak gelombang setelah $t$ detik dinyatakan dengan $L(t)$, maka bentuk matematika dari $L(t)$ adalah .... $cm^2$`,
      options: [
        "$L(t) = \\pi t^2$",
        "$L(t) = 10 \\pi t^2$",
        "$L(t) = 100 \\pi t^2$",
        "$L(t) = 25\\pi t^2$",
        "$L(t) = 250\\pi^2t^2$",
      ],
      answerIndex: [2]
    },
    {
      txtField: `Sebuah kolam berbentuk persegi dengan panjang sisi 4 m. Sebuah batu akan dilemparkan tepat di tengah kolam sehingga timbul riak gelombang berbentuk lingkaran. Riak gelombang yang terjadi akan melebar 10 cm setiap detik.`,
      question: `Setelah 10 detik riak berjalan, maka luas daerah di luar riak gelombang pertama adalah ....`,
      options: [
        "$(4 - \\pi) 10^2$",
        "$(4 - \\pi) 10^4$",
        "$(16 - \\pi)$",
        "$(16 - \\pi)10^2$",
        "$(16 - \\pi)10^4$",
      ],
      answerIndex: [2]
    },
    {
      txtField: `Sebuah kolam berbentuk persegi dengan panjang sisi 4 m. Sebuah batu akan dilemparkan tepat di tengah kolam sehingga timbul riak gelombang berbentuk lingkaran. Riak gelombang yang terjadi akan melebar 10 cm setiap detik.`,
      question: `Waktu yang dibutuhkan riak gelombang agar menyentuh sisi kolam untuk pertama kalinya adalah .... detik`,
      options: [
        "$40$",
        "$20$",
        "$40\\sqrt{2}$",
        "$20\\sqrt{2}$",
        "$40\\sqrt{2} + 20$",
      ],
      answerIndex: [1]
    },
    {
      txtField: `Pada bulan Juni, Pandi dan Redi memanen hasil ternak ikannya. Pandi memanen 150 ikan lele dan 75 ikan gurame dengan berat total 60 kg. Redi memanen 75 ikan gurami dan 150 ikan nila dengan berat total 75 kg. Setiap ikan dari jenis yang sama díasumsikan memiliki berat yang sama.`,
      question: `Satu bulan kemudian, Pandi kembali memanen 150 ikan lele dan 75 ikan gurame dengan berat total 67,5 kg. Sedangkan Redi memanen 75 ikan gurame dan 150 ikan nila dengan berat total 82,5 kg. Jika diasumsikan berat setiap ikan gurame sama dengan berat pada saat panen bulan lalu, total kenaikan berat seekor ikan lele dan ikan nila adalah .... g.`,
      options: [
        "50",
        "100",
        "150",
        "200",
        "250",
      ],
      answerIndex: [1]
    },
    {
      txtField: `Pada bulan Juni, Pandi dan Redi memanen hasil ternak ikannya. Pandi memanen 150 ikan lele dan 75 ikan gurame dengan berat total 60 kg. Redi memanen 75 ikan gurami dan 150 ikan nila dengan berat total 75 kg. Setiap ikan dari jenis yang sama díasumsikan memiliki berat yang sama.`,
      question: `Pada saat Pandi dan Redi memanen ikan ternaknya, Seno juga memanen ikan lele dan Ikan nila. Seno menjual 300 ikan lele dan 200 ikan nila dengan berat total 70 kg. Jika harga 1 kg ikan lele Rp20.000,00 dan 1 kg ikan nila Rp27.500,00, uang yang diperoleh Seno adalah ....`,
      options: [
        "Rp1.500.000,00",
        "Rp1.600.000,00",
        "Rp1.700.000,00",
        "Rp1.800.000,00",
        "Rp1.900.000,00",
      ],
      answerIndex: [2]
    },
    {
      // txtField: ``,
      question: `Ibu Vanessa mengandung anak kembar laki-laki dan perempuan. Ibu Vanessa memiliki lingkar perut sebelum hamil sebesar 90 cm. Hasil analisa dokter kandungan, lingkar perut seorang ibu akan bertambah 1 cm per minggu jika bayinya laki-laki dan bertambah 0,5 cm per minggu jika bayinya perempuan. Berapa diameter perut Ibu Vanessa saat ini jika usia kandungan sudah 30 minggu?`,
      options: [
        "41 cm",
        "42,3 cm",
        "43 cm",
        "43,75 cm",
        "44 cm",
      ],
      answerIndex: [2]
    },
    {
      txtField: `Toko Laku menerima kiriman beras dari tiga distributor untuk dijual kembali. Jadwal peneri maannya adalah beras merek A setiap 3 hari sebanyak 100 kg; beras merek B setiap 4 hari sebanyak 200 kg; dan beras merek C setiap 5 hari sebanyak 300 kg. Pada tanggal 1 Mei 2023 toko tersebut menerima kiriman beras merek A, B, dan C secara bersamaan untuk pertama kalinya.`,
      question: `Mulai 1 Juni 2023, kiriman beras merek C ditambah menjadi 350 kg pada setiap kali pengiriman. Total kiriman beras semua merek yang diterima Toko Laku pada bulan Juni adalah .... kg.`,
      options: [
        "4.350",
        "4.400",
        "4.550",
        "4.700",
        "5.050",
      ],
      answerIndex: [3]
    },
    {
      txtField: `Toko Laku menerima kiriman beras dari tiga distributor untuk dijual kembali. Jadwal peneri maannya adalah beras merek A setiap 3 hari sebanyak 100 kg; beras merek B setiap 4 hari sebanyak 200 kg; dan beras merek C setiap 5 hari sebanyak 300 kg. Pada tanggal 1 Mei 2023 toko tersebut menerima kiriman beras merek A, B, dan C secara bersamaan untuk pertama kalinya.`,
      question: `Selisih berat beras merek B dan C yang diterima Toko Laku pada bulan Mei 2023 adalah .... kg.`,
      options: [
        "900",
        "800",
        "600",
        "500",
        "400",
      ],
      answerIndex: [3]
    },
    {
      txtField: `Toko Laku menerima kiriman beras dari tiga distributor untuk dijual kembali. Jadwal peneri maannya adalah beras merek A setiap 3 hari sebanyak 100 kg; beras merek B setiap 4 hari sebanyak 200 kg; dan beras merek C setiap 5 hari sebanyak 300 kg. Pada tanggal 1 Mei 2023 toko tersebut menerima kiriman beras merek A, B, dan C secara bersamaan untuk pertama kalinya.`,
      question: `Toko Laku menerima kiriman beras merek A dan C pada hari yang sama untuk ketiga kalinya pada ....`,
      options: [
        "15 Mei 2023",
        "16 Mei 2023",
        "21 Mei 2023",
        "30 Mei 2023",
        "31 Mei 2023",
      ],
      answerIndex: [4]
    },
    {
      txtField: `Sebuah perusahaan kereta api melayani tiga rute perjalanan pulang pergi di dalam kota, yaitu rute A-B (dari stasiun A ke B), A - C (dari stasiun A ke C), dan A - D (dari stasiun A ke D). Pada pekan pertama total jumlah penumpang pada ketiga rute tersebut adalah 600.000. Pada pekan kedua, terjadi penurunan jumlah penumpang pada rute A - C dan A - D sebanyak masing-masing 20%. Sedangkan jumlah penumpang pada pekan kedua adalah 528.000.`,
      question: `Total jumlah penumpang pada rute A - B pada pekan pertama adalah ....`,
      options: [
        "72.000",
        "160.000",
        "200.000",
        "240.000",
        "360.000",
      ],
      answerIndex: [3]
    },
    {
      txtField: ``,
      question: `Misalkan satu rangkaian kereta terdiri dari 8 gerbong dan dalam satu hari terjadi perjalanan dari A ke B sebanyak 75 kali, dan begitu juga sebaliknya. Rata-rata jumlah penumpang pada per perjalanan di pekan pertama adalah ....`,
      options: [
        "168",
        "200",
        "229",
        "480",
        "520",
      ],
      answerIndex: [2]
    },
    {
      // txtField: ``,
      question: `Pak Anggit membeli motor pertama seharga Rp16.000.000,00 dan menjualnya dengan keuntungan 8%. Kemudian, Pak anggit membeli kembali motor kedua dengan harga Rp20.000.000,00 dan menjualnya kembali. Pak Anggit memperoleh keuntungan sebesar 7% dari penjualan kedua motor tersebut. Pada penjualan motor kedua, pak Anggit mengalami ....`,
      options: [
        "Keuntungan 6,2%",
        "Kerugian 6,2%",
        "Keuntungan 7,2%",
        "Kerugian 7,2%",
        "Keuntungan 5,8%",
      ],
      answerIndex: [0]
    },
    {
      // txtField: ``,
      question: `Andi akan membuat suatu larutan yang mencampurkan isi dari dua botol yang volumenya sama. Pada botol pertama, terdapat campuran antara larutan garam dan air sebanyak 3:8. Sedangkan pada botol kedua, perbandingan antara garam dengan air 2:9. Dari percampuran keduanya, maka larutan yang didapatkan Andi mempunyai perbandingan antara larutan garam dan air adalah ....`,
      options: [
        "9:16",
        "5:17",
        "16:27",
        "7:72",
        "11:32",
      ],
      answerIndex: [1]
    },
    {
      txtField: `Dua akuarium A dan B diisi air sehingga volumnya sama yaitu 64.000 $cm^3$. Anto memiliki 30 kelereng kecil dan 20 kelereng besar yang akan dimasukkan ke dalam akuarium tersebut. Ke dalam akuarium A dimasukkan 7 kelereng kecil dan 7 kelereng besar sehingga volume akuarium yang terisi menjadi 64.821 $\\frac{1}{3} cm^3$ sedangkan ke dalam akuarium B dimasukkan 21 kelereng kecil dan 7 kelereng besar sehingga volume akuarium yang terisi menjadi 64.880 $cm^3$.`,
      question: `Volume seluruh kelereng Anto yang tidak dimasukkan ke akuarium adalah .... $cm^3$`,
      options: [
        "$113 \\frac{1}{7}$",
        "$226 \\frac{2}{7}$",
        "$251 \\frac{3}{7}$",
        "$687 \\frac{5}{21}$",
        "$712 \\frac{1}{3}$",
      ],
      answerIndex: [3]
    },
    {
      txtField: `Pendapatan sopir bus antarkota ditentukan dari besarnya UMR (Upah Minimum Regional) ditambah uang lembur per jam, dan ditambah hasil kali rata-rata indeks kepuasan pelanggan dengan jumlah penumpang dalam satu bulan kali 1000. Indeks kepuasan pelanggan dalam bentuk persentase dari 50% - 90%. Uang lembur adalah Rp20.000,00 per jam, dan maksimal lembur dalam satu hari 3 jam.`,
      question: `Jika upah minimum regional (UMR) daerah setempat adalah Rp3.200.000,00, rata-rata indeks adalah i, banyaknya penumpang x, dan jumlah jam lembur dalam satu bulan adalah y, maka pendapatan sopir bus antar kota (P) dapat ditulis dengan rumus ....`,
      options: [
        "$p = 1000ix + 20000y + 3200000$",
        "$p = 20000x + 1000iy + 3200000$",
        "$p = ix + 3200000x - 20000y$",
        "$p = ix + 20000y + 3200000$",
        "$p = iy - 20000 - 3200000$",
      ],
      answerIndex: [0]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Sistem telekomunikasi di Indonesia terbagi menjadi jaringan tetap dan jaringan bergerak. Dalam perkembangannya, telah terjadi pergantian sektor telekomunikasi dari yang awalnya menggunakan jaringan telekomunikasi berbasis kabel namun kebutuhan akan ases informasi yang akurat telah menggeser moda telekomunikasi di Indonesia sejak tahun 2000an.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Mulai tahun 2000 sampai 2007, banyak pengguna telepon seluler $f(x)$ dimodelkan oleh persamaan $f(x) = 1,3x^2 + 1,6x + 3,7$ dengan $x = 0$ menggambarkan tahun 2000.`,
      question: `Banyak pengguna telepon seluler di Indonesia akan mencapai angka 78,6 juta pada tahun ....`,
      options: [
        "2006",
        "2007",
        "2005",
        "2009",
        "2010",
      ],
      answerIndex: [1]
    },
    {
      txtField: `&nbsp;&nbsp;&nbsp;&nbsp;Sistem telekomunikasi di Indonesia terbagi menjadi jaringan tetap dan jaringan bergerak. Dalam perkembangannya, telah terjadi pergantian sektor telekomunikasi dari yang awalnya menggunakan jaringan telekomunikasi berbasis kabel namun kebutuhan akan ases informasi yang akurat telah menggeser moda telekomunikasi di Indonesia sejak tahun 2000an.
      \n&nbsp;&nbsp;&nbsp;&nbsp;Mulai tahun 2000 sampai 2007, banyak pengguna telepon seluler $f(x)$ dimodelkan oleh persamaan $f(x) = 1,3x^2 + 1,6x + 3,7$ dengan $x = 0$ menggambarkan tahun 2000.`,
      question: `Banyak pengguna telepon seluler pada tahun 2005 adalah ....`,
      options: [
        "60.100.000",
        "57.100.000",
        "49.100.000",
        "45.200.000",
        "44.200.000",
      ],
      answerIndex: [4]
    },
    {
      txtField: `Andi mengikuti kursus academic writing untuk melatih kemampuannya dalam menulis. Academic writing adalah kemampuan menulis karya ilmiah dalam Bahasa Inggris yang mengikuti kaidah Bahasa Inggris yang baik dan benar. Untuk belajar menulis dengan baik, guru meminta Andi untuk menulis sebuah teks yang terdiri dari 100 kata pada minggu pertama. Kemudian pada minggu-minggu berikutnya Andi harus menambahkan 20 kata untuk setiap minggu. Andi menuliskan teks dengan jumlah kata sesuai dengan permintaan. `,
      question: `Pada minggu ke berapakah Andi menulis teks sebanyak 300 kata?`,
      options: [
        "9",
        "10",
        "11",
        "12",
        "13",
      ],
      answerIndex: [0]
    },
    {
      txtField: ``,
      question: `Sebuah nampan pada tumpeng jika diberdirikan akan setinggi 50 cm. Tumpeng akan diletakkan tepat di tengah, jika masing-masing ujung tumpeng berjarak 7,5 cm dari ujung nampan. Berapa isian nasi yang dibutuhkan agar tumpeng tersebut padat, jika tinggi tumpeng yang diinginkan adalah 30 cm?`,
      options: [
        "9.625 $cm^3$",
        "96,25 liter",
        "11.250 ml",
        "12.500 $cm^3$",
        "3,85 liter",
      ],
      answerIndex: [0]
    },
  ],
}


export const data: Ujian[] = [
  {
    name: "Try Out UTBK",
    description: "Rin Education",
    items: [
      soalPU,
      soalPPU,
      soalPBM,
      soalPK,
      soalLitdo,
      soalLitBing,
      soalPM
    ],
  },
]