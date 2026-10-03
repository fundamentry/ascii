import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { REVERSE_SLANT } from './REVERSE_SLANT.js';

describe('REVERSE_SLANT', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(REVERSE_SLANT)).toBe(Terminal);
  });
});
