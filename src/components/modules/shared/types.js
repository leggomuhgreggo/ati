import { CATEGORY_COLOR_MAP } from "constants/index";

export type {
  StyleObj,
} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export type Categories = $Keys<typeof CATEGORY_COLOR_MAP>;
export type CategoryColors = $Values<typeof CATEGORY_COLOR_MAP>;

export type Post = {
  id: string,
  title: string,
  category: Categories,
  imgSrc: string,
};

export type PostList = array<Post>;
