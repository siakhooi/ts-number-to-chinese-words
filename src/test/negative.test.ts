import {convertNumber} from '../main/index';

test.each([
  [
    -9007_1992_5474_0991,
    '负九千零七兆一千九百九十二亿五千四百七十四万零九百九十一',
  ],
])('negative numbers - default', (input: number, expected: string) => {
  expect(convertNumber(input)).toBe(expected);
});
test.each([
  [
    -9007_1992_5474_0991,
    '负九千零七兆一千九百九十二亿五千四百七十四万零九百九十一',
  ],
])('negative numbers - simplified', (input: number, expected: string) => {
  expect(convertNumber(input, {useTraditional: false})).toBe(expected);
});

test.each([
  [
    -9007_1992_5474_0991,
    '負九千零七兆一千九百九十二億五千四百七十四萬零九百九十一',
  ],
])('negative numbers - traditional', (input: number, expected: string) => {
  expect(convertNumber(input, {useTraditional: true})).toBe(expected);
});
