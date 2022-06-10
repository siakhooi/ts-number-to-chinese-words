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
  const digit10 = Math.floor(number / 10);
  const digit01 = number % 10;

  const char10 = getDigit_1(digit10) + CHARACTER_SET.TEN;
  const char01 = digit01 === 0 ? '' : getDigit_1(digit01);

  return char10 + char01;
}
function getDigit_111(number: number): string {
  const digit100 = Math.floor(number / 100);
  const digit011 = number % 100;

  const char100 = getDigit_1(digit100) + CHARACTER_SET.HUNDRED;
  let char011 = '';

  if (digit011 > 0 && digit011 < 10)
    char011 = CHARACTER_SET.ZERO + getDigit_1(digit011);
  else if (digit011 >= 10) char011 = getDigit_11(digit011);

  return char100 + char011;
}
function getDigit_1111(number: number): string {
  const digit1000 = Math.floor(number / 1000);
  const digit0111 = number % 1000;

  const char1000 = getDigit_1(digit1000) + CHARACTER_SET.THOUSAND;

  let char0111 = '';

  if (digit0111 > 0 && digit0111 < 10)
    char0111 = CHARACTER_SET.ZERO + getDigit_1(digit0111);
  else if (digit0111 >= 10 && digit0111 < 100)
    char0111 = CHARACTER_SET.ZERO + getDigit_11(digit0111);
  else if (digit0111 >= 100) char0111 = getDigit_111(digit0111);

  return char1000 + char0111;
}

function getDigit_1111w(number: number): string {
  const digit10000 = Math.floor(number / 10000);
  const digit01111 = number % 10000;

  const char10000 = getDigit_9999(digit10000) + CHARACTER_SET.TENTHOUSAND;

  let char01111 = '';
  if (digit01111 > 0) char01111 = getDigit_9999(digit01111);
  if (digit01111 > 0 && digit01111 < 1000)
    char01111 = CHARACTER_SET.ZERO + char01111;

  return char10000 + char01111;
}
function getDigit_1111yi(number: number): string {
  const digit10000w = Math.floor(number / 100000000);
  const digit01111w = number % 100000000;

  let char10000w = getDigit_9999(digit10000w) + CHARACTER_SET.HUNDREDMILLION;

  const digit10000 = Math.floor(digit01111w / 10000);
  const digit01111 = digit01111w % 10000;

  let char10000 = '';
  if (digit10000 > 0) {
    char10000 = getDigit_9999(digit10000) + CHARACTER_SET.TENTHOUSAND;
    if (digit10000 < 1000) char10000w += CHARACTER_SET.ZERO;
  }

  let char01111 = '';
  if (digit01111 > 0) {
    char01111 = getDigit_9999(digit01111);

    if (digit01111 < 1000 || (digit01111 >= 1000 && digit10000 === 0))
      char01111 = CHARACTER_SET.ZERO + char01111;
  }

  return char10000w + char10000 + char01111;
}
function getDigit_9999(number: number): string {
  if (number < 10) return getDigit_1(number);
  else if (number < 100) return getDigit_11(number);
  else if (number < 1000) return getDigit_111(number);
  else return getDigit_1111(number);
}

export function convertNumber(number: number): string {
  if (number < 0 || number > 999999999999) throw ERR_NOT_SUPPORTED;
  if (number !== Math.floor(number)) throw ERR_NOT_SUPPORTED;

  if (number < 10000) return getDigit_9999(number);
  else if (number < 100000000) return getDigit_1111w(number);
  return getDigit_1111yi(number);
}
