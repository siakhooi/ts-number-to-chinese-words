import {convertNumber, options} from '../main/index';

const INPUT = 0;
const EXPECTED = '零';

test('0/default', () => {
  expect(convertNumber(INPUT)).toBe(EXPECTED);
});

const OPTIONS: options[] = [
  {},
  {useTraditional: false},
  {useTraditional: true},
  {displayPositive: true},
  {displayPositive: false},
  {useTraditional: true, displayPositive: true},
  {useTraditional: true, displayPositive: false},
  {useTraditional: false, displayPositive: true},
  {useTraditional: false, displayPositive: false},
  {useTraditional: true, useCapital: true},
  {useTraditional: true, useCapital: false},
  {useTraditional: false, useCapital: true},
  {useTraditional: false, useCapital: false},
  {useCapital: true, displayPositive: true},
  {useCapital: true, displayPositive: false},
  {useCapital: false, displayPositive: true},
  {useCapital: false, displayPositive: false},
  {useCapital: true, useTraditional: true, displayPositive: true},
  {useCapital: true, useTraditional: true, displayPositive: false},
  {useCapital: true, useTraditional: false, displayPositive: true},
  {useCapital: true, useTraditional: false, displayPositive: false},
  {useCapital: false, useTraditional: true, displayPositive: true},
  {useCapital: false, useTraditional: true, displayPositive: false},
  {useCapital: false, useTraditional: false, displayPositive: true},
  {useCapital: false, useTraditional: false, displayPositive: false},
];

test.each(OPTIONS)('0', (options: options) => {
  expect(convertNumber(INPUT, options)).toBe(EXPECTED);
});
