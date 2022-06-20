import {allCharacterSets} from './Constants';

export class CharacterSet {
  BASE: string;
  ZERO: string;
  TEN: string;
  HUNDRED: string;
  THOUSAND: string;
  TENTHOUSAND: string;
  HUNDREDMILLION: string;
  TRILLION: string;
  NEGATIVE: string;
  POSITIVE: string;
  useTraditional: boolean;
  useCapital: boolean;

  constructor(
    Base: string,
    Magnitudes: string,
    Sign: string,
    useTraditional: boolean,
    useCapital: boolean
  ) {
    this.BASE = Base;
    this.ZERO = Base[0];
    this.TEN = Magnitudes[0];
    this.HUNDRED = Magnitudes[1];
    this.THOUSAND = Magnitudes[2];
    this.TENTHOUSAND = Magnitudes[3];
    this.HUNDREDMILLION = Magnitudes[4];
    this.TRILLION = Magnitudes[5];
    this.POSITIVE = Sign[0];
    this.NEGATIVE = Sign[1];
    this.useTraditional = useTraditional;
    this.useCapital = useCapital;
  }
}

export function getCharacterSet(
  useTraditional = false,
  useCapital = false
): CharacterSet {
  return allCharacterSets.filter(
    x => x.useTraditional === useTraditional && x.useCapital === useCapital
  )[0];
}
