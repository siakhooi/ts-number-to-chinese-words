export type CHARACTER_SET_TYPE = {
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
};

const CHARACTER_SET_SIMPLIFIED_NORMAL: CHARACTER_SET_TYPE = {
  BASE: '零一二三四五六七八九',
  ZERO: '零',
  TEN: '十',
  HUNDRED: '百',
  THOUSAND: '千',
  TENTHOUSAND: '万',
  HUNDREDMILLION: '亿',
  TRILLION: '兆',
  NEGATIVE: '负',
  POSITIVE: '正',
  useTraditional: false,
  useCapital: false,
};

const CHARACTER_SET_SIMPLIFIED_CAPITAL: CHARACTER_SET_TYPE = {
  BASE: '零壹贰叁肆伍陆柒捌玖',
  ZERO: '零',
  TEN: '拾',
  HUNDRED: '佰',
  THOUSAND: '仟',
  TENTHOUSAND: '萬',
  HUNDREDMILLION: '億',
  TRILLION: '兆',
  NEGATIVE: '负',
  POSITIVE: '正',
  useTraditional: false,
  useCapital: true,
};

const CHARACTER_SET_TRADITIONAL_NORMAL: CHARACTER_SET_TYPE = {
  BASE: '零一二三四五六七八九',
  ZERO: '零',
  TEN: '十',
  HUNDRED: '百',
  THOUSAND: '千',
  TENTHOUSAND: '萬',
  HUNDREDMILLION: '億',
  TRILLION: '兆',
  NEGATIVE: '負',
  POSITIVE: '正',
  useTraditional: true,
  useCapital: false,
};
const CHARACTER_SET_TRADITIONAL_CAPITAL: CHARACTER_SET_TYPE = {
  BASE: '零壹貳參肆伍陸柒捌玖',
  ZERO: '零',
  TEN: '拾',
  HUNDRED: '佰',
  THOUSAND: '仟',
  TENTHOUSAND: '萬',
  HUNDREDMILLION: '億',
  TRILLION: '兆',
  NEGATIVE: '負',
  POSITIVE: '正',
  useTraditional: true,
  useCapital: true,
};

const allCharacterSets = [
  CHARACTER_SET_SIMPLIFIED_NORMAL,
  CHARACTER_SET_SIMPLIFIED_CAPITAL,
  CHARACTER_SET_TRADITIONAL_NORMAL,
  CHARACTER_SET_TRADITIONAL_CAPITAL,
];

export function getCharacterSet(
  useTraditional = false,
  useCapital = false
): CHARACTER_SET_TYPE {
  return allCharacterSets.filter(
    x => x.useTraditional === useTraditional && x.useCapital === useCapital
  )[0];
}
