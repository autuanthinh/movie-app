export async function fetchYears(): Promise<string[]> {
  const currentYear = new Date().getFullYear();
  const rangeYear = 40;
  const years: string[] = [];
  for (let i = 0; i <= rangeYear; i++) {
    years.push('' + (currentYear - i));
  }
  return years;
}

export async function fetchMovieType(): Promise<string[]> {
  return ['movie', 'series'];
}
