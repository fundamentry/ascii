import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { SO } from './SO.js';

describe('SO', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(SO)).toBe(Terminal);
  });
});
