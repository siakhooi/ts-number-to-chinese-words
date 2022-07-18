import {convertNumber, options} from '../main/index';
import {data} from './data-contraction-80';
import {generate} from './TestUtils';

const TESTSUITE = 'Contraction_80';

export const option0: options[] = [{useContraction80: true}];
export const option1: options[] = [
  {useContraction80: true, useTraditional: true},
];
export const option2: options[] = [{useContraction80: true, useCapital: true}];
export const option3: options[] = [
  {useContraction80: true, useTraditional: true, useCapital: true},
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
