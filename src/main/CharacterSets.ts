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
    BASE: string,
    ZERO: string,
    TEN: string,
    HUNDRED: string,
    THOUSAND: string,
    TENTHOUSAND: string,
    HUNDREDMILLION: string,
    TRILLION: string,
    NEGATIVE: string,
    POSITIVE: string,
    useTraditional: boolean,
    useCapital: boolean
  ) {
    this.BASE = BASE;
    this.ZERO = ZERO;
    this.TEN = TEN;
    this.HUNDRED = HUNDRED;
    this.THOUSAND = THOUSAND;
    this.TENTHOUSAND = TENTHOUSAND;
    this.HUNDREDMILLION = HUNDREDMILLION;
    this.TRILLION = TRILLION;
    this.NEGATIVE = NEGATIVE;
    this.POSITIVE = POSITIVE;
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
