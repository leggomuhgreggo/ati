// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "components/primitives";
import { PostImage, PostLabel } from "components/modules";

import type { RNW$Styles } from "react-native";

type Props = {
  style: RNW$Styles,
  bottomOverlap: number,
  center: boolean,
  imageSrc: string,
  imageWidth: number,
  imageHeight: number,
  isDesktop: boolean,
  fontStyles: any,
  containerPadding: string,
  title: string,
  categoryName: string,
  categoryColor: string,
  numberOfLines: number,
  link: string,
};
class OverlayPost extends PureComponent<Props> {
  static defaultProps = {
    center: false,
    isDesktop: false,
    bottomOverlap: 0,
  };

  render() {
    const {
      numberOfLines,
      fontStyles,
      containerPadding,
      title,
      categoryName,
      categoryColor,
      bottomOverlap,
      imageSrc,
      imageWidth,
      imageHeight,
      isDesktop,
      link,
      center,
    } = this.props;

    const localFontStyles = isDesktop
      ? { fontSize: 34, lineHeight: 39 }
      : { fontSize: 20, lineHeight: 24 };

    const labelWrapPosition = getLabelWrapPositionStyles(center);
    const linkProps = link ? { accessibilityRole: "link", href: link } : {};

    return (
      <View {...linkProps}>
        <PostImage
          contrastOverlay
          width={imageWidth}
          height={imageHeight}
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
            <View style={[styles.labelWrap, labelWrapPosition]}>
              <PostLabel
                fill
                categoryColor={categoryColor}
                categoryName={categoryName}
              />
            </View>
            <View>
              <Text
                numberOfLines={numberOfLines}
                aria-level="2"
                style={[
                  styles.titleText,
                  localFontStyles,
                  fontStyles,
                  center && { textAlign: "center" },
                ]}
              >
                {title}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default OverlayPost;

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

const getLabelWrapPositionStyles = (center: boolean) =>
  center
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
