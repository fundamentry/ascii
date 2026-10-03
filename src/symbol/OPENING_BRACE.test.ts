import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { OPENING_BRACE } from './OPENING_BRACE.js';

describe('OPENING_BRACE', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(OPENING_BRACE)).toBe(Terminal);
  });
});
