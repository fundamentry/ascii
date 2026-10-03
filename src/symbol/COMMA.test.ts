import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { COMMA } from './COMMA.js';

describe('COMMA', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(COMMA)).toBe(Terminal);
  });
});
