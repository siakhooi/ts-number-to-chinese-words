import {Options} from './Options';
import {ERR_NOT_SUPPORTED, MAX_DECIMAL_POINTS} from './Constants';
import {FloatingNumberConvertor} from './FloatingNumberConvertor';
import {ConversionContext} from './ConversionContext';
import {BasicNumberConvertor} from './BasicNumberConvertor';

export class Convertor {
  context: ConversionContext;
  basicNumber: BasicNumberConvertor;
  constructor(options: Options) {
    this.context = new ConversionContext(options);
    this.basicNumber = new BasicNumberConvertor(this.context);
  }

  getZeroOrEmptyIf(expression: boolean): string {
    return expression ? this.context.characterSet.ZERO : '';
  }
  convert_w(segment1: number, number: number, removeLeadingOne: boolean) {
    if (segment1 === 0) return this.getZeroOrEmptyIf(number === 0);
    const c = this.basicNumber.convert_0_to_9999(
      segment1,
      number < 1_0000 && removeLeadingOne,
      '',
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
    suffix: string,
  ) {
    if (segment === 0)
      return this.getZeroOrEmptyIf(
        number >= threshold && smallerSegment >= 1000,
      );

    const c = this.basicNumber.convert_0_to_9999(
      segment,
      number < threshold && removeLeadingOne,
      suffix,
    );
    const prefix = this.getZeroOrEmptyIf(segment < 1000 && number >= threshold);
    return prefix + c;
  }
  convert_wwww(segment4: number, removeLeadingOne: boolean) {
    if (segment4 === 0) return '';
    return this.basicNumber.convert_0_to_9999(
      segment4,
      segment4 > 0 && removeLeadingOne,
      this.context.characterSet.TRILLION,
    );
  }
  convert_0_to_wwww(number: number): string {
    const removeLeadingOne = !!this.context.options.removeLeadingOne;

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
      this.context.characterSet.TENTHOUSAND,
    );
    const char3 = this.convert_ww_and_www(
      segment3,
      number,
      removeLeadingOne,
      segment2,
      1_0000_0000_0000,
      this.context.characterSet.HUNDREDMILLION,
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
    if (number < 0) return this.context.characterSet.NEGATIVE;

    if (number > 0 && this.context.options.displayPositive)
      return this.context.characterSet.POSITIVE;
    return '';
  }

  combine(
    sign: string,
    convertedInteger: string,
    convertedFloat: string,
    integerNumber: number,
  ): string {
    if (convertedFloat.length === 0) {
      return sign + convertedInteger;
    } else {
      const dot = this.context.getDot();

      if (
        !!this.context.options.useTraditionalFloatingUnit &&
        integerNumber === 0
      ) {
        return sign + convertedFloat;
      } else return sign + convertedInteger + dot + convertedFloat;
    }
  }
  convertNumber(number: number): string {
    this.checkNotSupportedCases(number);

    const sign = this.getSign(number);

    const f = new FloatingNumberConvertor(this.context);

    number = Math.abs(number);
    const integerNumber = Math.floor(number);
    const convertedFloat = f.convertFloat(number);
    const convertedInteger = this.convert_0_to_wwww(integerNumber);
    return this.combine(sign, convertedInteger, convertedFloat, integerNumber);
  }
}
