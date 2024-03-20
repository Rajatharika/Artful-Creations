import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class LexicalAnalyzer {

    public static void main(String[] args) {
        String input = "if (x > 5) { y = 10; } else { y = 20; }";
        List<Token> tokens = analyze(input);
        for (Token token : tokens) {
            System.out.println(token);
        }
    }

    public static List<Token> analyze(String input) {
        List<Token> tokens = new ArrayList<>();
        String[] keywords = {"if", "else", "while"};

        String regex = "\\s+|\\(|\\)|\\{|\\}|;|>|<|=|\\+|-|\\*|/|\\d+|[a-zA-Z]+";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(input);

        while (matcher.find()) {
            String lexeme = matcher.group();
            TokenType type;

            if (lexeme.matches("\\d+")) {
                type = TokenType.INTEGER_LITERAL;
            } else if (lexeme.matches("[a-zA-Z]+")) {
                if (isKeyword(lexeme, keywords)) {
                    type = TokenType.KEYWORD;
                } else {
                    type = TokenType.IDENTIFIER;
                }
            } else {
                type = TokenType.OPERATOR;
            }

            tokens.add(new Token(type, lexeme));
        }

        return tokens;
    }

    private static boolean isKeyword(String lexeme, String[] keywords) {
        for (String keyword : keywords) {
            if (keyword.equals(lexeme)) {
                return true;
            }
        }
        return false;
    }
}

class Token {
    private TokenType type;
    private String lexeme;

    public Token(TokenType type, String lexeme) {
        this.type = type;
        this.lexeme = lexeme;
    }

    public TokenType getType() {
        return type;
    }

    public String getLexeme() {
        return lexeme;
    }

    @Override
    public String toString() {
        return "Token{" +
               "type=" + type +
               ", lexeme='" + lexeme + '\'' +
               '}';
    }
}

enum TokenType {
    KEYWORD,
    IDENTIFIER,
    INTEGER_LITERAL,
    OPERATOR
}