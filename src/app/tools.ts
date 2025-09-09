function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const empty: () => void = () => {};

export function includeStartingWith(set: string[], fragment: string): string | null {
  for (const item of set)
    if (item.includes(fragment)) return item;
  return null;
}

export function sortByCategory<E extends { category: string }>(set: E[]) {
  const compareFunction = (a: E, b: E) => {
    if (a.category === "frontend" && b.category === "backend") return -1;
    if (a.category === "frontend" && b.category === "game") return -1;
    if (a.category === "frontend" && b.category === "tool") return -1;
    if (a.category === "backend" && b.category === "frontend") return 1;
    if (a.category === "backend" && b.category === "game") return -1;
    if (a.category === "backend" && b.category === "tool") return -1;
    if (a.category === "game" && b.category === "frontend") return 1;
    if (a.category === "game" && b.category === "backend") return 1;
    if (a.category === "game" && b.category === "tool") return -1;
    if (a.category === "tool" && b.category === "frontend") return 1;
    if (a.category === "tool" && b.category === "backend") return 1;
    if (a.category === "tool" && b.category === "game") return 1;
    return 0;
  }
  set.sort(compareFunction);
}