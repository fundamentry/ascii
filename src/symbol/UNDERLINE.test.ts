import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { UNDERLINE } from './UNDERLINE.js';

describe('UNDERLINE', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(UNDERLINE)).toBe(Terminal);
  });
});
