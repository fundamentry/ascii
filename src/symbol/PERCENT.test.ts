import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { PERCENT } from './PERCENT.js';

describe('PERCENT', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(PERCENT)).toBe(Terminal);
  });
});
