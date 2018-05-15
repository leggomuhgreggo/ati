// @flow

import React, { PureComponent } from "react";
import { Text as RNText, StyleSheet, Dimensions } from "react-native";

import createLockFunction from "../../lock";

import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

const TEXT_COLOR = "#242424";

const FONT_FAMILIES = {
  SANS_SERIF: "Work Sans",
  SERIF: "Libre Baskerville",
};

type Props = {
  style?: StyleObj,
  size?: 1 | 2 | 3 | 4 | 5 | 6,
  sizeRange?: [number, number],
  serif?: boolean,
  sansSerif?: boolean,
  screenWidth?: number,
};

class Text extends PureComponent<Props> {
  static defaultProps = {
    style: {},
    rest: {},
    size: 1,
    sizeRange: [17, 21],
    screenWidth: Dimensions.get("window").width,
    serif: false,
    sansSerif: true,
  };

  getValueFromStyleProp = cssProperty =>
    !!StyleSheet.flatten(this.props.style)[cssProperty] &&
    StyleSheet.flatten(this.props.style)[cssProperty];

  getFontFamily = () =>
    this.props.serif && !this.props.sansSerif
      ? FONT_FAMILIES.SERIF
      : FONT_FAMILIES.SANS_SERIF;

  getFontSizeFromLockFunc = () => {
    const {
      screenWidth,
      size,
      sizeRange: [min, max],
    } = this.props;

    const sizeMod = Math.pow(1.22, size - 1) * size;

    return createLockFunction({ min, max })(screenWidth) * sizeMod;
  };

  getFontSize = () =>
    this.getValueFromStyleProp("fontSize") || this.getFontSizeFromLockFunc();

  //
  getLineHeightCoordinates = () => {
    return {
      min: 1.25,
      max: 1.1,
      lockMin: 16,
      lockMax: 30,
    };
  };

  getLineHeightFromLockFunc = () => {
    const fontSize = this.getFontSize();
    const lockConfig = this.getLineHeightCoordinates();
    return createLockFunction(lockConfig)(fontSize);
  };

  getLineHeight = () =>
    this.getValueFromStyleProp("lineHeight") ||
    this.getLineHeightFromLockFunc();

  getDynamicStyles = () => {
    // console.log(this.getLineHeight(), this.getFontSize());
    return {
      fontFamily: this.getFontFamily(),
      fontSize: ~~this.getFontSize(),
      lineHeight: ~~(this.getLineHeight() * this.getFontSize()),
    };
  };

  render() {
    const { style, children } = this.props;
    return (
      <RNText style={[styles.text, this.getDynamicStyles(), style]}>
        {children}
      </RNText>
    );
  }
}

export default Text;

const styles = StyleSheet.create({
  text: {
    color: TEXT_COLOR,
    fontFamily: "sans-serif",
  },
});
