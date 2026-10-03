import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { DC1 } from './DC1.js';

describe('DC1', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(DC1)).toBe(Terminal);
  });
});
