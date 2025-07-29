export class DelimiterParser {
  parse(input: string): { delimiter: RegExp; numbersPart: string } {
    if (input.startsWith('//')) {
      const [delimiterLine, ...rest] = input.split('\n');
      const delimiter = delimiterLine.slice(2); // Remove '//'

      // Return a RegExp that splits on either custom delimiter or newline
      return {
        delimiter: new RegExp(`[${this.escape(delimiter)}\\n]`),
        numbersPart: rest.join('\n'),
      };
    }

    // Default: split by comma or newline
    return {
      delimiter: /[,\n]/,
      numbersPart: input,
    };
  }

  private escape(str: string): string {
    // Escape special regex characters like . * ? + etc.
    return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
}
