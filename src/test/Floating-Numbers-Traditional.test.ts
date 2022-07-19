import {convertNumber, Options} from '../main/index';
import {generate} from './TestUtils';
import {data} from './data-floating-numbers-traditional';

const TESTSUITE = 'Floating-Numbers-Traditional';

export const option0: Options[] = [{useTraditionalFloatingUnit: true}];
export const option1: Options[] = [
  {useTraditionalFloatingUnit: true, useTraditional: true},
];
export const option2: Options[] = [
  {useTraditionalFloatingUnit: true, useCapital: true},
];
export const option3: Options[] = [
  {useTraditionalFloatingUnit: true, useTraditional: true, useCapital: true},
];

test.each(generate(option0, data, 0))(
  TESTSUITE + '/simplified/normal',
  (options: Options, input: number, expected: string) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);
test.each(generate(option1, data, 1))(
  TESTSUITE + '/traditional/normal',
  (options: Options, input: number, expected: string) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);
test.each(generate(option2, data, 2))(
  TESTSUITE + '/simplified/capital',
  (options: Options, input: number, expected: string) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);
test.each(generate(option3, data, 3))(
  TESTSUITE + '/traditional/capital',
  (options: Options, input: number, expected: string) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);
