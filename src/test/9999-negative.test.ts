import {convertNumber, options} from '../main/index';
import {generate} from './TestUtils';
import {data, NEGATIVE} from './data-9999';

//  ____       _     _____
// / ___|  ___| |_  |__  /___ _ __ ___
// \___ \ / _ \ __|   / // _ \ '__/ _ \
//  ___) |  __/ |_   / /|  __/ | | (_) |
// |____/ \___|\__| /____\___|_|  \___/

test.each(data)('/9999/-ve/default', (input: number, expected: string[]) => {
  const expectedValue = NEGATIVE.SIMPLIFIED + expected[0];
  expect(convertNumber(-input)).toBe(expectedValue);
});

const optionExpectSimplified: options[] = [
  {},
  {useTraditional: false},
  {displayPositive: false},
  {useCapital: false},
];

test.each(generate(optionExpectSimplified, data))(
  '/9999/-ve/simplified',
  (options: options, input: number, expected: string) => {
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

test.each(generate(optionExpectTraditional, data))(
  '/9999/-ve/traditional',
  (options: options, input: number, expected: string) => {
    expected = NEGATIVE.TRADITIONAL + expected;
    expect(convertNumber(-input, options)).toBe(expected);
  }
);

//  ____       _      ___
// / ___|  ___| |_   / _ \ _ __   ___
// \___ \ / _ \ __| | | | | '_ \ / _ \
//  ___) |  __/ |_  | |_| | | | |  __/
// |____/ \___|\__|  \___/|_| |_|\___|

const optionExpectCapitalSimplified: options[] = [
  {useCapital: true},
  {useCapital: true, useTraditional: false},
  {useCapital: true, displayPositive: false},
  {useCapital: true, displayPositive: true},
  {useCapital: true, useTraditional: false, displayPositive: false},
  {useCapital: true, useTraditional: false, displayPositive: true},
];
test.each(generate(optionExpectCapitalSimplified, data, 1))(
  '/9999/-ve/capital',
  (options: options, input: number, expected: string) => {
    expected = NEGATIVE.SIMPLIFIED + expected;
    expect(convertNumber(-input, options)).toBe(expected);
  }
);

//  ____       _     _____
// / ___|  ___| |_  |_   _|_      _____
// \___ \ / _ \ __|   | | \ \ /\ / / _ \
//  ___) |  __/ |_    | |  \ V  V / (_) |
// |____/ \___|\__|   |_|   \_/\_/ \___/

const optionExpectCapitalTraditional: options[] = [
  {useCapital: true, useTraditional: true},
  {useCapital: true, useTraditional: true, displayPositive: false},
  {useCapital: true, useTraditional: true, displayPositive: true},
];
test.each(generate(optionExpectCapitalTraditional, data, 2))(
  '/9999/-ve/capital+traditional',
  (options: options, input: number, expected: string) => {
    expected = NEGATIVE.TRADITIONAL + expected;
    expect(convertNumber(-input, options)).toBe(expected);
  }
);