// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { Text, Image } from "components/primitives";
import { PostTitle, PostImage, PostLabel } from "components/modules";
import { Responsive } from "components/utils";
import { BREAKPOINTS, CONTAINER_PADDING, IMG_DIMS } from "constants/index";

import type { Category } from "components/modules";

class Post extends PureComponent<Props> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { imageSrc, title, categoryName, categoryColor, link } = this.props;
    return (
      <Responsive>
        {({ minWidth }) => {
          const isDesktop = minWidth(BREAKPOINTS.LG);
          const fontStyles = isDesktop
            ? { fontSize: 34, lineHeight: 39 }
            : { fontSize: 20, lineHeight: 24 };

          return (
            <View style={styles.postBox} accessibilityRole="link" href={link}>
              <PostImage
                contrastOverlay
                width={isDesktop ? 1397 : IMG_DIMS.MOBILE_MAIN.WIDTH}
                height={isDesktop ? 1091 : IMG_DIMS.MOBILE_MAIN.HEIGHT}
                imageSrc={imageSrc}
              />

              <View style={styles.detailsWrap}>
                <View style={styles.labelWrap}>
                  <PostLabel
                    fill
                    categoryColor={categoryColor}
                    categoryName={categoryName}
                  />
                </View>
                <View>
                  <Text aria-level="2" style={[{ color: "white" }, fontStyles]}>
                    {title}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      </Responsive>
    );
  }
}

export default Post;

const styles = StyleSheet.create({
  postBox: {
    width: "100%",
    flex: 1,
    position: "relative",
  },
  titleText: { color: "white" },
  detailsWrap: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 25,
  },
  labelWrap: {
    position: "absolute",
    top: -5,
    left: 25,
  },
  postBox: {
    width: "100%",
    flex: 1,
  },
});
