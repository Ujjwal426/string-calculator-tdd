import { StringCalculator } from '../src/StringCalculator';

describe('StringCalculator', () => {
  let calc: StringCalculator; // ✅ Explicitly type the variable

  beforeEach(() => {
    calc = new StringCalculator();
  });

  test('returns 0 for an empty string', () => {
    expect(calc.add('')).toBe(0);
  });

  test('returns number itself for a single number', () => {
    expect(calc.add('4')).toBe(4);
  });

  test('returns sum of two comma-separated numbers', () => {
    expect(calc.add('1,2')).toBe(3);
  });

  test('returns sum of multiple comma-separated numbers', () => {
    expect(calc.add('1,2,3')).toBe(6);
  });

  test('supports new line as a separator', () => {
    expect(calc.add('1\n2,3')).toBe(6);
  });

  test('supports default newline delimiters only', () => {
    expect(calc.add('1\n2\n3')).toBe(6);
  });

  test('supports custom delimiter ";"', () => {
    expect(calc.add('//;\n1;2')).toBe(3);
  });

  test('supports custom delimiter "-"', () => {
    expect(calc.add('//-\n1-2-3')).toBe(6);
  });

  test('returns 0 when input is just the delimiter declaration', () => {
    expect(calc.add('//;\n')).toBe(0);
  });

  test('throws error on a single negative number', () => {
    expect(() => calc.add('1,-2')).toThrow('negative numbers not allowed -2');
  });

  test('throws error on multiple negative numbers', () => {
    expect(() => calc.add('1,-2,-3')).toThrow('negative numbers not allowed -2,-3');
  });

  test('supports custom delimiter and ignores new lines in input', () => {
    expect(calc.add('//;\n1;2\n3')).toBe(6);
  });
});
