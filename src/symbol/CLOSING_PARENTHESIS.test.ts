import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { CLOSING_PARENTHESIS } from './CLOSING_PARENTHESIS.js';

describe('CLOSING_PARENTHESIS', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(CLOSING_PARENTHESIS)).toBe(Terminal);
  });
});
