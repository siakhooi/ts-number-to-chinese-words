const CHARACTER_SET = {
  BASE: '零一二三四五六七八九',
  ZERO: '零',
  TEN: '十',
  HUNDRED: '百',
  THOUSAND: '千',
  TENTHOUSAND: '万',
  HUNDREDMILLION: '亿',
};
const ERR_NOT_SUPPORTED = 'Not Supported';

function getDigit_1(number: number): string {
  return CHARACTER_SET.BASE.charAt(number);
}
function getDigit_11(number: number): string {
  const digit10 = (number / 10) | 0;
  const digit01 = number % 10 | 0;

  const char10 = getDigit_1(digit10) + CHARACTER_SET.TEN;
  const char01 = digit01 === 0 ? '' : getDigit_1(digit01);

  return char10 + char01;
}
function getDigit_111(number: number): string {
  const digit100 = (number / 100) | 0;
  const digit011 = number % 100 | 0;

  const char100 = getDigit_1(digit100) + CHARACTER_SET.HUNDRED;
  let char011 = '';

  if (digit011 > 0 && digit011 < 10)
    char011 = CHARACTER_SET.ZERO + getDigit_1(digit011);
  else if (digit011 >= 10) char011 = getDigit_11(digit011);

  return char100 + char011;
}
function getDigit_1111(number: number): string {
  const digit1000 = (number / 1000) | 0;
  const digit0111 = number % 1000 | 0;

  const char1000 = getDigit_1(digit1000) + CHARACTER_SET.THOUSAND;

  let char0111 = '';

  if (digit0111 > 0 && digit0111 < 10)
    char0111 = CHARACTER_SET.ZERO + getDigit_1(digit0111);
  else if (digit0111 >= 10 && digit0111 < 100)
    char0111 = CHARACTER_SET.ZERO + getDigit_11(digit0111);
  else if (digit0111 >= 100) char0111 = getDigit_111(digit0111);

  return char1000 + char0111;
}
function getDigit_11111111(number: number): string {
  const digit10000 = (number / 10000) | 0;
  const digit01111 = number % 10000 | 0;

  let char10000 = '';
  if (digit10000 > 0 && digit10000 < 10) char10000 = getDigit_1(digit10000);
  else if (digit10000 >= 10 && digit10000 < 100)
    char10000 = getDigit_11(digit10000);
  else if (digit10000 >= 100 && digit10000 < 1000)
    char10000 = getDigit_111(digit10000);
  else if (digit10000 >= 1000) char10000 = getDigit_1111(digit10000);

  char10000 += CHARACTER_SET.TENTHOUSAND;

  let char01111 = '';
  if (digit01111 > 0 && digit01111 < 10)
    char01111 = CHARACTER_SET.ZERO + getDigit_1(digit01111);
  else if (digit01111 >= 10 && digit01111 < 100)
    char01111 = CHARACTER_SET.ZERO + getDigit_11(digit01111);
  else if (digit01111 >= 100 && digit01111 < 1000)
    char01111 = CHARACTER_SET.ZERO + getDigit_111(digit01111);
  else if (digit01111 >= 1000) char01111 = getDigit_1111(digit01111);

  return char10000 + char01111;
}
function getDigit_111122223333(number: number): string {
  const YI = 100000000;

  const digit100000000 = (number / YI) | 0;
  const digit011111111 = number % YI | 0;

  let char100000000 = '';
  if (digit100000000 > 0 && digit100000000 < 10)
    char100000000 = getDigit_1(digit100000000);
  else if (digit100000000 >= 10 && digit100000000 < 100)
    char100000000 = getDigit_11(digit100000000);
  else if (digit100000000 >= 100 && digit100000000 < 1000)
    char100000000 = getDigit_111(digit100000000);
  else if (digit100000000 >= 1000)
    char100000000 = getDigit_1111(digit100000000);

  char100000000 += CHARACTER_SET.HUNDREDMILLION;

  const WAN = 10000;
  const digit10000 = (digit011111111 / WAN) | 0;
  const digit01111 = digit011111111 % WAN | 0;

  let char10000 = '';
  if (digit10000 > 0 && digit10000 < 10) char10000 = getDigit_1(digit10000);
  else if (digit10000 >= 10 && digit10000 < 100)
    char10000 = getDigit_11(digit10000);
  else if (digit10000 >= 100 && digit10000 < 1000)
    char10000 = getDigit_111(digit10000);
  else if (digit10000 >= 1000) char10000 = getDigit_1111(digit10000);

  if (digit10000 > 0) char10000 += CHARACTER_SET.TENTHOUSAND;

  if (digit10000 < 1000 && digit10000 > 0) char100000000 += CHARACTER_SET.ZERO;

  let char01111 = '';
  if (digit01111 > 0 && digit01111 < 10)
    char01111 = CHARACTER_SET.ZERO + getDigit_1(digit01111);
  else if (digit01111 >= 10 && digit01111 < 100)
    char01111 = CHARACTER_SET.ZERO + getDigit_11(digit01111);
  else if (digit01111 >= 100 && digit01111 < 1000)
    char01111 = CHARACTER_SET.ZERO + getDigit_111(digit01111);
  else if (digit01111 >= 1000 && digit10000 === 0)
    char01111 = CHARACTER_SET.ZERO + getDigit_1111(digit01111);
  else if (digit01111 >= 1000 && digit10000 > 0)
    char01111 = getDigit_1111(digit01111);

  return char100000000 + char10000 + char01111;
}
export function numberToChineseWords(number: number): string {
  if (number < 0 || number > 999999999999) throw ERR_NOT_SUPPORTED;
  if (number !== Math.floor(number)) throw ERR_NOT_SUPPORTED;

  if (number < 10) return getDigit_1(number);
  else if (number < 100) return getDigit_11(number);
  else if (number < 1000) return getDigit_111(number);
  else if (number < 10000) return getDigit_1111(number);
  else if (number < 100000000) return getDigit_11111111(number);
  return getDigit_111122223333(number);
}
