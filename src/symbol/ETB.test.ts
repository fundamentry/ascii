import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { ETB } from './ETB.js';

describe('ETB', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(ETB)).toBe(Terminal);
  });
});
