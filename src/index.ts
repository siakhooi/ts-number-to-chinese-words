const CHARACTER_SET = {
  BASE: '零一二三四五六七八九',
  ZERO: '零',
  TEN: '十',
  HUNDRED: '百',
  THOUSAND: '千',
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
export function numberToChineseWords(number: number): string {
  if (number < 0 || number > 9999) throw ERR_NOT_SUPPORTED;
  if (number !== (number | 0)) throw ERR_NOT_SUPPORTED;

  if (number < 10) return getDigit_1(number);
  else if (number < 100) return getDigit_11(number);
  else if (number < 1000) return getDigit_111(number);
  else return getDigit_1111(number);
}
