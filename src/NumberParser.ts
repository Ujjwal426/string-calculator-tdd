export class NumberParser {
  split(numbersPart: string, delimiter: string): number[] {
    const regex = new RegExp(delimiter);
    return numbersPart
      .split(regex)
      .filter(s => s.length > 0)
      .map(Number);
  }
}
