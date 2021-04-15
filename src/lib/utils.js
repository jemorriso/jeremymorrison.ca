export const zip = (a, b) => {
  const c = a.map((el, i) => [el, b[i]]);
  return c;
};

const rankCompare = (a, b) => {
  if (!(a.rank === undefined) && !(b.rank === undefined)) {
    return a.rank - b.rank;
  }
  if (!(a.rank === undefined)) {
    return -1;
  }
  if (!(b.rank === undefined)) {
    return 1;
  }
  return 0;
};

export const sortRankDate = (arr) => {
  return arr.sort(
    ({ frontMatter: a }, { frontMatter: b }) =>
      rankCompare(a, b) || b.date.localeCompare(a.date)
    // a.rank - b.rank || b.date.localeCompare(a.date)
  );
};
