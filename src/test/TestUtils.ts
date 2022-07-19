import {Options} from '../main/index';

export function generate(
  options: Options[],
  data: [number, string[]][],
  index = 0
): [Options, number, string][] {
  const r1: [Options, number, string][] = [];

  for (const d of data) {
    for (const o of options) {
      r1.push([o, d[0], d[1][index]]);
    }
  }

  return r1;
}
