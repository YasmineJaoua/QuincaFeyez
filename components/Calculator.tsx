
import React, { useState } from 'react';

export const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const clear = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (prevValue === null) {
      setPrevValue(inputValue);
    } else if (operator) {
      const currentValue = prevValue || 0;
      const newValue = operate(currentValue, inputValue, operator);
      setPrevValue(newValue);
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const operate = (a: number, b: number, op: string) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : 0;
      default: return b;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);
    if (operator && prevValue !== null) {
      const newValue = operate(prevValue, inputValue, operator);
      setDisplay(String(newValue));
      setPrevValue(null);
      setOperator(null);
      setWaitingForOperand(false);
    }
  };

  const btnClass = "h-10 w-full rounded-lg font-bold text-sm transition-all active:scale-95";
  const numBtn = `${btnClass} bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600`;
  const opBtn = `${btnClass} bg-primary/10 text-primary hover:bg-primary/20`;

  return (
    <div className="p-4 w-64 bg-white dark:bg-slate-800 shadow-2xl rounded-2xl border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in duration-200">
      <div className="mb-4 p-3 bg-slate-900 rounded-xl text-right overflow-hidden">
        <span className="text-white text-xl font-mono truncate block">{display}</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button onClick={clear} className={`${opBtn} col-span-2 bg-red-500/10 text-red-500`}>AC</button>
        <button onClick={() => performOperation('/')} className={opBtn}>÷</button>
        <button onClick={() => performOperation('*')} className={opBtn}>×</button>
        
        {[7, 8, 9].map(n => <button key={n} onClick={() => inputDigit(String(n))} className={numBtn}>{n}</button>)}
        <button onClick={() => performOperation('-')} className={opBtn}>−</button>
        
        {[4, 5, 6].map(n => <button key={n} onClick={() => inputDigit(String(n))} className={numBtn}>{n}</button>)}
        <button onClick={() => performOperation('+')} className={opBtn}>+</button>
        
        {[1, 2, 3].map(n => <button key={n} onClick={() => inputDigit(String(n))} className={numBtn}>{n}</button>)}
        <button onClick={handleEquals} className={`${btnClass} row-span-2 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20`}>=</button>
        
        <button onClick={() => inputDigit('0')} className={`${numBtn} col-span-2`}>0</button>
        <button onClick={inputDot} className={numBtn}>.</button>
      </div>
    </div>
  );
};
