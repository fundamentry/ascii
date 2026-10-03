import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { GS } from './GS.js';

describe('GS', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(GS)).toBe(Terminal);
  });
});
