import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarCempor from '../components/cempor/Navbar';
import FooterCempor from '../components/cempor/Footer';

export default function KegiatanCempor() {
    const [activeTab, setActiveTab] = useState('semua');
    const [activeYear, setActiveYear] = useState('2025');

    const kegiatan = [
        {
            id: 1,
            judul: 'Opening Ceremony Batch 2025',
            kategori: 'acara',
            tanggal: '15 Januari 2025',
            waktu: '09:00 - 12:00',
            lokasi: 'Auditorium Dispora Kalteng',
            deskripsi: 'Peluncuran resmi program CEMPOR Batch 2025 dengan peserta dari seluruh kabupaten/kota Kalteng',
            status: 'selesai',
            peserta: 150,
            imageColor: 'bg-gradient-to-br from-blue-400 to-cyan-400',
            tahun: '2025'
        },
        {
            id: 2,
            judul: 'Digital Marketing Workshop',
            kategori: 'workshop',
            tanggal: '22-23 Januari 2025',
            waktu: '13:00 - 17:00',
            lokasi: 'Lab Komputer UNPAR',
            deskripsi: 'Pelatihan intensif strategi pemasaran digital untuk produk lokal Kalteng',
            status: 'selesai',
            peserta: 75,
            imageColor: 'bg-gradient-to-br from-purple-400 to-pink-400',
            tahun: '2025'
        },
        {
            id: 3,
            judul: 'Business Matching UMKM',
            kategori: 'networking',
            tanggal: '5 Februari 2025',
            waktu: '10:00 - 16:00',
            lokasi: 'Mall Palangka Raya',
            deskripsi: 'Ajang temu bisnis antara UMKM binaan dengan buyer dan distributor',
            status: 'selesai',
            peserta: 200,
            imageColor: 'bg-gradient-to-br from-green-400 to-emerald-400',
            tahun: '2025'
        },
        {
            id: 4,
            judul: 'Mid-Term Evaluation',
            kategori: 'evaluasi',
            tanggal: '15 Maret 2025',
            waktu: '09:00 - 15:00',
            lokasi: 'Gedung Dispora Kalteng',
            deskripsi: 'Evaluasi perkembangan bisnis peserta dengan tim mentor',
            status: 'selesai',
            peserta: 120,
            imageColor: 'bg-gradient-to-br from-amber-400 to-orange-400',
            tahun: '2025'
        },
        {
            id: 5,
            judul: 'Market Day Produk Lokal',
            kategori: 'pameran',
            tanggal: '30 Maret 2025',
            waktu: '08:00 - 20:00',
            lokasi: 'Car Free Day Palangka Raya',
            deskripsi: 'Pameran dan penjualan produk-produk UMKM binaan CEMPOR',
            status: 'selesai',
            peserta: 50,
            imageColor: 'bg-gradient-to-br from-rose-400 to-pink-400',
            tahun: '2025'
        },
        {
            id: 6,
            judul: 'Industrial Visit',
            kategori: 'kunjungan',
            tanggal: '12 April 2025',
            waktu: '08:00 - 17:00',
            lokasi: 'Sentra UMKM Terpadu',
            deskripsi: 'Studi lapangan ke sentra produksi UMKM sukses di Kalteng',
            status: 'selesai',
            peserta: 60,
            imageColor: 'bg-gradient-to-br from-indigo-400 to-purple-400',
            tahun: '2025'
        },
        {
            id: 7,
            judul: 'Graduation Day 2025',
            kategori: 'wisuda',
            tanggal: '30 Mei 2025',
            waktu: '19:00 - 22:00',
            lokasi: 'Hotel Grand Quality',
            deskripsi: 'Acara wisuda dan penganugerahan bagi peserta terbaik program',
            status: 'selesai',
            peserta: 300,
            imageColor: 'bg-gradient-to-br from-teal-400 to-cyan-400',
            tahun: '2025'
        },
        {
            id: 8,
            judul: 'Campus Roadshow',
            kategori: 'roadshow',
            tanggal: '15 Juli 2025',
            waktu: '09:00 - 15:00',
            lokasi: 'Universitas Palangka Raya',
            deskripsi: 'Roadshow sosialisasi program ke perguruan tinggi se-Kalteng',
            status: 'akan-datang',
            peserta: 500,
            imageColor: 'bg-gradient-to-br from-blue-500 to-indigo-500',
            tahun: '2025'
        },
        {
            id: 9,
            judul: 'Startup Competition',
            kategori: 'kompetisi',
            tanggal: '28 Agustus 2025',
            waktu: '13:00 - 18:00',
            lokasi: 'Gedung Dispora Kalteng',
            deskripsi: 'Kompetisi presentasi bisnis dengan hadiah total Rp 100 juta',
            status: 'akan-datang',
            peserta: 50,
            imageColor: 'bg-gradient-to-br from-red-400 to-orange-400',
            tahun: '2025'
        },
        {
            id: 10,
            judul: 'International Workshop',
            kategori: 'workshop',
            tanggal: '10 September 2025',
            waktu: '09:00 - 16:00',
            lokasi: 'Hotel Mercure',
            deskripsi: 'Workshop strategi ekspor produk ke pasar internasional',
            status: 'akan-datang',
            peserta: 80,
            imageColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
            tahun: '2025'
        },
        {
            id: 11,
            judul: 'Investor Meetup',
            kategori: 'networking',
            tanggal: '25 Oktober 2025',
            waktu: '14:00 - 20:00',
            lokasi: 'Coworking Space Palangka Raya',
            deskripsi: 'Networking dengan investor dan venture capital',
            status: 'akan-datang',
            peserta: 100,
            imageColor: 'bg-gradient-to-br from-emerald-500 to-green-500',
            tahun: '2025'
        },
        {
            id: 12,
            judul: 'Annual Report 2025',
            kategori: 'acara',
            tanggal: '15 Desember 2025',
            waktu: '10:00 - 12:00',
            lokasi: 'Gedung Dispora Kalteng',
            deskripsi: 'Pelaporan capaian program CEMPOR sepanjang tahun 2025',
            status: 'akan-datang',
            peserta: 200,
            imageColor: 'bg-gradient-to-br from-sky-500 to-blue-500',
            tahun: '2025'
        }
    ];

    const kategoriList = [
        { id: 'semua', label: 'Semua', icon: 'ri-grid-fill', count: 12 },
        { id: 'acara', label: 'Acara', icon: 'ri-calendar-event-fill', count: 2 },
        { id: 'workshop', label: 'Workshop', icon: 'ri-flask-fill', count: 2 },
        { id: 'networking', label: 'Networking', icon: 'ri-handshake-fill', count: 2 },
        { id: 'pameran', label: 'Pameran', icon: 'ri-store-2-fill', count: 1 },
        { id: 'kunjungan', label: 'Kunjungan', icon: 'ri-bus-fill', count: 1 },
        { id: 'wisuda', label: 'Wisuda', icon: 'ri-graduation-cap-fill', count: 1 },
        { id: 'kompetisi', label: 'Kompetisi', icon: 'ri-trophy-fill', count: 1 }
    ];

    const yearList = ['2025', '2024', '2026'];

    const filteredKegiatan = kegiatan.filter(item => {
        if (activeTab === 'semua') return item.tahun === activeYear;
        return item.kategori === activeTab && item.tahun === activeYear;
    });

    const getKategoriIcon = (kategori) => {
        const found = kategoriList.find(k => k.id === kategori);
        return found ? found.icon : 'ri-calendar-event-fill';
    };

    return (
        <>
            <NavbarCempor />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#2a436c] via-[#355485] to-[#4f90c6]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-20">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-6">
                            <i className="ri-calendar-event-line"></i>
                            KEGIATAN CEMPOR
                        </div>
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Jejak <span className="text-[#cbdde9]">Aktivitas</span> dan Pencapaian
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Ikuti seluruh rangkaian kegiatan, workshop, dan event CEMPOR dari tahun 2025 hingga 2026.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                                <div className="text-2xl font-bold">50+</div>
                                <div className="text-sm">Kegiatan Tahunan</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                                <div className="text-2xl font-bold">2000+</div>
                                <div className="text-sm">Peserta Terlibat</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                                <div className="text-2xl font-bold">30+</div>
                                <div className="text-sm">Workshop Spesial</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Filter Section */}
            <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        {/* Tahun */}
                        <div className="flex items-center gap-4">
                            <span className="text-gray-700 font-medium">Tahun:</span>
                            <div className="flex gap-2">
                                {yearList.map(year => (
                                    <button
                                        key={year}
                                        onClick={() => setActiveYear(year)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all ${activeYear === year
                                                ? 'bg-[#2a436c] text-white shadow-md'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Kategori */}
                        <div className="flex-1 overflow-x-auto scrollbar-hide">
                            <div className="flex gap-2 pb-2">
                                {kategoriList.map(kategori => (
                                    <button
                                        key={kategori.id}
                                        onClick={() => setActiveTab(kategori.id)}
                                        className={`flex items-center gap-2 px-4 py-3 rounded-xl whitespace-nowrap transition-all ${activeTab === kategori.id
                                                ? 'bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white shadow-lg'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        <i className={kategori.icon}></i>
                                        <span>{kategori.label}</span>
                                        <span className={`text-xs px-2 py-1 rounded-full ${activeTab === kategori.id
                                                ? 'bg-white/20'
                                                : 'bg-gray-200'
                                            }`}>
                                            {kategori.count}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">
                                {activeYear} {activeTab !== 'semua' && `• ${kategoriList.find(k => k.id === activeTab)?.label}`}
                            </h2>
                            <p className="text-gray-600">
                                {filteredKegiatan.length} kegiatan ditemukan
                            </p>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                            <div className="flex items-center gap-2 text-gray-600">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-sm">Selesai</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                <span className="text-sm">Akan Datang</span>
                            </div>
                        </div>
                    </div>

                    {/* Kegiatan Grid */}
                    {filteredKegiatan.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                                <i className="ri-calendar-close-line text-4xl text-gray-400"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Tidak Ada Kegiatan
                            </h3>
                            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                Tidak ada kegiatan yang sesuai dengan filter Anda. Coba pilih kategori atau tahun lain.
                            </p>
                            <button
                                onClick={() => { setActiveTab('semua'); setActiveYear('2025'); }}
                                className="px-6 py-3 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                            >
                                <i className="ri-refresh-line mr-2"></i>
                                Reset Filter
                            </button>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredKegiatan.map(kegiatan => (
                                <div
                                    key={kegiatan.id}
                                    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                                >
                                    {/* Image/Color Header */}
                                    <div className={`relative h-48 ${kegiatan.imageColor} overflow-hidden`}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        {/* Status Badge */}
                                        <div className="absolute top-4 right-4">
                                            <div className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${kegiatan.status === 'selesai'
                                                    ? 'bg-green-500/90 text-white'
                                                    : 'bg-blue-500/90 text-white'
                                                }`}>
                                                {kegiatan.status === 'selesai' ? 'SELESAI' : 'AKAN DATANG'}
                                            </div>
                                        </div>
                                        {/* Kategori Icon */}
                                        <div className="absolute bottom-4 left-4">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                                <i className={`${getKategoriIcon(kegiatan.kategori)} text-white text-2xl`}></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Tanggal & Waktu */}
                                        <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                                            <div className="flex items-center gap-1">
                                                <i className="ri-calendar-line"></i>
                                                <span>{kegiatan.tanggal}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <i className="ri-time-line"></i>
                                                <span>{kegiatan.waktu}</span>
                                            </div>
                                        </div>

                                        {/* Judul */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2a436c] transition-colors line-clamp-2">
                                            {kegiatan.judul}
                                        </h3>

                                        {/* Deskripsi */}
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {kegiatan.deskripsi}
                                        </p>

                                        {/* Info Tambahan */}
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                                                    <i className="ri-map-pin-line text-gray-600"></i>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-gray-500">Lokasi</div>
                                                    <div className="font-medium text-gray-900 text-sm">{kegiatan.lokasi}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                                                    <i className="ri-user-line text-gray-600"></i>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-gray-500">Peserta</div>
                                                    <div className="font-medium text-gray-900">{kegiatan.peserta}</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <button className="flex-1 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                                <i className="ri-gallery-line"></i>
                                                Galeri
                                            </button>
                                            <button className="flex-1 py-2.5 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white rounded-lg font-medium hover:shadow-md transition-all flex items-center justify-center gap-2">
                                                <i className="ri-share-line"></i>
                                                Bagikan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Highlights Section */}
                <div className="bg-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white px-6 py-2.5 rounded-full text-sm font-semibold mb-4 shadow-lg">
                                <i className="ri-fire-fill"></i>
                                HIGHLIGHTS 2025
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Momen <span className="text-[#2a436c]">Terbaik</span> Tahun Ini
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Dokumentasi kegiatan-kegiatan spesial CEMPOR yang paling berkesan
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    judul: 'Graduation Day 2025',
                                    deskripsi: 'Momen penuh haru ketika 300 peserta menyelesaikan program',
                                    kategori: 'Wisuda',
                                    foto: 'https://www.nordangliaeducation.com/risp-pattaya/-/media/risp-pattaya/news-events/graduation-2025/graduation2.jpg',
                                    galeri: 45
                                },
                                {
                                    judul: 'Market Day Produk Lokal',
                                    deskripsi: 'Pameran produk UMKM binaan yang menarik ribuan pengunjung',
                                    kategori: 'Pameran',
                                    foto: 'https://i.ytimg.com/vi/lbBe98bTNZA/hq720.jpg',
                                    galeri: 32
                                },
                                {
                                    judul: 'Startup Competition',
                                    deskripsi: 'Kompetisi bisnis dengan ide-ide inovatif dari pemuda Kalteng',
                                    kategori: 'Kompetisi',
                                    foto: 'https://www.growthmentor.com/wp-content/uploads/2022/11/startup-pitch-competition.jpg',
                                    galeri: 28
                                }
                            ].map((highlight, index) => (
                                <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={highlight.foto}
                                            alt={highlight.judul}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                                                {highlight.kategori}
                                            </span>
                                            <span className="flex items-center gap-1 text-sm">
                                                <i className="ri-image-line"></i>
                                                {highlight.galeri} foto
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{highlight.judul}</h3>
                                        <p className="text-white/90 mb-4">{highlight.deskripsi}</p>
                                        <Link
                                            to="/galeri"
                                            className="inline-flex items-center gap-2 text-white font-medium hover:text-gray-200 transition-colors"
                                        >
                                            Lihat Dokumentasi
                                            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-[#2a436c] to-[#355485] py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-8">
                            <i className="ri-notification-3-line text-white text-4xl"></i>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Dapatkan Update Kegiatan
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Berlangganan newsletter untuk mendapatkan informasi kegiatan terbaru langsung ke email Anda
                        </p>
                        <div className="max-w-md mx-auto">
                            <div className="flex gap-3 mb-4">
                                <input
                                    type="email"
                                    placeholder="Email Anda"
                                    className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                                <button className="px-8 py-3 bg-white text-[#2a436c] rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                                    Daftar
                                </button>
                            </div>
                            <p className="text-white/70 text-sm">
                                Kami tidak akan mengirim spam. Anda bisa unsubscribe kapan saja.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <FooterCempor />
        </>
    );
}