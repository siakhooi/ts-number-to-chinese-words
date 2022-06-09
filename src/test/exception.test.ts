import {numberToChineseWords} from '../index';

test.each([[1000], [50.5]])('out of range error', (input: number) => {
  const errmsg = 'Not Supported';
  expect(() => {
    numberToChineseWords(input);
  }).toThrowError(errmsg);
});
test.each([[-10], [-1]])('negative error', (input: number) => {
  const errmsg = 'Not Supported';
  expect(() => {
    numberToChineseWords(input);
  }).toThrowError(errmsg);
});

test.each([[10.6], [50.55]])('floating error', (input: number) => {
  const errmsg = 'Not Supported';
  expect(() => {
    numberToChineseWords(input);
  }).toThrowError(errmsg);
});
