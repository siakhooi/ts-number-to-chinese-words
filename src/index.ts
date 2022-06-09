function getDigit1(number: number): string {
  const c = '零一二三四五六七八九';
  return c.charAt(number);
}
function getDigit2(number: number): string {
  const digit10 = (number / 10) | 0;
  const digit01 = number % 10 | 0;
  const c10 = '十';

  const char10 = getDigit1(digit10) + c10;
  const char01 = digit10 > 0 && digit01 === 0 ? '' : getDigit1(digit01);

  return char10 + char01;
}
export function numberToChineseWords(number: number): string {
  if (number < 0 || number > 99) throw 'Not Supported';
  if (number !== (number | 0)) throw 'Not Supported';

  return number < 10 ? getDigit1(number) : getDigit2(number);
}
