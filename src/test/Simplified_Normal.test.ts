import {convertNumber, options} from '../main/index';
import {generate} from './TestUtils';
import {data, POSITIVE, NEGATIVE} from './data';

const TESTSUITE = 'Simplified/Normal';

//  _   _          ___        _   _
// | \ | | ___    / _ \ _ __ | |_(_) ___  _ __
// |  \| |/ _ \  | | | | '_ \| __| |/ _ \| '_ \
// | |\  | (_) | | |_| | |_) | |_| | (_) | | | |
// |_| \_|\___/   \___/| .__/ \__|_|\___/|_| |_|
//                     |_|

test.each(data)(
  TESTSUITE + '/+ve/default',
  (input: number, expected: string[]) => {
    expect(convertNumber(input)).toBe(expected[0]);
  }
);
test.each(data)(
  TESTSUITE + '/-ve/default',
  (input: number, expected: string[]) => {
    const expectedValue = NEGATIVE.SIMPLIFIED + expected[0];
    expect(convertNumber(-input)).toBe(expectedValue);
  }
);

const optionExpectSimplified: options[] = [
  {},
  {useTraditional: false},
  {useCapital: false},
  {useTraditional: false, displayPositive: false},
  {displayPositive: false},
];

const optionExpectSimplifiedPositive: options[] = [
  {displayPositive: true},
  {displayPositive: true, useTraditional: false},
  {displayPositive: true, useCapital: false},
  {displayPositive: true, useTraditional: false, useCapital: false},
];

//  _   _                            _
// | \ | | ___  _ __ _ __ ___   __ _| |
// |  \| |/ _ \| '__| '_ ` _ \ / _` | |
// | |\  | (_) | |  | | | | | | (_| | |
// |_| \_|\___/|_|  |_| |_| |_|\__,_|_|

test.each(generate(optionExpectSimplified, data))(
  TESTSUITE + '/+ve/option',
  (options: options, input: number, expected: string) => {
    expect(convertNumber(input, options)).toBe(expected);
  }
);

test.each(
  generate({...optionExpectSimplified, ...optionExpectSimplifiedPositive}, data)
)(
  TESTSUITE + '/-ve/option',
  (options: options, input: number, expected: string) => {
    expected = NEGATIVE.SIMPLIFIED + expected;
    expect(convertNumber(-input, options)).toBe(expected);
  }
);

//      _ _           _               ____           _ _   _
//   __| (_)___ _ __ | | __ _ _   _  |  _ \ ___  ___(_) |_(_)_   _____
//  / _` | / __| '_ \| |/ _` | | | | | |_) / _ \/ __| | __| \ \ / / _ \
// | (_| | \__ \ |_) | | (_| | |_| | |  __/ (_) \__ \ | |_| |\ V /  __/
//  \__,_|_|___/ .__/|_|\__,_|\__, | |_|   \___/|___/_|\__|_| \_/ \___|
//             |_|            |___/

test.each(generate(optionExpectSimplifiedPositive, data))(
  TESTSUITE + '/+ve/option/displayPositive',
  (options: options, input: number, expected: string) => {
    expected = POSITIVE + expected;
    expect(convertNumber(input, options)).toBe(expected);
  }
);
