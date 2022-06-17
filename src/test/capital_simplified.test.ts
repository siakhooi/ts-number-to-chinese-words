import {convertNumber} from '../main/index';

test.each([
  [0, '零'],
  [1, '壹'],
  [2, '贰'],
  [3, '叁'],
  [4, '肆'],
  [5, '伍'],
  [6, '陆'],
  [7, '柒'],
  [8, '捌'],
  [9, '玖'],
  [10, '壹拾'],
  [100, '壹佰'],
  [1_0000, '壹万'],
  [1_0000_0000, '壹亿'],
  [9999_9999_9999, '玖仟玖佰玖拾玖亿玖仟玖佰玖拾玖万玖仟玖佰玖拾玖'],
  [1_0000_0000_0000, '壹兆'],
  [
    9007_1992_5474_0991,
    '玖仟零柒兆壹仟玖佰玖拾贰亿伍仟肆佰柒拾肆万零玖佰玖拾壹',
  ],
])('capital numbers', (input: number, expected: string) => {
  expect(convertNumber(input, {useCapital: true})).toBe(expected);
});

test.each([
  [-1, '负壹'],
  [1, '正壹'],
  [2, '正贰'],
])('capital numbers with sign', (input: number, expected: string) => {
  expect(convertNumber(input, {displayPositive: true, useCapital: true})).toBe(
    expected
  );
});
test.each([
  [-1, '负壹'],
  [1, '壹'],
  [2, '贰'],
])('capital numbers with no sign', (input: number, expected: string) => {
  expect(convertNumber(input, {useCapital: true})).toBe(expected);
});
