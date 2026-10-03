import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { APOSTROPHE } from './APOSTROPHE.js';

describe('APOSTROPHE', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(APOSTROPHE)).toBe(Terminal);
  });
});
