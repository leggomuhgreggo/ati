import { CATEGORY_COLOR_MAP } from "constants.js";

export type {
  StyleObj,
} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export type Categories = $Keys<typeof POST_CATEGORIES>;
export type CategoryColors = $Values<typeof POST_CATEGORIES>;

export type Post = {
  id: string,
  title: string,
  category: Categories,
  imgSrc: string,
};

export type PostList = array<Post>;
