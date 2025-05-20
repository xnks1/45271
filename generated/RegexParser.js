// Generated from Regex.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import RegexListener from './RegexListener.js';
import RegexVisitor from './RegexVisitor.js';

const serializedATN = [4,1,12,66,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,1,0,3,0,24,8,0,1,1,4,1,27,
8,1,11,1,12,1,28,1,2,1,2,3,2,33,8,2,1,3,1,3,1,3,3,3,38,8,3,1,4,1,4,1,4,1,
4,1,5,1,5,4,5,46,8,5,11,5,12,5,47,1,5,1,5,1,6,1,6,1,6,1,6,1,6,3,6,57,8,6,
1,7,1,7,1,7,3,7,62,8,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,0,65,0,
23,1,0,0,0,2,26,1,0,0,0,4,30,1,0,0,0,6,37,1,0,0,0,8,39,1,0,0,0,10,43,1,0,
0,0,12,56,1,0,0,0,14,61,1,0,0,0,16,63,1,0,0,0,18,19,3,2,1,0,19,20,5,1,0,
0,20,21,3,0,0,0,21,24,1,0,0,0,22,24,3,2,1,0,23,18,1,0,0,0,23,22,1,0,0,0,
24,1,1,0,0,0,25,27,3,4,2,0,26,25,1,0,0,0,27,28,1,0,0,0,28,26,1,0,0,0,28,
29,1,0,0,0,29,3,1,0,0,0,30,32,3,6,3,0,31,33,3,14,7,0,32,31,1,0,0,0,32,33,
1,0,0,0,33,5,1,0,0,0,34,38,3,16,8,0,35,38,3,8,4,0,36,38,3,10,5,0,37,34,1,
0,0,0,37,35,1,0,0,0,37,36,1,0,0,0,38,7,1,0,0,0,39,40,5,5,0,0,40,41,3,0,0,
0,41,42,5,6,0,0,42,9,1,0,0,0,43,45,5,7,0,0,44,46,3,12,6,0,45,44,1,0,0,0,
46,47,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,50,5,8,0,0,50,
11,1,0,0,0,51,52,3,16,8,0,52,53,5,9,0,0,53,54,3,16,8,0,54,57,1,0,0,0,55,
57,3,16,8,0,56,51,1,0,0,0,56,55,1,0,0,0,57,13,1,0,0,0,58,62,5,2,0,0,59,62,
5,3,0,0,60,62,5,4,0,0,61,58,1,0,0,0,61,59,1,0,0,0,61,60,1,0,0,0,62,15,1,
0,0,0,63,64,5,10,0,0,64,17,1,0,0,0,7,23,28,32,37,47,56,61];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RegexParser extends antlr4.Parser {

    static grammarFileName = "Regex.g4";
    static literalNames = [ null, "'|'", "'*'", "'+'", "'?'", "'('", "')'", 
                            "'['", "']'", "'-'" ];
    static symbolicNames = [ null, "OR", "STAR", "PLUS", "QMARK", "LPAREN", 
                             "RPAREN", "LBRACK", "RBRACK", "DASH", "CHAR", 
                             "WS", "ERROR_CHAR" ];
    static ruleNames = [ "regex", "term", "factor", "base", "group", "class", 
                         "range", "quantifier", "char" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RegexParser.ruleNames;
        this.literalNames = RegexParser.literalNames;
        this.symbolicNames = RegexParser.symbolicNames;
    }



	regex() {
	    let localctx = new RegexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RegexParser.RULE_regex);
	    try {
	        this.state = 23;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AlternationContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 18;
	            this.term();
	            this.state = 19;
	            this.match(RegexParser.OR);
	            this.state = 20;
	            this.regex();
	            break;

	        case 2:
	            localctx = new SingleContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 22;
	            this.term();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RegexParser.RULE_term);
	    var _la = 0;
	    try {
	        localctx = new TermFactorsContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 25;
	            this.factor();
	            this.state = 28; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1184) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RegexParser.RULE_factor);
	    var _la = 0;
	    try {
	        localctx = new FactorWithQuantifierContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.base();
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0)) {
	            this.state = 31;
	            this.quantifier();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	base() {
	    let localctx = new BaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RegexParser.RULE_base);
	    try {
	        this.state = 37;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            localctx = new BaseCharContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.char_();
	            break;
	        case 5:
	            localctx = new BaseGroupContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.group();
	            break;
	        case 7:
	            localctx = new BaseClassContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.class_();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RegexParser.RULE_group);
	    try {
	        localctx = new GroupExprContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(RegexParser.LPAREN);
	        this.state = 40;
	        this.regex();
	        this.state = 41;
	        this.match(RegexParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	class_() {
	    let localctx = new ClassContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RegexParser.RULE_class);
	    var _la = 0;
	    try {
	        localctx = new CharClassContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(RegexParser.LBRACK);
	        this.state = 45; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 44;
	            this.range();
	            this.state = 47; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===10);
	        this.state = 49;
	        this.match(RegexParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RegexParser.RULE_range);
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RangeIntervalContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.char_();
	            this.state = 52;
	            this.match(RegexParser.DASH);
	            this.state = 53;
	            this.char_();
	            break;

	        case 2:
	            localctx = new RangeSingleContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.char_();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quantifier() {
	    let localctx = new QuantifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, RegexParser.RULE_quantifier);
	    try {
	        this.state = 61;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            localctx = new QuantAsteriskContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.match(RegexParser.STAR);
	            break;
	        case 3:
	            localctx = new QuantPlusContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.match(RegexParser.PLUS);
	            break;
	        case 4:
	            localctx = new QuantQuestionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
	            this.match(RegexParser.QMARK);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	char_() {
	    let localctx = new CharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RegexParser.RULE_char);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(RegexParser.CHAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

RegexParser.EOF = antlr4.Token.EOF;
RegexParser.OR = 1;
RegexParser.STAR = 2;
RegexParser.PLUS = 3;
RegexParser.QMARK = 4;
RegexParser.LPAREN = 5;
RegexParser.RPAREN = 6;
RegexParser.LBRACK = 7;
RegexParser.RBRACK = 8;
RegexParser.DASH = 9;
RegexParser.CHAR = 10;
RegexParser.WS = 11;
RegexParser.ERROR_CHAR = 12;

RegexParser.RULE_regex = 0;
RegexParser.RULE_term = 1;
RegexParser.RULE_factor = 2;
RegexParser.RULE_base = 3;
RegexParser.RULE_group = 4;
RegexParser.RULE_class = 5;
RegexParser.RULE_range = 6;
RegexParser.RULE_quantifier = 7;
RegexParser.RULE_char = 8;

class RegexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_regex;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SingleContext extends RegexContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterSingle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitSingle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitSingle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.SingleContext = SingleContext;

class AlternationContext extends RegexContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	OR() {
	    return this.getToken(RegexParser.OR, 0);
	};

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterAlternation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitAlternation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitAlternation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.AlternationContext = AlternationContext;

class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_term;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TermFactorsContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterTermFactors(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitTermFactors(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitTermFactors(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.TermFactorsContext = TermFactorsContext;

class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_factor;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class FactorWithQuantifierContext extends FactorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	base() {
	    return this.getTypedRuleContext(BaseContext,0);
	};

	quantifier() {
	    return this.getTypedRuleContext(QuantifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterFactorWithQuantifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitFactorWithQuantifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitFactorWithQuantifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.FactorWithQuantifierContext = FactorWithQuantifierContext;

class BaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_base;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BaseGroupContext extends BaseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterBaseGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitBaseGroup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitBaseGroup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.BaseGroupContext = BaseGroupContext;

class BaseClassContext extends BaseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	class_() {
	    return this.getTypedRuleContext(ClassContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterBaseClass(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitBaseClass(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitBaseClass(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.BaseClassContext = BaseClassContext;

class BaseCharContext extends BaseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	char_() {
	    return this.getTypedRuleContext(CharContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterBaseChar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitBaseChar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitBaseChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.BaseCharContext = BaseCharContext;

class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_group;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class GroupExprContext extends GroupContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(RegexParser.LPAREN, 0);
	};

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	RPAREN() {
	    return this.getToken(RegexParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterGroupExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitGroupExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitGroupExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.GroupExprContext = GroupExprContext;

class ClassContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_class;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CharClassContext extends ClassContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LBRACK() {
	    return this.getToken(RegexParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(RegexParser.RBRACK, 0);
	};

	range = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RangeContext);
	    } else {
	        return this.getTypedRuleContext(RangeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterCharClass(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitCharClass(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitCharClass(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.CharClassContext = CharClassContext;

class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_range;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class RangeIntervalContext extends RangeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	char_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CharContext);
	    } else {
	        return this.getTypedRuleContext(CharContext,i);
	    }
	};

	DASH() {
	    return this.getToken(RegexParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterRangeInterval(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitRangeInterval(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitRangeInterval(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.RangeIntervalContext = RangeIntervalContext;

class RangeSingleContext extends RangeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	char_() {
	    return this.getTypedRuleContext(CharContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterRangeSingle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitRangeSingle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitRangeSingle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.RangeSingleContext = RangeSingleContext;

class QuantifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_quantifier;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class QuantQuestionContext extends QuantifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	QMARK() {
	    return this.getToken(RegexParser.QMARK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterQuantQuestion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitQuantQuestion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitQuantQuestion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.QuantQuestionContext = QuantQuestionContext;

class QuantPlusContext extends QuantifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PLUS() {
	    return this.getToken(RegexParser.PLUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterQuantPlus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitQuantPlus(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitQuantPlus(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.QuantPlusContext = QuantPlusContext;

class QuantAsteriskContext extends QuantifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STAR() {
	    return this.getToken(RegexParser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterQuantAsterisk(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitQuantAsterisk(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitQuantAsterisk(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.QuantAsteriskContext = QuantAsteriskContext;

class CharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_char;
    }

	CHAR() {
	    return this.getToken(RegexParser.CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterChar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitChar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




RegexParser.RegexContext = RegexContext; 
RegexParser.TermContext = TermContext; 
RegexParser.FactorContext = FactorContext; 
RegexParser.BaseContext = BaseContext; 
RegexParser.GroupContext = GroupContext; 
RegexParser.ClassContext = ClassContext; 
RegexParser.RangeContext = RangeContext; 
RegexParser.QuantifierContext = QuantifierContext; 
RegexParser.CharContext = CharContext; 
