import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { SYN } from './SYN.js';

describe('SYN', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(SYN)).toBe(Terminal);
  });
});
