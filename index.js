import antlr4, { CharStreams, CommonTokenStream, Token } from "antlr4";
import RegexLexer from "./generated/RegexLexer.js";
import RegexParser from "./generated/RegexParser.js";
import fs from "fs";
import readline from "readline";

// Clase para manejo de errores sintácticos
class ErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    const tokenText = offendingSymbol?.text ?? "<carácter desconocido>";
    throw new Error(`Error de sintaxis: token no reconocido '${tokenText}' en línea ${line}, columna ${column}`);
  }
}

// Leer desde archivo o consola si no existe input.txt
async function leerEntrada() {
  try {
    const input = fs.readFileSync("input.txt", "utf8").trim();
    console.log("Archivo 'input.txt' leído correctamente.");
    return input;
  } catch {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve => {
      rl.question("Ingrese una cadena: ", respuesta => {
        rl.close();
        resolve(respuesta.trim());
      });
    });
  }
}

async function main() {
  const input = await leerEntrada();
  const inputStream = CharStreams.fromString(input);
  const lexer = new RegexLexer(inputStream);

  lexer.removeErrorListeners();
  lexer.addErrorListener(new ErrorListener());

  const symbolicNames = RegexLexer.symbolicNames || [];
  const tokens = [];
  const erroresLexicos = [];

  let token = lexer.nextToken();
  while (token.type !== Token.EOF) {
    const typeName = symbolicNames[token.type] || `TOKEN_${token.type}`;

    if (typeName === "ERROR_CHAR") {
      erroresLexicos.push({
        text: token.text,
        line: token.line,
        column: token.column
      });
    } else {
      tokens.push({ text: token.text, type: typeName });
    }

    token = lexer.nextToken();
  }

  // Mostrar tabla de tokens
  console.log("\nLEXEMA\t\tTOKEN");
  console.log("-------------------------");
  tokens.forEach(t => {
    const text = t.text.replace(/\n/g, "\\n");
    console.log(`${text}\t\t${t.type}`);
  });

  // Reportar errores léxicos
  if (erroresLexicos.length > 0) {
    erroresLexicos.forEach(e => {
      console.log(`Error léxico: token no reconocido '${e.text}' en línea ${e.line}, columna ${e.column}`);
    });
    console.log("Error léxico detectado, abortando análisis.");
    console.log("Entrada incorrecta.");
    return;
  }

  // Sintaxis
  const lexerAgain = new RegexLexer(CharStreams.fromString(input));
  const tokenStream = new CommonTokenStream(lexerAgain);
  const parser = new RegexParser(tokenStream);

  parser.removeErrorListeners();
  parser.addErrorListener(new ErrorListener());
  parser.buildParseTrees = true;

  try {
    const tree = parser.regex();
    console.log("\nEntrada válida.");
    console.log("Árbol de derivación:", tree.toStringTree(parser.ruleNames));
  } catch (e) {
    console.log(e.message);
    console.log("Entrada incorrecta.");
  }
}

main();
