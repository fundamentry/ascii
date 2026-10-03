import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { SUB } from './SUB.js';

describe('SUB', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(SUB)).toBe(Terminal);
  });
});
