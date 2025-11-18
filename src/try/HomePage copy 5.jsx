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
            color: "from-[#4f90c6] to-[#90b6d5]",
            players: "1.2k",
            rating: "4.8"
        },
        {
            id: 2,
            title: "Puzzle Huruf",
            description: "Susun huruf menjadi kata",
            emoji: "🧩",
            color: "from-[#355485] to-[#4f90c6]",
            players: "890",
            rating: "4.9"
        },
        {
            id: 3,
            title: "Tebak Angka",
            description: "Hitung benda dan pilih jawaban",
            emoji: "🔢",
            color: "from-[#2a436c] to-[#355485]",
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
            progress: 8,
            total: 10,
            badge: "🥇",
            color: "from-yellow-400 to-orange-500"
        },
        {
            id: 2,
            title: "Ahli Berhitung",
            description: "Angka 1-15",
            progress: 15,
            total: 20,
            badge: "🎯",
            color: "from-green-500 to-emerald-600"
        },
        {
            id: 3,
            title: "Anak Sholeh",
            description: "3 doa harian",
            progress: 3,
            total: 5,
            badge: "⭐",
            color: "from-blue-500 to-[#4f90c6]"
        }
    ];

    const getStatusConfig = (status) => {
        switch (status) {
            case 'completed':
                return {
                    bg: 'bg-green-50 border-green-200',
                    icon: 'ri-checkbox-circle-fill text-green-500',
                    accent: 'border-l-green-400'
                };
            case 'current':
                return {
                    bg: 'bg-blue-50 border-blue-200',
                    icon: 'ri-play-circle-fill text-blue-600',
                    accent: 'border-l-blue-500'
                };
            case 'upcoming':
                return {
                    bg: 'bg-gray-50 border-gray-200',
                    icon: 'ri-time-line text-gray-400',
                    accent: 'border-l-gray-300'
                };
            default:
                return {
                    bg: 'bg-white border-gray-200',
                    icon: 'ri-circle-line text-gray-400',
                    accent: 'border-l-gray-300'
                };
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
            {/* Clean Modern Header */}
            <div className="bg-gradient-to-br from-[#355485] to-[#4f90c6] rounded-b-3xl shadow-lg">
                <div className="pt-6 pb-6 px-4">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <div className="flex items-center space-x-2 mb-1">
                                <div className="w-8 h-8 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <i className="ri-book-2-fill text-white text-sm"></i>
                                </div>
                                <span className="text-white font-bold text-lg">EduKids</span>
                            </div>
                            <p className="text-white/80 text-xs">TK Az-Zahra</p>
                        </div>

                        <div className="relative">
                            <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30">
                                <i className="ri-user-3-fill text-white text-base"></i>
                            </div>
                            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full border border-white"></div>
                        </div>
                    </div>

                    {/* Welcome Section */}
                    <div className="text-center mb-6">
                        <h1 className="text-white font-bold text-xl mb-2">Selamat Belajar! 🌟</h1>
                        <p className="text-white/80 text-sm">Mari bermain sambil belajar hari ini</p>
                    </div>

                    {/* Progress Stats */}
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                        <div className="flex items-center justify-between">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
                                    <i className="ri-fire-fill text-white text-lg"></i>
                                </div>
                                <p className="text-white font-bold text-sm">5 Hari</p>
                                <p className="text-white/70 text-xs">Berurut</p>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
                                    <i className="ri-coin-fill text-white text-lg"></i>
                                </div>
                                <p className="text-white font-bold text-sm">175</p>
                                <p className="text-white/70 text-xs">Poin</p>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
                                    <i className="ri-trophy-fill text-white text-lg"></i>
                                </div>
                                <p className="text-white font-bold text-sm">Level 3</p>
                                <p className="text-white/70 text-xs">Prestasi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-4 -mt-4">
                {/* Quick Actions Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    {learningCategories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white rounded-2xl p-3 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 ${category.color} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                                    <span className="text-lg">{category.emoji}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-800 text-sm mb-0.5">{category.title}</h3>
                                    <p className="text-gray-500 text-[10px]">{category.items}</p>
                                </div>
                            </div>
                            <div className="mt-2 pt-2 border-t border-gray-100">
                                <button className="w-full bg-gray-50 text-gray-700 py-1.5 rounded-lg text-xs font-semibold hover:bg-gray-100 transition-colors group-hover:text-[#4f90c6]">
                                    Mulai Belajar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Today's Activities */}
                <section className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-4 bg-[#4f90c6] rounded-full"></div>
                            <h2 className="font-bold text-gray-800 text-base">Aktivitas Hari Ini</h2>
                        </div>
                        <span className="text-[#4f90c6] text-xs font-semibold bg-blue-50 px-2 py-1 rounded-full">
                            2/3 Selesai
                        </span>
                    </div>

                    <div className="space-y-2">
                        {dailyActivities.map((activity) => {
                            const config = getStatusConfig(activity.status);
                            return (
                                <div
                                    key={activity.id}
                                    className={`${config.bg} ${config.accent} border-l-4 rounded-xl p-3 border shadow-sm hover:shadow-md transition-shadow`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <i className={`${config.icon} text-base`}></i>
                                            <div>
                                                <h3 className="font-semibold text-gray-800 text-sm">{activity.title}</h3>
                                                <div className="flex items-center space-x-2 mt-0.5">
                                                    <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full">
                                                        {activity.category}
                                                    </span>
                                                    <span className="text-[10px] text-gray-400">•</span>
                                                    <span className="text-[10px] text-gray-500">{activity.duration}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <span className="text-amber-600 text-xs font-bold bg-amber-100 px-2 py-1 rounded-full">
                                                +{activity.points}
                                            </span>
                                            {activity.status === 'current' && (
                                                <button className="bg-[#4f90c6] text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md hover:bg-[#355485] transition-colors">
                                                    Lanjut
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Fun Games Carousel */}
                <section className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-4 bg-purple-500 rounded-full"></div>
                            <h2 className="font-bold text-gray-800 text-base">Game Seru</h2>
                        </div>
                        <i className="ri-gamepad-fill text-[#4f90c6] text-lg"></i>
                    </div>

                    <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide">
                        {funActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className="flex-shrink-0 w-44"
                            >
                                <div
                                    className={`bg-gradient-to-br ${activity.color} rounded-2xl p-4 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
                                >
                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
                                                <span className="text-2xl">{activity.emoji}</span>
                                            </div>
                                            <div className="text-right">
                                                <div className="flex items-center space-x-1 justify-end mb-1">
                                                    <i className="ri-star-fill text-yellow-300 text-xs"></i>
                                                    <span className="text-white text-xs font-bold">{activity.rating}</span>
                                                </div>
                                                <span className="text-white/80 text-[10px]">{activity.players}</span>
                                            </div>
                                        </div>

                                        <h3 className="font-bold text-lg mb-1">{activity.title}</h3>
                                        <p className="text-white/90 text-xs mb-4">{activity.description}</p>

                                        <button className="w-full bg-white text-[#355485] py-2 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors shadow-md flex items-center justify-center space-x-1">
                                            <i className="ri-play-circle-fill"></i>
                                            <span>Main Sekarang</span>
                                        </button>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute top-2 right-2 w-12 h-12 bg-white/10 rounded-full"></div>
                                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/5 rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Achievements Section */}
                <section className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-4 bg-amber-500 rounded-full"></div>
                            <h2 className="font-bold text-gray-800 text-base">Pencapaian</h2>
                        </div>
                        <i className="ri-trophy-fill text-[#4f90c6] text-lg"></i>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        {achievements.map((achievement) => {
                            const progressPercent = (achievement.progress / achievement.total) * 100;
                            return (
                                <div
                                    key={achievement.id}
                                    className="bg-white rounded-2xl p-3 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center shadow-md`}>
                                            <span className="text-2xl">{achievement.badge}</span>
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <h3 className="font-bold text-gray-800 text-sm">{achievement.title}</h3>
                                                <span className="text-[#4f90c6] font-bold text-xs">
                                                    {achievement.progress}/{achievement.total}
                                                </span>
                                            </div>

                                            <p className="text-gray-500 text-xs mb-2">{achievement.description}</p>

                                            <div className="flex items-center space-x-2">
                                                <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                                    <div
                                                        className={`bg-gradient-to-r ${achievement.color} h-1.5 rounded-full transition-all duration-1000 ease-out`}
                                                        style={{ width: `${progressPercent}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-[10px] font-bold text-gray-500">
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

                {/* Motivational Banner */}
                <div className="bg-gradient-to-r from-[#355485] to-[#4f90c6] rounded-2xl p-4 text-center shadow-lg">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                        <i className="ri-heart-fill text-red-400"></i>
                        <p className="font-bold text-white text-sm">Terus Semangat Belajar!</p>
                        <i className="ri-heart-fill text-red-400"></i>
                    </div>
                    <p className="text-white/80 text-xs">Setiap langkah kecil membawa pada kesuksesan besar!</p>
                </div>
            </div>

            <BottomNav />
        </div>
    )
}