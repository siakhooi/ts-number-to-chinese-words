import {convertNumber} from '../main/index';

test.each([
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
