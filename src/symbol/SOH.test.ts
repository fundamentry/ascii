import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { SOH } from './SOH.js';

describe('SOH', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(SOH)).toBe(Terminal);
  });
});
