import {convertNumber} from '../main/index';

test.each([
  [10, '壹拾'],
  [100, '壹佰'],
  [1_0000, '壹萬'],
  [1_0000_0000, '壹億'],
  [9999_9999_9999, '玖仟玖佰玖拾玖億玖仟玖佰玖拾玖萬玖仟玖佰玖拾玖'],
  [1_0000_0000_0000, '壹兆'],
  [
    9007_1992_5474_0991,
    '玖仟零柒兆壹仟玖佰玖拾貳億伍仟肆佰柒拾肆萬零玖佰玖拾壹',
  ],
])('capital numbers', (input: number, expected: string) => {
  expect(convertNumber(input, {useCapital: true, useTraditional: true})).toBe(
    expected
  );
});