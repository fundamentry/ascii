import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { GREATER_THAN } from './GREATER_THAN.js';

describe('GREATER_THAN', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(GREATER_THAN)).toBe(Terminal);
  });
});
