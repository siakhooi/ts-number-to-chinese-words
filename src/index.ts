export function numberToChineseWords(number: number): string {
  const c = '零一二三四五六七八九';
  if (number < 0 || number > 9) throw 'Not Supported';

  return c.charAt(number);
}
