import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { DC2 } from './DC2.js';

describe('DC2', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(DC2)).toBe(Terminal);
  });
});
