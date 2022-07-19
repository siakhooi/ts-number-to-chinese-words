import {Options} from '../main/index';

export const optionSimplified: Options[] = [
  {},
  {useTraditional: false},
  {useCapital: false},
  {displayPositive: false},
  {useTraditional: false, displayPositive: false},
  {useTraditional: false, useCapital: false},
  {displayPositive: false, useCapital: false},
  {useTraditional: false, displayPositive: false, useCapital: false},
];

export const optionSimplifiedPositive: Options[] = [
  {displayPositive: true},
  {displayPositive: true, useTraditional: false},
  {displayPositive: true, useCapital: false},
  {displayPositive: true, useTraditional: false, useCapital: false},
];
