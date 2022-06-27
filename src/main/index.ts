import {ERR_NOT_SUPPORTED} from './Constants';
import {getCharacterSet, CharacterSet} from './CharacterSets';

class Convertor {
  characterSet: CharacterSet;
  options: options;
  constructor(options: options) {
    this.options = options;
    this.characterSet = getCharacterSet(
      options.useTraditional,
      options.useCapital
    );
  }
  convert_0_to_9(
    number: number,
    ignoreZero = false,
    ignoreOne = false,
    suffix = ''
  ): string {
    const c = this.characterSet.BASE.charAt(number);
    if (number === 0) return ignoreZero ? '' : c;

    if (ignoreOne && number === 1) return suffix;
    return c + suffix;
  }
  convert_digit_1(
    number: number,
    removeLeadingOne: boolean,
    digit1: number
  ): string {
    return this.convert_0_to_9(
      digit1,
      number > 9,
      number < 10 && removeLeadingOne,
      ''
    );
  }
  convert_digit_10(
    number: number,
    removeLeadingOne: boolean,
    digit2: number,
    digit1: number,
    digit3: number
  ): string {
    return this.convert_0_to_9(
      digit2,
      (number >= 100 && digit1 === 0) ||
        (number >= 1000 && digit3 === 0) ||
        number < 10,
      number < 100 && removeLeadingOne,
      this.characterSet.TEN
    );
  }
  convert_digit_100(
    number: number,
    removeLeadingOne: boolean,
    digit3: number
  ): string {
    return this.convert_0_to_9(
      digit3,
      (number >= 1000 && number % 100 === 0) || number < 100,
      number < 1000 && removeLeadingOne,
      this.characterSet.HUNDRED
    );
  }
  convert_digit_1000(
    number: number,
    removeLeadingOne: boolean,
    digit4: number
  ) {
    return this.convert_0_to_9(
      digit4,
      number < 1000,
      number > 999 && removeLeadingOne,
      this.characterSet.THOUSAND
    );
  }
  convert_0_to_9999(number: number, removeLeadingOne = false): string {
    const digit1 = number % 10;
    const digit2 = Math.floor(number / 10) % 10;
    const digit3 = Math.floor(number / 100) % 10;
    const digit4 = Math.floor(number / 1000);

    const char1 = this.convert_digit_1(number, removeLeadingOne, digit1);
    const char2 = this.convert_digit_10(
      number,
      removeLeadingOne,
      digit2,
      digit1,
      digit3
    );
    const char3 = this.convert_digit_100(number, removeLeadingOne, digit3);
    const char4 = this.convert_digit_1000(number, removeLeadingOne, digit4);

    return char4 + char3 + char2 + char1;
  }
  convert_1_0000_to_9999_9999(
    number: number,
    removeLeadingOne = false
  ): string {
    const segment1 = Math.floor(number / 1_0000);
    const segment2 = number % 1_0000;

    const charSegment1 =
      this.convert_0_to_9999(segment1, removeLeadingOne) +
      this.characterSet.TENTHOUSAND;

    let charSegment2 = this.convertIfNotZero(segment2);

    if (segment2 > 0 && segment2 < 1000)
      charSegment2 = this.characterSet.ZERO + charSegment2;

    return charSegment1 + charSegment2;
  }
  private convertIfNotZero(
    segmentNumber: number,
    suffix = '',
    removeLeadingOne = false
  ): string {
    return segmentNumber > 0
      ? this.convert_0_to_9999(segmentNumber, removeLeadingOne) + suffix
      : '';
  }
  private fillZeroIfTrue(expression: boolean): string {
    return expression ? this.characterSet.ZERO : '';
  }
  convert_1_0000_0000_to_9999_9999_9999_9999(
    number: number,
    removeLeadingOne = false
  ): string {
    const CS = this.characterSet;

    const segment1 = Math.floor(number / 1_0000_0000_0000);
    const segment_2_to_4 = number % 1_0000_0000_0000;
    const segment2 = Math.floor(segment_2_to_4 / 1_0000_0000);
    const segment_3_to_4 = segment_2_to_4 % 1_0000_0000;
    const segment3 = Math.floor(segment_3_to_4 / 1_0000);
    const segment4 = segment_3_to_4 % 1_0000;

    const char_segment1 = this.convertIfNotZero(
      segment1,
      CS.TRILLION,
      removeLeadingOne
    );
    const char_segment2 = this.convertIfNotZero(
      segment2,
      CS.HUNDREDMILLION,
      removeLeadingOne && segment1 === 0
    );
    const char_segment3 = this.convertIfNotZero(segment3, CS.TENTHOUSAND);
    const char_segment4 = this.convertIfNotZero(segment4);

    const char_zero_4 = this.fillZeroIfTrue(segment4 > 0 && segment4 < 1000);
    const char_zero_3 = this.fillZeroIfTrue(
      (segment3 > 0 && segment3 < 1000) || (segment3 === 0 && segment4 >= 1000)
    );
    const char_zero_2 = this.fillZeroIfTrue(
      (segment1 > 0 && segment2 > 0 && segment2 < 1000) ||
        (segment1 > 0 && segment2 === 0 && segment3 >= 1000)
    );

    return (
      char_segment1 +
      char_zero_2 +
      char_segment2 +
      char_zero_3 +
      char_segment3 +
      char_zero_4 +
      char_segment4
    );
  }

  private checkNotSupportedCases(number: number) {
    if (number < -Number.MAX_SAFE_INTEGER || number > Number.MAX_SAFE_INTEGER)
      throw ERR_NOT_SUPPORTED;
    if (number !== Math.floor(number)) throw ERR_NOT_SUPPORTED;
  }

  private getSign(number: number): string {
    if (number < 0) return this.characterSet.NEGATIVE;

    if (number > 0 && this.options.displayPositive)
      return this.characterSet.POSITIVE;
    return '';
  }
  convertNumber(number: number): string {
    this.checkNotSupportedCases(number);

    const sign = this.getSign(number);

    number = Math.abs(number);
    let convertedValue: string;

    if (number < 1_0000)
      convertedValue = this.convert_0_to_9999(
        number,
        this.options.removeLeadingOne
      );
    else if (number < 1_0000_0000)
      convertedValue = this.convert_1_0000_to_9999_9999(
        number,
        this.options.removeLeadingOne
      );
    else
      convertedValue = this.convert_1_0000_0000_to_9999_9999_9999_9999(
        number,
        this.options.removeLeadingOne
      );
    return sign + convertedValue;
  }
}
export type options = {
  useTraditional?: boolean;
  displayPositive?: boolean;
  useCapital?: boolean;
  removeLeadingOne?: boolean;
};
export function convertNumber(number: number, options: options = {}): string {
  const convertor = new Convertor(options);
  return convertor.convertNumber(number);
}
