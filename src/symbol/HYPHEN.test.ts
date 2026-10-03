import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { HYPHEN } from './HYPHEN.js';

describe('HYPHEN', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(HYPHEN)).toBe(Terminal);
  });
});
