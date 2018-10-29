import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
} from "react-icons/fa";

export const HOME_LINK = {
  text: "ATI",
  href: "/",
};

export const PBH_NETWORK_LINKS = [
  {
    text: "About",
    href: "/about-all-thats-interesting",
  },
  {
    text: "Advertise",
    href: "https://about.pbh-network.com/",
  },
  {
    text: "Jobs",
    href: "/jobs",
  },
  {
    text: "Privacy Policy",
    href: "/privacy-policy",
  },
];

export const BUG_REPORT_STRING = "Report a Bad Ad";

export const SOCIAL_TYPES = {
  FACEBOOK: "facebook",
  TWITTER: "twitter",
  PINTEREST: "pinterest",
  NEWSLETTER: "newsletter",
};

export const TAG_LINKS = [
  {
    href: "/tag/history/",
    type: "history",
    text: "History",
  },
  {
    href: "/tag/science/",
    type: "science",
    text: "Science",
  },
  {
    href: "/tag/news/",
    type: "news",
    text: "News",
  },
];

export const SOCIAL_LINKS_REDUCED = [
  {
    type: SOCIAL_TYPES.FACEBOOK,
    href: "https://www.facebook.com/allthatsinteresting",
    text: "Facebook",
    iconComponent: FaFacebookF,
  },
  {
    type: SOCIAL_TYPES.TWITTER,
    href: "https://twitter.com/ATInteresting",
    text: "Twitter",
    iconComponent: FaTwitter,
  },
];

export const SOCIAL_LINKS = [
  {
    type: SOCIAL_TYPES.FACEBOOK,
    href: "https://www.facebook.com/allthatsinteresting",
    text: "Facebook",
    iconComponent: FaFacebookF,
  },
  {
    type: SOCIAL_TYPES.TWITTER,
    href: "https://twitter.com/ATInteresting",
    text: "Twitter",
    iconComponent: FaTwitter,
  },
  {
    type: SOCIAL_TYPES.PINTEREST,
    href: "https://www.pinterest.com/allthatisintere/",
    text: "Pinterest",
    iconComponent: FaPinterest,
  },
  {
    type: SOCIAL_TYPES.NEWSLETTER,
    href: "http://interestin.gg/AN2pn3",
    text: "Newsletter",
    iconComponent: FaEnvelope,
  },
];
