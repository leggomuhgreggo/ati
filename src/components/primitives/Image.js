// @flow

import React, { PureComponent } from "react";
import { Image as RNImage, StyleSheet } from "react-native";
import Ratio from "./Ratio";

type Props = {
  source: any,
  resizeMode?: string,
  ratio: string,
};

class ResponsiveImage extends PureComponent<Props> {
  static defaultProps = {
    resizeMode: "cover",
  };

  getRatio = () => {
    const {
      ratio,
      source: { uri, width, height },
    } = this.props;

    if (ratio) {
      return ratio;
    }

    if (width && height) {
      return `${width}:${height}`;
    }

    if (uri) {
      return this.getRatioFromImageSize(uri);
    }
  };

  getRatioFromImageSize = src =>
    RNImage.getSize(src, (width, height) => `${width}:${height}`);

  render() {
    const { style, source, resizeMode, ...rest } = this.props;
    return (
      <Ratio ratio={this.getRatio()}>
        <RNImage
          style={[styles.expand, style]}
          resizeMode={resizeMode}
          source={source}
          {...rest}
        />
      </Ratio>
    );
  }
}

export default ResponsiveImage;

const styles = StyleSheet.create({
  expand: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
