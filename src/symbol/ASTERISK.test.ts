import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { ASTERISK } from './ASTERISK.js';

describe('ASTERISK', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(ASTERISK)).toBe(Terminal);
  });
});
