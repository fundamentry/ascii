import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { DEL } from './DEL.js';

describe('DEL', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(DEL)).toBe(Terminal);
  });
});
