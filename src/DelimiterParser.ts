export class DelimiterParser {
  parse(input: string): { delimiter: string; numbersPart: string } {
    return { delimiter: '[,\n]', numbersPart: input };
  }
}
