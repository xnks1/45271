// Generated from Regex.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,12,54,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,
0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,
9,1,10,4,10,47,8,10,11,10,12,10,48,1,10,1,10,1,11,1,11,0,0,12,1,1,3,2,5,
3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,1,0,2,3,0,48,57,65,90,97,
122,3,0,9,10,13,13,32,32,54,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,
0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,
1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,1,0,0,0,3,27,1,0,0,0,5,29,1,0,0,0,
7,31,1,0,0,0,9,33,1,0,0,0,11,35,1,0,0,0,13,37,1,0,0,0,15,39,1,0,0,0,17,41,
1,0,0,0,19,43,1,0,0,0,21,46,1,0,0,0,23,52,1,0,0,0,25,26,5,124,0,0,26,2,1,
0,0,0,27,28,5,42,0,0,28,4,1,0,0,0,29,30,5,43,0,0,30,6,1,0,0,0,31,32,5,63,
0,0,32,8,1,0,0,0,33,34,5,40,0,0,34,10,1,0,0,0,35,36,5,41,0,0,36,12,1,0,0,
0,37,38,5,91,0,0,38,14,1,0,0,0,39,40,5,93,0,0,40,16,1,0,0,0,41,42,5,45,0,
0,42,18,1,0,0,0,43,44,7,0,0,0,44,20,1,0,0,0,45,47,7,1,0,0,46,45,1,0,0,0,
47,48,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,51,6,10,0,0,51,
22,1,0,0,0,52,53,9,0,0,0,53,24,1,0,0,0,2,0,48,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class RegexLexer extends antlr4.Lexer {

    static grammarFileName = "Regex.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'|'", "'*'", "'+'", "'?'", "'('", "')'", 
                         "'['", "']'", "'-'" ];
	static symbolicNames = [ null, "OR", "STAR", "PLUS", "QMARK", "LPAREN", 
                          "RPAREN", "LBRACK", "RBRACK", "DASH", "CHAR", 
                          "WS", "ERROR_CHAR" ];
	static ruleNames = [ "OR", "STAR", "PLUS", "QMARK", "LPAREN", "RPAREN", 
                      "LBRACK", "RBRACK", "DASH", "CHAR", "WS", "ERROR_CHAR" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

RegexLexer.EOF = antlr4.Token.EOF;
RegexLexer.OR = 1;
RegexLexer.STAR = 2;
RegexLexer.PLUS = 3;
RegexLexer.QMARK = 4;
RegexLexer.LPAREN = 5;
RegexLexer.RPAREN = 6;
RegexLexer.LBRACK = 7;
RegexLexer.RBRACK = 8;
RegexLexer.DASH = 9;
RegexLexer.CHAR = 10;
RegexLexer.WS = 11;
RegexLexer.ERROR_CHAR = 12;



