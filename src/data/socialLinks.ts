export type SocialLink = {
  title: string;
  url: string;
  handle: string;
  blurb: string;
  // wide?: makes the tile span 2 columns on the showcase grid
  wide?: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/amaan.zip",
    handle: "@amaan.zip",
    blurb: "reels & content · the main one",
    wide: true,
  },
  {
    title: "Instagram page",
    url: "https://www.instagram.com/technerdpeter",
    handle: "@technerdpeter",
    blurb: "tech & developer content",
  },
  {
    title: "Instagram page",
    url: "https://www.instagram.com/interviewpeter",
    handle: "@interviewpeter",
    blurb: "interview & career content",
  },
  {
    title: "GitHub",
    url: "https://github.com/amaan8429",
    handle: "amaan8429",
    blurb: "code & projects",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/amaan8429",
    handle: "@amaan8429",
    blurb: "builds & takes",
  },
  {
    title: "AurbitLabs",
    url: "https://www.instagram.com/aurbitlabs",
    handle: "@aurbitlabs",
    blurb: "the agency",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/amaan8429",
    handle: "amaan8429",
    blurb: "the professional one",
  },
  {
    title: "Discord",
    url: "https://discord.com/users/amaan8429",
    handle: "amaan8429",
    blurb: "chat",
  },
  {
    title: "Email",
    url: "mailto:amaanrizvi73@gmail.com",
    handle: "say hi",
    blurb: "work with me",
  },
];
