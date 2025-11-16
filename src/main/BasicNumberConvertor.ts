import {ConversionContext} from './ConversionContext';
/*
To take care of numbers between 0 to 9999
*/
export class BasicNumberConvertor {
  context: ConversionContext;
  constructor(context: ConversionContext) {
    this.context = context;
  }
  convert_0_to_9(
    number: number,
    ignoreZero: boolean,
    ignoreOne: boolean,
    suffix: string,
  ): string {
    const c = this.context.characterSet.BASE.charAt(number);
    if (number === 0) return ignoreZero ? '' : c;

    if (ignoreOne && number === 1) return suffix;
    return c + suffix;
  }
  convert_digit_1(
    number: number,
    removeLeadingOne: boolean,
    digit1: number,
  ): string {
    return this.convert_0_to_9(
      digit1,
      number > 9,
      number < 10 && removeLeadingOne,
      '',
    );
  }
  useContraction(
    useContractionDigit: boolean | undefined,
    contractedCharacter: string,
  ): boolean {
    return (
      (!!useContractionDigit || !!this.context.options.useContractionAll) &&
      contractedCharacter !== undefined
    );
  }
  getContraction(digit: number, defaultValue: string): string {
    if (
      digit >= 2 &&
      digit <= 9 &&
      this.useContraction(
        this.context.isContract(digit),
        this.context.characterSet.CONTRACTION[digit],
      )
    )
      return this.context.characterSet.CONTRACTION[digit];
    else return defaultValue;
  }
  convert_digit_10(
    number: number,
    removeLeadingOne: boolean,
    digit2: number,
    digit1: number,
    digit3: number,
  ): string {
    const normalTranslation = this.convert_0_to_9(
      digit2,
      (number >= 100 && digit1 === 0) ||
        (number >= 1000 && digit3 === 0) ||
        number < 10,
      number < 100 && removeLeadingOne,
      this.context.characterSet.TEN,
    );
    return this.getContraction(digit2, normalTranslation);
  }
  convert_digit_100(
    number: number,
    removeLeadingOne: boolean,
    digit3: number,
  ): string {
    if (
      digit3 === 2 &&
      this.useContraction(
        this.context.isContract200(),
        this.context.characterSet.CONTRACTION_200,
      )
    )
      return this.context.characterSet.CONTRACTION_200;
    else
      return this.convert_0_to_9(
        digit3,
        (number >= 1000 && number % 100 === 0) || number < 100,
        number < 1000 && removeLeadingOne,
        this.context.characterSet.HUNDRED,
      );
  }
  convert_digit_1000(
    number: number,
    removeLeadingOne: boolean,
    digit4: number,
  ) {
    return this.convert_0_to_9(
      digit4,
      number < 1000,
      number > 999 && removeLeadingOne,
      this.context.characterSet.THOUSAND,
    );
  }
  convert_0_to_9999(
    number: number,
    removeLeadingOne: boolean,
    suffix: string,
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
      digit3,
    );
    const char3 = this.convert_digit_100(number, removeLeadingOne, digit3);
    const char4 = this.convert_digit_1000(number, removeLeadingOne, digit4);

    return char4 + char3 + char2 + char1 + suffix;
  }
}
