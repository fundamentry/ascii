import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { COMMERCIAL_AT } from './COMMERCIAL_AT.js';

describe('COMMERCIAL_AT', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(COMMERCIAL_AT)).toBe(Terminal);
  });
});
