// Generated from c:/Users/RYZEN5/Desktop/SINTAXIS/ejemplo chat/Regex.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link RegexParser}.
 */
public interface RegexListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the {@code alternation}
	 * labeled alternative in {@link RegexParser#regex}.
	 * @param ctx the parse tree
	 */
	void enterAlternation(RegexParser.AlternationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code alternation}
	 * labeled alternative in {@link RegexParser#regex}.
	 * @param ctx the parse tree
	 */
	void exitAlternation(RegexParser.AlternationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code single}
	 * labeled alternative in {@link RegexParser#regex}.
	 * @param ctx the parse tree
	 */
	void enterSingle(RegexParser.SingleContext ctx);
	/**
	 * Exit a parse tree produced by the {@code single}
	 * labeled alternative in {@link RegexParser#regex}.
	 * @param ctx the parse tree
	 */
	void exitSingle(RegexParser.SingleContext ctx);
	/**
	 * Enter a parse tree produced by the {@code termFactors}
	 * labeled alternative in {@link RegexParser#term}.
	 * @param ctx the parse tree
	 */
	void enterTermFactors(RegexParser.TermFactorsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code termFactors}
	 * labeled alternative in {@link RegexParser#term}.
	 * @param ctx the parse tree
	 */
	void exitTermFactors(RegexParser.TermFactorsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code factorWithQuantifier}
	 * labeled alternative in {@link RegexParser#factor}.
	 * @param ctx the parse tree
	 */
	void enterFactorWithQuantifier(RegexParser.FactorWithQuantifierContext ctx);
	/**
	 * Exit a parse tree produced by the {@code factorWithQuantifier}
	 * labeled alternative in {@link RegexParser#factor}.
	 * @param ctx the parse tree
	 */
	void exitFactorWithQuantifier(RegexParser.FactorWithQuantifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code baseChar}
	 * labeled alternative in {@link RegexParser#base}.
	 * @param ctx the parse tree
	 */
	void enterBaseChar(RegexParser.BaseCharContext ctx);
	/**
	 * Exit a parse tree produced by the {@code baseChar}
	 * labeled alternative in {@link RegexParser#base}.
	 * @param ctx the parse tree
	 */
	void exitBaseChar(RegexParser.BaseCharContext ctx);
	/**
	 * Enter a parse tree produced by the {@code baseGroup}
	 * labeled alternative in {@link RegexParser#base}.
	 * @param ctx the parse tree
	 */
	void enterBaseGroup(RegexParser.BaseGroupContext ctx);
	/**
	 * Exit a parse tree produced by the {@code baseGroup}
	 * labeled alternative in {@link RegexParser#base}.
	 * @param ctx the parse tree
	 */
	void exitBaseGroup(RegexParser.BaseGroupContext ctx);
	/**
	 * Enter a parse tree produced by the {@code baseClass}
	 * labeled alternative in {@link RegexParser#base}.
	 * @param ctx the parse tree
	 */
	void enterBaseClass(RegexParser.BaseClassContext ctx);
	/**
	 * Exit a parse tree produced by the {@code baseClass}
	 * labeled alternative in {@link RegexParser#base}.
	 * @param ctx the parse tree
	 */
	void exitBaseClass(RegexParser.BaseClassContext ctx);
	/**
	 * Enter a parse tree produced by the {@code groupExpr}
	 * labeled alternative in {@link RegexParser#group}.
	 * @param ctx the parse tree
	 */
	void enterGroupExpr(RegexParser.GroupExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code groupExpr}
	 * labeled alternative in {@link RegexParser#group}.
	 * @param ctx the parse tree
	 */
	void exitGroupExpr(RegexParser.GroupExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code charClass}
	 * labeled alternative in {@link RegexParser#class}.
	 * @param ctx the parse tree
	 */
	void enterCharClass(RegexParser.CharClassContext ctx);
	/**
	 * Exit a parse tree produced by the {@code charClass}
	 * labeled alternative in {@link RegexParser#class}.
	 * @param ctx the parse tree
	 */
	void exitCharClass(RegexParser.CharClassContext ctx);
	/**
	 * Enter a parse tree produced by the {@code rangeInterval}
	 * labeled alternative in {@link RegexParser#range}.
	 * @param ctx the parse tree
	 */
	void enterRangeInterval(RegexParser.RangeIntervalContext ctx);
	/**
	 * Exit a parse tree produced by the {@code rangeInterval}
	 * labeled alternative in {@link RegexParser#range}.
	 * @param ctx the parse tree
	 */
	void exitRangeInterval(RegexParser.RangeIntervalContext ctx);
	/**
	 * Enter a parse tree produced by the {@code rangeSingle}
	 * labeled alternative in {@link RegexParser#range}.
	 * @param ctx the parse tree
	 */
	void enterRangeSingle(RegexParser.RangeSingleContext ctx);
	/**
	 * Exit a parse tree produced by the {@code rangeSingle}
	 * labeled alternative in {@link RegexParser#range}.
	 * @param ctx the parse tree
	 */
	void exitRangeSingle(RegexParser.RangeSingleContext ctx);
	/**
	 * Enter a parse tree produced by the {@code quantAsterisk}
	 * labeled alternative in {@link RegexParser#quantifier}.
	 * @param ctx the parse tree
	 */
	void enterQuantAsterisk(RegexParser.QuantAsteriskContext ctx);
	/**
	 * Exit a parse tree produced by the {@code quantAsterisk}
	 * labeled alternative in {@link RegexParser#quantifier}.
	 * @param ctx the parse tree
	 */
	void exitQuantAsterisk(RegexParser.QuantAsteriskContext ctx);
	/**
	 * Enter a parse tree produced by the {@code quantPlus}
	 * labeled alternative in {@link RegexParser#quantifier}.
	 * @param ctx the parse tree
	 */
	void enterQuantPlus(RegexParser.QuantPlusContext ctx);
	/**
	 * Exit a parse tree produced by the {@code quantPlus}
	 * labeled alternative in {@link RegexParser#quantifier}.
	 * @param ctx the parse tree
	 */
	void exitQuantPlus(RegexParser.QuantPlusContext ctx);
	/**
	 * Enter a parse tree produced by the {@code quantQuestion}
	 * labeled alternative in {@link RegexParser#quantifier}.
	 * @param ctx the parse tree
	 */
	void enterQuantQuestion(RegexParser.QuantQuestionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code quantQuestion}
	 * labeled alternative in {@link RegexParser#quantifier}.
	 * @param ctx the parse tree
	 */
	void exitQuantQuestion(RegexParser.QuantQuestionContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegexParser#char}.
	 * @param ctx the parse tree
	 */
	void enterChar(RegexParser.CharContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegexParser#char}.
	 * @param ctx the parse tree
	 */
	void exitChar(RegexParser.CharContext ctx);
}