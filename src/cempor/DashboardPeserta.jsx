import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function DashboardPeserta() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();

    const menuItems = [
        { icon: 'ri-dashboard-line', label: 'Dashboard', path: '/dashboard' },
        { icon: 'ri-book-open-line', label: 'Modul Saya', path: '/dashboard/modul' },
        { icon: 'ri-video-line', label: 'Video Materi', path: '/dashboard/video' },
        { icon: 'ri-task-line', label: 'Tugas & Quiz', path: '/dashboard/tugas' },
        { icon: 'ri-calendar-line', label: 'Jadwal', path: '/dashboard/jadwal' },
        { icon: 'ri-user-star-line', label: 'Mentor Saya', path: '/dashboard/mentor' },
        { icon: 'ri-chat-3-line', label: 'Diskusi', path: '/dashboard/diskusi' },
        { icon: 'ri-file-chart-line', label: 'Progress', path: '/dashboard/progress' },
        { icon: 'ri-award-line', label: 'Sertifikat', path: '/dashboard/sertifikat' },
        { icon: 'ri-settings-3-line', label: 'Pengaturan', path: '/dashboard/settings' },
    ];

    const stats = [
        { label: 'Modul Selesai', value: '8/12', icon: 'ri-checkbox-circle-line', color: 'bg-green-100 text-green-600' },
        { label: 'Tugas Terselesaikan', value: '15/20', icon: 'ri-task-line', color: 'bg-blue-100 text-blue-600' },
        { label: 'Progress Belajar', value: '75%', icon: 'ri-line-chart-line', color: 'bg-purple-100 text-purple-600' },
        { label: 'Nilai Rata-rata', value: '8.5', icon: 'ri-star-line', color: 'bg-amber-100 text-amber-600' },
    ];

    const upcomingEvents = [
        { title: 'Workshop Digital Marketing', date: '15 Jan 2025', time: '14:00 WIB', mentor: 'Maya Santoso' },
        { title: 'Konsultasi 1-on-1', date: '18 Jan 2025', time: '10:00 WIB', mentor: 'Dr. Ahmad Wijaya' },
        { title: 'Live Q&A Session', date: '20 Jan 2025', time: '19:00 WIB', mentor: 'Tim CEMPOR' },
    ];

    const recentActivities = [
        { icon: 'ri-check-line', text: 'Menyelesaikan modul "Business Model Canvas"', time: '2 jam yang lalu' },
        { icon: 'ri-upload-line', text: 'Mengumpulkan tugas "Analisis Pasar"', time: '1 hari yang lalu' },
        { icon: 'ri-chat-1-line', text: 'Berdiskusi di forum "Digital Marketing Strategy"', time: '2 hari yang lalu' },
        { icon: 'ri-video-line', text: 'Menonton video "Financial Planning"', time: '3 hari yang lalu' },
    ];

    return (
        <div className="min-h-screen bg-[#f9fafb]">
            {/* Top Header */}
            <header className="bg-white border-b border-[#e5e7eb] sticky top-0 z-40">
                <div className="flex items-center justify-between px-6 py-4">
                    {/* Left: Logo & Toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 rounded-lg hover:bg-[#f9fafb] text-[#6b7280] lg:hidden"
                        >
                            <i className="ri-menu-line text-xl"></i>
                        </button>
                        <Link to="/dashboard" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#2a436c] to-[#4f90c6] rounded-xl flex items-center justify-center">
                                <i className="ri-rocket-2-line text-white"></i>
                            </div>
                            <div className="hidden md:block">
                                <div className="font-bold text-[#2a436c]">CEMPOR</div>
                                <div className="text-xs text-[#6b7280]">Dashboard Peserta</div>
                            </div>
                        </Link>
                    </div>

                    {/* Center: Page Title */}
                    <div className="hidden md:block">
                        <h1 className="text-lg font-semibold text-[#2a436c]">Selamat Datang, Andi Wijaya!</h1>
                        <div className="text-sm text-[#6b7280]">Batch 1 - 2025 • Tingkat Menengah</div>
                    </div>

                    {/* Right: User Menu */}
                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-[#6b7280] hover:text-[#2a436c]">
                            <i className="ri-notification-3-line text-xl"></i>
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="relative">
                            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#f9fafb] cursor-pointer">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#4f90c6] to-[#90b6d5] rounded-full flex items-center justify-center text-white font-semibold">
                                    AW
                                </div>
                                <div className="hidden md:block">
                                    <div className="text-sm font-medium text-[#2a436c]">Andi Wijaya</div>
                                    <div className="text-xs text-[#6b7280]">Kopi Lokal Kalteng</div>
                                </div>
                                <i className="ri-arrow-down-s-line text-[#6b7280]"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside className={`
                    bg-white border-r border-[#e5e7eb] h-[calc(100vh-4rem)] sticky top-16 transition-all duration-300 overflow-y-auto
                    ${sidebarOpen ? 'w-64' : 'w-0 lg:w-16'} lg:w-64
                `}>
                    {/* Navigation Menu */}
                    <nav className="p-4">
                        <ul className="space-y-2">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.path}
                                        className={`
                                            flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                                            ${location.pathname === item.path
                                                ? 'bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white shadow-md'
                                                : 'text-[#6b7280] hover:bg-[#f9fafb] hover:text-[#2a436c]'
                                            }
                                        `}
                                    >
                                        <i className={`${item.icon} text-lg`}></i>
                                        <span className={`${!sidebarOpen ? 'lg:hidden' : ''} transition-all`}>
                                            {item.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Profile Summary */}
                    <div className={`p-4 border-t border-[#e5e7eb] ${!sidebarOpen ? 'lg:hidden' : ''}`}>
                        <div className="bg-gradient-to-r from-[#f0f7ff] to-[#e5efff] rounded-xl p-4">
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#4f90c6] to-[#90b6d5] rounded-full flex items-center justify-center text-white font-semibold">
                                    AW
                                </div>
                                <div className="font-medium text-[#2a436c]">Andi Wijaya</div>
                                <div className="text-xs text-[#6b7280] mb-3">Kopi Lokal Kalteng</div>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                                        Aktif
                                    </div>
                                    <div className="text-xs text-[#6b7280]">• 75% Progress</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className={`flex-1 p-6 transition-all duration-300 ${!sidebarOpen ? 'lg:ml-0' : ''}`}>
                    {/* Welcome Banner */}
                    <div className="bg-gradient-to-r from-[#2a436c] to-[#4f90c6] rounded-2xl p-8 text-white mb-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h2 className="text-2xl font-bold mb-3">Selamat Pagi, Andi! 👋</h2>
                                <p className="text-white/90 mb-4">
                                    Tinggal 4 modul lagi untuk menyelesaikan program Tingkat Menengah.
                                    Mari terus belajar dan berkembang!
                                </p>
                                <Link
                                    to="/dashboard/modul"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2a436c] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    <i className="ri-play-line"></i>
                                    Lanjutkan Belajar
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <i className="ri-rocket-2-line text-white text-4xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl border border-[#e5e7eb] p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                                        <i className={`${stat.icon} text-xl`}></i>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-[#2a436c]">{stat.value}</div>
                                        <div className="text-sm text-[#6b7280]">{stat.label}</div>
                                    </div>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#4f90c6] to-[#90b6d5] rounded-full"
                                        style={{ width: stat.value.includes('%') ? stat.value : '70%' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Column: Upcoming Events */}
                        <div className="bg-white rounded-xl border border-[#e5e7eb] p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-[#2a436c] flex items-center gap-2">
                                    <i className="ri-calendar-event-line text-[#4f90c6]"></i>
                                    Jadwal Mendatang
                                </h3>
                                <Link to="/dashboard/jadwal" className="text-sm text-[#4f90c6] hover:text-[#2a436c] font-medium">
                                    Lihat Semua
                                </Link>
                            </div>
                            <div className="space-y-4">
                                {upcomingEvents.map((event, index) => (
                                    <div key={index} className="p-4 border border-[#e5e7eb] rounded-lg hover:border-[#cbdde9] transition-colors">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h4 className="font-medium text-[#2a436c] mb-2">{event.title}</h4>
                                                <div className="flex items-center gap-4 text-sm text-[#6b7280]">
                                                    <span className="flex items-center gap-1">
                                                        <i className="ri-calendar-line"></i>
                                                        {event.date}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <i className="ri-time-line"></i>
                                                        {event.time}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-[#6b7280] mb-1">Mentor</div>
                                                <div className="font-medium text-[#4f90c6]">{event.mentor}</div>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex gap-2">
                                            <button className="flex-1 py-2 bg-[#f0f7ff] text-[#4f90c6] rounded-lg font-medium hover:bg-[#e1efff] transition-colors">
                                                <i className="ri-calendar-line mr-2"></i>
                                                Tambah Kalender
                                            </button>
                                            <button className="flex-1 py-2 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white rounded-lg font-medium hover:shadow-md transition-all">
                                                <i className="ri-video-line mr-2"></i>
                                                Bergabung
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Recent Activities */}
                        <div className="bg-white rounded-xl border border-[#e5e7eb] p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-[#2a436c] flex items-center gap-2">
                                    <i className="ri-history-line text-[#4f90c6]"></i>
                                    Aktivitas Terbaru
                                </h3>
                                <button className="text-sm text-[#4f90c6] hover:text-[#2a436c] font-medium">
                                    <i className="ri-refresh-line"></i>
                                </button>
                            </div>
                            <div className="space-y-4">
                                {recentActivities.map((activity, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 border border-[#e5e7eb] rounded-lg">
                                        <div className="w-10 h-10 bg-gradient-to-br from-[#4f90c6] to-[#90b6d5] rounded-lg flex items-center justify-center text-white">
                                            <i className={activity.icon}></i>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[#2a436c] mb-1">{activity.text}</p>
                                            <div className="text-sm text-[#6b7280] flex items-center gap-2">
                                                <i className="ri-time-line"></i>
                                                {activity.time}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Actions */}
                            <div className="mt-8 pt-6 border-t border-[#e5e7eb]">
                                <h4 className="font-semibold text-[#2a436c] mb-4">Aksi Cepat</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="p-3 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg hover:bg-[#f0f7ff] transition-colors">
                                        <i className="ri-upload-line text-[#4f90c6] mb-2 block"></i>
                                        <span className="text-sm font-medium text-[#2a436c]">Upload Tugas</span>
                                    </button>
                                    <button className="p-3 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg hover:bg-[#f0f7ff] transition-colors">
                                        <i className="ri-chat-3-line text-[#4f90c6] mb-2 block"></i>
                                        <span className="text-sm font-medium text-[#2a436c]">Forum Diskusi</span>
                                    </button>
                                    <button className="p-3 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg hover:bg-[#f0f7ff] transition-colors">
                                        <i className="ri-download-line text-[#4f90c6] mb-2 block"></i>
                                        <span className="text-sm font-medium text-[#2a436c]">Download Materi</span>
                                    </button>
                                    <button className="p-3 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg hover:bg-[#f0f7ff] transition-colors">
                                        <i className="ri-question-line text-[#4f90c6] mb-2 block"></i>
                                        <span className="text-sm font-medium text-[#2a436c]">Tanya Mentor</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}