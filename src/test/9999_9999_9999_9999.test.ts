import {convertNumber} from '../main/index';

test.each([
  [8000_0000_0000_0000, '八千兆'],
  [
    5432_9876_1234_5678,
    '五千四百三十二兆九千八百七十六亿一千二百三十四万五千六百七十八',
  ],
  [
    9007_1992_5474_0991,
    '九千零七兆一千九百九十二亿五千四百七十四万零九百九十一',
  ],
])(
  'integer-1_0000_0000-9999_9999_9999 - default',
  (input: number, expected: string) => {
    expect(convertNumber(input)).toBe(expected);
  }
);

test.each([
  [8000_0000_0000_0000, '八千兆'],
  [
    5432_9876_1234_5678,
    '五千四百三十二兆九千八百七十六亿一千二百三十四万五千六百七十八',
  ],
  [
    9007_1992_5474_0991,
    '九千零七兆一千九百九十二亿五千四百七十四万零九百九十一',
  ],
])(
  'integer-1_0000_0000-9999_9999_9999 - simplified',
  (input: number, expected: string) => {
    expect(convertNumber(input, {useTraditional: false})).toBe(expected);
  }
);

test.each([
  [8000_0000_0000_0000, '八千兆'],
  [
    5432_9876_1234_5678,
    '五千四百三十二兆九千八百七十六億一千二百三十四萬五千六百七十八',
  ],
  [
    9007_1992_5474_0991,
    '九千零七兆一千九百九十二億五千四百七十四萬零九百九十一',
  ],
])(
  'integer-1_0000_0000-9999_9999_9999 - traditional',
  (input: number, expected: string) => {
    expect(convertNumber(input, {useTraditional: true})).toBe(expected);
  }
);
