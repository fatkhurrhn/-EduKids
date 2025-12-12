import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarCempor = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
    { name: 'Beranda', path: '/cempor', icon: 'ri-home-4-line' },
    { name: 'Tentang', path: '/tentang', icon: 'ri-information-line' },
    {
        name: 'Program',
        path: '/program',
        icon: 'ri-book-open-line',
        submenu: [
            { name: 'Modul Pelatihan', path: '/program/modul' },
            { name: 'Jadwal Kelas', path: '/program/jadwal' },
            { name: 'Tingkatan', path: '/program/tingkatan' }
        ]
    },
    { name: 'Kegiatan', path: '/kegiatan', icon: 'ri-calendar-event-line' },
    { name: 'Alumni', path: '/alumni', icon: 'ri-group-line' },
    { name: 'Galeri', path: '/galeri', icon: 'ri-gallery-line' },
];

const specialItems = [
    {
        name: 'Login',
        path: '/login',
        isCta: true
    }
];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <>
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white py-2">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <i className="ri-map-pin-line text-[#cbdde9]"></i>
                                <span>Palangka Raya, Kalimantan Tengah</span>
                            </div>
                            <div className="hidden sm:flex items-center gap-2">
                                <i className="ri-phone-line text-[#cbdde9]"></i>
                                <span>0511-1234567</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <a href="#" className="hover:text-[#cbdde9] transition-colors">
                                    <i className="ri-facebook-fill"></i>
                                </a>
                                <a href="#" className="hover:text-[#cbdde9] transition-colors">
                                    <i className="ri-instagram-line"></i>
                                </a>
                                <a href="#" className="hover:text-[#cbdde9] transition-colors">
                                    <i className="ri-youtube-line"></i>
                                </a>
                            </div>
                            <div className="hidden sm:block h-4 w-px bg-white/30"></div>
                            <a
                                href="/admin/login"
                                className="flex items-center gap-2 text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors"
                            >
                                <i className="ri-admin-line"></i>
                                <span className="hidden sm:inline">Area Mentor</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-[#e5e7eb]'
                    : 'bg-white border-b border-[#e5e7eb]'
                }`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#2a436c] to-[#4f90c6] rounded-xl flex items-center justify-center">
                                    <i className="ri-rocket-2-line text-white text-xl"></i>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#cbdde9] rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-xl font-bold text-[#2a436c]">CEMPOR</span>
                                    <span className="text-xs font-semibold bg-gradient-to-r from-[#4f90c6] to-[#90b6d5] text-white px-2 py-0.5 rounded-full">
                                        KALTENG
                                    </span>
                                </div>
                                <div className="text-xs text-[#6b7280] font-medium">
                                    Pusat Pembinaan Wirausaha Pemuda
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <div key={item.name} className="relative group">
                                    <Link
                                        to={item.path}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors ${isActive(item.path)
                                                ? 'text-[#2a436c] font-semibold bg-[#f0f7ff]'
                                                : 'text-[#6b7280] hover:text-[#2a436c] hover:bg-[#f9fafb]'
                                            }`}
                                    >
                                        <i className={`${item.icon} text-lg`}></i>
                                        <span>{item.name}</span>
                                        {item.submenu && (
                                            <i className="ri-arrow-down-s-line text-sm ml-1"></i>
                                        )}
                                    </Link>

                                    {item.submenu && (
                                        <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                            <div className="bg-white rounded-xl shadow-xl border border-[#e5e7eb] p-2">
                                                {item.submenu.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        to={sub.path}
                                                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-[#f9fafb] text-[#6b7280] hover:text-[#2a436c] transition-colors"
                                                    >
                                                        <i className="ri-arrow-right-s-line text-[#90b6d5]"></i>
                                                        <span>{sub.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {specialItems.map((item) => (
                                item.isCta ? (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="ml-2 px-6 py-2.5 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#4f90c6]/25 transition-all duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="ml-2 flex items-center gap-2 px-4 py-2.5 rounded-lg text-[#4f90c6] font-semibold bg-[#f0f7ff] hover:bg-[#e1efff] transition-colors relative"
                                    >
                                        <i className={`${item.icon}`}></i>
                                        <span>{item.name}</span>
                                        {item.highlight && (
                                            <span className="absolute -top-1 -right-1">
                                                <span className="relative flex h-3 w-3">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b6b] opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff6b6b]"></span>
                                                </span>
                                            </span>
                                        )}
                                    </Link>
                                )
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-lg text-[#6b7280] hover:bg-[#f9fafb]"
                            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
                        >
                            <i className={`ri-${isOpen ? 'close' : 'menu'}-line text-2xl`}></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden bg-white border-t border-[#e5e7eb] shadow-xl">
                        <div className="px-4 py-3 space-y-1">
                            {[...navItems, ...specialItems].map((item) => (
                                item.isCta ? (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-center px-6 py-3 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <div key={item.name}>
                                        <Link
                                            to={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${isActive(item.path)
                                                    ? 'bg-[#f0f7ff] text-[#2a436c] font-semibold'
                                                    : 'text-[#6b7280] hover:bg-[#f9fafb]'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <i className={`${item.icon} text-lg ${item.highlight ? 'text-[#4f90c6]' : ''}`}></i>
                                                <span>{item.name}</span>
                                            </div>
                                            {item.highlight && (
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b6b] opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b6b]"></span>
                                                </span>
                                            )}
                                            {item.submenu && <i className="ri-arrow-right-s-line"></i>}
                                        </Link>

                                        {item.submenu && (
                                            <div className="ml-8 border-l border-[#e5e7eb]">
                                                {item.submenu.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        to={sub.path}
                                                        onClick={() => setIsOpen(false)}
                                                        className="flex items-center gap-3 px-4 py-2 text-sm text-[#6b7280] hover:text-[#2a436c]"
                                                    >
                                                        <i className="ri-arrow-right-s-line text-xs text-[#90b6d5]"></i>
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Scroll Progress Indicator */}
            {scrolled && (
                <div className="fixed top-0 left-0 right-0 h-1 z-50">
                    <div
                        className="h-full bg-gradient-to-r from-[#2a436c] to-[#4f90c6] transition-all duration-300"
                        style={{
                            width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%`
                        }}
                    ></div>
                </div>
            )}
        </>
    );
};

export default NavbarCempor;