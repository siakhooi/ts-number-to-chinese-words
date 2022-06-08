import {numberToChineseWords} from '../index';

test.each([[-10], [-1], [100], [1000], [50.55]])(
  'out of range error',
  (input: number) => {
    const errmsg = 'Not Supported';
    expect(() => {
      numberToChineseWords(input);
    }).toThrowError(errmsg);
  }
);
