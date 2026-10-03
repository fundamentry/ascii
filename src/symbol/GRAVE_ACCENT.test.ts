import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { GRAVE_ACCENT } from './GRAVE_ACCENT.js';

describe('GRAVE_ACCENT', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(GRAVE_ACCENT)).toBe(Terminal);
  });
});
