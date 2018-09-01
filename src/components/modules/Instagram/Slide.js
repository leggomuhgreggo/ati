import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Image } from "components/primitives";
import { BREAKPOINTS } from "constants/index";

/**
 * Text Size
 * -20/26, 18/20
 * -italic
 * -adellesans or whatever
 */

const SLIDE_SIZE = 306;

class InstagramSlide extends PureComponent {
  render() {
    const { imageSrc, title, breakpoint = BREAKPOINTS.LARGE } = this.props;
    const isLarge = breakpoint === BREAKPOINTS.LARGE;

    const fontStyles = isLarge
      ? {
          fontSize: 20,
          lineHeight: 26,
        }
      : {
          fontSize: 18,
          lineHeight: 20,
        };
    return (
      <View style={styles.wrap}>
        <Image
          style={styles.image}
          source={{
            uri: imageSrc,
          }}
        />

        <View style={styles.textBox}>
          <Text style={[styles.text, fontStyles]}>{title}</Text>
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
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "100%",
    height: 110,
  },
  text: {
    color: "white",
    fontStyle: "italic",
    fontWeight: "100",
  },
});
