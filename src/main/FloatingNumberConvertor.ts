import {BasicNumberConvertor} from './BasicNumberConvertor';
import {ConversionContext} from './ConversionContext';

export class FloatingNumberConvertor {
  context: ConversionContext;
  basicNumber: BasicNumberConvertor;
  constructor(context: ConversionContext) {
    this.context = context;
    this.basicNumber = new BasicNumberConvertor(this.context);
  }
  convertFloat(number: number): string {
    if (number - Math.floor(number) === 0) return '';

    const start = Math.floor(number).toString().length + 1;
    const numberToConvert = number.toString();
    const stop = numberToConvert.length;

    return this.context.options.useTraditionalFloatingUnit
      ? this.convertTraditionalFloatingNumber(start, stop, numberToConvert)
      : this.convertModernFloatingNumber(start, stop, numberToConvert);
  }

  convertTraditionalFloatingNumber(
    start: number,
    stop: number,
    numberToConvert: string
  ): string {
    let r = '';
    for (let i = start; i < stop; i++) {
      const j = parseInt(numberToConvert.substring(i, i + 1));
      if (j !== 0)
        r +=
          this.basicNumber.convert_0_to_9(j, false, false, '') +
          this.context.characterSet.TRADITIONAL_FLOATING_UNIT[i - start];
    }

    return r;
  }
  convertModernFloatingNumber(
    start: number,
    stop: number,
    numberToConvert: string
  ): string {
    let r = '';

    for (let i = start; i < stop; i++) {
      const j = parseInt(numberToConvert.substring(i, i + 1));
      r += this.basicNumber.convert_0_to_9(j, false, false, '');
    }

    return r;
  }
}
