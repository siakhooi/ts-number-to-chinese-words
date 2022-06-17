import {convertNumber} from '../main/index';

test.each([
  [10.6],
  [50.55],
  [-10.123],
  [-50.5555],
  [1_0000_0000_0000_0000],
  [-1_0000_0000_0000_0000],
])('Not Supported error - default', (input: number) => {
  const errmsg = 'Not Supported';
  expect(() => {
    convertNumber(input);
  }).toThrowError(errmsg);
});

test.each([
  [10.6],
  [50.55],
  [-10.123],
  [-50.5555],
  [1_0000_0000_0000_0000],
  [-1_0000_0000_0000_0000],
])('Not Supported error - simplified', (input: number) => {
  const errmsg = 'Not Supported';
  expect(() => {
    convertNumber(input, {useTraditional: false});
  }).toThrowError(errmsg);
});
test.each([
  [10.6],
  [50.55],
  [-10.123],
  [-50.5555],
  [1_0000_0000_0000_0000],
  [-1_0000_0000_0000_0000],
])('Not Supported error - traditional', (input: number) => {
  const errmsg = 'Not Supported';
  expect(() => {
    convertNumber(input, {useTraditional: true});
  }).toThrowError(errmsg);
});
