import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { DOLLAR_SIGN } from './DOLLAR_SIGN.js';

describe('DOLLAR_SIGN', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(DOLLAR_SIGN)).toBe(Terminal);
  });
});
