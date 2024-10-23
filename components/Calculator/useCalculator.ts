'use client';

import { useState } from 'react';

export function useCalculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (num: string) => {
    if (shouldResetDisplay) {
      setDisplay(num);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperator = (op: string) => {
    setShouldResetDisplay(true);
    setEquation(display + ' ' + op + ' ');
  };

  const calculate = () => {
    try {
      const fullEquation = equation + display;
      const result = eval(fullEquation);
      setDisplay(String(result));
      setEquation('');
      setShouldResetDisplay(true);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setShouldResetDisplay(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
    setShouldResetDisplay(false);
  };

  const deleteLastDigit = () => {
    setDisplay(display.length === 1 ? '0' : display.slice(0, -1));
  };

  return {
    display,
    equation,
    handleNumber,
    handleOperator,
    calculate,
    clear,
    deleteLastDigit,
  };
}