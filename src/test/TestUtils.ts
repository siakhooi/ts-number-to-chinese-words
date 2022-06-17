import {options} from '../main/index';

export function generate(
  options: options[],
  data: [number, string[]][],
  index = 0
): [options, number, string][] {
  const r1: [options, number, string][] = [];

  for (const d of data) {
    for (const o of options) {
      r1.push([o, d[0], d[1][index]]);
    }
  }

  return r1;
}
