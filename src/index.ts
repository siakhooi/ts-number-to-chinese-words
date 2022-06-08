function getDigit1(number: number): string {
  const c = '零一二三四五六七八九';
  return c.charAt(number);
}
export function numberToChineseWords(number: number): string {
  if (number < 0 || number > 99) throw 'Not Supported';
  if (number !== (number | 0)) throw 'Not Supported';
  const c10 = '十';

  const digit10 = (number / 10) | 0;
  const digit01 = number % 10 | 0;
  const char10 = digit10 === 0 ? '' : getDigit1(digit10) + c10;
  const char01 = digit10 > 0 && digit01 === 0 ? '' : getDigit1(digit01);

  return char10 + char01;
}
