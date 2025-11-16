import {convertNumber, Options} from '../main/index';
import {generate} from './TestUtils';
import {data, NEGATIVE} from './data';
import {
  optionTraditional,
  optionTraditionalPositive,
} from './Traditional_Normal-Test-Options';

const TESTSUITE = 'Traditional/Normal/-ve';

//  _   _                            _
// | \ | | ___  _ __ _ __ ___   __ _| |
// |  \| |/ _ \| '__| '_ ` _ \ / _` | |
// | |\  | (_) | |  | | | | | | (_| | |
// |_| \_|\___/|_|  |_| |_| |_|\__,_|_|

test.each(
  generate([...optionTraditional, ...optionTraditionalPositive], data, 1),
)(
  TESTSUITE + '/option',
  (options: Options, input: number, expected: string) => {
    expected = NEGATIVE.TRADITIONAL + expected;
    expect(convertNumber(-input, options)).toBe(expected);
  },
);
