/* eslint-disable prettier/prettier */
import {CharacterSet} from './CharacterSets';

export const ERR_NOT_SUPPORTED = 'Not Supported';
export const allCharacterSets = [
  //
  new CharacterSet('零一二三四五六七八九', '零', '十', '百', '千', '万', '亿', '兆', '负', '正', false, false),
  new CharacterSet('零壹贰叁肆伍陆柒捌玖', '零', '拾', '佰', '仟', '萬', '億', '兆', '负', '正', false, true),
  new CharacterSet('零一二三四五六七八九', '零', '十', '百', '千', '萬', '億', '兆', '負', '正', true, false),
  new CharacterSet('零壹貳參肆伍陸柒捌玖', '零', '拾', '佰', '仟', '萬', '億', '兆', '負', '正', true, true),
];
