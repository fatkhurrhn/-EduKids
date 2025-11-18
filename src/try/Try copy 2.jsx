import React, { useState, useEffect } from 'react'

export default function Numerasi() {
  const [activeTab, setActiveTab] = useState('pengenalan')
  const [selectedNumber, setSelectedNumber] = useState(1)
  const [countAnswer, setCountAnswer] = useState('')
  const [patternAnswer, setPatternAnswer] = useState('')
  const [showFeedback, setShowFeedback] = useState('')
  const [score, setScore] = useState(0)

  // Data untuk pengenalan angka dengan gambar hewan
  const numbers = [
    {
      num: 1,
      emoji: "🐘",
      color: "from-red-400 to-red-600",
      name: "Satu",
      items: "Gajah",
      image: "/img/gajah.jpg",
      sound: "gajah"
    },
    {
      num: 2,
      emoji: "🐰",
      color: "from-orange-400 to-orange-600",
      name: "Dua",
      items: "Kelinci",
      image: "/img/kelinci.jpg",
      sound: "kelinci"
    },
    {
      num: 3,
      emoji: "🐼",
      color: "from-yellow-400 to-yellow-600",
      name: "Tiga",
      items: "Panda",
      image: "/img/panda.jpg",
      sound: "panda"
    },
    {
      num: 4,
      emoji: "🐯",
      color: "from-green-400 to-green-600",
      name: "Empat",
      items: "Harimau",
      image: "/img/harimau.jpg",
      sound: "harimau"
    },
    {
      num: 5,
      emoji: "🦁",
      color: "from-blue-400 to-blue-600",
      name: "Lima",
      items: "Singa",
      image: "/img/singa.jpg",
      sound: "singa"
    },
    {
      num: 6,
      emoji: "🐵",
      color: "from-purple-400 to-purple-600",
      name: "Enam",
      items: "Monyet",
      image: "/img/monyet.jpg",
      sound: "monyet"
    },
    {
      num: 7,
      emoji: "🐧",
      color: "from-pink-400 to-pink-600",
      name: "Tujuh",
      items: "Penguin",
      image: "/img/penguin.jpg",
      sound: "penguin"
    },
    {
      num: 8,
      emoji: "🐶",
      color: "from-indigo-400 to-indigo-600",
      name: "Delapan",
      items: "Anjing",
      image: "/img/anjing.jpg",
      sound: "anjing"
    },
    {
      num: 9,
      emoji: "🐱",
      color: "from-teal-400 to-teal-600",
      name: "Sembilan",
      items: "Kucing",
      image: "/img/kucing.jpg",
      sound: "kucing"
    },
    {
      num: 10,
      emoji: "🐻",
      color: "from-cyan-400 to-cyan-600",
      name: "Sepuluh",
      items: "Beruang",
      image: "/img/beruang.jpg",
      sound: "beruang"
    }
  ]

  // Soal berhitung sederhana dengan buah dan benda
  const countingQuestions = [
    {
      id: 1,
      question: "Ada berapa apel?",
      image: "🍎",
      count: 3,
      answer: 3,
      sound: "apel",
      options: [2, 3, 4, 5]
    },
    {
      id: 2,
      question: "Hitung jumlah bola?",
      image: "⚽",
      count: 2,
      answer: 2,
      sound: "bola",
      options: [1, 2, 3, 4]
    },
    {
      id: 3,
      question: "Berapa banyak bintang?",
      image: "⭐",
      count: 4,
      answer: 4,
      sound: "bintang",
      options: [3, 4, 5, 6]
    },
    {
      id: 4,
      question: "Ada berapa jeruk?",
      image: "🍊",
      count: 5,
      answer: 5,
      sound: "jeruk",
      options: [4, 5, 6, 7]
    },
    {
      id: 5,
      question: "Hitung jumlah pisang?",
      image: "🍌",
      count: 3,
      answer: 3,
      sound: "pisang",
      options: [2, 3, 4, 5]
    }
  ]

  // Soal pola dasar
  const patternQuestions = [
    {
      id: 1,
      pattern: ["🔴", "🟡", "🔴", "🟡", "🔴", "?"],
      options: ["🔴", "🟡", "🟢", "🔵"],
      answer: "🟡",
      sound: "pola warna"
    },
    {
      id: 2,
      pattern: ["🐱", "🐶", "🐱", "🐶", "🐱", "?"],
      options: ["🐱", "🐶", "🐰", "🐻"],
      answer: "🐶",
      sound: "pola hewan"
    },
    {
      id: 3,
      pattern: ["⭐", "⭐", "🌙", "⭐", "⭐", "?"],
      options: ["⭐", "🌙", "🌟", "☀️"],
      answer: "🌙",
      sound: "pola bintang bulan"
    },
    {
      id: 4,
      pattern: ["🔺", "🔻", "🔺", "🔻", "🔺", "?"],
      options: ["🔺", "🔻", "🟦", "🟩"],
      answer: "🔻",
      sound: "pola segitiga"
    }
  ]

  const currentNumber = numbers.find(n => n.num === selectedNumber)
  const [currentCountingQuestion, setCurrentCountingQuestion] = useState(0)
  const [currentPatternQuestion, setCurrentPatternQuestion] = useState(0)

  // Fungsi untuk memainkan suara
  const playSound = (text) => {
    const msg = new SpeechSynthesisUtterance()
    msg.text = text
    msg.lang = 'id-ID'
    msg.rate = 0.8 // Lebih lambat untuk anak-anak
    window.speechSynthesis.speak(msg)
  }

  const playNumberSound = (number) => {
    setSelectedNumber(number)
    const numberData = numbers.find(n => n.num === number)
    playSound(`Angka ${number}, ${numberData.items}, ${numberData.name}`)
  }

  const playItemSound = (item) => {
    playSound(item)
  }

  const playCountingSound = () => {
    const question = countingQuestions[currentCountingQuestion]
    playSound(`${question.question} ${question.sound}`)
  }

  const playPatternSound = () => {
    const question = patternQuestions[currentPatternQuestion]
    playSound(`Lanjutkan pola ${question.sound}`)
  }

  const checkCountingAnswer = (answer) => {
    const correct = countingQuestions[currentCountingQuestion].answer === answer
    setShowFeedback(correct ? 'correct' : 'wrong')

    if (correct) {
      setScore(score + 10)
      playSound("Benar! Hebat!")
      setTimeout(() => {
        setCurrentCountingQuestion((prev) => (prev + 1) % countingQuestions.length)
        setShowFeedback('')
        // Mainkan suara soal berikutnya
        setTimeout(() => playCountingSound(), 500)
      }, 2000)
    } else {
      playSound("Coba lagi ya")
      setTimeout(() => setShowFeedback(''), 2000)
    }
  }

  const checkPatternAnswer = (answer) => {
    const correct = patternQuestions[currentPatternQuestion].answer === answer
    setShowFeedback(correct ? 'correct' : 'wrong')

    if (correct) {
      setScore(score + 10)
      playSound("Pintar! Polanya benar!")
      setTimeout(() => {
        setCurrentPatternQuestion((prev) => (prev + 1) % patternQuestions.length)
        setShowFeedback('')
        // Mainkan suara soal berikutnya
        setTimeout(() => playPatternSound(), 500)
      }, 2000)
    } else {
      playSound("Perhatikan polanya lagi")
      setTimeout(() => setShowFeedback(''), 2000)
    }
  }

  const renderItems = (count, emoji) => {
    return Array.from({ length: count }, (_, index) => (
      <button
        key={index}
        onClick={() => playItemSound(currentNumber.items)}
        className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce hover:scale-110 transition-transform duration-200"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <span className="text-3xl">{emoji}</span>
      </button>
    ))
  }

  const renderCountingItems = (count, emoji) => {
    return Array.from({ length: count }, (_, index) => (
      <div
        key={index}
        className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce"
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <span className="text-2xl">{emoji}</span>
      </div>
    ))
  }

  // Mainkan suara saat tab berubah
  useEffect(() => {
    if (activeTab === 'pengenalan') {
      setTimeout(() => playNumberSound(selectedNumber), 500)
    } else if (activeTab === 'berhitung') {
      setTimeout(() => playCountingSound(), 500)
    } else if (activeTab === 'pola') {
      setTimeout(() => playPatternSound(), 500)
    }
  }, [activeTab])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#355485] to-[#4f90c6] rounded-b-3xl shadow-2xl">
        <div className="pt-6 pb-4 px-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur">
                <i className="ri-calculator-fill text-white text-xl"></i>
              </div>
              <div>
                <h1 className="text-white font-bold text-xl">Belajar Numerasi</h1>
                <p className="text-white/70 text-xs">TK Az-Zahra</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 backdrop-blur rounded-2xl px-3 py-2 text-center">
                <p className="text-white font-bold text-lg">{score}</p>
                <p className="text-white/70 text-xs">Poin</p>
              </div>
              <button
                onClick={() => {
                  if (activeTab === 'pengenalan') playNumberSound(selectedNumber)
                  else if (activeTab === 'berhitung') playCountingSound()
                  else if (activeTab === 'pola') playPatternSound()
                }}
                className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur hover:bg-white/30 transition-colors"
              >
                <i className="ri-volume-up-line text-white text-lg"></i>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-2 mb-2">
            {[
              { id: 'pengenalan', label: 'Angka', icon: 'ri-number-1' },
              { id: 'berhitung', label: 'Berhitung', icon: 'ri-calculator-line' },
              { id: 'pola', label: 'Pola', icon: 'ri-loop-right-line' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-white text-[#355485] shadow-lg'
                    : 'bg-white/20 text-white backdrop-blur hover:bg-white/30'
                  }`}
              >
                <i className={`${tab.icon} mr-1`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Tab Content */}
        {activeTab === 'pengenalan' && (
          <div className="space-y-6">
            {/* Main Number Display */}
            <div className="text-center">
              <button
                onClick={() => playNumberSound(selectedNumber)}
                className="relative inline-flex items-center justify-center mb-4 transform hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-36 h-36 bg-gradient-to-br ${currentNumber.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                  <span className="text-white font-bold text-7xl">{selectedNumber}</span>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <span className="text-3xl">{currentNumber.emoji}</span>
                </div>
              </button>

              <h2 className="text-3xl font-bold text-gray-800 mb-2">Angka {selectedNumber}</h2>
              <button
                onClick={() => playSound(currentNumber.name)}
                className="text-gray-600 text-lg mb-1 hover:text-[#355485] transition-colors"
              >
                "{currentNumber.name}"
              </button>
              <button
                onClick={() => playItemSound(currentNumber.items)}
                className="text-gray-500 text-sm hover:text-[#355485] transition-colors"
              >
                {currentNumber.items}
              </button>
            </div>

            {/* Visual Items */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200">
              <h3 className="text-center font-semibold text-gray-800 mb-4 text-lg">
                {selectedNumber} {currentNumber.items.toLowerCase()}:
              </h3>
              <div className="flex justify-center flex-wrap gap-3 min-h-24">
                {renderItems(selectedNumber, currentNumber.emoji)}
              </div>
            </div>

            {/* Number Grid */}
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-gray-200">
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
          </div>
        )}

        {activeTab === 'berhitung' && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Ayo Berhitung! 🧮</h2>
              <p className="text-gray-600">Hitung dengan teliti ya!</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200">
              <div className="text-center mb-6">
                <button
                  onClick={playCountingSound}
                  className="text-xl font-semibold text-gray-800 mb-4 hover:text-[#355485] transition-colors"
                >
                  {countingQuestions[currentCountingQuestion].question}
                </button>
                <div className="flex justify-center flex-wrap gap-3 mb-6 min-h-20">
                  {renderCountingItems(
                    countingQuestions[currentCountingQuestion].count,
                    countingQuestions[currentCountingQuestion].image
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {countingQuestions[currentCountingQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => checkCountingAnswer(option)}
                    disabled={showFeedback}
                    className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800 py-4 rounded-2xl text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Feedback */}
              {showFeedback && (
                <div className={`mt-4 p-4 rounded-2xl text-center text-white font-bold text-lg ${showFeedback === 'correct' ? 'bg-green-500' : 'bg-red-500'
                  } animate-bounce`}>
                  {showFeedback === 'correct' ? '🎉 Benar! Hebat!' : '😅 Coba lagi ya!'}
                </div>
              )}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
              <div className="flex items-start space-x-3">
                <i className="ri-lightbulb-flash-fill text-blue-500 text-lg mt-0.5"></i>
                <div>
                  <h4 className="font-semibold text-blue-800 text-sm mb-1">Tips Berhitung:</h4>
                  <p className="text-blue-700 text-xs">
                    Ajak anak menunjuk setiap gambar sambil menghitung dengan jari.
                    "Satu... dua... tiga..." untuk melatih konsep bilangan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pola' && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Tebak Polanya! 🧩</h2>
              <p className="text-gray-600">Lanjutkan pola yang ada</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200">
              <div className="text-center mb-6">
                <button
                  onClick={playPatternSound}
                  className="text-xl font-semibold text-gray-800 mb-4 hover:text-[#355485] transition-colors"
                >
                  Lanjutkan pola berikut:
                </button>
                <div className="flex justify-center items-center space-x-3 mb-6 flex-wrap gap-2">
                  {patternQuestions[currentPatternQuestion].pattern.map((item, index) => (
                    <div
                      key={index}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${item === '?'
                          ? 'bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg animate-pulse'
                          : 'bg-gray-100 shadow-md'
                        }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {patternQuestions[currentPatternQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => checkPatternAnswer(option)}
                    disabled={showFeedback}
                    className="bg-gradient-to-br from-purple-100 to-purple-200 text-purple-800 py-4 rounded-2xl text-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Feedback */}
              {showFeedback && (
                <div className={`mt-4 p-4 rounded-2xl text-center text-white font-bold text-lg ${showFeedback === 'correct' ? 'bg-green-500' : 'bg-red-500'
                  } animate-bounce`}>
                  {showFeedback === 'correct' ? '🎉 Pintar! Polanya benar!' : '🤔 Perhatikan polanya lagi!'}
                </div>
              )}
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
              <div className="flex items-start space-x-3">
                <i className="ri-brain-fill text-purple-500 text-lg mt-0.5"></i>
                <div>
                  <h4 className="font-semibold text-purple-800 text-sm mb-1">Tips Pola:</h4>
                  <p className="text-purple-700 text-xs">
                    Bantu anak melihat urutan dan pengulangan. "Lihat, merah-kuning-merah-kuning,
                    jadi berikutnya apa?" untuk melatih logika.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Progress & Achievement */}
        <div className="mt-6 bg-gradient-to-r from-[#355485] to-[#4f90c6] rounded-3xl p-5 text-white text-center shadow-xl">
          <div className="flex items-center justify-center space-x-4 mb-3">
            <i className="ri-trophy-fill text-yellow-300 text-2xl"></i>
            <p className="font-bold text-lg">Prestasi Belajar</p>
            <i className="ri-trophy-fill text-yellow-300 text-2xl"></i>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <p className="text-2xl font-bold">{score}</p>
              <p className="text-white/80 text-xs">Total Poin</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">
                {activeTab === 'pengenalan' ? selectedNumber :
                  activeTab === 'berhitung' ? currentCountingQuestion + 1 :
                    currentPatternQuestion + 1}/10
              </p>
              <p className="text-white/80 text-xs">Progress</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">
                {activeTab === 'pengenalan' ? '🌟' :
                  activeTab === 'berhitung' ? '🧮' : '🧩'}
              </p>
              <p className="text-white/80 text-xs">Aktivitas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl">
        <div className="flex justify-around">
          <button className="flex flex-col items-center text-[#4f90c6]">
            <i className="ri-home-4-fill text-xl"></i>
            <span className="text-xs mt-1">Home</span>
          </button>
          <button
            onClick={() => {
              if (activeTab === 'pengenalan') playNumberSound(selectedNumber)
              else if (activeTab === 'berhitung') playCountingSound()
              else if (activeTab === 'pola') playPatternSound()
            }}
            className="flex flex-col items-center text-[#4f90c6]"
          >
            <i className="ri-volume-up-line text-xl"></i>
            <span className="text-xs mt-1">Suara</span>
          </button>
          <button className="flex flex-col items-center text-[#4f90c6]">
            <i className="ri-restart-line text-xl"></i>
            <span className="text-xs mt-1">Ulangi</span>
          </button>
          <button className="flex flex-col items-center text-[#4f90c6]">
            <i className="ri-star-fill text-xl"></i>
            <span className="text-xs mt-1">Poin</span>
          </button>
        </div>
      </div>
    </div>
  )
}