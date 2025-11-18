import React, { useState } from 'react'

export default function Numerasi() {
  const [selectedNumber, setSelectedNumber] = useState(1)
  const [showAnimation, setShowAnimation] = useState(false)

  // Data angka 1-10
  const numbers = [
    { num: 1, emoji: "🔴", color: "from-red-400 to-red-600", items: "Apel" },
    { num: 2, emoji: "🟠", color: "from-orange-400 to-orange-600", items: "Jeruk" },
    { num: 3, emoji: "🟡", color: "from-yellow-400 to-yellow-600", items: "Pisang" },
    { num: 4, emoji: "🟢", color: "from-green-400 to-green-600", items: "Semangka" },
    { num: 5, emoji: "🔵", color: "from-blue-400 to-blue-600", items: "Balon" },
    { num: 6, emoji: "🟣", color: "from-purple-400 to-purple-600", items: "Anggur" },
    { num: 7, emoji: "🟤", color: "from-amber-600 to-amber-800", items: "Coklat" },
    { num: 8, emoji: "⚫", color: "from-gray-600 to-gray-800", items: "Kancing" },
    { num: 9, emoji: "⚪", color: "from-gray-300 to-gray-500", items: "Bola" },
    { num: 10, emoji: "🌈", color: "from-pink-400 to-purple-600", items: "Permen" }
  ]

  const currentNumber = numbers.find(n => n.num === selectedNumber)

  // Fungsi untuk memainkan suara angka
  const playNumberSound = (number) => {
    setSelectedNumber(number)
    setShowAnimation(true)

    // Reset animation
    setTimeout(() => setShowAnimation(false), 1000)

    // Di sini bisa ditambahkan API text-to-speech
    const msg = new SpeechSynthesisUtterance()
    msg.text = `Angka ${number}`
    msg.lang = 'id-ID'
    window.speechSynthesis.speak(msg)
  }

  // Generate item visual berdasarkan angka
  const renderItems = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <div
        key={index}
        className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <span className="text-2xl">{currentNumber.emoji}</span>
      </div>
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#355485] to-[#4f90c6] rounded-b-3xl shadow-lg">
        <div className="pt-6 pb-6 px-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
                <i className="ri-number-1 text-white text-lg"></i>
              </div>
              <div>
                <h1 className="text-white font-bold text-lg">Belajar Angka</h1>
                <p className="text-white/70 text-xs">TK Az-Zahra</p>
              </div>
            </div>
            <button className="bg-white/20 text-white px-3 py-2 rounded-xl text-xs font-semibold">
              <i className="ri-volume-up-line mr-1"></i>
              Suara
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Main Number Display */}
        <div className="text-center mb-8">
          <div className={`relative inline-flex items-center justify-center mb-4 ${showAnimation ? 'animate-pulse' : ''}`}>
            <div className={`w-32 h-32 bg-gradient-to-br ${currentNumber.color} rounded-3xl flex items-center justify-center shadow-2xl transform transition-transform duration-300 hover:scale-105`}>
              <span className="text-white font-bold text-6xl">{selectedNumber}</span>
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-2xl">{currentNumber.emoji}</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">Angka {selectedNumber}</h2>
          <p className="text-gray-600 text-lg">"{currentNumber.items}"</p>
        </div>

        {/* Visual Items */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-8 border border-gray-200">
          <h3 className="text-center font-semibold text-gray-800 mb-4 text-lg">
            Lihat {selectedNumber} {currentNumber.items.toLowerCase()}:
          </h3>
          <div className="flex justify-center flex-wrap gap-3 min-h-20">
            {renderItems(selectedNumber)}
          </div>
        </div>

        {/* Number Grid */}
        <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-200">
          <h3 className="text-center font-semibold text-gray-800 mb-4 text-lg">
            Pilih Angka:
          </h3>
          <div className="grid grid-cols-5 gap-3">
            {numbers.map((number) => (
              <button
                key={number.num}
                onClick={() => playNumberSound(number.num)}
                className={`aspect-square rounded-2xl flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 ${selectedNumber === number.num
                    ? `bg-gradient-to-br ${number.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                <span className="text-lg font-bold">{number.num}</span>
                <span className="text-xs mt-1">{number.emoji}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Learning Activities */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {/* Counting Exercise */}
          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-4 text-white text-center shadow-lg">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
              <i className="ri-hand-point-up-fill text-2xl"></i>
            </div>
            <h4 className="font-semibold text-sm mb-1">Hitung Benda</h4>
            <p className="text-white/80 text-xs">Tebak jumlahnya</p>
          </div>

          {/* Writing Practice */}
          <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-4 text-white text-center shadow-lg">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
              <i className="ri-edit-2-fill text-2xl"></i>
            </div>
            <h4 className="font-semibold text-sm mb-1">Tulis Angka</h4>
            <p className="text-white/80 text-xs">Latihan menulis</p>
          </div>
        </div>

        {/* Tips for Parents */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
          <div className="flex items-start space-x-3">
            <i className="ri-lightbulb-flash-fill text-yellow-500 text-lg mt-0.5"></i>
            <div>
              <h4 className="font-semibold text-yellow-800 text-sm mb-1">Tips untuk Orang Tua:</h4>
              <p className="text-yellow-700 text-xs">
                Ajak anak menghitung benda di sekitar sambil menunjuk setiap benda.
                "Satu apel, dua apel..." untuk melatih konsep bilangan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3">
        <div className="flex justify-around">
          <button className="flex flex-col items-center text-[#4f90c6]">
            <i className="ri-home-4-fill text-xl"></i>
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-[#4f90c6]">
            <i className="ri-arrow-left-line text-xl"></i>
            <span className="text-xs mt-1">Sebelum</span>
          </button>
          <button className="flex flex-col items-center text-[#4f90c6]">
            <i className="ri-arrow-right-line text-xl"></i>
            <span className="text-xs mt-1">Sesudah</span>
          </button>
          <button className="flex flex-col items-center text-[#4f90c6]">
            <i className="ri-repeat-line text-xl"></i>
            <span className="text-xs mt-1">Ulangi</span>
          </button>
        </div>
      </div>
    </div>
  )
}