import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { NUL } from './NUL.js';

describe('NUL', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(NUL)).toBe(Terminal);
  });
});
