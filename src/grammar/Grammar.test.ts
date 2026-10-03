import { assert, describe, expect, it } from 'vitest';

import { CodePoint } from '@fundamentry/scalar';
import { Point } from '@fundamentry/stream';

import { Grammar } from './Grammar.js';

const input = (value: string) => Point.of(Array.from(value, CodePoint.of));

describe('Grammar', () => {
  const grammar = new Grammar();

  const names = [
    ['nul', '\x00'],
    ['soh', '\x01'],
    ['stx', '\x02'],
    ['etx', '\x03'],
    ['eot', '\x04'],
    ['enq', '\x05'],
    ['ack', '\x06'],
    ['bel', '\x07'],
    ['bs', '\x08'],
    ['ht', '\x09'],
    ['lf', '\x0a'],
    ['vt', '\x0b'],
    ['ff', '\x0c'],
    ['cr', '\x0d'],
    ['so', '\x0e'],
    ['si', '\x0f'],
    ['dle', '\x10'],
    ['dc1', '\x11'],
    ['dc2', '\x12'],
    ['dc3', '\x13'],
    ['dc4', '\x14'],
    ['nak', '\x15'],
    ['syn', '\x16'],
    ['etb', '\x17'],
    ['can', '\x18'],
    ['em', '\x19'],
    ['sub', '\x1a'],
    ['esc', '\x1b'],
    ['fs', '\x1c'],
    ['gs', '\x1d'],
    ['rs', '\x1e'],
    ['us', '\x1f'],
    ['sp', ' '],
    ['exclamationPoint', '!'],
    ['quotationMarks', '"'],
    ['numberSign', '#'],
    ['dollarSign', '$'],
    ['percent', '%'],
    ['ampersand', '&'],
    ['apostrophe', "'"],
    ['openingParenthesis', '('],
    ['closingParenthesis', ')'],
    ['asterisk', '*'],
    ['plus', '+'],
    ['comma', ','],
    ['hyphen', '-'],
    ['period', '.'],
    ['slant', '/'],
    ['colon', ':'],
    ['semicolon', ';'],
    ['lessThan', '<'],
    ['equals', '='],
    ['greaterThan', '>'],
    ['questionMark', '?'],
    ['commercialAt', '@'],
    ['openingBracket', '['],
    ['reverseSlant', '\\'],
    ['closingBracket', ']'],
    ['circumflex', '^'],
    ['underline', '_'],
    ['graveAccent', '`'],
    ['openingBrace', '{'],
    ['verticalLine', '|'],
    ['closingBrace', '}'],
    ['overline', '~'],
    ['del', '\x7f'],
  ] as const;

  const collisions = names.flatMap(([name, char]) =>
    names
      .filter(([, otherChar]) => otherChar !== char)
      .map(([otherName, otherChar]) => ({ name, otherName, otherChar }))
  );

  it.each(names)("%s must match '%s'", (name, char) => {
    const result = grammar[name]().parse(input(char));

    assert(result.ok());
    expect(result.value().value.toString()).toBe(char);
    expect(result.value().rest.isAtEnd()).toBe(true);
  });

  it.each(names)(
    "%s must not match an unrelated character 'z'",
    (name, char) => {
      expect(char).not.toBe('z');
      expect(grammar[name]().parse(input('z')).ok()).toBe(false);
    }
  );

  it.each(names)(
    '%s must not match a raw element that is not a code point',
    name => {
      expect(grammar[name]().parse(input('')).ok()).toBe(false);
    }
  );

  it.each(collisions)(
    '$name must not match the character reserved for $otherName',
    ({ name, otherChar }) => {
      expect(grammar[name]().parse(input(otherChar)).ok()).toBe(false);
    }
  );

  it('must not match a raw element containing more than one code point', () => {
    expect(grammar.nul().parse(input('ab')).ok()).toBe(false);
  });

  it('must not match a full astral character represented as a single code point', () => {
    expect(grammar.nul().parse(input('😀')).ok()).toBe(false);
  });

  describe('digit', () => {
    it.each(['0', '9'])("must match the digit '%s'", digit => {
      const result = grammar.digit().parse(input(digit));

      assert(result.ok());
      expect(result.value().value.toString()).toBe(digit);
      expect(result.value().rest.isAtEnd()).toBe(true);
    });

    it('must not match a letter', () => {
      expect(grammar.digit().parse(input('a')).ok()).toBe(false);
    });
  });

  describe('alpha', () => {
    it.each(['A', 'Z', 'a', 'z'])("must match the letter '%s'", letter => {
      const result = grammar.alpha().parse(input(letter));

      assert(result.ok());
      expect(result.value().value.toString()).toBe(letter);
      expect(result.value().rest.isAtEnd()).toBe(true);
    });

    it('must not match a digit', () => {
      expect(grammar.alpha().parse(input('5')).ok()).toBe(false);
    });
  });
});
