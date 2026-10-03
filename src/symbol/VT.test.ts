import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { VT } from './VT.js';

describe('VT', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(VT)).toBe(Terminal);
  });
});
