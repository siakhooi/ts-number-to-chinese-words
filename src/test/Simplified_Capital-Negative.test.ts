import {convertNumber, Options} from '../main/index';
import {generate} from './TestUtils';
import {data, NEGATIVE} from './data';
import {
  optionCapital,
  optionCapitalPositive,
} from './Simplified_Capital-Test-Options';

const TESTSUITE = 'Simplified/Capital/-ve';

//  _   _                            _
// | \ | | ___  _ __ _ __ ___   __ _| |
// |  \| |/ _ \| '__| '_ ` _ \ / _` | |
// | |\  | (_) | |  | | | | | | (_| | |
// |_| \_|\___/|_|  |_| |_| |_|\__,_|_|

test.each(generate([...optionCapital, ...optionCapitalPositive], data, 2))(
  TESTSUITE + '/option',
  (options: Options, input: number, expected: string) => {
    expected = NEGATIVE.SIMPLIFIED + expected;
    expect(convertNumber(-input, options)).toBe(expected);
  },
);
