const CHARACTER_SET = {
  BASE: '零一二三四五六七八九',
  ZERO: '零',
  TEN: '十',
  HUNDRED: '百',
  THOUSAND: '千',
  TENTHOUSAND: '万',
  HUNDREDMILLION: '亿',
  NEGATIVE: '负',
};
const ERR_NOT_SUPPORTED = 'Not Supported';

function convert_0_to_9(number: number): string {
  return CHARACTER_SET.BASE.charAt(number);
}
function convert_10_to_99(number: number): string {
  const quotient = Math.floor(number / 10);
  const remainder = number % 10;

  const char_quotient = convert_0_to_9(quotient) + CHARACTER_SET.TEN;
  const char_remainder = remainder === 0 ? '' : convert_0_to_9(remainder);

  return char_quotient + char_remainder;
}
function convert_100_to_999(number: number): string {
  const quotient = Math.floor(number / 100);
  const remainder = number % 100;

  const char_quotient = convert_0_to_9(quotient) + CHARACTER_SET.HUNDRED;
  let char_remainder = '';

  if (remainder > 0 && remainder < 10)
    char_remainder = CHARACTER_SET.ZERO + convert_0_to_9(remainder);
  else if (remainder >= 10) char_remainder = convert_10_to_99(remainder);

  return char_quotient + char_remainder;
}
function convert_1000_to_9999(number: number): string {
  const quotient = Math.floor(number / 1000);
  const remainder = number % 1000;

  const char_quotient = convert_0_to_9(quotient) + CHARACTER_SET.THOUSAND;

  let char_remainder = '';

  if (remainder > 0 && remainder < 10)
    char_remainder = CHARACTER_SET.ZERO + convert_0_to_9(remainder);
  else if (remainder >= 10 && remainder < 100)
    char_remainder = CHARACTER_SET.ZERO + convert_10_to_99(remainder);
  else if (remainder >= 100) char_remainder = convert_100_to_999(remainder);

  return char_quotient + char_remainder;
}
function convert_0_to_9999(number: number): string {
  if (number < 10) return convert_0_to_9(number);
  else if (number < 100) return convert_10_to_99(number);
  else if (number < 1000) return convert_100_to_999(number);
  else return convert_1000_to_9999(number);
}

function convert_10000_to_99999999(number: number): string {
  const quotient = Math.floor(number / 10000);
  const remainder = number % 10000;

  const char_quotient = convert_0_to_9999(quotient) + CHARACTER_SET.TENTHOUSAND;

  let char_remainder = '';
  if (remainder > 0) char_remainder = convert_0_to_9999(remainder);
  if (remainder > 0 && remainder < 1000)
    char_remainder = CHARACTER_SET.ZERO + char_remainder;

  return char_quotient + char_remainder;
}
function convert_100000000_to_999999999999(number: number): string {
  const quotient1 = Math.floor(number / 100000000);
  const remainder1 = number % 100000000;

  let char_quotient1 =
    convert_0_to_9999(quotient1) + CHARACTER_SET.HUNDREDMILLION;

  const quotient2 = Math.floor(remainder1 / 10000);
  const remainder2 = remainder1 % 10000;

  let char_quotient2 = '';
  if (quotient2 > 0) {
    char_quotient2 = convert_0_to_9999(quotient2) + CHARACTER_SET.TENTHOUSAND;
    if (quotient2 < 1000) char_quotient1 += CHARACTER_SET.ZERO;
  }

  let char_remainder2 = '';
  if (remainder2 > 0) {
    char_remainder2 = convert_0_to_9999(remainder2);

    if (remainder2 < 1000 || (remainder2 >= 1000 && quotient2 === 0))
      char_remainder2 = CHARACTER_SET.ZERO + char_remainder2;
  }

  return char_quotient1 + char_quotient2 + char_remainder2;
}

export function convertNumber(number: number): string {
  if (number < -999999999999 || number > 999999999999) throw ERR_NOT_SUPPORTED;
  if (number !== Math.floor(number)) throw ERR_NOT_SUPPORTED;

  const sign = number < 0 ? CHARACTER_SET.NEGATIVE : '';
  if (number < 0) number = -number;

  if (number < 10000) return sign + convert_0_to_9999(number);
  else if (number < 100000000) return sign + convert_10000_to_99999999(number);
  return sign + convert_100000000_to_999999999999(number);
}
