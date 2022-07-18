import {convertNumber, options} from '../main/index';
import {data} from './data-contraction-20';
import {generate} from './TestUtils';

const TESTSUITE = 'Contraction_20';

export const option0: options[] = [{use_contraction_20: true}];
export const option1: options[] = [
  {use_contraction_20: true, useTraditional: true},
];
export const option2: options[] = [
  {use_contraction_20: true, useCapital: true},
];
export const option3: options[] = [
  {use_contraction_20: true, useTraditional: true, useCapital: true},
];

test.each(generate(option0, data, 0))(
  TESTSUITE + '/simplified/normal',
  (options: options, input: number, expected: string) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);
test.each(generate(option1, data, 1))(
  TESTSUITE + '/traditional/normal',
  (options: options, input: number, expected: string) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);
test.each(generate(option2, data, 2))(
  TESTSUITE + '/simplified/capital',
  (options: options, input: number, expected: string) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);
test.each(generate(option3, data, 3))(
  TESTSUITE + '/traditional/capital',
  (options: options, input: number, expected: string) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);
