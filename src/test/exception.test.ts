import {numberToChineseWords} from '../index';

test.each([[-10], [-1], [10.6], [50.55], [100000000], [999999999]])(
  'Not Supported error',
  (input: number) => {
    const errmsg = 'Not Supported';
    expect(() => {
      numberToChineseWords(input);
    }).toThrowError(errmsg);
  }
);
