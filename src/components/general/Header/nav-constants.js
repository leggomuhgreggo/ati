import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
} from "react-icons/fa";

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
