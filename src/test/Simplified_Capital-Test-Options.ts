import {options} from '../main/index';

export const optionCapital: options[] = [
  {useCapital: true},
  {useCapital: true, useTraditional: false},
  {useCapital: true, displayPositive: false},
  {useCapital: true, displayPositive: false, useTraditional: false},
];
export const optionCapitalPositive: options[] = [
  {useCapital: true, displayPositive: true},
  {useCapital: true, displayPositive: true, useTraditional: false},
];
