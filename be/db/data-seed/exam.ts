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

// NOTE
// 1. Untuk membuat soal essay atau multiple selection, tambahkan properti type pada pertanyaan
// const soal: ujianSession = {
//   name: "",
//   description: "",
//   questions: [
//     {
//       type: "ESSAY", ---> // contoh soal essay (untuk multiple selection, ganti "ESSAY" menjadi "MULTIPLE_SELECTION")
//       txtField: `Panggung kesenian tradisional, seperti lenong atau ludruk, merupakan wadah untuk menanamkan nilai-nilai etika dan moral. Apabila panggung kesenian tradisional punah, orang-orang mencari hiburan melalui panggung-panggung modern dan tidak terjadi regenerasi karena anak-anak muda tidak lagi mengenalnya. Di sisi lain, gedung-gedung kesenian tradisional satu per satu mulai tutup dan para pelaku seninya beralih profesi.`,
//       question: `Berdasarkan paragraf di atas, apabila gedung-gedung kesenian tradisional satu per satu mulai tutup dan para pelaku seninya beralih profesi, manakah di bawah ini simpulan yang PALING MUNGKIN BENAR?`,
//       options: [
//           `Panggung kesenian tradisional telah punah.`,
//           `Panggung kesenian tradisional pernah punah.`,
//           `Panggung kesenian tradisional sudah pasti punah.`,
//           `Panggung kesenian tradisional pada akhirnya punah.`,
//           `Panggung kesenian tradisional mungkin akan punah.`,
//           ],
//       answerIndex: [3] ---> // a = 0, b = 1, dst. Untuk essay, isi jawaban langsung saja, misalnya ["jawaban soal essay"]
//     },
//   ]

// Tes Potensi Skolastik (TPS)
const soalPUInduktif: ujianSession = {
  name: "Penalaran Umum - Penalaran Induktif",
  description: "Ada 10 soal yang akan dikerjakan dalam 10 menit",
  duration: 10 * 60,
  questions: [
    { //Soal 1
      txtField: "Tanaman hidroponik semakin populer di perkotaan karena tidak memerlukan lahan luas dan dapat dilakukan di halaman rumah. Selain itu, hidroponik juga menghasilkan sayuran yang lebih sehat karena bebas pestisida. Namun, sistem hidroponik membutuhkan listrik untuk pompa air dan pencahayaan buatan, sehingga meningkatkan biaya operasional.",
      question: "Berdasarkan informasi tersebut, manakah pernyataan berikut yang PASTI SALAH?",
      options: [
        "Hidroponik dapat menjadi solusi bercocok tanam di lahan terbatas.",
        "Sayuran hidroponik lebih sehat karena bebas pestisida.",
        "Biaya listrik tidak berpengaruh terhadap biaya operasional hidroponik.",
        "Hidroponik membutuhkan pompa air untuk sirkulasi nutrisi.",
        "Tanaman hidroponik dapat ditanam di perkotaan."
      ],
      answerIndex: [2]
    },
    { //Soal 2
      txtField: "Kopi merupakan minuman yang banyak dikonsumsi masyarakat. Kandungan kafein dalam kopi dapat meningkatkan kewaspadaan dan konsentrasi. Namun, konsumsi kopi berlebihan dapat menyebabkan gangguan tidur dan kecemasan. Sebagai alternatif, teh hijau juga mengandung kafein dalam jumlah lebih rendah serta antioksidan yang baik bagi tubuh.",
      question: "Berdasarkan paragraf tersebut, manakah yang PALING MUNGKIN menjadi asumsi yang mendasari argumen di atas?",
      options: [
        "Teh hijau tidak mengandung kafein.",
        "Orang yang ingin menghindari kafein dapat beralih ke teh hijau.",
        "Teh hijau memiliki kafein lebih tinggi daripada kopi.",
        "Kopi tidak memiliki antioksidan.",
        "Konsumsi kopi selalu menyebabkan gangguan tidur."
      ],
      answerIndex: [1]
    },
    { //Soal 3
      txtField: "Sejarawan A berpendapat bahwa Kerajaan Majapahit mencapai puncak kejayaan pada masa pemerintahan Hayam Wuruk. Sejarawan B menyatakan bahwa Patih Gajah Mada adalah tokoh di balik kebesaran Majapahit. Fakta sejarah mencatat bahwa Gajah Mada adalah mahapatih yang mengucapkan Sumpah Palapa, namun Hayam Wuruk adalah raja yang memerintah saat itu.",
      question: "Manakah pernyataan yang PALING TEPAT berdasarkan fakta tersebut?",
      options: [
        "Memperkuat pendapat Sejarawan A.",
        "Memperlemah pendapat Sejarawan A.",
        "Memperkuat pendapat Sejarawan B.",
        "Memperlemah pendapat Sejarawan B.",
        "Tidak relevan dengan kedua pendapat."
      ],
      answerIndex: [4]
    },
    { //Soal 4
      txtField: "Seorang mahasiswa ingin membeli laptop untuk keperluan kuliah. Laptop X menawarkan spesifikasi tinggi dengan harga mahal, namun baterainya tahan lama. Laptop Y memiliki spesifikasi standar dengan harga terjangkau, tetapi baterainya cepat habis. Mahasiswa tersebut akhirnya memilih laptop X.",
      question: "Manakah yang PALING MEMPERKUAT keputusan mahasiswa tersebut?",
      options: [
        "Mahasiswa sering bekerja di luar ruangan tanpa akses listrik.",
        "Mahasiswa menginginkan laptop dengan harga murah.",
        "Mahasiswa hanya menggunakan laptop di rumah.",
        "Mahasiswa tidak membutuhkan spesifikasi tinggi.",
        "Mahasiswa lebih suka laptop dengan desain menarik."
      ],
      answerIndex: [0]
    },
    { //Soal 5
      txtField: "Ketersediaan fasilitas olahraga di suatu daerah diyakini dapat meningkatkan tingkat kebugaran masyarakat. Seorang peneliti berpendapat bahwa masyarakat di Kota P memiliki tingkat kebugaran lebih tinggi daripada masyarakat di Kota Q.",
      question: "Manakah pernyataan di bawah ini yang PALING MEMPERLEMAH pendapat peneliti tersebut?",
      options: [
        "Di Kota P terdapat banyak taman kota yang dilengkapi jalur lari.",
        "Di Kota Q hanya ada satu pusat kebugaran yang buka 24 jam.",
        "Sebagian besar warga Kota P lebih memilih berolahraga di rumah.",
        "Pemerintah Kota Q gencar mengadakan event olahraga mingguan.",
        "Jumlah fasilitas olahraga di Kota P sama banyaknya dengan di Kota Q."
      ],
      answerIndex: [4]
    },
    { //Soal 6
      txtField: "Membaca buku dapat meningkatkan wawasan dan kemampuan berpikir kritis. Selain itu, membaca juga dapat mengurangi stres dan meningkatkan empati. Namun, membaca terlalu lama tanpa istirahat dapat menyebabkan mata lelah dan gangguan penglihatan.",
      question: "Berdasarkan informasi di atas, manakah pernyataan yang BENAR?",
      options: [
        "Membaca buku pasti menyebabkan mata lelah.",
        "Stres dapat dikurangi dengan membaca buku.",
        "Kemampuan berpikir kritis hanya diperoleh dari membaca.",
        "Gangguan penglihatan pasti terjadi jika membaca terlalu lama.",
        "Membaca buku selalu meningkatkan empati."
      ],
      answerIndex: [1]
    },
    { //Soal 7
      txtField: "Akhir-akhir ini, toko buku sepi pengunjung. Biasanya, saat ada peluncuran buku baru dari penulis terkenal, banyak orang datang untuk membeli.",
      question: "Berdasarkan pernyataan tersebut, manakah simpulan yang BENAR?",
      options: [
        "Saat ini tidak ada peluncuran buku baru dari penulis terkenal.",
        "Harga buku saat ini terlalu mahal.",
        "Buku-buku baru yang diluncurkan kurang menarik.",
        "Toko buku sedang tutup untuk renovasi.",
        "Penulis terkenal sedang tidak menulis buku baru."
      ],
      answerIndex: [0]
    },
    { //Soal 8
      txtField: "Sebuah restoran cepat saji yang dulu selalu ramai dikunjungi, setelah berganti pemilik, pelayanannya menjadi lambat dan sering terjadi kesalahan pesanan.",
      question: "Manakah pernyataan yang PALING MUNGKIN menjelaskan perbedaan kedua kondisi tersebut?",
      options: [
        "Pemilik baru kurang berpengalaman dalam mengelola restoran.",
        "Setelah berganti pemilik, banyak restoran baru bermunculan.",
        "Pemilik baru justru meningkatkan kualitas makanan.",
        "Pemilik baru mengadakan promo diskon besar-besaran.",
        "Restoran tersebut tidak pernah mendapat sertifikat halal."
      ],
      answerIndex: [0]
    },
    { //Soal 9
      txtField: "Perusahaan X setiap tahun mengadakan pelatihan kepemimpinan bagi karyawannya. Karyawan yang mengikuti pelatihan tersebut berkesempatan mendapatkan promosi jabatan. Catatan menunjukkan bahwa setiap tahun hanya 5 orang yang dipromosikan.",
      question: "Berdasarkan paragraf di atas, manakah pernyataan yang PALING MUNGKIN BENAR mengenai Perusahaan X?",
      options: [
        "Perusahaan X selalu mengadakan pelatihan setiap tahun.",
        "Jumlah karyawan yang dipromosikan meningkat setiap tahun.",
        "Semua karyawan yang mengikuti pelatihan pasti dipromosikan.",
        "Pelatihan kepemimpinan hanya diikuti oleh calon manajer.",
        "Promosi jabatan hanya diberikan kepada peserta pelatihan."
      ],
      answerIndex: [0]
    },
    { //Soal 10
      txtField: "Pemilik butik \"Cantik\" mengatakan bahwa penjualan meningkat drastis dalam sebulan terakhir setelah bekerja sama dengan seorang selebriti lokal yang mempromosikan produknya.",
      question: "Manakah pernyataan berikut yang jika benar akan MEMPERKUAT pernyataan pemilik butik?",
      options: [
        "Selebriti tersebut baru saja terlibat skandal.",
        "Butik \"Cantik\" menaikkan harga semua produk.",
        "Selebriti tersebut memiliki banyak pengikut di media sosial.",
        "Selebriti tersebut menghapus semua unggahan tentang butik.",
        "Butik \"Cantik\" mengurangi jumlah stok barang."
      ],
      answerIndex: [2]
    }
  ],
}

const soalPUDeduktif: ujianSession = {
  name: "Penalaran Umum - Penalaran Deduktif",
  description: "Ada 10 soal yang akan dikerjakan dalam 10 menit",
  duration: 10 * 60,
  questions: [
    { //Soal 1
      txtField: "Kualitas udara di perkotaan dapat membaik jika jumlah kendaraan bermotor dikurangi. Upaya efektif untuk mengurangi kendaraan adalah dengan memperbaiki transportasi umum.",
      question: "Berdasarkan informasi tersebut, manakah simpulan yang BENAR?",
      options: [
        "Perbaikan transportasi umum adalah satu-satunya cara untuk memperbaiki kualitas udara.",
        "Jika transportasi umum diperbaiki, kualitas udara pasti membaik.",
        "Selain perbaikan transportasi umum, pembatasan kendaraan juga dapat mengurangi polusi.",
        "Jika transportasi umum diperbaiki, kendaraan bermotor akan hilang.",
        "Kualitas udara membaik jika transportasi umum diperbaiki."
      ],
      answerIndex: [4]
    },
    { //Soal 2
      txtField: "Jika Dina lulus ujian, ia akan dibelikan sepeda baru. Jika Dina mendapat beasiswa, ia akan melanjutkan studi ke luar negeri. Jika Dina lulus ujian atau mendapat beasiswa, manakah simpulan berikut yang PALING BENAR?",
      question: "Manakah simpulan yang paling benar?",
      options: [
        "Dina akan dibelikan sepeda baru dan melanjutkan studi.",
        "Dina akan dibelikan sepeda baru atau melanjutkan studi.",
        "Dina tidak akan melanjutkan studi karena dibelikan sepeda.",
        "Dina tidak akan dibelikan sepeda dan tidak ke luar negeri.",
        "Jika Dina tidak lulus ujian, ia tidak akan mendapat beasiswa."
      ],
      answerIndex: [1]
    },
    { //Soal 3
      txtField: "Rina berencana pergi ke mal untuk membeli sepatu atau menonton film. Temannya, Sari, mengajak Rina untuk makan di restoran baru. Namun, saat tiba di mal, bioskop sedang tutup karena perbaikan.",
      question: "Apa yang PALING MUNGKIN dilakukan Rina di mal?",
      options: [
        "Membeli sepatu saja.",
        "Menonton film di bioskop lain.",
        "Makan di restoran baru bersama Sari.",
        "Pulang karena bioskop tutup.",
        "Membeli sepatu atau makan di restoran."
      ],
      answerIndex: [0]
    },
    { //Soal 4
      txtField: "Ketika toko online memberikan gratis ongkir, jumlah pesanan meningkat dibanding hari biasa. Hal serupa terjadi saat toko mengadakan cashback. Namun, ketika toko hanya mengganti tampilan website, jumlah pesanan tidak berubah.",
      question: "Berdasarkan informasi di atas, manakah dari pernyataan berikut yang PALING MUNGKIN BENAR?",
      options: [
        "Jumlah pesanan meningkat saat gratis ongkir dan cashback diberikan bersamaan.",
        "Gratis ongkir atau cashback dapat meningkatkan jumlah pesanan.",
        "Mengganti tampilan website secara rutin dapat meningkatkan pesanan.",
        "Diskon produk tidak mempengaruhi jumlah pesanan.",
        "Peningkatan pesanan saat cashback lebih besar daripada gratis ongkir."
      ],
      answerIndex: [1]
    },
    { //Soal 5
      txtField: "Andi rajin berolahraga setiap pagi. Kebiasaan ini membuat tubuhnya bugar dan daya tahan tubuhnya kuat. Meskipun terkadang merasa lelah setelah olahraga, Andi jarang sakit.",
      question: "Berdasarkan informasi di atas, manakah pernyataan yang BENAR?",
      options: [
        "Andi hanya berolahraga di pagi hari.",
        "Andi tidak pernah sakit karena olahraga.",
        "Kelelahan setelah olahraga selalu membuat Andi sakit.",
        "Kebiasaan olahraga membantu Andi jarang sakit.",
        "Andi akan sakit jika tidak berolahraga."
      ],
      answerIndex: [3]
    },
    { //Soal 6
      txtField: "Film bergenre dokumenter biasanya kurang diminati karena dianggap membosankan oleh penonton awam. Namun, film dokumenter \"Keindahan Bawah Laut\" berhasil menarik perhatian berkat sinematografi yang memukau dan narasi yang menarik.",
      question: "Berdasarkan pernyataan tersebut, manakah simpulan yang PALING TEPAT?",
      options: [
        "Semua film dokumenter membosankan.",
        "Film dokumenter selalu memiliki sinematografi memukau.",
        "Hanya film \"Keindahan Bawah Laut\" yang menarik.",
        "Penonton awam tidak menyukai film dokumenter apapun.",
        "Sebagian penonton tertarik pada film tersebut karena sinematografinya."
      ],
      answerIndex: [4]
    },
    { //Soal 7
      txtField: "Program vaksinasi di Desa Sehat telah dilaksanakan untuk balita. Selama setahun terakhir, terdapat 50 balita yang divaksin, masing-masing pada hari yang berbeda. Setiap kali petugas kesehatan datang, ibu-ibu memberikan makanan ringan sebagai ucapan terima kasih. Petugas yang datang hanya satu orang.",
      question: "Berdasarkan paragraf tersebut, manakah peristiwa yang PALING MUNGKIN BENAR mengenai Desa Sehat?",
      options: [
        "Hanya ada 50 balita di desa itu.",
        "Sebagian besar balita di desa itu sudah divaksin.",
        "Ibu-ibu memberikan setidaknya 50 bingkisan selama setahun.",
        "Petugas kesehatan datang setiap minggu.",
        "Vaksinasi dilakukan secara serentak."
      ],
      answerIndex: [2]
    },
    { //Soal 8
      txtField: "Sebuah restoran dapat direkomendasikan sebagai tempat nongkrong yang nyaman jika menyediakan area outdoor dan live music. Area outdoor ditandai dengan adanya taman atau teras. Live music biasanya diadakan setiap akhir pekan. Restoran R memiliki area outdoor yang luas.",
      question: "Manakah simpulan di bawah ini yang PALING MUNGKIN BENAR?",
      options: [
        "Restoran R memiliki area outdoor.",
        "Restoran R memiliki live music setiap akhir pekan.",
        "Restoran R nyaman untuk nongkrong.",
        "Restoran R tidak memiliki live music.",
        "Restoran R lebih ramai pada akhir pekan."
      ],
      answerIndex: [0]
    },
    { //Soal 9
      txtField: "Lina ingin membeli buah untuk diet. Ia mempertimbangkan apel dan pisang. Apel mengandung serat tinggi dan rendah kalori, sedangkan pisang mengandung kalium dan vitamin B6. Lina hanya bisa membeli satu jenis buah karena uang terbatas.",
      question: "Berdasarkan bacaan tersebut, manakah pernyataan yang PALING TEPAT menggambarkan pilihan Lina?",
      options: [
        "Lina bisa membeli apel untuk mendapatkan kalium.",
        "Lina bisa membeli pisang untuk mendapatkan serat tinggi.",
        "Apel adalah satu-satunya buah rendah kalori.",
        "Jika Lina membeli apel, ia mendapat serat; jika pisang, ia mendapat kalium.",
        "Lina pasti membeli apel karena ingin diet."
      ],
      answerIndex: [3]
    },
    { //Soal 10
      txtField: "Untuk menjadi anggota klub sepak bola, seseorang harus berusia antara 15-20 tahun, memiliki kemampuan dasar sepak bola, dan bersedia latihan setiap sore. Roni berusia 17 tahun, belum pernah bermain sepak bola, tetapi bersedia latihan. Simpulan: Roni diterima menjadi anggota klub.",
      question: "Manakah pernyataan berikut yang menggambarkan kualitas simpulan tersebut?",
      options: [
        "Simpulan tersebut pasti benar.",
        "Simpulan tersebut mungkin benar.",
        "Simpulan tersebut pasti salah.",
        "Simpulan tidak relevan dengan informasi yang diberikan.",
        "Simpulan tidak dapat dinilai karena informasi tidak cukup."
      ],
      answerIndex: [2]
    }
  ]
}

const soalPUKuantitatif: ujianSession = {
  name: "Penalaran Umum - Penalaran Kuantitatif",
  description: "Ada 10 soal yang akan dikerjakan dalam 10 menit",
  duration: 10 * 60,
  questions: [
    { //Soal 1
      txtField: "Sebuah aplikasi pengiriman makanan mencatat jumlah pesanan setiap hari. Data pesanan pada hari Selasa hingga Sabtu berturut-turut adalah 120, 117, 122, 119, dan 124. Jika pola perubahan jumlah pesanan bersifat konstan (berulang) sejak hari Senin, maka jumlah pesanan pada hari Senin adalah ....",
      question: "Berapa jumlah pesanan pada hari Senin?",
      options: ["115", "117", "118", "119", "121"],
      answerIndex: [0]
    },
    { //Soal 2
      txtField: "Di sebuah peternakan, perbandingan jumlah sapi, kambing, dan domba adalah 5 : 3 : 2. Jika total jumlah hewan ternak tersebut adalah 150 ekor, maka jumlah kambing dan domba adalah ... ekor.",
      question: "Berapa jumlah kambing dan domba?",
      options: ["45", "60", "75", "90", "105"],
      answerIndex: [2]
    },
    { //Soal 3
      txtField: "Bilangan yang PALING MENDEKATI hasil penjumlahan 2,75 + 45,2% adalah ....",
      question: "Hasil penjumlahan tersebut mendekati?",
      options: ["3,02", "3,20", "3,21", "3,22", "3,23"],
      answerIndex: [1]
    },
    { //Soal 4
      txtField: "Berikut adalah data penjualan minuman di Kafe Segar dari hari Senin hingga Jumat.\n\nHari: Senin, Selasa, Rabu, Kamis, Jumat\nKopi: 30, 32, 34, 36, 38\nTeh: 25, 24, 23, 22, 21\nJus: 20, 22, 24, 26, 28",
      question: "Berdasarkan data tersebut, manakah pernyataan yang PALING TEPAT untuk menggambarkan kondisi penjualan minuman pada hari Sabtu?",
      options: [
        "Penjualan kopi akan menurun.",
        "Penjualan teh akan menurun.",
        "Penjualan jus akan menurun.",
        "Penjualan kopi akan lebih banyak daripada teh.",
        "Penjualan jus akan lebih banyak daripada kopi."
      ],
      answerIndex: [1]
    },
    { //Soal 5
      txtField: "Berdasarkan data pada soal nomor 24, pada hari apakah Kafe Segar memiliki persentase penjualan kopi PALING BESAR?",
      question: "Hari dengan persentase penjualan kopi terbesar?",
      options: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"],
      answerIndex: [4]
    },
    { //Soal 6
      txtField: "Tabel berikut menunjukkan data jumlah pelamar divisi keuangan di PT Sukses Selalu selama lima tahun.\n\nTahun 1: 40, Tahun 2: 45, Tahun 3: 55, Tahun 4: 60, Tahun 5: 70.\nJika total pelamar selama lima tahun tersebut adalah 270 orang, jumlah pelamar pada tahun-tahun yang tidak melebihi 20% dari total pelamar adalah ... orang.",
      question: "Jumlah pelamar pada tahun-tahun yang tidak melebihi 20% total?",
      options: ["80", "85", "90", "95", "100"],
      answerIndex: [1]
    },
    { //Soal 7
      txtField: "Sebuah toko roti mencatat stok roti selama 5 hari berturut-turut: 50, 53, 58, 65, 74. Pada periode yang sama, jumlah roti terjual adalah 30, 34, 39, 45, 52. Jika tren perubahan stok dan penjualan bersifat konstan, berapa sisa stok setelah penjualan pada hari ke-6?",
      question: "Sisa stok hari ke-6?",
      options: ["23", "24", "25", "26", "27"],
      answerIndex: [2]
    },
    { //Soal 8
      txtField: "Jumlah pengunjung museum pada hari Minggu 40% lebih tinggi daripada hari Sabtu. Jika pengunjung hari Minggu sebanyak 56 orang, maka pengunjung hari Sabtu adalah ... orang.",
      question: "Pengunjung hari Sabtu?",
      options: ["35", "38", "40", "42", "45"],
      answerIndex: [2]
    },
    { //Soal 9
      txtField: "Bacalah dua informasi berikut.\n(1) Rata-rata nilai ujian 15 siswa adalah 80.\n(2) Rata-rata nilai ujian seluruh siswa adalah 75.\nPilihlah informasi yang dapat digunakan untuk menjawab pertanyaan, \"Berapa jumlah nilai seluruh siswa?\"",
      question: "Informasi mana yang cukup?",
      options: [
        "Cukup (1) saja.",
        "Cukup (2) saja.",
        "Informasi (1) dan (2) bersama-sama.",
        "Menggunakan (1) saja atau (2) saja.",
        "Kedua informasi tidak cukup."
      ],
      answerIndex: [4]
    },
    { //Soal 10
      txtField: "Lima orang pedagang menjual dua jenis buah: mangga dan jeruk. Keuntungan jeruk adalah 1/3 dari keuntungan mangga. Berikut data penjualan masing-masing pedagang:\nPedagang: Ani, Budi, Cici, Dedi, Eka\nMangga (kg): 40, 45, 50, 55, 60\nJeruk (kg): 80, 70, 60, 50, 40\nPedagang manakah yang memperoleh keuntungan TERBESAR KEDUA?",
      question: "Pedagang dengan keuntungan terbesar kedua?",
      options: ["Ani", "Budi", "Cici", "Dedi", "Eka"],
      answerIndex: [3]
    }
  ]
}

const soalPPU: ujianSession = {
  name: "Pengetahuan dan Pemahaman Umum",
  description: "Ada 20 soal yang akan dikerjakan dalam 10 menit",
  duration: 10 * 60,
  questions: [
    { //Soal 1
      txtField: "(1) Peraturan Presiden Nomor 4 Tahun 2026 tentang Lahan Sawah Dilindungi diteken sebagai bentuk komitmen pemerintah menjaga kedaulatan pangan. (2) Regulasi ini bagaikan pisau bermata dua bagi industri properti. (3) Di satu sisi, kebijakan tersebut melindungi lahan pertanian produktif dari alih fungsi. (4) Di sisi lain, aturan ini berpotensi memperlebar backlog perumahan yang mencapai jutaan unit. (5) Para pengembang menilai pemetaan lahan sawah dilindungi kerap hanya berdasarkan citra satelit, tanpa verifikasi di lapangan. (6) Akibatnya, lahan yang sebenarnya tidak lagi produktif ikut terkunci dan tidak bisa dimanfaatkan untuk pembangunan perumahan rakyat. (7) Kondisi ini memicu perdebatan sengit antara kementerian terkait dan asosiasi pengembang.",
      question: "Kalimat yang tidak logis dalam bacaan tersebut adalah kalimat ....",
      options: ["(2)", "(3)", "(4)", "(5)", "(7)"],
      answerIndex: [2]
    },
    { //Soal 2
      txtField: "(1) Peraturan Presiden Nomor 4 Tahun 2026 tentang Lahan Sawah Dilindungi diteken sebagai bentuk komitmen pemerintah menjaga kedaulatan pangan. (2) Regulasi ini bagaikan pisau bermata dua bagi industri properti. (3) Di satu sisi, kebijakan tersebut melindungi lahan pertanian produktif dari alih fungsi. (4) Di sisi lain, aturan ini berpotensi memperlebar backlog perumahan yang mencapai jutaan unit. (5) Para pengembang menilai pemetaan lahan sawah dilindungi kerap hanya berdasarkan citra satelit, tanpa verifikasi di lapangan. (6) Akibatnya, lahan yang sebenarnya tidak lagi produktif ikut terkunci dan tidak bisa dimanfaatkan untuk pembangunan perumahan rakyat. (7) Kondisi ini memicu perdebatan sengit antara kementerian terkait dan asosiasi pengembang.",
      question: "Kata yang memiliki makna lebih luas dari kata properti dalam kalimat (2) adalah ….",
      options: ["rumah", "gedung", "real estat", "aset", "bangunan"],
      answerIndex: [3]
    },
    { //Soal 3
      txtField: "(1) Peraturan Presiden Nomor 4 Tahun 2026 tentang Lahan Sawah Dilindungi diteken sebagai bentuk komitmen pemerintah menjaga kedaulatan pangan. (2) Regulasi ini bagaikan pisau bermata dua bagi industri properti. (3) Di satu sisi, kebijakan tersebut melindungi lahan pertanian produktif dari alih fungsi. (4) Di sisi lain, aturan ini berpotensi memperlebar backlog perumahan yang mencapai jutaan unit. (5) Para pengembang menilai pemetaan lahan sawah dilindungi kerap hanya berdasarkan citra satelit, tanpa verifikasi di lapangan. (6) Akibatnya, lahan yang sebenarnya tidak lagi produktif ikut terkunci dan tidak bisa dimanfaatkan untuk pembangunan perumahan rakyat. (7) Kondisi ini memicu perdebatan sengit antara kementerian terkait dan asosiasi pengembang.",
      question: "Majas pada bacaan tersebut dapat ditemukan pada frasa kalimat….",
      options: ["(1)", "(2)", "(3)", "(4)", "(5)"],
      answerIndex: [1]
    },
    { //Soal 4
      txtField: "(1) Peraturan Presiden Nomor 4 Tahun 2026 tentang Lahan Sawah Dilindungi diteken sebagai bentuk komitmen pemerintah menjaga kedaulatan pangan. (2) Regulasi ini bagaikan pisau bermata dua bagi industri properti. (3) Di satu sisi, kebijakan tersebut melindungi lahan pertanian produktif dari alih fungsi. (4) Di sisi lain, aturan ini berpotensi memperlebar backlog perumahan yang mencapai jutaan unit. (5) Para pengembang menilai pemetaan lahan sawah dilindungi kerap hanya berdasarkan citra satelit, tanpa verifikasi di lapangan. (6) Akibatnya, lahan yang sebenarnya tidak lagi produktif ikut terkunci dan tidak bisa dimanfaatkan untuk pembangunan perumahan rakyat. (7) Kondisi ini memicu perdebatan sengit antara kementerian terkait dan asosiasi pengembang.",
      question: "Manakah kalimat dengan bentuk ber- berikut yang memiliki kesamaan makna dengan bentuk ber- pada kata berkembang dalam kalimat (7)?",
      options: [
        "Para petani itu berladang di lereng gunung.",
        "Ibu sedang berdandan di kamar.",
        "Paman bekerja sebagai kontraktor properti.",
        "Anak-anak bermain bola di lapangan.",
        "Mereka berunding untuk mencapai kesepakatan."
      ],
      answerIndex: [4]
    },
    { //Soal 5
      txtField: "(1) Pemerintah menargetkan pertumbuhan ekonomi Indonesia mencapai 8 persen dalam dua tahun ke depan. (2) Target ini disampaikan Menko Perekonomian Airlangga Hartarto dalam acara Indonesia Economic Outlook 2026. (3) Ia menganalogikan ekonomi seperti pesawat yang sejak 1998 selalu tertahan berbagai gangguan, namun kini siap lepas landas. (4) Mesin pertumbuhan akan terus digenjot melalui belanja pemerintah, investasi, serta Danantara sebagai sovereign wealth fund. (5) Dari sisi permintaan, konsumsi masyarakat dan ekspor menjadi penggerak utama. (6) Capaian ekonomi kuartal IV-2025 tumbuh 5,11 persen secara tahunan, menempatkan Indonesia di posisi kedua G20 setelah India. (7) Capaian ini ditopang konsumsi rumah tangga yang tumbuh 4,98 persen dan investasi 5,09 persen.",
      question: "Hubungan kata ekonomi dan kata investasi dalam bacaan ini sama dengan hubungan kata pesawat dan kata …",
      options: ["pilot", "sayap", "mesin", "bandara", "bahan bakar"],
      answerIndex: [2]
    },
    { //Soal 6
      txtField: "(1) Pemerintah menargetkan pertumbuhan ekonomi Indonesia mencapai 8 persen dalam dua tahun ke depan. (2) Target ini disampaikan Menko Perekonomian Airlangga Hartarto dalam acara Indonesia Economic Outlook 2026. (3) Ia menganalogikan ekonomi seperti pesawat yang sejak 1998 selalu tertahan berbagai gangguan, namun kini siap lepas landas. (4) Mesin pertumbuhan akan terus digenjot melalui belanja pemerintah, investasi, serta Danantara sebagai sovereign wealth fund. (5) Dari sisi permintaan, konsumsi masyarakat dan ekspor menjadi penggerak utama. (6) Capaian ekonomi kuartal IV-2025 tumbuh 5,11 persen secara tahunan, menempatkan Indonesia di posisi kedua G20 setelah India. (7) Capaian ini ditopang konsumsi rumah tangga yang tumbuh 4,98 persen dan investasi 5,09 persen.",
      question: "Frasa menempatkan Indonesia di posisi kedua G20 setelah India pada kalimat (6) dapat diperbaiki menjadi ….",
      options: [
        "kata menempatkan seharusnya ditempatkan",
        "kata posisi seharusnya memposisikan",
        "kata kedua seharusnya ke-dua",
        "kata setelah seharusnya sesudah",
        "kata India seharusnya negara India"
      ],
      answerIndex: [0]
    },
    { //Soal 7
      txtField: "(1) Pemerintah menargetkan pertumbuhan ekonomi Indonesia mencapai 8 persen dalam dua tahun ke depan. (2) Target ini disampaikan Menko Perekonomian Airlangga Hartarto dalam acara Indonesia Economic Outlook 2026. (3) Ia menganalogikan ekonomi seperti pesawat yang sejak 1998 selalu tertahan berbagai gangguan, namun kini siap lepas landas. (4) Mesin pertumbuhan akan terus digenjot melalui belanja pemerintah, investasi, serta Danantara sebagai sovereign wealth fund. (5) Dari sisi permintaan, konsumsi masyarakat dan ekspor menjadi penggerak utama. (6) Capaian ekonomi kuartal IV-2025 tumbuh 5,11 persen secara tahunan, menempatkan Indonesia di posisi kedua G20 setelah India. (7) Capaian ini ditopang konsumsi rumah tangga yang tumbuh 4,98 persen dan investasi 5,09 persen.",
      question: "Kata lepas landas pada kalimat (3) dalam bacaan tersebut paling dekat maknanya dengan kata ….",
      options: ["terbang", "melambung", "berkembang", "tumbuh pesat", "meninggi"],
      answerIndex: [3]
    },
    { //Soal 8
      txtField: "(1) Pemerintah menargetkan pertumbuhan ekonomi Indonesia mencapai 8 persen dalam dua tahun ke depan. (2) Target ini disampaikan Menko Perekonomian Airlangga Hartarto dalam acara Indonesia Economic Outlook 2026. (3) Ia menganalogikan ekonomi seperti pesawat yang sejak 1998 selalu tertahan berbagai gangguan, namun kini siap lepas landas. (4) Mesin pertumbuhan akan terus digenjot melalui belanja pemerintah, investasi, serta Danantara sebagai sovereign wealth fund. (5) Dari sisi permintaan, konsumsi masyarakat dan ekspor menjadi penggerak utama. (6) Capaian ekonomi kuartal IV-2025 tumbuh 5,11 persen secara tahunan, menempatkan Indonesia di posisi kedua G20 setelah India. (7) Capaian ini ditopang konsumsi rumah tangga yang tumbuh 4,98 persen dan investasi 5,09 persen.",
      question: "Kalimat Pemerintah menggenjot belanja negara pada kuartal pertama memiliki pola kalimat yang sama dengan kalimat ....",
      options: ["(1)", "(2)", "(3)", "(4)", "(5)"],
      answerIndex: [0]
    },
    { //Soal 9
      txtField: "(1) Lonjakan harga cip memori di pasar global berimbas pada industri ponsel pintar tanah air. (2) Perusahaan riset pasar menaikkan proyeksi harga cip memori menjadi 90-95 persen pada triwulan pertama 2026. (3) Kenaikan ini dipicu oleh permintaan infrastruktur pusat data untuk menjalankan teknologi kecerdasan buatan. (4) Produsen semikonduktor lebih memprioritaskan memasok cip untuk pusat data yang memiliki margin keuntungan lebih tinggi. (5) Konsekuensinya, pasokan cip untuk ponsel pintar kelas bawah terus menurun. (6) Associate market analyst IDC Indonesia menyatakan, situasi ini bakal memburuk pada paruh kedua 2026. (7) Akibatnya, siklus beli ponsel baru di kalangan konsumen Indonesia diperkirakan bakal semakin panjang 1-2 tahun.",
      question: "Kata dalam bacaan tersebut yang mengacu pada makna yang sebenarnya adalah ….",
      options: [
        "berimbas (kalimat 1)",
        "memicu (kalimat 3)",
        "memprioritaskan (kalimat 4)",
        "menurun (kalimat 5)",
        "memburuk (kalimat 6)"
      ],
      answerIndex: [3]
    },
    { //Soal 10
      txtField: "(1) Lonjakan harga cip memori di pasar global berimbas pada industri ponsel pintar tanah air. (2) Perusahaan riset pasar menaikkan proyeksi harga cip memori menjadi 90-95 persen pada triwulan pertama 2026. (3) Kenaikan ini dipicu oleh permintaan infrastruktur pusat data untuk menjalankan teknologi kecerdasan buatan. (4) Produsen semikonduktor lebih memprioritaskan memasok cip untuk pusat data yang memiliki margin keuntungan lebih tinggi. (5) Konsekuensinya, pasokan cip untuk ponsel pintar kelas bawah terus menurun. (6) Associate market analyst IDC Indonesia menyatakan, situasi ini bakal memburuk pada paruh kedua 2026. (7) Akibatnya, siklus beli ponsel baru di kalangan konsumen Indonesia diperkirakan bakal semakin panjang 1-2 tahun.",
      question: "Kata rentan dalam teks sebelumnya memiliki makna yang mirip dengan frasa dalam bacaan ini, yaitu ….",
      options: [
        "berimbas (kalimat 1)",
        "margin keuntungan (kalimat 4)",
        "terus menurun (kalimat 5)",
        "bakal memburuk (kalimat 6)",
        "semakin panjang (kalimat 7)"
      ],
      answerIndex: [3]
    },
    { //Soal 11
      txtField: "(1) Lonjakan harga cip memori di pasar global berimbas pada industri ponsel pintar tanah air. (2) Perusahaan riset pasar menaikkan proyeksi harga cip memori menjadi 90-95 persen pada triwulan pertama 2026. (3) Kenaikan ini dipicu oleh permintaan infrastruktur pusat data untuk menjalankan teknologi kecerdasan buatan. (4) Produsen semikonduktor lebih memprioritaskan memasok cip untuk pusat data yang memiliki margin keuntungan lebih tinggi. (5) Konsekuensinya, pasokan cip untuk ponsel pintar kelas bawah terus menurun. (6) Associate market analyst IDC Indonesia menyatakan, situasi ini bakal memburuk pada paruh kedua 2026. (7) Akibatnya, siklus beli ponsel baru di kalangan konsumen Indonesia diperkirakan bakal semakin panjang 1-2 tahun.",
      question: "Fungsi kata penghubung akibatnya dalam kalimat (7) adalah ....",
      options: [
        "menyatakan pertentangan dengan informasi sebelumnya",
        "menyatakan kebalikan dari informasi sebelumnya",
        "menjelaskan hubungan sebab-akibat",
        "menyatakan kelanjutan dari informasi sebelumnya",
        "menyatakan konsekuensi logis dari informasi sebelumnya"
      ],
      answerIndex: [4]
    },
    { //Soal 12
      txtField: "(1) Lonjakan harga cip memori di pasar global berimbas pada industri ponsel pintar tanah air. (2) Perusahaan riset pasar menaikkan proyeksi harga cip memori menjadi 90-95 persen pada triwulan pertama 2026. (3) Kenaikan ini dipicu oleh permintaan infrastruktur pusat data untuk menjalankan teknologi kecerdasan buatan. (4) Produsen semikonduktor lebih memprioritaskan memasok cip untuk pusat data yang memiliki margin keuntungan lebih tinggi. (5) Konsekuensinya, pasokan cip untuk ponsel pintar kelas bawah terus menurun. (6) Associate market analyst IDC Indonesia menyatakan, situasi ini bakal memburuk pada paruh kedua 2026. (7) Akibatnya, siklus beli ponsel baru di kalangan konsumen Indonesia diperkirakan bakal semakin panjang 1-2 tahun.",
      question: "Pandangan penulis terhadap dampak lonjakan harga cip memori adalah …",
      options: [
        "sangat optimistis",
        "sangat pesimistis",
        "cukup khawatir",
        "tidak berpihak",
        "kurang peduli"
      ],
      answerIndex: [3]
    },
    { //Soal 13
      txtField: "(1) Masyarakat adat Kasepuhan di Banten hidup dengan kearifan lokal dalam mengelola hutan dan lahan pertanian. (2) Rumah panggung mereka mencerminkan kearifan tersebut, dengan konstruksi kayu tanpa paku dan pembagian ruang berdasarkan fungsi sosial. (3) Secara etnografis, rumah tradisional Kasepuhan merepresentasikan hubungan harmonis antara manusia dan alam. (4) Secara vertikal, [...] rumah [...] memiliki tiang utama, lantai papan, dinding anyaman bambu, dan atap daun nipah. (5) Bagian-bagian tersebut dikategorikan menjadi tiga zona, yaitu kolong, ruang hunian, dan loteng. (6) Relasi antarzona ini diasosiasikan dengan strata ekologis, yaitu dunia bawah, dunia tengah, dan dunia atas. (7) Sementara itu, secara horizontal, ruang dalam rumah terbagi atas area menerima tamu, area tidur, dan area dapur.",
      question: "Kelompok kata berpasangan tetap dalam bacaan tersebut adalah …",
      options: [
        "masyarakat adat (kalimat 1)",
        "kearifan lokal (kalimat 1)",
        "rumah panggung (kalimat 2)",
        "tiang utama (kalimat 4)",
        "dunia tengah (kalimat 6)"
      ],
      answerIndex: [1]
    },
    { //Soal 14
      txtField: "(1) Masyarakat adat Kasepuhan di Banten hidup dengan kearifan lokal dalam mengelola hutan dan lahan pertanian. (2) Rumah panggung mereka mencerminkan kearifan tersebut, dengan konstruksi kayu tanpa paku dan pembagian ruang berdasarkan fungsi sosial. (3) Secara etnografis, rumah tradisional Kasepuhan merepresentasikan hubungan harmonis antara manusia dan alam. (4) Secara vertikal, [...] rumah [...] memiliki tiang utama, lantai papan, dinding anyaman bambu, dan atap daun nipah. (5) Bagian-bagian tersebut dikategorikan menjadi tiga zona, yaitu kolong, ruang hunian, dan loteng. (6) Relasi antarzona ini diasosiasikan dengan strata ekologis, yaitu dunia bawah, dunia tengah, dan dunia atas. (7) Sementara itu, secara horizontal, ruang dalam rumah terbagi atas area menerima tamu, area tidur, dan area dapur.",
      question: "Kalimat (4) dalam bacaan tersebut akan menjadi bermakna apabila dilengkapi dengan kata-kata ….",
      options: [
        "konstruksi; dengan",
        "bangunan; pada",
        "bagian; dari",
        "tiang; sebagai",
        "ruang; oleh"
      ],
      answerIndex: [2]
    },
    { //Soal 15
      txtField: "(1) Masyarakat adat Kasepuhan di Banten hidup dengan kearifan lokal dalam mengelola hutan dan lahan pertanian. (2) Rumah panggung mereka mencerminkan kearifan tersebut, dengan konstruksi kayu tanpa paku dan pembagian ruang berdasarkan fungsi sosial. (3) Secara etnografis, rumah tradisional Kasepuhan merepresentasikan hubungan harmonis antara manusia dan alam. (4) Secara vertikal, [...] rumah [...] memiliki tiang utama, lantai papan, dinding anyaman bambu, dan atap daun nipah. (5) Bagian-bagian tersebut dikategorikan menjadi tiga zona, yaitu kolong, ruang hunian, dan loteng. (6) Relasi antarzona ini diasosiasikan dengan strata ekologis, yaitu dunia bawah, dunia tengah, dan dunia atas. (7) Sementara itu, secara horizontal, ruang dalam rumah terbagi atas area menerima tamu, area tidur, dan area dapur.",
      question: "Sesuai dengan konteks dalam bacaan tersebut, kata harmonis dalam kalimat (3) memiliki makna yang berlawanan dengan kata ....",
      options: ["selaras", "serasi", "timpang", "seimbang", "cocok"],
      answerIndex: [2]
    },
    { //Soal 16
      txtField: "(1) Masyarakat adat Kasepuhan di Banten hidup dengan kearifan lokal dalam mengelola hutan dan lahan pertanian. (2) Rumah panggung mereka mencerminkan kearifan tersebut, dengan konstruksi kayu tanpa paku dan pembagian ruang berdasarkan fungsi sosial. (3) Secara etnografis, rumah tradisional Kasepuhan merepresentasikan hubungan harmonis antara manusia dan alam. (4) Secara vertikal, [...] rumah [...] memiliki tiang utama, lantai papan, dinding anyaman bambu, dan atap daun nipah. (5) Bagian-bagian tersebut dikategorikan menjadi tiga zona, yaitu kolong, ruang hunian, dan loteng. (6) Relasi antarzona ini diasosiasikan dengan strata ekologis, yaitu dunia bawah, dunia tengah, dan dunia atas. (7) Sementara itu, secara horizontal, ruang dalam rumah terbagi atas area menerima tamu, area tidur, dan area dapur.",
      question: "Kalimat manakah yang dapat mengungkapkan kembali gagasan dalam kalimat (3)?",
      options: [
        "Secara etnografis, hubungan harmonis manusia dan alam digambarkan oleh rumah tradisional Kesepuhan.",
        "Rumah tradisional Kesepuhan dan hubungan harmonis tecermin secara etnografis.",
        "Rumah tradisional Kesepuhan direpresentasikan secara etnografis oleh hubungan harmonis.",
        "Hubungan harmonis manusia dan alam secara etnografis terlihat sama dengan rumah Kasepuhan.",
        "Rumah tradisional Kesepuhan secara etnografis menggambarkan hubungan harmonis manusia dan alam."
      ],
      answerIndex: [4]
    },
    { //Soal 17
      txtField: "(1) Kebun Raya Itera di Lampung menjadi benteng pelestarian flora khas Sumatera. (2) Dua di antaranya adalah gaharu dan kantong semar yang kini langka di habitat aslinya. (3) Sebelum kebun raya hadir, kedua tanaman itu banyak diburu untuk diperdagangkan secara ilegal. (4) Kini, gaharu dan kantong semar mulai terawat dan dikembangbiakkan oleh para peneliti. (5) Gaharu hanya bisa tumbuh di dataran rendah, sedangkan kantong semar lebih adaptif di berbagai ketinggian. (6) Tidak jarang, pengunjung kebun raya baru pertama kali melihat langsung bentuk tanaman tersebut. (7) Kondisi ini menunjukkan betapa pentingnya peran kebun raya dalam edukasi konservasi. (8) Beberapa penelitian menunjukkan bahwa manfaat gaharu dan kantong semar tidak hanya sebagai tanaman hias. (9) Keduanya sama-sama berpotensi sebagai bahan obat tradisional. (10) Gaharu mengandung senyawa aromatik yang digunakan dalam industri wewangian dan (11) kantong semar dimanfaatkan sebagai obat mata.",
      question: "Kelompok kata dalam bacaan tersebut yang memiliki pola makna sama dengan tanaman hias adalah ....",
      options: [
        "habitat asli (kalimat 2)",
        "tanaman langka (kalimat 2)",
        "bahan obat (kalimat 9)",
        "wewangian (kalimat 10)",
        "obat mata (kalimat 11)"
      ],
      answerIndex: [2]
    },
    { //Soal 18
      txtField: "(1) Kebun Raya Itera di Lampung menjadi benteng pelestarian flora khas Sumatera. (2) Dua di antaranya adalah gaharu dan kantong semar yang kini langka di habitat aslinya. (3) Sebelum kebun raya hadir, kedua tanaman itu banyak diburu untuk diperdagangkan secara ilegal. (4) Kini, gaharu dan kantong semar mulai terawat dan dikembangbiakkan oleh para peneliti. (5) Gaharu hanya bisa tumbuh di dataran rendah, sedangkan kantong semar lebih adaptif di berbagai ketinggian. (6) Tidak jarang, pengunjung kebun raya baru pertama kali melihat langsung bentuk tanaman tersebut. (7) Kondisi ini menunjukkan betapa pentingnya peran kebun raya dalam edukasi konservasi. (8) Beberapa penelitian menunjukkan bahwa manfaat gaharu dan kantong semar tidak hanya sebagai tanaman hias. (9) Keduanya sama-sama berpotensi sebagai bahan obat tradisional. (10) Gaharu mengandung senyawa aromatik yang digunakan dalam industri wewangian dan (11) kantong semar dimanfaatkan sebagai obat mata.",
      question: "Kata yang tepat di awal paragraf dua untuk menghubungkan kedua paragraf pada bacaan adalah ….",
      options: [
        "oleh karena itu",
        "di samping itu",
        "namun demikian",
        "dengan kata lain",
        "sehubungan dengan hal tersebut"
      ],
      answerIndex: [1]
    },
    { //Soal 19
      txtField: "(1) Kebun Raya Itera di Lampung menjadi benteng pelestarian flora khas Sumatera. (2) Dua di antaranya adalah gaharu dan kantong semar yang kini langka di habitat aslinya. (3) Sebelum kebun raya hadir, kedua tanaman itu banyak diburu untuk diperdagangkan secara ilegal. (4) Kini, gaharu dan kantong semar mulai terawat dan dikembangbiakkan oleh para peneliti. (5) Gaharu hanya bisa tumbuh di dataran rendah, sedangkan kantong semar lebih adaptif di berbagai ketinggian. (6) Tidak jarang, pengunjung kebun raya baru pertama kali melihat langsung bentuk tanaman tersebut. (7) Kondisi ini menunjukkan betapa pentingnya peran kebun raya dalam edukasi konservasi. (8) Beberapa penelitian menunjukkan bahwa manfaat gaharu dan kantong semar tidak hanya sebagai tanaman hias. (9) Keduanya sama-sama berpotensi sebagai bahan obat tradisional. (10) Gaharu mengandung senyawa aromatik yang digunakan dalam industri wewangian dan (11) kantong semar dimanfaatkan sebagai obat mata.",
      question: "Ungkapan kedua tanaman itu banyak diburu untuk diperdagangkan secara ilegal pada kalimat (3) dapat disempurnakan menjadi ….",
      options: [
        "gaharu dan kantong semar banyak diburu untuk diperdagangkan secara ilegal",
        "para pemburu memperdagangkan gaharu dan kantong semar secara ilegal",
        "tanaman itu banyak diburu oleh pedagang ilegal",
        "gaharu dan kantong semar yang banyak diburu untuk diperdagangkan secara ilegal",
        "kedua tanaman itu banyak diburu dan diperdagangkan secara ilegal"
      ],
      answerIndex: [4]
    },
    { //Soal 20
      txtField: "Nenek memasak nasi \"Sega kukus bumbung\". Kakek menanam jagung \"Jagung tandur cangkul\". Nasi dimasak Kakek \"Sega cangkul kukus\". Bagaimana mengatakan \"Jagung ditanam Nenek\" dengan bahasa tersebut?",
      question: "Ungkapan yang tepat adalah?",
      options: [
        "Jagung bumbung tandur.",
        "Jagung kukus tandur.",
        "Jagung tandur kukus.",
        "Sega kukus tandur.",
        "Tandur bumbung jagung"
      ],
      answerIndex: [0]
    }
  ],
}

const soalPBM: ujianSession = {
  name: "Kemampuan Memahami Bacaan dan Menulis",
  description: "Ada 20 soal yang akan dikerjakan dalam 15 menit",
  duration: 15 * 60,
  questions: [
    { //Soal 1
      txtField: "(1) Seekor gajah Sumatra ditemukan mati dalam kondisi mengenaskan tanpa kepala di area konsesi hutan tanaman industri di Kabupaten Pelalawan, Provinsi Riau. (2) Bangkai satwa dengan nama Latin Elephas maximus sumatranus itu ditemukan pada 2 Februari 2026 di Distrik Ukui, Desa Lubuk Kembang Bunga, Kecamatan Ukui. (3) Kepala Balai Besar Konservasi Sumber Daya Alam (BBKSDA) Riau Supartono menegaskan bahwa kematian gajah tersebut merupakan peristiwa yang sangat serius. (4) Menurutnya kejahatan terhadap gajah sama dengan kejahatan terhadap negara dan masa depan keanekaragaman hayati Indonesia. (5) Hilangnya bagian kepala menjadi indikasi kuat adanya perburuan liar. (6) Gajah tersebut diduga diburu untuk diambil gadingnya.",
      question: "Perbaikan kalimat (2) yang paling tepat sesuai kaidah penulisan istilah ilmiah dan tanda baca adalah ...",
      options: [
        "Bangkai satwa dengan nama Latin Elephas maximus sumatranus itu ditemukan pada 2 Februari 2026 di Distrik Ukui, Desa Lubuk Kembang Bunga, Kecamatan Ukui.",
        "Bangkai satwa dengan nama latin Elephas maximus sumatranus itu ditemukan pada 2 Februari 2026, di Distrik Ukui, Desa Lubuk Kembang Bunga, Kecamatan Ukui.",
        "Bangkai satwa dengan nama Latin Elephas Maximus Sumatranus itu ditemukan pada 2 Februari 2026 di Distrik Ukui, Desa Lubuk Kembang Bunga, Kecamatan Ukui.",
        "Bangkai satwa dengan nama Latin Elephas maximus sumatranus itu ditemukan pada 2 Februari 2026 di Distrik Ukui, Desa Lubuk Kembang Bunga, Kecamatan Ukui.",
        "Bangkai satwa dengan nama Latin Elephas maximus sumatranus itu ditemukan pada 2 Februari, 2026 di Distrik Ukui, Desa Lubuk Kembang Bunga Kecamatan Ukui."
      ],
      answerIndex: [0]
    },
    { //Soal 2
      txtField: "(1) Seekor gajah Sumatra ditemukan mati dalam kondisi mengenaskan tanpa kepala di area konsesi hutan tanaman industri di Kabupaten Pelalawan, Provinsi Riau. (2) Bangkai satwa dengan nama Latin Elephas maximus sumatranus itu ditemukan pada 2 Februari 2026 di Distrik Ukui, Desa Lubuk Kembang Bunga, Kecamatan Ukui. (3) Kepala Balai Besar Konservasi Sumber Daya Alam (BBKSDA) Riau Supartono menegaskan bahwa kematian gajah tersebut merupakan peristiwa yang sangat serius. (4) Menurutnya kejahatan terhadap gajah sama dengan kejahatan terhadap negara dan masa depan keanekaragaman hayati Indonesia. (5) Hilangnya bagian kepala menjadi indikasi kuat adanya perburuan liar. (6) Gajah tersebut diduga diburu untuk diambil gadingnya.",
      question: "Ketidakefektifan kalimat (3) terutama disebabkan oleh …",
      options: [
        "penggunaan frasa yang terlalu panjang",
        "tidak adanya koma pada unsur aposisi",
        "pemilihan diksi yang kurang tepat",
        "pengulangan informasi yang tidak perlu"
      ],
      answerIndex: [1]
    },
    { //Soal 3
      txtField: "(1) Seekor gajah Sumatra ditemukan mati dalam kondisi mengenaskan tanpa kepala di area konsesi hutan tanaman industri di Kabupaten Pelalawan, Provinsi Riau. (2) Bangkai satwa dengan nama Latin Elephas maximus sumatranus itu ditemukan pada 2 Februari 2026 di Distrik Ukui, Desa Lubuk Kembang Bunga, Kecamatan Ukui. (3) Kepala Balai Besar Konservasi Sumber Daya Alam (BBKSDA) Riau Supartono menegaskan bahwa kematian gajah tersebut merupakan peristiwa yang sangat serius. (4) Menurutnya kejahatan terhadap gajah sama dengan kejahatan terhadap negara dan masa depan keanekaragaman hayati Indonesia. (5) Hilangnya bagian kepala menjadi indikasi kuat adanya perburuan liar. (6) Gajah tersebut diduga diburu untuk diambil gadingnya.",
      question: "Perbaikan paling tepat untuk kalimat (4) agar sesuai kaidah adalah …",
      options: [
        "Menurutnya, kejahatan terhadap gajah sama dengan kejahatan terhadap negara dan masa depan keanekaragaman hayati Indonesia.",
        "Menurutnya kejahatan terhadap gajah, sama dengan kejahatan terhadap negara dan masa depan keanekaragaman hayati Indonesia.",
        "Menurutnya, kejahatan terhadap gajah, sama dengan kejahatan terhadap negara dan masa depan keanekaragaman hayati Indonesia.",
        "Menurutnya kejahatan terhadap gajah sama dengan kejahatan terhadap negara, dan masa depan keanekaragaman hayati Indonesia.",
        "Menurutnya kejahatan terhadap gajah sama dengan kejahatan terhadap negara dan, masa depan keanekaragaman hayati Indonesia."
      ],
      answerIndex: [0]
    },
    { //Soal 4
      txtField: "(1) Seekor gajah Sumatra ditemukan mati dalam kondisi mengenaskan tanpa kepala di area konsesi hutan tanaman industri di Kabupaten Pelalawan, Provinsi Riau. (2) Bangkai satwa dengan nama Latin Elephas maximus sumatranus itu ditemukan pada 2 Februari 2026 di Distrik Ukui, Desa Lubuk Kembang Bunga, Kecamatan Ukui. (3) Kepala Balai Besar Konservasi Sumber Daya Alam (BBKSDA) Riau Supartono menegaskan bahwa kematian gajah tersebut merupakan peristiwa yang sangat serius. (4) Menurutnya kejahatan terhadap gajah sama dengan kejahatan terhadap negara dan masa depan keanekaragaman hayati Indonesia. (5) Hilangnya bagian kepala menjadi indikasi kuat adanya perburuan liar. (6) Gajah tersebut diduga diburu untuk diambil gadingnya.",
      question: "Penggabungan kalimat (5) dan (6) yang paling tepat dan menunjukkan relasi makna yang logis adalah …",
      options: [
        "Hilangnya bagian kepala menjadi indikasi kuat adanya perburuan liar dan gajah tersebut diduga diburu untuk diambil gadingnya.",
        "Hilangnya bagian kepala menjadi indikasi kuat adanya perburuan liar karena gajah tersebut diduga diburu untuk diambil gadingnya.",
        "Hilangnya bagian kepala menjadi indikasi kuat adanya perburuan liar, sehingga gajah tersebut diduga diburu untuk diambil gadingnya.",
        "Hilangnya bagian kepala menjadi indikasi kuat adanya perburuan liar; oleh karena itu, gajah tersebut diduga diburu untuk diambil gadingnya.",
        "Hilangnya bagian kepala menjadi indikasi kuat adanya perburuan liar, tetapi gajah tersebut diduga diburu untuk diambil gadingnya."
      ],
      answerIndex: [2]
    },
    { //Soal 5
      txtField: "(1) Kondisi tersebut menunjukkan bahwa literasi digital tidak cukup hanya diajarkan secara teoretis di sekolah. (2) Dalam beberapa tahun terakhir, penyebaran informasi palsu di media sosial meningkat secara signifikan. (3) Oleh karena itu, diperlukan kemampuan berpikir kritis agar masyarakat mampu memilah informasi sebelum membagikannya. (4) Banyak pengguna internet yang langsung menyebarkan berita tanpa memeriksa kebenarannya terlebih dahulu. (5) Pendidikan literasi digital yang aplikatif dan berkelanjutan menjadi salah satu solusi yang dapat diterapkan.",
      question: "Urutan kalimat yang tepat agar menjadi paragraf yang padu adalah …",
      options: [
        "2, 4, 1, 3, 5",
        "2, 1, 4, 3, 5",
        "4, 2, 1, 3, 5",
        "2, 4, 3, 1, 5",
        "4, 1, 2, 3, 5"
      ],
      answerIndex: [0]
    },
    { //Soal 6
      txtField: "(1) Literasi digital adalah kemampuan seseorang dalam menemukan, mengevaluasi, memanfaatkan, membuat, dan mengomunikasikan konten atau informasi melalui teknologi digital secara efektif dan bertanggung jawab. (2) Kemampuan ini penting karena sekarang banyak informasi tersebar di internet, sehingga setiap individu perlu berpikir kritis untuk membedakan mana yang benar atau tidak. (3) Literasi digital juga mencakup etika digital, seperti berinteraksi dengan sopan dalam ruang maya dan menghormati hak orang lain. (4) Dengan literasi digital, seseorang dapat memanfaatkan teknologi untuk tujuan positif serta mengurangi dampak negatif penyebaran informasi buruk atau hoaks. (5) Literasi digital bertujuan untuk [...]. (6) Maka itu, pendidikan dan pelatihan literasi digital perlu diperlukan ke berbagai kalangan masyarakat agar keterampilan ini tidak hanya dimiliki oleh sebagian orang.",
      question: "Penulisan tanda baca yang tidak tepat pada teks tersebut terdapat pada kalimat nomor",
      options: ["1", "2", "3", "4", "5"],
      answerIndex: [3]
    },
    { //Soal 7
      txtField: "(1) Literasi digital adalah kemampuan seseorang dalam menemukan, mengevaluasi, memanfaatkan, membuat, dan mengomunikasikan konten atau informasi melalui teknologi digital secara efektif dan bertanggung jawab. (2) Kemampuan ini penting karena sekarang banyak informasi tersebar di internet, sehingga setiap individu perlu berpikir kritis untuk membedakan mana yang benar atau tidak. (3) Literasi digital juga mencakup etika digital, seperti berinteraksi dengan sopan dalam ruang maya dan menghormati hak orang lain. (4) Dengan literasi digital, seseorang dapat memanfaatkan teknologi untuk tujuan positif serta mengurangi dampak negatif penyebaran informasi buruk atau hoaks. (5) Literasi digital bertujuan untuk [...]. (6) Maka itu, pendidikan dan pelatihan literasi digital perlu diperlukan ke berbagai kalangan masyarakat agar keterampilan ini tidak hanya dimiliki oleh sebagian orang.",
      question: "Kalimat manakah yang isinya sama dengan kalimat (1)?",
      options: [
        "Penggunaan teknologi digital di sekolah perlu ditingkatkan secara merata sebagaimana disampaikan oleh Menteri Pendidikan, Nadiem Makarim.",
        "Menteri Pendidikan, Nadiem Makarim, menyatakan bahwa seluruh sekolah sudah menerapkan teknologi digital secara merata.",
        "Nadiem Makarim berpendapat bahwa teknologi digital di sekolah hanya perlu dikembangkan di wilayah perkotaan.",
        "Teknologi digital di sekolah dinilai tidak terlalu penting oleh Menteri Pendidikan.",
        "Menteri Pendidikan menyampaikan bahwa teknologi digital di sekolah tidak harus diterapkan secara merata."
      ],
      answerIndex: [0]
    },
    { //Soal 8
      txtField: "(1) Literasi digital adalah kemampuan seseorang dalam menemukan, mengevaluasi, memanfaatkan, membuat, dan mengomunikasikan konten atau informasi melalui teknologi digital secara efektif dan bertanggung jawab. (2) Kemampuan ini penting karena sekarang banyak informasi tersebar di internet, sehingga setiap individu perlu berpikir kritis untuk membedakan mana yang benar atau tidak. (3) Literasi digital juga mencakup etika digital, seperti berinteraksi dengan sopan dalam ruang maya dan menghormati hak orang lain. (4) Dengan literasi digital, seseorang dapat memanfaatkan teknologi untuk tujuan positif serta mengurangi dampak negatif penyebaran informasi buruk atau hoaks. (5) Literasi digital bertujuan untuk [...]. (6) Maka itu, pendidikan dan pelatihan literasi digital perlu diperlukan ke berbagai kalangan masyarakat agar keterampilan ini tidak hanya dimiliki oleh sebagian orang.",
      question: "Kata maka dalam kalimat (6) seharusnya . . .",
      options: [
        "dibiarkan saja karena sudah tepat",
        "dihilangkan",
        "diganti dengan kata sehingga",
        "ditulis dengan huruf kapital",
        "diikuti tanda koma di belakangnya"
      ],
      answerIndex: [1]
    },
    { //Soal 9
      txtField: "(1) Literasi digital adalah kemampuan seseorang dalam menemukan, mengevaluasi, memanfaatkan, membuat, dan mengomunikasikan konten atau informasi melalui teknologi digital secara efektif dan bertanggung jawab. (2) Kemampuan ini penting karena sekarang banyak informasi tersebar di internet, sehingga setiap individu perlu berpikir kritis untuk membedakan mana yang benar atau tidak. (3) Literasi digital juga mencakup etika digital, seperti berinteraksi dengan sopan dalam ruang maya dan menghormati hak orang lain. (4) Dengan literasi digital, seseorang dapat memanfaatkan teknologi untuk tujuan positif serta mengurangi dampak negatif penyebaran informasi buruk atau hoaks. (5) Literasi digital bertujuan untuk [...]. (6) Maka itu, pendidikan dan pelatihan literasi digital perlu diperlukan ke berbagai kalangan masyarakat agar keterampilan ini tidak hanya dimiliki oleh sebagian orang.",
      question: "Apa judul yang paling tepat untuk teks tersebut?",
      options: [
        "Literasi Digital dan Keterampilan Abad 21",
        "Pentingnya Literasi Digital di Era Informasi",
        "Etika Digital dalam Interaksi Sosial",
        "Manfaat Teknologi Digital untuk Semua",
        "Dampak Negatif Internet bagi Masyarakat"
      ],
      answerIndex: [1]
    },
    { //Soal 10
      txtField: "(1) Literasi digital adalah kemampuan seseorang dalam menemukan, mengevaluasi, memanfaatkan, membuat, dan mengomunikasikan konten atau informasi melalui teknologi digital secara efektif dan bertanggung jawab. (2) Kemampuan ini penting karena sekarang banyak informasi tersebar di internet, sehingga setiap individu perlu berpikir kritis untuk membedakan mana yang benar atau tidak. (3) Literasi digital juga mencakup etika digital, seperti berinteraksi dengan sopan dalam ruang maya dan menghormati hak orang lain. (4) Dengan literasi digital, seseorang dapat memanfaatkan teknologi untuk tujuan positif serta mengurangi dampak negatif penyebaran informasi buruk atau hoaks. (5) Literasi digital bertujuan untuk [...]. (6) Maka itu, pendidikan dan pelatihan literasi digital perlu diperlukan ke berbagai kalangan masyarakat agar keterampilan ini tidak hanya dimiliki oleh sebagian orang.",
      question: "Manakah yang paling tepat sebagai kalimat inti dari kalimat (2)?",
      options: [
        "Informasi di internet sangat banyak",
        "Setiap individu perlu berpikir kritis",
        "Literasi digital penting untuk dibahas",
        "Internet sering menimbulkan hoaks",
        "Ketidakbenaran informasi harus dihindari"
      ],
      answerIndex: [2]
    },
    { //Soal 11
      txtField: "(1) Literasi digital adalah kemampuan seseorang dalam menemukan, mengevaluasi, memanfaatkan, membuat, dan mengomunikasikan konten atau informasi melalui teknologi digital secara efektif dan bertanggung jawab. (2) Kemampuan ini penting karena sekarang banyak informasi tersebar di internet, sehingga setiap individu perlu berpikir kritis untuk membedakan mana yang benar atau tidak. (3) Literasi digital juga mencakup etika digital, seperti berinteraksi dengan sopan dalam ruang maya dan menghormati hak orang lain. (4) Dengan literasi digital, seseorang dapat memanfaatkan teknologi untuk tujuan positif serta mengurangi dampak negatif penyebaran informasi buruk atau hoaks. (5) Literasi digital bertujuan untuk [...]. (6) Maka itu, pendidikan dan pelatihan literasi digital perlu diperlukan ke berbagai kalangan masyarakat agar keterampilan ini tidak hanya dimiliki oleh sebagian orang.",
      question: "Kata yang paling tepat untuk mengganti kata efektif dalam kalimat (1) adalah …",
      options: ["terampil", "produktif", "cermat", "kreatif", "bijak"],
      answerIndex: [4]
    },
    { //Soal 12
      txtField: "(1) Literasi digital adalah kemampuan seseorang dalam menemukan, mengevaluasi, memanfaatkan, membuat, dan mengomunikasikan konten atau informasi melalui teknologi digital secara efektif dan bertanggung jawab. (2) Kemampuan ini penting karena sekarang banyak informasi tersebar di internet, sehingga setiap individu perlu berpikir kritis untuk membedakan mana yang benar atau tidak. (3) Literasi digital juga mencakup etika digital, seperti berinteraksi dengan sopan dalam ruang maya dan menghormati hak orang lain. (4) Dengan literasi digital, seseorang dapat memanfaatkan teknologi untuk tujuan positif serta mengurangi dampak negatif penyebaran informasi buruk atau hoaks. (5) Literasi digital bertujuan untuk [...]. (6) Maka itu, pendidikan dan pelatihan literasi digital perlu diperlukan ke berbagai kalangan masyarakat agar keterampilan ini tidak hanya dimiliki oleh sebagian orang.",
      question: "Pernyataan yang paling tepat untuk melengkapi kalimat (5) adalah …",
      options: [
        "membantu individu menggunakan teknologi dengan bijak",
        "mengurangi penggunaan internet di kalangan anak",
        "menggantikan pendidikan formal dengan pelatihan digital",
        "menjadikan teknologi sebagai gaya hidup utama",
        "membatasi penyebaran informasi internasional"
      ],
      answerIndex: [0]
    },
    { //Soal 13
      txtField: "(1) Bank sampah tidak hanya berfungsi sebagai tempat pengelolaan limbah, tetapi juga mampu meningkatkan perekonomian warga. (2) Salah satu wilayah yang berhasil mengembangkan program tersebut adalah Kampung Berseri di Surabaya, Jawa Timur. (3) Program ini mendorong masyarakat untuk memilah sampah sejak dari rumah tangga. (4) Sampah anorganik seperti plastik dan kertas dikumpulkan, ditimbang, lalu dicatat sebagai tabungan warga. (5) Selain itu, sampah organik diolah menjadi kompos yang dimanfaatkan untuk pertanian dan penghijauan lingkungan. (6) Kegiatan tersebut tidak hanya berdampak pada kebersihan lingkungan, tetapi juga memperkuat solidaritas Sosial antarwarga. (7) Bahkan, beberapa produk hasil daur ulang berhasil dipasarkan hingga ke luar kota. (8) Keberhasilan ini menunjukkan bahwa pengelolaan sampah berbasis komunitas memiliki peluang besar untuk dikembangkan secara berkelanjutan. (9) Dengan dukungan pemerintah dan partisipasi aktif masyarakat, program bank sampah dapat menjadi solusi atas permasalahan lingkungan di perkotaan.",
      question: "Penggunaan kata bercetak tebal yang tidak tepat terdapat pada kalimat nomor …",
      options: ["(2)", "(3)", "(6)", "(7)", "(8)"],
      answerIndex: [2]
    },
    { //Soal 14
      txtField: "(1) Bank sampah tidak hanya berfungsi sebagai tempat pengelolaan limbah, tetapi juga mampu meningkatkan perekonomian warga. (2) Salah satu wilayah yang berhasil mengembangkan program tersebut adalah Kampung Berseri di Surabaya, Jawa Timur. (3) Program ini mendorong masyarakat untuk memilah sampah sejak dari rumah tangga. (4) Sampah anorganik seperti plastik dan kertas dikumpulkan, ditimbang, lalu dicatat sebagai tabungan warga. (5) Selain itu, sampah organik diolah menjadi kompos yang dimanfaatkan untuk pertanian dan penghijauan lingkungan. (6) Kegiatan tersebut tidak hanya berdampak pada kebersihan lingkungan, tetapi juga memperkuat solidaritas Sosial antarwarga. (7) Bahkan, beberapa produk hasil daur ulang berhasil dipasarkan hingga ke luar kota. (8) Keberhasilan ini menunjukkan bahwa pengelolaan sampah berbasis komunitas memiliki peluang besar untuk dikembangkan secara berkelanjutan. (9) Dengan dukungan pemerintah dan partisipasi aktif masyarakat, program bank sampah dapat menjadi solusi atas permasalahan lingkungan di perkotaan.",
      question: "Kalimat berikut perlu dimasukkan dalam bacaan tersebut. \"Program ini juga membuka lapangan kerja baru bagi warga sekitar melalui pengelolaan dan pemasaran produk daur ulang.\" Kalimat tersebut paling tepat ditempatkan setelah kalimat nomor …",
      options: ["(2)", "(4)", "(5)", "(6)", "(8)"],
      answerIndex: [3]
    },
    { //Soal 15
      txtField: "(1) Bank sampah tidak hanya berfungsi sebagai tempat pengelolaan limbah, tetapi juga mampu meningkatkan perekonomian warga. (2) Salah satu wilayah yang berhasil mengembangkan program tersebut adalah Kampung Berseri di Surabaya, Jawa Timur. (3) Program ini mendorong masyarakat untuk memilah sampah sejak dari rumah tangga. (4) Sampah anorganik seperti plastik dan kertas dikumpulkan, ditimbang, lalu dicatat sebagai tabungan warga. (5) Selain itu, sampah organik diolah menjadi kompos yang dimanfaatkan untuk pertanian dan penghijauan lingkungan. (6) Kegiatan tersebut tidak hanya berdampak pada kebersihan lingkungan, tetapi juga memperkuat solidaritas Sosial antarwarga. (7) Bahkan, beberapa produk hasil daur ulang berhasil dipasarkan hingga ke luar kota. (8) Keberhasilan ini menunjukkan bahwa pengelolaan sampah berbasis komunitas memiliki peluang besar untuk dikembangkan secara berkelanjutan. (9) Dengan dukungan pemerintah dan partisipasi aktif masyarakat, program bank sampah dapat menjadi solusi atas permasalahan lingkungan di perkotaan.",
      question: "Kalimat manakah yang merupakan kalimat efektif dari kalimat (2)?",
      options: [
        "Salah satu wilayah yang berhasil mengembangkan program tersebut adalah Kampung Berseri di Surabaya, Jawa Timur.",
        "Salah satu wilayah yang berhasil mengembangkan program tersebut yaitu Kampung Berseri di Surabaya, Jawa Timur.",
        "Salah satu wilayah yang berhasil mengembangkan program tersebut, adalah Kampung Berseri di Surabaya, Jawa Timur.",
        "Salah satu wilayah yang berhasil dikembangkan program tersebut adalah Kampung Berseri di Surabaya, Jawa Timur.",
        "Salah satu wilayah yang berhasil mengembangkan program tersebut di Surabaya adalah Kampung Berseri, Jawa Timur."
      ],
      answerIndex: [0]
    },
    { //Soal 16
      txtField: "(1) Bank sampah tidak hanya berfungsi sebagai tempat pengelolaan limbah, tetapi juga mampu meningkatkan perekonomian warga. (2) Salah satu wilayah yang berhasil mengembangkan program tersebut adalah Kampung Berseri di Surabaya, Jawa Timur. (3) Program ini mendorong masyarakat untuk memilah sampah sejak dari rumah tangga. (4) Sampah anorganik seperti plastik dan kertas dikumpulkan, ditimbang, lalu dicatat sebagai tabungan warga. (5) Selain itu, sampah organik diolah menjadi kompos yang dimanfaatkan untuk pertanian dan penghijauan lingkungan. (6) Kegiatan tersebut tidak hanya berdampak pada kebersihan lingkungan, tetapi juga memperkuat solidaritas Sosial antarwarga. (7) Bahkan, beberapa produk hasil daur ulang berhasil dipasarkan hingga ke luar kota. (8) Keberhasilan ini menunjukkan bahwa pengelolaan sampah berbasis komunitas memiliki peluang besar untuk dikembangkan secara berkelanjutan. (9) Dengan dukungan pemerintah dan partisipasi aktif masyarakat, program bank sampah dapat menjadi solusi atas permasalahan lingkungan di perkotaan.",
      question: "Makna kata berkelanjutan pada kalimat (8) adalah …",
      options: [
        "berlangsung terus-menerus dalam jangka panjang",
        "berakhir dalam waktu singkat",
        "dilakukan secara tiba-tiba",
        "bersifat sementara",
        "tidak direncanakan sebelumnya"
      ],
      answerIndex: [0]
    },
    { //Soal 17
      txtField: "(1) Desa wisata menjadi salah satu strategi pemerintah dalam mendorong pemerataan ekonomi di berbagai daerah. (2) Program ini tidak hanya mengandalkan keindahan alam, tetapi juga potensi budaya dan kearifan lokal masyarakat secara menyeluruh. (3) [...], pengelolaan desa wisata harus dilakukan secara profesional agar mampu bersaing di tingkat nasional maupun internasional secara optimal. (4) Pemerintah melalui Kementerian Pariwisata dan Ekonomi Kreatif terus memberikan pendampingan kepada pengelola desa wisata. (5) Pendampingan tersebut meliputi pelatihan manajemen, pemasaran digital, serta peningkatan kualitas sumber daya manusia yang efisien. (6) Dengan pengelolaan yang tepat, desa wisata dapat menjadi sumber pendapatan baru bagi warga sekitar. (7) Namun, keberhasilan program ini sangat bergantung pada partisipasi aktif masyarakat lokal. (8) Masyarakat tidak hanya berperan sebagai objek pembangunan, melainkan juga sebagai subjek yang terlibat dalam perencanaan dan pelaksanaan kegiatan wisata. (9) Hal lainnya yang juga perlu diperhatikan adalah aspek keberlanjutan lingkungan. (10) Dalam pengembangan desa wisata yang berhasil tidak akan terwujud tanpa adanya sinergi antara pemerintah dan masyarakat. (11) Konsistensi pengawasan dan evaluasi secara berkala sangat diperlukan demi menjaga kualitas layanan wisata tersebut.",
      question: "Penulisan kata bercetak tebal yang salah terdapat pada kalimat nomor …",
      options: ["(2)", "(3)", "(4)", "(5)", "(11)"],
      answerIndex: [3]
    },
    { //Soal 18
      txtField: "(1) Desa wisata menjadi salah satu strategi pemerintah dalam mendorong pemerataan ekonomi di berbagai daerah. (2) Program ini tidak hanya mengandalkan keindahan alam, tetapi juga potensi budaya dan kearifan lokal masyarakat secara menyeluruh. (3) [...], pengelolaan desa wisata harus dilakukan secara profesional agar mampu bersaing di tingkat nasional maupun internasional secara optimal. (4) Pemerintah melalui Kementerian Pariwisata dan Ekonomi Kreatif terus memberikan pendampingan kepada pengelola desa wisata. (5) Pendampingan tersebut meliputi pelatihan manajemen, pemasaran digital, serta peningkatan kualitas sumber daya manusia yang efisien. (6) Dengan pengelolaan yang tepat, desa wisata dapat menjadi sumber pendapatan baru bagi warga sekitar. (7) Namun, keberhasilan program ini sangat bergantung pada partisipasi aktif masyarakat lokal. (8) Masyarakat tidak hanya berperan sebagai objek pembangunan, melainkan juga sebagai subjek yang terlibat dalam perencanaan dan pelaksanaan kegiatan wisata. (9) Hal lainnya yang juga perlu diperhatikan adalah aspek keberlanjutan lingkungan. (10) Dalam pengembangan desa wisata yang berhasil tidak akan terwujud tanpa adanya sinergi antara pemerintah dan masyarakat. (11) Konsistensi pengawasan dan evaluasi secara berkala sangat diperlukan demi menjaga kualitas layanan wisata tersebut.",
      question: "Kata penghubung yang paling tepat untuk melengkapi kalimat (3) adalah ….",
      options: [
        "oleh karena itu",
        "namun",
        "sementara itu",
        "bahkan",
        "selain itu"
      ],
      answerIndex: [0]
    },
    { //Soal 19
      txtField: "(1) Desa wisata menjadi salah satu strategi pemerintah dalam mendorong pemerataan ekonomi di berbagai daerah. (2) Program ini tidak hanya mengandalkan keindahan alam, tetapi juga potensi budaya dan kearifan lokal masyarakat secara menyeluruh. (3) [...], pengelolaan desa wisata harus dilakukan secara profesional agar mampu bersaing di tingkat nasional maupun internasional secara optimal. (4) Pemerintah melalui Kementerian Pariwisata dan Ekonomi Kreatif terus memberikan pendampingan kepada pengelola desa wisata. (5) Pendampingan tersebut meliputi pelatihan manajemen, pemasaran digital, serta peningkatan kualitas sumber daya manusia yang efisien. (6) Dengan pengelolaan yang tepat, desa wisata dapat menjadi sumber pendapatan baru bagi warga sekitar. (7) Namun, keberhasilan program ini sangat bergantung pada partisipasi aktif masyarakat lokal. (8) Masyarakat tidak hanya berperan sebagai objek pembangunan, melainkan juga sebagai subjek yang terlibat dalam perencanaan dan pelaksanaan kegiatan wisata. (9) Hal lainnya yang juga perlu diperhatikan adalah aspek keberlanjutan lingkungan. (10) Dalam pengembangan desa wisata yang berhasil tidak akan terwujud tanpa adanya sinergi antara pemerintah dan masyarakat. (11) Konsistensi pengawasan dan evaluasi secara berkala sangat diperlukan demi menjaga kualitas layanan wisata tersebut.",
      question: "Kata yang harus dihilangkan pada kalimat (9) adalah ….",
      options: ["lainnya", "yang", "juga", "adalah", "aspek"],
      answerIndex: [2]
    },
    { //Soal 20
      txtField: "(1) Desa wisata menjadi salah satu strategi pemerintah dalam mendorong pemerataan ekonomi di berbagai daerah. (2) Program ini tidak hanya mengandalkan keindahan alam, tetapi juga potensi budaya dan kearifan lokal masyarakat secara menyeluruh. (3) [...], pengelolaan desa wisata harus dilakukan secara profesional agar mampu bersaing di tingkat nasional maupun internasional secara optimal. (4) Pemerintah melalui Kementerian Pariwisata dan Ekonomi Kreatif terus memberikan pendampingan kepada pengelola desa wisata. (5) Pendampingan tersebut meliputi pelatihan manajemen, pemasaran digital, serta peningkatan kualitas sumber daya manusia yang efisien. (6) Dengan pengelolaan yang tepat, desa wisata dapat menjadi sumber pendapatan baru bagi warga sekitar. (7) Namun, keberhasilan program ini sangat bergantung pada partisipasi aktif masyarakat lokal. (8) Masyarakat tidak hanya berperan sebagai objek pembangunan, melainkan juga sebagai subjek yang terlibat dalam perencanaan dan pelaksanaan kegiatan wisata. (9) Hal lainnya yang juga perlu diperhatikan adalah aspek keberlanjutan lingkungan. (10) Dalam pengembangan desa wisata yang berhasil tidak akan terwujud tanpa adanya sinergi antara pemerintah dan masyarakat. (11) Konsistensi pengawasan dan evaluasi secara berkala sangat diperlukan demi menjaga kualitas layanan wisata tersebut.",
      question: "Kalimat (10) perlu disempurnakan dengan cara …..",
      options: [
        "menghilangkan kata dalam",
        "menghilangkan kata yang",
        "menambahkan kata maka setelah wisata",
        "mengganti kata tanpa dengan dengan",
        "mengganti kata berhasil dengan sukses"
      ],
      answerIndex: [0]
    }
  ],
}

const soalPK: ujianSession = {
  name: "Pengetahuan Kuantitatif",
  description: "Ada 20 soal yang akan dikerjakan dalam 20 menit.",
  duration: 20 * 60,
  questions: [
    { //Soal 1
      txtField: "Dari angka-angka 2, 4, 7, dan 9, akan dibentuk dua bilangan puluhan dengan setiap angka tepat dipakai sekali. Pernyataan mana saja yang bernilai benar berdasarkan informasi di atas? (1) Bilangan puluhan terkecil yang mungkin dibentuk merupakan bilangan genap. (2) Bilangan puluhan terbesar yang mungkin dibentuk merupakan bilangan ganjil. (3) Selisih terbesar yang mungkin dari dua bilangan puluhan tersebut adalah 73. (4) Jumlah terbesar yang mungkin dari dua bilangan puluhan tersebut adalah 117.",
      question: "Pernyataan mana saja yang bernilai benar?",
      options: [
        "(1), (2), dan (3) SAJA",
        "(1) dan (3) SAJA",
        "(2) dan (4) SAJA",
        "(4) SAJA",
        "SEMUA PILIHAN"
      ],
      answerIndex: [0]
    },
    { //Soal 2
      txtField: "Tujuh bilangan bulat positif, yaitu 6, 5, 8, a, 7, 5, dan 7, memiliki rata-rata 6 1/7. Jika modus dari ketujuh bilangan tersebut ditambah rata-ratanya adalah 78b, maka nilai b sama dengan …",
      question: "Nilai b sama dengan …",
      options: ["1/7", "2/7", "3/7", "4/7", "5/7"],
      answerIndex: [0]
    },
    { //Soal 3
      txtField: "Barisan bilangan x+1, y+3, 4x, 16, … merupakan barisan aritmetika. Suku ke‑10 dari barisan bilangan tersebut adalah ….",
      question: "Suku ke‑10 dari barisan bilangan tersebut adalah ….",
      options: ["36", "38", "40", "42", "44"],
      answerIndex: [2]
    },
    { //Soal 4
      txtField: "Grafik fungsi f(x) = x^2 - 3x + 2 dan g(x) = 2x^2 - 5x + 2 berpotongan di dua titik, yaitu titik P(p,q) dan Q(r,s). Garis h melalui kedua titik tersebut.",
      question: "Gradien garis h adalah ….",
      options: ["-2", "-1", "0", "1", "2"],
      answerIndex: [1]
    },
    { //Soal 5
      txtField: "Grafik fungsi f(x) = x^2 - 3x + 2 dan g(x) = 2x^2 - 5x + 2 berpotongan di dua titik, yaitu titik P(p,q) dan Q(r,s). Garis h melalui kedua titik tersebut.",
      question: "Persamaan garis yang tegak lurus dengan garis h dan melalui titik (6,2) adalah ....",
      options: [
        "x - y - 4 = 0",
        "x + y - 8 = 0",
        "x - y + 4 = 0",
        "x + y + 4 = 0",
        "-x + y - 4 = 0"
      ],
      answerIndex: [0]
    },
    { //Soal 6
      txtField: "Grafik fungsi f(x) = x^2 - 3x + 2 dan g(x) = 2x^2 - 5x + 2 berpotongan di dua titik, yaitu titik P(p,q) dan Q(r,s). Garis h melalui kedua titik tersebut.",
      question: "Jika p < r dan titik P ditranslasi sejauh 3 satuan ke bawah dan 2 satuan ke kiri menjadi titik P', jarak antara titik P' dan Q adalah ....",
      options: ["√5", "√10", "√13", "√17", "√20"],
      answerIndex: [3]
    },
    { //Soal 7
      txtField: "",
      question: "Banyaknya susunan lima angka berbeda dari angka 1, 3, 4, 6, dan 8 dengan angka pertama genap dan angka kelima ganjil adalah ....",
      options: ["12", "18", "24", "30", "36"],
      answerIndex: [4]
    },
    { //Soal 8
      txtField: "Pada segitiga ABC di bawah, besar ∠ABC = 45° dan AC = 6. Titik D terletak pada sisi BC sehingga AD tegak lurus BC dan AD = BD.",
      question: "Besar ∠BAC = …",
      options: ["30°", "45°", "60°", "90°", "105°"],
      answerIndex: [3]
    },
    { //Soal 9
      txtField: "Pada segitiga ABC di bawah, besar ∠ABC = 45° dan AC = 6. Titik D terletak pada sisi BC sehingga AD tegak lurus BC dan AD = BD.",
      question: "Panjang AB = …",
      options: ["3√2", "3√3", "6", "6√2", "6√3"],
      answerIndex: [2]
    },
    { //Soal 10
      txtField: "Pada segitiga ABC di bawah, besar ∠ABC = 45° dan AC = 6. Titik D terletak pada sisi BC sehingga AD tegak lurus BC dan AD = BD.",
      question: "Luas segitiga ABC adalah …",
      options: ["9", "9√2", "18", "9 + 9√3", "18 + 18√2"],
      answerIndex: [2]
    },
    { //Soal 11
      txtField: `
Diketahui sistem persamaan linear dalam x, y, z sebagai berikut.

$$
\\begin{cases}
2x - y + z = 3 \\\\
-2x + 2y = 2 \\\\
y - z = 1
\\end{cases}
$$

Sistem tersebut memiliki solusi $x = a,\\; y = b,\\; z = c.$

Berdasarkan informasi yang diberikan, manakah hubungan antara kuantitas P dan Q berikut yang benar?

$$
\\begin{array}{|c|c|}
\\hline
P & Q \\\\
\\hline
a + b + c & 7 \\\\
\\hline
\\end{array}
$$
`,
      question: "Manakah hubungan antara kuantitas P dan Q berikut yang benar?",
      options: [
        "Kuantitas P lebih dari Q.",
        "Kuantitas P kurang dari Q.",
        "Kuantitas P sama dengan Q.",
        "Tidak dapat ditentukan hubungan antara kuantitas P dan Q."
      ],
      answerIndex: [2]
    },
    { //Soal 12
      txtField: "Pertidaksamaan |4x - 6| < a dengan a > 0 memiliki himpunan penyelesaian $$\\{x \\mid -1 < x < 4,\\; x \\in \\mathbb{R}\\}$$. Nilai a sama dengan ….",
      question: "Nilai a sama dengan ….",
      options: ["8", "9", "10", "11", "12"],
      answerIndex: [2]
    },
    { //Soal 13
      txtField: `
Kurva $y = (x - p)^2 + q$ diperoleh dengan menggeser kurva 
$y = x^2 - 6x + 10$ sejauh 3 satuan ke kanan dan 1 satuan ke atas.

Berdasarkan informasi yang diberikan, manakah hubungan antara kuantitas P dan Q berikut yang benar?

$$
\\begin{array}{|c|c|}
\\hline
P & Q \\\\
\\hline
p + q & 4 \\\\
\\hline
\\end{array}
$$
`,
      question: "Manakah hubungan antara kuantitas P dan Q berikut yang benar?",
      options: [
        "Kuantitas P lebih dari Q.",
        "Kuantitas P kurang dari Q.",
        "Kuantitas P sama dengan Q.",
        "Tidak dapat ditentukan hubungan antara kuantitas P dan Q."
      ],
      answerIndex: [0]
    },
    { //Soal 14
      txtField: "Diketahui matriks A = [[a,b],[c,d]] dan B = [[10,12],[14,16]] memenuhi persamaan A [[2,3],[1,1]] = B untuk suatu bilangan riil a, b, c, d. Berdasarkan informasi yang diberikan, manakah hubungan antara kuantitas P dan Q berikut yang benar? (P = a+b+c+d, Q = 30)",
      question: "Manakah hubungan antara kuantitas P dan Q berikut yang benar?",
      options: [
        "Kuantitas P lebih dari Q.",
        "Kuantitas P kurang dari Q.",
        "Kuantitas P sama dengan Q.",
        "Tidak dapat ditentukan hubungan antara kuantitas P dan Q."
      ],
      answerIndex: [1]
    },
    { //Soal 15
      txtField: "Dari himpunan {3, 5, 7, 9} akan diambil dua anggotanya sekaligus secara acak. Pernyataan mana saja yang bernilai benar berdasarkan informasi di atas? (1) Peluang terambilnya dua bilangan dengan hasil kali genap adalah 1/2. (2) Peluang terambilnya dua bilangan dengan jumlah kurang dari 12 adalah 1/3. (3) Peluang terambilnya dua bilangan dengan selisih bilangan prima adalah 1/3. (4) Peluang terambilnya dua bilangan dengan hasil kali ganjil adalah 1.",
      question: "Pernyataan mana saja yang bernilai benar?",
      options: [
        "(1), (2), dan (3) SAJA",
        "(1) dan (3) SAJA",
        "(2) dan (4) SAJA",
        "(4) SAJA",
        "SEMUA PILIHAN"
      ],
      answerIndex: [2]
    },
    { //Soal 16
      txtField: "Diketahui suatu fungsi m = f(a) = ka^2 + la + 1 dengan k dan l bilangan real. Input a = 2 menghasilkan m = 11 dan input a = 3 menghasilkan m = 19. Pernyataan mana saja yang bernilai benar berdasarkan informasi di atas? (1) Nilai k = 2. (2) Nilai k + l = 4. (3) Input a = 4 menghasilkan m = 31. (4) Input a = 1 menghasilkan m = 5.",
      question: "Pernyataan mana saja yang bernilai benar?",
      options: [
        "(1), (2), dan (3) SAJA",
        "(1) dan (3) SAJA",
        "(2) dan (4) SAJA",
        "(4) SAJA",
        "SEMUA PILIHAN"
      ],
      answerIndex: [2]
    },
    { //Soal 17
      txtField: "",
      question: "Hasil dari a/3 - b/2 adalah ....",
      options: [
        "(2a - b)/6",
        "(a + 4b)/6",
        "(4a - b)/6",
        "(2a - 3b)/6",
        "(2a + 3b)/6"
      ],
      answerIndex: [3]
    },
    { //Soal 18
      txtField: "Fungsi f(x) dan g(x) = 2x + 3 memiliki komposisi fungsi (f ∘ g)(a) = 23, dengan a > 0. Berapakah nilai dari f(5)? Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut. (1) Nilai g(a) = 7. (2) Fungsi f(x) = ax + 4.",
      question: "Manakah pernyataan yang cukup?",
      options: [
        "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
        "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
        "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
        "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
        "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      ],
      answerIndex: [2]
    },
    { //Soal 19
      txtField: "Pulau A, Pulau B, dan Pulau C digambarkan dalam peta di atas yang terbentuk dari kumpulan persegi kecil. Titik A, B, dan C pada peta berturut-turut menyatakan posisi Kota A, Kota B, dan Kota C. (Koordinat: A(1,2), B(4,6), C(1,6))",
      question: "Jarak terpendek antara Kota A dan Kota B adalah ... satuan.",
      options: ["4", "5", "6", "7", "8"],
      answerIndex: [1]
    },
    { //Soal 20
      txtField: "Barisan bilangan x + 2, y + 4, 5x, 13, … merupakan barisan aritmetika.",
      question: "Suku ke-10 dari barisan bilangan tersebut adalah ....",
      options: ["30", "31", "32", "33", "34"],
      answerIndex: [1]
    }
  ],
};
  
// Tes Literasi

const soalLitdo: ujianSession = {
  name: "Literasi Bahasa Indonesia",
  description: "Ada 30 soal yang akan dikerjakan dalam 42,5 menit",
  duration: 42.5 * 60,
  questions: [
    { //Soal 1
      txtField: "Pematangan buah yang kita saksikan sehari-hari adalah proses kimia yang unik, di mana gas berperan sebagai sinyal utama. Fenomena ini paling mudah dipahami ketika kita meletakkan Buah A, yaitu buah yang sudah matang (misalnya apel atau pisang yang sudah kuning), di dekat Buah B, yaitu buah yang masih mentah (misalnya alpukat atau mangga hijau). Buah A yang sudah matang secara alami melepaskan Gas Etilen (C22H44). Gas Etilen ini adalah hormon tumbuhan yang bersifat volatil, yang berarti ia mudah menguap dan menyebar ke seluruh udara di sekitarnya. Dengan menempatkan kedua buah ini dalam satu wadah tertutup, Etilen yang dilepaskan oleh Buah A akan terperangkap dan berdifusi, lalu mencapai permukaan Buah B.\n\nGas Etilen yang diserap oleh Buah B yang mentah akan bertindak sebagai pemicu sinyal yang sangat kuat. Begitu molekul Etilen terikat pada reseptor di sel Buah B, ia mengirimkan sinyal untuk mengaktifkan enzim-enzim khusus. Enzim-enzim ini kemudian memulai serangkaian reaksi kimia seperti memecah zat hijau (klorofil) sehingga buah berubah warna menjadi kuning atau merah, memecah pati menjadi gula (membuat buah menjadi manis), dan melarutkan pektin (zat yang membuat buah keras) sehingga buah menjadi lunak. Jadi, Buah A secara efektif \"memberi tahu\" Buah B bahwa sudah waktunya untuk matang, menyebabkan pematangan terjadi lebih cepat dan lebih seragam daripada buah mentah yang dibiarkan sendiri.",
      question: "Ide pokok yang paling tepat untuk Paragraf 1 adalah …",
      options: [
        "Sifat dan fungsi klorofil, pati, dan pektin dalam proses pematangan buah",
        "Buah matang dan mentah harus diletakkan dalam wadah tertutup agar gas etilen memicu pematangan buah mentah",
        "Peran gas Etilen yang bersifat volatil dari buah matang sebagai sinyal pemicu pematangan",
        "Buah yang matang secara alami akan melepaskan gas etilen",
        "Mekanisme kerja enzim-enzim khusus yang aktif di dalam sel Buah B"
      ],
      answerIndex: [2]
    },
    { //Soal 2
      txtField: "Pematangan buah yang kita saksikan sehari-hari adalah proses kimia yang unik, di mana gas berperan sebagai sinyal utama. Fenomena ini paling mudah dipahami ketika kita meletakkan Buah A, yaitu buah yang sudah matang (misalnya apel atau pisang yang sudah kuning), di dekat Buah B, yaitu buah yang masih mentah (misalnya alpukat atau mangga hijau). Buah A yang sudah matang secara alami melepaskan Gas Etilen (C22H44). Gas Etilen ini adalah hormon tumbuhan yang bersifat volatil, yang berarti ia mudah menguap dan menyebar ke seluruh udara di sekitarnya. Dengan menempatkan kedua buah ini dalam satu wadah tertutup, Etilen yang dilepaskan oleh Buah A akan terperangkap dan berdifusi, lalu mencapai permukaan Buah B.\n\nGas Etilen yang diserap oleh Buah B yang mentah akan bertindak sebagai pemicu sinyal yang sangat kuat. Begitu molekul Etilen terikat pada reseptor di sel Buah B, ia mengirimkan sinyal untuk mengaktifkan enzim-enzim khusus. Enzim-enzim ini kemudian memulai serangkaian reaksi kimia seperti memecah zat hijau (klorofil) sehingga buah berubah warna menjadi kuning atau merah, memecah pati menjadi gula (membuat buah menjadi manis), dan melarutkan pektin (zat yang membuat buah keras) sehingga buah menjadi lunak. Jadi, Buah A secara efektif \"memberi tahu\" Buah B bahwa sudah waktunya untuk matang, menyebabkan pematangan terjadi lebih cepat dan lebih seragam daripada buah mentah yang dibiarkan sendiri.",
      question: "Dalam konteks teks di atas, makna dari kata sifat \"volatil\" yang digunakan untuk mendeskripsikan Gas Etilen adalah ….",
      options: [
        "Zat yang bereaksi secara lambat dengan oksigen",
        "Zat yang tidak dapat menguap pada suhu ruangan",
        "Zat kimia yang dihasilkan oleh buah yang sudah matang",
        "Zat yang dapat menyebabkan buah menjadi lebih lunak",
        "Zat yang mudah menguap dan bisa menyebar seperti sifat gas"
      ],
      answerIndex: [3]
    },
    { //Soal 3
      type: "MULTIPLE_SELECTION",
      txtField: "Pematangan buah yang kita saksikan sehari-hari adalah proses kimia yang unik, di mana gas berperan sebagai sinyal utama. Fenomena ini paling mudah dipahami ketika kita meletakkan Buah A, yaitu buah yang sudah matang (misalnya apel atau pisang yang sudah kuning), di dekat Buah B, yaitu buah yang masih mentah (misalnya alpukat atau mangga hijau). Buah A yang sudah matang secara alami melepaskan Gas Etilen (C22H44). Gas Etilen ini adalah hormon tumbuhan yang bersifat volatil, yang berarti ia mudah menguap dan menyebar ke seluruh udara di sekitarnya. Dengan menempatkan kedua buah ini dalam satu wadah tertutup, Etilen yang dilepaskan oleh Buah A akan terperangkap dan berdifusi, lalu mencapai permukaan Buah B.\n\nGas Etilen yang diserap oleh Buah B yang mentah akan bertindak sebagai pemicu sinyal yang sangat kuat. Begitu molekul Etilen terikat pada reseptor di sel Buah B, ia mengirimkan sinyal untuk mengaktifkan enzim-enzim khusus. Enzim-enzim ini kemudian memulai serangkaian reaksi kimia seperti memecah zat hijau (klorofil) sehingga buah berubah warna menjadi kuning atau merah, memecah pati menjadi gula (membuat buah menjadi manis), dan melarutkan pektin (zat yang membuat buah keras) sehingga buah menjadi lunak. Jadi, Buah A secara efektif \"memberi tahu\" Buah B bahwa sudah waktunya untuk matang, menyebabkan pematangan terjadi lebih cepat dan lebih seragam daripada buah mentah yang dibiarkan sendiri.",
      question: "Berdasarkan isi Paragraf 2, pilihlah pernyataan di bawah ini mengenai fungsi enzim yang diaktifkan oleh Etilen yang benar!",
      options: [
        "Enzim akan memecah klorofil yang menyebabkan perubahan warna.",
        "Enzim pektinase berfungsi melarutkan pektin yang membuat buah menjadi lunak.",
        "Enzim menonaktifkan reseptor Etilen agar proses pematangan tidak berlebihan.",
        "Enzim secara kolektif menyebabkan pematangan terjadi lebih cepat dan seragam.",
        "Enzim amilase berfungsi mengubah pati menjadi gula, sehingga meningkatkan rasa manis."
      ],
      answerIndex: [0, 1, 4]
    },
    { //Soal 4
      txtField: "Pematangan buah yang kita saksikan sehari-hari adalah proses kimia yang unik, di mana gas berperan sebagai sinyal utama. Fenomena ini paling mudah dipahami ketika kita meletakkan Buah A, yaitu buah yang sudah matang (misalnya apel atau pisang yang sudah kuning), di dekat Buah B, yaitu buah yang masih mentah (misalnya alpukat atau mangga hijau). Buah A yang sudah matang secara alami melepaskan Gas Etilen (C22H44). Gas Etilen ini adalah hormon tumbuhan yang bersifat volatil, yang berarti ia mudah menguap dan menyebar ke seluruh udara di sekitarnya. Dengan menempatkan kedua buah ini dalam satu wadah tertutup, Etilen yang dilepaskan oleh Buah A akan terperangkap dan berdifusi, lalu mencapai permukaan Buah B.\n\nGas Etilen yang diserap oleh Buah B yang mentah akan bertindak sebagai pemicu sinyal yang sangat kuat. Begitu molekul Etilen terikat pada reseptor di sel Buah B, ia mengirimkan sinyal untuk mengaktifkan enzim-enzim khusus. Enzim-enzim ini kemudian memulai serangkaian reaksi kimia seperti memecah zat hijau (klorofil) sehingga buah berubah warna menjadi kuning atau merah, memecah pati menjadi gula (membuat buah menjadi manis), dan melarutkan pektin (zat yang membuat buah keras) sehingga buah menjadi lunak. Jadi, Buah A secara efektif \"memberi tahu\" Buah B bahwa sudah waktunya untuk matang, menyebabkan pematangan terjadi lebih cepat dan lebih seragam daripada buah mentah yang dibiarkan sendiri.",
      question: "Tujuan penulisan teks di atas yang paling utama adalah ....",
      options: [
        "Membandingkan efektivitas pematangan alami dengan pematangan buatan",
        "Menginformasikan peran penggunaan gas Etilen pada produk buah-buahan",
        "Memberi instruksi langkah demi langkah tentang cara mempercepat pematangan buah di rumah",
        "Menjelaskan secara ringkas bagaimana mekanisme ilmiah (kimia) di balik percepatan pematangan buah",
        "Mengajak pembaca untuk membedakan antara Buah A dan Buah B berdasarkan warna kulitnya"
      ],
      answerIndex: [3]
    },
    { //Soal 5
      txtField: "Keindahan warna-warni pada kembang api bukanlah keajaiban, melainkan hasil langsung dari reaksi kimia yang dikenal sebagai uji nyala logam atau emisi cahaya. Kembang api tersusun dari bubuk peledak, bahan pengoksidasi, dan yang terpenting, garam-garam dari berbagai unsur logam. Ketika kembang api dinyalakan, energi panas yang sangat tinggi menyebabkan elektron pada atom logam (seperti Stronsium, Barium, atau Tembaga) bergerak ke tingkat energi yang lebih tinggi (keadaan tereksitasi). Setelah beberapa saat, elektron-elektron ini jatuh kembali ke tingkat energi asalnya (keadaan dasar), dan dalam proses ini, mereka melepaskan kelebihan energi tersebut dalam bentuk foton (cahaya). Panjang gelombang foton yang dilepaskan ini menentukan warna yang kita lihat, misalnya, Stronsium menghasilkan merah, Tembaga menghasilkan biru, dan Natrium menghasilkan oranye/kuning. Hal ini membuktikan bahwa setiap unsur kimia memiliki \"sidik jari\" cahayanya sendiri.",
      question: "Berdasarkan teks, penyebab langsung dari terciptanya warna (misalnya merah, biru, atau kuning) yang kita lihat pada kembang api adalah ….",
      options: [
        "Pelepasan foton oleh elektron yang kembali ke tingkat energi dasar",
        "Pemanasan logam hingga mencapai suhu tinggi",
        "Reaksi kimia antara bahan peledak dan oksigen",
        "Pembakaran bubuk mesiu",
        "Interaksi antara berbagai unsur logam"
      ],
      answerIndex: [0]
    },
    { //Soal 6
      txtField: "Keindahan warna-warni pada kembang api bukanlah keajaiban, melainkan hasil langsung dari reaksi kimia yang dikenal sebagai uji nyala logam atau emisi cahaya. Kembang api tersusun dari bubuk peledak, bahan pengoksidasi, dan yang terpenting, garam-garam dari berbagai unsur logam. Ketika kembang api dinyalakan, energi panas yang sangat tinggi menyebabkan elektron pada atom logam (seperti Stronsium, Barium, atau Tembaga) bergerak ke tingkat energi yang lebih tinggi (keadaan tereksitasi). Setelah beberapa saat, elektron-elektron ini jatuh kembali ke tingkat energi asalnya (keadaan dasar), dan dalam proses ini, mereka melepaskan kelebihan energi tersebut dalam bentuk foton (cahaya). Panjang gelombang foton yang dilepaskan ini menentukan warna yang kita lihat, misalnya, Stronsium menghasilkan merah, Tembaga menghasilkan biru, dan Natrium menghasilkan oranye/kuning. Hal ini membuktikan bahwa setiap unsur kimia memiliki \"sidik jari\" cahayanya sendiri.",
      question: "Pernyataan berikut yang merupakan sebuah fakta yang disajikan dalam teks adalah",
      options: [
        "Kembang api seharusnya menggunakan lebih banyak natrium untuk warna kuning yang lebih cerah",
        "Stronium menghasilkan warna merah, Tembaga menghasilkan warna biru, dan Natrium menghasilkan warna oranye/kuning",
        "Keindahan warna-warni kembang api bukanlah keajaiban",
        "Setiap unsur kimia memiliki \"sidik jari\" cahayanya sendiri",
        "Elektron yang jatuh kembali ke keadaan dasar harusnya melepaskan energi yang lebih besar"
      ],
      answerIndex: [1]
    },
    { //Soal 7
      txtField: "Keindahan warna-warni pada kembang api bukanlah keajaiban, melainkan hasil langsung dari reaksi kimia yang dikenal sebagai uji nyala logam atau emisi cahaya. Kembang api tersusun dari bubuk peledak, bahan pengoksidasi, dan yang terpenting, garam-garam dari berbagai unsur logam. Ketika kembang api dinyalakan, energi panas yang sangat tinggi menyebabkan elektron pada atom logam (seperti Stronsium, Barium, atau Tembaga) bergerak ke tingkat energi yang lebih tinggi (keadaan tereksitasi). Setelah beberapa saat, elektron-elektron ini jatuh kembali ke tingkat energi asalnya (keadaan dasar), dan dalam proses ini, mereka melepaskan kelebihan energi tersebut dalam bentuk foton (cahaya). Panjang gelombang foton yang dilepaskan ini menentukan warna yang kita lihat, misalnya, Stronsium menghasilkan merah, Tembaga menghasilkan biru, dan Natrium menghasilkan oranye/kuning. Hal ini membuktikan bahwa setiap unsur kimia memiliki \"sidik jari\" cahayanya sendiri.",
      question: "Istilah \"sidik jari\" pada akhir paragraf digunakan untuk menjelaskan ...",
      options: [
        "Setiap kembang api dibuat dengan campuran bahan yang unik dan tidak dapat ditiru",
        "Setiap unsur logam memancarkan panjang gelombang cahaya (warna) yang khas dan berbeda",
        "Cahaya yang dipancarkan oleh kembang api dapat digunakan untuk mengidentifikasi bahan peledak",
        "Pola ledakan kembang api selalu unik dan tidak pernah sama antara satu dengan yang lain",
        "Hanya beberapa jenis logam tertentu yang bisa menghasilkan cahaya saat dipanaskan"
      ],
      answerIndex: [1]
    },
    { //Soal 8
      imageUrl: `https://tan-sandye-90.tiiny.site/LBI-8-10.svg`,
      txtField: "Sabun memiliki kemampuan untuk menghilangkan kotoran, terutama yang berminyak dan berlemak. Peristiwa ini terletak pada struktur molekulnya yang unik, yaitu terdapat dua ujung yang berbeda. Satu ujung disebut hidrofilik (suka air), yaitu terdiri dari gugus karboksilat bermuatan yang siap berinteraksi dengan air. Ujung lainnya adalah ekor hidrofobik (takut air/suka minyak), yaitu rantai hidrokarbon panjang yang cenderung menempel pada minyak. Ketika sabun dicampur dengan air dan diterapkan pada kotoran berminyak, ekor hidrofobik akan menempel pada kotoran. Selanjutnya, ribuan molekul sabun akan mengelilingi partikel kotoran secara keseluruhan. Mereka membentuk struktur bola kecil yang dikenal sebagai misel. Misel ini memiliki inti kotoran yang terbungkus rapat oleh ekor sabun, dan permukaan luarnya yang semuanya terdiri dari kepala hidrofilik. Karena permukaan misel kini diselimuti oleh bagian yang suka air, kotoran yang tadinya tidak mau larut di dalam air sekarang menjadi teremulsi dan dapat terlarut ke dalam air. Proses ini memungkinkan kotoran berminyak terangkat dan terbawa bersama air bilasan, menjadikan area yang dibersihkan menjadi bersih.",
      question: "Cara yang dilakukan oleh ujung hidrofobik dari molekul sabun berinteraksi saat bertemu dengan kotoran berminyak adalah ....",
      options: [
        "Ujung hidrofobik menjauh dari kotoran dan membentuk lapisan di permukaan air",
        "Ujung hidrofobik segera menempel, menembus, dan mengunci gumpalan minyak/kotoran",
        "Ujung hidrofobik bereaksi secara kimia dengan kotoran untuk mengubah strukturnya",
        "Ujung hidrofobik menguap menjadi gas setelah bersentuhan dengan kotoran",
        "Ujung hidrofobik menarik kepala hidrofilik untuk menghadap ke inti kotoran"
      ],
      answerIndex: [1]
    },
    { //Soal 9
      imageUrl: `https://tan-sandye-90.tiiny.site/LBI-8-10.svg`,
      txtField: "Sabun memiliki kemampuan untuk menghilangkan kotoran, terutama yang berminyak dan berlemak. Peristiwa ini terletak pada struktur molekulnya yang unik, yaitu terdapat dua ujung yang berbeda. Satu ujung disebut hidrofilik (suka air), yaitu terdiri dari gugus karboksilat bermuatan yang siap berinteraksi dengan air. Ujung lainnya adalah ekor hidrofobik (takut air/suka minyak), yaitu rantai hidrokarbon panjang yang cenderung menempel pada minyak. Ketika sabun dicampur dengan air dan diterapkan pada kotoran berminyak, ekor hidrofobik akan menempel pada kotoran. Selanjutnya, ribuan molekul sabun akan mengelilingi partikel kotoran secara keseluruhan. Mereka membentuk struktur bola kecil yang dikenal sebagai misel. Misel ini memiliki inti kotoran yang terbungkus rapat oleh ekor sabun, dan permukaan luarnya yang semuanya terdiri dari kepala hidrofilik. Karena permukaan misel kini diselimuti oleh bagian yang suka air, kotoran yang tadinya tidak mau larut di dalam air sekarang menjadi teremulsi dan dapat terlarut ke dalam air. Proses ini memungkinkan kotoran berminyak terangkat dan terbawa bersama air bilasan, menjadikan area yang dibersihkan menjadi bersih.",
      question: "Berdasarkan Paragraf 2, fungsi utama dari pembentukan struktur misel dalam proses pembersihan adalah ....",
      options: [
        "Untuk membuat kotoran berminyak menjadi lebih padat dan mudah diambil",
        "Untuk menetralkan muatan listrik pada kotoran sehingga menjadi tidak berbahaya",
        "Untuk mengubah kotoran yang tidak larut menjadi teremulsi (terlarut) dalam air",
        "Untuk mempercepat reaksi saponifikasi antara sabun dan air",
        "Untuk menghambat interaksi antara gugus karboksilat sabun dengan kotoran"
      ],
      answerIndex: [2]
    },
    { //Soal 10
      imageUrl: `https://tan-sandye-90.tiiny.site/LBI-8-10.svg`,
      txtField: "Sabun memiliki kemampuan untuk menghilangkan kotoran, terutama yang berminyak dan berlemak. Peristiwa ini terletak pada struktur molekulnya yang unik, yaitu terdapat dua ujung yang berbeda. Satu ujung disebut hidrofilik (suka air), yaitu terdiri dari gugus karboksilat bermuatan yang siap berinteraksi dengan air. Ujung lainnya adalah ekor hidrofobik (takut air/suka minyak), yaitu rantai hidrokarbon panjang yang cenderung menempel pada minyak. Ketika sabun dicampur dengan air dan diterapkan pada kotoran berminyak, ekor hidrofobik akan menempel pada kotoran. Selanjutnya, ribuan molekul sabun akan mengelilingi partikel kotoran secara keseluruhan. Mereka membentuk struktur bola kecil yang dikenal sebagai misel. Misel ini memiliki inti kotoran yang terbungkus rapat oleh ekor sabun, dan permukaan luarnya yang semuanya terdiri dari kepala hidrofilik. Karena permukaan misel kini diselimuti oleh bagian yang suka air, kotoran yang tadinya tidak mau larut di dalam air sekarang menjadi teremulsi dan dapat terlarut ke dalam air. Proses ini memungkinkan kotoran berminyak terangkat dan terbawa bersama air bilasan, menjadikan area yang dibersihkan menjadi bersih.",
      question: "Pernyataan berikut yang paling tepat untuk merangkum ide pokok keseluruhan teks adalah ....",
      options: [
        "Kotoran bisa menempel dengan struktur bagian hidrofobik dari sabun",
        "Kotoran hanya bisa dibersihkan oleh sabun karena sabun memiliki dua ujung yang berperan beda terhadap air dan kotoran itu sendiri",
        "Semua kotoran berminyak dapat larut dalam air ketika dicuci dengan sabun",
        "Ujung hidrofilik molekul sabun bertindak sebagai penghalang agar kotoran tidak kembali menempel",
        "Struktur molekul sabun mampu mengangkat kotoran berminyak karena terdapat dua ujung berbeda (hidrofilik dan hidrofobik) yang membentuk struktur misel, sehingga akan larut oleh air"
      ],
      answerIndex: [4]
    },
    { //Soal 11
      txtField: "Setelah kemerdekaan tahun 1945, Indonesia menghadapi tantangan besar dalam membangun sistem pendidikan nasional. Pada masa itu, banyak sekolah masih menggunakan kurikulum warisan kolonial yang lebih menekankan penguasaan bahasa dan budaya Belanda. Pemerintah kemudian berusaha menyesuaikan isi pendidikan agar sesuai dengan semangat kemerdekaan dan kebutuhan rakyat.\n\nSalah satu kebijakan penting adalah Kongres Pendidikan Indonesia tahun 1947 yang menekankan perlunya pendidikan berjiwa nasional, menumbuhkan rasa kebangsaan, serta menolak diskriminasi sosial dalam pendidikan. Dengan kebijakan ini, sekolah tidak lagi hanya berfungsi mencetak tenaga kerja terampil, tetapi juga membentuk warga negara yang berkarakter dan sadar akan tanggung jawab sosialnya.",
      question: "Faktor utama yang mendorong perubahan kurikulum pendidikan Indonesia setelah kemerdekaan adalah ...",
      options: [
        "tekanan politik dari bekas pemerintah kolonial untuk mempertahankan sistem lama",
        "kebutuhan untuk menyesuaikan pendidikan dengan cita-cita kemerdekaan bangsa",
        "dorongan agar sekolah menghasilkan tenaga administrasi terampil bagi pemerintahan baru",
        "tuntutan masyarakat agar bahasa Belanda tetap diajarkan di sekolah-sekolah",
        "pengaruh guru-guru asing yang masih aktif mengajar setelah 1945"
      ],
      answerIndex: [1]
    },
    { //Soal 12
      txtField: "Setelah kemerdekaan tahun 1945, Indonesia menghadapi tantangan besar dalam membangun sistem pendidikan nasional. Pada masa itu, banyak sekolah masih menggunakan kurikulum warisan kolonial yang lebih menekankan penguasaan bahasa dan budaya Belanda. Pemerintah kemudian berusaha menyesuaikan isi pendidikan agar sesuai dengan semangat kemerdekaan dan kebutuhan rakyat.\n\nSalah satu kebijakan penting adalah Kongres Pendidikan Indonesia tahun 1947 yang menekankan perlunya pendidikan berjiwa nasional, menumbuhkan rasa kebangsaan, serta menolak diskriminasi sosial dalam pendidikan. Dengan kebijakan ini, sekolah tidak lagi hanya berfungsi mencetak tenaga kerja terampil, tetapi juga membentuk warga negara yang berkarakter dan sadar akan tanggung jawab sosialnya.",
      question: "Manakah opini berikut yang paling tepat berdasarkan isi teks?",
      options: [
        "Kurikulum kolonial sebaiknya dipertahankan karena sudah teruji kualitasnya.",
        "Kongres Pendidikan 1947 gagal mencapai tujuan utamanya karena kekurangan tenaga pendidik.",
        "Pendidikan nasional sebaiknya lebih menekankan keahlian praktis dibanding nilai kebangsaan.",
        "Pendidikan pasca-kemerdekaan merupakan bentuk perlawanan terhadap sisa penjajahan.",
        "Pendidikan pasca-kemerdekaan lebih memprioritaskan pembentukan tenaga kerja terampil dibanding nilai-nilai kebangsaan."
      ],
      answerIndex: [3]
    },
    { //Soal 13
      type: "MULTIPLE_SELECTION",
      txtField: "Urbanisasi di Indonesia meningkat pesat sejak tahun 1970-an, seiring pembangunan industri dan perluasan lapangan kerja di kota-kota besar. Fenomena ini menimbulkan dua dampak sosial utama. Di satu sisi, kota menjadi pusat pertumbuhan ekonomi baru; di sisi lain, muncul masalah sosial seperti pemukiman kumuh, kemacetan, dan kesenjangan sosial.\n\nBeberapa ahli berpendapat bahwa urbanisasi tidak akan menjadi masalah jika diimbangi dengan kebijakan pembangunan wilayah yang merata. Artinya, kesempatan ekonomi di daerah harus diperkuat agar masyarakat tidak terpaksa pindah ke kota. Pendapat ini menekankan bahwa urbanisasi bukan semata-mata persoalan migrasi, tetapi juga ketimpangan struktural antar wilayah.",
      question: "Berdasarkan teks di atas, pernyataan berikut yang relevan dengan gagasan penulis adalah ….",
      options: [
        "Urbanisasi merupakan akibat dari pembangunan yang tidak merata antara kota dan desa.",
        "Urbanisasi menimbulkan dampak sosial seperti kemacetan dan kesenjangan sosial.",
        "Urbanisasi tidak akan menjadi masalah besar jika daerah memiliki kesempatan ekonomi yang merata.",
        "Urbanisasi sepenuhnya disebabkan oleh meningkatnya jumlah penduduk di desa.",
        "Urbanisasi menggambarkan adanya ketimpangan struktural antara desa dan kota."
      ],
      answerIndex: [0, 1, 2, 4]
    },
    { //Soal 14
      txtField: "Urbanisasi di Indonesia meningkat pesat sejak tahun 1970-an, seiring pembangunan industri dan perluasan lapangan kerja di kota-kota besar. Fenomena ini menimbulkan dua dampak sosial utama. Di satu sisi, kota menjadi pusat pertumbuhan ekonomi baru; di sisi lain, muncul masalah sosial seperti pemukiman kumuh, kemacetan, dan kesenjangan sosial.\n\nBeberapa ahli berpendapat bahwa urbanisasi tidak akan menjadi masalah jika diimbangi dengan kebijakan pembangunan wilayah yang merata. Artinya, kesempatan ekonomi di daerah harus diperkuat agar masyarakat tidak terpaksa pindah ke kota. Pendapat ini menekankan bahwa urbanisasi bukan semata-mata persoalan migrasi, tetapi juga ketimpangan struktural antar wilayah.",
      question: "Fakta yang paling mendukung gagasan utama bacaan adalah …",
      options: [
        "migran kota umumnya berasal dari wilayah yang peluang ekonominya terbatas.",
        "jumlah pengguna transportasi umum di kota besar terus meningkat setiap tahun.",
        "banyak desa di Indonesia mengalami lonjakan harga tanah sejak tahun 2000-an.",
        "pemukiman kumuh menunjukkan pertumbuhan ekonomi yang pesat."
      ],
      answerIndex: [0]
    },
    { //Soal 15
      type: "MULTIPLE_SELECTION",
      txtField: "Banyak kota di Indonesia kini menerapkan konsep “kota pintar” atau smart city. Konsep ini tidak hanya soal teknologi, tetapi bagaimana kota dapat meningkatkan kualitas hidup warganya melalui data, konektivitas, pelayanan publik yang efisien, serta pelibatan masyarakat. Misalnya, aplikasi daring untuk pelaporan fasilitas publik rusak dan sistem transportasi berbasis data yang membantu mengurangi kemacetan serta polusi. Namun, tantangan besar tetap ada: infrastruktur digital, literasi masyarakat, anggaran, dan keberpihakan pada kelompok rentan. Dalam jangka panjang, kota yang mampu mengintegrasikan teknologi dengan kebijakan pro-warga dan berkelanjutan akan lebih unggul dalam persaingan global.",
      question: "Tentukan pernyataan berikut ini yang benar sesuai dengan informasi dari teks di atas!",
      options: [
        "Konsep smart city hanya menekankan pada penggunaan teknologi mutakhir di kota-kota besar.",
        "Salah satu tujuan utama kota pintar adalah meningkatkan kualitas hidup warga melalui pelayanan publik yang efisien.",
        "Tantangan penerapan smart city antara lain terkait dengan literasi digital masyarakat dan anggaran.",
        "Penulis berpendapat bahwa teknologi cukup menjadi solusi tunggal bagi semua persoalan perkotaan.",
        "Keberpihakan terhadap kelompok rentan disebut sebagai salah satu aspek penting dalam mewujudkan kota pintar."
      ],
      answerIndex: [1, 2, 4]
    },
    { //Soal 16
      txtField: "Indonesia menjadi negara penting bagi negara-negara di benua Asia, Afrika, dan kemudian Amerika Latin. Pada awal 1960-an, Indonesia menggandeng bangsa-bangsa lain yang baru merdeka bergabung dalam Gerakan Non Blok (GNB). Wadah itu menjadi wujud sikap politik internasional Indonesia yang tak mau menjadi pion Blok Barat maupun Blok Timur yang sedang sengit bersaing dalam Perang Dingin.\n\nBegitulah Sukarno membangun dunia baru yang bertentangan dengan kemauan para imperialis lama. Dunia baru itu adalah kemerdekaan 100 persen dari bangsa-bangsa yang dulunya terjadi menjadi bangsa yang setara dengan bekas penjajah mereka. Tentu saja dengan membawa Indonesia yang masih muda menggerakkan bangsa-bangsa Asia-Afrika, Sukarno menjadi masalah bagi negara-negara imperialis seperti Kerajaan Inggris ataupun Amerika Serikat.\n\nNamun, prestasi yang patut dibanggakan itu tak dipahami lagi setelah 1965, bahkan tak diajarkan dalam pelajaran sejarah Indonesia bagaimana Sukarno membawa Indonesia dalam membangun dunia baru. Maka, hingga hari ini orang Indonesia tak paham bagaimana Indonesia pernah berusaha membangun dunia yang merdeka dan setara.",
      question: "Berdasarkan teks di atas, ide pokok yang terdapat pada paragraf pertama adalah …",
      options: [
        "Indonesia aktif menjalin kerja sama ekonomi dengan negara-negara Barat",
        "Indonesia menolak menjadi bagian dari persaingan Blok Barat dan Blok Timur",
        "Indonesia membantu negara-negara Amerika Latin dalam bidang industri",
        "Indonesia bergabung dengan Blok Timur untuk menghadapi Blok Barat",
        "Indonesia berperan penting dalam persaingan antara Blok Barat dan Blok Timur"
      ],
      answerIndex: [1]
    },
    { //Soal 17
      txtField: "Indonesia menjadi negara penting bagi negara-negara di benua Asia, Afrika, dan kemudian Amerika Latin. Pada awal 1960-an, Indonesia menggandeng bangsa-bangsa lain yang baru merdeka bergabung dalam Gerakan Non Blok (GNB). Wadah itu menjadi wujud sikap politik internasional Indonesia yang tak mau menjadi pion Blok Barat maupun Blok Timur yang sedang sengit bersaing dalam Perang Dingin.\n\nBegitulah Sukarno membangun dunia baru yang bertentangan dengan kemauan para imperialis lama. Dunia baru itu adalah kemerdekaan 100 persen dari bangsa-bangsa yang dulunya terjadi menjadi bangsa yang setara dengan bekas penjajah mereka. Tentu saja dengan membawa Indonesia yang masih muda menggerakkan bangsa-bangsa Asia-Afrika, Sukarno menjadi masalah bagi negara-negara imperialis seperti Kerajaan Inggris ataupun Amerika Serikat.\n\nNamun, prestasi yang patut dibanggakan itu tak dipahami lagi setelah 1965, bahkan tak diajarkan dalam pelajaran sejarah Indonesia bagaimana Sukarno membawa Indonesia dalam membangun dunia baru. Maka, hingga hari ini orang Indonesia tak paham bagaimana Indonesia pernah berusaha membangun dunia yang merdeka dan setara.",
      question: "Berdasarkan teks, sikap Sukarno terhadap kekuatan imperialis dunia adalah ….",
      options: [
        "patuh terhadap kepentingan negara-negara Barat",
        "netral karena tidak berpihak dalam persaingan di Perang Dingin",
        "berani karena menentang dominasi kekuatan imperialis",
        "nasionalis karena fokus pada pembangunan ekonomi dalam negeri",
        "egois sehingga menimbulkan masalah bagi Inggris dan Amerika"
      ],
      answerIndex: [2]
    },
    { //Soal 18
      type: "MULTIPLE_SELECTION",
      txtField: "Indonesia menjadi negara penting bagi negara-negara di benua Asia, Afrika, dan kemudian Amerika Latin. Pada awal 1960-an, Indonesia menggandeng bangsa-bangsa lain yang baru merdeka bergabung dalam Gerakan Non Blok (GNB). Wadah itu menjadi wujud sikap politik internasional Indonesia yang tak mau menjadi pion Blok Barat maupun Blok Timur yang sedang sengit bersaing dalam Perang Dingin.\n\nBegitulah Sukarno membangun dunia baru yang bertentangan dengan kemauan para imperialis lama. Dunia baru itu adalah kemerdekaan 100 persen dari bangsa-bangsa yang dulunya terjadi menjadi bangsa yang setara dengan bekas penjajah mereka. Tentu saja dengan membawa Indonesia yang masih muda menggerakkan bangsa-bangsa Asia-Afrika, Sukarno menjadi masalah bagi negara-negara imperialis seperti Kerajaan Inggris ataupun Amerika Serikat.\n\nNamun, prestasi yang patut dibanggakan itu tak dipahami lagi setelah 1965, bahkan tak diajarkan dalam pelajaran sejarah Indonesia bagaimana Sukarno membawa Indonesia dalam membangun dunia baru. Maka, hingga hari ini orang Indonesia tak paham bagaimana Indonesia pernah berusaha membangun dunia yang merdeka dan setara.",
      question: "Berikut ini pernyataan yang sesuai dengan isi bacaan, antara lain …",
      options: [
        "Gerakan Non Blok menunjukkan sikap politik bebas-aktif Indonesia dalam kancah global.",
        "Sukarno berupaya menciptakan dunia baru yang menolak dominasi kekuatan lama.",
        "Setelah 1965, peran Indonesia dalam GNB semakin dikenal luas di dunia pendidikan nasional.",
        "Negara-negara imperialis seperti Amerika Serikat mengagumi gagasan Sukarno.",
        "Banyak orang Indonesia kurang memahami upaya Sukarno membangun dunia yang setara."
      ],
      answerIndex: [0, 1, 4]
    },
    { //Soal 19
      type: "MULTIPLE_SELECTION",
      txtField: "Media sosial memberikan imbalan sosial yang kuat dan terukur melalui fitur suka, berbagi, dan jumlah pengikut. Selain menjadi sumber hiburan dan kesenangan sesaat, penelitian menunjukkan bahwa dorongan untuk memperoleh pengakuan sosial inilah yang sering membuat pengguna terus-menerus mengecek media sosial secara kompulsif. Sebagai makhluk sosial, manusia memiliki kebutuhan untuk diterima, diakui, dan menjadi bagian dari kelompok. Media sosial menawarkan cara yang mudah dan selalu tersedia untuk memenuhi kebutuhan tersebut, bahkan mampu menciptakan koneksi baru di tengah kehidupan modern yang banyak dihabiskan dalam sistem kerja jarak jauh.\n\nNamun, bentuk penghargaan sosial ini bisa dengan cepat berubah menjadi sumber tekanan. Rasa senang karena mendapatkan banyak likes bisa bergeser menjadi obsesi untuk terus mengejarnya. Ketika unggahan tidak mendapat tanggapan sesuai harapan, muncul kekecewaan, rasa iri terhadap kehidupan orang lain, bahkan ketakutan akan ketinggalan (FOMO). Dalam situasi yang lebih buruk, pengguna bisa saja menjadi sasaran komentar negatif atau ujaran kebencian di dunia maya.",
      question: "Pilihlah pernyataan berikut ini yang benar sesuai dengan informasi dari teks di atas!",
      options: [
        "Media sosial dapat memenuhi kebutuhan manusia untuk diterima dan diakui secara sosial.",
        "Penggunaan media sosial tidak memiliki hubungan dengan tekanan sosial.",
        "Dorongan untuk memperoleh pengakuan sosial dapat membuat seseorang terus-menerus membuka media sosial.",
        "Komentar negatif di media sosial tidak berpengaruh terhadap kondisi emosional pengguna.",
        "Media sosial membantu menciptakan koneksi sosial baru di tengah kehidupan modern dengan sistem kerja jarak jauh."
      ],
      answerIndex: [0, 2, 4]
    },
    { //Soal 20
      txtField: "Media sosial memberikan imbalan sosial yang kuat dan terukur melalui fitur suka, berbagi, dan jumlah pengikut. Selain menjadi sumber hiburan dan kesenangan sesaat, penelitian menunjukkan bahwa dorongan untuk memperoleh pengakuan sosial inilah yang sering membuat pengguna terus-menerus mengecek media sosial secara kompulsif. Sebagai makhluk sosial, manusia memiliki kebutuhan untuk diterima, diakui, dan menjadi bagian dari kelompok. Media sosial menawarkan cara yang mudah dan selalu tersedia untuk memenuhi kebutuhan tersebut, bahkan mampu menciptakan koneksi baru di tengah kehidupan modern yang banyak dihabiskan dalam sistem kerja jarak jauh.\n\nNamun, bentuk penghargaan sosial ini bisa dengan cepat berubah menjadi sumber tekanan. Rasa senang karena mendapatkan banyak likes bisa bergeser menjadi obsesi untuk terus mengejarnya. Ketika unggahan tidak mendapat tanggapan sesuai harapan, muncul kekecewaan, rasa iri terhadap kehidupan orang lain, bahkan ketakutan akan ketinggalan (FOMO). Dalam situasi yang lebih buruk, pengguna bisa saja menjadi sasaran komentar negatif atau ujaran kebencian di dunia maya.",
      question: "Hubungan sebab-akibat yang paling tepat antara kebutuhan sosial manusia dan dampak penggunaan media sosial berdasarkan teks adalah ….",
      options: [
        "Karena manusia adalah makhluk sosial, media sosial diciptakan hanya untuk memenuhi hiburan dan komunikasi jarak jauh.",
        "Karena media sosial memberikan penghargaan sosial yang cepat, manusia menjadi lebih produktif dan jarang mengalami tekanan sosial.",
        "Karena manusia membutuhkan penerimaan sosial, media sosial menjadi sarana yang efektif sekaligus berisiko menimbulkan tekanan emosional.",
        "Karena media sosial mudah diakses, semua orang dapat menghindari perasaan iri dan ketakutan akan ketinggalan (FOMO).",
        "Karena media sosial menciptakan hubungan sosial baru, manusia tidak lagi membutuhkan pengakuan dari lingkungan sekitarnya."
      ],
      answerIndex: [2]
    },
    { //Soal 21
      type: "MULTIPLE_SELECTION",
      txtField: "Secara ilmiah, rasa yang kita kenali hanya terdiri dari lima jenis, yaitu asin, manis, asam, pahit, dan gurih (umami), sebagai representasi dari sinyal kimia spesifik yang tertangkap lidah, jelas James. N. Palmer, peneliti dari University of Pennsylvania. “Kita bukan hanya mengenali rasa dari suatu makanan, tapi kombinasi dari rasa tersebut dengan aromanya. Persepsi itu yang menjadikan pengalaman kita berbeda”, tambahnya. Hal ini dapat menyingkap misteri mengapa setiap orang punya selera yang berbeda terhadap makanan, meski punya sensor lidah yang sama.\n\nSaat kita mengunyah, makanan akan bercampur dengan enzim dalam ludah. Hal ini memungkinkan adanya kontak antara makanan dengan lidah, yang terdiri dari kumpulan tonjolan kecil bernama papila. Tonjolan ini memiliki sekitar 50 hingga 100 sensor pengecap, yang masing-masing dapat mengenali kelima rasa, mulai dari manis hingga gurih.\n\n“Manusia menggunakan lima rasa untuk mengenali molekul spesifik yang terkandung dalam makanan”, ujar Kathryn Medler, profesor dari University of Buffalo. “Kita menyukai makanan manis, asin, atau gurih, karena molekul yang memiliki rasa tersebut banyak diperlukan tubuh. Sebaliknya, kita cenderung menghindari makanan asam, sebagai indikator makanan yang mungkin sudah busuk, dan juga pahit, sebagai pengenal racun potensial bagi tubuh. Tapi yang menarik dari lidah adalah, kita bisa melatih preferensinya, sehingga beberapa orang malah menyukai rasa asam dan pahit pada makanan tertentu”, papar Medler.\n\nSelain rasa, proses mengunyah juga melepas molekul odoran yang menghasilkan aroma khas. Molekul ini akan mengalir melalui saluran nasofaring menuju bagian belakang hidung, sehingga hidung masih bekerja saat makanan berada di rongga mulut. Proses ini dikenal dengan istilah retronasal olfaction, yang dapat mempengaruhi persepsi di otak kita. Contohnya, saus siraman steak dan coklat memiliki tingkat kepahitan, keasaman, dan kemanisan yang mirip, tapi punya aroma yang berbeda sehingga kita mempersepsikannya sebagai rasa yang berbeda.\n\nSetelah mengenali perbedaan rasa dengan persepsi, kita menjadi lebih mudah memahami bagaimana pengaruh DNA terhadap alasan mengapa kita menyukai dan membenci makanan tertentu. Gen kita menentukan bagaimana cara kita membentuk persepsi pada otak, bukan rasa yang dikenali lidah.\n\nDaun ketumbar segar, misalnya, memiliki aroma asam mirip jeruk akibat senyawa aldehid yang dikandungnya. Namun karena adanya variasi pada gen reseptor pada hidung kita, beberapa orang dapat lebih sensitif terhadap aldehid tersebut, sehingga mengunyah daun ketumbar terasa seperti memakan sabun. Fenomena ini terjadi karena aroma aldehid yang terlepas saat daun tergerus menginvasi sensor oversensitif di hidung.",
      question: "Pilihlah pernyataan yang sesuai dengan informasi pada bacaan di atas!",
      options: [
        "Semua orang dapat mengenali kelima rasa yang sama",
        "Rasa pahit digunakan sebagai indikator penanda makanan busuk",
        "Persepsi rasa yang kita alami merupakan kombinasi informasi dari lidah dan hidung",
        "Setiap orang dapat memiliki persepsi berbeda terhadap makanan yang sama",
        "Selera manusia terhadap makanan ditentukan oleh kemampuan lidahnya"
      ],
      answerIndex: [0, 2, 3]
    },
    { //Soal 22
      txtField: "Secara ilmiah, rasa yang kita kenali hanya terdiri dari lima jenis, yaitu asin, manis, asam, pahit, dan gurih (umami), sebagai representasi dari sinyal kimia spesifik yang tertangkap lidah, jelas James. N. Palmer, peneliti dari University of Pennsylvania. “Kita bukan hanya mengenali rasa dari suatu makanan, tapi kombinasi dari rasa tersebut dengan aromanya. Persepsi itu yang menjadikan pengalaman kita berbeda”, tambahnya. Hal ini dapat menyingkap misteri mengapa setiap orang punya selera yang berbeda terhadap makanan, meski punya sensor lidah yang sama.\n\nSaat kita mengunyah, makanan akan bercampur dengan enzim dalam ludah. Hal ini memungkinkan adanya kontak antara makanan dengan lidah, yang terdiri dari kumpulan tonjolan kecil bernama papila. Tonjolan ini memiliki sekitar 50 hingga 100 sensor pengecap, yang masing-masing dapat mengenali kelima rasa, mulai dari manis hingga gurih.\n\n“Manusia menggunakan lima rasa untuk mengenali molekul spesifik yang terkandung dalam makanan”, ujar Kathryn Medler, profesor dari University of Buffalo. “Kita menyukai makanan manis, asin, atau gurih, karena molekul yang memiliki rasa tersebut banyak diperlukan tubuh. Sebaliknya, kita cenderung menghindari makanan asam, sebagai indikator makanan yang mungkin sudah busuk, dan juga pahit, sebagai pengenal racun potensial bagi tubuh. Tapi yang menarik dari lidah adalah, kita bisa melatih preferensinya, sehingga beberapa orang malah menyukai rasa asam dan pahit pada makanan tertentu”, papar Medler.\n\nSelain rasa, proses mengunyah juga melepas molekul odoran yang menghasilkan aroma khas. Molekul ini akan mengalir melalui saluran nasofaring menuju bagian belakang hidung, sehingga hidung masih bekerja saat makanan berada di rongga mulut. Proses ini dikenal dengan istilah retronasal olfaction, yang dapat mempengaruhi persepsi di otak kita. Contohnya, saus siraman steak dan coklat memiliki tingkat kepahitan, keasaman, dan kemanisan yang mirip, tapi punya aroma yang berbeda sehingga kita mempersepsikannya sebagai rasa yang berbeda.\n\nSetelah mengenali perbedaan rasa dengan persepsi, kita menjadi lebih mudah memahami bagaimana pengaruh DNA terhadap alasan mengapa kita menyukai dan membenci makanan tertentu. Gen kita menentukan bagaimana cara kita membentuk persepsi pada otak, bukan rasa yang dikenali lidah.\n\nDaun ketumbar segar, misalnya, memiliki aroma asam mirip jeruk akibat senyawa aldehid yang dikandungnya. Namun karena adanya variasi pada gen reseptor pada hidung kita, beberapa orang dapat lebih sensitif terhadap aldehid tersebut, sehingga mengunyah daun ketumbar terasa seperti memakan sabun. Fenomena ini terjadi karena aroma aldehid yang terlepas saat daun tergerus menginvasi sensor oversensitif di hidung.",
      question: "Bagaimana proses retronasal olfaction mempengaruhi selera manusia?",
      options: [
        "Proses tersebut menentukan rasa utama suatu makanan sebelum dikombinasikan dengan rasa lain",
        "Proses tersebut mengkategorikan rasa pahit menjadi berbagai jenis sensasi berbeda, seperti pada coklat dan saus steak",
        "Proses tersebut mendorong kontak antara enzim dengan makanan di rongga mulut",
        "Proses tersebut menangkap aroma makanan yang sedang dikunyah, dan memberi informasi tambahan pada otak",
        "Proses tersebut dapat mengenali rasa manis dan asam untuk mendeteksi gula dan menjauhi makanan busuk"
      ],
      answerIndex: [3]
    },
    { //Soal 23
      txtField: "Secara ilmiah, rasa yang kita kenali hanya terdiri dari lima jenis, yaitu asin, manis, asam, pahit, dan gurih (umami), sebagai representasi dari sinyal kimia spesifik yang tertangkap lidah, jelas James. N. Palmer, peneliti dari University of Pennsylvania. “Kita bukan hanya mengenali rasa dari suatu makanan, tapi kombinasi dari rasa tersebut dengan aromanya. Persepsi itu yang menjadikan pengalaman kita berbeda”, tambahnya. Hal ini dapat menyingkap misteri mengapa setiap orang punya selera yang berbeda terhadap makanan, meski punya sensor lidah yang sama.\n\nSaat kita mengunyah, makanan akan bercampur dengan enzim dalam ludah. Hal ini memungkinkan adanya kontak antara makanan dengan lidah, yang terdiri dari kumpulan tonjolan kecil bernama papila. Tonjolan ini memiliki sekitar 50 hingga 100 sensor pengecap, yang masing-masing dapat mengenali kelima rasa, mulai dari manis hingga gurih.\n\n“Manusia menggunakan lima rasa untuk mengenali molekul spesifik yang terkandung dalam makanan”, ujar Kathryn Medler, profesor dari University of Buffalo. “Kita menyukai makanan manis, asin, atau gurih, karena molekul yang memiliki rasa tersebut banyak diperlukan tubuh. Sebaliknya, kita cenderung menghindari makanan asam, sebagai indikator makanan yang mungkin sudah busuk, dan juga pahit, sebagai pengenal racun potensial bagi tubuh. Tapi yang menarik dari lidah adalah, kita bisa melatih preferensinya, sehingga beberapa orang malah menyukai rasa asam dan pahit pada makanan tertentu”, papar Medler.\n\nSelain rasa, proses mengunyah juga melepas molekul odoran yang menghasilkan aroma khas. Molekul ini akan mengalir melalui saluran nasofaring menuju bagian belakang hidung, sehingga hidung masih bekerja saat makanan berada di rongga mulut. Proses ini dikenal dengan istilah retronasal olfaction, yang dapat mempengaruhi persepsi di otak kita. Contohnya, saus siraman steak dan coklat memiliki tingkat kepahitan, keasaman, dan kemanisan yang mirip, tapi punya aroma yang berbeda sehingga kita mempersepsikannya sebagai rasa yang berbeda.\n\nSetelah mengenali perbedaan rasa dengan persepsi, kita menjadi lebih mudah memahami bagaimana pengaruh DNA terhadap alasan mengapa kita menyukai dan membenci makanan tertentu. Gen kita menentukan bagaimana cara kita membentuk persepsi pada otak, bukan rasa yang dikenali lidah.\n\nDaun ketumbar segar, misalnya, memiliki aroma asam mirip jeruk akibat senyawa aldehid yang dikandungnya. Namun karena adanya variasi pada gen reseptor pada hidung kita, beberapa orang dapat lebih sensitif terhadap aldehid tersebut, sehingga mengunyah daun ketumbar terasa seperti memakan sabun. Fenomena ini terjadi karena aroma aldehid yang terlepas saat daun tergerus menginvasi sensor oversensitif di hidung.",
      question: "Berdasarkan informasi yang terkandung dalam teks di atas, apa tujuan penulis saat membahas kaitan antara rasa, persepsi, dan DNA?",
      options: [
        "Untuk menekankan pentingnya fungsi papila dalam menentukan preferensi makanan",
        "Untuk memperkenalkan peranan DNA dalam mengubah sensasi rasa makanan",
        "Untuk menjelaskan bagaimana variasi gen mempengaruhi persepsi terhadap makanan tanpa mengubah rasa",
        "Untuk mendukung pendapat bahwa deteksi aroma lebih penting dari deteksi rasa dalam penentuan persepsi",
        "Untuk menjelaskan mengapa banyak orang menganggap rasa daun ketumbar mirip sabun"
      ],
      answerIndex: [2]
    },
    { //Soal 24
      txtField: "Secara ilmiah, rasa yang kita kenali hanya terdiri dari lima jenis, yaitu asin, manis, asam, pahit, dan gurih (umami), sebagai representasi dari sinyal kimia spesifik yang tertangkap lidah, jelas James. N. Palmer, peneliti dari University of Pennsylvania. “Kita bukan hanya mengenali rasa dari suatu makanan, tapi kombinasi dari rasa tersebut dengan aromanya. Persepsi itu yang menjadikan pengalaman kita berbeda”, tambahnya. Hal ini dapat menyingkap misteri mengapa setiap orang punya selera yang berbeda terhadap makanan, meski punya sensor lidah yang sama.\n\nSaat kita mengunyah, makanan akan bercampur dengan enzim dalam ludah. Hal ini memungkinkan adanya kontak antara makanan dengan lidah, yang terdiri dari kumpulan tonjolan kecil bernama papila. Tonjolan ini memiliki sekitar 50 hingga 100 sensor pengecap, yang masing-masing dapat mengenali kelima rasa, mulai dari manis hingga gurih.\n\n“Manusia menggunakan lima rasa untuk mengenali molekul spesifik yang terkandung dalam makanan”, ujar Kathryn Medler, profesor dari University of Buffalo. “Kita menyukai makanan manis, asin, atau gurih, karena molekul yang memiliki rasa tersebut banyak diperlukan tubuh. Sebaliknya, kita cenderung menghindari makanan asam, sebagai indikator makanan yang mungkin sudah busuk, dan juga pahit, sebagai pengenal racun potensial bagi tubuh. Tapi yang menarik dari lidah adalah, kita bisa melatih preferensinya, sehingga beberapa orang malah menyukai rasa asam dan pahit pada makanan tertentu”, papar Medler.\n\nSelain rasa, proses mengunyah juga melepas molekul odoran yang menghasilkan aroma khas. Molekul ini akan mengalir melalui saluran nasofaring menuju bagian belakang hidung, sehingga hidung masih bekerja saat makanan berada di rongga mulut. Proses ini dikenal dengan istilah retronasal olfaction, yang dapat mempengaruhi persepsi di otak kita. Contohnya, saus siraman steak dan coklat memiliki tingkat kepahitan, keasaman, dan kemanisan yang mirip, tapi punya aroma yang berbeda sehingga kita mempersepsikannya sebagai rasa yang berbeda.\n\nSetelah mengenali perbedaan rasa dengan persepsi, kita menjadi lebih mudah memahami bagaimana pengaruh DNA terhadap alasan mengapa kita menyukai dan membenci makanan tertentu. Gen kita menentukan bagaimana cara kita membentuk persepsi pada otak, bukan rasa yang dikenali lidah.\n\nDaun ketumbar segar, misalnya, memiliki aroma asam mirip jeruk akibat senyawa aldehid yang dikandungnya. Namun karena adanya variasi pada gen reseptor pada hidung kita, beberapa orang dapat lebih sensitif terhadap aldehid tersebut, sehingga mengunyah daun ketumbar terasa seperti memakan sabun. Fenomena ini terjadi karena aroma aldehid yang terlepas saat daun tergerus menginvasi sensor oversensitif di hidung.",
      question: "Berdasarkan informasi yang tertera dalam teks, mengapa sebagian orang menganggap rasa daun ketumbar mirip sabun?",
      options: [
        "Mereka memiliki variasi genetik yang membuatnya lebih sensitif terhadap aroma aldehid pada daun ketumbar",
        "Mereka memiliki sensitivitas tinggi terhadap rasa asam, yang menyamarkan rasa asli daun ketumbar",
        "Mereka memiliki lebih sedikit papila yang dibutuhkan untuk mendeteksi rasa daun ketumbar",
        "Mereka memiliki defisiensi enzim pada ludah, sehingga mengubah rasa daun ketumbar",
        "Mereka memiliki preferensi terhadap rasa sabun, sehingga mempengaruhi persepsi di otak"
      ],
      answerIndex: [0]
    },
    { //Soal 25
      type: "MULTIPLE_SELECTION",
      txtField: "Secara ilmiah, rasa yang kita kenali hanya terdiri dari lima jenis, yaitu asin, manis, asam, pahit, dan gurih (umami), sebagai representasi dari sinyal kimia spesifik yang tertangkap lidah, jelas James. N. Palmer, peneliti dari University of Pennsylvania. “Kita bukan hanya mengenali rasa dari suatu makanan, tapi kombinasi dari rasa tersebut dengan aromanya. Persepsi itu yang menjadikan pengalaman kita berbeda”, tambahnya. Hal ini dapat menyingkap misteri mengapa setiap orang punya selera yang berbeda terhadap makanan, meski punya sensor lidah yang sama.\n\nSaat kita mengunyah, makanan akan bercampur dengan enzim dalam ludah. Hal ini memungkinkan adanya kontak antara makanan dengan lidah, yang terdiri dari kumpulan tonjolan kecil bernama papila. Tonjolan ini memiliki sekitar 50 hingga 100 sensor pengecap, yang masing-masing dapat mengenali kelima rasa, mulai dari manis hingga gurih.\n\n“Manusia menggunakan lima rasa untuk mengenali molekul spesifik yang terkandung dalam makanan”, ujar Kathryn Medler, profesor dari University of Buffalo. “Kita menyukai makanan manis, asin, atau gurih, karena molekul yang memiliki rasa tersebut banyak diperlukan tubuh. Sebaliknya, kita cenderung menghindari makanan asam, sebagai indikator makanan yang mungkin sudah busuk, dan juga pahit, sebagai pengenal racun potensial bagi tubuh. Tapi yang menarik dari lidah adalah, kita bisa melatih preferensinya, sehingga beberapa orang malah menyukai rasa asam dan pahit pada makanan tertentu”, papar Medler.\n\nSelain rasa, proses mengunyah juga melepas molekul odoran yang menghasilkan aroma khas. Molekul ini akan mengalir melalui saluran nasofaring menuju bagian belakang hidung, sehingga hidung masih bekerja saat makanan berada di rongga mulut. Proses ini dikenal dengan istilah retronasal olfaction, yang dapat mempengaruhi persepsi di otak kita. Contohnya, saus siraman steak dan coklat memiliki tingkat kepahitan, keasaman, dan kemanisan yang mirip, tapi punya aroma yang berbeda sehingga kita mempersepsikannya sebagai rasa yang berbeda.\n\nSetelah mengenali perbedaan rasa dengan persepsi, kita menjadi lebih mudah memahami bagaimana pengaruh DNA terhadap alasan mengapa kita menyukai dan membenci makanan tertentu. Gen kita menentukan bagaimana cara kita membentuk persepsi pada otak, bukan rasa yang dikenali lidah.\n\nDaun ketumbar segar, misalnya, memiliki aroma asam mirip jeruk akibat senyawa aldehid yang dikandungnya. Namun karena adanya variasi pada gen reseptor pada hidung kita, beberapa orang dapat lebih sensitif terhadap aldehid tersebut, sehingga mengunyah daun ketumbar terasa seperti memakan sabun. Fenomena ini terjadi karena aroma aldehid yang terlepas saat daun tergerus menginvasi sensor oversensitif di hidung.",
      question: "Selain daun ketumbar, makanan lain yang juga memicu polarisasi ekstrim adalah durian. Bagi populasi kawasan Asia Timur dan Tenggara, molekul volatil yang dikeluarkan buah durian matang dikenali sebagai aroma yang harum dan manis. Sementara bagi banyak populasi keturunan Caucasian, aroma durian dianggap tengik, bahkan dibandingkan dengan bau keju busuk, sepatu basah, loker pria, dan berbagai bau tak sedap lainnya. Berikut ini, manakah inferensi yang sesuai dengan informasi yang terkandung dalam teks, terkait fenomena tersebut?",
      options: [
        "Terdapat perbedaan gen pendeteksi aroma pada populasi Asia Timur & Tenggara dengan populasi Caucasian",
        "Orang Caucasian mengenali lima rasa yang berbeda dengan orang Asia Timur dan Tenggara",
        "DNA hanya mempengaruhi persepsi di otak, sedangkan aroma murni ditentukan oleh latar belakang sosial dan budaya",
        "Variasi genetik menyebabkan penerimaan berbeda antara orang Asia Tenggara dengan orang Caucasian terhadap durian",
        "Durian melepas molekul odoran saat dimakan, yang dapat dideteksi oleh hidung"
      ],
      answerIndex: [0, 3, 4]
    },
    { //Soal 26
      type: "MULTIPLE_SELECTION",
      txtField: "Dogma dalam menjalani diet selalu berkuat pada kalori. Lebih banyak makan dibanding membakar kalori, maka berat badan bertambah; makan lebih sedikit, maka berat badan menurun. Ratusan aplikasi mengklaim mempunyai database informasi nutrisi berbagai makanan untuk mengukur harian kalori yang kita konsumsi. Syaratnya? Hanya mengisi kolom umur, tinggi badan, berat badan, dan jenis kelamin semata. Namun, apakah benar sesederhana itu? Nyatanya, hitungan kalori tidak selalu merepresentasikan secara akurat energi yang dikonsumsi dan dibakar oleh tubuh kita.\n\nPada abad 19, kimiawan Amerika, Wilbur O. Atwater mempopulerkan metode pengukuran kalori, dengan cara “membakar” makanan dengan menggunakan bom kalorimeter. Makanan diletakkan pada wadah tertutup yang ditempatkan dalam air dengan takaran tertentu, lalu dialiri listrik hingga terjadi reaksi pembakaran. Kalori makanan diukur melalui suhu yang dihasilkan selama reaksi berlangsung. Semakin tinggi energi pada suatu makanan, maka semakin besar peningkatan suhu yang terjadi pada air di sekeliling wadah. Istilah kalori mengacu pada satuan energi yang dibutuhkan untuk menaikkan suhu satu gram air sebesar 1° Celsius.\n\nSayangnya, tidak semua makanan bersifat setara. Lebih tepatnya, bom kalorimeter kembangan Atwater tidak menggambarkan proses yang terjadi pada berbagai makanan berbeda sepanjang saluran pencernaan kita, dan bagaimana cara tubuh menyerap nutrisi tersebut. “Kita telah lama mengetahui bahwa terdapat makanan yang berbeda dicerna secara berbeda pula,” ujar Peter Ellis, ahli biokimia King’s College London.\n\nKacang tanah, misalnya, kaya akan kandungan lemak. Pada aplikasi penghitung kalori, kacang dianggap memiliki kalori tinggi berdasarkan metode Atwater, sehingga perlu dihindari dalam diet. Padahal sebenarnya, kalori tersebut tidak seluruhnya dapat diserap tubuh. “Molekul lemak tersimpan di balik dinding sel, yang tersusun atas serat selulosa yang tidak bisa kita cerna. Jadi ide bahwa seluruh makanan dapat diukur dengan metode yang sama pastinya tidak akurat”, tambah Ellis.\n\nMelalui riset yang dilakukan bersama timnya, Ellis menemukan bahwa tubuh kita kesulitan untuk mengakses pati dan gula yang tersimpan pada biji-bijian kaya serat, seperti kacang-kacangan. Selain itu, kelemahan lain dari metode Atwater adalah tidak mengonsiderasi efek pengolahan makanan dalam proses memasak. Energi yang kita peroleh dari suatu hidangan jadi seringkali tidak sama dengan hitungan kasar berbagai bahan mentahnya, karena proses memasak dapat membuat banyak makronutrien (pati, lemak, dan protein) menjadi lebih mudah dicerna dan diserap tubuh.",
      question: "Berdasarkan teks di atas, mengapa perhitungan harian konsumsi kalori pada banyak aplikasi tidak selalu akurat untuk mengukur energi yang dikonsumsi dan dibakar oleh tubuh?",
      options: [
        "Perhitungan kalori gagal memasukkan faktor variasi laju metabolisme tiap individu",
        "Perhitungan kalori tidak secara akurat mengukur jumlah panas yang dihasilkan oleh seluruh reaksi yang berlangsung dalam tubuh",
        "Perhitungan kalori didasarkan pada metode yang usang, seperti bom kalorimeter",
        "Perhitungan kalori mengabaikan pengaruh proses memasak terhadap serapan makronutrien",
        "Perhitungan kalori tidak memperhitungkan proses pencernaan dan penyerapan jenis makanan yang berbeda"
      ],
      answerIndex: [2, 3, 4]
    },
    { //Soal 27
      txtField: "Dogma dalam menjalani diet selalu berkuat pada kalori. Lebih banyak makan dibanding membakar kalori, maka berat badan bertambah; makan lebih sedikit, maka berat badan menurun. Ratusan aplikasi mengklaim mempunyai database informasi nutrisi berbagai makanan untuk mengukur harian kalori yang kita konsumsi. Syaratnya? Hanya mengisi kolom umur, tinggi badan, berat badan, dan jenis kelamin semata. Namun, apakah benar sesederhana itu? Nyatanya, hitungan kalori tidak selalu merepresentasikan secara akurat energi yang dikonsumsi dan dibakar oleh tubuh kita.\n\nPada abad 19, kimiawan Amerika, Wilbur O. Atwater mempopulerkan metode pengukuran kalori, dengan cara “membakar” makanan dengan menggunakan bom kalorimeter. Makanan diletakkan pada wadah tertutup yang ditempatkan dalam air dengan takaran tertentu, lalu dialiri listrik hingga terjadi reaksi pembakaran. Kalori makanan diukur melalui suhu yang dihasilkan selama reaksi berlangsung. Semakin tinggi energi pada suatu makanan, maka semakin besar peningkatan suhu yang terjadi pada air di sekeliling wadah. Istilah kalori mengacu pada satuan energi yang dibutuhkan untuk menaikkan suhu satu gram air sebesar 1° Celsius.\n\nSayangnya, tidak semua makanan bersifat setara. Lebih tepatnya, bom kalorimeter kembangan Atwater tidak menggambarkan proses yang terjadi pada berbagai makanan berbeda sepanjang saluran pencernaan kita, dan bagaimana cara tubuh menyerap nutrisi tersebut. “Kita telah lama mengetahui bahwa terdapat makanan yang berbeda dicerna secara berbeda pula,” ujar Peter Ellis, ahli biokimia King’s College London.\n\nKacang tanah, misalnya, kaya akan kandungan lemak. Pada aplikasi penghitung kalori, kacang dianggap memiliki kalori tinggi berdasarkan metode Atwater, sehingga perlu dihindari dalam diet. Padahal sebenarnya, kalori tersebut tidak seluruhnya dapat diserap tubuh. “Molekul lemak tersimpan di balik dinding sel, yang tersusun atas serat selulosa yang tidak bisa kita cerna. Jadi ide bahwa seluruh makanan dapat diukur dengan metode yang sama pastinya tidak akurat”, tambah Ellis.\n\nMelalui riset yang dilakukan bersama timnya, Ellis menemukan bahwa tubuh kita kesulitan untuk mengakses pati dan gula yang tersimpan pada biji-bijian kaya serat, seperti kacang-kacangan. Selain itu, kelemahan lain dari metode Atwater adalah tidak mengonsiderasi efek pengolahan makanan dalam proses memasak. Energi yang kita peroleh dari suatu hidangan jadi seringkali tidak sama dengan hitungan kasar berbagai bahan mentahnya, karena proses memasak dapat membuat banyak makronutrien (pati, lemak, dan protein) menjadi lebih mudah dicerna dan diserap tubuh.",
      question: "Faktor apakah yang tidak dipertimbangkan dalam pengukuran kalori menggunakan metode bom kalorimeter Atwater?",
      options: [
        "Efisiensi sistem pencernaan dalam memecah dan menyerap makanan dengan komposisi kimia yang berbeda",
        "Variasi individu dalam menjalankan aktivitas hariannya",
        "Pengaruh suhu lingkungan pada kawasan tempat pengukuran dilakukan",
        "Seberapa lama durasi proses memasak yang diperlukan saat makanan diolah",
        "Jumlah panas yang dihasilkan oleh tubuh saat reaksi kimia berlangsung sepanjang proses pencernaan"
      ],
      answerIndex: [0]
    },
    { //Soal 28
      txtField: "Dogma dalam menjalani diet selalu berkuat pada kalori. Lebih banyak makan dibanding membakar kalori, maka berat badan bertambah; makan lebih sedikit, maka berat badan menurun. Ratusan aplikasi mengklaim mempunyai database informasi nutrisi berbagai makanan untuk mengukur harian kalori yang kita konsumsi. Syaratnya? Hanya mengisi kolom umur, tinggi badan, berat badan, dan jenis kelamin semata. Namun, apakah benar sesederhana itu? Nyatanya, hitungan kalori tidak selalu merepresentasikan secara akurat energi yang dikonsumsi dan dibakar oleh tubuh kita.\n\nPada abad 19, kimiawan Amerika, Wilbur O. Atwater mempopulerkan metode pengukuran kalori, dengan cara “membakar” makanan dengan menggunakan bom kalorimeter. Makanan diletakkan pada wadah tertutup yang ditempatkan dalam air dengan takaran tertentu, lalu dialiri listrik hingga terjadi reaksi pembakaran. Kalori makanan diukur melalui suhu yang dihasilkan selama reaksi berlangsung. Semakin tinggi energi pada suatu makanan, maka semakin besar peningkatan suhu yang terjadi pada air di sekeliling wadah. Istilah kalori mengacu pada satuan energi yang dibutuhkan untuk menaikkan suhu satu gram air sebesar 1° Celsius.\n\nSayangnya, tidak semua makanan bersifat setara. Lebih tepatnya, bom kalorimeter kembangan Atwater tidak menggambarkan proses yang terjadi pada berbagai makanan berbeda sepanjang saluran pencernaan kita, dan bagaimana cara tubuh menyerap nutrisi tersebut. “Kita telah lama mengetahui bahwa terdapat makanan yang berbeda dicerna secara berbeda pula,” ujar Peter Ellis, ahli biokimia King’s College London.\n\nKacang tanah, misalnya, kaya akan kandungan lemak. Pada aplikasi penghitung kalori, kacang dianggap memiliki kalori tinggi berdasarkan metode Atwater, sehingga perlu dihindari dalam diet. Padahal sebenarnya, kalori tersebut tidak seluruhnya dapat diserap tubuh. “Molekul lemak tersimpan di balik dinding sel, yang tersusun atas serat selulosa yang tidak bisa kita cerna. Jadi ide bahwa seluruh makanan dapat diukur dengan metode yang sama pastinya tidak akurat”, tambah Ellis.\n\nMelalui riset yang dilakukan bersama timnya, Ellis menemukan bahwa tubuh kita kesulitan untuk mengakses pati dan gula yang tersimpan pada biji-bijian kaya serat, seperti kacang-kacangan. Selain itu, kelemahan lain dari metode Atwater adalah tidak mengonsiderasi efek pengolahan makanan dalam proses memasak. Energi yang kita peroleh dari suatu hidangan jadi seringkali tidak sama dengan hitungan kasar berbagai bahan mentahnya, karena proses memasak dapat membuat banyak makronutrien (pati, lemak, dan protein) menjadi lebih mudah dicerna dan diserap tubuh.",
      question: "Manakah pernyataan yang paling tepat menjelaskan alasan mengapa energi yang terkandung dalam kacang tanah tidak dapat sepenuhnya diserap oleh tubuh?",
      options: [
        "Molekul lemak pada kacang tanah sulit dipecah dan diserap oleh sel tubuh",
        "Kacang tanah memiliki kadar serat tinggi yang menghalangi penyerapan energi",
        "Terjadi serangkaian reaksi kimia dalam tubuh untuk mencerna kacang tanah, sehingga kadar kalorinya berkurang",
        "Kacang tanah memiliki nilai energi rendah karena komposisi kimianya yang unik",
        "Kacang tanah melepas lebih sedikit kalori jika dibandingkan dengan jenis makanan lainnya"
      ],
      answerIndex: [1]
    },
    { //Soal 29
      txtField: "Dogma dalam menjalani diet selalu berkuat pada kalori. Lebih banyak makan dibanding membakar kalori, maka berat badan bertambah; makan lebih sedikit, maka berat badan menurun. Ratusan aplikasi mengklaim mempunyai database informasi nutrisi berbagai makanan untuk mengukur harian kalori yang kita konsumsi. Syaratnya? Hanya mengisi kolom umur, tinggi badan, berat badan, dan jenis kelamin semata. Namun, apakah benar sesederhana itu? Nyatanya, hitungan kalori tidak selalu merepresentasikan secara akurat energi yang dikonsumsi dan dibakar oleh tubuh kita.\n\nPada abad 19, kimiawan Amerika, Wilbur O. Atwater mempopulerkan metode pengukuran kalori, dengan cara “membakar” makanan dengan menggunakan bom kalorimeter. Makanan diletakkan pada wadah tertutup yang ditempatkan dalam air dengan takaran tertentu, lalu dialiri listrik hingga terjadi reaksi pembakaran. Kalori makanan diukur melalui suhu yang dihasilkan selama reaksi berlangsung. Semakin tinggi energi pada suatu makanan, maka semakin besar peningkatan suhu yang terjadi pada air di sekeliling wadah. Istilah kalori mengacu pada satuan energi yang dibutuhkan untuk menaikkan suhu satu gram air sebesar 1° Celsius.\n\nSayangnya, tidak semua makanan bersifat setara. Lebih tepatnya, bom kalorimeter kembangan Atwater tidak menggambarkan proses yang terjadi pada berbagai makanan berbeda sepanjang saluran pencernaan kita, dan bagaimana cara tubuh menyerap nutrisi tersebut. “Kita telah lama mengetahui bahwa terdapat makanan yang berbeda dicerna secara berbeda pula,” ujar Peter Ellis, ahli biokimia King’s College London.\n\nKacang tanah, misalnya, kaya akan kandungan lemak. Pada aplikasi penghitung kalori, kacang dianggap memiliki kalori tinggi berdasarkan metode Atwater, sehingga perlu dihindari dalam diet. Padahal sebenarnya, kalori tersebut tidak seluruhnya dapat diserap tubuh. “Molekul lemak tersimpan di balik dinding sel, yang tersusun atas serat selulosa yang tidak bisa kita cerna. Jadi ide bahwa seluruh makanan dapat diukur dengan metode yang sama pastinya tidak akurat”, tambah Ellis.\n\nMelalui riset yang dilakukan bersama timnya, Ellis menemukan bahwa tubuh kita kesulitan untuk mengakses pati dan gula yang tersimpan pada biji-bijian kaya serat, seperti kacang-kacangan. Selain itu, kelemahan lain dari metode Atwater adalah tidak mengonsiderasi efek pengolahan makanan dalam proses memasak. Energi yang kita peroleh dari suatu hidangan jadi seringkali tidak sama dengan hitungan kasar berbagai bahan mentahnya, karena proses memasak dapat membuat banyak makronutrien (pati, lemak, dan protein) menjadi lebih mudah dicerna dan diserap tubuh.",
      question: "Berdasarkan informasi yang tertera dalam teks, kesimpulan apa yang dapat ditarik saat seseorang mengonsumsi makanan berkalori tinggi namun sulit dicerna dan diserap oleh tubuh?",
      options: [
        "Orang tersebut akan mengalami peningkatan suhu tubuh akibat pelepasan energi saat pencernaan berlangsung",
        "Jumlah asupan kalori harian orang tersebut akan mengalami overestimasi jika diukur menggunakan aplikasi yang didasari pada metode Atwater",
        "Tubuh orang tersebut akan menyimpan kalori yang tidak terserap dalam bentuk lemak, sehingga berat badannya bertambah",
        "Laju metabolisme orang tersebut akan secara otomatis menyesuaikan dengan penyerapan kalori yang rendah tersebut",
        "Orang tersebut akan mengalami kekenyangan lebih lama karena kadar kalori yang tinggi telah memenuhi kebutuhan hariannya"
      ],
      answerIndex: [1]
    },
    { //Soal 30
      txtField: "Dogma dalam menjalani diet selalu berkuat pada kalori. Lebih banyak makan dibanding membakar kalori, maka berat badan bertambah; makan lebih sedikit, maka berat badan menurun. Ratusan aplikasi mengklaim mempunyai database informasi nutrisi berbagai makanan untuk mengukur harian kalori yang kita konsumsi. Syaratnya? Hanya mengisi kolom umur, tinggi badan, berat badan, dan jenis kelamin semata. Namun, apakah benar sesederhana itu? Nyatanya, hitungan kalori tidak selalu merepresentasikan secara akurat energi yang dikonsumsi dan dibakar oleh tubuh kita.\n\nPada abad 19, kimiawan Amerika, Wilbur O. Atwater mempopulerkan metode pengukuran kalori, dengan cara “membakar” makanan dengan menggunakan bom kalorimeter. Makanan diletakkan pada wadah tertutup yang ditempatkan dalam air dengan takaran tertentu, lalu dialiri listrik hingga terjadi reaksi pembakaran. Kalori makanan diukur melalui suhu yang dihasilkan selama reaksi berlangsung. Semakin tinggi energi pada suatu makanan, maka semakin besar peningkatan suhu yang terjadi pada air di sekeliling wadah. Istilah kalori mengacu pada satuan energi yang dibutuhkan untuk menaikkan suhu satu gram air sebesar 1° Celsius.\n\nSayangnya, tidak semua makanan bersifat setara. Lebih tepatnya, bom kalorimeter kembangan Atwater tidak menggambarkan proses yang terjadi pada berbagai makanan berbeda sepanjang saluran pencernaan kita, dan bagaimana cara tubuh menyerap nutrisi tersebut. “Kita telah lama mengetahui bahwa terdapat makanan yang berbeda dicerna secara berbeda pula,” ujar Peter Ellis, ahli biokimia King’s College London.\n\nKacang tanah, misalnya, kaya akan kandungan lemak. Pada aplikasi penghitung kalori, kacang dianggap memiliki kalori tinggi berdasarkan metode Atwater, sehingga perlu dihindari dalam diet. Padahal sebenarnya, kalori tersebut tidak seluruhnya dapat diserap tubuh. “Molekul lemak tersimpan di balik dinding sel, yang tersusun atas serat selulosa yang tidak bisa kita cerna. Jadi ide bahwa seluruh makanan dapat diukur dengan metode yang sama pastinya tidak akurat”, tambah Ellis.\n\nMelalui riset yang dilakukan bersama timnya, Ellis menemukan bahwa tubuh kita kesulitan untuk mengakses pati dan gula yang tersimpan pada biji-bijian kaya serat, seperti kacang-kacangan. Selain itu, kelemahan lain dari metode Atwater adalah tidak mengonsiderasi efek pengolahan makanan dalam proses memasak. Energi yang kita peroleh dari suatu hidangan jadi seringkali tidak sama dengan hitungan kasar berbagai bahan mentahnya, karena proses memasak dapat membuat banyak makronutrien (pati, lemak, dan protein) menjadi lebih mudah dicerna dan diserap tubuh.",
      question: "Apa niatan utama penulis dalam membahas batasan dan kekurangan perhitungan kalori harian dan kaitannya dengan proses pencernaan makanan?",
      options: [
        "Untuk mendorong penggunaan metode alternatif untuk digunakan untuk mengukur dan melacak konsumsi kalori harian",
        "Untuk mendukung pemahaman yang lebih komprehensif terkait proses kompleks yang terlibat dalam asupan dan pengeluaran energi dalam tubuh",
        "Untuk meragukan riwayat kontribusi Wilbur O. Atwater dalam bidang studi ilmu nutrisi",
        "Untuk menyuguhkan ketidakcocokan informasi yang disuguhkan oleh aplikasi penghitung kalori dengan energi yang digunakan tubuh",
        "Untuk mengajak orang yang tengah melakukan diet agar tidak bergantung pada perhitungan kalori kasar untuk mengendalikan berat badannya"
      ],
      answerIndex: [1]
    }
  ],
}

  // Beres
const soalLitBing: ujianSession = {
  name: "Literasi Bahasa Inggris",
  description: "Ada 20 soal yang akan dikerjakan dalam 20 menit",
  duration: 20 * 60,
  questions: [
    { //Soal 1
      txtField: "Plastic packaging presents a major problem for both the environment and human health. Most plastics are made from fossil fuels and are not biodegradable. They can remain in landfills and oceans for hundreds of years, breaking down into tiny pieces known as microplastics. These microplastics pollute water, enter the food chain, and harm marine life through ingestion and entanglement. In addition, some plastics release harmful chemicals that can disrupt hormones or even cause cancer, especially when heated. Plastic production also depends on fossil fuels, which contributes to global warming and resource depletion.\n\nTo overcome these problems, scientists have turned to seaweed as a promising raw material for bioplastics. Seaweed is an abundant and fast- growing marine plant that requires no land, fertilizer, or freshwater to cultivate. It absorbs carbon dioxide as it grows, making it environmentally beneficial. Seaweed contains natural polysaccharides such as agar, carrageenan, and alginate that can be processed into flexible, transparent, and biodegradable films for food packaging. Some types of seaweed even have natural antimicrobial properties that can help prevent bacterial growth on food surfaces.\n\nDespite its potential, seaweed- based bioplastic still faces challenges. Production costs remain high, and the resulting materials are often less durable and water- resistant than petroleum- based plastics. Researchers are now developing better processing techniques to improve quality and lower costs. With continuous innovation, seaweed bioplastics could become a sustainable alternative for future food packaging.\n\nText B\n\nSeaweed is a marine algae found in coastal waters around the world, and it is attracting growing interest because of its versatility and renewability. It has been applied in food and nutrition and is used as an ingredient in soups, snacks, and health- foods.\n\nIn the cosmetics and pharmaceuticals sectors, seaweed extracts and polysaccharides (such as agar and carrageenan) function as thickeners, stabilisers and active bio- compounds with antioxidant or antimicrobial features.\n\nFurthermore, seaweed is increasingly used in agriculture and sustainable industry: as bio- fertilisers and biostimulants to improve soil health, and in the production of bioplastics and packaging materials that decompose naturally without leaving harmful microplastics.\n\nBecause seaweed cultivation needs no arable land and minimal fresh water, it offers a low- impact alternative to traditional farming. With continued research and investment, seaweed is positioned to become a key raw material in the transition to a more sustainable, circular economy.",
      question: "Based on Text A, what is the main concern about using conventional plastic packaging?",
      options: [
        "It releases nutrients that pollute water and soil.",
        "It cannot be recycled properly due to limited facilities.",
        "It releases hormones when heated that can cause cancer.",
        "It can not be broken down into tiny pieces in landfills and oceans.",
        "It causes serious pollution and potential health hazards."
      ],
      answerIndex: [4]
    },
    { //Soal 2
      txtField: "Plastic packaging presents a major problem for both the environment and human health. Most plastics are made from fossil fuels and are not biodegradable. They can remain in landfills and oceans for hundreds of years, breaking down into tiny pieces known as microplastics. These microplastics pollute water, enter the food chain, and harm marine life through ingestion and entanglement. In addition, some plastics release harmful chemicals that can disrupt hormones or even cause cancer, especially when heated. Plastic production also depends on fossil fuels, which contributes to global warming and resource depletion.\n\nTo overcome these problems, scientists have turned to seaweed as a promising raw material for bioplastics. Seaweed is an abundant and fast- growing marine plant that requires no land, fertilizer, or freshwater to cultivate. It absorbs carbon dioxide as it grows, making it environmentally beneficial. Seaweed contains natural polysaccharides such as agar, carrageenan, and alginate that can be processed into flexible, transparent, and biodegradable films for food packaging. Some types of seaweed even have natural antimicrobial properties that can help prevent bacterial growth on food surfaces.\n\nDespite its potential, seaweed- based bioplastic still faces challenges. Production costs remain high, and the resulting materials are often less durable and water- resistant than petroleum- based plastics. Researchers are now developing better processing techniques to improve quality and lower costs. With continuous innovation, seaweed bioplastics could become a sustainable alternative for future food packaging.\n\nText B\n\nSeaweed is a marine algae found in coastal waters around the world, and it is attracting growing interest because of its versatility and renewability. It has been applied in food and nutrition and is used as an ingredient in soups, snacks, and health- foods.\n\nIn the cosmetics and pharmaceuticals sectors, seaweed extracts and polysaccharides (such as agar and carrageenan) function as thickeners, stabilisers and active bio- compounds with antioxidant or antimicrobial features.\n\nFurthermore, seaweed is increasingly used in agriculture and sustainable industry: as bio- fertilisers and biostimulants to improve soil health, and in the production of bioplastics and packaging materials that decompose naturally without leaving harmful microplastics.\n\nBecause seaweed cultivation needs no arable land and minimal fresh water, it offers a low- impact alternative to traditional farming. With continued research and investment, seaweed is positioned to become a key raw material in the transition to a more sustainable, circular economy.",
      question: "The word they in Text A paragraph 1 refers to....",
      options: [
        "Fossil fuels",
        "Harmful chemicals",
        "Microplastics",
        "Plastics",
        "Marine life"
      ],
      answerIndex: [3]
    },
    { //Soal 3
      txtField: "Plastic packaging presents a major problem for both the environment and human health. Most plastics are made from fossil fuels and are not biodegradable. They can remain in landfills and oceans for hundreds of years, breaking down into tiny pieces known as microplastics. These microplastics pollute water, enter the food chain, and harm marine life through ingestion and entanglement. In addition, some plastics release harmful chemicals that can disrupt hormones or even cause cancer, especially when heated. Plastic production also depends on fossil fuels, which contributes to global warming and resource depletion.\n\nTo overcome these problems, scientists have turned to seaweed as a promising raw material for bioplastics. Seaweed is an abundant and fast- growing marine plant that requires no land, fertilizer, or freshwater to cultivate. It absorbs carbon dioxide as it grows, making it environmentally beneficial. Seaweed contains natural polysaccharides such as agar, carrageenan, and alginate that can be processed into flexible, transparent, and biodegradable films for food packaging. Some types of seaweed even have natural antimicrobial properties that can help prevent bacterial growth on food surfaces.\n\nDespite its potential, seaweed- based bioplastic still faces challenges. Production costs remain high, and the resulting materials are often less durable and water- resistant than petroleum- based plastics. Researchers are now developing better processing techniques to improve quality and lower costs. With continuous innovation, seaweed bioplastics could become a sustainable alternative for future food packaging.\n\nText B\n\nSeaweed is a marine algae found in coastal waters around the world, and it is attracting growing interest because of its versatility and renewability. It has been applied in food and nutrition and is used as an ingredient in soups, snacks, and health- foods.\n\nIn the cosmetics and pharmaceuticals sectors, seaweed extracts and polysaccharides (such as agar and carrageenan) function as thickeners, stabilisers and active bio- compounds with antioxidant or antimicrobial features.\n\nFurthermore, seaweed is increasingly used in agriculture and sustainable industry: as bio- fertilisers and biostimulants to improve soil health, and in the production of bioplastics and packaging materials that decompose naturally without leaving harmful microplastics.\n\nBecause seaweed cultivation needs no arable land and minimal fresh water, it offers a low- impact alternative to traditional farming. With continued research and investment, seaweed is positioned to become a key raw material in the transition to a more sustainable, circular economy.",
      question: "Which of the following is a recommendation from Text A?",
      options: [
        "Seaweed grows quickly and helps absorb carbon dioxide.",
        "Seaweed-based materials can be utilized for sustainable food packaging.",
        "Some plastics packaging can be replaced by marine plants.",
        "Seaweed contains natural polysaccharides used in food packaging.",
        "Seaweed bioplastics are still more expensive than conventional plastics."
      ],
      answerIndex: [1]
    },
    { //Soal 4
      txtField: "Plastic packaging presents a major problem for both the environment and human health. Most plastics are made from fossil fuels and are not biodegradable. They can remain in landfills and oceans for hundreds of years, breaking down into tiny pieces known as microplastics. These microplastics pollute water, enter the food chain, and harm marine life through ingestion and entanglement. In addition, some plastics release harmful chemicals that can disrupt hormones or even cause cancer, especially when heated. Plastic production also depends on fossil fuels, which contributes to global warming and resource depletion.\n\nTo overcome these problems, scientists have turned to seaweed as a promising raw material for bioplastics. Seaweed is an abundant and fast- growing marine plant that requires no land, fertilizer, or freshwater to cultivate. It absorbs carbon dioxide as it grows, making it environmentally beneficial. Seaweed contains natural polysaccharides such as agar, carrageenan, and alginate that can be processed into flexible, transparent, and biodegradable films for food packaging. Some types of seaweed even have natural antimicrobial properties that can help prevent bacterial growth on food surfaces.\n\nDespite its potential, seaweed- based bioplastic still faces challenges. Production costs remain high, and the resulting materials are often less durable and water- resistant than petroleum- based plastics. Researchers are now developing better processing techniques to improve quality and lower costs. With continuous innovation, seaweed bioplastics could become a sustainable alternative for future food packaging.\n\nText B\n\nSeaweed is a marine algae found in coastal waters around the world, and it is attracting growing interest because of its versatility and renewability. It has been applied in food and nutrition and is used as an ingredient in soups, snacks, and health- foods.\n\nIn the cosmetics and pharmaceuticals sectors, seaweed extracts and polysaccharides (such as agar and carrageenan) function as thickeners, stabilisers and active bio- compounds with antioxidant or antimicrobial features.\n\nFurthermore, seaweed is increasingly used in agriculture and sustainable industry: as bio- fertilisers and biostimulants to improve soil health, and in the production of bioplastics and packaging materials that decompose naturally without leaving harmful microplastics.\n\nBecause seaweed cultivation needs no arable land and minimal fresh water, it offers a low- impact alternative to traditional farming. With continued research and investment, seaweed is positioned to become a key raw material in the transition to a more sustainable, circular economy.",
      question: "What is the relation between the two texts?",
      options: [
        "Text B broadens the discussion in Text A by explaining other uses of seaweed beyond bioplastic production.",
        "Text B opposes the idea of using seaweed as a sustainable raw material for packaging.",
        "Text B discusses the nutritional benefits of seaweed, while Text A explains its chemical composition.",
        "Both texts describe the negative environmental effects of seaweed-based materials.",
        "Text A focuses on the industrial uses of seaweed, while Text B focuses only on its ecological role."
      ],
      answerIndex: [0]
    },
    { //Soal 5
      txtField: "Plastic packaging presents a major problem for both the environment and human health. Most plastics are made from fossil fuels and are not biodegradable. They can remain in landfills and oceans for hundreds of years, breaking down into tiny pieces known as microplastics. These microplastics pollute water, enter the food chain, and harm marine life through ingestion and entanglement. In addition, some plastics release harmful chemicals that can disrupt hormones or even cause cancer, especially when heated. Plastic production also depends on fossil fuels, which contributes to global warming and resource depletion.\n\nTo overcome these problems, scientists have turned to seaweed as a promising raw material for bioplastics. Seaweed is an abundant and fast- growing marine plant that requires no land, fertilizer, or freshwater to cultivate. It absorbs carbon dioxide as it grows, making it environmentally beneficial. Seaweed contains natural polysaccharides such as agar, carrageenan, and alginate that can be processed into flexible, transparent, and biodegradable films for food packaging. Some types of seaweed even have natural antimicrobial properties that can help prevent bacterial growth on food surfaces.\n\nDespite its potential, seaweed- based bioplastic still faces challenges. Production costs remain high, and the resulting materials are often less durable and water- resistant than petroleum- based plastics. Researchers are now developing better processing techniques to improve quality and lower costs. With continuous innovation, seaweed bioplastics could become a sustainable alternative for future food packaging.\n\nText B\n\nSeaweed is a marine algae found in coastal waters around the world, and it is attracting growing interest because of its versatility and renewability. It has been applied in food and nutrition and is used as an ingredient in soups, snacks, and health- foods.\n\nIn the cosmetics and pharmaceuticals sectors, seaweed extracts and polysaccharides (such as agar and carrageenan) function as thickeners, stabilisers and active bio- compounds with antioxidant or antimicrobial features.\n\nFurthermore, seaweed is increasingly used in agriculture and sustainable industry: as bio- fertilisers and biostimulants to improve soil health, and in the production of bioplastics and packaging materials that decompose naturally without leaving harmful microplastics.\n\nBecause seaweed cultivation needs no arable land and minimal fresh water, it offers a low- impact alternative to traditional farming. With continued research and investment, seaweed is positioned to become a key raw material in the transition to a more sustainable, circular economy.",
      question: "The information about the industrial and environmental benefits of using seaweed can be found in....",
      options: [
        "Text A paragraph 1 and Text B paragraph 1",
        "Text A paragraph 2 and Text B paragraph 3",
        "Text A paragraph 3 and Text B paragraph 2",
        "Text A paragraph 2 and Text B paragraph 2",
        "Text A paragraph 3 and Text B paragraph 4"
      ],
      answerIndex: [1]
    },
    { //Soal 6
      txtField: "Plastic packaging presents a major problem for both the environment and human health. Most plastics are made from fossil fuels and are not biodegradable. They can remain in landfills and oceans for hundreds of years, breaking down into tiny pieces known as microplastics. These microplastics pollute water, enter the food chain, and harm marine life through ingestion and entanglement. In addition, some plastics release harmful chemicals that can disrupt hormones or even cause cancer, especially when heated. Plastic production also depends on fossil fuels, which contributes to global warming and resource depletion.\n\nTo overcome these problems, scientists have turned to seaweed as a promising raw material for bioplastics. Seaweed is an abundant and fast- growing marine plant that requires no land, fertilizer, or freshwater to cultivate. It absorbs carbon dioxide as it grows, making it environmentally beneficial. Seaweed contains natural polysaccharides such as agar, carrageenan, and alginate that can be processed into flexible, transparent, and biodegradable films for food packaging. Some types of seaweed even have natural antimicrobial properties that can help prevent bacterial growth on food surfaces.\n\nDespite its potential, seaweed- based bioplastic still faces challenges. Production costs remain high, and the resulting materials are often less durable and water- resistant than petroleum- based plastics. Researchers are now developing better processing techniques to improve quality and lower costs. With continuous innovation, seaweed bioplastics could become a sustainable alternative for future food packaging.\n\nText B\n\nSeaweed is a marine algae found in coastal waters around the world, and it is attracting growing interest because of its versatility and renewability. It has been applied in food and nutrition and is used as an ingredient in soups, snacks, and health- foods.\n\nIn the cosmetics and pharmaceuticals sectors, seaweed extracts and polysaccharides (such as agar and carrageenan) function as thickeners, stabilisers and active bio- compounds with antioxidant or antimicrobial features.\n\nFurthermore, seaweed is increasingly used in agriculture and sustainable industry: as bio- fertilisers and biostimulants to improve soil health, and in the production of bioplastics and packaging materials that decompose naturally without leaving harmful microplastics.\n\nBecause seaweed cultivation needs no arable land and minimal fresh water, it offers a low- impact alternative to traditional farming. With continued research and investment, seaweed is positioned to become a key raw material in the transition to a more sustainable, circular economy.",
      question: "According to both texts, what is most likely to happen in the future?",
      options: [
        "Seaweed-based materials will be further developed to support sustainable production.",
        "Seaweed farming will require more land and freshwater to meet global demand.",
        "Conventional plastics will still dominate because they are cheaper to produce.",
        "The development of seaweed packaging will slow down due to technical challenges.",
        "The environmental impact of seaweed cultivation will increase significantly."
      ],
      answerIndex: [0]
    },
    { //Soal 7
      txtField: "(1) When people move from rural environments to large urban areas, they bring more than just their belongings—they also carry their invisible microbial companions. (2) Recent studies reveal that urbanization can profoundly alter the human gut microbiome, the vast community of microorganisms that live in our digestive system and help regulate metabolism, immunity, and even mood. (3) Researchers comparing individuals who grew up in rural or forested regions with those who live in big cities found that the urban group tends to have lower microbial diversity. (4) This reduction is linked to lifestyle changes such as processed diets, limited exposure to soil and animals, and increased antibiotic use, all of which restrict contact with the diverse microbes found in natural settings. (5) Scientists suggest that these shifts in microbial composition may reflect how modern lifestyles are gradually reshaping the human body's internal ecosystem.\n\n(1) Scientists warn that this shrinking microbial diversity may have subtle but serious health implications. (2) A less varied gut microbiome has been associated with higher risks of allergies, asthma, obesity, diabetes, and autoimmune conditions. (3) Urban residents also tend to spend more time on digital devices, which can increase eye strain and reduce physical activity. (4) In traditional rural populations, people are routinely exposed to microbes through farming, outdoor play, and natural food fermentation, which may help build a resilient immune system. (5) In contrast, highly sanitized city living may protect against infection but inadvertently deprive the body of beneficial microbial encounters that train immune tolerance.\n\nTo counter this unintended consequence of modernization, researchers recommend practical steps to restore microbial richness: consuming probiotic and fermented foods, spending time in green spaces, and using antibiotics judiciously. Some scientists even advocate \"microbial rewilding,\" encouraging contact with nature to reintroduce missing microbial diversity. The",
      question: "Based on the passage, the less...the more...",
      options: [
        "processed food you eat - diverse your gut microbes are",
        "contact you have with soil - healthy your microbiome becomes",
        "antibiotics you take - balanced your immune system is",
        "microbes you encounter - adaptable your immune response becomes",
        "fermented food you consume - strong your digestion is"
      ],
      answerIndex: [0]
    },
    { //Soal 8
      txtField: "(1) When people move from rural environments to large urban areas, they bring more than just their belongings—they also carry their invisible microbial companions. (2) Recent studies reveal that urbanization can profoundly alter the human gut microbiome, the vast community of microorganisms that live in our digestive system and help regulate metabolism, immunity, and even mood. (3) Researchers comparing individuals who grew up in rural or forested regions with those who live in big cities found that the urban group tends to have lower microbial diversity. (4) This reduction is linked to lifestyle changes such as processed diets, limited exposure to soil and animals, and increased antibiotic use, all of which restrict contact with the diverse microbes found in natural settings. (5) Scientists suggest that these shifts in microbial composition may reflect how modern lifestyles are gradually reshaping the human body's internal ecosystem.\n\n(1) Scientists warn that this shrinking microbial diversity may have subtle but serious health implications. (2) A less varied gut microbiome has been associated with higher risks of allergies, asthma, obesity, diabetes, and autoimmune conditions. (3) Urban residents also tend to spend more time on digital devices, which can increase eye strain and reduce physical activity. (4) In traditional rural populations, people are routinely exposed to microbes through farming, outdoor play, and natural food fermentation, which may help build a resilient immune system. (5) In contrast, highly sanitized city living may protect against infection but inadvertently deprive the body of beneficial microbial encounters that train immune tolerance.\n\nTo counter this unintended consequence of modernization, researchers recommend practical steps to restore microbial richness: consuming probiotic and fermented foods, spending time in green spaces, and using antibiotics judiciously. Some scientists even advocate \"microbial rewilding,\" encouraging contact with nature to reintroduce missing microbial diversity. The",
      question: "The author describes the way microbiome diversity decreases most clearly in paragraph 1 sentence....",
      options: ["(1)", "(2)", "(3)", "(4)", "(5)"],
      answerIndex: [3]
    },
    { //Soal 9
      txtField: "(1) When people move from rural environments to large urban areas, they bring more than just their belongings—they also carry their invisible microbial companions. (2) Recent studies reveal that urbanization can profoundly alter the human gut microbiome, the vast community of microorganisms that live in our digestive system and help regulate metabolism, immunity, and even mood. (3) Researchers comparing individuals who grew up in rural or forested regions with those who live in big cities found that the urban group tends to have lower microbial diversity. (4) This reduction is linked to lifestyle changes such as processed diets, limited exposure to soil and animals, and increased antibiotic use, all of which restrict contact with the diverse microbes found in natural settings. (5) Scientists suggest that these shifts in microbial composition may reflect how modern lifestyles are gradually reshaping the human body's internal ecosystem.\n\n(1) Scientists warn that this shrinking microbial diversity may have subtle but serious health implications. (2) A less varied gut microbiome has been associated with higher risks of allergies, asthma, obesity, diabetes, and autoimmune conditions. (3) Urban residents also tend to spend more time on digital devices, which can increase eye strain and reduce physical activity. (4) In traditional rural populations, people are routinely exposed to microbes through farming, outdoor play, and natural food fermentation, which may help build a resilient immune system. (5) In contrast, highly sanitized city living may protect against infection but inadvertently deprive the body of beneficial microbial encounters that train immune tolerance.\n\nTo counter this unintended consequence of modernization, researchers recommend practical steps to restore microbial richness: consuming probiotic and fermented foods, spending time in green spaces, and using antibiotics judiciously. Some scientists even advocate \"microbial rewilding,\" encouraging contact with nature to reintroduce missing microbial diversity. The",
      question: "The irrelevant sentence in paragraph 2 is sentence....",
      options: ["(1)", "(2)", "(3)", "(4)", "(5)"],
      answerIndex: [2]
    },
    { //Soal 10
      txtField: "(1) When people move from rural environments to large urban areas, they bring more than just their belongings—they also carry their invisible microbial companions. (2) Recent studies reveal that urbanization can profoundly alter the human gut microbiome, the vast community of microorganisms that live in our digestive system and help regulate metabolism, immunity, and even mood. (3) Researchers comparing individuals who grew up in rural or forested regions with those who live in big cities found that the urban group tends to have lower microbial diversity. (4) This reduction is linked to lifestyle changes such as processed diets, limited exposure to soil and animals, and increased antibiotic use, all of which restrict contact with the diverse microbes found in natural settings. (5) Scientists suggest that these shifts in microbial composition may reflect how modern lifestyles are gradually reshaping the human body's internal ecosystem.\n\n(1) Scientists warn that this shrinking microbial diversity may have subtle but serious health implications. (2) A less varied gut microbiome has been associated with higher risks of allergies, asthma, obesity, diabetes, and autoimmune conditions. (3) Urban residents also tend to spend more time on digital devices, which can increase eye strain and reduce physical activity. (4) In traditional rural populations, people are routinely exposed to microbes through farming, outdoor play, and natural food fermentation, which may help build a resilient immune system. (5) In contrast, highly sanitized city living may protect against infection but inadvertently deprive the body of beneficial microbial encounters that train immune tolerance.\n\nTo counter this unintended consequence of modernization, researchers recommend practical steps to restore microbial richness: consuming probiotic and fermented foods, spending time in green spaces, and using antibiotics judiciously. Some scientists even advocate \"microbial rewilding,\" encouraging contact with nature to reintroduce missing microbial diversity. The",
      question: "The author would apparently agree the relationship between urban living and gut diversity discussed in the passage is similar to the phenomenon of...",
      options: [
        "globalization and cultural uniqueness",
        "teacher and student",
        "device password and privacy",
        "rainfall season and harvest time",
        "noise and communication"
      ],
      answerIndex: [0]
    },
    { //Soal 11
      txtField: "(1) When people move from rural environments to large urban areas, they bring more than just their belongings—they also carry their invisible microbial companions. (2) Recent studies reveal that urbanization can profoundly alter the human gut microbiome, the vast community of microorganisms that live in our digestive system and help regulate metabolism, immunity, and even mood. (3) Researchers comparing individuals who grew up in rural or forested regions with those who live in big cities found that the urban group tends to have lower microbial diversity. (4) This reduction is linked to lifestyle changes such as processed diets, limited exposure to soil and animals, and increased antibiotic use, all of which restrict contact with the diverse microbes found in natural settings. (5) Scientists suggest that these shifts in microbial composition may reflect how modern lifestyles are gradually reshaping the human body's internal ecosystem.\n\n(1) Scientists warn that this shrinking microbial diversity may have subtle but serious health implications. (2) A less varied gut microbiome has been associated with higher risks of allergies, asthma, obesity, diabetes, and autoimmune conditions. (3) Urban residents also tend to spend more time on digital devices, which can increase eye strain and reduce physical activity. (4) In traditional rural populations, people are routinely exposed to microbes through farming, outdoor play, and natural food fermentation, which may help build a resilient immune system. (5) In contrast, highly sanitized city living may protect against infection but inadvertently deprive the body of beneficial microbial encounters that train immune tolerance.\n\nTo counter this unintended consequence of modernization, researchers recommend practical steps to restore microbial richness: consuming probiotic and fermented foods, spending time in green spaces, and using antibiotics judiciously. Some scientists even advocate \"microbial rewilding,\" encouraging contact with nature to reintroduce missing microbial diversity. The",
      question: "Here are sentences taken from the passage. Please reorder the following sentences to form a coherent sequence.\n\n1. The reduction in microbial diversity is closely linked to modern urban lifestyles.\n2. Scientists warn that losing microbial diversity may lead to serious health problems.\n3. Researchers suggest restoring microbial richness through diet and nature exposure.\n4. Urbanization can significantly change the composition of the human gut microbiome.\n5. People in rural areas are more exposed to natural microbes through soil and animals.",
      options: [
        "4 - 2 - 5 - 1 - 3",
        "4 - 1 - 3 - 5 - 2",
        "4 - 5 - 1 - 3 - 2",
        "4 - 3 - 2 - 5 - 1",
        "4 - 1 - 2 - 5 - 3"
      ],
      answerIndex: [4]
    },
    { //Soal 12
      txtField: "Thread: Should I stop eating meat?\n\nJayM\nPosted: 12 June 2024, 09:28\nI've been reading about how meat production harms the environment, especially with all the carbon emissions and deforestation. I'm not sure if quitting meat completely would make any real difference though. Has anyone here tried going vegetarian for environmental reasons?\n\nNora\nPosted: 12 June 2024, 10:10\nI stopped eating beef two years ago and switched to plant-based meals most days. It actually feels good knowing I'm doing something small but positive. One person can't fix climate change, but millions making small choices can help.\n\nFelix\nPosted: 12 June 2024, 11:02\nI tried going vegan once but it didn't last long. I got tired, missed the taste, and it became expensive. I think it's more realistic to reduce meat rather than quit completely.\n\nLiam\nPosted: 12 June 2024, 14:25\nThere's also the cultural side. In some families, refusing meat can be seen as disrespectful. I think awareness and moderation are better than strict rules.\n\nCeline\nPosted: 12 June 2024, 18:00\nIf you're thinking about it for the planet, even small steps matter — like eating less red meat or supporting local farms. It's not about being perfect, just being conscious.\n\nDevon\nPosted: 13 June 2024, 08:15\nI work in environmental policy, and the data shows that meat production does have a huge carbon footprint, but transportation and energy use are even bigger factors. Reducing meat helps, but focusing only on food ignores other major sources of emissions.",
      question: "Which of the following is the problem stated at the beginning of the thread?",
      options: [
        "Finding it hard to afford vegetarian food",
        "Feeling unsure whether going meat-free helps the planet",
        "Trying to convince others to stop eating meat",
        "Struggling with health issues after quitting meat",
        "Feeling guilty for enjoying meat"
      ],
      answerIndex: [1]
    },
    { //Soal 13
      txtField: "Thread: Should I stop eating meat?\n\nJayM\nPosted: 12 June 2024, 09:28\nI've been reading about how meat production harms the environment, especially with all the carbon emissions and deforestation. I'm not sure if quitting meat completely would make any real difference though. Has anyone here tried going vegetarian for environmental reasons?\n\nNora\nPosted: 12 June 2024, 10:10\nI stopped eating beef two years ago and switched to plant-based meals most days. It actually feels good knowing I'm doing something small but positive. One person can't fix climate change, but millions making small choices can help.\n\nFelix\nPosted: 12 June 2024, 11:02\nI tried going vegan once but it didn't last long. I got tired, missed the taste, and it became expensive. I think it's more realistic to reduce meat rather than quit completely.\n\nLiam\nPosted: 12 June 2024, 14:25\nThere's also the cultural side. In some families, refusing meat can be seen as disrespectful. I think awareness and moderation are better than strict rules.\n\nCeline\nPosted: 12 June 2024, 18:00\nIf you're thinking about it for the planet, even small steps matter — like eating less red meat or supporting local farms. It's not about being perfect, just being conscious.\n\nDevon\nPosted: 13 June 2024, 08:15\nI work in environmental policy, and the data shows that meat production does have a huge carbon footprint, but transportation and energy use are even bigger factors. Reducing meat helps, but focusing only on food ignores other major sources of emissions.",
      question: "The word \"quit\" in JayM's post is closest in meaning to...",
      options: ["avoid", "cancel", "stop", "reduce", "deny"],
      answerIndex: [2]
    },
    { //Soal 14
      txtField: "Thread: Should I stop eating meat?\n\nJayM\nPosted: 12 June 2024, 09:28\nI've been reading about how meat production harms the environment, especially with all the carbon emissions and deforestation. I'm not sure if quitting meat completely would make any real difference though. Has anyone here tried going vegetarian for environmental reasons?\n\nNora\nPosted: 12 June 2024, 10:10\nI stopped eating beef two years ago and switched to plant-based meals most days. It actually feels good knowing I'm doing something small but positive. One person can't fix climate change, but millions making small choices can help.\n\nFelix\nPosted: 12 June 2024, 11:02\nI tried going vegan once but it didn't last long. I got tired, missed the taste, and it became expensive. I think it's more realistic to reduce meat rather than quit completely.\n\nLiam\nPosted: 12 June 2024, 14:25\nThere's also the cultural side. In some families, refusing meat can be seen as disrespectful. I think awareness and moderation are better than strict rules.\n\nCeline\nPosted: 12 June 2024, 18:00\nIf you're thinking about it for the planet, even small steps matter — like eating less red meat or supporting local farms. It's not about being perfect, just being conscious.\n\nDevon\nPosted: 13 June 2024, 08:15\nI work in environmental policy, and the data shows that meat production does have a huge carbon footprint, but transportation and energy use are even bigger factors. Reducing meat helps, but focusing only on food ignores other major sources of emissions.",
      question: "Who gave the most balanced and realistic advice?",
      options: ["Nora", "Felix", "Liam", "Celine", "Devon"],
      answerIndex: [3]
    },
    { //Soal 15
      txtField: "Thread: Should I stop eating meat?\n\nJayM\nPosted: 12 June 2024, 09:28\nI've been reading about how meat production harms the environment, especially with all the carbon emissions and deforestation. I'm not sure if quitting meat completely would make any real difference though. Has anyone here tried going vegetarian for environmental reasons?\n\nNora\nPosted: 12 June 2024, 10:10\nI stopped eating beef two years ago and switched to plant-based meals most days. It actually feels good knowing I'm doing something small but positive. One person can't fix climate change, but millions making small choices can help.\n\nFelix\nPosted: 12 June 2024, 11:02\nI tried going vegan once but it didn't last long. I got tired, missed the taste, and it became expensive. I think it's more realistic to reduce meat rather than quit completely.\n\nLiam\nPosted: 12 June 2024, 14:25\nThere's also the cultural side. In some families, refusing meat can be seen as disrespectful. I think awareness and moderation are better than strict rules.\n\nCeline\nPosted: 12 June 2024, 18:00\nIf you're thinking about it for the planet, even small steps matter — like eating less red meat or supporting local farms. It's not about being perfect, just being conscious.\n\nDevon\nPosted: 13 June 2024, 08:15\nI work in environmental policy, and the data shows that meat production does have a huge carbon footprint, but transportation and energy use are even bigger factors. Reducing meat helps, but focusing only on food ignores other major sources of emissions.",
      question: "Who added a new perspective by suggesting that other factors should also be considered related to the climate change issue?",
      options: ["Nora", "Felix", "Liam", "Celine", "Devon"],
      answerIndex: [4]
    },
    { //Soal 16
      txtField: "Thread: Should I stop eating meat?\n\nJayM\nPosted: 12 June 2024, 09:28\nI've been reading about how meat production harms the environment, especially with all the carbon emissions and deforestation. I'm not sure if quitting meat completely would make any real difference though. Has anyone here tried going vegetarian for environmental reasons?\n\nNora\nPosted: 12 June 2024, 10:10\nI stopped eating beef two years ago and switched to plant-based meals most days. It actually feels good knowing I'm doing something small but positive. One person can't fix climate change, but millions making small choices can help.\n\nFelix\nPosted: 12 June 2024, 11:02\nI tried going vegan once but it didn't last long. I got tired, missed the taste, and it became expensive. I think it's more realistic to reduce meat rather than quit completely.\n\nLiam\nPosted: 12 June 2024, 14:25\nThere's also the cultural side. In some families, refusing meat can be seen as disrespectful. I think awareness and moderation are better than strict rules.\n\nCeline\nPosted: 12 June 2024, 18:00\nIf you're thinking about it for the planet, even small steps matter — like eating less red meat or supporting local farms. It's not about being perfect, just being conscious.\n\nDevon\nPosted: 13 June 2024, 08:15\nI work in environmental policy, and the data shows that meat production does have a huge carbon footprint, but transportation and energy use are even bigger factors. Reducing meat helps, but focusing only on food ignores other major sources of emissions.",
      question: "What is the general tone of the thread?",
      options: ["Judgemental", "Encouraging", "Doubtful", "Sarcastic", "Defensive"],
      answerIndex: [1]
    },
    { //Soal 17
      imageUrl: `https://tan-sandye-90.tiiny.site/LBE-17-20.svg`,
      txtField: "As the COVID-19 pandemic forced thousands of Duke University employees to work remotely, a survey revealed that a clear majority would prefer continuing to work away from campus even when the health threat subsides. Specifically, of about 2,200 staff and faculty surveyed, 74% indicated they would like to work three to five days per week off-site. Many employees rated the elimination of the daily commute, increased flexibility and perceived higher productivity as the top benefits. However, challenges remain, most notably, establishing effective boundaries between work and personal life.\n\nIn response to these findings, Duke created a 25-member Work-From-Home Committee tasked with shaping post-pandemic work strategy. The committee emphasised that remote-work policies must accommodate the very diverse roles within the institution, some functions cannot be fulfilled from home, such as lab work, front-line healthcare or hands-on instruction. According to leadership, returning exclusively to the office is not the only option; hybrid models are likely, allowing teams to decide at the department level how often employees should be on-site. The university also noted that telecommuting aligns with Duke's climate goals, fewer daily car trips could help reduce carbon emissions and work toward a target of climate neutrality.\n\nAlthough remote work at Duke appears to have entered a new normal, the transition is by no means complete. Departments are encouraged to test pilots, gather data and refine their approach over time. As one administrator put it, \"there is no one-size-fits-all approach here.\" Ultimately, Duke's future work-landscape will balance flexibility, productivity and institutional culture as employees and the university adapt to a changed world of work.",
      question: "Which of the following statements is NOT TRUE according to the text?",
      options: [
        "Some university jobs require physical presence on campus.",
        "Remote work supports Duke's environmental goals.",
        "Employees found balancing home and work life difficult.",
        "All Duke employees are allowed to work remotely full-time.",
        "Leadership encourages flexibility in work arrangements."
      ],
      answerIndex: [3]
    },
    { //Soal 18
      imageUrl: `https://tan-sandye-90.tiiny.site/LBE-17-20.svg`,
      txtField: "As the COVID-19 pandemic forced thousands of Duke University employees to work remotely, a survey revealed that a clear majority would prefer continuing to work away from campus even when the health threat subsides. Specifically, of about 2,200 staff and faculty surveyed, 74% indicated they would like to work three to five days per week off-site. Many employees rated the elimination of the daily commute, increased flexibility and perceived higher productivity as the top benefits. However, challenges remain, most notably, establishing effective boundaries between work and personal life.\n\nIn response to these findings, Duke created a 25-member Work-From-Home Committee tasked with shaping post-pandemic work strategy. The committee emphasised that remote-work policies must accommodate the very diverse roles within the institution, some functions cannot be fulfilled from home, such as lab work, front-line healthcare or hands-on instruction. According to leadership, returning exclusively to the office is not the only option; hybrid models are likely, allowing teams to decide at the department level how often employees should be on-site. The university also noted that telecommuting aligns with Duke's climate goals, fewer daily car trips could help reduce carbon emissions and work toward a target of climate neutrality.\n\nAlthough remote work at Duke appears to have entered a new normal, the transition is by no means complete. Departments are encouraged to test pilots, gather data and refine their approach over time. As one administrator put it, \"there is no one-size-fits-all approach here.\" Ultimately, Duke's future work-landscape will balance flexibility, productivity and institutional culture as employees and the university adapt to a changed world of work.",
      question: "What can be inferred about Duke's leadership from the text?",
      options: [
        "They prioritize environmental goals over employee well-being.",
        "They are exploring hybrid models instead of one fixed policy.",
        "They insist on returning everyone to the office.",
        "They discourage experimentation with new work systems.",
        "They believe remote work harms institutional culture."
      ],
      answerIndex: [1]
    },
    { //Soal 19
      imageUrl: `https://tan-sandye-90.tiiny.site/LBE-17-20.svg`,
      txtField: "As the COVID-19 pandemic forced thousands of Duke University employees to work remotely, a survey revealed that a clear majority would prefer continuing to work away from campus even when the health threat subsides. Specifically, of about 2,200 staff and faculty surveyed, 74% indicated they would like to work three to five days per week off-site. Many employees rated the elimination of the daily commute, increased flexibility and perceived higher productivity as the top benefits. However, challenges remain, most notably, establishing effective boundaries between work and personal life.\n\nIn response to these findings, Duke created a 25-member Work-From-Home Committee tasked with shaping post-pandemic work strategy. The committee emphasised that remote-work policies must accommodate the very diverse roles within the institution, some functions cannot be fulfilled from home, such as lab work, front-line healthcare or hands-on instruction. According to leadership, returning exclusively to the office is not the only option; hybrid models are likely, allowing teams to decide at the department level how often employees should be on-site. The university also noted that telecommuting aligns with Duke's climate goals, fewer daily car trips could help reduce carbon emissions and work toward a target of climate neutrality.\n\nAlthough remote work at Duke appears to have entered a new normal, the transition is by no means complete. Departments are encouraged to test pilots, gather data and refine their approach over time. As one administrator put it, \"there is no one-size-fits-all approach here.\" Ultimately, Duke's future work-landscape will balance flexibility, productivity and institutional culture as employees and the university adapt to a changed world of work.",
      question: "Suppose Duke decided to make remote work mandatory for all employees. Based on the text, which problem would most likely arise?",
      options: [
        "The university would fail to meet its carbon reduction goals.",
        "Many employees would struggle to remain productive while working at home.",
        "Some departments would lose autonomy to adapt work models to their needs.",
        "Healthcare and laboratory work would become more efficient.",
        "The Work-From-Home Committee would be unnecessary."
      ],
      answerIndex: [2]
    },
    { //Soal 20
      imageUrl: `https://tan-sandye-90.tiiny.site/LBE-17-20.svg`,
      txtField: "As the COVID-19 pandemic forced thousands of Duke University employees to work remotely, a survey revealed that a clear majority would prefer continuing to work away from campus even when the health threat subsides. Specifically, of about 2,200 staff and faculty surveyed, 74% indicated they would like to work three to five days per week off-site. Many employees rated the elimination of the daily commute, increased flexibility and perceived higher productivity as the top benefits. However, challenges remain, most notably, establishing effective boundaries between work and personal life.\n\nIn response to these findings, Duke created a 25-member Work-From-Home Committee tasked with shaping post-pandemic work strategy. The committee emphasised that remote-work policies must accommodate the very diverse roles within the institution, some functions cannot be fulfilled from home, such as lab work, front-line healthcare or hands-on instruction. According to leadership, returning exclusively to the office is not the only option; hybrid models are likely, allowing teams to decide at the department level how often employees should be on-site. The university also noted that telecommuting aligns with Duke's climate goals, fewer daily car trips could help reduce carbon emissions and work toward a target of climate neutrality.\n\nAlthough remote work at Duke appears to have entered a new normal, the transition is by no means complete. Departments are encouraged to test pilots, gather data and refine their approach over time. As one administrator put it, \"there is no one-size-fits-all approach here.\" Ultimately, Duke's future work-landscape will balance flexibility, productivity and institutional culture as employees and the university adapt to a changed world of work.",
      question: "Based on the graph, most employees at Duke prefer to...",
      options: [
        "work fully on campus.",
        "work remotely five days a week.",
        "work remotely for one or two days.",
        "avoid remote work completely.",
        "work from home only once a week."
      ],
      answerIndex: [1]
    }
  ],
}

const soalPM: ujianSession = {
  name: "Penalaran Matematika",
  description: "Ada 20 soal yang akan dikerjakan dalam 42,5 menit",
  duration: 42.5 * 60,
  questions: [
    { //Soal 1
      txtField: "Keluarga Langlangbhumi adalah salah satu keluarga yang telah ada sejak jaman Kerajaan Majapahit. Pada tahun 2025, keluarga besar Langlangbhumi terdiri dari 5 golongan tua dan 11 keluarga golongan muda. Setiap caturwulan, Keluarga Langlangbhumi mengadakan arisan. Untuk persiapan arisan, Keluarga Langlangbhumi mengadakan rapat keluarga dengan setiap keluarga diwakili oleh satu orang. Pada rapat tersebut akan dipilih panitia arisan yang terdiri dari ketua, bendahara, dan sekretaris. Pemilihan dilakukan secara acak.",
      question: "Banyak cara terpilihnya panitia arisan dengan golongan tua sebagai ketua adalah …",
      options: ["60", "1050", "1280", "3360", "4096"],
      answerIndex: [1]
    },
    { //Soal 2
      txtField: "Keluarga Langlangbhumi adalah salah satu keluarga yang telah ada sejak jaman Kerajaan Majapahit. Pada tahun 2025, keluarga besar Langlangbhumi terdiri dari 5 golongan tua dan 11 keluarga golongan muda. Setiap caturwulan, Keluarga Langlangbhumi mengadakan arisan. Untuk persiapan arisan, Keluarga Langlangbhumi mengadakan rapat keluarga dengan setiap keluarga diwakili oleh satu orang. Pada rapat tersebut akan dipilih panitia arisan yang terdiri dari ketua, bendahara, dan sekretaris. Pemilihan dilakukan secara acak.",
      question: "Keluarga Langlangbhumi memutuskan bahwa akan ada 4 keluarga yang mendapatkan undian arisan. Jika keempat keluarga tersebut mendapatkan nominal uang arisan yang sama, peluang keempat keluarga tersebut berasal dari golongan muda adalah ….",
      options: ["1/364", "55/1092", "33/182", "5/16", "11/16"],
      answerIndex: [2]
    },
    { //Soal 3
      txtField: "Keluarga Langlangbhumi adalah salah satu keluarga yang telah ada sejak jaman Kerajaan Majapahit. Pada tahun 2025, keluarga besar Langlangbhumi terdiri dari 5 golongan tua dan 11 keluarga golongan muda. Setiap caturwulan, Keluarga Langlangbhumi mengadakan arisan. Untuk persiapan arisan, Keluarga Langlangbhumi mengadakan rapat keluarga dengan setiap keluarga diwakili oleh satu orang. Pada rapat tersebut akan dipilih panitia arisan yang terdiri dari ketua, bendahara, dan sekretaris. Pemilihan dilakukan secara acak.",
      question: "Panitia terpilih lalu mengundi tiga keluarga yang akan dimintai bantuan untuk menyediakan konsumsi arisan. Peluang terpilih tiga keluarga yang berasal dari golongan yang sama adalah ….",
      options: ["165", "175", "560", "990", "1050"],
      answerIndex: [1]
    },
    { //Soal 4
      txtField: "Keluarga Langlangbhumi adalah salah satu keluarga yang telah ada sejak jaman Kerajaan Majapahit. Pada tahun 2025, keluarga besar Langlangbhumi terdiri dari 5 golongan tua dan 11 keluarga golongan muda. Setiap caturwulan, Keluarga Langlangbhumi mengadakan arisan. Untuk persiapan arisan, Keluarga Langlangbhumi mengadakan rapat keluarga dengan setiap keluarga diwakili oleh satu orang. Pada rapat tersebut akan dipilih panitia arisan yang terdiri dari ketua, bendahara, dan sekretaris. Pemilihan dilakukan secara acak.",
      question: "Peluang terpilihnya panitia dengan ketua dan bendahara berasal dari golongan yang berbeda adalah ....",
      options: ["11/48", "11/40", "11/32", "11/24", "11/16"],
      answerIndex: [3]
    },
    { //Soal 5
      imageUrl: `https://tan-sandye-90.tiiny.site/PM-5-8.svg`,
      txtField: "Gambar di atas menampilkan tampak atas sebuah papan catur standar. Dimulai dari petak A1, bergerak dari kiri ke kanan, kemudian berlanjut ke baris berikutnya, petak-petak papan catur tersebut akan diisi bulir padi. Petak pertama (yaitu A1) akan diisi bulir 1, petak kedua (yaitu B1) akan diisi bulir 2, petak ketiga (yaitu C1) akan diisi bulir 3, dan seterusnya hingga petak terakhir (yaitu H8).",
      question: "Jika K n menyatakan barisan dari banyak bulir pada kolom A dimulai dari A1 hingga A8, maka K n = ….",
      options: ["n + 8, n = 1, 2, 3,…, 8", "n, n = 1, 2, 3,…, 8", "9n, n = 1, 2, 3,…, 8", "8n – 8, n = 1, 2, 3,…, 8", "4n2 – 3, n = 1, 2, 3,…, 8"],
      answerIndex: [3]
    },
    { //Soal 6
      type: "MULTIPLE_SELECTION",
      imageUrl: `https://tan-sandye-90.tiiny.site/PM-5-8.svg`,
      txtField: "Gambar di atas menampilkan tampak atas sebuah papan catur standar. Dimulai dari petak A1, bergerak dari kiri ke kanan, kemudian berlanjut ke baris berikutnya, petak-petak papan catur tersebut akan diisi bulir padi. Petak pertama (yaitu A1) akan diisi bulir 1, petak kedua (yaitu B1) akan diisi bulir 2, petak ketiga (yaitu C1) akan diisi bulir 3, dan seterusnya hingga petak terakhir (yaitu H8).",
      question: "Pilihlah pernyataan yang Benar untuk masing-masing pernyataan di bawah ini!*",
      options: [
        "Banyak bulir pada petak D4 adalah 28 bulir.",
        "Jumlah semua bulir pada kolom H adalah 256 bulir.",
        "Banyak bulir pada petak berwarna hitam mengikuti barisan bilangan ganjil.",
        "Selisih banyak bulir pada H8 dan A1 adalah 63 bulir.",
        "Jumlah semua bulir pada papan catur adalah 2080 bulir."
      ],
      answerIndex: [0, 3, 4]
    },
    { //Soal 7
      imageUrl: `https://tan-sandye-90.tiiny.site/PM-5-8.svg`,
      txtField: "Gambar di atas menampilkan tampak atas sebuah papan catur standar. Dimulai dari petak A1, bergerak dari kiri ke kanan, kemudian berlanjut ke baris berikutnya, petak-petak papan catur tersebut akan diisi bulir padi. Petak pertama (yaitu A1) akan diisi bulir 1, petak kedua (yaitu B1) akan diisi bulir 2, petak ketiga (yaitu C1) akan diisi bulir 3, dan seterusnya hingga petak terakhir (yaitu H8).",
      question: "Hasil bagi banyak bulir pada petak B6 dengan banyak bulir pada petak E3 adalah ....",
      options: ["1", "2", "3", "4", "5"],
      answerIndex: [1]
    },
    { //Soal 8
      imageUrl: `https://tan-sandye-90.tiiny.site/PM-5-8.svg`,
      txtField: "Gambar di atas menampilkan tampak atas sebuah papan catur standar. Dimulai dari petak A1, bergerak dari kiri ke kanan, kemudian berlanjut ke baris berikutnya, petak-petak papan catur tersebut akan diisi bulir padi. Petak pertama (yaitu A1) akan diisi bulir 1, petak kedua (yaitu B1) akan diisi bulir 2, petak ketiga (yaitu C1) akan diisi bulir 3, dan seterusnya hingga petak terakhir (yaitu H8).",
      question: "Jika banyak bulir pada tiap petak ditambah sesuai dengan label barisnya (contoh: petak A1 dan E1 masing-masing akan ditambah 1 bulir, sementara petak C2 dan F4 akan ditambah masing-masing 2 dan 4 bulir), maka jumlah penambahan bulir padinya adalah ....",
      options: ["36", "288", "2080", "2368", "4160"],
      answerIndex: [1]
    },
    { //Soal 9
      imageUrl: `https://tan-sandye-90.tiiny.site/PM-9-12.svg`,
      txtField: "Pada salah satu sisi jalan raya yang lurus, terdapat lampu penerangan jalan umum. Pada sisi yang lain, berdiri Ramon. Tinggi tiang lampu adalah 6 m, sementara tinggi badan Ramon 180 cm. Karena cahaya lampu jalan dari seberang, bayangan Ramon jatuh di titik B dan panjangnya adalah 2,4 m.",
      question: "Jarak Ramon dari tiang lampu adalah ... m.",
      options: ["2,4", "3,36", "4,48", "5,6", "8,0"],
      answerIndex: [3]
    },
    { //Soal 10
      imageUrl: `https://tan-sandye-90.tiiny.site/PM-9-12.svg`,
      txtField: "Pada salah satu sisi jalan raya yang lurus, terdapat lampu penerangan jalan umum. Pada sisi yang lain, berdiri Ramon. Tinggi tiang lampu adalah 6 m, sementara tinggi badan Ramon 180 cm. Karena cahaya lampu jalan dari seberang, bayangan Ramon jatuh di titik B dan panjangnya adalah 2,4 m.",
      question: "Jika Ramon harus berjalan sejauh 3,36 m sepanjang tepi jalan agar tepat berseberangan dengan lampu jalan, maka lebar jalan raya tersebut adalah ... m.",
      options: ["2,4", "3,36", "4,48", "5,6", "8,0"],
      answerIndex: [2]
    },
    { //Soal 11
      imageUrl: `https://tan-sandye-90.tiiny.site/PM-9-12.svg`,
      txtField: "Pada salah satu sisi jalan raya yang lurus, terdapat lampu penerangan jalan umum. Pada sisi yang lain, berdiri Ramon. Tinggi tiang lampu adalah 6 m, sementara tinggi badan Ramon 180 cm. Karena cahaya lampu jalan dari seberang, bayangan Ramon jatuh di titik B dan panjangnya adalah 2,4 m.",
      question: "Jika Ramon berjalan sepanjang sisi jalan dengan laju tetap, perbandingan antara bayangan Ramon dan jarak Ramon dengan lampu adalah ....",
      options: ["2 : 5", "3 : 7", "5 : 11", "7 : 13", "tidak konstan"],
      answerIndex: [1]
    },
    { //Soal 12
      imageUrl: `https://tan-sandye-90.tiiny.site/PM-9-12.svg`,
      txtField: "Pada salah satu sisi jalan raya yang lurus, terdapat lampu penerangan jalan umum. Pada sisi yang lain, berdiri Ramon. Tinggi tiang lampu adalah 6 m, sementara tinggi badan Ramon 180 cm. Karena cahaya lampu jalan dari seberang, bayangan Ramon jatuh di titik B dan panjangnya adalah 2,4 m.",
      question: "Ramon meloncat kecil ke atas. Jika bayangan ujung kepala Ramon bergerak sejauh 40 cm, tinggi loncatan Ramon adalah ... cm.",
      options: ["20", "30", "40", "50", "60"],
      answerIndex: [0]
    },
    { //Soal 13
      imageUrl: `https://tan-sandye-90.tiiny.site/PM-13-16.svg`,
      txtField: "Terdapat sebuah hotel yang baru saja dibuka dan pertama kali akan menerima tamu di hari Senin. Jumlah tamu yang masuk di awal hari dan keluar di akhir hari dicatat dan disajikan dalam diagram mingguan berikut.",
      question: "Berdasarkan diagram di atas, jumlah tamu yang sedang menginap di hotel tersebut tidak berubah pada hari ....",
      options: ["Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
      answerIndex: [0]
    },
    { //Soal 14
      type: "MULTIPLE_SELECTION",
      imageUrl: `https://tan-sandye-90.tiiny.site/PM-13-16.svg`,
      txtField: "Terdapat sebuah hotel yang baru saja dibuka dan pertama kali akan menerima tamu di hari Senin. Jumlah tamu yang masuk di awal hari dan keluar di akhir hari dicatat dan disajikan dalam diagram mingguan berikut.",
      question: "Pilihlah pernyataan yang Benar untuk masing-masing pernyataan di bawah ini!*",
      options: [
        "Penambahan jumlah tamu terbanyak pada minggu itu adalah hari Jumat.",
        "Pada akhir hari Minggu, masih ada tamu yang menginap.",
        "Rata-rata penambahan jumlah tamu dalam satu minggu itu adalah 10 orang.",
        "Pada hari Kamis, hotel mengalami penurunan jumlah tamu terbanyak.",
        "Total tamu yang masuk selama satu minggu adalah 490 orang."
      ],
      answerIndex: [1, 4]
    },
    { //Soal 15
      imageUrl: `https://tan-sandye-90.tiiny.site/PM-13-16.svg`,
      txtField: "Terdapat sebuah hotel yang baru saja dibuka dan pertama kali akan menerima tamu di hari Senin. Jumlah tamu yang masuk di awal hari dan keluar di akhir hari dicatat dan disajikan dalam diagram mingguan berikut.",
      question: "Jika tiap tamu menghasilkan keuntungan bersih sebesar Rp500.000,00, maka total keuntungan bersih hotel pada satu minggu itu adalah ... juta rupiah.",
      options: ["30", "215", "245", "460", "490"],
      answerIndex: [2]
    },
    { //Soal 16
      type: "MULTIPLE_SELECTION",
      imageUrl: `https://tan-sandye-90.tiiny.site/PM-13-16.svg`,
      txtField: "Terdapat sebuah hotel yang baru saja dibuka dan pertama kali akan menerima tamu di hari Senin. Jumlah tamu yang masuk di awal hari dan keluar di akhir hari dicatat dan disajikan dalam diagram mingguan berikut.",
      question: "Staf hotel akan merasa kewalahan jika tamu yang masuk melebihi rata-rata mingguan ditambah 1/4 simpangan mutlak. Diasumsikan jumlah tamu yang masuk dan keluar tiap minggu masih memiliki pola yang sama. Pilihlah semua hari staf hotel merasa kewalahan dari pilihan-pilihan berikut!*",
      options: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"],
      answerIndex: [0, 3]
    },
    { //Soal 17
      txtField: "Ramon akan menghias kamarnya dengan menempelkan wallpaper pada dinding kamarnya. Ramon membeli sebungkus wallpaper berisi 50 lembar wallpaper berukuran 20×20 cm. Ramon akan memasang sejumlah lembar wallpaper secara rapat dan membentuk persegi panjang.",
      question: "Jika f adalah fungsi yang menyatakan luas wallpaper yang dipasang, f(x) = ... m².",
      options: ["0,04x", "0,4x", "4x", "40x", "400x"],
      answerIndex: [0]
    },
    { //Soal 18
      type: "MULTIPLE_SELECTION",
      txtField: "Ramon akan menghias kamarnya dengan menempelkan wallpaper pada dinding kamarnya. Ramon membeli sebungkus wallpaper berisi 50 lembar wallpaper berukuran 20×20 cm. Ramon akan memasang sejumlah lembar wallpaper secara rapat dan membentuk persegi panjang.",
      question: "Jika Ramon menggunakan 24 lembar wallpaper, pilihlah semua ukuran luasan dinding yang mungkin ditutupi oleh wallpaper!*",
      options: [
        "0,6×1,6 m²",
        "0,8×1,2 m²",
        "1,2×0,8 m²",
        "1,6×0,6 m²",
        "4,8×0,2 m²"
      ],
      answerIndex: [0, 1, 2, 3, 4]
    },
    { //Soal 19
      txtField: "Ramon akan menghias kamarnya dengan menempelkan wallpaper pada dinding kamarnya. Ramon membeli sebungkus wallpaper berisi 50 lembar wallpaper berukuran 20×20 cm. Ramon akan memasang sejumlah lembar wallpaper secara rapat dan membentuk persegi panjang.",
      question: "Agar lebih menarik, Ramon tidak jadi memasang wallpaper secara rapat dan memberikan jarak antar lembar sejauh 5 cm. Jika Ramon menyusun 24 lembar wallpaper dalam 4 baris dan 6 kolom, ukuran luasan dinding yang terhiasi wallpaper adalah ... m².",
      options: [
        "0,95×1,45",
        "1×1,5",
        "1,45×0,95",
        "1,5×1",
        "1,5×1,5"
      ],
      answerIndex: [2]
    },
    { //Soal 20
      txtField: "Ramon akan menghias kamarnya dengan menempelkan wallpaper pada dinding kamarnya. Ramon membeli sebungkus wallpaper berisi 50 lembar wallpaper berukuran 20×20 cm. Ramon akan memasang sejumlah lembar wallpaper secara rapat dan membentuk persegi panjang.",
      question: "Jika Ramon menggunakan 24 lembar wallpaper dan harga wallpaper tersebut adalah Rp20.000,00 per lembar, maka Ramon mengeluarkan uang sebesar ... rupiah untuk membeli wallpaper.",
      options: [
        "Rp480.000,00",
        "Rp520.000,00",
        "Rp620.000,00",
        "Rp780.000,00",
        "Rp1.000.000,00"
      ],
      answerIndex: [4]
    }
  ],
}


export const data: Ujian[] = [
  {
    name: "Try Out UTBK",
    description: "Rin Education",
    items: [
      soalPUInduktif,
      soalPUDeduktif,
      soalPUKuantitatif,
      soalPPU,
      soalPBM,
      soalPK,
      soalLitdo,
      soalLitBing,
      soalPM
    ],
  },
]