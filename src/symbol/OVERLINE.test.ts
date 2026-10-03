import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { OVERLINE } from './OVERLINE.js';

describe('OVERLINE', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(OVERLINE)).toBe(Terminal);
  });
});
