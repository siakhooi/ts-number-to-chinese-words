import {CharacterSet, getCharacterSet} from './CharacterSets';
import {Options} from './Options';

export class ConversionContext {
  options: Options;
  characterSet: CharacterSet;
  isContraction: boolean[];

  constructor(options: Options) {
    this.options = options;
    this.characterSet = getCharacterSet(
      options.useTraditional,
      options.useCapital
    );
    this.isContraction = [];
    this.isContraction[2] = !!options.useContraction20;
    this.isContraction[3] = !!options.useContraction30;
    this.isContraction[4] = !!options.useContraction40;
    this.isContraction[5] = !!options.useContraction50;
    this.isContraction[6] = !!options.useContraction60;
    this.isContraction[7] = !!options.useContraction70;
    this.isContraction[8] = !!options.useContraction80;
    this.isContraction[9] = !!options.useContraction90;
  }
  isContract(number: number): boolean {
    return this.isContraction[number] || !!this.options.useContractionAll;
  }
  isContract200(): boolean {
    return !!this.options.useContraction200 || !!this.options.useContractionAll;
  }

  getDot(): string {
    return this.options.useTraditionalFloatingUnit
      ? this.characterSet.TRADITIONAL_DOT
      : this.characterSet.DOT;
  }
}
