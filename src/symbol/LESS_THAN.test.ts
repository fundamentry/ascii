import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { LESS_THAN } from './LESS_THAN.js';

describe('LESS_THAN', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(LESS_THAN)).toBe(Terminal);
  });
});
