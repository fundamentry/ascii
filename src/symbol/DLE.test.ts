import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { DLE } from './DLE.js';

describe('DLE', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(DLE)).toBe(Terminal);
  });
});
