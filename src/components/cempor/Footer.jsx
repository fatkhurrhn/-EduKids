import React from 'react';
import { Link } from 'react-router-dom';

const FooterCempor = () => {
    const quickLinks = [
        {
            title: 'Program',
            links: [
                { name: 'Modul Pelatihan', path: '/program/modul' },
                { name: 'Jadwal Kelas', path: '/program/jadwal' },
                { name: 'Tingkatan', path: '/program/tingkatan' },
                { name: 'Mentor', path: '/program/mentor' },
            ]
        },
        {
            title: 'Dukungan',
            links: [
                { name: 'Pusat Bantuan', path: '/bantuan' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Kontak Kami', path: '/kontak' },
                { name: 'Lokasi', path: '/lokasi' },
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Syarat & Ketentuan', path: '/syarat-ketentuan' },
                { name: 'Kebijakan Privasi', path: '/privasi' },
                { name: 'Disclaimer', path: '/disclaimer' },
                { name: 'SK Program', path: '/sk-program' },
            ]
        },
        {
            title: 'Kontak',
            links: [
                { name: '(0511) 1234-5678', path: 'tel:051112345678', icon: 'ri-phone-line' },
                { name: 'cempor@kalteng.go.id', path: 'mailto:cempor@kalteng.go.id', icon: 'ri-mail-line' },
                { name: 'Palangka Raya', path: '/lokasi', icon: 'ri-map-pin-line' },
                { name: 'WhatsApp', path: 'https://wa.me/6281234567890', icon: 'ri-whatsapp-line' },
            ]
        },
    ];

    const socialMedia = [
        { icon: 'ri-facebook-fill', name: 'Facebook', color: '#1877F2' },
        { icon: 'ri-instagram-line', name: 'Instagram', color: '#E4405F' },
        { icon: 'ri-youtube-line', name: 'YouTube', color: '#FF0000' },
        { icon: 'ri-linkedin-fill', name: 'LinkedIn', color: '#0A66C2' },
        { icon: 'ri-tiktok-line', name: 'TikTok', color: '#000000' },
    ];

    const mitraStrategis = [
        { name: 'Dispora Kalteng', logo: 'ri-government-line' },
        { name: 'Dinas Koperasi', logo: 'ri-building-line' },
        { name: 'Universitas Palangka Raya', logo: 'ri-graduation-cap-line' },
        { name: 'Bank Kalteng', logo: 'ri-bank-line' },
    ];

    return (
        <footer className="bg-white border-t border-[#e5e7eb]">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Brand & Description */}
                    <div>
                        <div className="flex items-start gap-4 mb-6">
                            <div className="relative">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#2a436c] to-[#4f90c6] rounded-xl flex items-center justify-center">
                                    <i className="ri-rocket-2-line text-white text-2xl"></i>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#cbdde9] rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-[#2a436c] mb-1">CEMPOR</h2>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold bg-gradient-to-r from-[#4f90c6] to-[#90b6d5] text-white px-2 py-0.5 rounded-full">
                                        KALTENG
                                    </span>
                                    <span className="text-sm text-[#6b7280] font-medium">
                                        Pusat Pembinaan Wirausaha Pemuda
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-[#6b7280] mb-8 leading-relaxed">
                            Komitmen kami dalam mengembangkan potensi wirausaha pemuda Kalimantan Tengah
                            melalui pelatihan terstruktur, pendampingan intensif, dan akses permodalan yang berkelanjutan.
                        </p>

                        {/* Social Media */}
                        <div className="mb-8">
                            <h3 className="font-semibold text-[#2a436c] mb-4">Ikuti Kami</h3>
                            <div className="flex gap-3">
                                {socialMedia.map((social, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="w-10 h-10 rounded-lg bg-[#f9fafb] border border-[#e5e7eb] flex items-center justify-center text-lg hover:bg-[#f0f7ff] hover:border-[#cbdde9] transition-colors"
                                        style={{ color: social.color }}
                                        title={social.name}
                                    >
                                        <i className={social.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Grid */}
                    <div>
                        <div className="grid grid-cols-3 gap-8">
                            {quickLinks.slice(0, 3).map((section, index) => (
                                <div key={index}>
                                    <h3 className="font-semibold text-[#2a436c] mb-4 pb-2 border-b border-[#e5e7eb]">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <Link
                                                    to={link.path}
                                                    className="text-sm text-[#6b7280] hover:text-[#2a436c] transition-colors flex items-center gap-2"
                                                >
                                                    <i className="ri-arrow-right-s-line text-[#90b6d5] text-xs"></i>
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            
                        </div>
                    </div>
                </div>
                {/* Badge Program Resmi */}
                <div className="mt-3 p-5 bg-gradient-to-r from-[#2a436c]/5 to-[#4f90c6]/5 rounded-xl border border-[#cbdde9]">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-lg border border-[#e5e7eb] p-2 flex items-center justify-center">
                                <i className="ri-government-line text-2xl text-[#4f90c6]"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#2a436c]">Program Resmi Pemerintah</h4>
                                <p className="text-sm text-[#6b7280]">
                                    Dikelola oleh Dinas Pemuda dan Olahraga Provinsi Kalimantan Tengah
                                </p>
                            </div>
                        </div>
                        <div className="text-sm text-[#6b7280] font-medium">
                            <span className="text-[#4f90c6]">2019</span> - <span className="text-[#4f90c6]">2024</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-gradient-to-r from-[#2a436c] to-[#355485] text-white">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <i className="ri-copyright-line text-[#cbdde9]"></i>
                            <span className="text-[#cbdde9]">2024 CEMPOR KALTENG. Hak cipta dilindungi.</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <i className="ri-shield-check-line text-[#cbdde9]"></i>
                                <span className="text-[#cbdde9]">Situs Resmi</span>
                            </div>
                            <div className="w-px h-4 bg-white/30"></div>
                            <div className="flex items-center gap-2">
                                <i className="ri-verified-badge-line text-[#cbdde9]"></i>
                                <span className="text-[#cbdde9]">Terakreditasi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-[#2a436c] to-[#4f90c6] text-white rounded-lg shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 z-40 border border-white/20"
                aria-label="Kembali ke atas"
            >
                <i className="ri-arrow-up-line"></i>
            </button>
        </footer>
    );
};

export default FooterCempor;