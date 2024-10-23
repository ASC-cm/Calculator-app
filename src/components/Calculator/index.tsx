import { Card } from '../ui/card';
import { Display } from './Display';
import { Keypad } from './Keypad';
import { useCalculator } from './useCalculator';

export default function Calculator() {
  const {
    display,
    equation,
    handleNumber,
    handleOperator,
    calculate,
    clear,
    deleteLastDigit,
  } = useCalculator();

  return (
    <Card className="w-full max-w-md shadow-xl bg-white/90 backdrop-blur-sm dark:bg-neutral-900/90">
      <Display
        display={display}
        equation={equation}
        onDelete={deleteLastDigit}
        onClear={clear}
      />
      <Keypad
        onNumberClick={handleNumber}
        onOperatorClick={handleOperator}
        onCalculate={calculate}
      />
    </Card>
  );
}