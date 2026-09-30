import React, { useState, useEffect } from 'react';
import { EducationalGame, QuizQuestion } from '../types';
import { quizQuestionsData, rukunIslamPuzzle, rukunImanPuzzle } from '../data/mockData';
import { soundEffects } from '../utils/audioSynth';
import { IqraTahfizhPuzzle } from './IqraTahfizhPuzzle';
import { 
  Gamepad2, 
  Trophy, 
  Timer, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ExternalLink, 
  Play, 
  Award, 
  Sparkles, 
  HelpCircle,
  Puzzle,
  ChevronRight
} from 'lucide-react';

interface GameEdukasiProps {
  games: EducationalGame[];
}

export const GameEdukasi: React.FC<GameEdukasiProps> = ({ games }) => {
  const [activeTab, setActiveTab] = useState<'iqra' | 'kuis' | 'puzzle' | 'platform'>('iqra');

  // ==========================================
  // STATE KUIS CERDAS CERMAT PAI
  // ==========================================
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const currentQuestion = quizQuestionsData[currentQuestionIndex];

  // Timer per pertanyaan
  useEffect(() => {
    if (!isTimerRunning || isAnswerSubmitted || quizFinished || activeTab !== 'kuis') {
      return;
    }

    if (timeLeft <= 0) {
      handleTimeOut();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isTimerRunning, isAnswerSubmitted, quizFinished, activeTab]);

  const handleTimeOut = () => {
    setIsAnswerSubmitted(true);
    soundEffects.playError();
  };

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
    setIsAnswerSubmitted(true);

    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 10);
      soundEffects.playSuccess();
    } else {
      soundEffects.playError();
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < quizQuestionsData.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
      setTimeLeft(25);
    } else {
      setQuizFinished(true);
      soundEffects.playFanfare();
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
    setTimeLeft(25);
    setIsTimerRunning(true);
  };

  // ==========================================
  // STATE PUZZLE SUSUN RUKUN ISLAM & IMAN
  // ==========================================
  const [puzzleType, setPuzzleType] = useState<'islam' | 'iman'>('islam');
  // Shuffled items for puzzle
  const [userOrder, setUserOrder] = useState<typeof rukunIslamPuzzle>([]);
  const [puzzleSuccess, setPuzzleSuccess] = useState(false);

  // Initialize and shuffle
  useEffect(() => {
    const source = puzzleType === 'islam' ? rukunIslamPuzzle : rukunImanPuzzle;
    const shuffled = [...source].sort(() => Math.random() - 0.5);
    setUserOrder(shuffled);
    setPuzzleSuccess(false);
  }, [puzzleType]);

  const moveItem = (fromIndex: number, toIndex: number) => {
    const updated = [...userOrder];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setUserOrder(updated);

    // Check if sorted
    const isCorrect = updated.every((item, idx) => item.order === idx + 1);
    if (isCorrect) {
      setPuzzleSuccess(true);
      soundEffects.playFanfare();
    }
  };

  // ==========================================
  // STATE PLATFORM EMBED PREVIEW
  // ==========================================
  const [activeEmbedGame, setActiveEmbedGame] = useState<EducationalGame | null>(null);

  return (
    <section id="game-edukasi" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-800 uppercase mb-2">
              <span>MEDIA AJAR INTERAKTIF</span>
              <span aria-hidden="true">·</span>
              <span>GAMIFIKASI PEMBELAJARAN PAI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Game Edukasi &amp; Kuis PAI Interaktif
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Sarana belajar sambil bermain untuk peserta didik. Mainkan kuis cerdas cermat internal secara langsung, 
              pecahkan puzzle rukun Islam/Iman, atau jelajahi media eksternal (Wordwall, Quizizz, Kahoot).
            </p>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveTab('iqra')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'iqra'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900 bg-white/60 hover:bg-white'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>IQRA: Tahfizh Puzzle</span>
            </button>
            <button
              onClick={() => setActiveTab('kuis')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'kuis'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Kuis Cerdas Cermat</span>
            </button>
            <button
              onClick={() => setActiveTab('puzzle')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'puzzle'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Puzzle className="w-4 h-4" />
              <span>Susun Rukun</span>
            </button>
            <button
              onClick={() => setActiveTab('platform')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'platform'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Platform Eksternal</span>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TAB 0: IQRA: TAHFIZH PUZZLE (GAME RESMI IBU ULFA)        */}
        {/* ========================================================= */}
        {activeTab === 'iqra' && (
          <IqraTahfizhPuzzle />
        )}

        {/* ========================================================= */}
        {/* TAB 1: KUIS CERDAS CERMAT PAI (GAME INTERNAL SIAP MAIN)   */}
        {/* ========================================================= */}
        {activeTab === 'kuis' && (
          <div className="max-w-3xl mx-auto bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden">
            
            {/* Background Ambience */}
            <div 
              aria-hidden="true" 
              className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" 
            />

            {!quizFinished ? (
              <div className="relative space-y-6">
                
                {/* Header Kuis: Topik, Progress, & Timer */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-medium text-emerald-400 font-mono">
                      Soal {currentQuestionIndex + 1} dari {quizQuestionsData.length}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-300">
                      Topik: {currentQuestion.topic}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Timer */}
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-xs font-semibold ${
                      timeLeft <= 5 
                        ? 'bg-rose-950/80 text-rose-300 border-rose-800 animate-pulse' 
                        : 'bg-slate-800 text-emerald-400 border-slate-700'
                    }`}>
                      <Timer className="w-3.5 h-3.5" />
                      <span>{timeLeft}s</span>
                    </div>

                    {/* Live Score */}
                    <div className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 font-mono text-xs font-semibold text-white">
                      Skor: <span className="text-emerald-400">{score}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestionIndex + 1) / quizQuestionsData.length) * 100}%`
                    }}
                  />
                </div>

                {/* Pertanyaan */}
                <div className="py-2">
                  <h4 className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                    {currentQuestion.question}
                  </h4>
                </div>

                {/* Opsi Pilihan Jawaban */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentQuestion.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQuestion.correctIndex;
                    
                    let buttonStyle = 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700/80';
                    
                    if (isAnswerSubmitted) {
                      if (isCorrect) {
                        buttonStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200';
                      } else if (isSelected && !isCorrect) {
                        buttonStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                      } else {
                        buttonStyle = 'bg-slate-800/40 border-slate-800 text-slate-500';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isAnswerSubmitted}
                        className={`p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${buttonStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-md bg-white/10 text-white font-mono text-xs flex items-center justify-center shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{option}</span>
                        </div>
                        {isAnswerSubmitted && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        )}
                        {isAnswerSubmitted && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Penjelasan Jawaban & Tombol Soal Selanjutnya */}
                {isAnswerSubmitted && (
                  <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 space-y-3 animate-in fade-in">
                    <div className="flex items-start gap-2.5">
                      <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="text-xs text-slate-300 leading-relaxed">
                        <span className="font-semibold text-white block mb-0.5">Penjelasan Materi:</span>
                        {currentQuestion.explanation}
                      </div>
                    </div>

                    <div className="flex justify-end pt-1">
                      <button
                        onClick={handleNextQuestion}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-xs transition-colors"
                      >
                        <span>{currentQuestionIndex + 1 === quizQuestionsData.length ? 'Lihat Hasil Akhir' : 'Soal Berikutnya'}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

              </div>
            ) : (
              /* HASIL AKHIR KUIS (SCORECARD) */
              <div className="text-center py-6 space-y-6 relative">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-300 shadow-lg">
                  <Award className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold font-mono">
                    Kuis Cerdas Cermat Selesai
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {score >= 60 ? 'Maa Syaa Allah! Hasil Sangat Baik' : 'Alhamdulillah! Teruslah Semangat Belajar'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Kamu telah menyelesaikan seluruh soal materi Pendidikan Agama Islam Kurikulum Merdeka.
                  </p>
                </div>

                {/* Nilai Total */}
                <div className="p-6 bg-slate-800/90 rounded-2xl border border-slate-700 max-w-sm mx-auto space-y-2">
                  <span className="text-xs text-slate-400">Total Perolehan Nilai</span>
                  <div className="text-5xl font-extrabold text-white font-mono tabular-nums">
                    {score} <span className="text-lg font-normal text-slate-400">/ {quizQuestionsData.length * 10}</span>
                  </div>
                  <div className="text-xs text-emerald-400 font-medium">
                    Ketuntasan: {Math.round((score / (quizQuestionsData.length * 10)) * 100)}%
                  </div>
                </div>

                {/* Tombol Ulangi */}
                <div className="pt-2">
                  <button
                    onClick={handleRestartQuiz}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Mainkan Lagi / Coba Ulang</span>
                  </button>
                </div>

              </div>
            )}

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: PUZZLE INTERAKTIF SUSUN URUTAN RUKUN ISLAM & IMAN  */}
        {/* ========================================================= */}
        {activeTab === 'puzzle' && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Tantangan Susun Urutan Rukun
                </h3>
                <p className="text-xs text-slate-500">
                  Pindahkan urutan tombol di bawah hingga tersusun secara kronologis yang benar.
                </p>
              </div>

              {/* Selector Rukun Islam vs Rukun Iman */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
                <button
                  onClick={() => setPuzzleType('islam')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md ${
                    puzzleType === 'islam' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  5 Rukun Islam
                </button>
                <button
                  onClick={() => setPuzzleType('iman')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md ${
                    puzzleType === 'iman' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  6 Rukun Iman
                </button>
              </div>
            </div>

            {puzzleSuccess && (
              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-center space-y-1 animate-in zoom-in-95">
                <div className="inline-flex items-center gap-1.5 text-emerald-800 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Alhamdulillah, Urutan Tepat dan Sempurna!</span>
                </div>
                <p className="text-xs text-emerald-700">
                  Semoga pemahaman rukun {puzzleType === 'islam' ? 'Islam' : 'Iman'} ini senantiasa terpatri di hati.
                </p>
              </div>
            )}

            {/* List of Draggable/Clickable Puzzle Items */}
            <div className="space-y-2">
              {userOrder.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center font-mono">
                      {index + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      {item.label}
                    </span>
                  </div>

                  {/* Move Up / Move Down Controls */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => moveItem(index, index - 1)}
                      disabled={index === 0}
                      className="px-2 py-1 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Geser ke Atas"
                    >
                      ▲
                    </button>
                    <button
                      onClick={() => moveItem(index, index + 1)}
                      disabled={index === userOrder.length - 1}
                      className="px-2 py-1 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Geser ke Bawah"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-slate-500 italic text-center">
              Gunakan tombol panah ▲ dan ▼ untuk memindahkan urutan nomor.
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: PLATFORM MEDIA EKSTERNAL (WORDWALL, QUIZIZZ, DLL)  */}
        {/* ========================================================= */}
        {activeTab === 'platform' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {games.filter(g => g.platform !== 'Internal').map((game) => (
                <div
                  key={game.id}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all p-5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className={`px-2 py-0.5 rounded-md font-semibold text-[11px] ${game.badgeColor}`}>
                        {game.platform}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">{game.playCount}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {game.title}
                    </h3>

                    <div className="text-xs text-slate-500 flex items-center gap-2">
                      <span>{game.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{game.targetGrade}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {game.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
                    <a
                      href={game.playUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Buka Game</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                    </a>

                    <button
                      onClick={() => setActiveEmbedGame(game)}
                      className="px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                      title="Lihat Simulasi Embed"
                    >
                      Pratinjau Embed
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Petunjuk Komentar Placeholder Embed */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800">Petunjuk Embed Wordwall / Quizizz:</strong> Untuk memasang link game Wordwall atau Quizizz buatan Anda sendiri, edit properti <code className="px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded font-mono">playUrl</code> dan <code className="px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded font-mono">embedUrl</code> pada file <code className="px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded font-mono">src/data/mockData.ts</code>.
              </div>
            </div>
          </div>
        )}

        {/* MODAL EMBED PREVIEW UNTUK GURU */}
        {activeEmbedGame && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setActiveEmbedGame(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 p-6 space-y-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <span className="text-xs font-semibold text-emerald-700 uppercase">
                    Embed Platform {activeEmbedGame.platform}
                  </span>
                  <h4 className="text-base font-bold text-slate-900">
                    {activeEmbedGame.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveEmbedGame(null)}
                  className="text-slate-400 hover:text-slate-700 text-sm font-semibold"
                >
                  ✕ Tutup
                </button>
              </div>

              {/* Mock Embed Frame Container with Code Instructions */}
              {activeEmbedGame.platform === 'Google Sites' ? (
                <div className="w-full h-72 rounded-2xl bg-gradient-to-b from-emerald-50 to-teal-50/50 border border-emerald-200 flex flex-col items-center justify-center p-6 text-center space-y-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md">
                    <Sparkles className="w-7 h-7 text-amber-300" />
                  </div>
                  <div className="space-y-1 max-w-md">
                    <h5 className="text-base font-bold text-emerald-950">Aplikasi Game IQRA 4 (Google Sites Belajar.id)</h5>
                    <p className="text-xs text-emerald-800/90 leading-relaxed">
                      Aplikasi web pembelajaran interaktif resmi SMAN 1 Krembung karya Ibu Ulfatul Husna, S.Ag., M.Pd.
                    </p>
                  </div>
                  <a
                    href={activeEmbedGame.playUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Luncurkan Aplikasi IQRA 4</span>
                    <ExternalLink className="w-4 h-4 text-emerald-200" />
                  </a>
                </div>
              ) : (
                <div className="w-full h-64 rounded-xl bg-slate-900 flex flex-col items-center justify-center text-white p-6 text-center space-y-3">
                  <Gamepad2 className="w-12 h-12 text-emerald-400" />
                  <div className="space-y-1 max-w-sm">
                    <p className="text-sm font-bold text-white">Area Placeholder Embed {activeEmbedGame.platform}</p>
                    <p className="text-xs text-slate-400">
                      Saat Anda memasukkan iframe resmi dari {activeEmbedGame.platform}, game akan langsung dapat dimainkan oleh siswa di dalam kotak ini.
                    </p>
                  </div>
                  <a
                    href={activeEmbedGame.playUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100"
                  >
                    <span>Buka di Tab Baru</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              <div className="text-xs font-mono bg-slate-100 p-2.5 rounded-lg text-slate-700 overflow-x-auto">
                &lt;iframe src=&quot;{activeEmbedGame.embedUrl || activeEmbedGame.playUrl}&quot; width=&quot;100%&quot; height=&quot;500&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
