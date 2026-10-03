import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { SI } from './SI.js';

describe('SI', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(SI)).toBe(Terminal);
  });
});
