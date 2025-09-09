function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const empty: () => void = () => {};

export function includeStartingWith(set: string[], fragment: string): string | null {
  for (const item of set)
    if (item.includes(fragment)) return item;
  return null;
}