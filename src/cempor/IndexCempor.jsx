import React, { useEffect, useState } from 'react';
import NavbarCempor from '../components/cempor/Navbar';
import FooterCempor from '../components/cempor/Footer';

const IndexCempor = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);

            // Animasi scroll reveal
            const elements = document.querySelectorAll('.reveal');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 100) {
                    element.classList.add('show');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        // Auto slide untuk testimonial
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 5000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

   

    // Data Angka
    const angkaData = [
        { number: "500+", label: "Wirausaha Terbina", suffix: "pemuda", icon: "ri-user-5-line" },
        { number: "85%", label: "Tingkat Kesuksesan", suffix: "peningkatan usaha", icon: "ri-line-chart-line" },
        { number: "150+", label: "UMKM Terbentuk", suffix: "dengan legalitas", icon: "ri-store-2-line" },
        { number: "5K+", label: "Komunitas", suffix: "anggota aktif", icon: "ri-group-line" }
    ];

    // Area Fokus
    const focusAreas = [
        {
            title: "Bisnis Digital",
            icon: "ri-smartphone-line",
            desc: "E-commerce, digital marketing, social media management",
            count: "200+ peserta"
        },
        {
            title: "Agribisnis",
            icon: "ri-leaf-line",
            desc: "Pengolahan hasil pertanian & perkebunan lokal Kalteng",
            count: "150+ peserta"
        },
        {
            title: "Kerajinan",
            icon: "ri-palette-line",
            desc: "Rotan, kayu, dan tenun khas Kalimantan Tengah",
            count: "120+ peserta"
        },
        {
            title: "Kuliner",
            icon: "ri-restaurant-line",
            desc: "Olahan makanan khas dengan sentuhan modern",
            count: "80+ peserta"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <NavbarCempor />

            {/* Hero Section - Full Screen */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#2a436c] to-[#355485]">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white/5"
                            style={{
                                width: `${Math.random() * 200 + 50}px`,
                                height: `${Math.random() * 200 + 50}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </div>

                {/* Floating Islands */}
                <div className="absolute bottom-0 left-0 right-0 h-64">
                    <div className="absolute bottom-0 left-1/4 w-64 h-32 bg-gradient-to-t from-emerald-900/30 to-transparent rounded-t-full blur-xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-48 h-24 bg-gradient-to-t from-amber-900/30 to-transparent rounded-t-full blur-xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 bg-[#ff6b6b] rounded-full animate-pulse"></div>
                                <span className="text-white/90 text-sm font-medium">Batch #41 • Pendaftaran Dibuka</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                <span className="block">Wujudkan</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4f90c6] to-[#90b6d5]">
                                    Impian Bisnis
                                </span>
                                <span className="block">di Tanah Borneo</span>
                            </h1>

                            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                                Program pembinaan wirausaha pemuda terpadu dengan pendampingan 360°
                                dari nol hingga sukses, khusus untuk putra-putri Kalimantan Tengah.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="/pendaftaran"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] text-white rounded-xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        Daftar Sekarang Gratis
                                        <i className="ri-arrow-right-line group-hover:translate-x-2 transition-transform"></i>
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff8e8e] to-[#ff6b6b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>

                                <a
                                    href="#program"
                                    className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                                >
                                    <span className="flex items-center gap-3">
                                        <i className="ri-play-circle-line"></i>
                                        Jelajahi Program
                                    </span>
                                </a>
                            </div>

                            <div className="flex items-center gap-6 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        {[...Array(3)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-cyan-500 to-blue-600"
                                            ></div>
                                        ))}
                                    </div>
                                    <div className="text-white/70">
                                        <div className="font-bold">500+</div>
                                        <div className="text-sm">Alumni</div>
                                    </div>
                                </div>

                                <div className="h-8 w-px bg-white/30"></div>

                                <div className="text-white/70">
                                    <div className="flex items-center gap-2">
                                        <i className="ri-star-fill text-yellow-400"></i>
                                        <i className="ri-star-fill text-yellow-400"></i>
                                        <i className="ri-star-fill text-yellow-400"></i>
                                        <i className="ri-star-fill text-yellow-400"></i>
                                        <i className="ri-star-half-fill text-yellow-400"></i>
                                    </div>
                                    <div className="text-sm mt-1">4.8/5 Rating</div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Visual */}
                        <div className="relative">
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
                                {/* Floating Cards */}
                                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-[#e5e7eb] animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#2a436c] to-[#4f90c6] rounded-xl flex items-center justify-center">
                                            <i className="ri-award-line text-white text-2xl"></i>
                                        </div>
                                        <div>
                                            <div className="font-bold text-[#2a436c]">Program Unggulan</div>
                                            <div className="text-sm text-[#6b7280]">Dispora Kalteng</div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-[#e5e7eb] animate-float" style={{ animationDelay: '1s' }}>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-[#2a436c]">100%</div>
                                        <div className="text-sm text-[#6b7280]">Gratis Program</div>
                                    </div>
                                </div> */}

                                {/* Main Visual */}
                                <div className="relative h-96 bg-gradient-to-br from-[#4f90c6]/20 to-[#90b6d5]/20 rounded-2xl overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#2a436c] to-[#4f90c6] rounded-full flex items-center justify-center mb-6">
                                                <i className="ri-rocket-2-line text-white text-5xl"></i>
                                            </div>
                                            <div className="text-white text-xl font-bold">CEMPOR KALTENG</div>
                                            <div className="text-white/70">Launch Your Business</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Stats */}
                                <div className="grid grid-cols-3 gap-4 mt-6">
                                    {[
                                        { value: "24/7", label: "Support" },
                                        { value: "1-on-1", label: "Mentor" },
                                        { value: "6 Bulan", label: "Pendampingan" }
                                    ].map((stat, idx) => (
                                        <div key={idx} className="text-center p-3 bg-white/5 rounded-xl">
                                            <div className="text-white font-bold">{stat.value}</div>
                                            <div className="text-white/60 text-sm">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Angka Penting */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2a436c] mb-6">
                            Membangun <span className="text-[#4f90c6]">Ekonomi</span> Kalteng
                        </h2>
                        <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
                            Kontribusi nyata dalam mengembangkan wirausaha muda Kalimantan Tengah
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {angkaData.map((item, index) => (
                            <div
                                key={index}
                                className="reveal"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="text-center p-8 bg-gradient-to-b from-white to-[#f9fafb] rounded-2xl border border-[#e5e7eb] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.icon === 'ri-user-5-line' ? 'from-blue-500 to-cyan-500' : item.icon === 'ri-line-chart-line' ? 'from-emerald-500 to-teal-500' : item.icon === 'ri-store-2-line' ? 'from-purple-500 to-pink-500' : 'from-amber-500 to-orange-500'} text-white text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="text-5xl font-bold text-[#2a436c] mb-2">{item.number}</div>
                                    <div className="text-lg font-semibold text-[#4f90c6] mb-2">{item.label}</div>
                                    <div className="text-[#6b7280] text-sm">{item.suffix}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Highlight - Timeline */}
            <section className="py-0 bg-[#f9fafb]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 reveal">
                        <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#4f90c6] px-6 py-3 rounded-full text-sm font-semibold mb-4 border border-[#cbdde9]">
                            <i className="ri-road-map-line"></i>
                            JALUR PEMBINAAN
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2a436c] mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f90c6] to-[#90b6d5]">3 Tahapan</span> Menuju Wirausaha Sukses
                        </h2>
                        <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
                            Program terstruktur selama 6 bulan dengan pendampingan komprehensif dari mentor berpengalaman
                        </p>
                    </div>

                    {/* Modern Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden lg:block absolute left-0 right-0 top-24 h-0.5 bg-gradient-to-r from-[#4f90c6] via-[#90b6d5] to-[#4f90c6] opacity-30"></div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {[
                                {
                                    phase: "Tahap 1",
                                    title: "Pelatihan Intensif",
                                    duration: "2 Minggu",
                                    description: "Bootcamp full-day dengan materi fundamental bisnis, digital marketing, dan manajemen keuangan UMKM",
                                    features: ["Workshop Praktis", "Studi Kasus Real", "Networking", "Mentor Berpengalaman"],
                                    icon: "ri-book-open-line",
                                    color: "from-[#4f90c6] to-[#90b6d5]",
                                    accent: "#4f90c6",
                                    number: "01"
                                },
                                {
                                    phase: "Tahap 2",
                                    title: "Pendampingan Langsung",
                                    duration: "3 Bulan",
                                    description: "One-on-one mentoring untuk penerapan langsung ke bisnis dengan evaluasi berkala",
                                    features: ["Mentor Dedicated", "Progress Review", "Problem Solving", "Market Validation"],
                                    icon: "ri-user-star-line",
                                    color: "from-[#355485] to-[#4f90c6]",
                                    accent: "#355485",
                                    number: "02"
                                },
                                {
                                    phase: "Tahap 3",
                                    title: "Inkubasi & Akses Modal",
                                    duration: "6 Bulan",
                                    description: "Dukungan akses permodalan, ekspansi pasar, dan pendampingan lanjutan untuk scaling bisnis",
                                    features: ["Akses Investor", "Legalitas Usaha", "Ekspansi Pasar", "Brand Development"],
                                    icon: "ri-rocket-line",
                                    color: "from-[#2a436c] to-[#355485]",
                                    accent: "#2a436c",
                                    number: "03"
                                }
                            ].map((program, index) => (
                                <div
                                    key={index}
                                    className="relative group reveal"
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    {/* Card */}
                                    <div className="relative bg-white rounded-2xl border border-[#e5e7eb] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full group-hover:border-[#cbdde9]">
                                        {/* Top Decorative Bar */}
                                        <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>

                                        {/* Card Content */}
                                        <div className="p-8">
                                            {/* Phase Number */}
                                            <div className="absolute top-4 right-4">
                                                <div className="text-5xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                                                    {program.number}
                                                </div>
                                            </div>

                                            {/* Icon */}
                                            <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${program.color} text-white mb-6`}>
                                                <i className={`${program.icon} text-2xl`}></i>
                                            </div>

                                            {/* Phase Label */}
                                            <div className="inline-block px-4 py-2 bg-[#f0f7ff] text-[#4f90c6] rounded-lg text-sm font-semibold mb-4 border border-[#cbdde9]">
                                                {program.phase}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-2xl font-bold text-[#2a436c] mb-4">{program.title}</h3>

                                            {/* Duration */}
                                            <div className="flex items-center gap-2 text-[#6b7280] mb-6">
                                                <i className="ri-time-line"></i>
                                                <span className="font-medium">{program.duration} Program</span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-[#6b7280] leading-relaxed mb-8">
                                                {program.description}
                                            </p>

                                            {/* Features */}
                                            <div className="space-y-3 mb-8">
                                                {program.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <div className={`w-6 h-6 bg-gradient-to-br ${program.color} text-white rounded-md flex items-center justify-center flex-shrink-0`}>
                                                            <i className="ri-check-line text-sm"></i>
                                                        </div>
                                                        <span className="text-[#6b7280] font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="pt-6 border-t border-[#e5e7eb]">
                                                <div className="flex items-center justify-between text-sm text-[#6b7280] mb-2">
                                                    <span>Durasi Program</span>
                                                    <span className="font-semibold text-[#2a436c]">{program.duration}</span>
                                                </div>
                                                <div className="h-2 bg-[#e5e7eb] rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full bg-gradient-to-r ${program.color} rounded-full transition-all duration-1000`}
                                                        style={{
                                                            width: program.duration === '2 Minggu' ? '20%' :
                                                                program.duration === '3 Bulan' ? '50%' : '100%'
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connecting Dots for Desktop */}
                                    {index < 2 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                                            <div className="w-8 h-8 bg-white border-2 border-[#4f90c6] rounded-full flex items-center justify-center">
                                                <i className="ri-arrow-right-line text-[#4f90c6]"></i>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-20 reveal">
                        <div className="bg-gradient-to-br from-[#f0f7ff] to-white rounded-3xl p-8 md:p-12 border border-[#cbdde9]">
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-bold text-[#2a436c] mb-4">
                                    Program <span className="text-[#4f90c6]">Terbukti Efektif</span>
                                </h3>
                                <p className="text-[#6b7280] max-w-2xl mx-auto">
                                    Didukung oleh data dan hasil nyata dari alumni program sebelumnya
                                </p>
                            </div>

                            <div className="grid md:grid-cols-4 gap-6">
                                <div className="bg-white p-6 rounded-xl border border-[#e5e7eb] shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-4xl font-bold text-[#4f90c6] mb-2">95%</div>
                                    <p className="text-[#6b7280]">Kepuasan Peserta</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-[#e5e7eb] shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-4xl font-bold text-[#4f90c6] mb-2">80%</div>
                                    <p className="text-[#6b7280]">Peningkatan Revenue</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-[#e5e7eb] shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-4xl font-bold text-[#4f90c6] mb-2">150+</div>
                                    <p className="text-[#6b7280]">UMKM Terbina</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-[#e5e7eb] shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-4xl font-bold text-[#4f90c6] mb-2">6+</div>
                                    <p className="text-[#6b7280]">Bulan Program</p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-12 text-center">
                                <a
                                    href="/program/detail"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#355485] to-[#4f90c6] text-white rounded-xl font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
                                >
                                    <i className="ri-file-list-line"></i>
                                    Lihat Detail Program Lengkap
                                    <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                                </a>
                                <p className="text-[#9ca3af] text-sm mt-4">
                                    Dapatkan konsultasi gratis dengan tim kami
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* UMKM Binaan */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-end mb-12 reveal">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#2a436c] mb-4">
                                UMKM <span className="text-[#4f90c6]">Binaan</span> Kami
                            </h2>
                            <p className="text-xl text-[#6b7280]">Kisah sukses putra-putri Kalimantan Tengah</p>
                        </div>
                        <a
                            href="/alumni"
                            className="hidden md:flex items-center gap-2 text-[#4f90c6] font-semibold hover:gap-3 transition-all group"
                        >
                            Lihat Semua UMKM
                            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                name: "Kerajinan Rotan Sampit",
                                category: "Handicraft",
                                owner: "Budi Santoso",
                                achievement: "Ekspor ke Malaysia",
                                image: "https://cdn.rri.co.id/berita/Ranai/o/1732631971684-IMG-20241124-WA0010/p8705yvi0fndev1.jpeg",
                                color: "from-emerald-500 to-green-600",
                                batch: "Batch #38",
                                location: "Sampit"
                            },
                            {
                                name: "Kopi Kalteng Organik",
                                category: "Food & Beverage",
                                owner: "Sari Dewi",
                                achievement: "Omzet +300%",
                                image: "https://www.aeki-aice.org/wp-content/uploads/2024/12/Kopi-Organik-adalah-kopi-yang-sehat.jpg",
                                color: "from-amber-600 to-orange-600",
                                batch: "Batch #39",
                                location: "Palangka Raya"
                            },
                            {
                                name: "Madu Hutan Kalimantan",
                                category: "Natural Product",
                                owner: "Ahmad Rizki",
                                achievement: "Marketplace Nasional",
                                image: "https://cdn.digitaldesa.com/uploads/marketplace/products/07c98eb55ad184dcee3d3865a107e1dd.jpg",
                                color: "from-yellow-500 to-amber-600",
                                batch: "Batch #40",
                                location: "Kotawaringin Timur"
                            },
                            {
                                name: "Tenun Dayak Modern",
                                category: "Fashion",
                                owner: "Diana Wati",
                                achievement: "Kolaborasi Brand Nasional",
                                image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/124/2024/12/30/tenun-1473036202.jpg",
                                color: "from-purple-500 to-pink-600",
                                batch: "Batch #37",
                                location: "Katingan"
                            }
                        ].map((umkm, index) => (
                            <div
                                key={index}
                                className="reveal"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="group bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={umkm.image}
                                            alt={umkm.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.parentElement.innerHTML = `
                    <div class="w-full h-full ${umkm.color} flex items-center justify-center">
                      <i class="ri-image-line text-white text-4xl"></i>
                    </div>
                  `;
                                            }}
                                        />
                                        {/* Category Badge */}
                                        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                                            {umkm.category}
                                        </div>
                                        {/* Location Badge */}
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#2a436c] text-xs px-3 py-1 rounded-full flex items-center gap-1">
                                            <i className="ri-map-pin-line text-xs"></i>
                                            {umkm.location}
                                        </div>
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex-1">
                                                <h4 className="font-bold text-[#2a436c] text-lg mb-2 line-clamp-1">{umkm.name}</h4>
                                                <div className="flex items-center gap-2 text-sm text-[#6b7280] mb-3">
                                                    <i className="ri-user-line"></i>
                                                    <span>{umkm.owner}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs text-[#6b7280]">Angkatan</div>
                                                <div className="font-semibold text-[#4f90c6] text-sm">{umkm.batch}</div>
                                            </div>
                                        </div>

                                        {/* Achievement */}
                                        <div className="flex items-center gap-2 text-emerald-600 font-medium mb-4 p-3 bg-emerald-50 rounded-lg">
                                            <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center">
                                                <i className="ri-trophy-line text-sm"></i>
                                            </div>
                                            <span className="text-sm font-semibold">{umkm.achievement}</span>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {umkm.category === "Handicraft" && ["Rotan", "Kerajinan", "Ekspor", "Lokal"].map((tag, i) => (
                                                <span key={i} className="text-xs bg-[#f9fafb] border border-[#e5e7eb] px-2 py-1 rounded text-[#6b7280]">
                                                    {tag}
                                                </span>
                                            ))}
                                            {umkm.category === "Food & Beverage" && ["Kopi", "Organik", "Premium", "Kalteng"].map((tag, i) => (
                                                <span key={i} className="text-xs bg-[#f9fafb] border border-[#e5e7eb] px-2 py-1 rounded text-[#6b7280]">
                                                    {tag}
                                                </span>
                                            ))}
                                            {umkm.category === "Natural Product" && ["Madu", "Hutan", "Alami", "Sehat"].map((tag, i) => (
                                                <span key={i} className="text-xs bg-[#f9fafb] border border-[#e5e7eb] px-2 py-1 rounded text-[#6b7280]">
                                                    {tag}
                                                </span>
                                            ))}
                                            {umkm.category === "Fashion" && ["Tenun", "Dayak", "Modern", "Etnik"].map((tag, i) => (
                                                <span key={i} className="text-xs bg-[#f9fafb] border border-[#e5e7eb] px-2 py-1 rounded text-[#6b7280]">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* View Details */}
                                        <div className="pt-4 border-t border-[#e5e7eb]">
                                            <a
                                                href={`/umkm/${umkm.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="flex items-center justify-between text-sm text-[#4f90c6] font-medium group/link"
                                            >
                                                <span>Lihat Detail Usaha</span>
                                                <i className="ri-arrow-right-line group-hover/link:translate-x-1 transition-transform"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile View All Button */}
                    <div className="mt-10 text-center md:hidden reveal">
                        <a
                            href="/alumni"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white rounded-lg font-semibold hover:shadow-lg transition-all group"
                        >
                            Lihat Semua UMKM
                            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* Area Fokus */}
            <section className="py-10 bg-gradient-to-b from-white to-[#f9fafb]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2a436c] mb-6">
                            Fokus Pada <span className="text-[#4f90c6]">Potensi Lokal</span>
                        </h2>
                        <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
                            Mengembangkan bisnis berbasis kekayaan alam dan budaya Kalimantan Tengah
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {focusAreas.map((area, index) => (
                            <div
                                key={index}
                                className="reveal"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="group relative h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#2a436c] to-[#4f90c6] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                                    <div className="relative bg-white p-8 rounded-2xl border border-[#e5e7eb] h-full group-hover:border-[#90b6d5] transition-all duration-300">
                                        <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#4f90c6] to-[#90b6d5] text-white text-2xl mb-6 group-hover:rotate-12 transition-transform">
                                            <i className={area.icon}></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#2a436c] mb-4">{area.title}</h3>
                                        <p className="text-[#6b7280] mb-6">{area.desc}</p>
                                        <div className="mt-auto pt-4 border-t border-[#e5e7eb]">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-[#4f90c6]">{area.count}</span>
                                                <i className="ri-arrow-right-line text-[#6b7280] group-hover:text-[#4f90c6] group-hover:translate-x-1 transition-all"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Terakhir */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2a436c] to-[#4f90c6]"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                        <i className="ri-time-line text-white"></i>
                        <span className="text-white font-medium">Pendaftaran Batch #41 ditutup 30 November 2025</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Siap Mengubah Nasib <span className="text-[#cbdde9]">Ekonomi Keluarga?</span>
                    </h2>

                    <p className="text-xl text-white/90 mb-10">
                        Bergabung dengan CEMPOR KALTENG adalah langkah pertama menuju kemandirian finansial
                        dan kontribusi nyata bagi pembangunan Kalimantan Tengah
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/pendaftaran"
                            className="group relative px-10 py-4 bg-white text-[#2a436c] rounded-xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                <i className="ri-rocket-2-line"></i>
                                Daftar Sekarang
                                <i className="ri-arrow-right-line group-hover:translate-x-2 transition-transform"></i>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#cbdde9] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>

                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-10 py-4 bg-emerald-500 text-white rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <span className="flex items-center gap-3">
                                <i className="ri-whatsapp-line"></i>
                                Chat Admin
                            </span>
                        </a>
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/70">
                        <div className="flex items-center gap-2">
                            <i className="ri-checkbox-circle-line"></i>
                            <span>Gratis 100%</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="ri-checkbox-circle-line"></i>
                            <span>Sertifikat Resmi</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="ri-checkbox-circle-line"></i>
                            <span>Akses Selamanya</span>
                        </div>
                    </div>
                </div>
            </section>

            <FooterCempor />

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }
        
        .md\\:pr-1\\/2 {
          padding-right: 50%;
        }
        
        .md\\:pl-1\\/2 {
          padding-left: 50%;
        }
      `}</style>
        </div>
    );
};

export default IndexCempor;