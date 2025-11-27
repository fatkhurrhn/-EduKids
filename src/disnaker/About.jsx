import React from 'react';
import Navbar from '../components/try/Navbar';
import Footer from '../components/try/Footer';

export default function About() {
    // Data struktur organisasi
    const strukturOrganisasi = [
        {
            jabatan: 'Kepala Dinas',
            nama: 'Drs. H. Ahmad Syarifuddin, M.Si.',
            foto: 'https://picsum.photos/150/150?random=1',
            deskripsi: 'Bertanggung jawab atas pelaksanaan tugas dan fungsi Dinas Ketenagakerjaan Kabupaten Paser'
        },
        {
            jabatan: 'Sekretaris Dinas',
            nama: 'Dra. Siti Maryam, M.M.',
            foto: 'https://picsum.photos/150/150?random=2',
            deskripsi: 'Membantu Kepala Dinas dalam koordinasi administrasi dan keuangan'
        },
        {
            jabatan: 'Kepala Bidang Penempatan Tenaga Kerja',
            nama: 'Ir. Bambang Setiawan, M.T.',
            foto: 'https://picsum.photos/150/150?random=3',
            deskripsi: 'Menangani program penempatan dan perluasan kesempatan kerja'
        },
        {
            jabatan: 'Kepala Bidang Pelatihan Kerja',
            nama: 'Drs. Muhammad Rizki, M.Pd.',
            foto: 'https://picsum.photos/150/150?random=4',
            deskripsi: 'Mengelola program pelatihan dan peningkatan kompetensi tenaga kerja'
        },
        {
            jabatan: 'Kepala Bidang Hubungan Industrial',
            nama: 'Hj. Linda Sari, S.H., M.H.',
            foto: 'https://picsum.photos/150/150?random=5',
            deskripsi: 'Menangani hubungan industrial dan penyelesaian perselisihan'
        },
        {
            jabatan: 'Kepala Bidang Pengawasan Ketenagakerjaan',
            nama: 'Drs. Andi Wijaya, M.Si.',
            foto: 'https://picsum.photos/150/150?random=6',
            deskripsi: 'Melakukan pengawasan terhadap pelaksanaan peraturan ketenagakerjaan'
        }
    ];

    // Data infografis Kabupaten Paser
    const infografisPaser = [
        {
            icon: '👥',
            title: 'Jumlah Penduduk',
            value: '275.452',
            description: 'Jiwa (2024)'
        },
        {
            icon: '🏙️',
            title: 'Ibu Kota',
            value: 'Tanah Grogot',
            description: 'Kabupaten Paser'
        },
        {
            icon: '📐',
            title: 'Luas Wilayah',
            value: '11.603',
            description: 'Km²'
        },
        {
            icon: '🏭',
            title: 'Sektor Unggulan',
            value: 'Pertanian & Pertambangan',
            description: 'Perkebunan Sawit, Batubara'
        }
    ];

    // Data visi misi
    const visiMisi = {
        visi: "Mewujudkan Tenaga Kerja yang Kompeten, Produktif, dan Berdaya Saing dalam Mendukung Pembangunan Daerah yang Berkelanjutan",
        misi: [
            "Meningkatkan kualitas dan kompetensi tenaga kerja melalui pelatihan berkelanjutan",
            "Memperluas kesempatan kerja dan penempatan tenaga kerja yang efektif",
            "Mengembangkan hubungan industrial yang harmonis antara pekerja dan pengusaha",
            "Melakukan pembinaan dan pengawasan ketenagakerjaan yang berkelanjutan",
            "Meningkatkan pelayanan publik di bidang ketenagakerjaan yang profesional"
        ]
    };

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#f9fafb]">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-[#355485] to-[#2a436c] text-white py-20">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h1 className="text-5xl font-bold mb-6">Tentang DISNAKER Paser</h1>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            Dinas Ketenagakerjaan Kabupaten Paser - Berkomitmen Mewujudkan Tenaga Kerja yang Kompeten dan Berdaya Saing
                        </p>
                    </div>
                </div>

                {/* Sejarah & Profil */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-[#355485] mb-6">Profil DISNAKER Paser</h2>
                                <p className="text-lg text-[#6b7280] mb-6 leading-relaxed">
                                    Dinas Ketenagakerjaan Kabupaten Paser merupakan instansi pemerintah yang bertanggung jawab
                                    dalam pengelolaan dan pengembangan ketenagakerjaan di wilayah Kabupaten Paser. Kami berkomitmen
                                    untuk meningkatkan kualitas tenaga kerja melalui berbagai program pelatihan, penempatan kerja,
                                    dan pembinaan hubungan industrial.
                                </p>
                                <p className="text-lg text-[#6b7280] leading-relaxed">
                                    Sejak berdiri tahun 2003, DISNAKER Paser telah berkontribusi dalam menciptakan lapangan kerja
                                    dan meningkatkan kompetensi tenaga kerja lokal untuk mendukung pembangunan ekonomi daerah
                                    yang berkelanjutan.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
                                <h3 className="text-2xl font-bold text-[#355485] mb-6 text-center">Fokus Utama Kami</h3>
                                <div className="space-y-4">
                                    {[
                                        "Pelatihan dan Sertifikasi Kompetensi",
                                        "Penempatan Tenaga Kerja yang Tepat",
                                        "Pengembangan Kewirausahaan",
                                        "Perlindungan Pekerja",
                                        "Hubungan Industrial yang Harmonis"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                                            <div className="w-8 h-8 bg-[#355485] text-white rounded-full flex items-center justify-center text-sm mr-4 flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <span className="text-[#355485] font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visi Misi */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Visi & Misi
                            </h2>
                            <p className="text-xl text-gray-600">
                                Arah dan tujuan strategis DISNAKER Kabupaten Paser
                            </p>
                        </div>

                        {/* Visi - Atas */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-green-800 mb-2">Visi</h3>
                                <div className="w-20 h-1 bg-green-500 mx-auto"></div>
                            </div>

                            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                                <p className="text-green-900 text-xl leading-relaxed text-center font-medium">
                                    "{visiMisi.visi}"
                                </p>
                            </div>
                        </div>

                        {/* Misi - Bawah */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-blue-800 mb-2">Misi</h3>
                                <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                            </div>

                            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                                <div className="grid gap-4">
                                    {visiMisi.misi.map((misi, index) => (
                                        <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-blue-100">
                                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <p className="text-blue-900 text-lg">{misi}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Struktur Organisasi */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#355485] mb-4">Struktur Organisasi</h2>
                            <p className="text-lg text-[#6b7280]">Tim profesional yang mengelola ketenagakerjaan di Kabupaten Paser</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {strukturOrganisasi.map((orang, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm hover:shadow-lg transition group">
                                    <div className="text-center">
                                        <img
                                            src={orang.foto}
                                            alt={orang.nama}
                                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#cbdde9] group-hover:border-[#4f90c6] transition"
                                        />
                                        <h3 className="text-xl font-bold text-[#355485] mb-2">{orang.nama}</h3>
                                        <span className="inline-block px-4 py-1 bg-[#cbdde9] text-[#355485] rounded-full text-sm font-medium mb-3">
                                            {orang.jabatan}
                                        </span>
                                        <p className="text-[#6b7280] text-sm leading-relaxed">
                                            {orang.deskripsi}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Infografis Kabupaten Paser */}
                <section className="py-16 bg-gradient-to-r from-[#355485] to-[#2a436c] text-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Kabupaten Paser dalam Angka</h2>
                            <p className="text-xl opacity-90">Profil dan potensi wilayah kerja DISNAKER Paser</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {infografisPaser.map((item, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <div className="text-2xl font-bold mb-1">{item.value}</div>
                                    <div className="text-white/70 text-sm">{item.description}</div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <h4 className="text-lg font-semibold mb-3">Kecamatan</h4>
                                <div className="text-3xl font-bold">10</div>
                                <p className="text-white/70 text-sm mt-2">Wilayah administrasi</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <h4 className="text-lg font-semibold mb-3">Desa/Kelurahan</h4>
                                <div className="text-3xl font-bold">139</div>
                                <p className="text-white/70 text-sm mt-2">Unit wilayah setingkat desa</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <h4 className="text-lg font-semibold mb-3">PDRB</h4>
                                <div className="text-3xl font-bold">Rp 28,5 T</div>
                                <p className="text-white/70 text-sm mt-2">Tahun 2023</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pencapaian */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#355485] mb-4">Pencapaian Kami</h2>
                            <p className="text-lg text-[#6b7280]">Kontribusi DISNAKER Paser dalam pengembangan ketenagakerjaan</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 text-center border border-green-200">
                                <div className="text-3xl font-bold text-green-600 mb-2">2.500+</div>
                                <div className="text-green-800 font-semibold">Peserta Pelatihan</div>
                                <div className="text-green-600 text-sm mt-1">Tahun 2024</div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-6 text-center border border-blue-200">
                                <div className="text-3xl font-bold text-blue-600 mb-2">1.200+</div>
                                <div className="text-blue-800 font-semibold">Penempatan Kerja</div>
                                <div className="text-blue-600 text-sm mt-1">Berhasil ditempatkan</div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 text-center border border-purple-200">
                                <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                                <div className="text-purple-800 font-semibold">Tingkat Serapan</div>
                                <div className="text-purple-600 text-sm mt-1">Lulusan pelatihan</div>
                            </div>
                            <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-6 text-center border border-orange-200">
                                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                                <div className="text-orange-800 font-semibold">Perusahaan Mitra</div>
                                <div className="text-orange-600 text-sm mt-1">Berkolaborasi</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Kontak */}
                <section className="py-16 bg-[#f9fafb]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#355485] mb-4">Kontak Kami</h2>
                            <p className="text-lg text-[#6b7280]">Hubungi DISNAKER Paser untuk informasi lebih lanjut</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-2xl p-6 text-center border border-[#e5e7eb] shadow-sm">
                                <div className="w-12 h-12 bg-[#355485] text-white rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                                    📍
                                </div>
                                <h3 className="text-lg font-semibold text-[#355485] mb-2">Alamat</h3>
                                <p className="text-[#6b7280]">
                                    Jl. Jenderal Sudirman No. 123<br />
                                    Tanah Grogot<br />
                                    Kabupaten Paser, Kalimantan Timur
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 text-center border border-[#e5e7eb] shadow-sm">
                                <div className="w-12 h-12 bg-[#355485] text-white rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                                    📞
                                </div>
                                <h3 className="text-lg font-semibold text-[#355485] mb-2">Telepon</h3>
                                <p className="text-[#6b7280]">
                                    (0543) 12345<br />
                                    (0543) 12346<br />
                                    Senin - Jumat, 08:00 - 16:00 WITA
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 text-center border border-[#e5e7eb] shadow-sm">
                                <div className="w-12 h-12 bg-[#355485] text-white rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                                    📧
                                </div>
                                <h3 className="text-lg font-semibold text-[#355485] mb-2">Email & Media</h3>
                                <p className="text-[#6b7280]">
                                    disnaker@paserkab.go.id<br />
                                    www.disnaker.paserkab.go.id<br />
                                    @disnakerpaser
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}