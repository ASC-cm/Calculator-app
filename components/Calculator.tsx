'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Equal, Delete, Plus, Minus, X, Divide, RotateCcw } from 'lucide-react';

export default function Calculator() {
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

  const buttons = [
    { label: '7', onClick: () => handleNumber('7') },
    { label: '8', onClick: () => handleNumber('8') },
    { label: '9', onClick: () => handleNumber('9') },
    { label: <Divide className="h-4 w-4" />, onClick: () => handleOperator('/'), variant: 'secondary' },
    { label: '4', onClick: () => handleNumber('4') },
    { label: '5', onClick: () => handleNumber('5') },
    { label: '6', onClick: () => handleNumber('6') },
    { label: <X className="h-4 w-4" />, onClick: () => handleOperator('*'), variant: 'secondary' },
    { label: '1', onClick: () => handleNumber('1') },
    { label: '2', onClick: () => handleNumber('2') },
    { label: '3', onClick: () => handleNumber('3') },
    { label: <Minus className="h-4 w-4" />, onClick: () => handleOperator('-'), variant: 'secondary' },
    { label: '0', onClick: () => handleNumber('0') },
    { label: '.', onClick: () => handleNumber('.') },
    { label: <Equal className="h-4 w-4" />, onClick: calculate, variant: 'default' },
    { label: <Plus className="h-4 w-4" />, onClick: () => handleOperator('+'), variant: 'secondary' },
  ];

  return (
    <Card className="w-full max-w-md shadow-xl bg-white/90 backdrop-blur-sm dark:bg-gray-900/90">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">{equation}</span>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={deleteLastDigit}
              className="h-8 w-8"
            >
              <Delete className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={clear}
              className="h-8 w-8"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
        <div className="text-4xl font-bold text-right mt-2 font-mono">
          {display}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn, index) => (
            <Button
              key={index}
              onClick={btn.onClick}
              variant={btn.variant as any || 'outline'}
              className="h-14 text-lg font-semibold"
            >
              {btn.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}