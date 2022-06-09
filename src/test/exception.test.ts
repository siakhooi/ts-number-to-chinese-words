import {numberToChineseWords} from '../index';

test.each([[-10], [-1], [10.6], [50.55], [1000], [5050]])(
  'Not Supported error',
  (input: number) => {
    const errmsg = 'Not Supported';
    expect(() => {
      numberToChineseWords(input);
    }).toThrowError(errmsg);
  }
);
