import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { ACK } from './ACK.js';

describe('ACK', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(ACK)).toBe(Terminal);
  });
});
