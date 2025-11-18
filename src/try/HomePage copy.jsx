import React from 'react'
import BottomNav from '../components/BottomNav'

export default function HomePage() {
    // Data materi pembelajaran
    const learningModules = [
        {
            id: 1,
            title: "Mengenal Huruf",
            icon: "ri-abc",
            color: "bg-[#4f90c6]",
            progress: 75,
            route: "/literasi"
        },
        {
            id: 2,
            title: "Berhitung Angka",
            icon: "ri-number-1",
            color: "bg-[#355485]",
            progress: 60,
            route: "/numerasi"
        },
        {
            id: 3,
            title: "Doa Harian",
            icon: "ri-moon-fill",
            color: "bg-[#2a436c]",
            progress: 45,
            route: "/islamic"
        },
        {
            id: 4,
            title: "Warna & Bentuk",
            icon: "ri-palette-line",
            color: "bg-[#90b6d5]",
            progress: 30,
            route: "/literasi"
        }
    ];

    const dailyActivities = [
        {
            id: 1,
            title: "Baca Huruf A-I",
            time: "10 menit",
            completed: true
        },
        {
            id: 2,
            title: "Hitung 1-10",
            time: "15 menit",
            completed: true
        },
        {
            id: 3,
            title: "Doa Makan",
            time: "5 menit",
            completed: false
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f0f7ff] to-[#e8f2ff] pb-20">
            {/* Header */}
            <div className="bg-white rounded-b-3xl shadow-sm pb-4">
                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-[#355485]">Selamat Pagi! 👋</h1>
                            <p className="text-[#6b7280] text-sm">Mari belajar sambil bermain</p>
                        </div>
                        <div className="w-12 h-12 bg-[#cbdde9] rounded-2xl flex items-center justify-center">
                            <i className="ri-user-3-fill text-[#355485] text-xl"></i>
                        </div>
                    </div>
                </div>

                {/* Stats Card */}
                <div className="px-4">
                    <div className="bg-gradient-to-r from-[#355485] to-[#4f90c6] rounded-2xl p-4 text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm opacity-90">Progress Belajar</p>
                                <p className="text-2xl font-bold mt-1">65%</p>
                                <p className="text-xs opacity-80 mt-1">Terus semangat!</p>
                            </div>
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                <i className="ri-trophy-fill text-2xl"></i>
                            </div>
                        </div>
                        <div className="w-full bg-white/30 rounded-full h-2 mt-3">
                            <div
                                className="bg-white rounded-full h-2 transition-all duration-500"
                                style={{ width: '65%' }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-4 space-y-6">
                {/* Aktivitas Hari Ini */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-[#355485]">Aktivitas Hari Ini</h2>
                        <span className="text-xs text-[#4f90c6] bg-[#e8f2ff] px-2 py-1 rounded-full">
                            2/3 selesai
                        </span>
                    </div>

                    <div className="space-y-3">
                        {dailyActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-[#e5e7eb]"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.completed ? 'bg-green-100' : 'bg-[#f9fafb]'
                                            }`}>
                                            <i className={`${activity.completed ? 'ri-checkbox-circle-fill text-green-500' : 'ri-checkbox-blank-circle-line text-[#9ca3af]'
                                                }`}></i>
                                        </div>
                                        <div>
                                            <h3 className={`font-medium ${activity.completed ? 'text-[#6b7280] line-through' : 'text-[#355485]'
                                                }`}>
                                                {activity.title}
                                            </h3>
                                            <p className="text-xs text-[#9ca3af]">{activity.time}</p>
                                        </div>
                                    </div>
                                    {!activity.completed && (
                                        <button className="bg-[#4f90c6] text-white px-3 py-1 rounded-lg text-xs font-medium">
                                            Mulai
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Materi Pembelajaran */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-[#355485]">Materi Pembelajaran</h2>
                        <i className="ri-arrow-right-s-line text-[#4f90c6]"></i>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {learningModules.map((module) => (
                            <div
                                key={module.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-[#e5e7eb] active:scale-95 transition-transform"
                            >
                                <div className={`w-12 h-12 ${module.color} rounded-2xl flex items-center justify-center mb-3`}>
                                    <i className={`${module.icon} text-white text-xl`}></i>
                                </div>
                                <h3 className="font-semibold text-[#355485] text-sm mb-2">{module.title}</h3>
                                <div className="flex items-center space-x-2">
                                    <div className="w-full bg-[#f9fafb] rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${module.color.replace('bg-', 'bg-')} transition-all duration-500`}
                                            style={{ width: `${module.progress}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-xs text-[#6b7280] font-medium">{module.progress}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Game & Aktivitas Menyenangkan */}
                <section>
                    <h2 className="text-lg font-bold text-[#355485] mb-4">Bermain & Belajar</h2>

                    <div className="bg-gradient-to-br from-[#90b6d5] to-[#cbdde9] rounded-2xl p-4 text-white overflow-hidden relative">
                        <div className="relative z-10">
                            <h3 className="font-bold text-lg">Teka-teki Huruf</h3>
                            <p className="text-sm opacity-90 mt-1">Tebak nama benda dari gambar!</p>
                            <button className="bg-white text-[#355485] px-4 py-2 rounded-lg font-semibold mt-3 text-sm flex items-center">
                                <i className="ri-play-circle-line mr-2"></i>
                                Main Sekarang
                            </button>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-2 right-2 w-20 h-20 bg-white/20 rounded-full"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>

                        {/* Floating Icons */}
                        <i className="ri-abc text-4xl text-white/30 absolute top-4 right-6"></i>
                        <i className="ri-number-1 text-3xl text-white/30 absolute bottom-6 right-10"></i>
                    </div>
                </section>

                {/* Pencapaian */}
                <section>
                    <h2 className="text-lg font-bold text-[#355485] mb-4">Pencapaianku</h2>

                    <div className="flex space-x-4 overflow-x-auto pb-2">
                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e5e7eb] min-w-[140px] flex-shrink-0">
                            <div className="w-10 h-10 bg-yellow-100 rounded-2xl flex items-center justify-center mb-2">
                                <i className="ri-star-fill text-yellow-500"></i>
                            </div>
                            <h3 className="font-semibold text-[#355485] text-sm">Pembaca Handal</h3>
                            <p className="text-xs text-[#6b7280]">Baca 50 huruf</p>
                        </div>
a
                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e5e7eb] min-w-[140px] flex-shrink-0">
                            <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center mb-2">
                                <i className="ri-trophy-fill text-green-500"></i>
                            </div>
                            <h3 className="font-semibold text-[#355485] text-sm">Ahli Berhitung</h3>
                            <p className="text-xs text-[#6b7280]">Hitung 1-20</p>
                        </div>

                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e5e7eb] min-w-[140px] flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center mb-2">
                                <i className="ri-heart-fill text-red-400"></i>
                            </div>
                            <h3 className="font-semibold text-[#355485] text-sm">Anak Sholeh</h3>
                            <p className="text-xs text-[#6b7280]">Hafal 5 doa</p>
                        </div>
                    </div>
                </section>
            </div>

            <BottomNav />
        </div>
    )
}