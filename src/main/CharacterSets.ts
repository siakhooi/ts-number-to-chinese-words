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
};

export function getCharacterSet(
  useTraditional = false,
  useCapital = false
): CHARACTER_SET_TYPE {
  if (useTraditional) {
    return useCapital
      ? {...CHARACTER_SET_TRADITIONAL_CAPITAL}
      : {...CHARACTER_SET_TRADITIONAL_NORMAL};
  } else {
    return useCapital
      ? {...CHARACTER_SET_SIMPLIFIED_CAPITAL}
      : {...CHARACTER_SET_SIMPLIFIED_NORMAL};
  }
}
