import {convertNumber, Options} from '../main/index';
import {generate} from './TestUtils';
import {data, POSITIVE} from './data';
import {
  optionCapitalTraditional,
  optionCapitalTradPositive,
} from './Traditional_Capital-Test-Options';

const TESTSUITE = 'Traditional/Capital/+ve';

//  _   _                            _
// | \ | | ___  _ __ _ __ ___   __ _| |
// |  \| |/ _ \| '__| '_ ` _ \ / _` | |
// | |\  | (_) | |  | | | | | | (_| | |
// |_| \_|\___/|_|  |_| |_| |_|\__,_|_|
test.each(generate(optionCapitalTraditional, data, 3))(
  TESTSUITE + '/option',
  (options: Options, input: number, expected: string) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);

//      _ _           _               ____           _ _   _
//   __| (_)___ _ __ | | __ _ _   _  |  _ \ ___  ___(_) |_(_)_   _____
//  / _` | / __| '_ \| |/ _` | | | | | |_) / _ \/ __| | __| \ \ / / _ \
// | (_| | \__ \ |_) | | (_| | |_| | |  __/ (_) \__ \ | |_| |\ V /  __/
//  \__,_|_|___/ .__/|_|\__,_|\__, | |_|   \___/|___/_|\__|_| \_/ \___|
//             |_|            |___/

test.each(generate(optionCapitalTradPositive, data, 3))(
  TESTSUITE + '/option/displayPositive',
  (options: Options, input: number, expected: string) => {
    expected = POSITIVE + expected;
    expect(convertNumber(input, options)).toBe(expected);
  }
);
