export * from "./section-constants.js";

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
  LIGHT_BLUE: "#0098f9",
  GREEN: "#2abd68",
  ORANGE: "#ffbb2c",
  RED: "#ff3000",
  LIGHT_RED: "#f1453d",
  VERMILION: "#f72666",
  SITE_BG: "#f7f7f9",
  BLUE: "#0255f9",
  TEXT_COLOR: "#242424",
};

export const CATEGORY_COLOR_MAP = {
  [POST_CATEGORIES.MYSTERY]: COLOR_MAP.VIOLET,
  [POST_CATEGORIES.WEIRD]: COLOR_MAP.LIGHT_BLUE,
  [POST_CATEGORIES.BAD_NEWS]: COLOR_MAP.RED,
  [POST_CATEGORIES.BELIEVE_IT]: COLOR_MAP.GREEN,
};

export const BREAKPOINTS = {
  XS: 0,
  SM: 576,
  MD: 768,
  LG: 1020,
  XL: 1200,
};

export const SECTION_SPACING = {
  LG: 70,
  SM: 30,
};

export const THEME_SPACING = {
  MOBILE_CONTAINER_PADDING: 15,
  MOBILE_OVERLAY_IMG_DIMS: {
    width: 375,
    height: 250,
  },
  SECTION_SPACING: {
    LG: 70,
    SM: 30,
  },
};
