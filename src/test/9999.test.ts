import {numberToChineseWords} from '../main/index';

test.each([
  [1000, '一千'],
  [1001, '一千零一'],
  [1020, '一千零二十'],
  [1100, '一千一百'],
  [1110, '一千一百一十'],
  [1111, '一千一百一十一'],
  [1165, '一千一百六十五'],
  [1023, '一千零二十三'],
  [1300, '一千三百'],
  [2203, '二千二百零三'],
  [2000, '二千'],
  [9998, '九千九百九十八'],
  [9999, '九千九百九十九'],
])('integer-1000-9999', (input: number, expected: string) => {
  expect(numberToChineseWords(input)).toBe(expected);
});
