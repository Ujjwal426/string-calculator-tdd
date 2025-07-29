export class NumberParser {
  split(input: string, delimiter: string | RegExp): number[] {
    if (!input) return [];

    return input
      .split(delimiter)
      .map(n => parseInt(n, 10))
      .filter(n => !isNaN(n));
  }
}
