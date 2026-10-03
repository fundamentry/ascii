import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { OPENING_PARENTHESIS } from './OPENING_PARENTHESIS.js';

describe('OPENING_PARENTHESIS', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(OPENING_PARENTHESIS)).toBe(Terminal);
  });
});
