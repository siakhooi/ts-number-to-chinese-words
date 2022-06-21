import {convertNumber, options} from '../main/index';
import {generate} from './TestUtils';
import {data, POSITIVE, NEGATIVE} from './data';

const TESTSUITE = 'Traditional/Capital';

const optionCapitalTraditional: options[] = [
  {useCapital: true, useTraditional: true},
  {useCapital: true, useTraditional: true, displayPositive: false},
];
const optionCapitalTradPositive: options[] = [
  {useCapital: true, useTraditional: true, displayPositive: true},
];

//  _   _                            _
// | \ | | ___  _ __ _ __ ___   __ _| |
// |  \| |/ _ \| '__| '_ ` _ \ / _` | |
// | |\  | (_) | |  | | | | | | (_| | |
// |_| \_|\___/|_|  |_| |_| |_|\__,_|_|
test.each(generate(optionCapitalTraditional, data, 3))(
  TESTSUITE + '/+ve/option',
  (options: options, input: number, expected: string) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);

test.each(
  generate([...optionCapitalTraditional, ...optionCapitalTradPositive], data, 3)
)(
  TESTSUITE + '/-ve/option',
  (options: options, input: number, expected: string) => {
    expected = NEGATIVE.TRADITIONAL + expected;
    expect(convertNumber(-input, options)).toBe(expected);
  }
);

//      _ _           _               ____           _ _   _
//   __| (_)___ _ __ | | __ _ _   _  |  _ \ ___  ___(_) |_(_)_   _____
//  / _` | / __| '_ \| |/ _` | | | | | |_) / _ \/ __| | __| \ \ / / _ \
// | (_| | \__ \ |_) | | (_| | |_| | |  __/ (_) \__ \ | |_| |\ V /  __/
//  \__,_|_|___/ .__/|_|\__,_|\__, | |_|   \___/|___/_|\__|_| \_/ \___|
//             |_|            |___/

test.each(generate(optionCapitalTradPositive, data, 3))(
  TESTSUITE + '/+ve/option/displayPositive',
  (options: options, input: number, expected: string) => {
    expected = POSITIVE + expected;
    expect(convertNumber(input, options)).toBe(expected);
  }
);
