import { DelimiterParser } from './DelimiterParser';
import { NumberParser } from './NumberParser';

class StringCalculator {
  private numberParser = new NumberParser();
  private delimiterParser = new DelimiterParser();

  add(input: string): number {
    if (input.trim() === '') return 0;

    const { delimiter, numbersPart } = this.delimiterParser.parse(input);
    const numbers = this.numberParser.split(numbersPart, delimiter);

    return numbers.reduce((sum, n) => sum + n, 0);
  }
}
