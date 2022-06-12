import {convertNumber} from '../main/index';

test.each([
  [10.6],
  [50.55],
  [-10.123],
  [-50.5555],
  [1_0000_0000_0000],
  [9999_9999_9999_9999],
  [1_0000_0000_0000_0000],
  [-1_0000_0000_0000],
  [-9999_9999_9999_9999],
  [-1_0000_0000_0000_0000],
])('Not Supported error', (input: number) => {
  const errmsg = 'Not Supported';
  expect(() => {
    convertNumber(input);
  }).toThrowError(errmsg);
});
