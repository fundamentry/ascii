import { dquote, htab } from '@fundamentry/abnf';
import { Rule } from '@fundamentry/grammar';

export { alpha, cr, digit, lf, sp } from '@fundamentry/abnf';

export const ack = new Rule('ACK', codec => codec.character(0x06));

export const ampersand = new Rule('AMPERSAND', codec => codec.character('&'));

export const apostrophe = new Rule('APOSTROPHE', codec => codec.character("'"));

export const asterisk = new Rule('ASTERISK', codec => codec.character('*'));

export const bel = new Rule('BEL', codec => codec.character(0x07));

export const bs = new Rule('BS', codec => codec.character(0x08));

export const can = new Rule('CAN', codec => codec.character(0x18));

export const circumflex = new Rule('CIRCUMFLEX', codec => codec.character('^'));

export const closingBrace = new Rule('CLOSING-BRACE', codec =>
  codec.character('}')
);

export const closingBracket = new Rule('CLOSING-BRACKET', codec =>
  codec.character(']')
);

export const closingParenthesis = new Rule('CLOSING-PARENTHESIS', codec =>
  codec.character(')')
);

export const colon = new Rule('COLON', codec => codec.character(':'));

export const comma = new Rule('COMMA', codec => codec.character(','));

export const commercialAt = new Rule('COMMERCIAL-AT', codec =>
  codec.character('@')
);

export const dc1 = new Rule('DC1', codec => codec.character(0x11));

export const dc2 = new Rule('DC2', codec => codec.character(0x12));

export const dc3 = new Rule('DC3', codec => codec.character(0x13));

export const dc4 = new Rule('DC4', codec => codec.character(0x14));

export const del = new Rule('DEL', codec => codec.character(0x7f));

export const dle = new Rule('DLE', codec => codec.character(0x10));

export const dollarSign = new Rule('DOLLAR-SIGN', codec =>
  codec.character('$')
);

export const em = new Rule('EM', codec => codec.character(0x19));

export const enq = new Rule('ENQ', codec => codec.character(0x05));

export const eot = new Rule('EOT', codec => codec.character(0x04));

export const equals = new Rule('EQUALS', codec => codec.character('='));

export const esc = new Rule('ESC', codec => codec.character(0x1b));

export const etb = new Rule('ETB', codec => codec.character(0x17));

export const etx = new Rule('ETX', codec => codec.character(0x03));

export const exclamationPoint = new Rule('EXCLAMATION-POINT', codec =>
  codec.character('!')
);

export const ff = new Rule('FF', codec => codec.character(0x0c));

export const fs = new Rule('FS', codec => codec.character(0x1c));

export const graveAccent = new Rule('GRAVE-ACCENT', codec =>
  codec.character('`')
);

export const greaterThan = new Rule('GREATER-THAN', codec =>
  codec.character('>')
);

export const gs = new Rule('GS', codec => codec.character(0x1d));

export const ht = new Rule('HT', () => htab);

export const hyphen = new Rule('HYPHEN', codec => codec.character('-'));

export const lessThan = new Rule('LESS-THAN', codec => codec.character('<'));

export const nak = new Rule('NAK', codec => codec.character(0x15));

export const nul = new Rule('NUL', codec => codec.character(0x00));

export const numberSign = new Rule('NUMBER-SIGN', codec =>
  codec.character('#')
);

export const openingBrace = new Rule('OPENING-BRACE', codec =>
  codec.character('{')
);

export const openingBracket = new Rule('OPENING-BRACKET', codec =>
  codec.character('[')
);

export const openingParenthesis = new Rule('OPENING-PARENTHESIS', codec =>
  codec.character('(')
);

export const overline = new Rule('OVERLINE', codec => codec.character('~'));

export const percent = new Rule('PERCENT', codec => codec.character('%'));

export const period = new Rule('PERIOD', codec => codec.character('.'));

export const plus = new Rule('PLUS', codec => codec.character('+'));

export const questionMark = new Rule('QUESTION-MARK', codec =>
  codec.character('?')
);

export const quotationMarks = new Rule('QUOTATION-MARKS', () => dquote);

export const reverseSlant = new Rule('REVERSE-SLANT', codec =>
  codec.character('\\')
);

export const rs = new Rule('RS', codec => codec.character(0x1e));

export const semicolon = new Rule('SEMICOLON', codec => codec.character(';'));

export const si = new Rule('SI', codec => codec.character(0x0f));

export const slant = new Rule('SLANT', codec => codec.character('/'));

export const so = new Rule('SO', codec => codec.character(0x0e));

export const soh = new Rule('SOH', codec => codec.character(0x01));

export const stx = new Rule('STX', codec => codec.character(0x02));

export const sub = new Rule('SUB', codec => codec.character(0x1a));

export const syn = new Rule('SYN', codec => codec.character(0x16));

export const underline = new Rule('UNDERLINE', codec => codec.character('_'));

export const us = new Rule('US', codec => codec.character(0x1f));

export const verticalLine = new Rule('VERTICAL-LINE', codec =>
  codec.character('|')
);

export const vt = new Rule('VT', codec => codec.character(0x0b));
