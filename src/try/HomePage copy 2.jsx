import React from 'react'
import BottomNav from '../components/BottomNav'

export default function HomePage() {
    // Data kategori pembelajaran
    const learningCategories = [
        {
            id: 1,
            title: "Baca Huruf",
            icon: "ri-abc",
            color: "from-[#4f90c6] to-[#355485]",
            bgColor: "bg-[#f0f7ff]",
            route: "/literasi"
        },
        {
            id: 2,
            title: "Hitung Angka",
            icon: "ri-calculator-line",
            color: "from-[#355485] to-[#2a436c]",
            bgColor: "bg-[#f8fafc]",
            route: "/numerasi"
        },
        {
            id: 3,
            title: "Doa Harian",
            icon: "ri-moon-fill",
            color: "from-[#2a436c] to-[#4f90c6]",
            bgColor: "bg-[#f0f7ff]",
            route: "/islamic"
        },
        {
            id: 4,
            title: "Warna & Bentuk",
            icon: "ri-palette-line",
            color: "from-[#90b6d5] to-[#4f90c6]",
            bgColor: "bg-[#f8fafc]",
            route: "/literasi"
        }
    ];

    // Aktivitas terbaru
    const recentActivities = [
        {
            id: 1,
            title: "Mengenal Huruf A-D",
            category: "Literasi",
            icon: "ri-abc",
            time: "Hari ini",
            color: "text-[#4f90c6]"
        },
        {
            id: 2,
            title: "Berhitung 1-5",
            category: "Numerasi",
            icon: "ri-calculator-line",
            time: "Kemarin",
            color: "text-[#355485]"
        },
        {
            id: 3,
            title: "Doa Sebelum Makan",
            category: "Islami",
            icon: "ri-moon-fill",
            time: "2 hari lalu",
            color: "text-[#2a436c]"
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
            color: "bg-gradient-to-r from-[#4f90c6] to-[#90b6d5]"
        },
        {
            id: 2,
            title: "Puzzle Huruf",
            description: "Susun huruf menjadi kata",
            icon: "ri-puzzle-line",
            emoji: "🧩",
            color: "bg-gradient-to-r from-[#355485] to-[#4f90c6]"
        },
        {
            id: 3,
            title: "Tebak Angka",
            description: "Hitung benda dan pilih jawaban",
            icon: "ri-question-line",
            emoji: "🔢",
            color: "bg-gradient-to-r from-[#2a436c] to-[#355485]"
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#355485] to-[#4f90c6] rounded-b-3xl text-white pt-8 pb-6 px-4">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Selamat Belajar! 🌟</h1>
                        <p className="text-[#cbdde9] text-sm mt-1">Mari bermain sambil belajar</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border-2 border-white/30">
                        <i className="ri-user-3-fill text-xl"></i>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/20 rounded-2xl p-3 text-center backdrop-blur-sm">
                        <i className="ri-book-open-line text-lg mb-1 block"></i>
                        <p className="font-bold text-sm">5</p>
                        <p className="text-xs opacity-80">Materi</p>
                    </div>
                    <div className="bg-white/20 rounded-2xl p-3 text-center backdrop-blur-sm">
                        <i className="ri-trophy-line text-lg mb-1 block"></i>
                        <p className="font-bold text-sm">3</p>
                        <p className="text-xs opacity-80">Pencapaian</p>
                    </div>
                    <div className="bg-white/20 rounded-2xl p-3 text-center backdrop-blur-sm">
                        <i className="ri-gamepad-line text-lg mb-1 block"></i>
                        <p className="font-bold text-sm">8</p>
                        <p className="text-xs opacity-80">Permainan</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-4 space-y-6 -mt-2">
                {/* Kategori Pembelajaran */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-[#355485]">Kategori Belajar</h2>
                        <i className="ri-arrow-right-s-line text-[#4f90c6] text-xl"></i>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {learningCategories.map((category) => (
                            <div
                                key={category.id}
                                className={`${category.bgColor} rounded-2xl p-4 border border-[#e5e7eb] active:scale-95 transition-transform duration-200 shadow-sm`}
                            >
                                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-3 shadow-md`}>
                                    <i className={`${category.icon} text-white text-xl`}></i>
                                </div>
                                <h3 className="font-bold text-[#355485] text-sm">{category.title}</h3>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xs text-[#6b7280]">Mulai belajar</span>
                                    <i className="ri-arrow-right-s-line text-[#4f90c6]"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Aktivitas Terbaru */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-[#355485]">Aktivitas Terbaru</h2>
                        <span className="text-xs text-[#4f90c6] bg-[#f0f7ff] px-2 py-1 rounded-full">
                            Terbaru
                        </span>
                    </div>

                    <div className="space-y-3">
                        {recentActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-[#e5e7eb]"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className={`w-10 h-10 ${activity.color} bg-opacity-10 rounded-2xl flex items-center justify-center`}>
                                        <i className={`${activity.icon} ${activity.color} text-lg`}></i>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-[#355485] text-sm">{activity.title}</h3>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <span className="text-xs text-[#4f90c6] bg-[#f0f7ff] px-2 py-1 rounded-full">
                                                {activity.category}
                                            </span>
                                            <span className="text-xs text-[#9ca3af]">{activity.time}</span>
                                        </div>
                                    </div>
                                    <button className="w-8 h-8 bg-[#f0f7ff] rounded-full flex items-center justify-center">
                                        <i className="ri-repeat-line text-[#4f90c6] text-sm"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Game & Aktivitas Seru */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-[#355485]">Bermain & Belajar</h2>
                        <i className="ri-gamepad-line text-[#4f90c6] text-xl"></i>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        {funActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className={`${activity.color} rounded-2xl p-4 text-white relative overflow-hidden shadow-md`}
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                            <span className="text-2xl">{activity.emoji}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg">{activity.title}</h3>
                                            <p className="text-white/90 text-sm">{activity.description}</p>
                                        </div>
                                    </div>
                                    <button className="mt-3 bg-white text-[#355485] px-4 py-2 rounded-lg font-semibold text-sm flex items-center">
                                        <i className="ri-play-circle-line mr-2"></i>
                                        Main Sekarang
                                    </button>
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

                    <div className="flex space-x-4 overflow-x-auto pb-4">
                        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-4 min-w-[140px] flex-shrink-0 shadow-md">
                            <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center mb-2 backdrop-blur-sm">
                                <i className="ri-star-fill text-white"></i>
                            </div>
                            <h3 className="font-bold text-white text-sm">Pembaca Handal</h3>
                            <p className="text-white/80 text-xs mt-1">Baca semua huruf</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 min-w-[140px] flex-shrink-0 shadow-md">
                            <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center mb-2 backdrop-blur-sm">
                                <i className="ri-calculator-fill text-white"></i>
                            </div>
                            <h3 className="font-bold text-white text-sm">Ahli Berhitung</h3>
                            <p className="text-white/80 text-xs mt-1">Hitung 1-20</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500 to-[#4f90c6] rounded-2xl p-4 min-w-[140px] flex-shrink-0 shadow-md">
                            <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center mb-2 backdrop-blur-sm">
                                <i className="ri-moon-fill text-white"></i>
                            </div>
                            <h3 className="font-bold text-white text-sm">Anak Sholeh</h3>
                            <p className="text-white/80 text-xs mt-1">Hafal doa harian</p>
                        </div>
                    </div>
                </section>

                {/* Tips untuk Orang Tua */}
                <section>
                    <div className="bg-gradient-to-r from-[#90b6d5] to-[#cbdde9] rounded-2xl p-4 text-[#2a436c]">
                        <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                                <i className="ri-lightbulb-flash-fill text-xl"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Tips Orang Tua</h3>
                                <p className="text-sm mt-1 opacity-90">
                                    dampingi anak saat belajar dan beri pujian untuk setiap pencapaiannya!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <BottomNav />
        </div>
    )
}