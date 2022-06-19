import {convertNumber} from '../main/index';

test.each([
  [-9876_1234_5678, '负九千八百七十六亿一千二百三十四万五千六百七十八'],
  [-9999_9999_9999, '负九千九百九十九亿九千九百九十九万九千九百九十九'],
  [-1_0000_0000_0000, '负一兆'],
  [
    -9007_1992_5474_0991,
    '负九千零七兆一千九百九十二亿五千四百七十四万零九百九十一',
  ],
])('negative numbers - default', (input: number, expected: string) => {
  expect(convertNumber(input)).toBe(expected);
});
test.each([
  [-9876_1234_5678, '负九千八百七十六亿一千二百三十四万五千六百七十八'],
  [-9999_9999_9999, '负九千九百九十九亿九千九百九十九万九千九百九十九'],
  [-1_0000_0000_0000, '负一兆'],
  [
    -9007_1992_5474_0991,
    '负九千零七兆一千九百九十二亿五千四百七十四万零九百九十一',
  ],
])('negative numbers - simplified', (input: number, expected: string) => {
  expect(convertNumber(input, {useTraditional: false})).toBe(expected);
});

test.each([
  [-9876_1234_5678, '負九千八百七十六億一千二百三十四萬五千六百七十八'],
  [-9999_9999_9999, '負九千九百九十九億九千九百九十九萬九千九百九十九'],
  [-1_0000_0000_0000, '負一兆'],
  [
    -9007_1992_5474_0991,
    '負九千零七兆一千九百九十二億五千四百七十四萬零九百九十一',
  ],
])('negative numbers - traditional', (input: number, expected: string) => {
  expect(convertNumber(input, {useTraditional: true})).toBe(expected);
});
