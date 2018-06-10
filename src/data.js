import casual from "casual-browserify";

import { POST_CATEGORIES, CATEGORY_COLOR_MAP } from "./constants";

const getCategory = () => {
  const category = casual.random_value(POST_CATEGORIES);
  return {
    category,
    categoryColor: CATEGORY_COLOR_MAP[category],
  };
};

const capitalize = string =>
  string
    .split(" ")
    .map(([first, ...rest]) => [first.toUpperCase(), ...rest].join(""))
    .join(" ");

casual.define("post", function() {
  return {
    id: casual.uuid,
    title: capitalize(casual.words(7)),
    imageSrc: "//fillmurray.com/1397/1091",
    link: "#",
    ...getCategory(),
  };
});

export const getPostArray = length =>
  Array.from({ length }).map((u, i) => casual.post);

export const getSectionData = length => ({
  sectionTitle: capitalize(casual.title),
  sectionLink: "#",
  sectionColor: casual.random_value(CATEGORY_COLOR_MAP),
  posts: getPostArray(length),
});

export const POST_LIST = getPostArray(5);

export const TAG_SECTION = {
  sectionTitle: capitalize(casual.title),
  sectionLink: "#",
  sectionColor: casual.random_value(CATEGORY_COLOR_MAP),
  posts: getPostArray(5),
};
