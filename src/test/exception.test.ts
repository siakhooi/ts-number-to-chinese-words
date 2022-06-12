import {convertNumber} from '../main/index';

test.each([
  [10.6],
  [50.55],
  [-10.123],
  [-50.5555],
  [-1000000000000],
  [1000000000000],
  [-9999999999999999],
  [9999999999999999],
  [10000000000000000],
])('Not Supported error', (input: number) => {
  const errmsg = 'Not Supported';
  expect(() => {
    convertNumber(input);
  }).toThrowError(errmsg);
});
