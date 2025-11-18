import React from 'react'
import BottomNav from '../components/BottomNav'

export default function HomePage() {
    // Data kategori pembelajaran
    const learningCategories = [
        {
            id: 1,
            title: "Baca Huruf",
            icon: "ri-abc",
            color: "bg-gradient-to-br from-[#4f90c6] to-[#355485]",
            emoji: "🔤",
            items: "26 Huruf",
            route: "/literasi"
        },
        {
            id: 2,
            title: "Hitung Angka",
            icon: "ri-calculator-line",
            color: "bg-gradient-to-br from-[#355485] to-[#2a436c]",
            emoji: "🔢",
            items: "20 Angka",
            route: "/numerasi"
        },
        {
            id: 3,
            title: "Doa Harian",
            icon: "ri-moon-fill",
            color: "bg-gradient-to-br from-[#2a436c] to-[#4f90c6]",
            emoji: "🌙",
            items: "5 Doa",
            route: "/islamic"
        },
        {
            id: 4,
            title: "Warna & Bentuk",
            icon: "ri-palette-line",
            color: "bg-gradient-to-br from-[#90b6d5] to-[#4f90c6]",
            emoji: "🎨",
            items: "8 Warna",
            route: "/literasi"
        }
    ];

    // Aktivitas harian
    const dailyActivities = [
        {
            id: 1,
            title: "Huruf A-E",
            category: "Literasi",
            icon: "ri-abc",
            status: "completed",
            duration: "10m",
            points: 50
        },
        {
            id: 2,
            title: "Angka 1-10",
            category: "Numerasi",
            icon: "ri-calculator-line",
            status: "current",
            duration: "15m",
            points: 75
        },
        {
            id: 3,
            title: "Doa Makan",
            category: "Islami",
            icon: "ri-moon-fill",
            status: "upcoming",
            duration: "5m",
            points: 30
        }
    ];

    // Game & Aktivitas seru
    const funActivities = [
        {
            id: 1,
            title: "Tebak Gambar",
            description: "Tebak nama benda dari gambar",
            emoji: "🖼️",
            color: "bg-gradient-to-r from-[#4f90c6] to-[#90b6d5]",
            players: "1.2k",
            rating: "4.8"
        },
        {
            id: 2,
            title: "Puzzle Huruf",
            description: "Susun huruf menjadi kata",
            emoji: "🧩",
            color: "bg-gradient-to-r from-[#355485] to-[#4f90c6]",
            players: "890",
            rating: "4.9"
        },
        {
            id: 3,
            title: "Tebak Angka",
            description: "Hitung benda dan pilih jawaban",
            emoji: "🔢",
            color: "bg-gradient-to-r from-[#2a436c] to-[#355485]",
            players: "756",
            rating: "4.7"
        }
    ];

    // Pencapaian
    const achievements = [
        {
            id: 1,
            title: "Pembaca Handal",
            description: "Level huruf",
            icon: "ri-star-fill",
            color: "from-yellow-400 to-orange-500",
            progress: 8,
            total: 10,
            badge: "🥇"
        },
        {
            id: 2,
            title: "Ahli Berhitung",
            description: "Angka 1-15",
            icon: "ri-calculator-fill",
            color: "from-green-500 to-emerald-600",
            progress: 15,
            total: 20,
            badge: "🎯"
        },
        {
            id: 3,
            title: "Anak Sholeh",
            description: "3 doa harian",
            icon: "ri-moon-fill",
            color: "from-blue-500 to-[#4f90c6]",
            progress: 3,
            total: 5,
            badge: "⭐"
        }
    ];

    // Stats
    const stats = [
        { label: "Hari", value: "5", icon: "ri-calendar-check-line" },
        { label: "Poin", value: "175", icon: "ri-coin-line" },
        { label: "Level", value: "3", icon: "ri-trophy-line" }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed': return 'ri-checkbox-circle-fill text-green-500';
            case 'current': return 'ri-play-circle-fill text-[#4f90c6]';
            case 'upcoming': return 'ri-time-line text-[#9ca3af]';
            default: return 'ri-circle-line text-[#9ca3af]';
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'bg-green-50 border-green-100';
            case 'current': return 'bg-[#f8fbff] border-[#4f90c6]';
            case 'upcoming': return 'bg-white border-[#f1f5f9]';
            default: return 'bg-white border-[#f1f5f9]';
        }
    };

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Compact Header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#355485] to-[#4f90c6] rounded-b-2xl shadow-sm">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-full"></div>
                    <div className="absolute top-3 right-10 w-10 h-10 bg-white rounded-full"></div>
                    <div className="absolute bottom-4 left-12 w-14 h-14 bg-white rounded-full"></div>
                </div>

                <div className="relative z-10 pt-6 pb-5 px-4">
                    {/* User Info & Stats */}
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <p className="text-white/80 text-xs mb-1">Selamat Belajar</p>
                            <h1 className="text-lg font-bold text-white">EduKids TK Az-Zahra</h1>
                        </div>
                        <div className="relative">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur border border-white/30">
                                <i className="ri-user-3-fill text-white text-base"></i>
                            </div>
                            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full border border-white"></div>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white/15 backdrop-blur rounded-xl p-2 text-center border border-white/20">
                                <i className={`${stat.icon} text-white text-sm mb-0.5 block`}></i>
                                <p className="text-white font-bold text-base">{stat.value}</p>
                                <p className="text-white/70 text-[10px]">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Motivational Quote */}
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <i className="ri-lightbulb-flash-line text-white text-sm"></i>
                            </div>
                            <div>
                                <p className="text-white font-medium text-xs">"Belajar hari ini, sukses esok hari!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-3 -mt-3 relative z-20">
                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    {learningCategories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white rounded-2xl p-3 shadow-sm border border-[#f1f5f9] hover:shadow-md transition-all duration-200 active:scale-95"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className={`w-10 h-10 ${category.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                                    <span className="text-lg">{category.emoji}</span>
                                </div>
                                <i className="ri-arrow-right-up-line text-[#9ca3af] text-sm"></i>
                            </div>
                            <h3 className="font-bold text-[#2a436c] text-sm mb-0.5">{category.title}</h3>
                            <p className="text-[#6b7280] text-[10px]">{category.items}</p>
                            <div className="mt-2 pt-2 border-t border-[#f8fafc]">
                                <button className="w-full bg-[#f8fafc] text-[#4f90c6] py-1.5 rounded-lg text-xs font-semibold hover:bg-[#f0f7ff] transition-colors">
                                    Mulai
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Daily Progress */}
                <section className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-base font-bold text-[#2a436c]">Progress Hari Ini</h2>
                        <div className="flex items-center space-x-1 text-[#4f90c6]">
                            <span className="text-xs font-medium">75%</span>
                            <i className="ri-arrow-right-s-line text-xs"></i>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {dailyActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className={`${getStatusColor(activity.status)} rounded-xl p-3 border transition-all duration-200 hover:shadow-sm`}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center space-x-2 flex-1">
                                        <i className={`${getStatusIcon(activity.status)} text-base`}></i>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-[#2a436c] text-sm truncate">{activity.title}</h3>
                                            <div className="flex items-center space-x-2 mt-0.5">
                                                <span className="text-[10px] text-[#4f90c6] bg-[#f0f7ff] px-1.5 py-0.5 rounded-full">
                                                    {activity.category}
                                                </span>
                                                <span className="text-[10px] text-[#9ca3af]">{activity.duration}</span>
                                                <span className="text-[10px] text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">
                                                    +{activity.points}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {activity.status === 'current' && (
                                        <button className="bg-[#4f90c6] text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#355485] transition-colors shadow-sm flex-shrink-0">
                                            Lanjut
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Game & Aktivitas Seru */}
                <section className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <h2 className="text-base font-bold text-[#2a436c]">Bermain & Belajar</h2>
                            <p className="text-[#6b7280] text-xs mt-0.5">Seru dan edukatif!</p>
                        </div>
                        <i className="ri-gamepad-fill text-[#4f90c6] text-lg"></i>
                    </div>

                    <div className="space-y-3">
                        {funActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className={`${activity.color} rounded-2xl p-4 text-white relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300`}
                            >
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur border border-white/30 shadow-sm">
                                                <span className="text-2xl">{activity.emoji}</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-lg mb-1">{activity.title}</h3>
                                                <p className="text-white/90 text-xs mb-2">{activity.description}</p>
                                                <div className="flex items-center space-x-3">
                                                    <div className="flex items-center space-x-1">
                                                        <i className="ri-user-line text-white/80 text-xs"></i>
                                                        <span className="text-white/80 text-xs">{activity.players}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <i className="ri-star-fill text-yellow-300 text-xs"></i>
                                                        <span className="text-white/80 text-xs">{activity.rating}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="bg-white text-[#355485] px-4 py-2 rounded-lg font-bold text-xs flex items-center space-x-1 hover:scale-105 transition-transform shadow-sm">
                                        <i className="ri-play-circle-fill text-sm"></i>
                                        <span>Main</span>
                                    </button>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-2 right-2 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"></div>
                                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/5 rounded-full"></div>
                                <i className="ri-sparkling-2-fill text-white/10 text-6xl absolute top-1/2 right-2 transform -translate-y-1/2"></i>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pencapaian */}
                <section>
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <h2 className="text-base font-bold text-[#2a436c]">Pencapaianku</h2>
                            <p className="text-[#6b7280] text-xs mt-0.5">Terus raih prestasi!</p>
                        </div>
                        <i className="ri-trophy-fill text-[#4f90c6] text-lg"></i>
                    </div>

                    <div className="space-y-3">
                        {achievements.map((achievement) => {
                            const progressPercent = (achievement.progress / achievement.total) * 100;
                            return (
                                <div key={achievement.id} className="bg-white rounded-2xl p-3 shadow-sm border border-[#f1f5f9] hover:shadow-md transition-all duration-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="relative">
                                            <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                                                <span className="text-xl">{achievement.badge}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <h3 className="font-bold text-[#2a436c] text-sm truncate">{achievement.title}</h3>
                                                <span className="text-[#4f90c6] font-bold text-xs flex-shrink-0 ml-2">
                                                    {achievement.progress}/{achievement.total}
                                                </span>
                                            </div>
                                            <p className="text-[#6b7280] text-xs mb-2 truncate">{achievement.description}</p>
                                            <div className="flex items-center space-x-2">
                                                <div className="flex-1 bg-[#f8fafc] rounded-full h-1.5 shadow-inner">
                                                    <div
                                                        className={`bg-gradient-to-r ${achievement.color} h-1.5 rounded-full transition-all duration-1000 ease-out`}
                                                        style={{ width: `${progressPercent}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-[10px] font-bold text-[#4f90c6]">
                                                    {Math.round(progressPercent)}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>

            <BottomNav />
        </div>
    )
}