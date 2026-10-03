import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { COLON } from './COLON.js';

describe('COLON', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(COLON)).toBe(Terminal);
  });
});
