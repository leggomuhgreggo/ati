// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "components/primitives";
import { PostImage, PostLabel } from "components/modules";
import { Responsive } from "components/utils";
import { BREAKPOINTS, IMG_DIMS } from "constants/index";

type Props = {
  style: object,
  bottomOverlap: number,
  center: boolean,
  imageWidth: number,
  imageHeight: number,
};
class MainPost extends PureComponent<Props> {
  static defaultProps = {
    style: {},
    bottomOverlap: 0,
  };

  render() {
    const {
      fontStyles,
      containerPadding,
      bottomOverlap,
      center,
      imageSrc,
      title,
      categoryName,
      categoryColor,
      link,
      imageWidth,
      imageHeight,
    } = this.props;
    return (
      <Responsive>
        {({ minWidth }) => {
          const isDesktop = minWidth(BREAKPOINTS.LG);
          const localFontStyles = isDesktop
            ? { fontSize: 34, lineHeight: 39 }
            : { fontSize: 20, lineHeight: 24 };

          const labelWrap = center
            ? {
                left: "50%",
                transform: [
                  {
                    translateY: "-100%",
                  },
                  {
                    translateX: "-50%",
                  },
                ],
              }
            : {
                left: 0,
                transform: [
                  {
                    translateY: "-100%",
                  },
                ],
              };

          return (
            <View style={styles.postBox} accessibilityRole="link" href={link}>
              <PostImage
                contrastOverlay
                width={isDesktop ? imageWidth : IMG_DIMS.MOBILE_MAIN.WIDTH}
                height={isDesktop ? imageHeight : IMG_DIMS.MOBILE_MAIN.HEIGHT}
                imageSrc={imageSrc}
              />

              <View
                style={[
                  styles.detailsWrap,
                  {
                    bottom: bottomOverlap,
                    paddingHorizontal: containerPadding ? containerPadding : 25,
                  },
                ]}
              >
                <View style={styles.detailsInner}>
                  <View style={[styles.labelWrap, labelWrap]}>
                    <PostLabel
                      fill
                      categoryColor={categoryColor}
                      categoryName={categoryName}
                    />
                  </View>
                  <View>
                    <Text
                      aria-level="2"
                      style={[styles.titleText, localFontStyles, fontStyles]}
                    >
                      {title}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      </Responsive>
    );
  }
}

export default MainPost;

const styles = StyleSheet.create({
  postBox: {
    width: "100%",
    position: "relative",
    zIndex: 5,
  },
  titleText: {
    color: "white",
    fontWeight: "600",
  },
  detailsWrap: {
    position: "absolute",
    width: "100%",
    left: 0,
    padding: 25,
  },
  detailsInner: {
    position: "relative",
  },
  labelWrap: {
    position: "absolute",
    top: -8,
  },
});
