import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { AMPERSAND } from './AMPERSAND.js';

describe('AMPERSAND', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(AMPERSAND)).toBe(Terminal);
  });
});
