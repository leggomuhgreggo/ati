// @flow

import React, { Component } from "react";
import { Image as RNImage, StyleSheet } from "react-native";
import Ratio from "./Ratio";

type Props = {
  rest: any,
  resizeMode?: string,
  imageAPIEndpoint?: string,
  templateSrc?: string,
  dimensionsArray?: Array<number>,
};

class Image extends Component<Props> {
  static defaultProps = {
    resizeMode: "responsive",
    imageAPIEndpoint: "",
  };

  getResizeMode = () =>
    this.props.resizeMode === "responsive" ? "cover" : this.props.resizeMode;

  // getRatio = () =>
  //   this.props.resizeMode === "responsive" ? "cover" : this.props.resizeMode;

  handleGetSize = src =>
    Image.getSize(src, (width, height) => ({
      width,
      height,
    }));

  render() {
    const { style, ...rest } = this.props;
    return (
      <Ratio>
        <RNImage
          style={[styles.expand, style]}
          resizeMode={this.getResizeMode()}
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
