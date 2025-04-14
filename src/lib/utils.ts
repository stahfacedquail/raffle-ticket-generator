export const getOrdinalSuffix = (i: number) => {
  const rem = i % 100;

  if (rem === 11) return "th";
  if (rem === 12) return "th";
  if (rem === 13) return "th";
  if (rem % 10 === 1) return "st";
  if (rem % 10 === 2) return "nd";
  if (rem % 10 === 3) return "rd";
  return "th";
}