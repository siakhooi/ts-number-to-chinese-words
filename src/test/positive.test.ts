import {convertNumber} from '../main/index';

test.each([
  [
    9007_1992_5474_0991,
    '正九千零七兆一千九百九十二亿五千四百七十四万零九百九十一',
  ],
])('positive numbers', (input: number, expected: string) => {
  expect(convertNumber(input, {displayPositive: true})).toBe(expected);
});
test.each([
  [
    9007_1992_5474_0991,
    '正九千零七兆一千九百九十二億五千四百七十四萬零九百九十一',
  ],
])('positive numbers - traditional', (input: number, expected: string) => {
  expect(
    convertNumber(input, {useTraditional: true, displayPositive: true})
  ).toBe(expected);
});
