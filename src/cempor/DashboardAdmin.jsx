import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DashboardAdmin() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const adminMenu = [
        { icon: 'ri-dashboard-line', label: 'Dashboard', path: '/admin' },
        { icon: 'ri-user-line', label: 'Manajemen Peserta', path: '/admin/peserta', badge: '150' },
        { icon: 'ri-user-star-line', label: 'Manajemen Mentor', path: '/admin/mentor', badge: '25' },
        { icon: 'ri-book-open-line', label: 'Konten Materi', path: '/admin/materi' },
        { icon: 'ri-calendar-line', label: 'Jadwal & Event', path: '/admin/jadwal' },
        { icon: 'ri-task-line', label: 'Tugas & Evaluasi', path: '/admin/tugas' },
        { icon: 'ri-file-chart-line', label: 'Laporan & Analitik', path: '/admin/laporan' },
        { icon: 'ri-award-line', label: 'Sertifikasi', path: '/admin/sertifikat' },
        { icon: 'ri-money-dollar-circle-line', label: 'Keuangan', path: '/admin/keuangan' },
        { icon: 'ri-chat-3-line', label: 'Forum & Diskusi', path: '/admin/forum' },
        { icon: 'ri-settings-3-line', label: 'Pengaturan Sistem', path: '/admin/pengaturan' },
    ];

    const quickStats = [
        { label: 'Total Peserta', value: '150', change: '+15%', icon: 'ri-user-add-line', color: 'bg-blue-100 text-[#4f90c6]' },
        { label: 'Peserta Aktif', value: '125', change: '+8%', icon: 'ri-user-star-line', color: 'bg-green-100 text-green-600' },
        { label: 'Total Mentor', value: '25', change: '+3', icon: 'ri-user-voice-line', color: 'bg-purple-100 text-purple-600' },
        { label: 'Program Berjalan', value: '8', change: '2 Selesai', icon: 'ri-rocket-line', color: 'bg-orange-100 text-orange-600' },
        { label: 'Tugas Dikumpulkan', value: '1.2K', change: '+120', icon: 'ri-task-line', color: 'bg-cyan-100 text-cyan-600' },
        { label: 'Revenue', value: 'Rp 250M', change: '+12%', icon: 'ri-money-dollar-circle-line', color: 'bg-emerald-100 text-emerald-600' },
    ];

    const recentRegistrations = [
        { name: 'Budi Santoso', email: 'budi@email.com', program: 'Tingkat Dasar', date: '15 Jan 2025', status: 'verified' },
        { name: 'Sari Dewi', email: 'sari@email.com', program: 'Tingkat Menengah', date: '14 Jan 2025', status: 'pending' },
        { name: 'Ahmad Fauzi', email: 'ahmad@email.com', program: 'Tingkat Lanjut', date: '14 Jan 2025', status: 'verified' },
        { name: 'Rina Setiawan', email: 'rina@email.com', program: 'Inkubasi', date: '13 Jan 2025', status: 'rejected' },
        { name: 'Joko Susilo', email: 'joko@email.com', program: 'Tingkat Dasar', date: '13 Jan 2025', status: 'verified' },
    ];

    const programStats = [
        { name: 'Tingkat Dasar', peserta: 60, completion: 85, color: 'bg-[#4f90c6]' },
        { name: 'Tingkat Menengah', peserta: 45, completion: 72, color: 'bg-green-500' },
        { name: 'Tingkat Lanjut', peserta: 25, completion: 65, color: 'bg-purple-500' },
        { name: 'Inkubasi', peserta: 20, completion: 90, color: 'bg-orange-500' },
    ];

    return (
        <div className="min-h-screen bg-[#f9fafb]">
            {/* Top Header */}
            <header className="bg-white border-b border-[#e5e7eb] shadow-sm sticky top-0 z-50">
                <div className="flex items-center justify-between px-6 py-4">
                    {/* Left: Logo & Toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 rounded-lg hover:bg-[#f9fafb] text-[#6b7280] lg:hidden"
                        >
                            <i className="ri-menu-line text-xl"></i>
                        </button>
                        <Link to="/admin" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#2a436c] to-[#4f90c6] rounded-xl flex items-center justify-center">
                                <i className="ri-shield-keyhole-line text-white"></i>
                            </div>
                            <div className="hidden md:block">
                                <div className="font-bold text-[#2a436c]">CEMPOR ADMIN</div>
                                <div className="text-xs text-[#6b7280]">Control Panel</div>
                            </div>
                        </Link>
                    </div>

                    {/* Center: Search & Date */}
                    <div className="hidden lg:block flex-1 max-w-2xl mx-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search participants, modules, reports..."
                                className="w-full pl-12 pr-4 py-2.5 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                            />
                            <i className="ri-search-line absolute left-4 top-3 text-[#9ca3af]"></i>
                        </div>
                    </div>

                    {/* Right: Admin Tools */}
                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-[#6b7280] hover:text-[#2a436c]">
                            <i className="ri-notification-3-line text-xl"></i>
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <button className="relative p-2 text-[#6b7280] hover:text-[#2a436c]">
                            <i className="ri-mail-line text-xl"></i>
                            <span className="absolute top-1 right-1 w-2 h-2 bg-[#4f90c6] rounded-full"></span>
                        </button>
                        <div className="hidden md:block h-6 w-px bg-[#e5e7eb]"></div>
                        <div className="flex items-center gap-3">
                            <div className="hidden md:block text-right">
                                <div className="text-sm font-medium text-[#2a436c]">Admin Super</div>
                                <div className="text-xs text-[#6b7280]">superadmin@cempor.com</div>
                            </div>
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#2a436c] to-[#4f90c6] rounded-full flex items-center justify-center text-white font-semibold cursor-pointer">
                                    AS
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside className={`
                    bg-white border-r border-[#e5e7eb] h-[calc(100vh-4rem)] sticky top-16 transition-all duration-300 overflow-y-auto
                    ${sidebarOpen ? 'w-64' : 'w-0 lg:w-16'} lg:w-64 shadow-sm
                `}>
                    {/* Admin Info */}
                    <div className={`p-6 border-b border-[#e5e7eb] ${!sidebarOpen ? 'lg:hidden' : ''}`}>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#2a436c] to-[#4f90c6] rounded-full flex items-center justify-center text-white font-semibold">
                                AS
                            </div>
                            <div>
                                <div className="font-semibold text-[#2a436c]">Admin Super</div>
                                <div className="text-xs text-[#6b7280]">Super Administrator</div>
                                <div className="text-xs text-green-600 font-medium mt-1">
                                    <i className="ri-shield-check-line mr-1"></i>
                                    Full Access
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="p-4">
                        <div className="mb-6">
                            <div className={`text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-3 px-4 ${!sidebarOpen ? 'lg:hidden' : ''}`}>
                                Main Menu
                            </div>
                            <ul className="space-y-1">
                                {adminMenu.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.path}
                                            className={`
                                                flex items-center justify-between px-4 py-3 rounded-lg transition-all group
                                                ${window.location.pathname === item.path
                                                    ? 'bg-gradient-to-r from-[#f0f7ff] to-[#e5efff] text-[#2a436c] border-l-4 border-[#4f90c6]'
                                                    : 'text-[#6b7280] hover:bg-[#f9fafb] hover:text-[#2a436c]'
                                                }
                                            `}
                                        >
                                            <div className="flex items-center gap-3">
                                                <i className={`${item.icon} text-lg ${window.location.pathname === item.path ? 'text-[#4f90c6]' : 'text-[#9ca3af]'}`}></i>
                                                <span className={`${!sidebarOpen ? 'lg:hidden' : ''}`}>
                                                    {item.label}
                                                </span>
                                            </div>
                                            {item.badge && (
                                                <span className={`text-xs px-2 py-1 rounded-full ${window.location.pathname === item.path ? 'bg-[#f0f7ff] text-[#4f90c6]' : 'bg-[#f9fafb] text-[#6b7280]'}`}>
                                                    {item.badge}
                                                </span>
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* System Status */}
                        <div className={`mt-8 p-4 bg-gradient-to-r from-[#f0f7ff] to-[#e5efff] rounded-lg border border-[#cbdde9] ${!sidebarOpen ? 'lg:hidden' : ''}`}>
                            <div className="text-sm font-medium text-[#2a436c] mb-2">System Status</div>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-xs text-[#6b7280] mb-1">
                                        <span>Server Load</span>
                                        <span>42%</span>
                                    </div>
                                    <div className="h-1.5 bg-[#e5e7eb] rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 rounded-full" style={{ width: '42%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs text-[#6b7280] mb-1">
                                        <span>Database</span>
                                        <span className="text-green-600">Online</span>
                                    </div>
                                </div>
                                <div className="text-xs text-[#6b7280]">
                                    <i className="ri-time-line mr-1"></i>
                                    Last backup: 6 hours ago
                                </div>
                            </div>
                        </div>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className={`flex-1 p-6 transition-all duration-300 ${!sidebarOpen ? 'lg:ml-0' : ''}`}>
                    {/* Page Header */}
                    <div className="mb-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h1 className="text-2xl font-bold text-[#2a436c] mb-2">Admin Dashboard</h1>
                                <p className="text-[#6b7280]">
                                    Overview of CEMPOR system, participants, and program performance
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="px-4 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-[#6b7280] hover:bg-[#f9fafb] transition-colors flex items-center gap-2">
                                    <i className="ri-download-line"></i>
                                    Export Report
                                </button>
                                <button className="px-4 py-2.5 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
                                    <i className="ri-add-line"></i>
                                    Add New
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
                        {quickStats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl border border-[#e5e7eb] p-5 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                                        <i className={`${stat.icon} text-2xl`}></i>
                                    </div>
                                    <div className={`text-sm font-semibold px-2 py-1 rounded-full ${stat.change.includes('+') ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                        {stat.change}
                                    </div>
                                </div>
                                <div className="text-2xl font-bold text-[#2a436c] mb-1">{stat.value}</div>
                                <div className="text-sm text-[#6b7280]">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        {/* Left: Recent Registrations */}
                        <div className="bg-white rounded-xl border border-[#e5e7eb]">
                            <div className="p-6 border-b border-[#e5e7eb]">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-[#2a436c] flex items-center gap-2">
                                        <i className="ri-user-add-line text-[#4f90c6]"></i>
                                        Pendaftaran Terbaru
                                    </h3>
                                    <Link to="/admin/peserta" className="text-sm text-[#4f90c6] hover:text-[#2a436c] font-medium">
                                        Lihat Semua →
                                    </Link>
                                </div>
                            </div>
                            <div className="p-1">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                                            <th className="px-6 py-3">Nama</th>
                                            <th className="px-6 py-3">Program</th>
                                            <th className="px-6 py-3">Tanggal</th>
                                            <th className="px-6 py-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#e5e7eb]">
                                        {recentRegistrations.map((user, index) => (
                                            <tr key={index} className="hover:bg-[#f9fafb] transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="font-medium text-[#2a436c]">{user.name}</div>
                                                    <div className="text-sm text-[#6b7280]">{user.email}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm font-medium text-[#2a436c]">{user.program}</span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-[#6b7280]">{user.date}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${user.status === 'verified' ? 'bg-green-100 text-green-800' :
                                                        user.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-red-100 text-red-800'
                                                        }`}>
                                                        {user.status === 'verified' ? 'Verified' :
                                                            user.status === 'pending' ? 'Pending' : 'Rejected'}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Right: Program Performance */}
                        <div className="bg-white rounded-xl border border-[#e5e7eb]">
                            <div className="p-6 border-b border-[#e5e7eb]">
                                <h3 className="text-lg font-semibold text-[#2a436c] flex items-center gap-2">
                                    <i className="ri-bar-chart-2-line text-[#4f90c6]"></i>
                                    Performa Program
                                </h3>
                            </div>
                            <div className="p-6">
                                <div className="space-y-6">
                                    {programStats.map((program, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-3 h-3 rounded-full ${program.color}`}></div>
                                                    <span className="font-medium text-[#2a436c]">{program.name}</span>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-lg font-bold text-[#2a436c]">{program.peserta} Peserta</div>
                                                    <div className="text-sm text-[#6b7280]">{program.completion}% Completion</div>
                                                </div>
                                            </div>
                                            <div className="h-2.5 bg-[#e5e7eb] rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${program.color}`}
                                                    style={{ width: `${program.completion}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#e5e7eb]">
                                    <div className="text-center p-4 bg-[#f9fafb] rounded-lg">
                                        <div className="text-2xl font-bold text-[#2a436c] mb-1">85%</div>
                                        <div className="text-sm text-[#6b7280]">Avg. Satisfaction</div>
                                    </div>
                                    <div className="text-center p-4 bg-[#f9fafb] rounded-lg">
                                        <div className="text-2xl font-bold text-[#2a436c] mb-1">92%</div>
                                        <div className="text-sm text-[#6b7280]">Retention Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* System Alerts & Quick Actions */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* System Alerts */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl border border-[#e5e7eb] p-6">
                                <h3 className="text-lg font-semibold text-[#2a436c] mb-6 flex items-center gap-2">
                                    <i className="ri-alarm-warning-line text-amber-600"></i>
                                    System Alerts & Notifications
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { type: 'warning', message: 'Database backup overdue by 2 hours', time: '10 min ago' },
                                        { type: 'info', message: '5 new mentor applications pending review', time: '1 hour ago' },
                                        { type: 'success', message: 'System update completed successfully', time: '3 hours ago' },
                                        { type: 'error', message: 'Payment gateway integration requires attention', time: '5 hours ago' },
                                    ].map((alert, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 border border-[#e5e7eb] rounded-lg hover:bg-[#f9fafb] transition-colors">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${alert.type === 'warning' ? 'bg-amber-100 text-amber-600' :
                                                alert.type === 'info' ? 'bg-blue-100 text-blue-600' :
                                                    alert.type === 'success' ? 'bg-green-100 text-green-600' :
                                                        'bg-red-100 text-red-600'
                                                }`}>
                                                <i className={alert.type === 'warning' ? 'ri-alarm-warning-line' :
                                                    alert.type === 'info' ? 'ri-information-line' :
                                                        alert.type === 'success' ? 'ri-check-line' :
                                                            'ri-error-warning-line'
                                                }></i>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[#2a436c] mb-1">{alert.message}</p>
                                                <div className="text-sm text-[#6b7280]">{alert.time}</div>
                                            </div>
                                            <button className="text-[#9ca3af] hover:text-[#6b7280]">
                                                <i className="ri-close-line"></i>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Admin Actions */}
                        <div>
                            <div className="bg-gradient-to-br from-[#f0f7ff] to-[#e5efff] border border-[#cbdde9] rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-[#2a436c] mb-6">Quick Actions</h3>
                                <div className="space-y-3">
                                    <button className="w-full p-4 bg-white border border-[#e5e7eb] rounded-lg hover:bg-[#f9fafb] transition-colors text-left flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#f0f7ff] text-[#4f90c6] rounded-lg flex items-center justify-center">
                                            <i className="ri-user-add-line"></i>
                                        </div>
                                        <div>
                                            <div className="font-medium text-[#2a436c]">Add New Participant</div>
                                            <div className="text-sm text-[#6b7280]">Manual registration</div>
                                        </div>
                                    </button>
                                    <button className="w-full p-4 bg-white border border-[#e5e7eb] rounded-lg hover:bg-[#f9fafb] transition-colors text-left flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                                            <i className="ri-file-edit-line"></i>
                                        </div>
                                        <div>
                                            <div className="font-medium text-[#2a436c]">Generate Reports</div>
                                            <div className="text-sm text-[#6b7280]">Monthly performance</div>
                                        </div>
                                    </button>
                                    <button className="w-full p-4 bg-white border border-[#e5e7eb] rounded-lg hover:bg-[#f9fafb] transition-colors text-left flex items-center gap-3">
                                        <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                                            <i className="ri-settings-3-line"></i>
                                        </div>
                                        <div>
                                            <div className="font-medium text-[#2a436c]">System Settings</div>
                                            <div className="text-sm text-[#6b7280]">Configure platform</div>
                                        </div>
                                    </button>
                                    <button className="w-full p-4 bg-white border border-[#e5e7eb] rounded-lg hover:bg-[#f9fafb] transition-colors text-left flex items-center gap-3">
                                        <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                                            <i className="ri-shield-keyhole-line"></i>
                                        </div>
                                        <div>
                                            <div className="font-medium text-[#2a436c]">Security Audit</div>
                                            <div className="text-sm text-[#6b7280]">Check system logs</div>
                                        </div>
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