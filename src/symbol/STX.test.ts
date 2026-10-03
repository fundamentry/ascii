import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { STX } from './STX.js';

describe('STX', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(STX)).toBe(Terminal);
  });
});
