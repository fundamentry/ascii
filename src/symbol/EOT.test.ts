import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { EOT } from './EOT.js';

describe('EOT', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(EOT)).toBe(Terminal);
  });
});
