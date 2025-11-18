// src/pages/Try.jsx
import React, { useEffect, useMemo, useState } from "react";

/** ====== DATA: Bentuk 2D (SVG inline) ====== */
const SHAPES = [
  { id: "circle", label: "Lingkaran", sides: 0, svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="45"/></svg>` },
  { id: "oval", label: "Oval", sides: 0, svg: `<svg viewBox="0 0 140 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="70" cy="60" rx="50" ry="30"/></svg>` },
  { id: "square", label: "Persegi", sides: 4, svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="80" height="80"/></svg>` },
  { id: "rectangle", label: "Persegi Panjang", sides: 4, svg: `<svg viewBox="0 0 140 120" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="35" width="120" height="50"/></svg>` },
  { id: "triangle", label: "Segitiga", sides: 3, svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,15 105,100 15,100"/></svg>` },
  { id: "pentagon", label: "Segilima", sides: 5, svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,10 110,45 90,105 30,105 10,45"/></svg>` },
  { id: "hexagon", label: "Segienam", sides: 6, svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,10 105,35 105,85 60,110 15,85 15,35"/></svg>` },
];

/** ====== PALET ====== */
const PALET = {
  primary: "#355485",
  dark: "#2a436c",
  accent: "#4f90c6",
  soft: "#90b6d5",
  pale: "#cbdde9",
  bg: "#f9fafb",
  gray: "#6b7280",
  border: "#e5e7eb",
};
const RANDOM_FILLS = [PALET.primary, PALET.accent, "#3b82f6", "#06b6d4", "#22c55e"];

/** ====== Utils ====== */
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
const pickN = (arr, n) => shuffle(arr).slice(0, n);
const randomFill = () => RANDOM_FILLS[Math.floor(Math.random() * RANDOM_FILLS.length)];

// localStorage helpers
const LS_KEY_SETTINGS = "bk_try_settings_v1"; // (bk = Bentuk Kelas)
const LS_KEY_HISTORY = "bk_try_history_v1";
const loadSettings = () => {
  try {
    const raw = localStorage.getItem(LS_KEY_SETTINGS);
    return raw ? JSON.parse(raw) : { rounds: 8, options: 3, shuffleItems: true, mode: "pilih-gambar" };
  } catch { return { rounds: 8, options: 3, shuffleItems: true, mode: "pilih-gambar" }; }
};
const saveSettings = (s) => localStorage.setItem(LS_KEY_SETTINGS, JSON.stringify(s));
const loadHistory = () => {
  try {
    const raw = localStorage.getItem(LS_KEY_HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
};
// simpan 5 terbaru
const saveHistory = (item) => {
  try {
    const arr = loadHistory();
    arr.unshift(item);
    localStorage.setItem(LS_KEY_HISTORY, JSON.stringify(arr.slice(0, 5)));
  } catch { }
};

/** ====== PAGE ====== */
export default function Try() {
  // Settings
  const [cfg, setCfg] = useState(loadSettings()); // {rounds, options, shuffleItems, mode}
  const [started, setStarted] = useState(false);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lock, setLock] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [choices, setChoices] = useState([]);
  const [fills, setFills] = useState({}); // warna per id

  // bank soal
  const bank = useMemo(() => (cfg.shuffleItems ? shuffle(SHAPES) : SHAPES), [cfg.shuffleItems]);
  const rounds = Math.min(Math.max(cfg.rounds, 3), 20);
  const optionsCount = Math.min(Math.max(cfg.options, 2), 4);
  const target = bank[idx % bank.length];

  // siapkan warna acak per shape (stabil selama sesi)
  useEffect(() => {
    const map = {};
    SHAPES.forEach(s => { map[s.id] = randomFill(); });
    setFills(map);
  }, []);

  // siapkan opsi setiap ronde (bergantung mode)
  useEffect(() => {
    if (!started) return;
    const others = bank.filter((s) => s.id !== target.id);

    if (cfg.mode === "pilih-gambar") {
      // prompt: “Pilih gambar: {label}”
      const opts = shuffle([target, ...pickN(others, optionsCount - 1)]);
      setChoices(opts);
    } else if (cfg.mode === "pilih-nama") {
      // prompt: tampilkan svg → pilihan label (string)
      const labels = shuffle([target.label, ...pickN(others, optionsCount - 1).map(o => o.label)]);
      setChoices(labels);
    } else if (cfg.mode === "hitung-sisi") {
      // prompt: tampilkan svg → pilih jumlah sisi (angka)
      // kumpulkan kandidat sisi (unik)
      const allSides = Array.from(new Set(SHAPES.map(s => s.sides)));
      const otherNums = shuffle(allSides.filter(n => n !== target.sides));
      const opts = shuffle([target.sides, ...otherNums.slice(0, optionsCount - 1)]);
      setChoices(opts);
    }

    setAnswer(null);
    setLock(false);
  }, [idx, started, bank, target?.id, cfg.mode, optionsCount]);

  const onStart = () => {
    setStarted(true);
    setIdx(0);
    setScore(0);
    setStreak(0);
    setAnswer(null);
    setLock(false);
  };

  const next = (willEndAdd = 0) => {
    if (idx + 1 >= rounds) {
      saveHistory({
        at: Date.now(),
        score: score + willEndAdd,
        rounds, options: optionsCount, mode: cfg.mode
      });
      setStarted(false);
    } else {
      setIdx((i) => i + 1);
    }
  };

  const onPick = (picked) => {
    if (lock) return;
    let correct = false;

    if (cfg.mode === "pilih-gambar") {
      correct = picked === target.id;
    } else if (cfg.mode === "pilih-nama") {
      correct = picked === target.label;
    } else if (cfg.mode === "hitung-sisi") {
      correct = Number(picked) === target.sides;
    }

    setAnswer({ picked, correct });
    setLock(true);

    if (correct) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      // multiplier kecil biar seru: setiap 3 streak, +2
      const add = newStreak % 3 === 0 ? 2 : 1;
      setScore((s) => s + add);
      setTimeout(() => next(add), 900);
    } else {
      setStreak(0);
      setTimeout(() => next(0), 900);
    }
  };

  const done = !started && idx > 0;
  const history = loadHistory();
  const last = history[0];

  // Helpers UI
  const HeaderCard = () => (
    <header className="text-center space-y-2">
      <div style={{ background: PALET.primary }} className="mx-auto w-16 h-16 rounded-2xl grid place-items-center text-white shadow">
        <i className="ri-shapes-line text-2xl" />
      </div>
      <h1 style={{ color: PALET.dark }} className="text-2xl md:text-3xl font-bold">
        Bentuk Kelas — Mode Interaktif
      </h1>
      <p style={{ color: PALET.gray }}>
        Guru menayangkan, siswa menjawab bareng • Tanpa database (localStorage) • Responsif
      </p>
    </header>
  );

  const SettingsPanel = () => (
    <section className="rounded-2xl bg-white" style={{ border: `1px solid ${PALET.border}` }}>
      <div className="p-4">
        <h2 style={{ color: PALET.dark }} className="text-lg font-semibold mb-3">Pengaturan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm" style={{ color: PALET.gray }}>Mode Game</label>
            <select
              value={cfg.mode}
              onChange={(e) => setCfg({ ...cfg, mode: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2"
              style={{ borderColor: PALET.border }}
            >
              <option value="pilih-gambar">Pilih Gambar (dari nama)</option>
              <option value="pilih-nama">Pilih Nama (dari gambar)</option>
              <option value="hitung-sisi">Hitung Sisi (dari gambar)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm" style={{ color: PALET.gray }}>Jumlah Ronde</label>
            <input
              type="number" min={3} max={20} value={cfg.rounds}
              onChange={(e) => setCfg({ ...cfg, rounds: Number(e.target.value) })}
              className="mt-1 w-full rounded-lg border px-3 py-2"
              style={{ borderColor: PALET.border }}
            />
          </div>
          <div>
            <label className="block text-sm" style={{ color: PALET.gray }}>Opsi per Soal</label>
            <select
              value={cfg.options}
              onChange={(e) => setCfg({ ...cfg, options: Number(e.target.value) })}
              className="mt-1 w-full rounded-lg border px-3 py-2"
              style={{ borderColor: PALET.border }}
            >
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          <div className="flex items-end">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox" checked={cfg.shuffleItems}
                onChange={(e) => setCfg({ ...cfg, shuffleItems: e.target.checked })}
                className="w-5 h-5"
              />
              <span className="text-sm" style={{ color: PALET.dark }}>Acak urutan</span>
            </label>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={() => { saveSettings(cfg); setIdx(0); setScore(0); setStreak(0); setAnswer(null); setStarted(true); }}
            className="rounded-lg px-5 py-2.5 font-semibold text-white hover:opacity-90"
            style={{ background: PALET.primary }}
          >
            Mulai
          </button>
          <button
            onClick={() => saveSettings(cfg)}
            className="rounded-lg px-4 py-2 border hover:bg-gray-50"
            style={{ color: PALET.primary, borderColor: PALET.border, background: "white" }}
          >
            Simpan Pengaturan
          </button>
          {last && (
            <span className="text-xs" style={{ color: PALET.gray }}>
              Hasil terakhir: <b style={{ color: PALET.dark }}>{last.score}</b>/{last.rounds} · opsi {last.options} · mode {labelMode(last.mode)} · {new Date(last.at).toLocaleString("id-ID")}
            </span>
          )}
        </div>
      </div>
    </section>
  );

  const labelMode = (m) =>
    m === "pilih-gambar" ? "Pilih Gambar" :
      m === "pilih-nama" ? "Pilih Nama" :
        m === "hitung-sisi" ? "Hitung Sisi" : m;

  const ProgressBar = () => (
    <div>
      <div className="flex justify-between text-sm" style={{ color: PALET.gray }}>
        <span>Ronde {idx + 1} / {rounds}</span>
        <span>Skor: <b style={{ color: PALET.dark }}>{score}</b> · Streak: {streak}</span>
      </div>
      <div className="w-full h-2 rounded-full mt-2 overflow-hidden" style={{ background: PALET.border }}>
        <div
          className="h-2"
          style={{ width: `${(idx / rounds) * 100}%`, background: PALET.accent, transition: "width .3s" }}
        />
      </div>
    </div>
  );

  const PromptCard = () => (
    <div className="rounded-2xl p-4 text-center bg-white" style={{ border: `1px solid ${PALET.border}` }}>
      {cfg.mode === "pilih-gambar" && (
        <p className="text-lg font-semibold" style={{ color: PALET.dark }}>
          Pilih gambar: <span className="underline">{target?.label}</span>
        </p>
      )}
      {cfg.mode === "pilih-nama" && (
        <div className="flex flex-col items-center">
          <div
            className="w-28 h-28 md:w-32 md:h-32"
            dangerouslySetInnerHTML={{ __html: target?.svg?.replace("<svg", `<svg fill="${fills[target?.id] || PALET.primary}"`) }}
          />
          <p className="mt-2 text-lg font-semibold" style={{ color: PALET.dark }}>
            Ini gambar apa?
          </p>
        </div>
      )}
      {cfg.mode === "hitung-sisi" && (
        <div className="flex flex-col items-center">
          <div
            className="w-28 h-28 md:w-32 md:h-32"
            dangerouslySetInnerHTML={{ __html: target?.svg?.replace("<svg", `<svg fill="${fills[target?.id] || PALET.primary}"`) }}
          />
          <p className="mt-2 text-lg font-semibold" style={{ color: PALET.dark }}>
            Berapa jumlah sisi/tepinya?
          </p>
        </div>
      )}
    </div>
  );

  const ChoicesGrid = () => {
    const grid = choices.length <= 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-3";
    return (
      <div className={`grid gap-4 ${grid}`}>
        {choices.map((c) => {
          let key = c?.id || c; // object (shape) atau string/angka
          const isSelected =
            (cfg.mode === "pilih-gambar" && answer?.picked === c.id) ||
            (cfg.mode === "pilih-nama" && answer?.picked === c) ||
            (cfg.mode === "hitung-sisi" && answer?.picked === c);

          const isCorrect = isSelected && answer?.correct;
          const isWrong = isSelected && answer && !answer.correct;

          const base = "rounded-2xl border shadow bg-white p-4 flex flex-col items-center justify-center transition transform active:scale-95";
          const ring = isCorrect ? "ring-4 ring-green-300" : isWrong ? "ring-4 ring-red-300" : "";
          const border = { borderColor: PALET.border };

          if (cfg.mode === "pilih-gambar") {
            return (
              <button
                key={key}
                onClick={() => onPick(c.id)}
                className={`${base} ${ring}`}
                style={{ ...border, minHeight: 180 }}
              >
                <div
                  className="w-28 h-28 md:w-32 md:h-32"
                  dangerouslySetInnerHTML={{ __html: c.svg.replace("<svg", `<svg fill="${fills[c.id] || PALET.primary}"`) }}
                />
                <div className="mt-2 font-medium" style={{ color: PALET.dark }}>{c.label}</div>
              </button>
            );
          }

          if (cfg.mode === "pilih-nama") {
            return (
              <button
                key={key}
                onClick={() => onPick(c)}
                className={`${base} ${ring}`}
                style={{ ...border, minHeight: 100 }}
              >
                <div className="text-lg font-semibold" style={{ color: PALET.dark }}>{c}</div>
              </button>
            );
          }

          // hitung-sisi
          return (
            <button
              key={key}
              onClick={() => onPick(c)}
              className={`${base} ${ring}`}
              style={{ ...border, minHeight: 100 }}
            >
              <div className="text-3xl font-bold" style={{ color: PALET.primary }}>{c}</div>
              <div className="text-sm" style={{ color: PALET.gray }}>sisi</div>
            </button>
          );
        })}
      </div>
    );
  };

  const ResultPanel = () => (
    <section className="text-center space-y-3">
      <h3 className="text-2xl font-bold" style={{ color: PALET.dark }}>Selesai! 🎉</h3>
      <div className="text-5xl font-bold" style={{ color: PALET.primary }}>{score} / {rounds}</div>
      <div className="flex items-center justify-center gap-3 mt-3">
        <button
          onClick={onStart}
          className="rounded-lg px-5 py-2.5 font-semibold text-white hover:opacity-90"
          style={{ background: PALET.primary }}
        >
          Main Lagi
        </button>
        <button
          onClick={() => { setIdx(0); setScore(0); setStreak(0); setAnswer(null); }}
          className="rounded-lg px-4 py-2 border hover:bg-gray-50"
          style={{ color: PALET.primary, borderColor: PALET.border, background: "white" }}
        >
          Kembali ke Pengaturan
        </button>
      </div>
    </section>
  );

  const HistoryPanel = () => (
    <section className="rounded-2xl bg-white p-4" style={{ border: `1px solid ${PALET.border}` }}>
      <h3 className="font-semibold mb-2" style={{ color: PALET.dark }}>5 Riwayat Terakhir</h3>
      {history.length === 0 ? (
        <p className="text-sm" style={{ color: PALET.gray }}>Belum ada riwayat. Mulai satu sesi untuk menyimpan hasil.</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {history.map((h, i) => (
            <li key={i} className="flex items-center justify-between">
              <span style={{ color: PALET.dark }}>
                {new Date(h.at).toLocaleString("id-ID")}
              </span>
              <span style={{ color: PALET.gray }}>
                Skor <b style={{ color: PALET.dark }}>{h.score}</b>/{h.rounds} · opsi {h.options} · {labelMode(h.mode)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );

  return (
    <div className="min-h-screen" style={{ background: PALET.bg }}>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        <HeaderCard />

        {!started && <SettingsPanel />}

        {started && (
          <>
            <ProgressBar />
            <PromptCard />
            <ChoicesGrid />
          </>
        )}

        {!started && idx > 0 && <ResultPanel />}

        <HistoryPanel />

        <footer className="pt-2 text-center text-xs" style={{ color: PALET.gray }}>
          © {new Date().getFullYear()} Bentuk Kelas • Palet biru • Tanpa database (localStorage)
        </footer>
      </div>
    </div>
  );
}
