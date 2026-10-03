import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { EM } from './EM.js';

describe('EM', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(EM)).toBe(Terminal);
  });
});
