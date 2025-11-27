import React, { useState, useEffect, useRef, useCallback } from 'react';

const TypingShooter = () => {
    const [words, setWords] = useState([]);
    const [currentInput, setCurrentInput] = useState('');
    const [score, setScore] = useState(0);
    const [gameActive, setGameActive] = useState(false);
    const [bullets, setBullets] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const gameRef = useRef(null);
    const inputRef = useRef(null);

    // Daftar nama buah-buahan
    const wordList = [
        'apel', 'pisang', 'jeruk', 'mangga', 'anggur', 'semangka', 'melon', 'durian',
        'rambutan', 'salak', 'nanas', 'pepaya', 'jambu', 'alpukat', 'kiwi', 'leci',
        'markisa', 'sirsak', 'belimbing', 'ceri', 'stroberi', 'blueberry', 'raspberry',
        'blackberry', 'kurma', 'delima', 'sawo', 'duku', 'langsat', 'manggis',
        'kedondong', 'sukun', 'nangka', 'cempedak', 'salak', 'kenitu', 'gandaria'
    ];

    const generateWord = useCallback(() => {
        const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        const gameWidth = gameRef.current?.clientWidth || 800;

        return {
            id: Date.now() + Math.random(),
            text: randomWord,
            x: Math.random() * (gameWidth - 200) + 100,
            y: -50,
            speed: 0.8 + Math.random() * 1.2,
            health: randomWord.length,
            typed: ''
        };
    }, []);

    const shootBullet = useCallback((targetWord, typedLetter) => {
        if (!gameRef.current || !targetWord) return;

        const gameRect = gameRef.current.getBoundingClientRect();
        const startX = gameRect.width / 2;
        const startY = gameRect.height - 50;

        setBullets(prev => [...prev, {
            id: Date.now() + Math.random(),
            letter: typedLetter,
            x: startX,
            y: startY,
            targetWordId: targetWord.id,
            color: `hsl(${Math.random() * 360}, 80%, 60%)`,
            speed: 15 // Kecepatan peluru dipercepat
        }]);
    }, []);

    useEffect(() => {
        if (!gameActive) return;

        const gameLoop = setInterval(() => {
            // Update kata yang jatuh
            setWords(prev => {
                const updated = prev.map(word => ({
                    ...word,
                    y: word.y + word.speed
                })).filter(word => word.y < (gameRef.current?.clientHeight || 600));

                // Cek game over
                const isGameOver = updated.some(word =>
                    word.y >= (gameRef.current?.clientHeight || 600) - 50 && word.health > 0
                );
                if (isGameOver) {
                    setGameOver(true);
                    setGameActive(false);
                }

                return updated;
            });

            // Update posisi peluru dengan kecepatan tinggi
            setBullets(prev =>
                prev.map(bullet => {
                    const targetWord = words.find(w => w.id === bullet.targetWordId);
                    if (!targetWord) {
                        // Jika target sudah hilang, peluru terbang lurus ke atas
                        return {
                            ...bullet,
                            y: bullet.y - bullet.speed
                        };
                    }

                    const dx = targetWord.x - bullet.x;
                    const dy = targetWord.y - bullet.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Jika dekat dengan target, hancurkan huruf tersebut
                    if (distance < 20) {
                        handleBulletHit(bullet, targetWord);
                        return null;
                    }

                    // Bergerak cepat menuju target
                    return {
                        ...bullet,
                        x: bullet.x + (dx / distance) * bullet.speed,
                        y: bullet.y + (dy / distance) * bullet.speed
                    };
                }).filter(bullet => bullet !== null && bullet.y > 0)
            );

            // Tambah kata baru lebih sering
            if (Math.random() < 0.04 && words.length < 10) {
                setWords(prev => [...prev, generateWord()]);
            }
        }, 30); // Loop game lebih cepat

        return () => clearInterval(gameLoop);
    }, [gameActive, generateWord, words]);

    const handleBulletHit = (bullet, targetWord) => {
        const expectedLetter = targetWord.text[targetWord.typed.length].toLowerCase();

        if (bullet.letter === expectedLetter) {
            const newTyped = targetWord.typed + bullet.letter;

            setWords(prev => prev.map(word =>
                word.id === targetWord.id
                    ? {
                        ...word,
                        typed: newTyped,
                        health: word.health - 1
                    }
                    : word
            ));

            // Jika kata sudah lengkap diketik
            if (newTyped === targetWord.text) {
                setTimeout(() => {
                    setWords(prev => prev.filter(w => w.id !== targetWord.id));
                    setScore(prev => prev + targetWord.text.length * 15);
                    setCurrentInput('');
                }, 50);
            }
        }
    };

    const handleInput = (e) => {
        if (!gameActive) return;

        const input = e.target.value.toLowerCase();
        setCurrentInput(input);

        if (input.length > 0) {
            const lastChar = input.slice(-1);

            // Cari semua kata yang cocok dengan input terakhir
            const matchingWords = words.filter(word =>
                word.text[word.typed.length] === lastChar
            );

            // Tembak ke semua kata yang cocok
            matchingWords.forEach(word => {
                shootBullet(word, lastChar);
            });

            // Reset input setelah menembak
            if (matchingWords.length > 0) {
                setTimeout(() => {
                    setCurrentInput('');
                    if (inputRef.current) {
                        inputRef.current.value = '';
                    }
                }, 50);
            }
        }
    };

    const startGame = () => {
        setWords([]);
        setBullets([]);
        setScore(0);
        setCurrentInput('');
        setGameActive(true);
        setGameOver(false);

        if (inputRef.current) {
            inputRef.current.focus();
        }

        // Tambah 3 kata pertama langsung
        setTimeout(() => {
            setWords([generateWord(), generateWord(), generateWord()]);
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-900 to-purple-900 flex flex-col items-center justify-center p-4">
            <div className="text-center mb-4">
                <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">FRUIT TYPING SHOOTER</h1>
                <p className="text-2xl text-yellow-300 font-bold drop-shadow-md">Score: {score}</p>

                {gameOver && (
                    <div className="bg-red-600 text-white p-6 rounded-lg mb-4 mt-4 border-2 border-yellow-400">
                        <h2 className="text-3xl font-bold mb-3">GAME OVER!</h2>
                        <p className="text-xl mb-4">Final Score: {score}</p>
                        <button
                            onClick={startGame}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-xl transition duration-200 transform hover:scale-105"
                        >
                            PLAY AGAIN
                        </button>
                    </div>
                )}
            </div>

            <div
                ref={gameRef}
                className="relative bg-gray-900 border-4 border-yellow-400 rounded-xl w-full max-w-6xl h-[500px] overflow-hidden shadow-2xl"
            >
                {/* Background stars */}
                <div className="absolute inset-0">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                {/* Pesawat */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="text-5xl animate-bounce">🚀</div>
                </div>

                {/* Kata-kata buah yang jatuh */}
                {words.map(word => (
                    <div
                        key={word.id}
                        className="absolute font-bold text-xl px-4 py-2 rounded-xl shadow-2xl transition-all duration-75 z-20 border-2 border-white"
                        style={{
                            left: `${word.x}px`,
                            top: `${word.y}px`,
                            transform: 'translate(-50%, -50%)',
                            background: word.typed.length === word.text.length
                                ? 'linear-gradient(45deg, #00ff00, #00cc00)'
                                : 'linear-gradient(45deg, #ff6b6b, #ffa726)'
                        }}
                    >
                        <span className="text-green-800 font-extrabold">{word.typed}</span>
                        <span className="text-white">{word.text.slice(word.typed.length)}</span>
                    </div>
                ))}

                {/* Peluru huruf - lebih cepat */}
                {bullets.map(bullet => (
                    <div
                        key={bullet.id}
                        className="absolute font-extrabold text-2xl w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white z-30 animate-pulse"
                        style={{
                            left: `${bullet.x}px`,
                            top: `${bullet.y}px`,
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: bullet.color,
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                        }}
                    >
                        {bullet.letter.toUpperCase()}
                    </div>
                ))}

                {/* Input untuk mengetik */}
                {gameActive && (
                    <input
                        ref={inputRef}
                        type="text"
                        onChange={handleInput}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-center p-3 rounded-lg border-2 border-yellow-400 w-80 text-xl font-bold placeholder-yellow-200 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-300"
                        placeholder="KETIK HURUF..."
                        autoFocus
                        autoComplete="off"
                        spellCheck="false"
                    />
                )}
            </div>

            {!gameActive && !gameOver && (
                <button
                    onClick={startGame}
                    className="mt-8 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-xl text-2xl transition duration-300 transform hover:scale-110 shadow-2xl border-2 border-yellow-300"
                >
                    🚀 PLAY NOW 🚀
                </button>
            )}
        </div>
    );
};

export default TypingShooter;