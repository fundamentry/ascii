import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { BEL } from './BEL.js';

describe('BEL', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(BEL)).toBe(Terminal);
  });
});
