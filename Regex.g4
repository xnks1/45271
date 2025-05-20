grammar Regex;

regex
    : term '|' regex   # alternation
    | term             # single
    ;

term
    : factor+          # termFactors
    ;

factor
    : base quantifier? # factorWithQuantifier
    ;

base
    : char             # baseChar
    | group            # baseGroup
    | class            # baseClass
    ;

group
    : '(' regex ')'    # groupExpr
    ;

class
    : '[' range+ ']'   # charClass
    ;

range
    : char '-' char    # rangeInterval
    | char             # rangeSingle
    ;

quantifier
    : '*'              # quantAsterisk
    | '+'              # quantPlus
    | '?'              # quantQuestion
    ;

char : CHAR;

// Símbolos comunes de regex con nombres simbólicos
OR      : '|';
STAR    : '*';
PLUS    : '+';
QMARK   : '?';
LPAREN  : '(';
RPAREN  : ')';
LBRACK  : '[';
RBRACK  : ']';
DASH    : '-';
CHAR : [a-zA-Z0-9];
WS   : [ \t\r\n]+ -> skip;
ERROR_CHAR : . ;