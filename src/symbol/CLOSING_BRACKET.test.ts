import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { CLOSING_BRACKET } from './CLOSING_BRACKET.js';

describe('CLOSING_BRACKET', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(CLOSING_BRACKET)).toBe(Terminal);
  });
});
