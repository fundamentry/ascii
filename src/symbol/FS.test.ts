import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { FS } from './FS.js';

describe('FS', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(FS)).toBe(Terminal);
  });
});
