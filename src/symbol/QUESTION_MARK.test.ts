import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { QUESTION_MARK } from './QUESTION_MARK.js';

describe('QUESTION_MARK', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(QUESTION_MARK)).toBe(Terminal);
  });
});
