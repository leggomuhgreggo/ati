// @flow

import React, { PureComponent } from "react";
import { Image as RNImage, StyleSheet } from "react-native";

import Ratio from "./Ratio";

type Props = {
  src: string,
  alt: string,
  width: string,
  height: string,
};

/**
 * To Do
 * transform api
 * srcset
 * alt
 */

class Image extends PureComponent<Props> {
  static defaultProps = {
    src: "http://placehold.it/350x150",
    resizeMode: "cover",
  };

  getValueFromStyleProp = cssProperty =>
    this.props.style &&
    !!StyleSheet.flatten(this.props.style)[cssProperty] &&
    StyleSheet.flatten(this.props.style)[cssProperty];

  getDimensionsFromProps = () => {
    const { width, height } = this.props;

    return !isNaN(width) && !isNaN(height)
      ? {
          width,
          height,
        }
      : null;
  };

  getDimensionsFromStyles = () => {
    const width = this.getValueFromStyleProp("width");
    const height = this.getValueFromStyleProp("height");

    return !isNaN(width) && !isNaN(height)
      ? {
          width,
          height,
        }
      : null;
  };

  getStaticDimensions = () =>
    this.getDimensionsFromProps()
      ? this.getDimensionsFromProps()
      : this.getDimensionsFromStyles()
        ? this.getDimensionsFromStyles()
        : {};

  getRatioString = ({ width, height }) => `${width}:${height}`;

  getRatio = () => {
    const { width, height } = this.getStaticDimensions();
    return !isNaN(width) && !isNaN(height)
      ? this.getRatioString({
          width,
          height,
        })
      : undefined;
  };

  render() {
    const { style, src, alt, resizeMode, ...rest } = this.props;

    return (
      <Ratio ratio={this.getRatio()}>
        <RNImage
          source={{
            uri: src,
          }}
          accessibilityLabel={alt}
          style={[styles.expand]}
          resizeMode={resizeMode}
          {...rest}
        />
      </Ratio>
    );
  }
}

export default Image;

const styles = StyleSheet.create({
  expand: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
