import {Options} from '../main/index';

export const optionTraditional: Options[] = [
  {useTraditional: true},
  {useTraditional: true, useCapital: false},
  {useTraditional: true, displayPositive: false},
  {useTraditional: true, useCapital: false, displayPositive: false},
];
export const optionTraditionalPositive: Options[] = [
  {useTraditional: true, displayPositive: true},
  {useTraditional: true, displayPositive: true, useCapital: false},
];
