import {options} from '../main/index';

export function merge(
  data: [number, string, string][],
  options: options[]
): [number, string, string, options][] {
  const r1: [number, string, string, options][] = [];

  for (const d of data) {
    for (const o of options) {
      r1.push([d[0], d[1], d[2], o]);
    }
  }

  return r1;
}
