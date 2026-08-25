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

export async function fetchRawIcon(name: string) {
  const domain = process.env["S3_DOMAIN"];
  const iconPath = process.env["S3_ICON_PATH"];
  const req = await fetch(`${domain}${iconPath}/${polish(name)}.svg`);
  return req.text();
}

export function polish(str: string): string {
  return str.replaceAll(" ", "").replaceAll(".", "dot").toLowerCase();
}

export const acronymToIconNamesMap: {[index: string]: string} = {
  ak: "apachekafka", ae: "appengine", au: "auth0", aw: "aws", cr: "cloudrun",
  nj: "nodejs", ce: "computeengine", cs: "css", do: "docker", ec: "ec2",
  fb: "firebase", gi: "git", gc: "googlecloud", hb: "hibernate", ht: "html5",
  in: "insomnia", jv: "java", ph: "phaser", js: "javascript", lx: "linux", nx: "nextjs",
  no: "notion", pg: "postgresql", rd: "radixui", re: "react", rb: "ruby", s3: "s3",
  sp: "spring", sb: "springboot", ss: "springsecurity", sf: "subframe", su: "supabase",
  tw: "tailwindcss", ts: "typescript", ve: "vercel", vs: "vscode"
}