import { describe, expect, it } from 'vitest';

import { Terminal } from '@fundamentry/grammar';

import { CAN } from './CAN.js';

describe('CAN', () => {
  it('must be a terminal', () => {
    expect(Object.getPrototypeOf(CAN)).toBe(Terminal);
  });
});
