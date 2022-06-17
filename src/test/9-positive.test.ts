import {convertNumber, options} from '../main/index';
import {merge} from './TestUtils';
import {data, POSITIVE} from './data-9';

test.each(data)('/1-9/+ve/default', (input: number, expected: string) => {
  expect(convertNumber(input)).toBe(expected);
});

const optionExpectSimplified: options[] = [
  {},
  {useTraditional: false},
  {useTraditional: true},
  {displayPositive: false},
  {useCapital: false},
];

test.each(merge(data, optionExpectSimplified))(
  '/1-9/+ve/simplified',
  (input: number, expected: string, e1, options: options) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);

const optionExpectCapital: options[] = [
  {useCapital: true},
  {useCapital: true, useTraditional: false},
  {useCapital: true, displayPositive: false},
  {useCapital: true, useTraditional: false, displayPositive: false},
];
test.each(merge(data, optionExpectCapital))(
  '/1-9/+ve/capital',
  (input: number, e1, expected: string, options: options) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);

const optionExpectSimplifiedPositive: options[] = [
  {displayPositive: true},
  {displayPositive: true, useTraditional: false},
  {displayPositive: true, useTraditional: true},
  {displayPositive: true, useCapital: false},
  {displayPositive: true, useTraditional: true, useCapital: false},
  {displayPositive: true, useTraditional: false, useCapital: false},
];

test.each(merge(data, optionExpectSimplifiedPositive))(
  '/1-9/+ve/simplified+positive',
  (input: number, expected: string, e1, options: options) => {
    expected = POSITIVE + expected;
    expect(convertNumber(input, options)).toBe(expected);
  }
);
const optionExpectCapitalPositive: options[] = [
  {displayPositive: true, useCapital: true},
  {displayPositive: true, useCapital: true, useTraditional: false},
];

test.each(merge(data, optionExpectCapitalPositive))(
  '/1-9/+ve/capital+positive',
  (input: number, e1, expected: string, options: options) => {
    expected = POSITIVE + expected;
    expect(convertNumber(input, options)).toBe(expected);
  }
);
