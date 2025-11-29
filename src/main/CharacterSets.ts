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
  TRADITIONAL_DOT: string;
  TRADITIONAL_FLOATING_UNIT: string;
  CONTRACTION: string[];
  CONTRACTION_200: string;
  useTraditional: boolean;
  useCapital: boolean;

  constructor(Base: string, Magnitudes: string, SignAndDot: string, traditionalFloatingUnit: string, contraction: string, useTraditional: boolean, useCapital: boolean) {
    this.BASE = Base;
    this.ZERO = Base[0];
    this.TEN = Magnitudes[0];
    this.HUNDRED = Magnitudes[1];
    this.THOUSAND = Magnitudes[2];
    this.TENTHOUSAND = Magnitudes[3];
    this.HUNDREDMILLION = Magnitudes[4];
    this.TRILLION = Magnitudes[5];
    this.POSITIVE = SignAndDot[0];
    this.NEGATIVE = SignAndDot[1];
    this.DOT = SignAndDot[2];
    this.TRADITIONAL_DOT = SignAndDot[3];
    this.TRADITIONAL_FLOATING_UNIT = traditionalFloatingUnit;
    this.CONTRACTION = [];
    this.CONTRACTION[2] = contraction[0];
    this.CONTRACTION[3] = contraction[1];
    this.CONTRACTION[4] = contraction[2];
    this.CONTRACTION[5] = contraction[3];
    this.CONTRACTION[6] = contraction[4];
    this.CONTRACTION[7] = contraction[5];
    this.CONTRACTION[8] = contraction[6];
    this.CONTRACTION[9] = contraction[7];
    this.CONTRACTION_200 = contraction[8];
    this.useTraditional = useTraditional;
    this.useCapital = useCapital;
  }
}

const allCharacterSets = [
  //
  new CharacterSet('零一二三四五六七八九', '十百千万亿兆', '正负点又', '分厘毫秒忽微纤沙尘埃渺漠', '廿卅卌圩圆进枯桦皕', false, false),
  new CharacterSet('零壹贰叁肆伍陆柒捌玖', '拾佰仟萬億兆', '正负点又', '分厘毫秒忽微纤沙尘埃渺漠', '念', false, true),
  new CharacterSet('零一二三四五六七八九', '十百千萬億兆', '正負點又', '分釐毫秒忽微纖沙塵埃渺漠', '廿卅卌圩圓進枯樺皕', true, false),
  new CharacterSet('零壹貳參肆伍陸柒捌玖', '拾佰仟萬億兆', '正負點又', '分釐毫秒忽微纖沙塵埃渺漠', '念', true, true),
];

export function getCharacterSet(useTraditional = false, useCapital = false): CharacterSet {
  return allCharacterSets.find(x => x.useTraditional === useTraditional && x.useCapital === useCapital)!;
}
