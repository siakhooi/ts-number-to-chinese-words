import {convertNumber, options} from '../main/index';
import {generate} from './TestUtils';
import {data, POSITIVE} from './data';

//  ____       _     _____
// / ___|  ___| |_  |__  /___ _ __ ___
// \___ \ / _ \ __|   / // _ \ '__/ _ \
//  ___) |  __/ |_   / /|  __/ | | (_) |
// |____/ \___|\__| /____\___|_|  \___/

test.each(data)('/1-9999/+ve/default', (input: number, expected: string[]) => {
  expect(convertNumber(input)).toBe(expected[0]);
});

const optionExpectSimplified: options[] = [
  {},
  {useTraditional: false},
  {displayPositive: false},
  {useTraditional: false, displayPositive: false},
  {useCapital: false},
];

test.each(generate(optionExpectSimplified, data))(
  '/1-9999/+ve/simplified',
  (options: options, input: number, expected: string) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);

const optionExpectSimplifiedPositive: options[] = [
  {displayPositive: true},
  {displayPositive: true, useTraditional: false},
  {displayPositive: true, useCapital: false},
  {displayPositive: true, useTraditional: false, useCapital: false},
];

test.each(generate(optionExpectSimplifiedPositive, data))(
  '/1-9999/+ve/simplified+positive',
  (options: options, input: number, expected: string) => {
    expected = POSITIVE + expected;
    expect(convertNumber(input, options)).toBe(expected);
  }
);

//  ____       _      ___
// / ___|  ___| |_   / _ \ _ __   ___
// \___ \ / _ \ __| | | | | '_ \ / _ \
//  ___) |  __/ |_  | |_| | | | |  __/
// |____/ \___|\__|  \___/|_| |_|\___|

const optionExpectTraditional: options[] = [
  {useTraditional: true},
  {useTraditional: true, displayPositive: false},
];
test.each(generate(optionExpectTraditional, data, 1))(
  '/1-9999/+ve/traditional',
  (options: options, input: number, expected: string) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);

const optionExpectTraditionalPositive: options[] = [
  {displayPositive: true, useTraditional: true},
  {displayPositive: true, useTraditional: true, useCapital: false},
];
test.each(generate(optionExpectTraditionalPositive, data, 1))(
  '/1-9999/+ve/traditional+positive',
  (options: options, input: number, expected: string) => {
    expected = POSITIVE + expected;
    expect(convertNumber(input, options)).toBe(expected);
  }
);

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
