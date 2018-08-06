// @flow

import React, { PureComponent } from "react";
import { Text as RNText, StyleSheet } from "react-native";

import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

import { FONT_FAMILIES, COLOR_MAP } from "constants/index";

type Props = {
  style?: StyleObj,
  serif?: boolean,
  sansSerif?: boolean,
};

class Text extends PureComponent<Props> {
  static defaultProps = {
    style: {},
    serif: false,
    sansSerif: true,
  };

  render() {
    const { serif, sansSerif, style, children, ...rest } = this.props;
    const fontFamily = this.props.serif
      ? FONT_FAMILIES.SERIF
      : FONT_FAMILIES.SANS_SERIF;
    return (
      <RNText {...rest} style={[styles.text, { fontFamily }, style]}>
        {children}
      </RNText>
    );
  }
}

export default Text;

const styles = StyleSheet.create({
  text: {
    color: COLOR_MAP.TEXT_COLOR,
  },
});
