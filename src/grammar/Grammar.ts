import { ABNF } from '@fundamentry/abnf';
import { type Rule } from '@fundamentry/grammar';
import { Range } from '@fundamentry/range';
import { type Scalar, codePoint } from '@fundamentry/scalar';

export class Grammar {
  readonly #abnf = new ABNF.Grammar();

  ack(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x06)));
  }

  alpha(): Rule<Scalar.CodePoint> {
    return this.#abnf.alpha();
  }

  ampersand(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x26)));
  }

  apostrophe(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x27)));
  }

  asterisk(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x2a)));
  }

  bel(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x07)));
  }

  bs(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x08)));
  }

  can(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x18)));
  }

  circumflex(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x5e)));
  }

  closingBrace(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x7d)));
  }

  closingBracket(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x5d)));
  }

  closingParenthesis(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x29)));
  }

  colon(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x3a)));
  }

  comma(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x2c)));
  }

  commercialAt(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x40)));
  }

  cr(): Rule<Scalar.CodePoint> {
    return this.#abnf.cr();
  }

  dc1(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x11)));
  }

  dc2(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x12)));
  }

  dc3(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x13)));
  }

  dc4(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x14)));
  }

  del(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x7f)));
  }

  digit(): Rule<Scalar.CodePoint> {
    return this.#abnf.digit();
  }

  dle(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x10)));
  }

  dollarSign(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x24)));
  }

  em(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x19)));
  }

  enq(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x05)));
  }

  eot(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x04)));
  }

  equals(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x3d)));
  }

  esc(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x1b)));
  }

  etb(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x17)));
  }

  etx(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x03)));
  }

  exclamationPoint(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x21)));
  }

  ff(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x0c)));
  }

  fs(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x1c)));
  }

  graveAccent(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x60)));
  }

  greaterThan(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x3e)));
  }

  gs(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x1d)));
  }

  ht(): Rule<Scalar.CodePoint> {
    return this.#abnf.htab();
  }

  hyphen(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x2d)));
  }

  lessThan(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x3c)));
  }

  lf(): Rule<Scalar.CodePoint> {
    return this.#abnf.lf();
  }

  nak(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x15)));
  }

  nul(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x00)));
  }

  numberSign(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x23)));
  }

  openingBrace(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x7b)));
  }

  openingBracket(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x5b)));
  }

  openingParenthesis(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x28)));
  }

  overline(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x7e)));
  }

  percent(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x25)));
  }

  period(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x2e)));
  }

  plus(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x2b)));
  }

  questionMark(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x3f)));
  }

  quotationMarks(): Rule<Scalar.CodePoint> {
    return this.#abnf.dquote();
  }

  reverseSlant(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x5c)));
  }

  rs(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x1e)));
  }

  semicolon(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x3b)));
  }

  si(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x0f)));
  }

  slant(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x2f)));
  }

  so(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x0e)));
  }

  soh(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x01)));
  }

  sp(): Rule<Scalar.CodePoint> {
    return this.#abnf.sp();
  }

  stx(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x02)));
  }

  sub(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x1a)));
  }

  syn(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x16)));
  }

  underline(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x5f)));
  }

  us(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x1f)));
  }

  verticalLine(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x7c)));
  }

  vt(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x0b)));
  }
}
