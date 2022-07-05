import {convertNumber} from '../main/index';

const data = [
  [10.1234567890123456],
  [-10.1234567890123456],
  [10.1234567890001],
  [-10.1234567890001],
  [1_0000_0000_0000_0000],
  [-1_0000_0000_0000_0000],
];
test.each(data)('Not Supported error - default', (input: number) => {
  const errmsg = 'Not Supported';
  expect(() => {
    convertNumber(input);
  }).toThrowError(errmsg);
});

test.each(data)('Not Supported error - simplified', (input: number) => {
  const errmsg = 'Not Supported';
  expect(() => {
    convertNumber(input, {useTraditional: false});
  }).toThrowError(errmsg);
});
test.each(data)('Not Supported error - traditional', (input: number) => {
  const errmsg = 'Not Supported';
  expect(() => {
    convertNumber(input, {useTraditional: true});
  }).toThrowError(errmsg);
});
