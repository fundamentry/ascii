import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { CLOSING_BRACE } from './CLOSING_BRACE.js';

describe('CLOSING_BRACE', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(CLOSING_BRACE)).toBe(Terminal);
  });
});
