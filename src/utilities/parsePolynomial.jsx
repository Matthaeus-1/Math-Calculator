// Helper: Parse string like "3x^2 + 2x - 5" to {2: 3, 1: 2, 0: -5}
export const parsePolynomial = (polyStr) => {
  const terms = polyStr.replace(/\s+/g, '').replace(/-/g, '+-').split('+');
  const poly = {};
  terms.forEach(term => {
    if (!term) return;
    let coeff, exp;
    if (term.includes('x')) {
      const parts = term.split('x');
      coeff = parts[0] === '' ? 1 : parts[0] === '-' ? -1 : parseFloat(parts[0]);
      exp = parts[1] === '' ? 1 : parseFloat(parts[1].replace('^', ''));
    } else {
      coeff = parseFloat(term);
      exp = 0;
    }
    poly[exp] = (poly[exp] || 0) + coeff;
  });
  return poly;
};