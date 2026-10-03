import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { FF } from './FF.js';

describe('FF', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(FF)).toBe(Terminal);
  });
});
