import {numberToChineseWords} from '../index';

test.each([
  [0, '零'],
  [1, '一'],
  [2, '二'],
  [3, '三'],
  [4, '四'],
  [5, '五'],
  [6, '六'],
  [7, '七'],
  [8, '八'],
  [9, '九'],
])('default', (input: number, expected: string) => {
  expect(numberToChineseWords(input)).toBe(expected);
});
test.each([[-1], [10]])('throw error', (input: number) => {
  const errmsg = 'Not Supported';
  expect(() => {
    numberToChineseWords(input);
  }).toThrowError(errmsg);
});
