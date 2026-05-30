export function formatYear(year: number): string {
  const abs = Math.abs(year);
  if (year < 0) {
    return `${abs} BCE`;
  }
  return `${abs} CE`;
}

export function formatYearRange(start: number, end: number): string {
  const startStr = formatYear(start);
  const endStr = formatYear(end);
  
  // If both are BCE, omit the first "BCE" for premium typography feel
  if (start < 0 && end < 0) {
    return `c. ${Math.abs(start)}–${Math.abs(end)} BCE`;
  }
  return `c. ${startStr} – ${endStr}`;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
