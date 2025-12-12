import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarCempor from '../components/cempor/Navbar';
import FooterCempor from '../components/cempor/Footer';

export default function TingkatanProgram() {
    const [activeLevel, setActiveLevel] = useState('dasar');

    const tingkatanProgram = [
        {
            id: 'dasar',
            level: 'Tingkat Dasar',
            subtitle: 'Pemula Wirausaha',
            durasi: '3 Bulan',
            target: 'Pemula yang ingin memulai bisnis',
            warna: 'from-[#4f90c6] to-[#90b6d5]',
            icon: 'ri-flag-line',
            fiturUtama: [
                'Pelatihan fundamental bisnis',
                'Penyusunan rencana bisnis sederhana',
                'Pembentukan mindset wirausaha',
                'Konsultasi mentor dasar'
            ],
            output: 'Business Plan sederhana dan produk prototype',
            batch: ['Q1 2025', 'Q3 2025', 'Q1 2026'],
            biaya: 'Gratis*',
            kuota: '40 peserta/batch'
        },
        {
            id: 'menengah',
            level: 'Tingkat Menengah',
            subtitle: 'Pengusaha Berkembang',
            durasi: '4 Bulan',
            target: 'UMKM yang sudah berjalan <2 tahun',
            warna: 'from-[#355485] to-[#4f90c6]',
            icon: 'ri-trending-up-line',
            fiturUtama: [
                'Digital marketing intensif',
                'Manajemen keuangan lanjutan',
                'Skalabilitas bisnis',
                'Mentor khusus industri'
            ],
            output: 'Sistem bisnis digital dan strategi ekspansi',
            batch: ['Q2 2025', 'Q4 2025', 'Q2 2026'],
            biaya: 'Subsidi 70%',
            kuota: '30 peserta/batch'
        },
        {
            id: 'lanjut',
            level: 'Tingkat Lanjut',
            subtitle: 'Scale-up Business',
            durasi: '6 Bulan',
            target: 'UMKM berkembang yang ingin scale-up',
            warna: 'from-[#2a436c] to-[#355485]',
            icon: 'ri-rocket-line',
            fiturUtama: [
                'Akses pendanaan dan investor',
                'Brand development strategis',
                'Ekspansi pasar regional',
                'Networking dengan pelaku industri'
            ],
            output: 'Investor ready dan strategi ekspansi',
            batch: ['Q2 2025', 'Q4 2025', 'Q3 2026'],
            biaya: 'Subsidi 50%',
            kuota: '20 peserta/batch'
        },
        {
            id: 'inkubasi',
            level: 'Program Inkubasi',
            subtitle: 'Business Accelerator',
            durasi: '12 Bulan',
            target: 'Startup dengan potensi tinggi',
            warna: 'from-[#1e3a5f] to-[#2a436c]',
            icon: 'ri-building-line',
            fiturUtama: [
                'Co-working space premium',
                'Akses ke jaringan investor',
                'Legal dan intellectual property support',
                'International market access'
            ],
            output: 'Startup investable dengan valuasi',
            batch: ['Q1 2025', 'Q1 2026'],
            biaya: 'Equity Based',
            kuota: '10 startup/batch'
        }
    ];

    const modulPerLevel = {
        dasar: [
            { nama: 'Mindset Wirausaha', jam: 8, mentor: 'Dr. Ahmad Wijaya' },
            { nama: 'Ideasi & Validasi Bisnis', jam: 12, mentor: 'Prof. Siti Rahayu' },
            { nama: 'Business Model Canvas', jam: 10, mentor: 'Budi Santoso' },
            { nama: 'Pembukuan Sederhana', jam: 8, mentor: 'Dewi Sartika' }
        ],
        menengah: [
            { nama: 'Digital Marketing Strategy', jam: 20, mentor: 'Maya Santoso' },
            { nama: 'Financial Management', jam: 16, mentor: 'Joko Susilo' },
            { nama: 'Operational Excellence', jam: 12, mentor: 'Agus Widodo' },
            { nama: 'Customer Relationship', jam: 10, mentor: 'Rina Wijaya' }
        ],
        lanjut: [
            { nama: 'Investment Readiness', jam: 24, mentor: 'Ahmad Fauzi' },
            { nama: 'Strategic Branding', jam: 18, mentor: 'Sari Dewi' },
            { nama: 'Market Expansion', jam: 20, mentor: 'Bambang Sutrisno' },
            { nama: 'Leadership & Team', jam: 14, mentor: 'Dr. Rina Setiawan' }
        ],
        inkubasi: [
            { nama: 'Venture Capital Preparation', jam: 32, mentor: 'Expert VC Partners' },
            { nama: 'Advanced IP Strategy', jam: 16, mentor: 'Legal Consultants' },
            { nama: 'Growth Hacking', jam: 24, mentor: 'Digital Growth Experts' },
            { nama: 'Internationalization', jam: 20, mentor: 'Global Market Specialists' }
        ]
    };

    const activeProgram = tingkatanProgram.find(t => t.id === activeLevel);
    const activeModul = modulPerLevel[activeLevel];

    return (
        <>
            <NavbarCempor />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#2a436c] via-[#355485] to-[#4f90c6]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-20">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-6">
                            <i className="ri-stairs-line"></i>
                            TINGKATAN PROGRAM
                        </div>
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Program <span className="text-[#cbdde9]">Berjenjang</span> sesuai Kebutuhan Anda
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Dari pemula hingga scale-up, kami menyediakan program pembinaan yang sesuai
                            dengan tahap perkembangan bisnis Anda di tahun 2025-2026.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Tingkatan Program */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#4f90c6] px-6 py-3 rounded-full text-sm font-semibold mb-4 border border-[#cbdde9]">
                            <i className="ri-graduation-cap-line"></i>
                            PILIH TINGKATAN
                        </div>
                        <h2 className="text-3xl font-bold text-[#2a436c] mb-6">
                            4 Level <span className="text-[#4f90c6]">Pembinaan</span> Terstruktur
                        </h2>
                        <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
                            Setiap tingkatan dirancang khusus untuk kebutuhan dan tujuan bisnis yang berbeda
                        </p>
                    </div>

                    {/* Level Selector */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {tingkatanProgram.map((tingkat) => (
                            <button
                                key={tingkat.id}
                                onClick={() => setActiveLevel(tingkat.id)}
                                className={`relative rounded-xl p-6 text-left transition-all duration-300 group ${activeLevel === tingkat.id
                                        ? 'shadow-xl transform -translate-y-1'
                                        : 'hover:shadow-lg'
                                    }`}
                            >
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tingkat.warna} ${activeLevel === tingkat.id ? 'opacity-100' : 'opacity-80 group-hover:opacity-90'
                                    }`}></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                                        <i className={`${tingkat.icon} text-white text-2xl`}></i>
                                    </div>
                                    <div className="text-white mb-2">
                                        <div className="text-lg font-bold">{tingkat.level}</div>
                                        <div className="text-sm opacity-90">{tingkat.subtitle}</div>
                                    </div>
                                    <div className="text-white/80 text-sm">
                                        {tingkat.durasi} Program
                                    </div>
                                </div>
                                {activeLevel === tingkat.id && (
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Detail Program Aktif */}
                    <div className="bg-white border border-[#e5e7eb] rounded-2xl shadow-lg overflow-hidden mb-16">
                        <div className={`bg-gradient-to-r ${activeProgram.warna} p-8`}>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                                <div>
                                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4 text-white">
                                        <i className={activeProgram.icon}></i>
                                        {activeProgram.level}
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-3">{activeProgram.subtitle}</h2>
                                    <p className="text-white/90">
                                        Program {activeProgram.durasi} untuk {activeProgram.target}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">{activeProgram.biaya}</div>
                                        <div className="text-white/80 text-sm">Biaya Program</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">{activeProgram.kuota}</div>
                                        <div className="text-white/80 text-sm">Kuota Tersedia</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Kolom 1: Fitur Utama */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#2a436c] mb-6 flex items-center gap-3">
                                        <i className="ri-star-line text-[#4f90c6]"></i>
                                        Fitur Utama
                                    </h3>
                                    <div className="space-y-4">
                                        {activeProgram.fiturUtama.map((fitur, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="w-6 h-6 bg-[#f0f7ff] text-[#4f90c6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                    <i className="ri-check-line text-sm"></i>
                                                </div>
                                                <span className="text-[#6b7280]">{fitur}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Batch Tersedia */}
                                    <div className="mt-8 pt-6 border-t border-[#e5e7eb]">
                                        <h4 className="font-semibold text-[#2a436c] mb-4">Batch Tersedia 2025-2026</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {activeProgram.batch.map((batch, index) => (
                                                <div
                                                    key={index}
                                                    className="px-4 py-2 bg-[#f0f7ff] border border-[#cbdde9] text-[#4f90c6] rounded-lg font-medium"
                                                >
                                                    {batch}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Kolom 2: Modul Pelatihan */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#2a436c] mb-6 flex items-center gap-3">
                                        <i className="ri-book-open-line text-[#4f90c6]"></i>
                                        Modul Pelatihan
                                    </h3>
                                    <div className="space-y-4">
                                        {activeModul.map((modul, index) => (
                                            <div key={index} className="border border-[#e5e7eb] rounded-lg p-4 hover:border-[#cbdde9] transition-colors">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-semibold text-[#2a436c]">{modul.nama}</h4>
                                                    <span className="text-sm text-[#6b7280]">{modul.jam} jam</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-[#6b7280]">
                                                    <i className="ri-user-3-line"></i>
                                                    <span>Mentor: {modul.mentor}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Kolom 3: Output & Pendaftaran */}
                                <div>
                                    <div className="bg-gradient-to-br from-[#f0f7ff] to-[#e5efff] rounded-xl p-6 border border-[#cbdde9] mb-8">
                                        <h3 className="text-xl font-bold text-[#2a436c] mb-4 flex items-center gap-3">
                                            <i className="ri-trophy-line text-[#4f90c6]"></i>
                                            Output Program
                                        </h3>
                                        <p className="text-[#6b7280] mb-6">
                                            {activeProgram.output}
                                        </p>
                                        <div className="flex items-center gap-3 text-sm text-[#6b7280]">
                                            <i className="ri-award-line text-[#4f90c6]"></i>
                                            <span>Sertifikat resmi dari Dispora Kalteng</span>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <Link
                                            to={`/pendaftaran?level=${activeLevel}`}
                                            className="block w-full py-4 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white rounded-xl font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 mb-4"
                                        >
                                            <i className="ri-user-add-line mr-2"></i>
                                            Daftar Program Ini
                                        </Link>
                                        <p className="text-sm text-[#6b7280]">
                                            *{activeProgram.biaya === 'Gratis*' ?
                                                'Dibebaskan untuk peserta terpilih' :
                                                'Subsidi dari Pemerintah Provinsi Kalteng'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Perbandingan */}
                    <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-[#2a436c] mb-8 text-center">
                            Perbandingan <span className="text-[#4f90c6]">Semua Tingkatan</span>
                        </h3>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-[#e5e7eb]">
                                        <th className="text-left py-4 px-4 text-[#6b7280] font-semibold">Aspek</th>
                                        {tingkatanProgram.map((tingkat) => (
                                            <th key={tingkat.id} className="text-center py-4 px-4">
                                                <div className="inline-flex flex-col items-center">
                                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tingkat.warna} flex items-center justify-center mb-2`}>
                                                        <i className={`${tingkat.icon} text-white`}></i>
                                                    </div>
                                                    <div className="font-semibold text-[#2a436c]">{tingkat.level}</div>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#e5e7eb]">
                                        <td className="py-4 px-4 text-[#6b7280] font-medium">Durasi</td>
                                        {tingkatanProgram.map((tingkat) => (
                                            <td key={tingkat.id} className="text-center py-4 px-4 text-[#2a436c] font-semibold">
                                                {tingkat.durasi}
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="border-b border-[#e5e7eb]">
                                        <td className="py-4 px-4 text-[#6b7280] font-medium">Biaya</td>
                                        {tingkatanProgram.map((tingkat) => (
                                            <td key={tingkat.id} className="text-center py-4 px-4 text-[#2a436c] font-semibold">
                                                {tingkat.biaya}
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="border-b border-[#e5e7eb]">
                                        <td className="py-4 px-4 text-[#6b7280] font-medium">Kuota</td>
                                        {tingkatanProgram.map((tingkat) => (
                                            <td key={tingkat.id} className="text-center py-4 px-4 text-[#2a436c] font-semibold">
                                                {tingkat.kuota}
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="border-b border-[#e5e7eb]">
                                        <td className="py-4 px-4 text-[#6b7280] font-medium">Batch 2025</td>
                                        {tingkatanProgram.map((tingkat) => (
                                            <td key={tingkat.id} className="text-center py-4 px-4">
                                                <div className="flex flex-col gap-1">
                                                    {tingkat.batch.filter(b => b.includes('2025')).map((batch, i) => (
                                                        <span key={i} className="text-sm text-[#6b7280]">{batch}</span>
                                                    ))}
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 text-[#6b7280] font-medium">Output</td>
                                        {tingkatanProgram.map((tingkat) => (
                                            <td key={tingkat.id} className="text-center py-4 px-4">
                                                <span className="text-sm text-[#6b7280]">{tingkat.output}</span>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimoni Alumni */}
            <section className="py-20 bg-gradient-to-b from-white to-[#f9fafb]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#4f90c6] px-6 py-3 rounded-full text-sm font-semibold mb-4 border border-[#cbdde9]">
                            <i className="ri-chat-quote-line"></i>
                            TESTIMONI ALUMNI
                        </div>
                        <h2 className="text-3xl font-bold text-[#2a436c] mb-6">
                            Mereka yang Telah <span className="text-[#4f90c6]">Sukses</span> melalui Program
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                nama: 'Andi Wijaya',
                                bisnis: 'Kopi Lokal Kalteng',
                                tingkat: 'Tingkat Dasar → Menengah',
                                testimoni: 'Dari nol sampai bisa ekspor ke Kalimantan Timur. Program dasar benar-benar membangun pondasi bisnis saya.',
                                tahun: '2023 → 2024'
                            },
                            {
                                nama: 'Sari Dewi',
                                bisnis: 'Kerajinan Rotan',
                                tingkat: 'Tingkat Menengah → Lanjut',
                                testimoni: 'Dari toko kecil jadi supplier utama hotel-hotel di Palangka Raya. Akses pendanaan dari program sangat membantu.',
                                tahun: '2023 → 2024'
                            },
                            {
                                nama: 'Budi Santoso',
                                bisnis: 'Startup Agritech',
                                tingkat: 'Program Inkubasi',
                                testimoni: 'Berhasil mendapatkan seed funding Rp 500 juta setelah mengikuti program inkubasi selama 1 tahun.',
                                tahun: '2024'
                            }
                        ].map((testi, index) => (
                            <div key={index} className="bg-white border border-[#e5e7eb] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#4f90c6] to-[#90b6d5] rounded-xl flex items-center justify-center">
                                        <i className="ri-user-3-line text-white text-2xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#2a436c]">{testi.nama}</h4>
                                        <div className="text-sm text-[#6b7280]">{testi.bisnis}</div>
                                        <div className="text-xs text-[#4f90c6] font-semibold mt-1">{testi.tahun}</div>
                                    </div>
                                </div>
                                <p className="text-[#6b7280] mb-6 italic">"{testi.testimoni}"</p>
                                <div className="pt-4 border-t border-[#e5e7eb]">
                                    <div className="text-sm text-[#6b7280]">Program yang diikuti:</div>
                                    <div className="font-medium text-[#2a436c]">{testi.tingkat}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Konsultasi */}
            <section className="py-20 bg-gradient-to-r from-[#2a436c] to-[#355485]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <h2 className="text-4xl font-bold mb-6">
                                Masih Bingung Memilih Tingkatan?
                            </h2>
                            <p className="text-xl text-white/90 mb-8">
                                Konsultasikan kebutuhan bisnis Anda dengan tim kami.
                                Kami akan membantu menentukan program yang paling sesuai dengan kondisi dan tujuan Anda.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <i className="ri-calendar-check-line text-2xl text-[#cbdde9]"></i>
                                    <span>Konsultasi Gratis 30 Menit</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="ri-user-voice-line text-2xl text-[#cbdde9]"></i>
                                    <span>Tim Mentor Berpengalaman</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="ri-file-list-3-line text-2xl text-[#cbdde9]"></i>
                                    <span>Analisis Kebutuhan Bisnis</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-[#2a436c] mb-6">Jadwalkan Konsultasi</h3>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Nama Lengkap"
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6]"
                                />
                                <input
                                    type="tel"
                                    placeholder="Nomor WhatsApp"
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6]"
                                />
                                <select className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] text-[#6b7280]">
                                    <option value="">Pilih Tingkatan yang Minat</option>
                                    {tingkatanProgram.map((tingkat) => (
                                        <option key={tingkat.id} value={tingkat.id}>
                                            {tingkat.level} - {tingkat.subtitle}
                                        </option>
                                    ))}
                                </select>
                                <button className="w-full py-3 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                                    <i className="ri-whatsapp-line mr-2"></i>
                                    WhatsApp untuk Konsultasi
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