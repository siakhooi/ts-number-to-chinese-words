import {numberToChineseWords} from '../main/index';

test.each([
  [100, '一百'],
  [101, '一百零一'],
  [102, '一百零二'],
  [110, '一百一十'],
  [111, '一百一十一'],
  [116, '一百一十六'],
  [120, '一百二十'],
  [123, '一百二十三'],
  [130, '一百三十'],
  [200, '二百'],
  [205, '二百零五'],
  [290, '二百九十'],
  [808, '八百零八'],
  [818, '八百一十八'],
  [880, '八百八十'],
  [391, '三百九十一'],
  [492, '四百九十二'],
  [999, '九百九十九'],
])('integer-100-999', (input: number, expected: string) => {
  expect(numberToChineseWords(input)).toBe(expected);
});
