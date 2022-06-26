import {options} from '../main/index';

export const optionTraditional: options[] = [
  {useTraditional: true},
  {useTraditional: true, useCapital: false},
  {useTraditional: true, displayPositive: false},
  {useTraditional: true, useCapital: false, displayPositive: false},
];
export const optionTraditionalPositive: options[] = [
  {useTraditional: true, displayPositive: true},
  {useTraditional: true, displayPositive: true, useCapital: false},
];
