import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { BS } from './BS.js';

describe('BS', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(BS)).toBe(Terminal);
  });
});
