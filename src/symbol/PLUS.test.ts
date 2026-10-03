import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { PLUS } from './PLUS.js';

describe('PLUS', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(PLUS)).toBe(Terminal);
  });
});
