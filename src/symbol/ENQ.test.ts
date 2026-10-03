import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { ENQ } from './ENQ.js';

describe('ENQ', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(ENQ)).toBe(Terminal);
  });
});
