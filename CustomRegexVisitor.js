import RegexVisitor from "./generated/RegexVisitor.js";
import RegexLexer from "./generated/RegexLexer.js";

export class CustomRegexVisitor extends RegexVisitor {

  visitAlternation(ctx) {
    return {
      type: "alternation",
      left: this.visit(ctx.term()),
      right: this.visit(ctx.regex())
    };
  }

  visitSingle(ctx) {
    return this.visit(ctx.term());
  }

  visitTermFactors(ctx) {
    return {
      type: "concatenation",
      factors: ctx.factor().map(f => this.visit(f))
    };
  }

  visitFactorWithQuantifier(ctx) {
    return {
      type: "factor",
      base: this.visit(ctx.base()),
      quantifier: ctx.quantifier() ? this.visit(ctx.quantifier()) : null
    };
  }

  visitBaseChar(ctx) {
    // Usar getToken para terminales
    const charToken = ctx.getToken(RegexLexer.CHAR, 0);
    return {
      type: "char",
      value: charToken ? charToken.getText() : null
    };
  }

  visitBaseGroup(ctx) {
    // ctx.group() devuelve contexto del grupo
    return {
      type: "group",
      regex: this.visit(ctx.group().regex())
    };
  }

  visitBaseClass(ctx) {
    return {
      type: "charClass",
      ranges: ctx.class().range().map(r => this.visit(r))
    };
  }

  visitRangeInterval(ctx) {
    return {
      type: "range",
      start: { type: "char", value: ctx.getToken(RegexLexer.CHAR, 0).getText() },
      end: { type: "char", value: ctx.getToken(RegexLexer.CHAR, 1).getText() }
    };
  }

  visitRangeSingle(ctx) {
    return {
      type: "char",
      value: ctx.getToken(RegexLexer.CHAR, 0).getText()
    };
  }

  visitQuantAsterisk(ctx) {
    return "*";
  }

  visitQuantPlus(ctx) {
    return "+";
  }

  visitQuantQuestion(ctx) {
    return "?";
  }

}
