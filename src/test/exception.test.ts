import {convertNumber} from '../main/index';

const data = [
  [10.12345678901234],
  [-10.12345678901234],
  [10.1234567890001],
  [-10.1234567890001],
  [1_0000_0000_0000_0000],
  [-1_0000_0000_0000_0000],
];
test.each(data)('Not Supported error - default', (input: number) => {
  const errmsg = 'Not Supported';
  expect(() => {
    convertNumber(input);
  }).toThrow(errmsg);
});

test.each(data)('Not Supported error - simplified', (input: number) => {
  const errmsg = 'Not Supported';
  expect(() => {
    convertNumber(input, {useTraditional: false});
  }).toThrow(errmsg);
});
test.each(data)('Not Supported error - traditional', (input: number) => {
  const errmsg = 'Not Supported';
  expect(() => {
    convertNumber(input, {useTraditional: true});
  }).toThrow(errmsg);
});
