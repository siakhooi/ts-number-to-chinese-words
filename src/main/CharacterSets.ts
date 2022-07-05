/* eslint-disable prettier/prettier */

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
  DOT: string;
  useTraditional: boolean;
  useCapital: boolean;

  constructor(Base: string, Magnitudes: string, Sign: string, Dot: string, useTraditional: boolean, useCapital: boolean) {
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
    this.DOT = Dot;
    this.useTraditional = useTraditional;
    this.useCapital = useCapital;
  }
}

const allCharacterSets = [
  //
  new CharacterSet('零一二三四五六七八九', '十百千万亿兆', '正负', '点', false, false),
  new CharacterSet('零壹贰叁肆伍陆柒捌玖', '拾佰仟萬億兆', '正负', '点', false, true),
  new CharacterSet('零一二三四五六七八九', '十百千萬億兆', '正負', '點', true, false),
  new CharacterSet('零壹貳參肆伍陸柒捌玖', '拾佰仟萬億兆', '正負', '點', true, true),
];

export function getCharacterSet(useTraditional = false, useCapital = false): CharacterSet {
  return allCharacterSets.filter(x => x.useTraditional === useTraditional && x.useCapital === useCapital)[0];
}
