import React from 'react';
import { Link } from 'react-router-dom';
import NavbarCempor from '../components/cempor/Navbar';
import FooterCempor from '../components/cempor/Footer';

export default function ModulPelatihan() {
    const modulUtama = [
        {
            kategori: 'Fundamental Bisnis',
            color: 'from-[#4f90c6] to-[#90b6d5]',
            icon: 'ri-building-line',
            modul: [
                {
                    judul: 'Mindset Wirausaha',
                    durasi: '4 Jam',
                    topik: ['Entrepreneur Mindset', 'Karakter Pengusaha Sukses', 'Analisis Potensi Diri'],
                    mentor: 'Dr. Ahmad Wijaya, M.M.'
                },
                {
                    judul: 'Perencanaan Bisnis',
                    durasi: '6 Jam',
                    topik: ['Business Model Canvas', 'Analisis SWOT', 'Studi Kelayakan Bisnis'],
                    mentor: 'Prof. Siti Rahayu, M.B.A.'
                },
                {
                    judul: 'Legalitas Usaha',
                    durasi: '3 Jam',
                    topik: ['Jenis Badan Usaha', 'Perizinan UMKM', 'Hak Kekayaan Intelektual'],
                    mentor: 'Bambang Sutrisno, S.H., M.Kn.'
                }
            ]
        },
        {
            kategori: 'Digital Marketing',
            color: 'from-[#355485] to-[#4f90c6]',
            icon: 'ri-megaphone-line',
            modul: [
                {
                    judul: 'Strategi Branding Digital',
                    durasi: '5 Jam',
                    topik: ['Personal Branding', 'Storytelling Bisnis', 'Content Strategy'],
                    mentor: 'Maya Santoso, M.Kom.'
                },
                {
                    judul: 'Social Media Marketing',
                    durasi: '8 Jam',
                    topik: ['Facebook & Instagram Ads', 'TikTok Marketing', 'Content Calendar'],
                    mentor: 'Rina Wijaya, S.E.'
                },
                {
                    judul: 'E-commerce & Marketplace',
                    durasi: '6 Jam',
                    topik: ['Shopee & Tokopedia', 'Website E-commerce', 'Logistik & Fulfillment'],
                    mentor: 'Ahmad Fauzi, M.T.'
                }
            ]
        },
        {
            kategori: 'Manajemen Keuangan',
            color: 'from-[#2a436c] to-[#355485]',
            icon: 'ri-pie-chart-line',
            modul: [
                {
                    judul: 'Akuntansi Dasar UMKM',
                    durasi: '6 Jam',
                    topik: ['Pencatatan Transaksi', 'Laporan Keuangan', 'Cash Flow Management'],
                    mentor: 'Dewi Sartika, M.Ak.'
                },
                {
                    judul: 'Perpajakan UMKM',
                    durasi: '4 Jam',
                    topik: ['Pajak UMKM', 'E-Faktur', 'Pelaporan SPT'],
                    mentor: 'Joko Susilo, S.E., M.Ak.'
                },
                {
                    judul: 'Analisis Kelayakan Investasi',
                    durasi: '5 Jam',
                    topik: ['Break Even Point', 'ROI Analysis', 'Financial Projection'],
                    mentor: 'Dr. Rina Setiawan, M.M.'
                }
            ]
        },
        {
            kategori: 'Operasional & Produksi',
            color: 'from-[#4f90c6] to-[#2a436c]',
            icon: 'ri-factory-line',
            modul: [
                {
                    judul: 'Manajemen Produksi',
                    durasi: '5 Jam',
                    topik: ['Standard Operating Procedure', 'Quality Control', 'Inventory Management'],
                    mentor: 'Budi Santoso, M.Eng.'
                },
                {
                    judul: 'Supply Chain Management',
                    durasi: '4 Jam',
                    topik: ['Supplier Management', 'Distribusi Produk', 'Logistik Terintegrasi'],
                    mentor: 'Sari Dewi, M.Log.'
                },
                {
                    judul: 'Teknologi & Inovasi Produk',
                    durasi: '6 Jam',
                    topik: ['Product Development', 'Packaging Design', 'Sustainable Production'],
                    mentor: 'Ir. Agus Widodo, M.T.'
                }
            ]
        }
    ];

    const workshopKhusus = [
        {
            judul: 'Pitch Deck & Presentasi Bisnis',
            deskripsi: 'Teknik menyusun presentasi bisnis yang menarik untuk investor',
            durasi: '3 Jam',
            level: 'Intermediate',
            icon: 'ri-presentation-line'
        },
        {
            judul: 'Negosiasi Bisnis & Kontrak',
            deskripsi: 'Strategi negosiasi dan penyusunan perjanjian kerjasama',
            durasi: '4 Jam',
            level: 'Advanced',
            icon: 'ri-handshake-line'
        },
        {
            judul: 'Analisis Pasar & Kompetitor',
            deskripsi: 'Teknik riset pasar dan analisis kompetisi bisnis',
            durasi: '5 Jam',
            durasi: '3 Jam',
            level: 'Intermediate',
            icon: 'ri-line-chart-line'
        },
        {
            judul: 'Customer Relationship Management',
            deskripsi: 'Strategi mempertahankan pelanggan dan meningkatkan loyalitas',
            durasi: '4 Jam',
            level: 'Intermediate',
            icon: 'ri-customer-service-2-line'
        }
    ];

    const metodeBelajar = [
        {
            icon: 'ri-video-line',
            judul: 'Video Pembelajaran',
            deskripsi: 'Materi video berkualitas tinggi yang dapat diakses 24/7'
        },
        {
            icon: 'ri-team-line',
            judul: 'Kelas Interaktif',
            deskripsi: 'Sesi live dengan mentor dan diskusi kelompok'
        },
        {
            icon: 'ri-file-text-line',
            judul: 'Studi Kasus',
            deskripsi: 'Analisis kasus bisnis nyata dari UMKM sukses'
        },
        {
            icon: 'ri-briefcase-line',
            judul: 'Praktik Langsung',
            deskripsi: 'Implementasi langsung ke bisnis peserta dengan pendampingan'
        }
    ];

    return (
        <>
            <NavbarCempor />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#2a436c] via-[#355485] to-[#4f90c6]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-20">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-6">
                            <i className="ri-book-open-line"></i>
                            MODUL PELATIHAN
                        </div>
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Kurikulum <span className="text-[#cbdde9]">Komprehensif</span> untuk Wirausaha Pemula
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Pelajari semua aspek bisnis dari dasar hingga mahir dengan modul yang dirancang khusus
                            untuk kebutuhan wirausaha pemuda Kalimantan Tengah
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="#modul" className="px-6 py-3 bg-white text-[#2a436c] rounded-lg font-semibold hover:bg-[#f0f7ff] transition-colors flex items-center gap-2">
                                <i className="ri-list-check-2"></i>
                                Lihat Modul
                            </a>
                            <Link
                                to="/program/jadwal"
                                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
                            >
                                <i className="ri-calendar-line"></i>
                                Lihat Jadwal
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Statistik Modul */}
            <section className="py-12 bg-[#f9fafb]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: '12+', label: 'Modul Utama', icon: 'ri-book-2-line' },
                            { value: '48', label: 'Jam Pelatihan', icon: 'ri-time-line' },
                            { value: '15', label: 'Materi Workshop', icon: 'ri-presentation-line' },
                            { value: '100%', label: 'Praktis & Aplikatif', icon: 'ri-checkbox-circle-line' }
                        ].map((stat, index) => (
                            <div key={index} className="bg-white border border-[#e5e7eb] rounded-xl p-6 text-center">
                                <div className="inline-flex p-3 rounded-lg bg-[#f0f7ff] text-[#4f90c6] mb-4">
                                    <i className={`${stat.icon} text-2xl`}></i>
                                </div>
                                <div className="text-3xl font-bold text-[#2a436c] mb-2">{stat.value}</div>
                                <div className="text-sm text-[#6b7280] font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modul Utama */}
            <section id="modul" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#4f90c6] px-6 py-3 rounded-full text-sm font-semibold mb-4 border border-[#cbdde9]">
                            <i className="ri-stack-line"></i>
                            MODUL UTAMA
                        </div>
                        <h2 className="text-4xl font-bold text-[#2a436c] mb-6">
                            Kurikulum <span className="text-[#4f90c6]">Terstruktur</span> 4 Pilar
                        </h2>
                        <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
                            Pelatihan komprehensif yang mencakup semua aspek penting dalam membangun dan mengelola bisnis
                        </p>
                    </div>

                    <div className="space-y-12">
                        {modulUtama.map((kategori, index) => (
                            <div key={index} className="bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                                {/* Kategori Header */}
                                <div className={`bg-gradient-to-r ${kategori.color} p-8`}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                                <i className={`${kategori.icon} text-white text-2xl`}></i>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">{kategori.kategori}</h3>
                                                <div className="text-white/90">{kategori.modul.length} Modul</div>
                                            </div>
                                        </div>
                                        <div className="hidden md:block text-white/80 text-right">
                                            <div className="text-sm">Total Durasi</div>
                                            <div className="text-xl font-bold">
                                                {kategori.modul.reduce((total, mod) => {
                                                    const hours = parseInt(mod.durasi);
                                                    return total + (isNaN(hours) ? 0 : hours);
                                                }, 0)} Jam
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Modul List */}
                                <div className="p-8">
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {kategori.modul.map((modul, modIndex) => (
                                            <div key={modIndex} className="border border-[#e5e7eb] rounded-xl p-6 hover:border-[#cbdde9] transition-colors">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <h4 className="font-bold text-[#2a436c] mb-2">{modul.judul}</h4>
                                                        <div className="flex items-center gap-2 text-sm text-[#6b7280]">
                                                            <i className="ri-time-line"></i>
                                                            <span>{modul.durasi}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-xs font-semibold bg-[#f0f7ff] text-[#4f90c6] px-3 py-1 rounded-full">
                                                        Modul {modIndex + 1}
                                                    </div>
                                                </div>

                                                <div className="space-y-2 mb-6">
                                                    {modul.topik.map((topik, topikIndex) => (
                                                        <div key={topikIndex} className="flex items-center gap-2 text-sm text-[#6b7280]">
                                                            <div className="w-2 h-2 rounded-full bg-[#cbdde9]"></div>
                                                            {topik}
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="pt-4 border-t border-[#e5e7eb]">
                                                    <div className="text-sm text-[#6b7280] mb-1">Mentor:</div>
                                                    <div className="font-medium text-[#2a436c]">{modul.mentor}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workshop Khusus */}
            <section className="py-20 bg-[#f9fafb]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#4f90c6] px-6 py-3 rounded-full text-sm font-semibold mb-4 border border-[#cbdde9]">
                            <i className="ri-flask-line"></i>
                            WORKSHOP KHUSUS
                        </div>
                        <h2 className="text-4xl font-bold text-[#2a436c] mb-6">
                            Pelatihan <span className="text-[#4f90c6]">Spesialis</span> Lanjutan
                        </h2>
                        <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
                            Workshop intensif untuk menguasai skill spesifik yang dibutuhkan dalam bisnis modern
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {workshopKhusus.map((workshop, index) => (
                            <div key={index} className="bg-white border border-[#e5e7eb] rounded-xl p-6 hover:shadow-lg hover:border-[#cbdde9] transition-all">
                                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-[#4f90c6] to-[#90b6d5] text-white mb-4">
                                    <i className={`${workshop.icon} text-xl`}></i>
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-[#2a436c]">{workshop.judul}</h3>
                                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${workshop.level === 'Basic' ? 'bg-blue-100 text-blue-800' :
                                                workshop.level === 'Intermediate' ? 'bg-green-100 text-green-800' :
                                                    'bg-purple-100 text-purple-800'
                                            }`}>
                                            {workshop.level}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[#6b7280]">{workshop.deskripsi}</p>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-[#e5e7eb]">
                                    <div className="flex items-center gap-2 text-sm text-[#6b7280]">
                                        <i className="ri-time-line"></i>
                                        <span>{workshop.durasi}</span>
                                    </div>
                                    <button className="text-sm font-medium text-[#4f90c6] hover:text-[#355485] transition-colors">
                                        Detail <i className="ri-arrow-right-line ml-1"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metode Pembelajaran */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#4f90c6] px-6 py-3 rounded-full text-sm font-semibold mb-4 border border-[#cbdde9]">
                            <i className="ri-lightbulb-line"></i>
                            METODE PEMBELAJARAN
                        </div>
                        <h2 className="text-4xl font-bold text-[#2a436c] mb-6">
                            Belajar dengan <span className="text-[#4f90c6]">Pendekatan Modern</span>
                        </h2>
                        <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
                            Kombinasi metode pembelajaran yang efektif untuk memastikan pemahaman dan implementasi optimal
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {metodeBelajar.map((metode, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-[#4f90c6] to-[#90b6d5] text-white mb-6">
                                    <i className={`${metode.icon} text-3xl`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-[#2a436c] mb-4">{metode.judul}</h3>
                                <p className="text-[#6b7280]">{metode.deskripsi}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-gradient-to-r from-[#f0f7ff] to-[#e5efff] rounded-2xl p-8 border border-[#cbdde9]">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-[#2a436c] mb-4">Fasilitas Pembelajaran</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        'Modul Digital Lengkap',
                                        'Akses Video Rekaman',
                                        'Konsultasi Mentor',
                                        'Sertifikat Resmi',
                                        'Group Discussion',
                                        'Studi Kasus Real'
                                    ].map((fasilitas, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-6 h-6 bg-[#4f90c6] text-white rounded-full flex items-center justify-center">
                                                <i className="ri-check-line text-sm"></i>
                                            </div>
                                            <span className="text-[#6b7280]">{fasilitas}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="text-center lg:text-right">
                                <Link
                                    to="/pendaftaran"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white rounded-xl font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <i className="ri-user-add-line"></i>
                                    Daftar Sekarang
                                </Link>
                                <p className="text-sm text-[#6b7280] mt-4">
                                    Kuota terbatas setiap batch
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterCempor />
        </>
    );
}