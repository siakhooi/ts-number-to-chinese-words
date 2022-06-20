import {convertNumber, options} from '../main/index';
import {generate} from './TestUtils';
import {data, POSITIVE} from './data';

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
