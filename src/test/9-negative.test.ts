import {convertNumber, options} from '../main/index';
import {merge} from './TestUtils';
import {data, NEGATIVE} from './data-9';

test.each(data)('/1-9/-ve/default', (input: number, expected: string) => {
  expected = NEGATIVE.SIMPLIFIED + expected;
  expect(convertNumber(-input)).toBe(expected);
});

const optionExpectSimplified: options[] = [
  {},
  {useTraditional: false},
  {displayPositive: false},
  {useCapital: false},
];

test.each(merge(data, optionExpectSimplified))(
  '/1-9/-ve/simplified',
  (input: number, expected: string, e1, options: options) => {
    expected = NEGATIVE.SIMPLIFIED + expected;
    expect(convertNumber(-input, options)).toBe(expected);
  }
);
const optionExpectTraditional: options[] = [
  {useTraditional: true},
  {useTraditional: true, displayPositive: false},
  {useTraditional: true, displayPositive: true},
  {useTraditional: true, useCapital: false},
  {useTraditional: true, useCapital: false, displayPositive: false},
  {useTraditional: true, useCapital: false, displayPositive: true},
];

test.each(merge(data, optionExpectTraditional))(
  '/1-9/-ve/traditional',
  (input: number, expected: string, e1, options: options) => {
    expected = NEGATIVE.TRADITIONAL + expected;
    expect(convertNumber(-input, options)).toBe(expected);
  }
);

const optionExpectCapitalSimplified: options[] = [
  {useCapital: true},
  {useCapital: true, useTraditional: false},
  {useCapital: true, displayPositive: false},
  {useCapital: true, displayPositive: true},
  {useCapital: true, useTraditional: false, displayPositive: false},
  {useCapital: true, useTraditional: false, displayPositive: true},
];
test.each(merge(data, optionExpectCapitalSimplified))(
  '/1-9/-ve/capital',
  (input: number, e1, expected: string, options: options) => {
    expected = NEGATIVE.SIMPLIFIED + expected;
    expect(convertNumber(-input, options)).toBe(expected);
  }
);
