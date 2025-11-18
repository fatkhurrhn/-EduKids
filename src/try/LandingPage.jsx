import React from 'react';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#f9fafb]">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-[#4f90c6] rounded-full flex items-center justify-center">
                                <i className="ri-book-2-fill text-white text-lg"></i>
                            </div>
                            <span className="text-xl font-bold text-[#355485]">EduKids TK Az-Zahra</span>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <a href="#features" className="text-[#6b7280] hover:text-[#355485] transition-colors">Fitur</a>
                            <a href="#about" className="text-[#6b7280] hover:text-[#355485] transition-colors">Tentang</a>
                            <a href="#download" className="text-[#6b7280] hover:text-[#355485] transition-colors">Download</a>
                            <a href="#guide" className="text-[#6b7280] hover:text-[#355485] transition-colors">Panduan</a>
                        </nav>

                        <button className="bg-[#4f90c6] text-white px-6 py-2 rounded-lg hover:bg-[#355485] transition-colors flex items-center">
                            <span>Mulai Belajar</span>
                            <i className="ri-arrow-right-s-line ml-1"></i>
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#355485] to-[#4f90c6] text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center bg-[#2a436c] px-4 py-2 rounded-full mb-6">
                                <i className="ri-home-heart-fill mr-2"></i>
                                <span className="text-sm">Media Pembelajaran TK Az-Zahra</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Belajar Literasi & Numerasi yang Menyenangkan
                            </h1>
                            <p className="text-[#cbdde9] text-lg mb-8 leading-relaxed">
                                Aplikasi pembelajaran yang dirancang khusus untuk membantu anak usia dini belajar di rumah.
                                <span className="block mt-2">
                                    Fokus pada <strong>materi literasi dan numerasi</strong> yang terintegrasi dengan pembelajaran di TK Az-Zahra.
                                    Dengan bimbingan guru, orang tua dapat mendampingi anak belajar membaca, mengenal angka,
                                    serta melakukan latihan berhitung sederhana dengan cara yang menyenangkan dan interaktif.
                                </span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-white text-[#355485] px-8 py-4 rounded-lg font-semibold hover:bg-[#cbdde9] transition-colors flex items-center justify-center">
                                    <i className="ri-download-line mr-3"></i>
                                    <span>Download Aplikasi</span>
                                </button>
                                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#355485] transition-colors flex items-center justify-center">
                                    <i className="ri-play-circle-line mr-3"></i>
                                    <span>Lihat Demo</span>
                                </button>
                            </div>

                            <div className="mt-8 flex items-center space-x-6 text-sm">
                                <div className="flex items-center space-x-2">
                                    <i className="ri-checkbox-circle-fill text-[#90b6d5]"></i>
                                    <span>Terintegrasi dengan Kurikulum TK</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="ri-checkbox-circle-fill text-[#90b6d5]"></i>
                                    <span>Bimbingan Guru & Orang Tua</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-80 h-80 bg-[#90b6d5] rounded-3xl flex items-center justify-center shadow-2xl">
                                    <div className="bg-white w-64 h-96 rounded-2xl shadow-lg p-4">
                                        <div className="bg-[#f9fafb] h-full rounded-lg border-2 border-[#e5e7eb] flex flex-col items-center justify-center p-6">
                                            <i className="ri-book-open-fill text-4xl text-[#4f90c6] mb-4"></i>
                                            <h3 className="text-[#355485] font-bold text-lg text-center">TK Az-Zahra</h3>
                                            <p className="text-[#6b7280] text-sm text-center mt-2">Media Pembelajaran</p>
                                            <div className="mt-6 grid grid-cols-2 gap-3">
                                                <div className="bg-[#cbdde9] rounded-lg p-3 text-center">
                                                    <i className="ri-abc text-[#355485] text-xl"></i>
                                                    <p className="text-[#2a436c] text-xs mt-1">Literasi</p>
                                                </div>
                                                <div className="bg-[#cbdde9] rounded-lg p-3 text-center">
                                                    <i className="ri-number-1 text-[#355485] text-xl"></i>
                                                    <p className="text-[#2a436c] text-xs mt-1">Numerasi</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 bg-[#4f90c6] p-4 rounded-2xl shadow-lg">
                                    <i className="ri-teacher-fill text-2xl"></i>
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-[#2a436c] p-4 rounded-2xl shadow-lg">
                                    <i className="ri-parent-fill text-2xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Section */}
            <section className="py-12 bg-white border-b border-[#e5e7eb]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <p className="text-[#6b7280] text-sm uppercase tracking-wider">Bekerjasama dengan</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
                        <div className="flex items-center space-x-3 bg-[#f9fafb] px-6 py-3 rounded-2xl border border-[#e5e7eb]">
                            <div className="w-10 h-10 bg-[#4f90c6] rounded-full flex items-center justify-center">
                                <i className="ri-building-2-fill text-white"></i>
                            </div>
                            <div>
                                <div className="font-semibold text-[#355485]">TK Az-Zahra</div>
                                <div className="text-[#9ca3af] text-sm">Lembaga Pendidikan</div>
                            </div>
                        </div>
                        <div className="text-[#6b7280] text-sm">+</div>
                        <div className="flex items-center space-x-3 bg-[#f9fafb] px-6 py-3 rounded-2xl border border-[#e5e7eb]">
                            <div className="w-10 h-10 bg-[#4f90c6] rounded-full flex items-center justify-center">
                                <i className="ri-team-fill text-white"></i>
                            </div>
                            <div>
                                <div className="font-semibold text-[#355485]">Orang Tua</div>
                                <div className="text-[#9ca3af] text-sm">Pendamping Belajar</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-[#f9fafb]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#355485] mb-4">
                            Fokus Pembelajaran
                        </h2>
                        <p className="text-[#6b7280] max-w-2xl mx-auto">
                            Materi yang disusun khusus untuk mendukung perkembangan literasi dan numerasi anak usia dini
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-4">
                                <div className="w-16 h-16 bg-[#4f90c6] rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <i className="ri-abc text-2xl text-white"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#355485] mb-4">Pembelajaran Literasi</h3>
                                    <p className="text-[#6b7280] mb-4">
                                        Mengenal huruf, membaca kata sederhana, dan mengembangkan kemampuan bahasa melalui metode yang menyenangkan.
                                    </p>
                                    <ul className="space-y-2 text-[#6b7280]">
                                        <li className="flex items-center space-x-2">
                                            <i className="ri-check-line text-[#4f90c6]"></i>
                                            <span>Pengenalan huruf A-Z</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <i className="ri-check-line text-[#4f90c6]"></i>
                                            <span>Membaca kata sederhana</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <i className="ri-check-line text-[#4f90c6]"></i>
                                            <span>Kosakata baru</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-4">
                                <div className="w-16 h-16 bg-[#4f90c6] rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <i className="ri-number-1 text-2xl text-white"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#355485] mb-4">Pembelajaran Numerasi</h3>
                                    <p className="text-[#6b7280] mb-4">
                                        Mengenal angka, berhitung sederhana, dan memahami konsep matematika dasar melalui permainan interaktif.
                                    </p>
                                    <ul className="space-y-2 text-[#6b7280]">
                                        <li className="flex items-center space-x-2">
                                            <i className="ri-check-line text-[#4f90c6]"></i>
                                            <span>Pengenalan angka 1-20</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <i className="ri-check-line text-[#4f90c6]"></i>
                                            <span>Berhitung sederhana</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <i className="ri-check-line text-[#4f90c6]"></i>
                                            <span>Konsep penjumlahan & pengurangan</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Features */}
                    <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#90b6d5] rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="ri-user-voice-fill text-2xl text-[#2a436c]"></i>
                            </div>
                            <h4 className="font-semibold text-[#355485] mb-3">Interaktif & Menyenangkan</h4>
                            <p className="text-[#6b7280] text-sm">Belajar melalui permainan dan aktivitas yang engaging</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#90b6d5] rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="ri-progress-3-fill text-2xl text-[#2a436c]"></i>
                            </div>
                            <h4 className="font-semibold text-[#355485] mb-3">Terintegrasi Kurikulum</h4>
                            <p className="text-[#6b7280] text-sm">Materi sesuai dengan pembelajaran di TK Az-Zahra</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#90b6d5] rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="ri-line-chart-fill text-2xl text-[#2a436c]"></i>
                            </div>
                            <h4 className="font-semibold text-[#355485] mb-3">Pantau Perkembangan</h4>
                            <p className="text-[#6b7280] text-sm">Orang tua dapat melihat progress belajar anak</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="guide" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#355485] mb-4">
                            Cara Menggunakan Aplikasi
                        </h2>
                        <p className="text-[#6b7280] max-w-2xl mx-auto">
                            Kolaborasi antara guru, orang tua, dan anak dalam proses pembelajaran
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-[#355485] to-[#4f90c6] rounded-full flex items-center justify-center mx-auto mb-6 relative">
                                <i className="ri-teacher-fill text-3xl text-white"></i>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#4f90c6] rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">1</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-[#355485] mb-4">Bimbingan Guru</h3>
                            <p className="text-[#6b7280]">
                                Guru memberikan materi dan panduan pembelajaran yang terstruktur sesuai kurikulum TK Az-Zahra
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-[#355485] to-[#4f90c6] rounded-full flex items-center justify-center mx-auto mb-6 relative">
                                <i className="ri-parent-fill text-3xl text-white"></i>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#4f90c6] rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">2</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-[#355485] mb-4">Pendampingan Orang Tua</h3>
                            <p className="text-[#6b7280]">
                                Orang tua mendampingi anak menggunakan aplikasi di rumah dengan arahan dari guru
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-[#355485] to-[#4f90c6] rounded-full flex items-center justify-center mx-auto mb-6 relative">
                                <i className="ri-child-fill text-3xl text-white"></i>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#4f90c6] rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">3</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-[#355485] mb-4">Belajar Interaktif</h3>
                            <p className="text-[#6b7280]">
                                Anak belajar literasi dan numerasi melalui aktivitas yang menyenangkan dan edukatif
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section id="download" className="py-20 bg-gradient-to-br from-[#90b6d5] to-[#cbdde9]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2a436c] mb-6">
                            Download Aplikasi Sekarang
                        </h2>
                        <p className="text-[#355485] text-lg mb-8 max-w-2xl mx-auto">
                            Mulai petualangan belajar yang menyenangkan bersama anak Anda. Install aplikasi sekarang!
                        </p>

                        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
                            <div className="w-20 h-20 bg-[#4f90c6] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <i className="ri-smartphone-fill text-3xl text-white"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[#355485] mb-4">EduKids TK Az-Zahra</h3>
                            <p className="text-[#6b7280] mb-6">Versi 1.0.0 • Kompatibel dengan Android 8.0+</p>

                            <div className="space-y-4">
                                <button className="w-full bg-[#4f90c6] text-white py-4 rounded-lg font-semibold hover:bg-[#355485] transition-colors flex items-center justify-center">
                                    <i className="ri-download-2-fill mr-3"></i>
                                    Download APK (25MB)
                                </button>

                                <button className="w-full border-2 border-[#e5e7eb] text-[#6b7280] py-4 rounded-lg font-semibold hover:border-[#4f90c6] hover:text-[#355485] transition-colors flex items-center justify-center">
                                    <i className="ri-information-line mr-3"></i>
                                    Panduan Install
                                </button>
                            </div>

                            <div className="mt-6 p-4 bg-[#f9fafb] rounded-lg">
                                <div className="flex items-center justify-center space-x-4 text-sm text-[#9ca3af]">
                                    <div className="flex items-center space-x-1">
                                        <i className="ri-shield-check-line"></i>
                                        <span>Aman & Terpercaya</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <i className="ri-wifi-off-line"></i>
                                        <span>Bisa Offline</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#2a436c] text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-[#4f90c6] rounded-full flex items-center justify-center">
                                    <i className="ri-book-2-fill text-white"></i>
                                </div>
                                <span className="text-xl font-bold">EduKids</span>
                            </div>
                            <p className="text-[#90b6d5] text-sm">
                                Media pembelajaran interaktif untuk TK Az-Zahra, fokus pada pengembangan literasi dan numerasi anak usia dini.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
                            <ul className="space-y-2 text-[#90b6d5]">
                                <li><a href="#" className="hover:text-white transition-colors">Tentang Aplikasi</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Panduan Orang Tua</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Kurikulum</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Bantuan</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Kontak</h4>
                            <ul className="space-y-2 text-[#90b6d5]">
                                <li className="flex items-center space-x-2">
                                    <i className="ri-map-pin-line"></i>
                                    <span>TK Az-Zahra</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <i className="ri-phone-line"></i>
                                    <span>+62 812 3456 7890</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <i className="ri-mail-line"></i>
                                    <span>info@tkazzahra.sch.id</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Download</h4>
                            <button className="w-full bg-[#4f90c6] text-white py-3 rounded-lg font-semibold hover:bg-[#355485] transition-colors flex items-center justify-center mb-3">
                                <i className="ri-download-line mr-2"></i>
                                Download APK
                            </button>
                            <p className="text-[#90b6d5] text-xs text-center">
                                Untuk perangkat Android
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-[#355485] mt-8 pt-8 text-center text-[#90b6d5] text-sm">
                        <p>&copy; 2024 EduKids TK Az-Zahra. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}