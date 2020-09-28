/**
 * Форматирует число, разбивая его на разряды
 */
export function formatNumber(number: number, separator = ' ', decimalSeparator = ','): string {
  const numberParts = number.toString().split('.');
  const result = [];

  for (let i = numberParts[0].length - 3; i > -3; i -= 3) {
    result.unshift(numberParts[0].slice(i > 0 ? i : 0, i + 3));
  }

  numberParts[0] = result.join(separator);
  return numberParts.join(decimalSeparator);
}
