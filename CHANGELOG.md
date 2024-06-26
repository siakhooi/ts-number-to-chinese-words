# Change Log

## `1.12.0` - 28 Dec 2022
- update dependencies

## `1.11.0` - 22 July 2022 
- update site

## `1.10.0` - 22 July 2022

- add Github Pages
- add cdn : unpkg.com, jsdelivr.net

## `1.9.0` - 19 July 2022

- `#52`, as user, i want to optionally use contraction 20.
- `#53`, as user, i want to optionally use contraction 30.
- `#54`, as user, i want to optionally use contraction 40.
- `#55`, as user, i want to optionally use all contractions.
- `#56`, as user, i want to optionally use contraction 50.
- `#57`, as user, i want to optionally use contraction 60.
- `#58`, as user, i want to optionally use contraction 70.
- `#59`, as user, i want to optionally use contraction 80.
- `#60`, as user, i want to optionally use contraction 90.
- `#61`, as user, i want to optionally use contraction 200.
- code refactoring
- `#63`, as user, i want to optionally use traditional units for floating numbers.

## `1.8.0` - 5 July 2022

- `#13`, As user, i want to translate floating point numbers
- add coverity scan

## `1.7.0` - 27 June 2022

- `#14`, as user, i want to optionally remove leading one.
- refactor workflows

## unrelease - 26 June 2022

- refactor tests (9ww,99ww,999ww,9999ww,9www, 99wwww, 999www, 9999www)
- add CodeClimate.com, CodeFactor.io, snyk.io, LGTM
- refactor convert_1_0000_0000_to_9999_9999_9999_9999, CharacterSet, fillZeroIfTrue
- refactor testss
- add `TEST_TYPE` environment variable support
- fix workflow

## `1.6.1` - 18 June 2022

- refactor tests (99 to 9999_9999)
- fix bug in capital simplified
- refactor to remove nested ternary operator

## `1.6.0` - 17 June 2022

- `#29`, As user, I want to translate into capital numbers (大写数字) - traditional
- Fix bugs
- Refactor test for `0`, `1-9`
- Refactor into `Constants.ts`

## `1.5.0` - 16 June 2022

- add codacy.com
- `#11`, As user, I want to translate into capital numbers (大写数字) - simplified

## `1.4.0` - 13 June 2022

- `#24`, As user, i want to optionally display 正 for positive numbers （正數）
- combine test workflows into 1 workflow.
- add codecov.io

## `1.3.0` - 12 June 2022

- `#10`, As user, I want to translate into traditional （繁體）
- add coveralls to non-main branch
- code refactor - convert to class

## `1.2.0` - 12 June 2022

- `#23`, As user, I want to translate integer number up to 9999,9999,9999,9999 (simplified)（兆位-千兆位）
- add sonar to non-main branch
- code refactor - add numeric separator
- code refactor - remove convert_1_0000_0000_to_9999_9999_9999

## `1.1.0` - 11 June 2022

- `#12`, As user, i want to translate negative numbers （負數）
- code refactoring - functions rename

## `1.0.0` - 10 June 2022

- `#21`, change version to `1.0.0`
- update readme with sample outputs
- change function name to `convertNumber`
- code refactoring

## `0.0.6` - 10 June 2022

- `#6`, As user, I want to translate integer number 1,0000,0000 to 9999,9999,9999 (simplified)（亿位-千亿位）
- refactor `src` into `src/main` and `src/test`
- refactor test files
- change to sonar ci analysis

## `0.0.5` - 10 June 2022

- `#5`, As user, I want to translate integer number 1,0000 to 9999,9999 (simplified)（萬位-千萬位）

## `0.0.4` - 9 June 2022

- `#4`, As user, I want to translate integer number 1000 to 9999 (simplified)（千位）
- add sonar cloud analysis

## `0.0.3` - 9 June 2022

- `#3`, As user, I want to translate integer number 100 to 999 (simplified)（百位）

## `0.0.2` - 8 June 2022

- `#2`, As user, I want to translate integer number 10 to 99 (simplified)（十位）

## `0.0.1` - 7 June 2022

- `#1`, As user, I want to translate integer number 0 to 9 (simplified)（個位）
