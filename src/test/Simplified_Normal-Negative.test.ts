import {convertNumber, Options} from '../main/index';
import {generate} from './TestUtils';
import {data, NEGATIVE} from './data';
import {
  optionSimplified,
  optionSimplifiedPositive,
} from './Simplified_Normal-Test-Options';

const TESTSUITE = 'Simplified/Normal/-ve';

//  _   _          ___        _   _
// | \ | | ___    / _ \ _ __ | |_(_) ___  _ __
// |  \| |/ _ \  | | | | '_ \| __| |/ _ \| '_ \
// | |\  | (_) | | |_| | |_) | |_| | (_) | | | |
// |_| \_|\___/   \___/| .__/ \__|_|\___/|_| |_|
//                     |_|

test.each(data)(TESTSUITE + '/default', (input: number, expected: string[]) => {
  const expectedValue = NEGATIVE.SIMPLIFIED + expected[0];
  expect(convertNumber(-input)).toBe(expectedValue);
});

//  _   _                            _
// | \ | | ___  _ __ _ __ ___   __ _| |
// |  \| |/ _ \| '__| '_ ` _ \ / _` | |
// | |\  | (_) | |  | | | | | | (_| | |
// |_| \_|\___/|_|  |_| |_| |_|\__,_|_|

test.each(generate([...optionSimplified, ...optionSimplifiedPositive], data))(
  TESTSUITE + '/option',
  (options: Options, input: number, expected: string) => {
    expected = NEGATIVE.SIMPLIFIED + expected;
    expect(convertNumber(-input, options)).toBe(expected);
  },
);
