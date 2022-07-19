import {Convertor} from './Convertor';
import {Options} from './Options';

export function convertNumber(number: number, options: Options = {}): string {
  const convertor = new Convertor(options);
  return convertor.convertNumber(number);
}
export {Options} from './Options';
