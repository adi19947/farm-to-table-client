export const makeFirstLetterCapital = (text: string): string => {
  const term = text.toLowerCase().trim();
  return term.charAt(0).toUpperCase() + term.slice(1);
};
