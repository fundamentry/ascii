import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { SEMICOLON } from './SEMICOLON.js';

describe('SEMICOLON', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(SEMICOLON)).toBe(Terminal);
  });
});
