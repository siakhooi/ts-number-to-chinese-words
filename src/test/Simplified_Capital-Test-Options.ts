import {Options} from '../main/index';

export const optionCapital: Options[] = [
  {useCapital: true},
  {useCapital: true, useTraditional: false},
  {useCapital: true, displayPositive: false},
  {useCapital: true, displayPositive: false, useTraditional: false},
];
export const optionCapitalPositive: Options[] = [
  {useCapital: true, displayPositive: true},
  {useCapital: true, displayPositive: true, useTraditional: false},
];
