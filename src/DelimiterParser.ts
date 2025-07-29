export class DelimiterParser {
  parse(input: string): { delimiter: string; numbersPart: string } {
    if (input.startsWith('//')) {
      const match = input.match(/^\/\/(.+)\n(.*)$/);
      if (match) {
        const [, delimiter, numbersPart] = match;
        return { delimiter, numbersPart };
      }
    }
    return { delimiter: '[,\n]', numbersPart: input };
  }
}
