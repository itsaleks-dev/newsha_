export type FooterLink = {
  label: string;
  href?: string;
};

export type FooterSection = {
  TITLE: string;
  LINKS: readonly FooterLink[];
};

export type FooterTextType = {
  WORK: FooterSection;
  MENU: FooterSection;
  ABOUT: FooterSection;
  INFO: FooterSection;
};
