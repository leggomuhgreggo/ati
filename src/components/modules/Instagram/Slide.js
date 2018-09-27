// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Image } from "components/primitives";

const SLIDE_SIZE = 306;
const TEXTBOX_PADDING = {
  VERTICAL: 15,
  HORIZONTAL: 20,
};
const TEXTBOX_HEIGHT = 110;

const FONT = {
  MOBILE: {
    SIZE: 18,
    LINE_HEIGHT: 20,
  },
  DESKTOP: {
    SIZE: 20,
    LINE_HEIGHT: 26,
  },
};

type Props = {
  imageSrc: string,
  title: string,
  link: string,
  isDesktop: boolean,
};

class InstagramSlide extends PureComponent<Props> {
  render() {
    const { imageSrc, title, link, isDesktop } = this.props;

    const fontStyles = isDesktop
      ? {
          fontSize: FONT.DESKTOP.SIZE,
          lineHeight: FONT.DESKTOP.LINE_HEIGHT,
        }
      : {
          fontSize: FONT.MOBILE.SIZE,
          lineHeight: FONT.MOBILE.LINE_HEIGHT,
        };
    return (
      <View style={[styles.wrap]} accessibilityRole="link" href={link}>
        <Image
          style={styles.image}
          source={{
            uri: imageSrc,
          }}
        />

        <View style={styles.textBox}>
          <Text numberOfLines={3} style={[styles.text, fontStyles]}>
            {title}
          </Text>
        </View>
      </View>
    );
  }
}

export default InstagramSlide;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    flexShrink: 3,
    alignSelf: "flex-start",
  },
  image: {
    height: SLIDE_SIZE,
    width: SLIDE_SIZE,
  },
  textBox: {
    backgroundColor: "black",
    paddingVertical: TEXTBOX_PADDING.VERTICAL,
    paddingHorizontal: TEXTBOX_PADDING.HORIZONTAL,
    width: "100%",
    height: TEXTBOX_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontStyle: "italic",
    fontWeight: "100",
  },
});
