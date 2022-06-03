import {numberToChineseWords} from '../index';

test.each([
  [1, '1'],
  [2, '2'],
])('default', (input: number, expected: string) => {
  expect(numberToChineseWords(input)).toBe(expected);
});
