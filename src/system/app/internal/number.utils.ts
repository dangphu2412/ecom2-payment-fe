export function formatDecimal(number: number): string {
  return parseFloat(`${number}`).toFixed(2);
}

export function formatCurrency(number: number): string {
  return `$ ${formatDecimal(number)}`;
}

export function formatPercentage(percentage: number): string {
  return `${formatDecimal(percentage)}%`;
}
