
import React, { useState, useEffect } from 'react';

// --- GAME 1: NAIL DRIVER (Existing, updated styles) ---
const HammerGame: React.FC = () => {
  const [nailPos, setNailPos] = useState(0);
  const [score, setScore] = useState(0);

  const driveNail = () => {
    if (nailPos < 80) {
      setNailPos(prev => prev + 10);
      if (nailPos + 10 >= 80) {
        setScore(prev => prev + 1);
        setTimeout(() => setNailPos(0), 500);
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 h-full flex flex-col items-center justify-between min-h-[350px] shadow-sm">
      <div className="text-center">
        <h4 className="font-bold text-slate-500 uppercase tracking-widest text-[10px] mb-1">Workshop Task 01</h4>
        <h3 className="text-xl font-black text-primary">NAIL DRIVER</h3>
      </div>
      
      <div className="relative w-full h-32 flex items-center justify-center">
        <div className="absolute bottom-0 w-32 h-10 bg-amber-800 rounded-lg shadow-inner border-t-2 border-amber-900 flex items-center justify-center">
          <div className="w-full h-full opacity-20 bg-[radial-gradient(circle,transparent_20%,#000_20%,#000_40%,transparent_40%,transparent_60%,#000_60%,#000_80%,transparent_80%)] bg-[length:10px_10px]"></div>
        </div>
        <div 
          className="w-2 bg-slate-400 rounded-b transition-all duration-100 relative shadow-sm"
          style={{ height: '40px', transform: `translateY(${nailPos}px)` }}
        >
          <div className="absolute -top-1 -left-1 w-4 h-2 bg-slate-500 rounded-full shadow-inner"></div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-sm font-bold bg-white dark:bg-slate-700 px-4 py-1 rounded-full shadow-sm">
          Nails Driven: <span className="text-primary">{score}</span>
        </div>
        <button 
          onClick={driveNail}
          className="w-full py-4 bg-primary text-white rounded-2xl font-black text-lg shadow-xl shadow-primary/30 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <span className="material-icons-round">gavel</span> HAMMER IT!
        </button>
      </div>
    </div>
  );
};

// --- GAME 2: TOOL MATCHER (Memory Game) ---
const ToolMatcher: React.FC = () => {
  const tools = ['handyman', 'plumbing', 'electrical_services', 'construction', 'gavel', 'format_paint'];
  const [cards, setCards] = useState<{ id: number, icon: string, flipped: boolean, matched: boolean }[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  const initGame = () => {
    const deck = [...tools, ...tools]
      .sort(() => Math.random() - 0.5)
      .map((icon, idx) => ({ id: idx, icon, flipped: false, matched: false }));
    setCards(deck);
    setFlipped([]);
    setScore(0);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleFlip = (id: number) => {
    if (flipped.length === 2 || cards[id].flipped || cards[id].matched) return;
    
    const newCards = [...cards];
    newCards[id].flipped = true;
    setCards(newCards);
    
    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].icon === cards[second].icon) {
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            (c.id === first || c.id === second) ? { ...c, matched: true } : c
          ));
          setFlipped([]);
          setScore(s => s + 1);
        }, 500);
      } else {
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            (c.id === first || c.id === second) ? { ...c, flipped: false } : c
          ));
          setFlipped([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 h-full flex flex-col items-center justify-between min-h-[350px] shadow-sm">
      <div className="text-center">
        <h4 className="font-bold text-slate-500 uppercase tracking-widest text-[10px] mb-1">Workshop Task 02</h4>
        <h3 className="text-xl font-black text-secondary">TOOL MATCHER</h3>
      </div>

      <div className="grid grid-cols-4 gap-2 w-full max-w-[200px] my-4">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleFlip(card.id)}
            className={`aspect-square rounded-lg flex items-center justify-center transition-all duration-300 transform ${card.flipped || card.matched ? 'bg-white dark:bg-slate-700 rotate-y-180 shadow-md' : 'bg-secondary/40 hover:bg-secondary/60 shadow-inner'}`}
          >
            {(card.flipped || card.matched) && (
              <span className={`material-icons-round text-lg ${card.matched ? 'text-secondary' : 'text-slate-600 dark:text-slate-300'}`}>
                {card.icon}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-sm font-bold bg-white dark:bg-slate-700 px-4 py-1 rounded-full shadow-sm">
          Matches: <span className="text-secondary">{score}/6</span>
        </div>
        <button 
          onClick={initGame}
          className="w-full py-4 bg-secondary text-white rounded-2xl font-black text-lg shadow-xl shadow-secondary/30 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <span className="material-icons-round">refresh</span> RESET TOOLS
        </button>
      </div>
    </div>
  );
};

// --- GAME 3: PIPE ROTATOR (Logic Game) ---
const PipeConnect: React.FC = () => {
  const [rotations, setRotations] = useState<number[]>(new Array(9).fill(0).map(() => Math.floor(Math.random() * 4)));
  const [win, setWin] = useState(false);

  const rotate = (idx: number) => {
    if (win) return;
    const newRots = [...rotations];
    newRots[idx] = (newRots[idx] + 1) % 4;
    setRotations(newRots);
    
    // Check win condition (all horizontal or all vertical for simplicity)
    if (newRots.every(r => r % 2 === 0)) {
       setWin(true);
    }
  };

  const reset = () => {
    setRotations(new Array(9).fill(0).map(() => Math.floor(Math.random() * 4)));
    setWin(false);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 h-full flex flex-col items-center justify-between min-h-[350px] shadow-sm">
      <div className="text-center">
        <h4 className="font-bold text-slate-500 uppercase tracking-widest text-[10px] mb-1">Workshop Task 03</h4>
        <h3 className="text-xl font-black text-blue-600">PIPE CONNECT</h3>
      </div>

      <div className="grid grid-cols-3 gap-1 bg-blue-900/10 p-2 rounded-xl border-2 border-blue-200 dark:border-blue-900 my-4">
        {rotations.map((rot, idx) => (
          <button
            key={idx}
            onClick={() => rotate(idx)}
            className={`w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-700 rounded-md transition-transform duration-200 shadow-sm border border-blue-100 dark:border-blue-800`}
            style={{ transform: `rotate(${rot * 90}deg)` }}
          >
            <div className="w-full h-3 bg-blue-500 rounded-full relative">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/20"></div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <div className={`text-sm font-bold bg-white dark:bg-slate-700 px-4 py-1 rounded-full shadow-sm transition-colors ${win ? 'text-green-500 animate-bounce' : 'text-blue-500'}`}>
          {win ? 'FLOW CONNECTED!' : 'Align the Pipes'}
        </div>
        <button 
          onClick={reset}
          className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-600/30 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <span className="material-icons-round">plumbing</span> REPAIR PIPES
        </button>
      </div>
    </div>
  );
};

// --- GAME 4: PRECISION SAW (Timing Game) ---
const PrecisionSaw: React.FC = () => {
  const [pos, setPos] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [score, setScore] = useState(0);
  const target = 50;
  const tolerance = 5;

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPos(p => {
        if (p >= 100) { setDirection(-1); return 100; }
        if (p <= 0) { setDirection(1); return 0; }
        return p + direction * 4;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isPlaying, direction]);

  const stopSaw = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      return;
    }
    setIsPlaying(false);
    if (Math.abs(pos - target) <= tolerance) {
      setScore(s => s + 1);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 h-full flex flex-col items-center justify-between min-h-[350px] shadow-sm">
      <div className="text-center">
        <h4 className="font-bold text-slate-500 uppercase tracking-widest text-[10px] mb-1">Workshop Task 04</h4>
        <h3 className="text-xl font-black text-slate-700 dark:text-slate-300 uppercase">Precision Saw</h3>
      </div>

      <div className="w-full px-4 space-y-2">
        <div className="relative h-12 bg-slate-200 dark:bg-slate-700 rounded-xl overflow-hidden shadow-inner border border-slate-300 dark:border-slate-600">
          {/* Target Zone */}
          <div 
            className="absolute h-full bg-green-400/30 border-x-2 border-green-500/50"
            style={{ left: `${target - tolerance}%`, width: `${tolerance * 2}%` }}
          />
          {/* Saw Blade */}
          <div 
            className="absolute h-full w-2 bg-slate-800 dark:bg-white flex items-center justify-center transition-all duration-50 shadow-lg"
            style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
          >
             <span className="material-icons-round text-sm animate-spin">settings</span>
          </div>
        </div>
        <div className="text-[10px] text-center font-bold text-slate-400 uppercase tracking-widest">Target Center Line</div>
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-sm font-bold bg-white dark:bg-slate-700 px-4 py-1 rounded-full shadow-sm">
          Perfect Cuts: <span className="text-slate-700 dark:text-white">{score}</span>
        </div>
        <button 
          onClick={stopSaw}
          className={`w-full py-4 text-white rounded-2xl font-black text-lg shadow-xl transition-all flex items-center justify-center gap-2 ${isPlaying ? 'bg-slate-800 shadow-slate-800/30' : 'bg-green-600 shadow-green-600/30'} active:scale-95`}
        >
          <span className="material-icons-round">{isPlaying ? 'not_interested' : 'play_arrow'}</span>
          {isPlaying ? 'STOP SAW' : 'NEXT CUT'}
        </button>
      </div>
    </div>
  );
};

export const GameZone: React.FC = () => {
  return (
    <section className="space-y-8" id="games">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <span className="bg-secondary/10 p-2 rounded-xl">
              <span className="material-icons-round text-secondary">videogame_asset</span>
            </span>
            Sfax Workshop Fun
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm ml-14">Take a break and test your builder skills!</p>
        </div>
        <span className="hidden md:block text-xs font-black text-slate-400 uppercase tracking-widest">Construction Zone v2.0</span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <HammerGame />
        <ToolMatcher />
        <PipeConnect />
        <PrecisionSaw />
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-100 dark:border-slate-800 flex items-center gap-6 shadow-sm">
        <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-2xl">
           <span className="material-icons-round text-amber-600">emoji_events</span>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-slate-900 dark:text-white">Workshop Rewards</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400">Play games to earn "Chariot Points" for future discounts on real tools!</p>
        </div>
        <button className="text-primary font-bold text-sm hover:underline">View Leaderboard</button>
      </div>
    </section>
  );
};
