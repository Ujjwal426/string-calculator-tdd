import { DelimiterParser } from './DelimiterParser';
import { NumberParser } from './NumberParser';
import { NegativeValidator } from './NegativeValidator';

class StringCalculator {
  private numberParser = new NumberParser();
  private delimiterParser = new DelimiterParser();
  private negativeValidator = new NegativeValidator();

  add(input: string): number {
    if (input.trim() === '') return 0;

    const { delimiter, numbersPart } = this.delimiterParser.parse(input);
    const numbers = this.numberParser.split(numbersPart, delimiter);
    this.negativeValidator.validate(numbers);

    return numbers.reduce((sum, n) => sum + n, 0);
  }
}
