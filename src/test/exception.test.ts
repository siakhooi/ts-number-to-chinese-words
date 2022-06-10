import {numberToChineseWords} from '../main/index';

test.each([[-10], [-1], [10.6], [50.55]])(
  'Not Supported error',
  (input: number) => {
    const errmsg = 'Not Supported';
    expect(() => {
      numberToChineseWords(input);
    }).toThrowError(errmsg);
  }
);
