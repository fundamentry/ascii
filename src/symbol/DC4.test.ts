import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { DC4 } from './DC4.js';

describe('DC4', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(DC4)).toBe(Terminal);
  });
});
