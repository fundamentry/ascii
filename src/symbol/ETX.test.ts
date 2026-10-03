import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { ETX } from './ETX.js';

describe('ETX', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(ETX)).toBe(Terminal);
  });
});
