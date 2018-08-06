// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { Image } from "components/primitives";

class PostImage extends PureComponent {
  render() {
    const { imageSrc, width, height, contrastOverlay } = this.props;
    return (
      <View>
        <Image width={width} height={height} src={imageSrc} />
        {contrastOverlay && <View style={styles.overlay} />}
      </View>
    );
  }
}

export default PostImage;

const styles = StyleSheet.create({
  container: { position: "relative" },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "80%",
    backgroundImage:
      "linear-gradient(to bottom,transparent 0,rgba(0,0,0,.02) 14%,rgba(0,0,0,.05) 23%,rgba(0,0,0,.18) 43%,rgba(0,0,0,.41) 62%,rgba(0,0,0,.8) 88%,rgba(0,0,0,.81) 90%,rgba(0,0,0,.9) 95%,rgba(0,0,0,.94) 100%)",
  },
});
