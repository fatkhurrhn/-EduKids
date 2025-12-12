import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarCempor from '../components/cempor/Navbar';
import FooterCempor from '../components/cempor/Footer';

export default function JadwalKelas() {
    const [filter, setFilter] = useState('semua');
    const [month, setMonth] = useState('desember');

    const jadwalKelas = [
        {
            id: 1,
            judul: 'Batch 1: Fundamental Bisnis',
            kategori: 'fundamental',
            tanggal: '2-6 Desember 2025',
            waktu: '09:00 - 16:00 WIB',
            lokasi: 'Gedung Dispora Kalteng',
            mentor: 'Dr. Ahmad Wijaya, M.M.',
            kuota: 30,
            terisi: 24,
            status: 'tersedia',
            level: 'Pemula'
        },
        {
            id: 2,
            judul: 'Workshop Digital Marketing',
            kategori: 'digital',
            tanggal: '9-11 Desember 2025',
            waktu: '13:00 - 17:00 WIB',
            lokasi: 'Lab Komputer UNPAR',
            mentor: 'Maya Santoso, M.Kom.',
            kuota: 25,
            terisi: 25,
            status: 'penuh',
            level: 'Intermediate'
        },
        {
            id: 3,
            judul: 'Manajemen Keuangan UMKM',
            kategori: 'keuangan',
            tanggal: '16-18 Desember 2025',
            waktu: '09:00 - 15:00 WIB',
            lokasi: 'Gedung Dispora Kalteng',
            mentor: 'Dewi Sartika, M.Ak.',
            kuota: 35,
            terisi: 18,
            status: 'tersedia',
            level: 'Pemula'
        },
        {
            id: 4,
            judul: 'Batch 2: Fundamental Bisnis',
            kategori: 'fundamental',
            tanggal: '6-10 Januari 2026',
            waktu: '09:00 - 16:00 WIB',
            lokasi: 'Gedung Dispora Kalteng',
            mentor: 'Prof. Siti Rahayu, M.B.A.',
            kuota: 30,
            terisi: 12,
            status: 'tersedia',
            level: 'Pemula'
        },
        {
            id: 5,
            judul: 'E-commerce Masterclass',
            kategori: 'digital',
            tanggal: '13-15 Januari 2026',
            waktu: '13:00 - 17:00 WIB',
            lokasi: 'Lab Komputer UNPAR',
            mentor: 'Ahmad Fauzi, M.T.',
            kuota: 20,
            terisi: 20,
            status: 'penuh',
            level: 'Advanced'
        },
        {
            id: 6,
            judul: 'Legalitas & Perizinan Usaha',
            kategori: 'legal',
            tanggal: '20-21 Januari 2026',
            waktu: '09:00 - 14:00 WIB',
            lokasi: 'Gedung Dispora Kalteng',
            mentor: 'Bambang Sutrisno, S.H., M.Kn.',
            kuota: 40,
            terisi: 22,
            status: 'tersedia',
            level: 'Intermediate'
        },
        {
            id: 7,
            judul: 'Pitching & Presentasi Bisnis',
            kategori: 'skill',
            tanggal: '27 Januari 2026',
            waktu: '10:00 - 16:00 WIB',
            lokasi: 'Gedung Dispora Kalteng',
            mentor: 'Rina Wijaya, S.E.',
            kuota: 25,
            terisi: 25,
            status: 'penuh',
            level: 'Intermediate'
        },
        {
            id: 8,
            judul: 'Operasional & Produksi',
            kategori: 'operasional',
            tanggal: '3-5 Februari 2026',
            waktu: '09:00 - 15:00 WIB',
            lokasi: 'Sentra UMKM Palangka Raya',
            mentor: 'Budi Santoso, M.Eng.',
            kuota: 30,
            terisi: 15,
            status: 'tersedia',
            level: 'Intermediate'
        }
    ];

    const bulan = [
        { id: 'desember', nama: 'Desember 2025' },
        { id: 'januari', nama: 'Januari 2026' },
        { id: 'februari', nama: 'Februari 2026' },
        { id: 'maret', nama: 'Maret 2026' }
    ];

    const filterKategori = [
        { id: 'semua', label: 'Semua Kelas', icon: 'ri-list-check' },
        { id: 'fundamental', label: 'Fundamental', icon: 'ri-building-line' },
        { id: 'digital', label: 'Digital', icon: 'ri-megaphone-line' },
        { id: 'keuangan', label: 'Keuangan', icon: 'ri-pie-chart-line' },
        { id: 'skill', label: 'Skill Khusus', icon: 'ri-flask-line' }
    ];

    const filteredClasses = jadwalKelas.filter(kelas => {
        const filterByCategory = filter === 'semua' || kelas.kategori === filter;
        const filterByMonth = month === 'semua' ||
            (kelas.tanggal.toLowerCase().includes(month) ||
                kelas.tanggal.toLowerCase().includes(month === 'desember' ? 'desember' :
                    month === 'januari' ? 'januari' :
                        month === 'februari' ? 'februari' : ''));
        return filterByCategory && filterByMonth;
    });

    const kategoriInfo = {
        fundamental: { color: 'bg-blue-100 text-blue-800', icon: 'ri-building-line' },
        digital: { color: 'bg-purple-100 text-purple-800', icon: 'ri-megaphone-line' },
        keuangan: { color: 'bg-green-100 text-green-800', icon: 'ri-pie-chart-line' },
        legal: { color: 'bg-orange-100 text-orange-800', icon: 'ri-scale-line' },
        skill: { color: 'bg-pink-100 text-pink-800', icon: 'ri-flask-line' },
        operasional: { color: 'bg-indigo-100 text-indigo-800', icon: 'ri-factory-line' }
    };

    const levelInfo = {
        Pemula: { color: 'bg-blue-50 text-blue-700', badge: 'Pemula' },
        Intermediate: { color: 'bg-green-50 text-green-700', badge: 'Menengah' },
        Advanced: { color: 'bg-purple-50 text-purple-700', badge: 'Lanjutan' }
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
                            <i className="ri-calendar-line"></i>
                            JADWAL KELAS
                        </div>
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Rencanakan <span className="text-[#cbdde9]">Perjalanan</span> Wirausaha Anda
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Pilih kelas sesuai jadwal dan kebutuhan Anda. Daftar sekarang untuk mengamankan kursi di batch terdekat.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-white border-b border-[#e5e7eb] sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Filter Kategori */}
                        <div className="flex flex-wrap gap-2">
                            {filterKategori.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setFilter(item.id)}
                                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${filter === item.id
                                            ? 'bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white'
                                            : 'bg-[#f9fafb] border border-[#e5e7eb] text-[#6b7280] hover:bg-[#f0f7ff]'
                                        }`}
                                >
                                    <i className={`${item.icon}`}></i>
                                    <span className="text-sm font-medium">{item.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Filter Bulan */}
                        <div className="flex items-center gap-4">
                            <span className="text-[#6b7280] font-medium">Filter Bulan:</span>
                            <div className="flex gap-2">
                                {bulan.map((bulanItem) => (
                                    <button
                                        key={bulanItem.id}
                                        onClick={() => setMonth(bulanItem.id)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${month === bulanItem.id
                                                ? 'bg-[#4f90c6] text-white'
                                                : 'bg-[#f9fafb] border border-[#e5e7eb] text-[#6b7280] hover:bg-[#f0f7ff]'
                                            }`}
                                    >
                                        {bulanItem.nama}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jadwal Kelas */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-[#2a436c]">
                                Kelas Tersedia {filter !== 'semua' && `(${filteredClasses.length})`}
                            </h2>
                            <p className="text-[#6b7280]">
                                Pilih kelas yang sesuai dengan jadwal dan minat Anda
                            </p>
                        </div>
                        <div className="text-sm text-[#6b7280]">
                            Menampilkan {filteredClasses.length} dari {jadwalKelas.length} kelas
                        </div>
                    </div>

                    {/* Grid Kelas */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredClasses.map((kelas) => (
                            <div key={kelas.id} className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                {/* Header */}
                                <div className="p-6 border-b border-[#e5e7eb]">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${kategoriInfo[kelas.kategori].color}`}>
                                                    <i className={kategoriInfo[kelas.kategori].icon}></i>
                                                    {kelas.kategori.charAt(0).toUpperCase() + kelas.kategori.slice(1)}
                                                </span>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${levelInfo[kelas.level].color}`}>
                                                    {levelInfo[kelas.level].badge}
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-[#2a436c] text-lg mb-2 group-hover:text-[#4f90c6] transition-colors">
                                                {kelas.judul}
                                            </h3>
                                        </div>
                                        <div className={`px-3 py-1 rounded-full text-xs font-bold ${kelas.status === 'tersedia'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                            }`}>
                                            {kelas.status === 'tersedia' ? 'Tersedia' : 'Penuh'}
                                        </div>
                                    </div>

                                    {/* Mentor */}
                                    <div className="flex items-center gap-3 p-3 bg-[#f9fafb] rounded-lg">
                                        <div className="w-10 h-10 bg-gradient-to-br from-[#4f90c6] to-[#90b6d5] text-white rounded-full flex items-center justify-center">
                                            <i className="ri-user-star-line"></i>
                                        </div>
                                        <div>
                                            <div className="text-xs text-[#6b7280]">Mentor</div>
                                            <div className="font-medium text-[#2a436c] text-sm">{kelas.mentor}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Detail Jadwal */}
                                <div className="p-6">
                                    <div className="space-y-4">
                                        {/* Tanggal & Waktu */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-[#f0f7ff] text-[#4f90c6] rounded-lg flex items-center justify-center flex-shrink-0">
                                                <i className="ri-calendar-event-line"></i>
                                            </div>
                                            <div>
                                                <div className="text-sm text-[#6b7280]">Tanggal & Waktu</div>
                                                <div className="font-medium text-[#2a436c]">{kelas.tanggal}</div>
                                                <div className="text-sm text-[#6b7280]">{kelas.waktu}</div>
                                            </div>
                                        </div>

                                        {/* Lokasi */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-[#f0f7ff] text-[#4f90c6] rounded-lg flex items-center justify-center flex-shrink-0">
                                                <i className="ri-map-pin-line"></i>
                                            </div>
                                            <div>
                                                <div className="text-sm text-[#6b7280]">Lokasi</div>
                                                <div className="font-medium text-[#2a436c]">{kelas.lokasi}</div>
                                            </div>
                                        </div>

                                        {/* Kuota */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-[#f0f7ff] text-[#4f90c6] rounded-lg flex items-center justify-center flex-shrink-0">
                                                <i className="ri-user-line"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between text-sm text-[#6b7280] mb-1">
                                                    <span>Kuota Peserta</span>
                                                    <span>{kelas.terisi}/{kelas.kuota}</span>
                                                </div>
                                                <div className="h-2 bg-[#e5e7eb] rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-[#4f90c6] to-[#90b6d5] rounded-full"
                                                        style={{ width: `${(kelas.terisi / kelas.kuota) * 100}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <div className="mt-6 pt-6 border-t border-[#e5e7eb]">
                                        <Link
                                            to={`/pendaftaran?kelas=${kelas.id}`}
                                            className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${kelas.status === 'tersedia'
                                                    ? 'bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white hover:shadow-lg'
                                                    : 'bg-[#f9fafb] border border-[#e5e7eb] text-[#6b7280] cursor-not-allowed'
                                                }`}
                                            onClick={(e) => kelas.status === 'penuh' && e.preventDefault()}
                                        >
                                            {kelas.status === 'tersedia' ? (
                                                <>
                                                    <i className="ri-user-add-line"></i>
                                                    Daftar Sekarang
                                                </>
                                            ) : (
                                                <>
                                                    <i className="ri-user-unfollow-line"></i>
                                                    Kelas Penuh
                                                </>
                                            )}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredClasses.length === 0 && (
                        <div className="text-center py-12">
                            <div className="inline-flex p-4 rounded-2xl bg-[#f0f7ff] text-[#4f90c6] mb-6">
                                <i className="ri-calendar-close-line text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-[#2a436c] mb-3">Tidak Ada Kelas Tersedia</h3>
                            <p className="text-[#6b7280] mb-6">
                                Tidak ada kelas yang sesuai dengan filter Anda. Coba pilih bulan atau kategori lain.
                            </p>
                            <button
                                onClick={() => { setFilter('semua'); setMonth('semua'); }}
                                className="px-6 py-3 bg-gradient-to-r from-[#4f90c6] to-[#90b6d5] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                            >
                                <i className="ri-refresh-line mr-2"></i>
                                Reset Filter
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Jadwal Kalender */}
            <section className="py-16 bg-[#f9fafb]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#4f90c6] px-6 py-3 rounded-full text-sm font-semibold mb-4 border border-[#cbdde9]">
                            <i className="ri-calendar-2-line"></i>
                            KALENDER KEGIATAN
                        </div>
                        <h2 className="text-3xl font-bold text-[#2a436c] mb-6">
                            Rangkaian <span className="text-[#4f90c6]">Program</span> 3 Bulan Ke Depan
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {bulan.map((bulanItem) => {
                                const kelasBulan = jadwalKelas.filter(k =>
                                    k.tanggal.toLowerCase().includes(bulanItem.id.replace('2025', '').trim())
                                );

                                return (
                                    <div key={bulanItem.id} className="border border-[#e5e7eb] rounded-xl overflow-hidden">
                                        <div className="bg-gradient-to-r from-[#4f90c6] to-[#90b6d5] p-4 text-white">
                                            <h3 className="text-xl font-bold">{bulanItem.nama}</h3>
                                            <p className="text-white/90 text-sm">{kelasBulan.length} Kelas</p>
                                        </div>
                                        <div className="p-4">
                                            <div className="space-y-4">
                                                {kelasBulan.map((kelas) => (
                                                    <div key={kelas.id} className="p-3 border border-[#e5e7eb] rounded-lg hover:border-[#cbdde9] transition-colors">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <div className="font-medium text-[#2a436c] text-sm line-clamp-2">
                                                                {kelas.judul}
                                                            </div>
                                                            <span className={`text-xs px-2 py-1 rounded-full ${kelas.status === 'tersedia'
                                                                    ? 'bg-green-100 text-green-800'
                                                                    : 'bg-red-100 text-red-800'
                                                                }`}>
                                                                {kelas.status === 'tersedia' ? '✓' : '✗'}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-xs text-[#6b7280]">
                                                            <i className="ri-calendar-line"></i>
                                                            <span>{kelas.tanggal.split(' ')[0]}</span>
                                                            <i className="ri-time-line ml-2"></i>
                                                            <span>{kelas.waktu.split(' ')[0]}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#2a436c] to-[#355485]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-8">
                        <i className="ri-notification-3-line text-white text-4xl"></i>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Dapatkan Pemberitahuan Kelas Baru
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Daftarkan email Anda untuk mendapatkan notifikasi ketika ada kelas baru dan promosi khusus
                    </p>
                    <div className="max-w-md mx-auto">
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Email Anda"
                                className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <button className="px-8 py-3 bg-white text-[#2a436c] rounded-xl font-semibold hover:bg-[#f0f7ff] transition-colors">
                                Daftar
                            </button>
                        </div>
                        <p className="text-white/70 text-sm mt-4">
                            Kami tidak akan mengirim spam. Anda bisa unsubscribe kapan saja.
                        </p>
                    </div>
                </div>
            </section>

            <FooterCempor />
        </>
    );
}