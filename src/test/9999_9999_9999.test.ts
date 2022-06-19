import {convertNumber} from '../main/index';

test.each([
  [8000_0000_0000, '八千亿'],
  [9876_1234_5678, '九千八百七十六亿一千二百三十四万五千六百七十八'],
  [9999_9999_9999, '九千九百九十九亿九千九百九十九万九千九百九十九'],
])(
  'integer-1_0000_0000-9999_9999_9999 - default',
  (input: number, expected: string) => {
    expect(convertNumber(input)).toBe(expected);
  }
);

test.each([
  [8000_0000_0000, '八千亿'],
  [9876_1234_5678, '九千八百七十六亿一千二百三十四万五千六百七十八'],
  [9999_9999_9999, '九千九百九十九亿九千九百九十九万九千九百九十九'],
])(
  'integer-1_0000_0000-9999_9999_9999 - default',
  (input: number, expected: string) => {
    expect(convertNumber(input, {useTraditional: false})).toBe(expected);
  }
);

test.each([
  [8000_0000_0000, '八千億'],
  [9876_1234_5678, '九千八百七十六億一千二百三十四萬五千六百七十八'],
  [9999_9999_9999, '九千九百九十九億九千九百九十九萬九千九百九十九'],
])(
  'integer-1_0000_0000-9999_9999_9999 - default',
  (input: number, expected: string) => {
    expect(convertNumber(input, {useTraditional: true})).toBe(expected);
  }
);
