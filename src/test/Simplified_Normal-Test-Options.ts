import {options} from '../main/index';

export const optionSimplified: options[] = [
  {},
  {useTraditional: false},
  {useCapital: false},
  {displayPositive: false},
  {useTraditional: false, displayPositive: false},
  {useTraditional: false, useCapital: false},
  {displayPositive: false, useCapital: false},
  {useTraditional: false, displayPositive: false, useCapital: false},
];

export const optionSimplifiedPositive: options[] = [
  {displayPositive: true},
  {displayPositive: true, useTraditional: false},
  {displayPositive: true, useCapital: false},
  {displayPositive: true, useTraditional: false, useCapital: false},
];
