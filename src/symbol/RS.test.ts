import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { RS } from './RS.js';

describe('RS', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(RS)).toBe(Terminal);
  });
});
