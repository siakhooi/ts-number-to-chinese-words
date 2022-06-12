const ERR_NOT_SUPPORTED = 'Not Supported';

const CHARACTER_SET_SIMPLIFIED_NORMAL = {
  BASE: '零一二三四五六七八九',
  ZERO: '零',
  TEN: '十',
  HUNDRED: '百',
  THOUSAND: '千',
  TENTHOUSAND: '万',
  HUNDREDMILLION: '亿',
  TRILLION: '兆',
  NEGATIVE: '负',
};

const CHARACTER_SET_TRADITIONAL_NORMAL = {
  BASE: '零一二三四五六七八九',
  ZERO: '零',
  TEN: '十',
  HUNDRED: '百',
  THOUSAND: '千',
  TENTHOUSAND: '萬',
  HUNDREDMILLION: '億',
  TRILLION: '兆',
  NEGATIVE: '負',
};
class Convertor {
  characterSet: typeof CHARACTER_SET_SIMPLIFIED_NORMAL;
  constructor(options: options) {
    this.characterSet = options.useTraditional
      ? CHARACTER_SET_TRADITIONAL_NORMAL
      : CHARACTER_SET_SIMPLIFIED_NORMAL;
  }

  convert_0_to_9(number: number): string {
    return this.characterSet.BASE.charAt(number);
  }
  convert_10_to_99(number: number): string {
    const quotient = Math.floor(number / 10);
    const remainder = number % 10;

    const char_quotient = this.convert_0_to_9(quotient) + this.characterSet.TEN;
    const char_remainder =
      remainder === 0 ? '' : this.convert_0_to_9(remainder);

    return char_quotient + char_remainder;
  }
  convert_100_to_999(number: number): string {
    const quotient = Math.floor(number / 100);
    const remainder = number % 100;

    const char_quotient =
      this.convert_0_to_9(quotient) + this.characterSet.HUNDRED;
    let char_remainder = '';

    if (remainder > 0 && remainder < 10)
      char_remainder = this.characterSet.ZERO + this.convert_0_to_9(remainder);
    else if (remainder >= 10) char_remainder = this.convert_10_to_99(remainder);

    return char_quotient + char_remainder;
  }
  convert_1000_to_9999(number: number): string {
    const quotient = Math.floor(number / 1000);
    const remainder = number % 1000;

    const char_quotient =
      this.convert_0_to_9(quotient) + this.characterSet.THOUSAND;

    let char_remainder = '';

    if (remainder > 0 && remainder < 10)
      char_remainder = this.characterSet.ZERO + this.convert_0_to_9(remainder);
    else if (remainder >= 10 && remainder < 100)
      char_remainder =
        this.characterSet.ZERO + this.convert_10_to_99(remainder);
    else if (remainder >= 100)
      char_remainder = this.convert_100_to_999(remainder);

    return char_quotient + char_remainder;
  }
  convert_0_to_9999(number: number): string {
    if (number < 10) return this.convert_0_to_9(number);
    else if (number < 100) return this.convert_10_to_99(number);
    else if (number < 1000) return this.convert_100_to_999(number);
    else return this.convert_1000_to_9999(number);
  }

  convert_1_0000_to_9999_9999(number: number): string {
    const quotient = Math.floor(number / 1_0000);
    const remainder = number % 1_0000;

    const char_quotient =
      this.convert_0_to_9999(quotient) + this.characterSet.TENTHOUSAND;

    let char_remainder = '';
    if (remainder > 0) char_remainder = this.convert_0_to_9999(remainder);
    if (remainder > 0 && remainder < 1000)
      char_remainder = this.characterSet.ZERO + char_remainder;

    return char_quotient + char_remainder;
  }
  convert_1_0000_0000_to_9999_9999_9999_9999(number: number): string {
    let char_segment1 = '';
    let char_zero_2 = '';
    let char_segment2 = '';
    let char_zero_3 = '';
    let char_segment3 = '';
    let char_zero_4 = '';
    let char_segment4 = '';

    const segment1 = Math.floor(number / 1_0000_0000_0000);
    const segment_2_to_4 = number % 1_0000_0000_0000;
    const segment2 = Math.floor(segment_2_to_4 / 1_0000_0000);
    const segment_3_to_4 = segment_2_to_4 % 1_0000_0000;
    const segment3 = Math.floor(segment_3_to_4 / 1_0000);
    const segment4 = segment_3_to_4 % 1_0000;

    if (segment1 > 0)
      char_segment1 =
        this.convert_0_to_9999(segment1) + this.characterSet.TRILLION;
    if (segment2 > 0)
      char_segment2 =
        this.convert_0_to_9999(segment2) + this.characterSet.HUNDREDMILLION;
    if (segment3 > 0)
      char_segment3 =
        this.convert_0_to_9999(segment3) + this.characterSet.TENTHOUSAND;
    if (segment4 > 0) char_segment4 = this.convert_0_to_9999(segment4);

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

  convertNumber(number: number): string {
    if (number < -Number.MAX_SAFE_INTEGER || number > Number.MAX_SAFE_INTEGER)
      throw ERR_NOT_SUPPORTED;
    if (number !== Math.floor(number)) throw ERR_NOT_SUPPORTED;

    const sign = number < 0 ? this.characterSet.NEGATIVE : '';
    if (number < 0) number = -number;

    if (number < 1_0000) return sign + this.convert_0_to_9999(number);
    else if (number < 1_0000_0000)
      return sign + this.convert_1_0000_to_9999_9999(number);
    else return sign + this.convert_1_0000_0000_to_9999_9999_9999_9999(number);
  }
}
type options = {useTraditional: boolean};
export function convertNumber(
  number: number,
  options: options = {useTraditional: false}
): string {
  const convertor = new Convertor(options);
  return convertor.convertNumber(number);
}
