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

  convert_0_to_9(number: number): string {
    return this.characterSet.BASE.charAt(number);
  }
  convert_10_to_99(number: number): string {
    const segment1 = Math.floor(number / 10);
    const segment2 = number % 10;

    const charSegment1 = this.convert_0_to_9(segment1) + this.characterSet.TEN;
    const charSegment2 = segment2 === 0 ? '' : this.convert_0_to_9(segment2);

    return charSegment1 + charSegment2;
  }
  convert_100_to_999(number: number): string {
    const segment1 = Math.floor(number / 100);
    const segment2 = number % 100;

    const charSegment1 =
      this.convert_0_to_9(segment1) + this.characterSet.HUNDRED;
    let charSegment2 = '';

    if (segment2 > 0 && segment2 < 10)
      charSegment2 = this.characterSet.ZERO + this.convert_0_to_9(segment2);
    else if (segment2 >= 10) charSegment2 = this.convert_10_to_99(segment2);

    return charSegment1 + charSegment2;
  }
  convert_1000_to_9999(number: number): string {
    const segment1 = Math.floor(number / 1000);
    const segment2 = number % 1000;

    const charSegment1 =
      this.convert_0_to_9(segment1) + this.characterSet.THOUSAND;

    let charSegment2 = '';

    if (segment2 > 0 && segment2 < 10)
      charSegment2 = this.characterSet.ZERO + this.convert_0_to_9(segment2);
    else if (segment2 >= 10 && segment2 < 100)
      charSegment2 = this.characterSet.ZERO + this.convert_10_to_99(segment2);
    else if (segment2 >= 100) charSegment2 = this.convert_100_to_999(segment2);

    return charSegment1 + charSegment2;
  }
  convert_0_to_9999(number: number): string {
    if (number < 10) return this.convert_0_to_9(number);
    else if (number < 100) return this.convert_10_to_99(number);
    else if (number < 1000) return this.convert_100_to_999(number);
    else return this.convert_1000_to_9999(number);
  }

  convert_1_0000_to_9999_9999(number: number): string {
    const segment1 = Math.floor(number / 1_0000);
    const segment2 = number % 1_0000;

    const charSegment1 =
      this.convert_0_to_9999(segment1) + this.characterSet.TENTHOUSAND;

    let charSegment2 = this.convertIfNotZero(segment2);

    if (segment2 > 0 && segment2 < 1000)
      charSegment2 = this.characterSet.ZERO + charSegment2;

    return charSegment1 + charSegment2;
  }
  private convertIfNotZero(segmentNumber: number, suffix = ''): string {
    return segmentNumber > 0
      ? this.convert_0_to_9999(segmentNumber) + suffix
      : '';
  }
  convert_1_0000_0000_to_9999_9999_9999_9999(number: number): string {
    let char_zero_2 = '';
    let char_zero_3 = '';
    let char_zero_4 = '';
    const CS = this.characterSet;

    const segment1 = Math.floor(number / 1_0000_0000_0000);
    const segment_2_to_4 = number % 1_0000_0000_0000;
    const segment2 = Math.floor(segment_2_to_4 / 1_0000_0000);
    const segment_3_to_4 = segment_2_to_4 % 1_0000_0000;
    const segment3 = Math.floor(segment_3_to_4 / 1_0000);
    const segment4 = segment_3_to_4 % 1_0000;

    const char_segment1 = this.convertIfNotZero(segment1, CS.TRILLION);
    const char_segment2 = this.convertIfNotZero(segment2, CS.HUNDREDMILLION);
    const char_segment3 = this.convertIfNotZero(segment3, CS.TENTHOUSAND);
    const char_segment4 = this.convertIfNotZero(segment4);

    if (segment4 > 0 && segment4 < 1000) char_zero_4 = this.characterSet.ZERO;
    if (segment3 > 0 && segment3 < 1000) char_zero_3 = this.characterSet.ZERO;
    if (segment1 > 0 && segment2 > 0 && segment2 < 1000)
      char_zero_2 = this.characterSet.ZERO;

    if (segment4 >= 1000 && segment3 === 0)
      char_zero_3 = this.characterSet.ZERO;
    if (segment1 > 0 && segment3 >= 1000 && segment2 === 0)
      char_zero_2 = this.characterSet.ZERO;

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

    if (number < 1_0000) return sign + this.convert_0_to_9999(number);
    else if (number < 1_0000_0000)
      return sign + this.convert_1_0000_to_9999_9999(number);
    else return sign + this.convert_1_0000_0000_to_9999_9999_9999_9999(number);
  }
}
export type options = {
  useTraditional?: boolean;
  displayPositive?: boolean;
  useCapital?: boolean;
};
export function convertNumber(number: number, options: options = {}): string {
  const convertor = new Convertor(options);
  return convertor.convertNumber(number);
}
