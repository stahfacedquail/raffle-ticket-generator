export const getOrdinalSuffix = (i: number) => {
  switch(i) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}