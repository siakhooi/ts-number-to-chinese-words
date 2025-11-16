import {convertNumber} from './main/index';
import * as fs from 'fs';

const DIGIT = 16;

const FILENAME = 'src/test/data-digit-' + DIGIT + '.ts';

function pr(...s: (string | number)[]) {
  fs.appendFileSync(FILENAME, s.join('') + '\n');
}
function formatBigNumber(x: number) {
  return x.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '_');
}
function quote(text: string) {
  return "'" + text + "'";
}
function bracket(text: string) {
  return '[' + text + ']';
}
function generateData(number: number): void {
  const expectedValues = [
    convertNumber(number),
    convertNumber(number, {useTraditional: true}),
    convertNumber(number, {useCapital: true}),
    convertNumber(number, {useCapital: true, useTraditional: true}),
  ];
  const testData = [
    formatBigNumber(number),
    bracket(expectedValues.map(x => quote(x)).join(', ')),
  ];

  pr('  ' + bracket(testData.join(', ')) + ',');
}

fs.closeSync(fs.openSync(FILENAME, 'w'));

pr('/* eslint-disable prettier/prettier */');
pr('export const data: [number, string[]][] = [');

const start = Math.pow(2, DIGIT - 1);
const last = Math.pow(2, DIGIT) - 2;

const digits: number[] = [];
for (let i = 0; i < DIGIT; i++) digits[i] = 0;

for (let i = start; i <= last; i++) {
  let n1 = i;
  let s = '';
  for (let j = 0; j < DIGIT; j++) {
    const lastBit = n1 & 1;
    n1 >>= 1;
    if (lastBit === 1) {
      digits[j]++;
      if (
        (DIGIT === 16 && j === DIGIT - 1 && digits[j] >= 8) ||
        digits[j] === 10
      )
        digits[j] = 1;
      s = String(digits[j]) + s;
    } else s = '0' + s;
  }
  generateData(parseInt(s));
}
for (let i = 1; i <= 9; i++) {
  const n =
    DIGIT === 16 && i === 9
      ? Number.MAX_SAFE_INTEGER
      : Number(String(i).repeat(DIGIT));
  generateData(n);
}

pr('];');
