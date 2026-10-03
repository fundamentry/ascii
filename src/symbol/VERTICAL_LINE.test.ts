import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { VERTICAL_LINE } from './VERTICAL_LINE.js';

describe('VERTICAL_LINE', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(VERTICAL_LINE)).toBe(Terminal);
  });
});
