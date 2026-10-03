import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { SLANT } from './SLANT.js';

describe('SLANT', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(SLANT)).toBe(Terminal);
  });
});
