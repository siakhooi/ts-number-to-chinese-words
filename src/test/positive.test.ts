import {convertNumber} from '../main/index';

test.each([
  [100, '正一百'],
  [1_0000, '正一万'],
  [1_0000_0000, '正一亿'],
  [9999_9999_9999, '正九千九百九十九亿九千九百九十九万九千九百九十九'],
  [1_0000_0000_0000, '正一兆'],
  [
    9007_1992_5474_0991,
    '正九千零七兆一千九百九十二亿五千四百七十四万零九百九十一',
  ],
])('positive numbers', (input: number, expected: string) => {
  expect(convertNumber(input, {displayPositive: true})).toBe(expected);
});
test.each([
  [100, '正一百'],
  [1001, '正一千零一'],
  [1_0000, '正一萬'],
  [2_0011, '正二萬零一十一'],
  [1_0205_5070, '正一億零二百零五萬五千零七十'],
  [700_0000_0000, '正七百億'],
  [9999_9999_9999, '正九千九百九十九億九千九百九十九萬九千九百九十九'],
  [1_0000_0000_0000, '正一兆'],
  [
    9007_1992_5474_0991,
    '正九千零七兆一千九百九十二億五千四百七十四萬零九百九十一',
  ],
])('positive numbers - traditional', (input: number, expected: string) => {
  expect(
    convertNumber(input, {useTraditional: true, displayPositive: true})
  ).toBe(expected);
});
