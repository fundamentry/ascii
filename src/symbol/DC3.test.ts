import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { DC3 } from './DC3.js';

describe('DC3', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(DC3)).toBe(Terminal);
  });
});
