// Helper: Convert {2: 3, 1: 2, 0: -5} to "3x^2 + 2x - 5"
export const formatPolynomial = (poly) => {
  return Object.keys(poly)
    .filter(exp => poly[exp] !== 0)
    .sort((a, b) => b - a)
    .map(exp => {
      const coeff = poly[exp];
      const sign = coeff > 0 ? '+' : '-';
      const absCoeff = Math.abs(coeff);
      const xPart = exp == 0 ? '' : `x${exp == 1 ? '' : '^' + exp}`;
      const coeffPart = absCoeff === 1 && exp != 0 ? '' : absCoeff;
      return `${sign} ${coeffPart}${xPart}`;
    })
    .join(' ')
    .replace(/^\+ /, '');
};