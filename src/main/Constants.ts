import {CharacterSet} from './CharacterSets';

export const ERR_NOT_SUPPORTED = 'Not Supported';
export const allCharacterSets = [
  //
  new CharacterSet('零一二三四五六七八九', '十百千万亿兆', '正负', false, false),
  new CharacterSet('零壹贰叁肆伍陆柒捌玖', '拾佰仟萬億兆', '正负', false, true),
  new CharacterSet('零一二三四五六七八九', '十百千萬億兆', '正負', true, false),
  new CharacterSet('零壹貳參肆伍陸柒捌玖', '拾佰仟萬億兆', '正負', true, true),
];
