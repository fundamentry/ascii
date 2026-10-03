import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { NAK } from './NAK.js';

describe('NAK', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(NAK)).toBe(Terminal);
  });
});
