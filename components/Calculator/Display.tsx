'use client';

import { Button } from '@/components/ui/button';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Delete, RotateCcw } from 'lucide-react';

interface DisplayProps {
  display: string;
  equation: string;
  onDelete: () => void;
  onClear: () => void;
}

export function Display({ display, equation, onDelete, onClear }: DisplayProps) {
  return (
    <CardHeader>
      <CardTitle className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{equation}</span>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={onDelete} className="h-8 w-8">
            <Delete className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onClear} className="h-8 w-8">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </CardTitle>
      <div className="text-4xl font-bold text-right mt-2 font-mono">
        {display}
      </div>
    </CardHeader>
  );
}