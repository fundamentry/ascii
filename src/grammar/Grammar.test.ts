import { describe, expect, it } from 'vitest';

import { Matched, Unmatched } from '@fundamentry/grammar';
import { codePoint } from '@fundamentry/scalar';
import { Tape } from '@fundamentry/stream';

import { Grammar } from './Grammar.js';

const input = (value: string) => new Tape(Array.from(value, codePoint));

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
    ['del', '\x7f'],
  ] as const;

  const collisions = names.flatMap(([name, char]) =>
    names
      .filter(([, otherChar]) => otherChar !== char)
      .map(([otherName, otherChar]) => ({ name, otherName, otherChar }))
  );

  it.each(names)("%s must match '%s'", (name, char) => {
    const recognition = grammar[name]().derive(input(char));

    expect(recognition).toBeInstanceOf(Matched);

    if (recognition instanceof Matched)
      expect(recognition.value().toString()).toBe(char);
  });

  it.each(names)(
    "%s must not match an unrelated character 'z'",
    (name, char) => {
      expect(char).not.toBe('z');

      const recognition = grammar[name]().derive(input('z'));

      expect(recognition).toBeInstanceOf(Unmatched);
    }
  );

  it.each(names)(
    '%s must not match a raw tape element that is not a code point',
    name => {
      const recognition = grammar[name]().derive(new Tape(['']));

      expect(recognition).toBeInstanceOf(Unmatched);
    }
  );

  it.each(collisions)(
    '$name must not match the character reserved for $otherName',
    ({ name, otherChar }) => {
      const recognition = grammar[name]().derive(input(otherChar));

      expect(recognition).toBeInstanceOf(Unmatched);
    }
  );

  it('must not match a lone surrogate passed as a raw tape element, instead of throwing', () => {
    const recognition = grammar.nul().derive(new Tape(['\ud83d']));

    expect(recognition).toBeInstanceOf(Unmatched);
  });

  it('must not match a raw tape element containing more than one code point', () => {
    const recognition = grammar.nul().derive(new Tape(['ab']));

    expect(recognition).toBeInstanceOf(Unmatched);
  });

  it('must not match a full astral character represented as a single code point', () => {
    const recognition = grammar.nul().derive(input('😀'));

    expect(recognition).toBeInstanceOf(Unmatched);
  });
});
