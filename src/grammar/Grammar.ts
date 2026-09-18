import { ABNF } from '@fundamentry/abnf';
import { type Rule } from '@fundamentry/grammar';
import { Range } from '@fundamentry/range';
import { type Scalar, codePoint } from '@fundamentry/scalar';

export class Grammar {
  readonly #abnf = new ABNF.Grammar();

  ack(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x06)));
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

  dle(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x10)));
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

  esc(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x1b)));
  }

  etb(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x17)));
  }

  etx(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x03)));
  }

  ff(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x0c)));
  }

  fs(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x1c)));
  }

  gs(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x1d)));
  }

  ht(): Rule<Scalar.CodePoint> {
    return this.#abnf.htab();
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

  rs(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x1e)));
  }

  si(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x0f)));
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

  us(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x1f)));
  }

  vt(): Rule<Scalar.CodePoint> {
    return this.#abnf.terminal(Range.singleton(codePoint(0x0b)));
  }
}
