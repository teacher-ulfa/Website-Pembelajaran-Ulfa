import React, { useState, useEffect, useId } from 'react';
import { soundEffects } from '../utils/audioSynth';
import { 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Award, 
  Download, 
  Maximize2, 
  HelpCircle,
  BookOpen,
  ExternalLink
} from 'lucide-react';

interface QuizDefinition {
  id: number;
  title: string;
  surahNumber: string;
  segments: string[];
}

interface WordChipItem {
  uid: string;
  text: string;
  originalIndex: number;
}

interface VerseState {
  bank: WordChipItem[];
  answer: WordChipItem[];
  status: 'idle' | 'correct' | 'wrong' | 'incomplete';
  message: string;
}

const QUIZZES: QuizDefinition[] = [
  {
    id: 1,
    title: 'QS. Al Baqarah: 155',
    surahNumber: 'Ayat 155',
    segments: [
      'وَلَنَبْلُوَنَّكُم',
      'بِشَىْءٍ',
      'مِّنَ ٱلْخَوْفِ',
      'وَٱلْجُوعِ',
      'وَنَقْصٍ',
      'مِّنَ ٱلْأَمْوَٰلِ',
      'وَٱلْأَنفُسِ',
      'وَٱلثَّمَرَٰتِ ۗ',
      'وَبَشِّرِ',
      'ٱلصَّٰبِرِينَ'
    ]
  },
  {
    id: 2,
    title: 'QS. Al Baqarah: 156',
    surahNumber: 'Ayat 156',
    segments: [
      'ٱلَّذِينَ',
      'إِذَآ أَصَٰبَتْهُم',
      'مُّصِيبَةٌ',
      'قَالُوٓا۟',
      'إِنَّا لِلَّهِ',
      'وَإِنَّآ إِلَيْهِ',
      'رَٰجِعُونَ'
    ]
  },
  {
    id: 3,
    title: 'QS. Ibrahim: 9',
    surahNumber: 'Ayat 9',
    segments: [
      'أَلَمْ يَأْتِكُمْ',
      'نَبَؤُا۟ ٱلَّذِينَ',
      'مِن قَبْلِكُمْ',
      'قَوْمِ نُوحٍ',
      'وَعَادٍ وَثَمُودَ',
      'وَٱلَّذِينَ مِنۢ بَعْدِهِمْ',
      'لَا يَعْلَمُهُمْ إِلَّا ٱللَّهُ ۚ',
      'جَآءَتْهُمْ رُسُلُهُم',
      'بِٱلْبَيِّنَٰتِ',
      'فَرَدُّوٓا۟ أَيْدِيَهُمْ',
      'فِىٓ أَفْوَٰهِهِمْ',
      'وَقَالُوٓا۟ إِنَّا كَفَرْنَا',
      'بِمَآ أُرْسِلْتُم بِهِۦ',
      'وَإِنَّا لَفِى شَكٍّ',
      'مِّمَّا تَدْعُونَنَآ إِلَيْهِ مُرِيبٍ'
    ]
  }
];

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const IqraTahfizhPuzzle: React.FC = () => {
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [verseStates, setVerseStates] = useState<VerseState[]>([]);
  const [globalMessage, setGlobalMessage] = useState<{
    text: string;
    isSuccess: boolean;
  } | null>(null);

  // Inisialisasi susunan kata acak
  const initializeGame = () => {
    const initial: VerseState[] = QUIZZES.map((quiz, quizIdx) => {
      const items: WordChipItem[] = quiz.segments.map((text, idx) => ({
        uid: `${quizIdx}-${idx}-${Math.random().toString(36).substring(2, 7)}`,
        text,
        originalIndex: idx
      }));
      return {
        bank: shuffleArray(items),
        answer: [],
        status: 'idle',
        message: ''
      };
    });
    setVerseStates(initial);
    setGlobalMessage(null);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  // Pindahkan kata dari bank ke answer
  const handleBankChipClick = (verseIndex: number, chipUid: string) => {
    setVerseStates((prev) => {
      const next = [...prev];
      const target = { ...next[verseIndex] };
      const chip = target.bank.find((c) => c.uid === chipUid);
      if (!chip) return prev;

      target.bank = target.bank.filter((c) => c.uid !== chipUid);
      target.answer = [...target.answer, chip];
      target.status = 'idle';
      target.message = '';
      next[verseIndex] = target;
      return next;
    });
  };

  // Pindahkan kata dari answer kembali ke bank
  const handleAnswerChipClick = (verseIndex: number, chipUid: string) => {
    setVerseStates((prev) => {
      const next = [...prev];
      const target = { ...next[verseIndex] };
      const chip = target.answer.find((c) => c.uid === chipUid);
      if (!chip) return prev;

      target.answer = target.answer.filter((c) => c.uid !== chipUid);
      target.bank = [...target.bank, chip];
      target.status = 'idle';
      target.message = '';
      next[verseIndex] = target;
      return next;
    });
  };

  // Periksa seluruh susunan ayat
  const handleCheckAll = () => {
    let allCorrect = true;
    const nameDisplay = studentName.trim() || 'Siswa Hebat';

    const updatedStates = verseStates.map((state, idx) => {
      const quiz = QUIZZES[idx];
      const answerLength = state.answer.length;
      const expectedLength = quiz.segments.length;

      // 1. Cek kelengkapan
      if (answerLength !== expectedLength) {
        allCorrect = false;
        return {
          ...state,
          status: 'wrong' as const,
          message: `Belum lengkap! Masukkan semua (${expectedLength}) potongan ayat.`
        };
      }

      // 2. Cek urutan
      const isSequenceCorrect = state.answer.every(
        (chip, i) => chip.originalIndex === i
      );

      if (isSequenceCorrect) {
        return {
          ...state,
          status: 'correct' as const,
          message: 'Benar! Mumtaz.'
        };
      } else {
        allCorrect = false;
        return {
          ...state,
          status: 'wrong' as const,
          message: 'Urutan masih salah, coba klik potongan ayat untuk mengembalikannya dan susun lagi.'
        };
      }
    });

    setVerseStates(updatedStates);

    if (allCorrect) {
      soundEffects.playFanfare();
      setGlobalMessage({
        text: `Alhamdulillah! Selamat ${nameDisplay}, semua susunan hafalan tersusun dengan sempurna! 🌟`,
        isSuccess: true
      });
    } else {
      soundEffects.playError();
      setGlobalMessage({
        text: `Tetap semangat ${nameDisplay}, masih ada ayat yang perlu disempurnakan. Ayo coba lagi! 💪`,
        isSuccess: false
      });
    }
  };

  // Unduh standalone HTML file
  const handleDownloadStandaloneHtml = () => {
    const rawHtml = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IQRA: Tahfizh Puzzle</title>
    <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #0F5132;
            --accent-color: #D4AF37;
            --bg-color: #Fdfcf5;
            --text-color: #333;
            --correct-color: #198754;
            --wrong-color: #dc3545;
            --chip-bg: #fff;
            --chip-border: #ccc;
        }
        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            min-height: 100vh;
        }
        .container {
            max-width: 800px;
            width: 100%;
            background: white;
            border-radius: 15px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            padding: 30px;
            border-top: 5px solid var(--primary-color);
            display: flex;
            flex-direction: column;
        }
        header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px dashed #ddd;
            padding-bottom: 20px;
        }
        .logo-container {
            margin-bottom: 15px;
        }
        .logo-img {
            max-width: 150px;
            height: auto;
        }
        h1 {
            color: var(--primary-color);
            font-size: 1.6rem;
            margin-bottom: 5px;
            line-height: 1.4;
        }
        .subtitle {
            font-size: 1rem;
            color: #555;
            margin-bottom: 20px;
            font-weight: 600;
        }
        .identity-box {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #eee;
            margin-bottom: 20px;
            text-align: left;
            border-left: 4px solid var(--primary-color);
        }
        .identity-title {
            font-size: 0.9rem;
            color: var(--primary-color);
            font-weight: bold;
            margin-bottom: 10px;
            text-transform: uppercase;
        }
        .input-group {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }
        .id-input {
            flex: 1;
            min-width: 200px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-family: 'Poppins', sans-serif;
            font-size: 0.9rem;
        }
        .instruction {
            background-color: #e8f5e9;
            color: var(--primary-color);
            padding: 15px;
            border-radius: 8px;
            font-size: 0.95rem;
            line-height: 1.5;
            border-left: 4px solid var(--accent-color);
            text-align: left;
        }
        .verse-card {
            background: #fff;
            border: 1px solid #eee;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 40px;
        }
        .verse-title {
            font-size: 1rem;
            font-weight: 600;
            color: var(--accent-color);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 15px;
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 5px;
        }
        .answer-box {
            min-height: 80px;
            background-color: #f8f9fa;
            border: 2px dashed #ced4da;
            border-radius: 10px;
            padding: 15px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: flex-end;
            direction: rtl;
            margin-bottom: 20px;
            transition: all 0.3s ease;
        }
        .answer-box.correct {
            border-color: var(--correct-color);
            background-color: #d1e7dd;
        }
        .answer-box.wrong {
            border-color: var(--wrong-color);
            background-color: #f8d7da;
        }
        .word-bank {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            padding: 15px;
            background-color: #fff3cd;
            border-radius: 10px;
            border: 1px solid #ffeeba;
        }
        .word-chip {
            font-family: 'Amiri', serif;
            font-size: 1.4rem;
            background-color: white;
            border: 1px solid var(--chip-border);
            padding: 8px 15px;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            transition: transform 0.2s, background-color 0.2s;
            user-select: none;
        }
        .word-chip:hover {
            transform: translateY(-2px);
            border-color: var(--accent-color);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .btn-container {
            text-align: center;
            margin-top: 40px;
            margin-bottom: 30px;
        }
        .check-btn {
            background-color: var(--primary-color);
            color: white;
            font-family: 'Poppins', sans-serif;
            font-size: 1.1rem;
            padding: 12px 40px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0,0,0,0.2);
        }
        .check-btn:hover {
            background-color: #0a3622;
        }
        .result-msg {
            text-align: center;
            margin-top: 15px;
            font-weight: bold;
            font-size: 1.1rem;
            display: none;
        }
        .teacher-footer {
            margin-top: auto;
            border-top: 1px solid #eee;
            padding-top: 20px;
            text-align: center;
            font-size: 0.9rem;
            color: #666;
        }
        .teacher-name {
            color: var(--primary-color);
            font-weight: 600;
        }
        @media (max-width: 600px) {
            .word-chip { font-size: 1.1rem; padding: 6px 12px; }
            .answer-box { min-height: 60px; }
            h1 { font-size: 1.3rem; }
            .logo-img { max-width: 120px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="logo-container">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNNP-8q6ppvE6lBTq-Hps7PfjAX3dr3Mu4gNodlGn4glvovqw2D47WEdYuGMZcILuAvBNUiXGlDVLMYYrw-MtkTa5IS9rEuv5Sh3djcwt-EioSnfEh8AMr83gt0ht03BRlg_kUE4NZqZN3nJL8XkZYKyCMgsoUAfACeJAQmdx1WZJaaNwW9jrj-cCBxiuZ/s320/Tangkapan_Layar_2025-12-20_pukul_10.25.50-removebg-preview.png" alt="Logo IQRA" class="logo-img">
            </div>
            <h1>IQRA (Inovasi Quiz Religi Asyik)</h1>
            <div class="subtitle">TAHFIZH FUN QS. Al Baqarah : 155-156 & QS. Ibrahim :9</div>
            <div class="identity-box">
                <div class="identity-title">Identitas Siswa</div>
                <div class="input-group">
                    <input type="text" id="student-name" class="id-input" placeholder="Nama Lengkap">
                    <input type="text" class="id-input" placeholder="Kelas / No. Absen">
                </div>
            </div>
            <div class="instruction">
                <strong>Cara Main:</strong> Klik potongan ayat yang ada di kotak kuning (bawah) untuk memindahkannya ke kotak jawaban (atas). Susunlah hingga ayat menjadi lengkap dan benar, lalu klik <strong>"Cek Susunan"</strong>.
            </div>
        </header>
        <div id="quiz-container"></div>
        <div class="btn-container">
            <button class="check-btn" onclick="checkAllAnswers()">Cek Susunan</button>
            <div id="final-score" class="result-msg"></div>
        </div>
        <footer class="teacher-footer">
            Guru Mata Pelajaran : <span class="teacher-name">Ulfatul Husna, S.Ag.,M.Pd.</span> · SMA Negeri 1 Krembung
        </footer>
    </div>
    <script>
        const quizzes = [
            {
                id: 1,
                title: "QS. Al Baqarah: 155",
                segments: ["وَلَنَبْلُوَنَّكُم", "بِشَىْءٍ", "مِّنَ ٱلْخَوْفِ", "وَٱلْجُوعِ", "وَنَقْصٍ", "مِّنَ ٱلْأَمْوَٰلِ", "وَٱلْأَنفُسِ", "وَٱلثَّمَرَٰتِ ۗ", "وَبَشِّرِ", "ٱلصَّٰبِرِينَ"]
            },
            {
                id: 2,
                title: "QS. Al Baqarah: 156",
                segments: ["ٱلَّذِينَ", "إِذَآ أَصَٰبَتْهُم", "مُّصِيبَةٌ", "قَالُوٓا۟", "إِنَّا لِلَّهِ", "وَإِنَّآ إِلَيْهِ", "رَٰجِعُونَ"]
            },
            {
                id: 3,
                title: "QS. Ibrahim: 9",
                segments: ["أَلَمْ يَأْتِكُمْ", "نَبَؤُا۟ ٱلَّذِينَ", "مِن قَبْلِكُمْ", "قَوْمِ نُوحٍ", "وَعَادٍ وَثَمُودَ", "وَٱلَّذِينَ مِنۢ بَعْدِهِمْ", "لَا يَعْلَمُهُمْ إِلَّا ٱللَّهُ ۚ", "جَآءَتْهُمْ رُسُلُهُم", "بِٱلْبَيِّنَٰتِ", "فَرَدُّوٓا۟ أَيْدِيَهُمْ", "فِىٓ أَفْوَٰهِهِمْ", "وَقَالُوٓا۟ إِنَّا كَفَرْنَا", "بِمَآ أُرْسِلْتُم بِهِۦ", "وَإِنَّا لَفِى شَكٍّ", "مِّمَّا تَدْعُونَنَآ إِلَيْهِ مُرِيبٍ"]
            }
        ];
        const container = document.getElementById('quiz-container');
        function shuffle(array) {
            let currentIndex = array.length, randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }
            return array;
        }
        function initGame() {
            quizzes.forEach((quiz, index) => {
                const card = document.createElement('div');
                card.className = 'verse-card';
                card.innerHTML = '<div class="verse-title">' + quiz.title + '</div><div class="answer-box" id="drop-zone-' + index + '"></div><div class="result-msg" id="msg-' + index + '"></div><div class="word-bank" id="bank-' + index + '"></div>';
                container.appendChild(card);
                const words = quiz.segments.map((text, i) => ({ text, originalIndex: i }));
                const shuffledWords = shuffle([...words]);
                const bankEl = document.getElementById('bank-' + index);
                const dropZoneEl = document.getElementById('drop-zone-' + index);
                shuffledWords.forEach(wordObj => {
                    const chip = document.createElement('div');
                    chip.className = 'word-chip';
                    chip.innerText = wordObj.text;
                    chip.dataset.index = wordObj.originalIndex;
                    chip.onclick = function() {
                        if (this.parentNode === bankEl) {
                            dropZoneEl.appendChild(this);
                        } else {
                            bankEl.appendChild(this);
                        }
                    };
                    bankEl.appendChild(chip);
                });
            });
        }
        function checkAllAnswers() {
            let totalCorrect = 0;
            const nameInput = document.getElementById('student-name').value.trim();
            const studentName = nameInput ? nameInput : "Siswa";
            quizzes.forEach((quiz, index) => {
                const dropZone = document.getElementById('drop-zone-' + index);
                const msgEl = document.getElementById('msg-' + index);
                const chips = dropZone.querySelectorAll('.word-chip');
                dropZone.className = 'answer-box';
                msgEl.style.display = 'none';
                if (chips.length !== quiz.segments.length) {
                    dropZone.classList.add('wrong');
                    msgEl.innerText = "Belum lengkap! Masukkan semua potongan ayat.";
                    msgEl.style.color = "var(--wrong-color)";
                    msgEl.style.display = 'block';
                    return;
                }
                let isCorrect = true;
                chips.forEach((chip, i) => {
                    if (parseInt(chip.dataset.index) !== i) {
                        isCorrect = false;
                    }
                });
                if (isCorrect) {
                    dropZone.classList.add('correct');
                    msgEl.innerText = "Benar! Mumtaz.";
                    msgEl.style.color = "var(--correct-color)";
                    msgEl.style.display = 'block';
                    totalCorrect++;
                } else {
                    dropZone.classList.add('wrong');
                    msgEl.innerText = "Urutan masih salah, coba perbaiki lagi.";
                    msgEl.style.color = "var(--wrong-color)";
                    msgEl.style.display = 'block';
                }
            });
            const globalScore = document.getElementById('final-score');
            globalScore.style.display = 'block';
            if (totalCorrect === quizzes.length) {
                globalScore.innerHTML = 'Alhamdulillah! Selamat <strong>' + studentName + '</strong>, semua hafalan tersusun dengan sempurna! 🌟';
                globalScore.style.color = "var(--correct-color)";
            } else {
                globalScore.innerHTML = 'Tetap semangat <strong>' + studentName + '</strong>, masih ada yang perlu diperbaiki. Ayo coba lagi! 💪';
                globalScore.style.color = "var(--primary-color)";
            }
        }
        window.onload = initGame;
    </script>
</body>
</html>`;

    const blob = new Blob([rawHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'IQRA_Tahfizh_Puzzle_SMANIKRE.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden border-t-8 border-t-emerald-800">
      
      {/* Header Game IQRA */}
      <div className="p-6 sm:p-8 text-center border-b border-dashed border-slate-200 space-y-4">
        
        {/* Logo Section */}
        <div className="flex justify-center">
          <div className="relative p-2 bg-emerald-50 rounded-2xl border border-emerald-100 shadow-xs">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNNP-8q6ppvE6lBTq-Hps7PfjAX3dr3Mu4gNodlGn4glvovqw2D47WEdYuGMZcILuAvBNUiXGlDVLMYYrw-MtkTa5IS9rEuv5Sh3djcwt-EioSnfEh8AMr83gt0ht03BRlg_kUE4NZqZN3nJL8XkZYKyCMgsoUAfACeJAQmdx1WZJaaNwW9jrj-cCBxiuZ/s320/Tangkapan_Layar_2025-12-20_pukul_10.25.50-removebg-preview.png"
              alt="Logo IQRA" 
              className="max-h-24 sm:max-h-28 w-auto object-contain mx-auto transition-transform hover:scale-105"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-900 tracking-tight">
            IQRA (Inovasi Quiz Religi Asyik)
          </h2>
          <p className="mt-1 text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wider">
            TAHFIZH FUN · QS. Al-Baqarah: 155-156 &amp; QS. Ibrahim: 9
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Media Pembelajaran Mandiri &amp; Gamifikasi Tahfizh PAI SMA Negeri 1 Krembung
          </p>
        </div>

        {/* Kolom Identitas Siswa */}
        <div className="max-w-xl mx-auto p-4 bg-slate-50 rounded-2xl border border-slate-200/90 text-left border-l-4 border-l-emerald-800 shadow-xs">
          <span className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2.5">
            Identitas Siswa
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-medium text-slate-500 mb-1">
                Nama Lengkap Siswa:
              </label>
              <input 
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Contoh: Ahmad Fauzan"
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-700"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-500 mb-1">
                Kelas / No. Absen:
              </label>
              <input 
                type="text"
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                placeholder="Contoh: XII-IPA 1 / 05"
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-700"
              />
            </div>
          </div>
        </div>

        {/* Petunjuk Permainan */}
        <div className="max-w-xl mx-auto p-3.5 bg-emerald-50 text-emerald-950 rounded-xl text-xs sm:text-sm border border-emerald-200 text-left border-l-4 border-l-amber-500 flex items-start gap-2.5">
          <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Cara Main:</strong> Klik potongan ayat di kotak kuning (bawah) untuk memindahkannya ke kotak jawaban (atas). 
            Susunlah hingga ayat menjadi lengkap dan runtut dari kanan ke kiri, lalu klik <strong>&quot;Cek Susunan&quot;</strong>.
          </p>
        </div>

        {/* Action Controls Top */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <a
            href="https://sites.google.com/guru.sma.belajar.id/iqra-sman1kre/iqra-4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-800 to-teal-800 hover:from-emerald-700 hover:to-teal-700 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Buka Aplikasi Game IQRA 4 (Google Sites)</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-200 ml-0.5" />
          </a>
          <button
            onClick={initializeGame}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-600" />
            <span>Acak Ulang Ayat</span>
          </button>
          <button
            onClick={handleDownloadStandaloneHtml}
            type="button"
            title="Unduh file HTML mandiri ini untuk dimainkan secara offline di komputer / laptop"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-emerald-700" />
            <span>Unduh Berkas HTML Mandiri</span>
          </button>
        </div>

      </div>

      {/* Cards Soal Puzzle */}
      <div className="p-6 sm:p-8 space-y-8 bg-slate-50/50">
        {QUIZZES.map((quiz, qIdx) => {
          const state = verseStates[qIdx] || {
            bank: [],
            answer: [],
            status: 'idle',
            message: ''
          };

          const isCorrect = state.status === 'correct';
          const isWrong = state.status === 'wrong';

          return (
            <div 
              key={quiz.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
            >
              {/* Verse Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wide">
                    {quiz.title}
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {state.answer.length} / {quiz.segments.length} Potongan
                </span>
              </div>

              {/* Area Jawaban (Drop Zone / RTL) */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Kotak Jawaban (Urutkan dari Kanan ke Kiri):</span>
                  <span className="text-[11px] italic text-slate-400">Klik kata di bawah untuk membatalkan</span>
                </div>
                
                <div 
                  dir="rtl"
                  className={`min-h-[90px] p-3.5 sm:p-4 rounded-xl border-2 transition-all flex flex-wrap gap-2.5 justify-start items-center ${
                    isCorrect 
                      ? 'bg-emerald-50 border-emerald-500 shadow-inner'
                      : isWrong
                      ? 'bg-rose-50 border-rose-400 shadow-inner'
                      : 'bg-slate-50 border-dashed border-slate-300'
                  }`}
                >
                  {state.answer.length === 0 ? (
                    <div className="w-full text-center py-4 text-xs text-slate-400 font-sans italic" dir="ltr">
                      Belum ada potongan ayat. Klik potongan kata pada kotak kuning di bawah untuk mulai menyusun.
                    </div>
                  ) : (
                    state.answer.map((chip) => (
                      <button
                        key={chip.uid}
                        type="button"
                        onClick={() => handleAnswerChipClick(qIdx, chip.uid)}
                        title="Klik untuk mengembalikan potongan ini ke kotak kuning"
                        style={{ fontFamily: "'Amiri', serif" }}
                        className={`text-xl sm:text-2xl px-4 py-1.5 rounded-full shadow-xs cursor-pointer border transition-transform hover:-translate-y-0.5 active:translate-y-0 select-none ${
                          isCorrect
                            ? 'bg-emerald-100 text-emerald-950 border-emerald-300'
                            : isWrong
                            ? 'bg-rose-100 text-rose-950 border-rose-300'
                            : 'bg-white text-slate-900 border-slate-300 hover:border-amber-500'
                        }`}
                      >
                        {chip.text}
                      </button>
                    ))
                  )}
                </div>

                {/* Status Message per Verse */}
                {state.message && (
                  <div 
                    className={`text-xs sm:text-sm font-semibold flex items-center gap-1.5 pt-1 ${
                      isCorrect ? 'text-emerald-700' : 'text-rose-600'
                    }`}
                  >
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                    <span>{state.message}</span>
                  </div>
                )}
              </div>

              {/* Area Bank Kata (Word Bank) */}
              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-semibold text-slate-700 block">
                  Kotak Potongan Kata (Klik untuk Memindahkan ke Jawaban):
                </span>
                <div 
                  dir="rtl"
                  className="p-3.5 sm:p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex flex-wrap gap-2.5 justify-center items-center min-h-[70px]"
                >
                  {state.bank.length === 0 ? (
                    <span className="text-xs text-amber-800 font-sans italic" dir="ltr">
                      Semua potongan kata sudah dipindahkan ke kotak jawaban.
                    </span>
                  ) : (
                    state.bank.map((chip) => (
                      <button
                        key={chip.uid}
                        type="button"
                        onClick={() => handleBankChipClick(qIdx, chip.uid)}
                        title="Klik untuk memilih potongan ayat ini"
                        style={{ fontFamily: "'Amiri', serif" }}
                        className="text-xl sm:text-2xl px-4 py-1.5 bg-white text-slate-900 border border-slate-300 hover:border-amber-500 rounded-full shadow-xs cursor-pointer transition-transform hover:-translate-y-0.5 active:translate-y-0 select-none hover:bg-amber-50/50"
                      >
                        {chip.text}
                      </button>
                    ))
                  )}
                </div>
              </div>

            </div>
          );
        })}

        {/* Button Cek Jawaban & Global Score */}
        <div className="text-center pt-4 pb-2 space-y-4">
          <button
            onClick={handleCheckAll}
            type="button"
            className="px-8 sm:px-12 py-3.5 text-sm sm:text-base font-bold text-white bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-200" />
            <span>Cek Susunan Semua Ayat</span>
          </button>

          {/* Feedback Global */}
          {globalMessage && (
            <div 
              className={`max-w-xl mx-auto p-4 rounded-2xl border text-sm sm:text-base font-bold transition-all animate-in fade-in duration-300 ${
                globalMessage.isSuccess
                  ? 'bg-emerald-100 text-emerald-950 border-emerald-300'
                  : 'bg-amber-100 text-emerald-950 border-amber-300'
              }`}
            >
              <p>{globalMessage.text}</p>
            </div>
          )}
        </div>

      </div>

      {/* Footer Game */}
      <div className="p-4 sm:p-5 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-slate-700">
          <BookOpen className="w-4 h-4 text-emerald-800 shrink-0" />
          <span>Guru Pengampu: <strong className="text-emerald-900">Ulfatul Husna, S.Ag., M.Pd.</strong></span>
        </div>
        <span className="text-slate-500">
          SMA Negeri 1 Krembung · Pendidikan Agama Islam &amp; Budi Pekerti
        </span>
      </div>

    </div>
  );
};
