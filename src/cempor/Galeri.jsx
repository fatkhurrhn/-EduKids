import React, { useState } from 'react';
import NavbarCempor from '../components/cempor/Navbar';
import FooterCempor from '../components/cempor/Footer';

export default function GaleriCempor() {
    const [activeTab, setActiveTab] = useState('semua');
    const [selectedImage, setSelectedImage] = useState(null);

    const galeriItems = [
        {
            id: 1,
            judul: 'Opening Ceremony 2025',
            kategori: 'acara',
            tanggal: '15 Jan 2025',
            deskripsi: 'Peluncuran resmi program CEMPOR Batch 2025 dengan peserta dari seluruh kabupaten/kota Kalteng',
            foto: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
            jumlah: 45,
            tahun: '2025'
        },
        {
            id: 2,
            judul: 'Workshop Digital Marketing',
            kategori: 'workshop',
            tanggal: '22-23 Jan 2025',
            deskripsi: 'Pelatihan intensif strategi pemasaran digital untuk produk lokal Kalteng',
            foto: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80',
            jumlah: 32,
            tahun: '2025'
        },
        {
            id: 3,
            judul: 'Business Matching UMKM',
            kategori: 'networking',
            tanggal: '5 Feb 2025',
            deskripsi: 'Ajang temu bisnis antara UMKM binaan dengan buyer dan distributor',
            foto: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
            jumlah: 28,
            tahun: '2025'
        },
        {
            id: 4,
            judul: 'Market Day Produk Lokal',
            kategori: 'pameran',
            tanggal: '30 Mar 2025',
            deskripsi: 'Pameran dan penjualan produk-produk UMKM binaan CEMPOR di Car Free Day',
            foto: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
            jumlah: 56,
            tahun: '2025'
        },
        {
            id: 5,
            judul: 'Graduation Day 2025',
            kategori: 'wisuda',
            tanggal: '30 Mei 2025',
            deskripsi: 'Acara wisuda dan penganugerahan bagi peserta terbaik program CEMPOR',
            foto: 'https://images.squarespace-cdn.com/content/v1/5fc463b9df132613bbd422a5/1607556474389-XW6KR2XHAYBCUINGYBZM/Graduations+Now+Blog+Graduation+day+Why+is+it+such+a+big+deal.jpg',
            jumlah: 65,
            tahun: '2025'
        },
        {
            id: 6,
            judul: 'Startup Competition',
            kategori: 'kompetisi',
            tanggal: '28 Aug 2025',
            deskripsi: 'Kompetisi presentasi bisnis dengan hadiah total Rp 100 juta',
            foto: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
            jumlah: 38,
            tahun: '2025'
        },
        {
            id: 7,
            judul: 'Industrial Visit',
            kategori: 'kunjungan',
            tanggal: '12 Apr 2025',
            deskripsi: 'Studi lapangan ke sentra produksi UMKM sukses di Kalimantan Tengah',
            foto: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
            jumlah: 42,
            tahun: '2025'
        },
        {
            id: 8,
            judul: 'Investor Meetup',
            kategori: 'networking',
            tanggal: '25 Okt 2025',
            deskripsi: 'Networking dengan investor dan venture capital untuk startup lokal',
            foto: 'https://media.licdn.com/dms/image/v2/D4E10AQHUYiasgaKIsg/image-shrink_800/B4EZnOtTekKwAc-/0/1760109607411?e=2147483647&v=beta&t=777ZoGkc9ZyBY1gB1UVfdD3548SH5QmKzbDtOEU8gPo',
            jumlah: 24,
            tahun: '2025'
        },
        {
            id: 9,
            judul: 'Opening Ceremony 2024',
            kategori: 'acara',
            tanggal: '10 Jan 2024',
            deskripsi: 'Peluncuran program CEMPOR Batch 2024 dengan peserta dari seluruh Kalteng',
            foto: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=800&q=80',
            jumlah: 40,
            tahun: '2024'
        },
        {
            id: 10,
            judul: 'Graduation Day 2024',
            kategori: 'wisuda',
            tanggal: '25 Mei 2024',
            deskripsi: 'Wisuda peserta CEMPOR Batch 2024 dengan kehadiran Gubernur Kalteng',
            foto: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
            jumlah: 58,
            tahun: '2024'
        },
        {
            id: 11,
            judul: 'Product Exhibition 2024',
            kategori: 'pameran',
            tanggal: '15 Mar 2024',
            deskripsi: 'Pameran produk UMKM binaan di mall terbesar Palangka Raya',
            foto: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?auto=format&fit=crop&w=800&q=80',
            jumlah: 48,
            tahun: '2024'
        },
        {
            id: 12,
            judul: 'Campus Roadshow 2024',
            kategori: 'roadshow',
            tanggal: '20 Jul 2024',
            deskripsi: 'Roadshow sosialisasi program ke perguruan tinggi se-Kalimantan Tengah',
            foto: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
            jumlah: 35,
            tahun: '2024'
        },
        {
            id: 13,
            judul: 'Planning 2026',
            kategori: 'rencana',
            tanggal: 'Coming Soon',
            deskripsi: 'Rencana kegiatan dan program CEMPOR untuk tahun 2026',
            foto: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
            jumlah: 0,
            tahun: '2026'
        },
        {
            id: 14,
            judul: 'CEMPOR Summit 2026',
            kategori: 'acara',
            tanggal: 'Coming Soon',
            deskripsi: 'Konferensi tahunan wirausaha pemuda Kalimantan Tengah',
            foto: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?auto=format&fit=crop&w=800&q=80',
            jumlah: 0,
            tahun: '2026'
        }
    ];

    const kategoriList = [
        { id: 'semua', label: 'Semua Galeri', icon: 'ri-grid-fill', count: galeriItems.length },
        { id: 'acara', label: 'Acara', icon: 'ri-calendar-event-fill', count: galeriItems.filter(g => g.kategori === 'acara').length },
        { id: 'workshop', label: 'Workshop', icon: 'ri-flask-fill', count: galeriItems.filter(g => g.kategori === 'workshop').length },
        { id: 'pameran', label: 'Pameran', icon: 'ri-store-2-fill', count: galeriItems.filter(g => g.kategori === 'pameran').length },
        { id: 'wisuda', label: 'Wisuda', icon: 'ri-graduation-cap-fill', count: galeriItems.filter(g => g.kategori === 'wisuda').length },
        { id: 'networking', label: 'Networking', icon: 'ri-handshake-fill', count: galeriItems.filter(g => g.kategori === 'networking').length },
        { id: 'kunjungan', label: 'Kunjungan', icon: 'ri-bus-fill', count: galeriItems.filter(g => g.kategori === 'kunjungan').length },
        { id: 'kompetisi', label: 'Kompetisi', icon: 'ri-trophy-fill', count: galeriItems.filter(g => g.kategori === 'kompetisi').length }
    ];

    const tahunList = ['2024', '2025', '2026'];

    const [activeYear, setActiveYear] = useState('2025');

    const filteredGaleri = galeriItems.filter(item => {
        const filterByKategori = activeTab === 'semua' || item.kategori === activeTab;
        const filterByTahun = activeYear === 'semua' || item.tahun === activeYear;
        return filterByKategori && filterByTahun;
    });

    const kategoriColor = {
        acara: 'bg-blue-100 text-blue-800',
        workshop: 'bg-purple-100 text-purple-800',
        pameran: 'bg-pink-100 text-pink-800',
        wisuda: 'bg-teal-100 text-teal-800',
        networking: 'bg-green-100 text-green-800',
        kunjungan: 'bg-indigo-100 text-indigo-800',
        kompetisi: 'bg-red-100 text-red-800',
        roadshow: 'bg-orange-100 text-orange-800',
        rencana: 'bg-gray-100 text-gray-800'
    };

    const openLightbox = (item) => {
        setSelectedImage(item);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <NavbarCempor />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#2a436c] via-[#355485] to-[#4f90c6]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492681290082-e932832941e6?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-20">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-6">
                            <i className="ri-gallery-line"></i>
                            GALERI KEGIATAN
                        </div>
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Dokumentasi <span className="text-[#cbdde9]">Visual</span> Kegiatan CEMPOR
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Lihat momen-momen berharga, workshop inspiratif, dan pencapaian alumni
                            melalui galeri foto dan video kegiatan CEMPOR.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                                <div className="text-2xl font-bold">500+</div>
                                <div className="text-sm">Foto Dokumentasi</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                                <div className="text-2xl font-bold">50+</div>
                                <div className="text-sm">Album Kegiatan</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                                <div className="text-2xl font-bold">3 Tahun</div>
                                <div className="text-sm">Arsip Digital</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Filter Section */}
            <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        {/* Tahun Filter */}
                        <div className="flex items-center gap-4">
                            <span className="text-gray-700 font-medium">Tahun:</span>
                            <div className="flex gap-2">
                                {tahunList.map(year => (
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

                        {/* Kategori Filter */}
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

            {/* Main Gallery */}
            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">
                                {activeYear} {activeTab !== 'semua' && `• ${kategoriList.find(k => k.id === activeTab)?.label}`}
                            </h2>
                            <p className="text-gray-600">
                                {filteredGaleri.length} album ditemukan
                            </p>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <i className="ri-sort-desc mr-2"></i>
                                Urutkan
                            </button>
                            <button className="px-4 py-2 bg-[#2a436c] text-white rounded-lg hover:bg-[#355485] transition-colors">
                                <i className="ri-download-line mr-2"></i>
                                Download
                            </button>
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    {filteredGaleri.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                                <i className="ri-image-line text-4xl text-gray-400"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Tidak Ada Galeri
                            </h3>
                            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                Tidak ada galeri yang sesuai dengan filter Anda. Coba pilih kategori atau tahun lain.
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
                            {filteredGaleri.map((item) => (
                                <div
                                    key={item.id}
                                    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 cursor-pointer"
                                    onClick={() => openLightbox(item)}
                                >
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={item.foto}
                                            alt={item.judul}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                        {/* Overlay Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${kategoriColor[item.kategori]}`}>
                                                    {item.kategori.charAt(0).toUpperCase() + item.kategori.slice(1)}
                                                </span>
                                                <span className="flex items-center gap-1 text-sm bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                                                    <i className="ri-image-line"></i>
                                                    {item.jumlah}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{item.judul}</h3>
                                            <div className="flex items-center gap-2 text-sm text-white/90">
                                                <i className="ri-calendar-line"></i>
                                                <span>{item.tanggal}</span>
                                                <i className="ri-time-line ml-3"></i>
                                                <span>{item.tahun}</span>
                                            </div>
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2a436c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="text-center text-white">
                                                <div className="w-12 h-12 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                    <i className="ri-fullscreen-line text-xl"></i>
                                                </div>
                                                <div className="text-sm font-medium">Klik untuk lihat detail</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="p-6">
                                        <p className="text-gray-600 line-clamp-2">
                                            {item.deskripsi}
                                        </p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <button className="text-[#4f90c6] font-medium hover:text-[#355485] transition-colors flex items-center gap-2">
                                                <i className="ri-eye-line"></i>
                                                Lihat Album
                                            </button>
                                            <div className="flex gap-2">
                                                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                                                    <i className="ri-share-line text-gray-600"></i>
                                                </button>
                                                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                                                    <i className="ri-heart-line text-gray-600"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Video Gallery */}
                <div className="bg-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white px-6 py-2.5 rounded-full text-sm font-semibold mb-4 shadow-lg">
                                <i className="ri-video-line"></i>
                                GALERI VIDEO
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Momen <span className="text-[#2a436c]">Bergerak</span> yang Menginspirasi
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Dokumentasi video kegiatan CEMPOR yang menangkap semangat dan energi wirausaha pemuda Kalteng
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    judul: 'Opening Ceremony 2025',
                                    deskripsi: 'Highlight peluncuran program batch terbaru',
                                    durasi: '3:45',
                                    views: '2.5K',
                                    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800'
                                },
                                {
                                    judul: 'Success Stories Alumni',
                                    deskripsi: 'Kisah sukses alumni CEMPOR batch sebelumnya',
                                    durasi: '8:20',
                                    views: '5.1K',
                                    thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800'
                                },
                                {
                                    judul: 'Workshop Highlights',
                                    deskripsi: 'Potongan kegiatan workshop digital marketing',
                                    durasi: '4:15',
                                    views: '3.2K',
                                    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800'
                                }
                            ].map((video, index) => (
                                <div key={index} className="group">
                                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                                        {/* Video Thumbnail */}
                                        <div className="relative aspect-video overflow-hidden">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.judul}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <i className="ri-play-fill text-white text-3xl"></i>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                                {video.durasi}
                                            </div>
                                        </div>

                                        {/* Video Info */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{video.judul}</h3>
                                            <p className="text-gray-600 mb-4">{video.deskripsi}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                                    <span className="flex items-center gap-1">
                                                        <i className="ri-eye-line"></i>
                                                        {video.views} views
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <i className="ri-thumb-up-line"></i>
                                                        248
                                                    </span>
                                                </div>
                                                <button className="text-[#4f90c6] font-medium hover:text-[#355485] transition-colors flex items-center gap-2">
                                                    Tonton
                                                    <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Photo Highlights */}
                <div className="bg-gradient-to-b from-white to-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white px-6 py-2.5 rounded-full text-sm font-semibold mb-4 shadow-lg">
                                <i className="ri-image-2-line"></i>
                                FOTO PILIHAN
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Momen <span className="text-[#2a436c]">Terbaik</span> dalam Frame
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                'https://images.squarespace-cdn.com/content/v1/5fc463b9df132613bbd422a5/1607556474389-XW6KR2XHAYBCUINGYBZM/Graduations+Now+Blog+Graduation+day+Why+is+it+such+a+big+deal.jpg',
                                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80',
                                'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w-400&q=80',
                                'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80',
                                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
                                'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80',
                                'https://media.licdn.com/dms/image/v2/D4E10AQHUYiasgaKIsg/image-shrink_800/B4EZnOtTekKwAc-/0/1760109607411?e=2147483647&v=beta&t=777ZoGkc9ZyBY1gB1UVfdD3548SH5QmKzbDtOEU8gPo',
                                'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80'
                            ].map((photo, index) => (
                                <div
                                    key={index}
                                    className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                                    onClick={() => openLightbox({ foto: photo, judul: `Foto ${index + 1}` })}
                                >
                                    <img
                                        src={photo}
                                        alt={`Highlight ${index + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <div className="text-white">
                                            <div className="flex items-center gap-2">
                                                <i className="ri-heart-line"></i>
                                                <span className="text-sm">42</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Download */}
                <div className="bg-gradient-to-r from-[#2a436c] to-[#355485] py-20">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-8">
                            <i className="ri-download-cloud-2-line text-white text-4xl"></i>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Download Dokumentasi Lengkap
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Dapatkan akses ke seluruh foto dan video kegiatan CEMPOR dalam kualitas tinggi
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 bg-white text-[#2a436c] rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-3">
                                <i className="ri-google-drive-line text-xl"></i>
                                Akses Google Drive
                            </button>
                            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
                                <i className="ri-folder-download-line text-xl"></i>
                                Download ZIP
                            </button>
                        </div>
                        <p className="text-white/70 text-sm mt-6">
                            *Dokumentasi tersedia untuk keperluan non-komersial
                        </p>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                    <div className="relative max-w-4xl w-full max-h-[90vh]">
                        <button
                            onClick={closeLightbox}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                        >
                            <i className="ri-close-line text-3xl"></i>
                        </button>

                        <div className="bg-white rounded-2xl overflow-hidden">
                            <img
                                src={selectedImage.foto}
                                alt={selectedImage.judul}
                                className="w-full h-auto max-h-[60vh] object-contain"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.judul}</h3>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${kategoriColor[selectedImage.kategori]}`}>
                                        {selectedImage.kategori.charAt(0).toUpperCase() + selectedImage.kategori.slice(1)}
                                    </span>
                                    <span className="text-gray-600 flex items-center gap-2">
                                        <i className="ri-calendar-line"></i>
                                        {selectedImage.tanggal} • {selectedImage.tahun}
                                    </span>
                                </div>
                                <p className="text-gray-700">{selectedImage.deskripsi}</p>
                                <div className="mt-6 flex gap-4">
                                    <button className="flex-1 py-3 bg-[#2a436c] text-white rounded-lg font-medium hover:bg-[#355485] transition-colors">
                                        <i className="ri-download-line mr-2"></i>
                                        Download
                                    </button>
                                    <button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                                        <i className="ri-share-line mr-2"></i>
                                        Bagikan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <FooterCempor />
        </>
    );
}