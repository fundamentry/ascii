import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { EQUALS } from './EQUALS.js';

describe('EQUALS', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(EQUALS)).toBe(Terminal);
  });
});
