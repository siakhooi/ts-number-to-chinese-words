import {convertNumber, options} from '../main/index';
import {generate} from './TestUtils';
import {data, POSITIVE} from './data';

//  ____       _     _____
// / ___|  ___| |_  |_   _|_      _____
// \___ \ / _ \ __|   | | \ \ /\ / / _ \
//  ___) |  __/ |_    | |  \ V  V / (_) |
// |____/ \___|\__|   |_|   \_/\_/ \___/

const optionExpectCapital: options[] = [
  {useCapital: true},
  {useCapital: true, useTraditional: false},
  {useCapital: true, displayPositive: false},
  {useCapital: true, useTraditional: false, displayPositive: false},
];
test.each(generate(optionExpectCapital, data, 2))(
  '/1-9999/+ve/capital',
  (options: options, input: number, expected: string) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);

const optionExpectCapitalPositive: options[] = [
  {displayPositive: true, useCapital: true},
  {displayPositive: true, useCapital: true, useTraditional: false},
];

test.each(generate(optionExpectCapitalPositive, data, 2))(
  '/1-9999/+ve/capital+positive',
  (options: options, input: number, expected: string) => {
    expected = POSITIVE + expected;
    expect(convertNumber(input, options)).toBe(expected);
  }
);

//  ____       _     _____ _
// / ___|  ___| |_  |_   _| |__  _ __ ___  ___
// \___ \ / _ \ __|   | | | '_ \| '__/ _ \/ _ \
//  ___) |  __/ |_    | | | | | | | |  __/  __/
// |____/ \___|\__|   |_| |_| |_|_|  \___|\___|

const optionExpectCapitalTraditional: options[] = [
  {useCapital: true, useTraditional: true},
];

test.each(generate(optionExpectCapitalTraditional, data, 3))(
  '/1-9999/+ve/capital+traditional',
  (options: options, input: number, expected: string) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);
const optionExpectCapitalTraditionalPositive: options[] = [
  {useCapital: true, useTraditional: true, displayPositive: true},
];

test.each(generate(optionExpectCapitalTraditionalPositive, data, 3))(
  '/1-9999/+ve/capital+traditional+positive',
  (options: options, input: number, expected: string) => {
    expected = POSITIVE + expected;
    expect(convertNumber(input, options)).toBe(expected);
  }
);
