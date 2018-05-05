// @flow

import React, { Component } from "react";
import { Text as RNText, StyleSheet } from "react-native";

type Props = {
  style?: any,
  rest?: any,
};

const TEXT_COLOR = "#242424";

const FONT_FAMILIES = {
  SANS_SERIF: "sans-serif",
  SERIF: "serif",
};

class Text extends Component<Props> {
  static defaultProps = {
    style: {},
    rest: {},
  };

  getFontFamily = () => {
    return { fontFamily: FONT_FAMILIES.SANS_SERIF };
  };

  getFluidSize = () => 17;

  getFontSize = () => {
    return { fontSize: this.getFluidSize() };
  };

  getLineHeight = () => {
    return { lineHeight: 1.1 * this.getFluidSize() };
  };

  getLetterSpacing = () => {
    // return { letterSpacing: 0 };
    return {};
  };

  getDynamicStyles = () => {
    return {
      ...this.getFontFamily(),
      ...this.getFontSize(),
      ...this.getLineHeight(),
      ...this.getLetterSpacing(),
    };
  };

  // getStyles = () => {}

  render() {
    const { style, ...rest } = this.props;
    return (
      <RNText style={[styles.text, this.getDynamicStyles(), style]} {...rest} />
    );
  }
}

export default Text;

const styles = StyleSheet.create({
  text: {
    color: TEXT_COLOR,
  },
});
