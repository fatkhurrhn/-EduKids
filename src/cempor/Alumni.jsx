import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarCempor from '../components/cempor/Navbar';
import FooterCempor from '../components/cempor/Footer';

export default function AlumniCempor() {
    const [activeFilter, setActiveFilter] = useState('semua');
    const [searchTerm, setSearchTerm] = useState('');

    const alumniList = [
        {
            id: 1,
            nama: 'Andi Wijaya',
            angkatan: 'Batch 1 - 2022',
            usaha: 'Kopi Lokal Kalteng',
            bidang: 'Food & Beverage',
            lokasi: 'Palangka Raya',
            pencapaian: 'Ekspor ke Kalimantan Timur',
            omzet: 'Rp 500jt/tahun',
            pekerjaanSebelum: 'Fresh Graduate',
            testimoni: 'CEMPOR memberikan pondasi bisnis yang kuat. Dari nol sampai bisa ekspor ke luar daerah.',
            foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400',
            kategori: 'sukses'
        },
        {
            id: 2,
            nama: 'Sari Dewi',
            angkatan: 'Batch 2 - 2022',
            usaha: 'Kerajinan Rotan Kalimantan',
            bidang: 'Kerajinan',
            lokasi: 'Katingan',
            pencapaian: 'Supplier hotel-hotel bintang 5',
            omzet: 'Rp 800jt/tahun',
            pekerjaanSebelum: 'Ibu Rumah Tangga',
            testimoni: 'Program mentoring CEMPOR membantu saya scaling bisnis dari home industry ke supplier hotel.',
            foto: 'https://storage.googleapis.com/sahabat-pegadaian-asset-prd/migrated-media/2023--11--mindset-orang-sukses.webp',
            kategori: 'sukses'
        },
        {
            id: 3,
            nama: 'Budi Santoso',
            angkatan: 'Batch 1 - 2023',
            usaha: 'AgriTech Kalteng',
            bidang: 'Teknologi',
            lokasi: 'Palangka Raya',
            pencapaian: 'Seed funding Rp 500 juta',
            omzet: 'Rp 1,2M/tahun',
            pekerjaanSebelum: 'Software Engineer',
            testimoni: 'Program inkubasi CEMPOR membantu saya mendapatkan investor pertama untuk startup agritech.',
            foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400',
            kategori: 'investor'
        },
        {
            id: 4,
            nama: 'Rina Setiawan',
            angkatan: 'Batch 3 - 2022',
            usaha: 'Fashion Batik Dayak',
            bidang: 'Fashion',
            lokasi: 'Palangka Raya',
            pencapaian: 'Brand ambassador batik Kalteng',
            omzet: 'Rp 350jt/tahun',
            pekerjaanSebelum: 'Desainer',
            testimoni: 'Pelatihan branding dari CEMPOR membuat produk saya dikenal sebagai brand batik premium.',
            foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400',
            kategori: 'sukses'
        },
        {
            id: 5,
            nama: 'Ahmad Fauzi',
            angkatan: 'Batch 2 - 2023',
            usaha: 'Madu Hutan Kalteng',
            bidang: 'Food & Beverage',
            lokasi: 'Gunung Mas',
            pencapaian: 'Ekspor ke Singapura',
            omzet: 'Rp 700jt/tahun',
            pekerjaanSebelum: 'Peternak Madu',
            testimoni: 'Dari peternak madu tradisional jadi eksportir berkat bantuan akses pasar dari CEMPOR.',
            foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400',
            kategori: 'eksportir'
        },
        {
            id: 6,
            nama: 'Maya Santoso',
            angkatan: 'Batch 1 - 2024',
            usaha: 'Digital Agency Borneo',
            bidang: 'Digital Marketing',
            lokasi: 'Palangka Raya',
            pencapaian: 'Klien dari 5 provinsi',
            omzet: 'Rp 900jt/tahun',
            pekerjaanSebelum: 'Freelancer',
            testimoni: 'Skill digital marketing yang saya dapat di CEMPOR membuat saya bisa membangun agency sendiri.',
            foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400',
            kategori: 'digital'
        },
        {
            id: 7,
            nama: 'Joko Susilo',
            angkatan: 'Batch 3 - 2023',
            usaha: 'Olahan Ikan Lokal',
            bidang: 'Food & Beverage',
            lokasi: 'Pulang Pisau',
            pencapaian: 'Produk di minimarket nasional',
            omzet: 'Rp 600jt/tahun',
            pekerjaanSebelum: 'Nelayan',
            testimoni: 'Dari menjual ikan segar jadi produk olahan yang dipasarkan ke seluruh Indonesia.',
            foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400',
            kategori: 'sukses'
        },
        {
            id: 8,
            nama: 'Dewi Sartika',
            angkatan: 'Batch 2 - 2024',
            usaha: 'EduTech Borneo',
            bidang: 'Edukasi',
            lokasi: 'Palangka Raya',
            pencapaian: '10.000+ pengguna',
            omzet: 'Rp 400jt/tahun',
            pekerjaanSebelum: 'Guru',
            testimoni: 'CEMPOR membantu saya mentransformasi passion mengajar ke platform digital.',
            foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400',
            kategori: 'teknologi'
        },
        {
            id: 9,
            nama: 'Agus Widodo',
            angkatan: 'Batch 1 - 2022',
            usaha: 'Tour Guide Kalimantan',
            bidang: 'Pariwisata',
            lokasi: 'Palangka Raya',
            pencapaian: 'Wisatawan dari 20 negara',
            omzet: 'Rp 300jt/tahun',
            pekerjaanSebelum: 'Driver',
            testimoni: 'Dari driver biasa jadi tour guide khusus wisatawan mancanegara.',
            foto: 'https://www.bizhare.id/media/wp-content/uploads/2023/12/1214_Thumbnail_Artikel-Media_Ciri-ciri-Orang-Sukses-Apakah-Anda-Salah-Satunya_.jpg',
            kategori: 'sukses'
        },
        {
            id: 10,
            nama: 'Bambang Sutrisno',
            angkatan: 'Batch 3 - 2024',
            usaha: 'Katering Sehat',
            bidang: 'Food & Beverage',
            lokasi: 'Palangka Raya',
            pencapaian: 'Mitra 50 perusahaan',
            omzet: 'Rp 1M/tahun',
            pekerjaanSebelum: 'Koki',
            testimoni: 'Manajemen bisnis dari CEMPOR membuat usaha katering saya berkembang pesat.',
            foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400',
            kategori: 'sukses'
        }
    ];

    const filterOptions = [
        { id: 'semua', label: 'Semua Alumni', count: alumniList.length },
        { id: 'sukses', label: 'Bisnis Sukses', count: alumniList.filter(a => a.kategori === 'sukses').length },
        { id: 'investor', label: 'Dapat Investor', count: alumniList.filter(a => a.kategori === 'investor').length },
        { id: 'eksportir', label: 'Eksportir', count: alumniList.filter(a => a.kategori === 'eksportir').length },
        { id: 'digital', label: 'Digital Business', count: alumniList.filter(a => a.kategori === 'digital').length },
        { id: 'teknologi', label: 'Startup Tech', count: alumniList.filter(a => a.kategori === 'teknologi').length }
    ];

    const angkatanList = ['Batch 1 - 2022', 'Batch 2 - 2022', 'Batch 1 - 2023', 'Batch 2 - 2023', 'Batch 3 - 2023', 'Batch 1 - 2024', 'Batch 2 - 2024', 'Batch 3 - 2024'];

    const filteredAlumni = alumniList.filter(alumni => {
        const matchesFilter = activeFilter === 'semua' || alumni.kategori === activeFilter;
        const matchesSearch = searchTerm === '' ||
            alumni.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
            alumni.usaha.toLowerCase().includes(searchTerm.toLowerCase()) ||
            alumni.bidang.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const kategoriColor = {
        sukses: 'bg-green-100 text-green-800',
        investor: 'bg-purple-100 text-purple-800',
        eksportir: 'bg-blue-100 text-blue-800',
        digital: 'bg-orange-100 text-orange-800',
        teknologi: 'bg-indigo-100 text-indigo-800'
    };

    return (
        <>
            <NavbarCempor />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#2a436c] via-[#355485] to-[#4f90c6]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-20">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-6">
                            <i className="ri-group-line"></i>
                            JEJAK SUKSES ALUMNI
                        </div>
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Inspirasi dari <span className="text-[#cbdde9]">Pemuda Kalteng</span> yang Sukses Berwirausaha
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Lihat kisah inspiratif alumni CEMPOR yang telah berhasil membangun bisnis mandiri
                            dan berkontribusi pada ekonomi daerah.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                                <div className="text-2xl font-bold">500+</div>
                                <div className="text-sm">Alumni Terbina</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                                <div className="text-2xl font-bold">Rp 50M+</div>
                                <div className="text-sm">Total Omzet</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                                <div className="text-2xl font-bold">150+</div>
                                <div className="text-sm">Bisnis Tumbuh</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Filter & Search Section */}
            <section className="py-8 bg-white border-b border-[#e5e7eb] sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Filter Categories */}
                        <div className="flex flex-wrap gap-2">
                            {filterOptions.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${activeFilter === filter.id
                                            ? 'bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white shadow-md'
                                            : 'bg-[#f9fafb] border border-[#e5e7eb] text-[#6b7280] hover:bg-[#f0f7ff]'
                                        }`}
                                >
                                    <span>{filter.label}</span>
                                    <span className={`text-xs px-2 py-1 rounded-full ${activeFilter === filter.id
                                            ? 'bg-white/20'
                                            : 'bg-[#e5e7eb]'
                                        }`}>
                                        {filter.count}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full lg:w-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Cari alumni atau usaha..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full lg:w-80 px-4 py-2.5 pl-10 pr-10 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                                <i className="ri-search-line absolute left-3 top-3 text-[#6b7280]"></i>
                                {searchTerm && (
                                    <button
                                        onClick={() => setSearchTerm('')}
                                        className="absolute right-3 top-3 text-[#6b7280] hover:text-[#2a436c]"
                                    >
                                        <i className="ri-close-line"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alumni Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-[#2a436c]">
                                {activeFilter === 'semua' ? 'Semua Alumni' : filterOptions.find(f => f.id === activeFilter)?.label}
                            </h2>
                            <p className="text-[#6b7280]">
                                {filteredAlumni.length} alumni ditemukan
                            </p>
                        </div>
                        <div className="text-sm text-[#6b7280]">
                            Menampilkan {filteredAlumni.length} dari {alumniList.length} alumni
                        </div>
                    </div>

                    {/* Alumni Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredAlumni.map((alumni) => (
                            <div key={alumni.id} className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                {/* Header with Photo */}
                                <div className="relative h-48 bg-gradient-to-br from-[#4f90c6] to-[#90b6d5] overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                    <img
                                        src={alumni.foto}
                                        alt={alumni.nama}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Kategori Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${kategoriColor[alumni.kategori]}`}>
                                            {alumni.kategori === 'sukses' ? 'Bisnis Sukses' :
                                                alumni.kategori === 'investor' ? 'Dapat Investor' :
                                                    alumni.kategori === 'eksportir' ? 'Eksportir' :
                                                        alumni.kategori === 'digital' ? 'Digital Business' : 'Startup Tech'}
                                        </span>
                                    </div>
                                    {/* Alumni Name */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white">{alumni.nama}</h3>
                                        <div className="text-white/90 text-sm">{alumni.usaha}</div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Angkatan & Lokasi */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-sm text-[#6b7280]">
                                            <div className="flex items-center gap-2 mb-1">
                                                <i className="ri-award-line"></i>
                                                <span>{alumni.angkatan}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <i className="ri-map-pin-line"></i>
                                                <span>{alumni.lokasi}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-[#6b7280] mb-1">Bidang</div>
                                            <div className="font-medium text-[#2a436c]">{alumni.bidang}</div>
                                        </div>
                                    </div>

                                    {/* Pencapaian */}
                                    <div className="mb-4">
                                        <div className="text-sm text-[#6b7280] mb-1">Pencapaian</div>
                                        <div className="font-medium text-[#2a436c]">{alumni.pencapaian}</div>
                                    </div>

                                    {/* Omzet */}
                                    <div className="mb-6 p-3 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <div className="text-sm text-[#6b7280]">Omzet Tahunan</div>
                                                <div className="text-lg font-bold text-[#2a436c]">{alumni.omzet}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-[#6b7280]">Sebelumnya</div>
                                                <div className="font-medium text-[#2a436c]">{alumni.pekerjaanSebelum}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Testimoni */}
                                    <div className="mb-6">
                                        <div className="text-sm text-[#6b7280] mb-2">Testimoni</div>
                                        <p className="text-[#6b7280] italic line-clamp-3">"{alumni.testimoni}"</p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        <button className="flex-1 py-2.5 bg-[#f0f7ff] text-[#4f90c6] rounded-lg font-medium hover:bg-[#e1efff] transition-colors flex items-center justify-center gap-2">
                                            <i className="ri-user-follow-line"></i>
                                            Connect
                                        </button>
                                        <button className="flex-1 py-2.5 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white rounded-lg font-medium hover:shadow-md transition-all flex items-center justify-center gap-2">
                                            <i className="ri-store-2-line"></i>
                                            Kunjungi
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredAlumni.length === 0 && (
                        <div className="text-center py-12">
                            <div className="inline-flex p-4 rounded-2xl bg-[#f0f7ff] text-[#4f90c6] mb-6">
                                <i className="ri-user-search-line text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-[#2a436c] mb-3">Alumni Tidak Ditemukan</h3>
                            <p className="text-[#6b7280] mb-6">
                                Tidak ada alumni yang sesuai dengan pencarian atau filter Anda.
                            </p>
                            <button
                                onClick={() => { setActiveFilter('semua'); setSearchTerm(''); }}
                                className="px-6 py-3 bg-gradient-to-r from-[#4f90c6] to-[#90b6d5] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                            >
                                <i className="ri-refresh-line mr-2"></i>
                                Reset Filter
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-20 bg-[#f9fafb]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#4f90c6] px-6 py-3 rounded-full text-sm font-semibold mb-4 border border-[#cbdde9]">
                            <i className="ri-book-mark-line"></i>
                            KISAH SUKSES
                        </div>
                        <h2 className="text-4xl font-bold text-[#2a436c] mb-6">
                            Transformasi <span className="text-[#4f90c6]">Menginspirasi</span>
                        </h2>
                        <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
                            Kisah nyata alumni CEMPOR yang berhasil mengubah hidup melalui wirausaha
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {[
                            {
                                nama: 'Andi Wijaya',
                                usaha: 'Kopi Lokal Kalteng',
                                dari: 'Fresh Graduate',
                                menjadi: 'Eksportir Kopi',
                                cerita: 'Dari lulus kuliah tanpa pekerjaan, Andi mengikuti program CEMPOR dan memulai usaha kopi lokal. Dalam 2 tahun, produknya sudah diekspor ke Kalimantan Timur.',
                                pencapaian: 'Rp 500 juta/tahun',
                                foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600'
                            },
                            {
                                nama: 'Sari Dewi',
                                usaha: 'Kerajinan Rotan',
                                dari: 'Ibu Rumah Tangga',
                                menjadi: 'Supplier Hotel Bintang 5',
                                cerita: 'Memulai dari kerajinan tangan di rumah, Sari mengembangkan bisnisnya setelah mengikuti program pendampingan CEMPOR. Kini menjadi supplier tetap hotel-hotel premium.',
                                pencapaian: 'Rp 800 juta/tahun',
                                foto: 'https://kalindoland.co.id/images/article/73979kalindo-1---januari---10-kebiasaan-orang-sukses-yang-harus-anda-terapkan-di-tahun-2025.jpg'
                            }
                        ].map((story, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e5e7eb]">
                                <div className="md:flex">
                                    <div className="md:w-2/5 relative">
                                        <img
                                            src={story.foto}
                                            alt={story.nama}
                                            className="w-full h-64 md:h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                                        <div className="absolute bottom-4 left-4 md:hidden text-white">
                                            <h3 className="text-xl font-bold">{story.nama}</h3>
                                            <p className="text-white/90">{story.usaha}</p>
                                        </div>
                                    </div>
                                    <div className="md:w-3/5 p-8">
                                        <div className="mb-4">
                                            <h3 className="text-2xl font-bold text-[#2a436c]">{story.nama}</h3>
                                            <p className="text-[#4f90c6] font-medium">{story.usaha}</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="bg-[#f9fafb] p-4 rounded-lg">
                                                <div className="text-sm text-[#6b7280]">Sebelum</div>
                                                <div className="font-bold text-[#2a436c]">{story.dari}</div>
                                            </div>
                                            <div className="bg-[#f0f7ff] p-4 rounded-lg">
                                                <div className="text-sm text-[#6b7280]">Sekarang</div>
                                                <div className="font-bold text-[#4f90c6]">{story.menjadi}</div>
                                            </div>
                                        </div>
                                        <p className="text-[#6b7280] mb-6">{story.cerita}</p>
                                        <div className="p-4 bg-gradient-to-r from-[#4f90c6]/10 to-[#90b6d5]/10 rounded-lg">
                                            <div className="text-sm text-[#6b7280]">Pencapaian</div>
                                            <div className="text-xl font-bold text-[#2a436c]">{story.pencapaian}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Angkatan List */}
                    <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb]">
                        <h3 className="text-2xl font-bold text-[#2a436c] mb-8 text-center">
                            Alumni per <span className="text-[#4f90c6]">Angkatan</span>
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {angkatanList.map((angkatan, index) => {
                                const count = alumniList.filter(a => a.angkatan === angkatan).length;
                                return (
                                    <div key={index} className="text-center p-6 bg-[#f9fafb] border border-[#e5e7eb] rounded-xl hover:bg-[#f0f7ff] transition-colors">
                                        <div className="text-3xl font-bold text-[#4f90c6] mb-2">{count}</div>
                                        <div className="text-sm font-medium text-[#2a436c]">Alumni</div>
                                        <div className="text-xs text-[#6b7280] mt-2">{angkatan}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Alumni Network */}
            <section className="py-20 bg-gradient-to-r from-[#2a436c] to-[#355485]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <h2 className="text-4xl font-bold mb-6">
                                Bergabung dengan <span className="text-[#cbdde9]">Jaringan Alumni</span>
                            </h2>
                            <p className="text-xl text-white/90 mb-8">
                                Dapatkan manfaat jaringan alumni CEMPOR untuk perkembangan bisnis Anda
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <i className="ri-network-line text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Networking Exclusive</h4>
                                        <p className="text-white/80">Akses ke jaringan alumni dan pelaku bisnis sukses</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <i className="ri-briefcase-line text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Business Opportunities</h4>
                                        <p className="text-white/80">Kesempatan kolaborasi dan kemitraan bisnis</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <i className="ri-graduation-cap-line text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Continuing Education</h4>
                                        <p className="text-white/80">Akses workshop dan pelatihan lanjutan gratis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-[#2a436c] mb-6">Daftarkan Bisnis Anda</h3>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Nama Lengkap"
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6]"
                                />
                                <input
                                    type="text"
                                    placeholder="Nama Usaha"
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6]"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6]"
                                />
                                <select className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] text-[#6b7280]">
                                    <option value="">Pilih Angkatan</option>
                                    {angkatanList.map((angkatan, index) => (
                                        <option key={index} value={angkatan}>{angkatan}</option>
                                    ))}
                                </select>
                                <button className="w-full py-3 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                                    <i className="ri-user-add-line mr-2"></i>
                                    Daftar sebagai Alumni
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterCempor />
        </>
    );
}