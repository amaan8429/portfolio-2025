// COLLABS dimension — companies & founders you've worked with.
// Add `logo` (path under /public) and `url` when you have them; UI falls back to the name.

export type Collab = {
  name: string;
  role?: string;
  description?: string;
  url?: string;
  logo?: string;
};

export const collabs: Collab[] = [
  {
    name: "Cluely",
    description: "Worked with the Cluely team.",
    url: "https://cluely.com",
  },
  {
    name: "Emergent",
    description: "Worked with Emergent.",
  },
  {
    name: "Upsurge Labs",
    description: "Worked with Upsurge Labs.",
  },
];
