// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import SmallPost from "./SmallPost";
import MediumPost from "./MediumPost";
import OverlayPost from "./OverlayPost";

import type { RNW$Styles } from "react-native";

import type { Category } from "components/modules";

const LAYOUT_VARIANT = {
  REDUCED: "reduced",
  MEDIUM: "medium",
  OVERLAY: "overlay",
};

const POST_VARIANT_MAP = {
  [LAYOUT_VARIANT.REDUCED]: SmallPost,
  [LAYOUT_VARIANT.OVERLAY]: OverlayPost,
  [LAYOUT_VARIANT.MEDIUM]: MediumPost,
};

type Props = {
  layoutVariant: $Values<LAYOUT_VARIANT>,
  link: string,
};

class Post extends PureComponent<Props> {
  render() {
    const { layoutVariant, link, ...rest } = this.props;

    const PostComponent = POST_VARIANT_MAP[layoutVariant];

    return (
      <View style={[styles.postBox]} accessibilityRole="link" href={link}>
        <PostComponent {...rest} />
      </View>
    );
  }
}

export default Post;

const styles = StyleSheet.create({
  postBox: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
  },
});

const Line = () => <View style={styles.postLine} />;
