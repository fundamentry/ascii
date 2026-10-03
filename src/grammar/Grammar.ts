import { ABNF } from '@fundamentry/abnf';
import { type Production } from '@fundamentry/grammar';

import {
  ACK,
  AMPERSAND,
  APOSTROPHE,
  ASTERISK,
  BEL,
  BS,
  CAN,
  CIRCUMFLEX,
  CLOSING_BRACE,
  CLOSING_BRACKET,
  CLOSING_PARENTHESIS,
  COLON,
  COMMA,
  COMMERCIAL_AT,
  DC1,
  DC2,
  DC3,
  DC4,
  DEL,
  DLE,
  DOLLAR_SIGN,
  EM,
  ENQ,
  EOT,
  EQUALS,
  ESC,
  ETB,
  ETX,
  EXCLAMATION_POINT,
  FF,
  FS,
  GRAVE_ACCENT,
  GREATER_THAN,
  GS,
  HYPHEN,
  LESS_THAN,
  NAK,
  NUL,
  NUMBER_SIGN,
  OPENING_BRACE,
  OPENING_BRACKET,
  OPENING_PARENTHESIS,
  OVERLINE,
  PERCENT,
  PERIOD,
  PLUS,
  QUESTION_MARK,
  REVERSE_SLANT,
  RS,
  SEMICOLON,
  SI,
  SLANT,
  SO,
  SOH,
  STX,
  SUB,
  SYN,
  UNDERLINE,
  US,
  VERTICAL_LINE,
  VT,
} from '#project/symbol';

export class Grammar {
  readonly #abnf = new ABNF.Grammar();

  ack(): Production<ACK> {
    return ACK.production();
  }

  alpha(): Production<ABNF.ALPHA> {
    return this.#abnf.alpha();
  }

  ampersand(): Production<AMPERSAND> {
    return AMPERSAND.production();
  }

  apostrophe(): Production<APOSTROPHE> {
    return APOSTROPHE.production();
  }

  asterisk(): Production<ASTERISK> {
    return ASTERISK.production();
  }

  bel(): Production<BEL> {
    return BEL.production();
  }

  bs(): Production<BS> {
    return BS.production();
  }

  can(): Production<CAN> {
    return CAN.production();
  }

  circumflex(): Production<CIRCUMFLEX> {
    return CIRCUMFLEX.production();
  }

  closingBrace(): Production<CLOSING_BRACE> {
    return CLOSING_BRACE.production();
  }

  closingBracket(): Production<CLOSING_BRACKET> {
    return CLOSING_BRACKET.production();
  }

  closingParenthesis(): Production<CLOSING_PARENTHESIS> {
    return CLOSING_PARENTHESIS.production();
  }

  colon(): Production<COLON> {
    return COLON.production();
  }

  comma(): Production<COMMA> {
    return COMMA.production();
  }

  commercialAt(): Production<COMMERCIAL_AT> {
    return COMMERCIAL_AT.production();
  }

  cr(): Production<ABNF.CR> {
    return this.#abnf.cr();
  }

  dc1(): Production<DC1> {
    return DC1.production();
  }

  dc2(): Production<DC2> {
    return DC2.production();
  }

  dc3(): Production<DC3> {
    return DC3.production();
  }

  dc4(): Production<DC4> {
    return DC4.production();
  }

  del(): Production<DEL> {
    return DEL.production();
  }

  digit(): Production<ABNF.DIGIT> {
    return this.#abnf.digit();
  }

  dle(): Production<DLE> {
    return DLE.production();
  }

  dollarSign(): Production<DOLLAR_SIGN> {
    return DOLLAR_SIGN.production();
  }

  em(): Production<EM> {
    return EM.production();
  }

  enq(): Production<ENQ> {
    return ENQ.production();
  }

  eot(): Production<EOT> {
    return EOT.production();
  }

  equals(): Production<EQUALS> {
    return EQUALS.production();
  }

  esc(): Production<ESC> {
    return ESC.production();
  }

  etb(): Production<ETB> {
    return ETB.production();
  }

  etx(): Production<ETX> {
    return ETX.production();
  }

  exclamationPoint(): Production<EXCLAMATION_POINT> {
    return EXCLAMATION_POINT.production();
  }

  ff(): Production<FF> {
    return FF.production();
  }

  fs(): Production<FS> {
    return FS.production();
  }

  graveAccent(): Production<GRAVE_ACCENT> {
    return GRAVE_ACCENT.production();
  }

  greaterThan(): Production<GREATER_THAN> {
    return GREATER_THAN.production();
  }

  gs(): Production<GS> {
    return GS.production();
  }

  ht(): Production<ABNF.HTAB> {
    return this.#abnf.htab();
  }

  hyphen(): Production<HYPHEN> {
    return HYPHEN.production();
  }

  lessThan(): Production<LESS_THAN> {
    return LESS_THAN.production();
  }

  lf(): Production<ABNF.LF> {
    return this.#abnf.lf();
  }

  nak(): Production<NAK> {
    return NAK.production();
  }

  nul(): Production<NUL> {
    return NUL.production();
  }

  numberSign(): Production<NUMBER_SIGN> {
    return NUMBER_SIGN.production();
  }

  openingBrace(): Production<OPENING_BRACE> {
    return OPENING_BRACE.production();
  }

  openingBracket(): Production<OPENING_BRACKET> {
    return OPENING_BRACKET.production();
  }

  openingParenthesis(): Production<OPENING_PARENTHESIS> {
    return OPENING_PARENTHESIS.production();
  }

  overline(): Production<OVERLINE> {
    return OVERLINE.production();
  }

  percent(): Production<PERCENT> {
    return PERCENT.production();
  }

  period(): Production<PERIOD> {
    return PERIOD.production();
  }

  plus(): Production<PLUS> {
    return PLUS.production();
  }

  questionMark(): Production<QUESTION_MARK> {
    return QUESTION_MARK.production();
  }

  quotationMarks(): Production<ABNF.DQUOTE> {
    return this.#abnf.dquote();
  }

  reverseSlant(): Production<REVERSE_SLANT> {
    return REVERSE_SLANT.production();
  }

  rs(): Production<RS> {
    return RS.production();
  }

  semicolon(): Production<SEMICOLON> {
    return SEMICOLON.production();
  }

  si(): Production<SI> {
    return SI.production();
  }

  slant(): Production<SLANT> {
    return SLANT.production();
  }

  so(): Production<SO> {
    return SO.production();
  }

  soh(): Production<SOH> {
    return SOH.production();
  }

  sp(): Production<ABNF.SP> {
    return this.#abnf.sp();
  }

  stx(): Production<STX> {
    return STX.production();
  }

  sub(): Production<SUB> {
    return SUB.production();
  }

  syn(): Production<SYN> {
    return SYN.production();
  }

  underline(): Production<UNDERLINE> {
    return UNDERLINE.production();
  }

  us(): Production<US> {
    return US.production();
  }

  verticalLine(): Production<VERTICAL_LINE> {
    return VERTICAL_LINE.production();
  }

  vt(): Production<VT> {
    return VT.production();
  }
}
