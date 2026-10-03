import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { ESC } from './ESC.js';

describe('ESC', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(ESC)).toBe(Terminal);
  });
});
