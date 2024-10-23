'use client';

import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Equal, Plus, Minus, X, Divide } from 'lucide-react';

interface KeypadProps {
  onNumberClick: (num: string) => void;
  onOperatorClick: (op: string) => void;
  onCalculate: () => void;
}

export function Keypad({ onNumberClick, onOperatorClick, onCalculate }: KeypadProps) {
  const buttons = [
    { label: '7', onClick: () => onNumberClick('7') },
    { label: '8', onClick: () => onNumberClick('8') },
    { label: '9', onClick: () => onNumberClick('9') },
    { label: <Divide className="h-4 w-4" />, onClick: () => onOperatorClick('/'), variant: 'secondary' },
    { label: '4', onClick: () => onNumberClick('4') },
    { label: '5', onClick: () => onNumberClick('5') },
    { label: '6', onClick: () => onNumberClick('6') },
    { label: <X className="h-4 w-4" />, onClick: () => onOperatorClick('*'), variant: 'secondary' },
    { label: '1', onClick: () => onNumberClick('1') },
    { label: '2', onClick: () => onNumberClick('2') },
    { label: '3', onClick: () => onNumberClick('3') },
    { label: <Minus className="h-4 w-4" />, onClick: () => onOperatorClick('-'), variant: 'secondary' },
    { label: '0', onClick: () => onNumberClick('0') },
    { label: '.', onClick: () => onNumberClick('.') },
    { label: <Equal className="h-4 w-4" />, onClick: onCalculate, variant: 'default' },
    { label: <Plus className="h-4 w-4" />, onClick: () => onOperatorClick('+'), variant: 'secondary' },
  ];

  return (
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
  );
}