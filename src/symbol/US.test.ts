import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { US } from './US.js';

describe('US', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(US)).toBe(Terminal);
  });
});
