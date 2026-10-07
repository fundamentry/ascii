import { describe, expect, it } from 'vitest';

import {
  ack,
  alpha,
  ampersand,
  apostrophe,
  asterisk,
  bel,
  bs,
  can,
  circumflex,
  closingBrace,
  closingBracket,
  closingParenthesis,
  colon,
  comma,
  commercialAt,
  cr,
  dc1,
  dc2,
  dc3,
  dc4,
  del,
  digit,
  dle,
  dollarSign,
  em,
  enq,
  eot,
  equals,
  esc,
  etb,
  etx,
  exclamationPoint,
  ff,
  fs,
  graveAccent,
  greaterThan,
  gs,
  ht,
  hyphen,
  lessThan,
  lf,
  nak,
  nul,
  numberSign,
  openingBrace,
  openingBracket,
  openingParenthesis,
  overline,
  percent,
  period,
  plus,
  questionMark,
  quotationMarks,
  reverseSlant,
  rs,
  semicolon,
  si,
  slant,
  soh,
  so,
  sp,
  stx,
  sub,
  syn,
  underline,
  us,
  verticalLine,
  vt,
} from './Grammar.js';

describe('Grammar', () => {
  it('must define ACK', () => {
    expect(Array.from(ack.definitions(), String)).toEqual(['ACK = %x06']);
  });

  it('must define ALPHA', () => {
    expect(Array.from(alpha.definitions(), String)).toEqual([
      'ALPHA = %x41-5A / %x61-7A',
    ]);
  });

  it('must define AMPERSAND', () => {
    expect(Array.from(ampersand.definitions(), String)).toEqual([
      'AMPERSAND = %x26',
    ]);
  });

  it('must define APOSTROPHE', () => {
    expect(Array.from(apostrophe.definitions(), String)).toEqual([
      'APOSTROPHE = %x27',
    ]);
  });

  it('must define ASTERISK', () => {
    expect(Array.from(asterisk.definitions(), String)).toEqual([
      'ASTERISK = %x2A',
    ]);
  });

  it('must define BEL', () => {
    expect(Array.from(bel.definitions(), String)).toEqual(['BEL = %x07']);
  });

  it('must define BS', () => {
    expect(Array.from(bs.definitions(), String)).toEqual(['BS = %x08']);
  });

  it('must define CAN', () => {
    expect(Array.from(can.definitions(), String)).toEqual(['CAN = %x18']);
  });

  it('must define CIRCUMFLEX', () => {
    expect(Array.from(circumflex.definitions(), String)).toEqual([
      'CIRCUMFLEX = %x5E',
    ]);
  });

  it('must define CLOSING-BRACE', () => {
    expect(Array.from(closingBrace.definitions(), String)).toEqual([
      'CLOSING-BRACE = %x7D',
    ]);
  });

  it('must define CLOSING-BRACKET', () => {
    expect(Array.from(closingBracket.definitions(), String)).toEqual([
      'CLOSING-BRACKET = %x5D',
    ]);
  });

  it('must define CLOSING-PARENTHESIS', () => {
    expect(Array.from(closingParenthesis.definitions(), String)).toEqual([
      'CLOSING-PARENTHESIS = %x29',
    ]);
  });

  it('must define COLON', () => {
    expect(Array.from(colon.definitions(), String)).toEqual(['COLON = %x3A']);
  });

  it('must define COMMA', () => {
    expect(Array.from(comma.definitions(), String)).toEqual(['COMMA = %x2C']);
  });

  it('must define COMMERCIAL-AT', () => {
    expect(Array.from(commercialAt.definitions(), String)).toEqual([
      'COMMERCIAL-AT = %x40',
    ]);
  });

  it('must define CR', () => {
    expect(Array.from(cr.definitions(), String)).toEqual(['CR = %x0D']);
  });

  it('must define DC1', () => {
    expect(Array.from(dc1.definitions(), String)).toEqual(['DC1 = %x11']);
  });

  it('must define DC2', () => {
    expect(Array.from(dc2.definitions(), String)).toEqual(['DC2 = %x12']);
  });

  it('must define DC3', () => {
    expect(Array.from(dc3.definitions(), String)).toEqual(['DC3 = %x13']);
  });

  it('must define DC4', () => {
    expect(Array.from(dc4.definitions(), String)).toEqual(['DC4 = %x14']);
  });

  it('must define DEL', () => {
    expect(Array.from(del.definitions(), String)).toEqual(['DEL = %x7F']);
  });

  it('must define DIGIT', () => {
    expect(Array.from(digit.definitions(), String)).toEqual([
      'DIGIT = %x30-39',
    ]);
  });

  it('must define DLE', () => {
    expect(Array.from(dle.definitions(), String)).toEqual(['DLE = %x10']);
  });

  it('must define DOLLAR-SIGN', () => {
    expect(Array.from(dollarSign.definitions(), String)).toEqual([
      'DOLLAR-SIGN = %x24',
    ]);
  });

  it('must define EM', () => {
    expect(Array.from(em.definitions(), String)).toEqual(['EM = %x19']);
  });

  it('must define ENQ', () => {
    expect(Array.from(enq.definitions(), String)).toEqual(['ENQ = %x05']);
  });

  it('must define EOT', () => {
    expect(Array.from(eot.definitions(), String)).toEqual(['EOT = %x04']);
  });

  it('must define EQUALS', () => {
    expect(Array.from(equals.definitions(), String)).toEqual(['EQUALS = %x3D']);
  });

  it('must define ESC', () => {
    expect(Array.from(esc.definitions(), String)).toEqual(['ESC = %x1B']);
  });

  it('must define ETB', () => {
    expect(Array.from(etb.definitions(), String)).toEqual(['ETB = %x17']);
  });

  it('must define ETX', () => {
    expect(Array.from(etx.definitions(), String)).toEqual(['ETX = %x03']);
  });

  it('must define EXCLAMATION-POINT', () => {
    expect(Array.from(exclamationPoint.definitions(), String)).toEqual([
      'EXCLAMATION-POINT = %x21',
    ]);
  });

  it('must define FF', () => {
    expect(Array.from(ff.definitions(), String)).toEqual(['FF = %x0C']);
  });

  it('must define FS', () => {
    expect(Array.from(fs.definitions(), String)).toEqual(['FS = %x1C']);
  });

  it('must define GRAVE-ACCENT', () => {
    expect(Array.from(graveAccent.definitions(), String)).toEqual([
      'GRAVE-ACCENT = %x60',
    ]);
  });

  it('must define GREATER-THAN', () => {
    expect(Array.from(greaterThan.definitions(), String)).toEqual([
      'GREATER-THAN = %x3E',
    ]);
  });

  it('must define GS', () => {
    expect(Array.from(gs.definitions(), String)).toEqual(['GS = %x1D']);
  });

  it('must define HT', () => {
    expect(Array.from(ht.definitions(), String)).toEqual([
      'HT = HTAB',
      'HTAB = %x09',
    ]);
  });

  it('must define HYPHEN', () => {
    expect(Array.from(hyphen.definitions(), String)).toEqual(['HYPHEN = %x2D']);
  });

  it('must define LESS-THAN', () => {
    expect(Array.from(lessThan.definitions(), String)).toEqual([
      'LESS-THAN = %x3C',
    ]);
  });

  it('must define LF', () => {
    expect(Array.from(lf.definitions(), String)).toEqual(['LF = %x0A']);
  });

  it('must define NAK', () => {
    expect(Array.from(nak.definitions(), String)).toEqual(['NAK = %x15']);
  });

  it('must define NUL', () => {
    expect(Array.from(nul.definitions(), String)).toEqual(['NUL = %x00']);
  });

  it('must define NUMBER-SIGN', () => {
    expect(Array.from(numberSign.definitions(), String)).toEqual([
      'NUMBER-SIGN = %x23',
    ]);
  });

  it('must define OPENING-BRACE', () => {
    expect(Array.from(openingBrace.definitions(), String)).toEqual([
      'OPENING-BRACE = %x7B',
    ]);
  });

  it('must define OPENING-BRACKET', () => {
    expect(Array.from(openingBracket.definitions(), String)).toEqual([
      'OPENING-BRACKET = %x5B',
    ]);
  });

  it('must define OPENING-PARENTHESIS', () => {
    expect(Array.from(openingParenthesis.definitions(), String)).toEqual([
      'OPENING-PARENTHESIS = %x28',
    ]);
  });

  it('must define OVERLINE', () => {
    expect(Array.from(overline.definitions(), String)).toEqual([
      'OVERLINE = %x7E',
    ]);
  });

  it('must define PERCENT', () => {
    expect(Array.from(percent.definitions(), String)).toEqual([
      'PERCENT = %x25',
    ]);
  });

  it('must define PERIOD', () => {
    expect(Array.from(period.definitions(), String)).toEqual(['PERIOD = %x2E']);
  });

  it('must define PLUS', () => {
    expect(Array.from(plus.definitions(), String)).toEqual(['PLUS = %x2B']);
  });

  it('must define QUESTION-MARK', () => {
    expect(Array.from(questionMark.definitions(), String)).toEqual([
      'QUESTION-MARK = %x3F',
    ]);
  });

  it('must define QUOTATION-MARKS', () => {
    expect(Array.from(quotationMarks.definitions(), String)).toEqual([
      'QUOTATION-MARKS = DQUOTE',
      'DQUOTE = %x22',
    ]);
  });

  it('must define REVERSE-SLANT', () => {
    expect(Array.from(reverseSlant.definitions(), String)).toEqual([
      'REVERSE-SLANT = %x5C',
    ]);
  });

  it('must define RS', () => {
    expect(Array.from(rs.definitions(), String)).toEqual(['RS = %x1E']);
  });

  it('must define SEMICOLON', () => {
    expect(Array.from(semicolon.definitions(), String)).toEqual([
      'SEMICOLON = %x3B',
    ]);
  });

  it('must define SI', () => {
    expect(Array.from(si.definitions(), String)).toEqual(['SI = %x0F']);
  });

  it('must define SLANT', () => {
    expect(Array.from(slant.definitions(), String)).toEqual(['SLANT = %x2F']);
  });

  it('must define SOH', () => {
    expect(Array.from(soh.definitions(), String)).toEqual(['SOH = %x01']);
  });

  it('must define SO', () => {
    expect(Array.from(so.definitions(), String)).toEqual(['SO = %x0E']);
  });

  it('must define SP', () => {
    expect(Array.from(sp.definitions(), String)).toEqual(['SP = %x20']);
  });

  it('must define STX', () => {
    expect(Array.from(stx.definitions(), String)).toEqual(['STX = %x02']);
  });

  it('must define SUB', () => {
    expect(Array.from(sub.definitions(), String)).toEqual(['SUB = %x1A']);
  });

  it('must define SYN', () => {
    expect(Array.from(syn.definitions(), String)).toEqual(['SYN = %x16']);
  });

  it('must define UNDERLINE', () => {
    expect(Array.from(underline.definitions(), String)).toEqual([
      'UNDERLINE = %x5F',
    ]);
  });

  it('must define US', () => {
    expect(Array.from(us.definitions(), String)).toEqual(['US = %x1F']);
  });

  it('must define VERTICAL-LINE', () => {
    expect(Array.from(verticalLine.definitions(), String)).toEqual([
      'VERTICAL-LINE = %x7C',
    ]);
  });

  it('must define VT', () => {
    expect(Array.from(vt.definitions(), String)).toEqual(['VT = %x0B']);
  });
});
