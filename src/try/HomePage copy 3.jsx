import React from 'react'
import BottomNav from '../components/BottomNav'

export default function HomePage() {
    // Data kategori pembelajaran
    const learningCategories = [
        {
            id: 1,
            title: "Baca Huruf",
            icon: "ri-abc",
            color: "bg-[#4f90c6]",
            gradient: "from-[#4f90c6] to-[#355485]",
            route: "/literasi",
            subtitle: "A-Z"
        },
        {
            id: 2,
            title: "Hitung Angka",
            icon: "ri-calculator-line",
            color: "bg-[#355485]",
            gradient: "from-[#355485] to-[#2a436c]",
            route: "/numerasi",
            subtitle: "1-20"
        },
        {
            id: 3,
            title: "Doa Harian",
            icon: "ri-moon-fill",
            color: "bg-[#2a436c]",
            gradient: "from-[#2a436c] to-[#4f90c6]",
            route: "/islamic",
            subtitle: "5 doa"
        },
        {
            id: 4,
            title: "Warna & Bentuk",
            icon: "ri-palette-line",
            color: "bg-[#90b6d5]",
            gradient: "from-[#90b6d5] to-[#4f90c6]",
            route: "/literasi",
            subtitle: "8 warna"
        }
    ];

    // Aktivitas terbaru
    const recentActivities = [
        {
            id: 1,
            title: "Huruf A-D",
            category: "Literasi",
            icon: "ri-abc",
            time: "Baru selesai",
            color: "text-[#4f90c6]",
            bgColor: "bg-[#f0f7ff]"
        },
        {
            id: 2,
            title: "Angka 1-5",
            category: "Numerasi",
            icon: "ri-calculator-line",
            time: "Siap dimulai",
            color: "text-[#355485]",
            bgColor: "bg-[#f8fafc]"
        },
        {
            id: 3,
            title: "Doa Makan",
            category: "Islami",
            icon: "ri-moon-fill",
            time: "Besok",
            color: "text-[#2a436c]",
            bgColor: "bg-[#f0f7ff]"
        }
    ];

    // Game & Aktivitas seru
    const funActivities = [
        {
            id: 1,
            title: "Tebak Gambar",
            description: "Tebak nama benda dari gambar",
            icon: "ri-image-line",
            emoji: "🖼️",
            color: "bg-gradient-to-r from-[#4f90c6] to-[#90b6d5]",
            status: "Populer"
        },
        {
            id: 2,
            title: "Puzzle Huruf",
            description: "Susun huruf menjadi kata",
            icon: "ri-puzzle-line",
            emoji: "🧩",
            color: "bg-gradient-to-r from-[#355485] to-[#4f90c6]",
            status: "Baru"
        },
        {
            id: 3,
            title: "Tebak Angka",
            description: "Hitung benda dan pilih jawaban",
            icon: "ri-question-line",
            emoji: "🔢",
            color: "bg-gradient-to-r from-[#2a436c] to-[#355485]",
            status: "Favorit"
        }
    ];

    // Pencapaian
    const achievements = [
        {
            id: 1,
            title: "Pembaca Handal",
            description: "Baca semua huruf",
            icon: "ri-star-fill",
            color: "from-yellow-400 to-orange-500",
            progress: 8,
            total: 10
        },
        {
            id: 2,
            title: "Ahli Berhitung",
            description: "Hitung 1-20",
            icon: "ri-calculator-fill",
            color: "from-green-500 to-emerald-600",
            progress: 12,
            total: 20
        },
        {
            id: 3,
            title: "Anak Sholeh",
            description: "Hafal doa harian",
            icon: "ri-moon-fill",
            color: "from-blue-500 to-[#4f90c6]",
            progress: 3,
            total: 5
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Header Baru yang Lebih Menarik */}
            <div className="relative overflow-hidden">
                {/* Background dengan Ornamen */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-[#4f90c6] rounded-full -translate-x-16 -translate-y-16 opacity-10"></div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#355485] rounded-full translate-x-12 -translate-y-12 opacity-10"></div>
                    <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-[#90b6d5] rounded-full -translate-x-1/2 translate-y-20 opacity-5"></div>
                </div>

                <div className="relative z-10 pt-8 pb-6 px-4">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <div className="w-8 h-8 bg-[#4f90c6] rounded-2xl flex items-center justify-center">
                                    <i className="ri-book-2-fill text-white text-sm"></i>
                                </div>
                                <span className="text-lg font-bold text-[#355485]">EduKids</span>
                            </div>
                            <h1 className="text-2xl font-bold text-[#2a436c]">Halo, Teman Kecil! 👋</h1>
                            <p className="text-[#6b7280] text-sm mt-1">Yuk belajar sambil bermain hari ini!</p>
                        </div>
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#4f90c6] to-[#355485] rounded-2xl flex items-center justify-center shadow-lg">
                                <i className="ri-user-3-fill text-white text-lg"></i>
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                        </div>
                    </div>

                    {/* Welcome Card */}
                    <div className="bg-gradient-to-r from-[#355485] to-[#4f90c6] rounded-2xl p-4 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm opacity-90 mb-1">Selamat Datang di</p>
                                <h3 className="text-lg font-bold">TK Az-Zahra Learning</h3>
                                <p className="text-xs opacity-80 mt-1">Tempat belajar yang menyenangkan!</p>
                            </div>
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                <i className="ri-heart-3-fill text-2xl text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-4 space-y-6">
                {/* Menu Cepat */}
                <section>
                    <h2 className="text-lg font-bold text-[#355485] mb-4">Mulai Belajar</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {learningCategories.map((category) => (
                            <div
                                key={category.id}
                                className="bg-white rounded-2xl p-4 border border-[#e5e7eb] shadow-sm hover:shadow-md transition-shadow active:scale-95"
                            >
                                <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-3 shadow-md`}>
                                    <i className={`${category.icon} text-white text-xl`}></i>
                                </div>
                                <h3 className="font-bold text-[#355485]">{category.title}</h3>
                                <p className="text-xs text-[#6b7280] mt-1">{category.subtitle}</p>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-[10px] text-[#4f90c6] bg-[#f0f7ff] px-2 py-1 rounded-full">
                                        Mulai
                                    </span>
                                    <i className="ri-arrow-right-s-line text-[#4f90c6]"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Aktivitas Hari Ini */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-[#355485]">Aktivitas Hari Ini</h2>
                        <span className="text-xs text-[#4f90c6] bg-[#f0f7ff] px-2 py-1 rounded-full">
                            {recentActivities.length} aktivitas
                        </span>
                    </div>

                    <div className="space-y-3">
                        {recentActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-[#e5e7eb]"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`w-12 h-12 ${activity.bgColor} rounded-2xl flex items-center justify-center`}>
                                        <i className={`${activity.icon} ${activity.color} text-lg`}></i>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-[#355485]">{activity.title}</h3>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <span className="text-xs text-[#4f90c6] bg-[#f0f7ff] px-2 py-1 rounded-full">
                                                {activity.category}
                                            </span>
                                            <span className="text-xs text-[#9ca3af]">{activity.time}</span>
                                        </div>
                                    </div>
                                    <button className={`w-10 h-10 rounded-2xl flex items-center justify-center ${activity.time === "Baru selesai" ? "bg-green-100 text-green-600" : "bg-[#f0f7ff] text-[#4f90c6]"
                                        }`}>
                                        <i className={`${activity.time === "Baru selesai" ? "ri-check-line" : "ri-play-line"
                                            }`}></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Game & Aktivitas Seru (Bagian yang kamu suka) */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-[#355485]">Bermain & Belajar 🎮</h2>
                        <i className="ri-gamepad-line text-[#4f90c6] text-xl"></i>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        {funActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className={`${activity.color} rounded-2xl p-4 text-white relative overflow-hidden shadow-lg`}
                            >
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm mt-1">
                                                <span className="text-2xl">{activity.emoji}</span>
                                            </div>
                                            <div>
                                                <div className="flex items-center space-x-2 mb-1">
                                                    <h3 className="font-bold text-lg">{activity.title}</h3>
                                                    <span className="text-xs bg-white/30 px-2 py-1 rounded-full backdrop-blur-sm">
                                                        {activity.status}
                                                    </span>
                                                </div>
                                                <p className="text-white/90 text-sm">{activity.description}</p>
                                                <button className="mt-3 bg-white text-[#355485] px-4 py-2 rounded-lg font-semibold text-sm flex items-center hover:scale-105 transition-transform">
                                                    <i className="ri-play-circle-line mr-2"></i>
                                                    Main Sekarang
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full"></div>
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/5 rounded-full"></div>
                                <i className="ri-star-s-fill text-white/10 text-6xl absolute -top-2 -left-2"></i>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pencapaian */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-[#355485]">Pencapaianku 🏆</h2>
                        <i className="ri-trophy-line text-[#4f90c6] text-xl"></i>
                    </div>

                    <div className="space-y-3">
                        {achievements.map((achievement) => (
                            <div key={achievement.id} className="bg-white rounded-2xl p-4 shadow-sm border border-[#e5e7eb]">
                                <div className="flex items-center space-x-3">
                                    <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center shadow-md`}>
                                        <i className={`${achievement.icon} text-white text-lg`}></i>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-[#355485]">{achievement.title}</h3>
                                        <p className="text-xs text-[#6b7280] mt-1">{achievement.description}</p>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <div className="flex-1 bg-[#f9fafb] rounded-full h-2">
                                                <div
                                                    className={`bg-gradient-to-r ${achievement.color} h-2 rounded-full transition-all duration-500`}
                                                    style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-xs text-[#355485] font-medium">
                                                {achievement.progress}/{achievement.total}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <BottomNav />
        </div>
    )
}