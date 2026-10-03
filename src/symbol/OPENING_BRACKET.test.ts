import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { OPENING_BRACKET } from './OPENING_BRACKET.js';

describe('OPENING_BRACKET', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(OPENING_BRACKET)).toBe(Terminal);
  });
});
