import {CharacterSet, getCharacterSet} from './CharacterSets';
import {ERR_NOT_SUPPORTED, MAX_DECIMAL_POINTS} from './Constants';

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
    ignoreZero: boolean,
    ignoreOne: boolean,
    suffix: string
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
  useContraction(
    useContractionDigit: boolean | undefined,
    useContractionAll: boolean | undefined,
    digit: number,
    testValue: number,
    contractedCharacter: string
  ): boolean {
    return (
      (!!useContractionDigit || !!useContractionAll) &&
      digit === testValue &&
      contractedCharacter !== undefined
    );
  }
  getContraction(digit: number, defaultValue: string): string {
    if (
      this.useContraction(
        this.options.useContraction20,
        this.options.useContractionAll,
        digit,
        2,
        this.characterSet.CONTRACTION_20
      )
    ) {
      return this.characterSet.CONTRACTION_20;
    } else if (
      this.useContraction(
        this.options.useContraction30,
        this.options.useContractionAll,
        digit,
        3,
        this.characterSet.CONTRACTION_30
      )
    ) {
      return this.characterSet.CONTRACTION_30;
    } else if (
      this.useContraction(
        this.options.useContraction40,
        this.options.useContractionAll,
        digit,
        4,
        this.characterSet.CONTRACTION_40
      )
    ) {
      return this.characterSet.CONTRACTION_40;
    } else if (
      this.useContraction(
        this.options.useContraction50,
        this.options.useContractionAll,
        digit,
        5,
        this.characterSet.CONTRACTION_50
      )
    ) {
      return this.characterSet.CONTRACTION_50;
    } else if (
      this.useContraction(
        this.options.useContraction60,
        this.options.useContractionAll,
        digit,
        6,
        this.characterSet.CONTRACTION_60
      )
    ) {
      return this.characterSet.CONTRACTION_60;
    } else if (
      this.useContraction(
        this.options.useContraction70,
        this.options.useContractionAll,
        digit,
        7,
        this.characterSet.CONTRACTION_70
      )
    ) {
      return this.characterSet.CONTRACTION_70;
    } else if (
      this.useContraction(
        this.options.useContraction80,
        this.options.useContractionAll,
        digit,
        8,
        this.characterSet.CONTRACTION_80
      )
    ) {
      return this.characterSet.CONTRACTION_80;
    } else if (
      this.useContraction(
        this.options.useContraction90,
        this.options.useContractionAll,
        digit,
        9,
        this.characterSet.CONTRACTION_90
      )
    ) {
      return this.characterSet.CONTRACTION_90;
    }
    return defaultValue;
  }
  convert_digit_10(
    number: number,
    removeLeadingOne: boolean,
    digit2: number,
    digit1: number,
    digit3: number
  ): string {
    const normalTranslation = this.convert_0_to_9(
      digit2,
      (number >= 100 && digit1 === 0) ||
        (number >= 1000 && digit3 === 0) ||
        number < 10,
      number < 100 && removeLeadingOne,
      this.characterSet.TEN
    );
    return this.getContraction(digit2, normalTranslation);
  }
  convert_digit_100(
    number: number,
    removeLeadingOne: boolean,
    digit3: number
  ): string {
    if (
      this.useContraction(
        this.options.useContraction200,
        this.options.useContractionAll,
        digit3,
        2,
        this.characterSet.CONTRACTION_200
      )
    )
      return this.characterSet.CONTRACTION_200;
    else
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
  convert_0_to_9999(
    number: number,
    removeLeadingOne: boolean,
    suffix: string
  ): string {
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

    return char4 + char3 + char2 + char1 + suffix;
  }
  getZeroOrEmptyIf(expression: boolean): string {
    return expression ? this.characterSet.ZERO : '';
  }
  convert_w(segment1: number, number: number, removeLeadingOne: boolean) {
    if (segment1 === 0) return this.getZeroOrEmptyIf(number === 0);
    const c = this.convert_0_to_9999(
      segment1,
      number < 1_0000 && removeLeadingOne,
      ''
    );
    const prefix = this.getZeroOrEmptyIf(segment1 < 1_000 && number >= 1_0000);
    return prefix + c;
  }
  convert_ww_and_www(
    segment: number,
    number: number,
    removeLeadingOne: boolean,
    smallerSegment: number,
    threshold: number,
    suffix: string
  ) {
    if (segment === 0)
      return this.getZeroOrEmptyIf(
        number >= threshold && smallerSegment >= 1000
      );

    const c = this.convert_0_to_9999(
      segment,
      number < threshold && removeLeadingOne,
      suffix
    );
    const prefix = this.getZeroOrEmptyIf(segment < 1000 && number >= threshold);
    return prefix + c;
  }
  convert_wwww(segment4: number, removeLeadingOne: boolean) {
    if (segment4 === 0) return '';
    return this.convert_0_to_9999(
      segment4,
      segment4 > 0 && removeLeadingOne,
      this.characterSet.TRILLION
    );
  }
  convert_0_to_wwww(number: number): string {
    const removeLeadingOne = !!this.options.removeLeadingOne;

    const segment1 = number % 1_0000;
    const segment2 = Math.floor(number / 1_0000) % 1_0000;
    const segment3 = Math.floor(number / 1_0000_0000) % 1_0000;
    const segment4 = Math.floor(number / 1_0000_0000_0000);

    const char1 = this.convert_w(segment1, number, removeLeadingOne);
    const char2 = this.convert_ww_and_www(
      segment2,
      number,
      removeLeadingOne,
      segment1,
      1_0000_0000,
      this.characterSet.TENTHOUSAND
    );
    const char3 = this.convert_ww_and_www(
      segment3,
      number,
      removeLeadingOne,
      segment2,
      1_0000_0000_0000,
      this.characterSet.HUNDREDMILLION
    );
    const char4 = this.convert_wwww(segment4, removeLeadingOne);

    return char4 + char3 + char2 + char1;
  }

  private checkNotSupportedCases(number: number) {
    if (number < -Number.MAX_SAFE_INTEGER || number > Number.MAX_SAFE_INTEGER)
      throw ERR_NOT_SUPPORTED;
    if (number !== Math.floor(number)) {
      if (
        number.toString().length >
        MAX_DECIMAL_POINTS + 1 + Math.floor(number).toString().length
      )
        throw ERR_NOT_SUPPORTED;
    }
  }

  private getSign(number: number): string {
    if (number < 0) return this.characterSet.NEGATIVE;

    if (number > 0 && this.options.displayPositive)
      return this.characterSet.POSITIVE;
    return '';
  }
  convertFloat(number: number) {
    if (number - Math.floor(number) === 0) return '';

    const start = Math.floor(number).toString().length + 1;
    const s = number.toString();
    const stop = s.length;

    let r = this.characterSet.DOT;

    for (let i = start; i < stop; i++) {
      const j = parseInt(s.substring(i, i + 1));
      r += this.convert_0_to_9(j, false, false, '');
    }

    return r;
  }
  convertNumber(number: number): string {
    this.checkNotSupportedCases(number);

    const sign = this.getSign(number);

    number = Math.abs(number);
    const integering = Math.floor(number);
    const convertedFloat = this.convertFloat(number);

    const convertedInteger = this.convert_0_to_wwww(integering);

    return sign + convertedInteger + convertedFloat;
  }
}
export type options = {
  useTraditional?: boolean;
  displayPositive?: boolean;
  useCapital?: boolean;
  removeLeadingOne?: boolean;
  useContractionAll?: boolean;
  useContraction20?: boolean;
  useContraction30?: boolean;
  useContraction40?: boolean;
  useContraction50?: boolean;
  useContraction60?: boolean;
  useContraction70?: boolean;
  useContraction80?: boolean;
  useContraction90?: boolean;
  useContraction200?: boolean;
};
export function convertNumber(number: number, options: options = {}): string {
  const convertor = new Convertor(options);
  return convertor.convertNumber(number);
}
