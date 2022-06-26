import {convertNumber, options} from '../main/index';
import {generate} from './TestUtils';
import {data, NEGATIVE} from './data';
import {
  optionCapitalTraditional,
  optionCapitalTradPositive,
} from './Traditional_Capital-Test-Options';

const TESTSUITE = 'Traditional/Capital/ve';

//  _   _                            _
// | \ | | ___  _ __ _ __ ___   __ _| |
// |  \| |/ _ \| '__| '_ ` _ \ / _` | |
// | |\  | (_) | |  | | | | | | (_| | |
// |_| \_|\___/|_|  |_| |_| |_|\__,_|_|
test.each(
  generate([...optionCapitalTraditional, ...optionCapitalTradPositive], data, 3)
)(
  TESTSUITE + '/option',
  (options: options, input: number, expected: string) => {
    expected = NEGATIVE.TRADITIONAL + expected;
    expect(convertNumber(-input, options)).toBe(expected);
  }
);
