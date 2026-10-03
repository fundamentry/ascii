import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { PERIOD } from './PERIOD.js';

describe('PERIOD', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(PERIOD)).toBe(Terminal);
  });
});
