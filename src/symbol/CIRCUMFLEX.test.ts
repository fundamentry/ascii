import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { CIRCUMFLEX } from './CIRCUMFLEX.js';

describe('CIRCUMFLEX', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(CIRCUMFLEX)).toBe(Terminal);
  });
});
