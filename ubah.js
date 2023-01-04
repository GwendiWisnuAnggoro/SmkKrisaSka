// Bahasa Default
// Cara Penulisan:
//- Indonesia(id) atau Indonesia atau id-ID
//- Inggris(en) atau en-EN atau Inggris
const Bahasa_Default = "Indonesia";


// Navbar
// Navbar Atas
const NavbarAtas = [
    {
        Indonesia: [
                        {
                            isi: "BROSUR"
                        },
                        {
                            isi: "BERITA & ACARA"
                        },
                        {
                            isi: "KEMITRAAN GLOBAL & INTERNASIONAL"
                        },
                        {
                            isi: "KANTOR"
                        },
                        {
                            isi: "FASILITAS"
                        },
                        {
                            isi: "ALUMNI"
                        }
                    ]
    },
    {
        Inggris: [
                        {
                            isi: "BROCHURE"
                        },
                        {
                            isi: "NEWS & EVENTS"
                        },
                        {
                            isi: "GLOBAL PARTNERSHIPS & INTERNATIONAL"
                        },
                        {
                            isi: "OFFICE"
                        },
                        {
                            isi: "FACILITIES"
                        },
                        {
                            isi: "ALUMNI"
                        }
                 ]
    }

]

// Navbar Bawah
const NavbarBawah = [
    {
        Indonesia: [
                        {
                            isi: "TENTANG SMK"
                        },
                        {
                            isi: "PROGRAM BELAJAR"
                        },
                        {
                            isi: "KEGIATAN SMK"
                        },
                        {
                            isi: "PENDAFTARAN"
                        }
                    ]
    },
    {
        Inggris: [
                        {
                            isi: "ABOUT US"
                        },
                        {
                            isi: "STUDY PROGRAMS"
                        },
                        {
                            isi: "CAMPUS LIFE"
                        },
                        {
                            isi: "ADMISSION"
                        }
                 ]
    }

]



// Slide Show
// Gambar di slide show
const listGambar = 
[
    {
        src: "1.jpg"
    },
    {
        src: "2.jpg"
    },
    {
        src: "3.jpg"
    },
    {
        src: "4.jpg"
    },
    {
        src: "5.jpg"
    },
    {
        src: "6.jpg"
    },
    {
        src: "7.png"
    }

]


// Kecepatan Per Detik Di Kali 1000, contoh: 5000 berarti 5 detik
// Gambar Slide Show
const kecepatan_Berubah = 4000;

// Gambar Iklan
const MuculSetelahBerapaDetik = 2000;
// Warna Indikator
const Warna_indikator_TidakAktif = "white";
const Warna_indikator_Aktif = "blue";
const Warna_Hover = "red";


// 
// Jurusan
const Jurusan = 
[
    {
        Indonesia:    
        [
            {
                nama: "DKV",
                kepanjangan: "(Desain Komunikasi Visual)",
            },
            {
                nama: "MPLB",
                kepanjangan: "(Manajemen Perkantoran & Lembaga Bisnis)"
            },
            {
                nama: "LK",
                kepanjangan: "(Layanan Kesehatan)"
            },
            {
                nama: "PEMASARAN",
                kepanjangan: ""
            },
            {
                nama: "AKL",
                kepanjangan: "(Akuntansi dan Keuangan Lembaga)"
            }
    ]

    },
    {
        Inggris:    
        [
            {
                nama: "DKV",
                kepanjangan: "(Visual Communication Design)"
            },
            {
                nama: "MPLB",
                kepanjangan: "(Office & Business Institution Management)"
            },
            {
                nama: "LK",
                kepanjangan: "(Healthcare)"
            },
            {
                nama: "MARKETING",
                kepanjangan: ""
            },
            {
                nama: "AKL",
                kepanjangan: "(Accounting and Financial Institutions)"
            }
    ]

    }


]

const headerKeteranganJurusan = [
    {
        Indonesia: {
            Pengertian: "Pengertian:",
            Pengetahuan_dan_Keahlian: "Pengetahuan dan Keahlian:",
            AlasanMemilihJurusan: "Kenapa Harus Memilih Jurusan ini ?",
            PeluangKerja: "Peluang Kerja:"
        }
    },
    {
        Inggris: {
            Pengertian: "Understanding:",
            Pengetahuan_dan_Keahlian: "Knowledge and Expertise:",
            AlasanMemilihJurusan: "Why Should You Choose This Major ?",
            PeluangKerja: "Job Prospects:"
        }
    }
]

const warna_Jurusan = [
    {
        warnaLink:[
            
            "white",
            "white",
            "black",
            "white",
            "white"
            
        ],
        warna: [
            "black",
            "orange",
            "white",
            "red",
            "silver"
        ],
        tulisanLink:[
            {
                Indonesia: ["Pendaftaran Klik Di Sini..."]
            },
            {
                Inggris: ["Registration Click Here..."]
            }
        ]
    }
]
const Jurusan_Keterangan_Isi = [
    {
        Indonesia: [
            {
                // DKV,
                isi_Pengertian: "Jurusan Desain Komunikasi Visual atau DKV adalah bagian dari ilmu desain yang mempelajari tentang konsep komunikasi dan ungkapan kreatif, dengan memanfaatkan elemen visual untuk menyampaikan pesan dengan tujuan tertentu. Karena unsur pesan memiliki peran yang sangat penting, lulusan jurusan DKV diharapkan mampu mengeloah pesan tersebut menjadi sesuatu yang menarik, informatif, dan komunikatif, sehingga bisa disampaikan secara efektif.",
                isi_Pengetahuan_dan_Keahlian: [
                    {
                        list: 
                        [
                            "Kemampuan komunikasi verbal, visual, dan tekstual", 
                            "Keterampilan menggambar teknis", 
                            "Kemampuan mengoperasikan software gambar",
                            "Kreatif dan inovatif",
                            "Kemampuan melakukan analisis",
                            "Kemampuan berpikir kritis"
                        ]
                    }
                ],
                isi_AlasanMemilihJurusan: [
                    {
                        list: 
                        [
                            "Dengan mengambil jurusan DKV kamu juga akan menguasai ilmu desain dari sudut pandang bisnis, karena karya yang kamu buat harus mampu disampaikan sesuai dengan tujuan tertentu, khususnya tujuan perusahaan.",
                            "Terdapat banyak software yang bakal kamu kuasai seperti Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Premier, CorelDraw, SketchUp, dll."
                        ]
                    }
                ],
                isi_PeluangKerja: [
                    {
                        judul:
                        [
                        
                            "Desainer web",
                            "Desainer Visual",
                            "Perancang grafis",
                            "Ilustrator",
                            "Direktur Seni",
                            "Sutradara kreatif",
                            "Fotografer",
                            "Desainer Lepas",
                            "Pembuat animasi"

                        ],
                        list: 
                        [
                            "Peluang Kerja DKV yang pertama adalah Web Designer. Pekerjaan Web Designer ini bisa dibilang sangat populer dan selalu dicari oleh banyak perusahaan. Kamu bisa bekerja menjadi seorang Web Designer freelancer atau karyawan kantoran yang membuat bidang ini sangat populer.",
                            "Peluang Kerja DKV yang kedua adalah menjadi seorang Visual Designer. Dimana buat kamu yang memiliki keahlian dalam visual designer bisa memanfaatkan berbagai peluang ini. Pekerjaan Visual Designer memiliki tugas kerja yang mirip dengan Web Designer. Bedanya adalah lingkup kerja Visual Designer ini lebih luas dari hanya mendesain sebuah website, karena kau akan bekerja untuk mendesain sebuah brand atau produk.",
                            "Peluang Kerja DKV berikutnya adalah menjadi seorang Graphic Designer. Tugas kamu menjadi Graphic Designer adalah membuat desain grafis menggunakan aplikasi desain grafis yang ada.",
                            "Peluang Kerja DKV yang keempat adalah menjadi seorang ilustrator. Bekerja menjadi seorang ilustrator  juga memegang berbagai peranan yang tentunya sangat penting bagi para klien tentunya. Dengan bantuan dari seorang ilustrator, kamu akan mudah untuk melihat ilustrasi dari sebuah rancangan yang ingin dibuat. Kamu bisa menjadi ilustrator buku atau ilustrator di perusahaan media.",
                            "Peluang Kerja DKV yang selanjutnya adalah menjadi seorang Art Director, dimana kamu akan bekerja menjadi seorang pengarah di bidang kreatif. Kamu juga bisa berkarir di banyak sekali bidang khususnya di bidang kreatif dan industri perfilman, periklanan, hingga di bagian seni teater.",
                            "Peluang Kerja DKV yang selanjutnya adalah menjadi seorang Creative Director di industri kreatif. Tugas dari Creative Director ini tentunya sama seperti pengarah yang tugasnya memberikan arahan kepada karyawannya agar bisa memenuhi target serta kriteria yang diberikan oleh konsumennya khususnya di bidang kreatif.",
                            "Peluang Kerja DKV yang selanjutnya adalah menjadi fotografer. Nah, profesi ini cukup banyak banget yang menjalankannya sekaligus menjadi hobi lain nih. Tentunya menjadi seorang fotografer gak hanya jago di bidang foto aja, tapi kamu juga bisa mengedit foto maupun memperindah hasil jepretan dengan ilmu yang didapatkan selama kuliah.",
                            "Peluang Kerja DKV yang selanjutnya adalah menjadi freelance designer. Pekerjaan ini sangat cocok untuk kamu yang memang gak menyukai pekerjaan yang terikat oleh waktu. Selain kamu bisa menyesuaikan jadwal kerja, penghasilan yang akan kamu peroleh juga akan lebih tinggi dan bervariasi tergantung dari banyaknya pekerjaanmu yang diterima dari klien.",
                            "Peluang Kerja DKV yang terakhir adalah kamu bisa berkarir sebagai seorang animator. Profesi sebagai animator bisa menjadi salah satu pilihan yang tepat. Banyaknya kartun yang menjamur juga semakin membuka kesempatan bagi para animator muda untuk berkarya."                            
                        ]
                    }
                ]
            },
            {
                // MPLB,
                isi_Pengertian: "Manajemen Perkantoran dan Layanan Bisnis (MPLB), merupakan program/kompetensi keahlian yang membekali peserta didik dengan keterampilan, pengetahuan dan sikap untuk menjadi tenaga kerja tingkat menengah yang memiliki kecakapan dan kompeten dalam bidang pengelolaan administrasi perkantoran.",
                isi_Pengetahuan_dan_Keahlian: [
                    {
                        list: 
                        [
                            "Simulasi dan komunikasi digital",
                            "Ekonomi bisnis",
                            "Atministrasi umum",
                            "Teknologi perkantoran",
                            "Korespondensi",
                            "Kearsipan",
                            "Tata kelola kepegawaian",
                            "Tata kelola keuangan",
                            "Tata kelola sarana & prasarana",
                            "Tata kelola humas dan keprotokolan",
                            "Memahami prisnsip prinsip penyelenggaraan tata kelola perkantoran",
                            "Mengaplikasikkan keterampilan dasar komunikasi",
                            "Menerapkan prinsip kerja sama",
                            "Menerapkan K3LH",
                            "Mengoprasikan aplikasi perangkat lunak",
                            "Mengelola peralatan kantor",
                            "Melakukan prosedur administrasi",
                            "Pengetahuan dasar menejement"
                        ]
                    }
                ],
                isi_AlasanMemilihJurusan: [
                    {
                        list: 
                        [
                            "Banyak di butuhkakn perusahaan",
                            "Mengetahui kompetensi dasar yang di butuhkan untuk menjadi staf perusahaan",
                            "Bisa melanjutkan kuliah jurusan management",
                            "Berwira usaha"
                        ]
                    }
                ],
                isi_PeluangKerja: [
                    {
                        judul:
                        [
                            "Sekertaris",
                            "Asisten Sekertaris",
                            "Staf admin keuangan",
                            "Staf Personalia",
                            "Staf Tata Usaha",
                            "Petugas Perpustakaan"
                            
                        ],
                        list: 
                        [
                          "Kamu bisa menjalani karir sebagai seorang sekertaris di perusahaan yang mengurusi segala hal yang berhubungan dengan perusahaan termasuk juga mengurus jadwal atasan.",
                          "Jika kamu baru lulus dan mencari batu loncatan kamu bisa menjadi seoarng Asisten Sekertaris yang membantu tugas tugas sekertaris utama di sebuah perusahaan.",
                          "Selama di sekolah kamu akan mendapatkan sedikit ilmu mengenai dasar akutansi yang dapat kamu jadikkan bekal untuk meniti karir sebagai staff admin keuangan.",
                          "Staf Personalia memiliki tugas menyusun daftar hadir karyawan dan juga akan berurusan dengan proses rekrutmen di suatu perusahaan.",
                          "Kamu bisa masukk ke dunia pendidikkan dengan menjadi staff tata usaha, kamu juga bisa di sektor lainnya seperti perban kan.",
                          "Ilmu pengarsippan yang sudah kamu dapatkan akan sangat berguna dalam menata buku sesuai dengan kategorinya."
                        ]
                    }
                ]
            },
            {
                // LK,
                isi_Pengertian: "Layanan Kesehatan (LK), merupakan program keahlian yang bertujuan untuk menciptakan tenaga ahli dalam asistensi keperawatan yang terampil dan kompeten di bidang pelayanan dasar keperawatan khususnya pemenuhan kebutuhan dasar manusia.",
                isi_Pengetahuan_dan_Keahlian: [
                    {
                        list: 
                        [
                            "Memahami kontinum sehat sakit dan dasar dasar penyakit sederhana yang umum di masyarakat.",
                            "Memahami Kebutuhan dasar manusia.",
                            "Memahami prinsip prinsip dan tahap tahap perkembangan manusia sehingga, memiliki daya saing yang tinggi.",
                            "Memahami pelaksanaan tugas sesuai dengan etikka keperawatan dan kaidah hukum.",
                            "Melaksanakan pendokumentasian tindakan keperawatan."
                        ]
                    }
                ],
                isi_AlasanMemilihJurusan: [
                    {
                        list: 
                        [
                            "Peluang kerja yang menjanjikkan",
                            "Ilmu kesehattan sangat aplikatif dalam kehidupan sehari hari",
                            "Salah satu jurusan favorit",
                            "Gaji yang cukup tinggi",
                            "Bidang kerja yang di butuhkan di mana pun",
                            "Program study yang beragam",
                            "Tenaga kesehatan masih sedikit",
                            "Dapat membantu orang lain",
                            "Dapat berwira usaha"
                        ]
                    }
                ],
                isi_PeluangKerja: [
                    {
                        judul:
                        [
                            "Sebagai Perawat",
                            "Ahli Gizi",
                            "Penyuluh Kesehatan Masyarakat",
                            "Analyst",
                            "Ahli Kesehatan dan Keselamatan Kerja",
                            "Pegawai rumah sakit",
                            "Peneliti"
                        ],
                        list: 
                        [
                            "Membantu dan mendukung kerja dokter agar lebih maksimal.",
                            "Profesi ini sangat di butuhkan pada rumah sakit atau vasilitas kesehatan lain, juga bisa bekerja di perusahaan makanan.",
                            "Memberikkan penyuluhan tentang kesehatan kepada Masyarakat dan juga sebagai konseling kesehatan.",
                            "Menjadi analyst laboratorium atau perusahaan.",
                            "Menjamin dan melindungi keselamatan dan kesehatan para pekerja di perusahaan.",
                            "Sebagai penyuluh, pengolah data atau administrasi",
                            "Sebagai enumerator yang bertanggung jawab melakukkan pengumpulan data dari lapangan baik melalui survey atau riset."
                        ]
                    }
                ]
            },
            {
                // PEMASARAN,
                isi_Pengertian: "Pemasaran, Merupakan aktivitas dan proses menciptakan, mengomunikasikan, menyampaikan, dan mempertukarkan tawaran yang bernilai bagi pelanggan, klien, mitra, dan masyarakat umum.",
                isi_Pengetahuan_dan_Keahlian: [
                    {
                        list: 
                        [
                            "Pengelolahan bisnis ritel",
                            "Administrasi transaksi",
                            "Bisnis Online",
                            "Produk kreatif dan kewirausahaan"
                        ]
                    }
                ],
                isi_AlasanMemilihJurusan: [
                    {
                        list: 
                        [
                            "Peluang kerja yang luas",
                            "Di butuhkkan oleh setiap perusahaan",
                            "Relasi yang luas",
                            "Mengikuti perkembangan zaman",
                            "Tempat kerja flexsible",
                            "Melatih Percaya diri dan kemampuan komunikasi"
                        ]
                    }
                ],
                isi_PeluangKerja: [
                    {
                        judul:
                        [
                            "Analyst Pemasaran",
                            "Marketing",
                            "Public Relation (HUMAS)",
                            "Konsultan",
                            "Super Visor Pemasaran"
                        ],
                        list: 
                        [
                            "Menganalisis data pemasaran baik bagi klien individu maupun perusahaan",
                            "Melakukkan Marketing atau pemasaran melalui Media Sosial atau pun offline",
                            "Malakukkan komunikasi dengan pihak luar perusahaan yang berhubungan dengan strategi pemasaran",
                            "Kamu bisa menjadi konsultan di sebuah perusahaan ataupun secara mandiri",
                            "Mengidentifikasi juga mengembangkan strategi baru di bidang pemasaran di sebuah perusahaan"
                        ]
                    }
                ]
            },
            {
                // AKL,
                isi_Pengertian: "AKL Merupakan salah satu program keahlian dalam kelompok bisanis dan managemet yang bertujuan untuk mempelajari pencatatan dan penyusunan laporan keuangan secara manual atau pun menggunakan sistim komputerisasi untuk di terapkkan terhadap suatu perusahaan baik jasa dagang maupun manufaktur",
                isi_Pengetahuan_dan_Keahlian: [
                    {
                        list: 
                        [
                            "Mengembangkan sikap dan keterampilan peserta didik dalam bidang keahlian akutansi.",
                            "Menguasai Keterampilan yang kompeten ber standart Nasional di bidang akutansi.",
                            "Menguasai keterampilan dalam penggunaan perangkat lunak di bidang akutansi",
                            "Mengembangkan bidang akutansi yang relevan dengan tuntutan dunia industri dan kerja"
                        ]
                    }
                ],
                isi_AlasanMemilihJurusan: [
                    {
                        list: 
                        [
                            "Memiliki kemampuan dalam mengelola keuangan secara baik",
                            "Pendapatan yang menjanjikkan",
                            "Pilihan karir yang cerah",
                            "Mengajarkan sikap tanggung jawab",
                            "Menjadi pribadi yang berpikir kreatif, cepat dan cerdas",
                            "Mampu membuat pribadi menjadi lebih teratur, rapi dan disiplin"
                        ]
                    }
                ],
                isi_PeluangKerja: [
                    {
                        judul:
                        [
                            "Akuntan Public",
                            "Manager Akuntansi",
                            "Akun Officer",
                            "Financial Analyst",
                            "Internal Auditor"
                        ],
                        list: 
                        [
                          "Dapat bekerja di perusahaan atau secara individu dalam menyiapkan dan menganalisa sebagai laporan dan document keuangan.",
                          "Mengelola dan mengawasi depertemen Akuntansi serta semua bidang pelaporan keuangan.",
                          "Memasarkan produk perusahaan pada para calon nasabah yang di anggap potensial kemudian memonitoring pembayaran yang di berikkan agar nasabah yang bersangkutan kemudian memenuhi kewajibannya terhadap perusahaan.",
                          "Menganalisa keuangan, meyajikkan sebuah laporan dalam bentuk rasio kepada kepemimpinan suatu usaha sebagai acuhan untuk mengambil kebijakkan perusahaan.",
                          "Memastikkan hasil laporan keuangan perusahaan sesuai dengan aslinya dan memastikkan seluruh management telah melakukkan usaha secara efisien dan tidak terjadi penyimpanan."

                        ]
                    }
                ]
            }
        ]
    },
    {
        Inggris: [
            {
                // DKV,
                isi_Pengertian: "The Department of Visual Communication Design or DKV is a part of design science that studies communication concepts and creative expressions, by utilizing visual elements to convey messages with a specific purpose. Because the message element has a very important role, DKV major graduates are expected to be able to process the message into something interesting, informative, and communicative, so that it can be conveyed effectively.",
                isi_Pengetahuan_dan_Keahlian: [
                    {
                        list: 
                        [
                            "Verbal, visual and textual communication skills", 
                            "Technical drawing skills", 
                            "Ability to operate drawing software",
                            "Creative and innovative",
                            "Ability to perform analysis",
                            "Critical thinking skills"
                        ]
                    }
                ],
                isi_AlasanMemilihJurusan: [
                    {
                        list: 
                        [
                            "By majoring in DKV you will also master the science of design from a business point of view, because the work you create must be able to be delivered in accordance with certain goals, especially company goals.",
                            "You will master a lot of software, such as Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Premiere, CorelDraw, SketchUp, etc."
                        ]
                    }
                ],
                isi_PeluangKerja: [
                    {
                        judul:
                        [
                        
                            "Web Designer",
                            "Visual Designer", 
                            "Graphic Designer",
                            "Illustrator",
                            "Art Director",
                            "Creative Director",
                            "Fotografer",
                            "Freelance Designer",
                            "Animator"
                        ],
                        list: 
                        [
                            "The first DKV Job Opportunity is a Web Designer. This Web Designer job is arguably very popular and is always sought after by many companies. You can work as a freelancer Web Designer or office worker which makes this field very popular.",
                            "The second DKV Job Opportunity is to become a Visual Designer. Those of you who have expertise in visual designers can take advantage of these opportunities. Visual Designer jobs have work assignments that are similar to Web Designers. The difference is that the scope of work of this Visual Designer is wider than only design a website, because you will work to design a brand or product.",
                            "The next DKV job opportunity is to become a Graphic Designer. Your job as a Graphic Designer is to create graphic designs using existing graphic design applications.",
                            "The fourth DKV Job Opportunity is to become an illustrator. Working as an illustrator also plays various roles which are of course very important for clients of course. With the help of an illustrator, it will be easy for you to see illustrations of a design you want to make. You can become book illustrator or illustrator in a media company.",          
                            "The next DKV Job Opportunity is to become an Art Director, where you will work as a director in the creative field. You can also have a career in various fields, especially in the creative field and the film industry, advertising, to the theater arts section.",
                            "The next DKV Job Opportunity is to become a Creative Director in the creative industry. The task of this Creative Director is of course the same as a director whose job is to provide direction to his employees so that they can meet the targets and criteria given by their consumers, especially in the creative field.",
                            "The next DKV job opportunity is to become a photographer. So, quite a lot of people practice this profession as well as another hobby. Of course, being a photographer is not only good at photography, but you can also edit photos and beautify your shots with the knowledge you have. acquired during college.",
                            "The next DKV job opportunity is to become a freelance designer. This job is perfect for those of you who really don't like time-bound jobs. Apart from being able to adjust your work schedule, the income you will earn will also be higher and vary depending on the number of jobs you have. received from the client.",
                            "The last DKV Job Opportunity is for you to have a career as an animator. Profession as an animator can be one of the right choices. The number of mushrooming cartoons also opens more opportunities for young animators to work."                            
                        ]
                    }
                ]
            },
            {
                // MPLB,
                isi_Pengertian: "Office Management and Business Services (MPLB), is an expertise program/competence that equips students with the skills, knowledge and attitudes to become a middle-level workforce that has skills and competence in managing office administration.",
                isi_Pengetahuan_dan_Keahlian: [
                    {
                        list:[
                            "Digital simulation and communication",
                            "Business Economics",
                            "General Administration",
                            "Office Technology",
                            "Correspondence",
                            "Record management",
                            "staff management",
                            "financial governance",
                            "Management of facilities & infrastructure",
                            "Human governance and protocol",
                            "Understanding the principles of management governance",
                            "Applies basic communication skills",
                            "Applying the principle of cooperation",
                            "Implementing K3LH",
                            "Operating software applications",
                            "Managing office equipment",
                            "Perform administrative procedures",
                            "Basic management knowledge"
    
                        ]

                    }

                ],
                isi_AlasanMemilihJurusan: [
                    {
                        list: 
                        [
                            "Much needed by the company",
                            "Knowing the basic competencies needed to become a company staff",
                            "Can continue studying management majoring",
                            "Entrepreneurial"
                        ]
                    }
                ],
                isi_PeluangKerja: [
                    {
                        judul:
                        [
                            "Secretary",
                            "Assistant Secretary",
                            "financial admin staff",
                            "Personnel Staff",
                            "Adminsitration Staff",
                            "Librarian"
                        ],
                        list: 
                        [
                          "You can have a career as a secretary in a company that takes care of everything related to the company, including taking care of the boss's schedule.",
                          "If you have just graduated and are looking for a stepping stone you can become an Assistant Secretary who helps with the duties of the main secretary in a company.",
                          "While at school you will get a little knowledge about the basics of accounting that you can use as provisions to pursue a career as a financial admin staff.",
                          "Personnel staff has the task of compiling employee attendance lists and will also deal with the recruitment process in a company.",
                          "You can enter the world of education by becoming an administrative staff, you can also be in other sectors such as banking right.",
                          "The archiving knowledge you have acquired will be very useful in organizing books according to their categories."
                        ]
                    }
                ]
            },
            {
                // LK,
                isi_Pengertian: "Health Services (LK), is an expertise program that aims to create experts in nursing assistance who are skilled and competent in the field of basic nursing services, especially meeting basic human needs.",
                isi_Pengetahuan_dan_Keahlian: [
                    {
                        list: 
                        [
                            "Understanding the health-ill continuum and the basic principles of simple diseases that are common in society.",
                            "Understanding Basic Human Needs.",
                            "Understanding the principles and stages of human development so as to have high competitiveness.",
                            "Understanding the implementation of duties in accordance with nursing ethics and legal norms.",
                            "Doing documentation of nursing actions."
                        ]
                    }
                ],
                isi_AlasanMemilihJurusan: [
                    {
                        list: 
                        [
                            "Awesome job opportunity",
                            "Health science is very applicable in everyday life",
                            "One of favorite majors",
                            "Salary high enough",
                            "A field of work needed anywhere",
                            "Various study programs",
                            "There are only a few health workers",
                            "Being able to help others",
                            "Can do business"
                        ]
                    }
                ],
                isi_PeluangKerja: [
                    {
                        judul:
                        [
                        
                            "As a Nurse",
                            "Nutritionists",
                            "Public Health Extension",
                            "Analyst",
                            "Occupational Health and Safety Specialist",
                            "hospital employee",
                            "researcher"
                        ],
                        list: 
                        [
                            "Helping and supporting doctors' work to be more optimal.",
                            "This profession is really needed in hospitals or other health facilities, you can also work in a food company.",
                            "Provide counseling about health to the community and also as health counseling.",
                            "Being a laboratory or company analyst.",
                            "Guarantee and protect the safety and health of workers in the company.",
                            "As extension, data processing or administration",
                            "As an enumerator who is responsible for collecting data from the field either through surveys or research."
                        ]
                    }
                ]
            },
            {
                // PEMASARAN,
                isi_Pengertian: "Marketing Is the activity and process of creating, communicating, delivering and exchanging offerings that have value for customers, clients, partners and the general public.",
                isi_Pengetahuan_dan_Keahlian: [
                    {
                        list: 
                        [
                            "Retail business management",
                            "Transaction Administration",
                            "Online business",
                            "Creative and Entrepreneurial Product"
                        ]
                    }
                ],
                isi_AlasanMemilihJurusan: [
                    {
                        list: 
                        [
                            "Broad job opportunities",
                            "Needed by every company",
                            "Broad Relations",
                            "Keeping up with the times",
                            "Flexible workplace",
                            "Training Confidence and Communication Skills"
                        ]
                    }
                ],
                isi_PeluangKerja: [
                    {
                        judul:
                        [
                            "Marketing Analyst",
                            "Marketing",
                            "Public Relations (HUMAS)",
                            "Consultant",
                            "Marketing Super Visor"
                        ],
                        list: 
                        [
                            "Analyzing marketing data for both individual and corporate clients",
                            "Doing Marketing or marketing through Social Media or even offline",
                            "Communicate with outsiders related to marketing strategy",
                            "You can be a consultant in a company or independently",
                            "Identify and develop new strategies in the field of marketing in a company"
                        ]
                    }
                ]
            },
            {
                // AKL,
                isi_Pengertian: "AKL is one of the expertise programs in business and management groups that aims to study recording and preparation of financial reports manually or using a computerized system to be applied to a company, both trade and manufacturing services",
                isi_Pengetahuan_dan_Keahlian: [
                    {
                        list: 
                        [
                            "Developing the attitudes and skills of students in the field of accounting expertise.",
                            "Mastering competent National standard skills in accounting.",
                            "Mastering skills in the use of software in accounting",
                            "Developing the field of accounting that is relevant to the demands of the industrial world and work"
                        ]
                    }
                ],
                isi_AlasanMemilihJurusan: [
                    {
                        list: 
                        [
                            "Have the ability to manage finances well",
                            "promising earnings",
                            "Bright career choice",
                            "Teaching the attitude of responsibility",
                            "Become a person who thinks creatively, quickly and intelligently",
                            "Able to make personal become more organized, neat and disciplined"
                        ]
                    }
                ],
                isi_PeluangKerja: [
                    {
                        judul:
                        [
                            "Public Accountant",
                            "Accounting Manager",
                            "Account Officer",
                            "Financial Analyst",
                            "Internal Auditors"
                        ],
                        list: 
                        [
                            "Can work in companies or individually in preparing and analyzing reports and financial documents.",
                            "Managing and supervising the Accounting department as well as all areas of financial reporting.",
                            "Marketing the company's products to prospective customers who are considered potential and then monitoring the payments made so that the customer concerned then fulfills his obligations to the company.",
                            "Analyzing finances, presenting a report in the form of ratios to the leadership of a business as a reference for taking company policies.",
                            "Ensuring the results of the company's financial reports are in accordance with the original and ensuring that all management has carried out their business efficiently and there is no storage."  
                        ]
                    }
                ]
            }
        ]
    }
    
]


// Alamat //No Telepon // Email
const Alamat = [
    {
        Indonesia: [
            {
                alamat: `Jalan Ahamad Yani No.2, Tegalharjo, Jebres,
                <br>Kota Surakarta, Jawa Tengah 57128`
            }
        ]
    },
    {
        Inggris: [
            {
                alamat: `Ahamad Yani Street No.2, Tegalharjo, Jebres,
                <br>Surakarta City, Central Java 57128`
            }
        ]
    }
]

const Nomor_Hp = "085xxxxxxxxx";
const Email = "xxxx@gmail.com";


// loading
const GambarSaatLoading = "Loading.gif";

// Sosmed
// Copy Link SVG Dan Tempel Ke LogoSVG
// link isi dengan link url sosmed
// SVG bisa di copy melalui bootstrap.com/icon 
// lalu pilih dan tempel di LogoSVG
        // Ketikka di hover
        // Berubah menjadi warna "tuliskan di Kolom Warna hover"
        // Tulis Warna bisa menggunakan
        // Color, contoh red
        // Hex, Contoh #00ff00
        // RGB, Contoh rgb(255, 255, 255)
        // RGBA, Contoh rgb(255, 255, 255, 1)
const Link = [
    {
        nama: `Youtube`,
        LogoSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                   </svg>`,
        link: ``,
        warnaHover: "red",
        margin_left: "",
        margin_right: ""

    },
    {
        nama: `Facebook`,
        LogoSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
      </svg>`,
        link: ``,
        warnaHover: "rgb(0, 47, 255)",
        margin_left: "5px",
        margin_right: "5px"
    
    },
    {
        nama: `Instagram`,
        LogoSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
      </svg>`,
        link: ``,
        warnaHover: "violet",
        margin_left: "",
        margin_right: ""
    }
]