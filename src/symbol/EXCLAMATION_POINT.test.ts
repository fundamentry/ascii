import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { EXCLAMATION_POINT } from './EXCLAMATION_POINT.js';

describe('EXCLAMATION_POINT', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(EXCLAMATION_POINT)).toBe(Terminal);
  });
});
