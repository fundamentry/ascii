import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { NUMBER_SIGN } from './NUMBER_SIGN.js';

describe('NUMBER_SIGN', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(NUMBER_SIGN)).toBe(Terminal);
  });
});
