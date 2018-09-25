// @flow

import React, { PureComponent } from "react";
import { Text as RNText, StyleSheet } from "react-native";
import Clamp from "./Clamp";

import type { RNW$Styles } from "react-native";

import { FONT_FAMILIES, COLOR_MAP } from "constants/index";

type Props = {
  style?: RNW$Styles,
  serif?: boolean,
  sansSerif?: boolean,
  children: any,
};

class Text extends PureComponent<Props> {
  static defaultProps = {
    style: {},
    serif: false,
    sansSerif: true,
  };

  render() {
    const {
      numberOfLines,
      serif,
      sansSerif,
      style,
      children,
      ...rest
    } = this.props;
    const fontFamily = this.props.serif
      ? FONT_FAMILIES.SERIF
      : FONT_FAMILIES.SANS_SERIF;
    return numberOfLines ? (
      <Clamp
        numberOfLines={numberOfLines}
        {...rest}
        style={[styles.text, { fontFamily }, style]}
      >
        {children}
      </Clamp>
    ) : (
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
    fontSize: 17,
    lineHeight: 20,
  },
});
