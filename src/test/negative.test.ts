import {convertNumber} from '../main/index';

test.each([
  [-1, '负一'],
  [-9, '负九'],
  [-10, '负一十'],
  [-21, '负二十一'],
  [-30, '负三十'],
  [-99, '负九十九'],
  [-100, '负一百'],
  [-102, '负一百零二'],
  [-116, '负一百一十六'],
  [-130, '负一百三十'],
  [-200, '负二百'],
  [-818, '负八百一十八'],
  [-999, '负九百九十九'],
  [-1000, '负一千'],
  [-1001, '负一千零一'],
  [-1020, '负一千零二十'],
  [-1100, '负一千一百'],
  [-2000, '负二千'],
  [-9999, '负九千九百九十九'],
  [-1_0000, '负一万'],
  [-4_0680, '负四万零六百八十'],
  [-2_0011, '负二万零一十一'],
  [-10_0000, '负一十万'],
  [-130_0000, '负一百三十万'],
  [-2003_4005, '负二千零三万四千零五'],
  [-8000_0000, '负八千万'],
  [-1234_5678, '负一千二百三十四万五千六百七十八'],
  [-9999_9999, '负九千九百九十九万九千九百九十九'],
  [-1_0000_0000, '负一亿'],
  [-1_0205_5070, '负一亿零二百零五万五千零七十'],
  [-700_0000_0000, '负七百亿'],
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
  [-1, '负一'],
  [-9, '负九'],
  [-10, '负一十'],
  [-21, '负二十一'],
  [-30, '负三十'],
  [-99, '负九十九'],
  [-100, '负一百'],
  [-102, '负一百零二'],
  [-116, '负一百一十六'],
  [-130, '负一百三十'],
  [-200, '负二百'],
  [-818, '负八百一十八'],
  [-999, '负九百九十九'],
  [-1000, '负一千'],
  [-1001, '负一千零一'],
  [-1020, '负一千零二十'],
  [-1100, '负一千一百'],
  [-2000, '负二千'],
  [-9999, '负九千九百九十九'],
  [-1_0000, '负一万'],
  [-4_0680, '负四万零六百八十'],
  [-2_0011, '负二万零一十一'],
  [-10_0000, '负一十万'],
  [-130_0000, '负一百三十万'],
  [-2003_4005, '负二千零三万四千零五'],
  [-8000_0000, '负八千万'],
  [-1234_5678, '负一千二百三十四万五千六百七十八'],
  [-9999_9999, '负九千九百九十九万九千九百九十九'],
  [-1_0000_0000, '负一亿'],
  [-1_0205_5070, '负一亿零二百零五万五千零七十'],
  [-700_0000_0000, '负七百亿'],
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
  [-1, '負一'],
  [-9, '負九'],
  [-10, '負一十'],
  [-21, '負二十一'],
  [-30, '負三十'],
  [-99, '負九十九'],
  [-100, '負一百'],
  [-102, '負一百零二'],
  [-116, '負一百一十六'],
  [-130, '負一百三十'],
  [-200, '負二百'],
  [-818, '負八百一十八'],
  [-999, '負九百九十九'],
  [-1000, '負一千'],
  [-1001, '負一千零一'],
  [-1020, '負一千零二十'],
  [-1100, '負一千一百'],
  [-2000, '負二千'],
  [-9999, '負九千九百九十九'],
  [-1_0000, '負一萬'],
  [-4_0680, '負四萬零六百八十'],
  [-2_0011, '負二萬零一十一'],
  [-10_0000, '負一十萬'],
  [-130_0000, '負一百三十萬'],
  [-2003_4005, '負二千零三萬四千零五'],
  [-8000_0000, '負八千萬'],
  [-1234_5678, '負一千二百三十四萬五千六百七十八'],
  [-9999_9999, '負九千九百九十九萬九千九百九十九'],
  [-1_0000_0000, '負一億'],
  [-1_0205_5070, '負一億零二百零五萬五千零七十'],
  [-700_0000_0000, '負七百億'],
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