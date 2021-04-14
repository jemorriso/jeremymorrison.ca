export const zip = (a, b) => {
  const c = a.map((el, i) => [el, b[i]]);
  return c;
};
