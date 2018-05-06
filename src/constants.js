export const POST_CATEGORIES = {
  MYSTERY: "mystery",
  WEIRD: "weird",
  BAD_NEWS: "bad news",
  BELIEVE_IT: "believe it",
};

export const COLOR_MAP = {
  VIOLET: "#4200ff",
  PURPLE: "#673fb4",
  INDIGO: "#4036ff",
  BLUE: "#0098f9",
  GREEN: "#2abd68",
  ORANGE: "#ffbb2c",
  RED: "#ff3000",
  LIGHT_RED: "#f1453d",
  VERMILLION: "#f72666",
  SITE_BG: "#f7f7f9",
};

export const CATEGORY_COLOR_MAP = {
  [POST_CATEGORIES.MYSTERY]: COLOR_MAP.VIOLET,
  [POST_CATEGORIES.WEIRD]: COLOR_MAP.BLUE,
  [POST_CATEGORIES.BAD_NEWS]: COLOR_MAP.RED,
  [POST_CATEGORIES.BELIEVE_IT]: COLOR_MAP.GREEN,
};
