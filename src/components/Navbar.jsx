import { useState } from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <i className="ri-book-read-line text-white text-xl"></i>
                            </div>
                            <span className="text-2xl font-bold text-primary">ZiyaApp</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => setCurrentPage('home')}
                            className={`${currentPage === 'home' ? 'text-primary font-semibold' : 'text-text-gray'
                                } hover:text-primary transition-colors`}
                        >
                            Beranda
                        </button>
                        <button
                            onClick={() => setCurrentPage('literasi')}
                            className={`${currentPage === 'literasi' ? 'text-primary font-semibold' : 'text-text-gray'
                                } hover:text-primary transition-colors`}
                        >
                            Literasi
                        </button>
                        <button
                            onClick={() => setCurrentPage('numerasi')}
                            className={`${currentPage === 'numerasi' ? 'text-primary font-semibold' : 'text-text-gray'
                                } hover:text-primary transition-colors`}
                        >
                            Numerasi
                        </button>
                        <button
                            onClick={() => setCurrentPage('dashboard')}
                            className={`${currentPage === 'dashboard' ? 'bg-primary text-white' : 'bg-accent text-white'
                                } px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center space-x-2`}
                        >
                            <i className="ri-dashboard-line"></i>
                            <span>Dashboard</span>
                        </button>
                    </div>

                    <button
                        className="md:hidden text-primary"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-border-gray">
                    <div className="px-4 py-3 space-y-3">
                        <button
                            onClick={() => {
                                setCurrentPage('home');
                                setMobileMenuOpen(false);
                            }}
                            className={`${currentPage === 'home' ? 'text-primary font-semibold' : 'text-text-gray'
                                } block w-full text-left py-2 hover:text-primary transition-colors`}
                        >
                            Beranda
                        </button>
                        <button
                            onClick={() => {
                                setCurrentPage('literasi');
                                setMobileMenuOpen(false);
                            }}
                            className={`${currentPage === 'literasi' ? 'text-primary font-semibold' : 'text-text-gray'
                                } block w-full text-left py-2 hover:text-primary transition-colors`}
                        >
                            Literasi
                        </button>
                        <button
                            onClick={() => {
                                setCurrentPage('numerasi');
                                setMobileMenuOpen(false);
                            }}
                            className={`${currentPage === 'numerasi' ? 'text-primary font-semibold' : 'text-text-gray'
                                } block w-full text-left py-2 hover:text-primary transition-colors`}
                        >
                            Numerasi
                        </button>
                        <button
                            onClick={() => {
                                setCurrentPage('dashboard');
                                setMobileMenuOpen(false);
                            }}
                            className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors flex items-center space-x-2 w-full"
                        >
                            <i className="ri-dashboard-line"></i>
                            <span>Dashboard</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
