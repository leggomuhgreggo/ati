// @flow

import React, { PureComponent } from "react";
import { View as RNView, StyleSheet } from "react-native";

import type { Node } from "react";
import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type Direction = { row?: boolean } | { col?: boolean };
// type ContentPositioning = { centerX?: boolean } | { centerY?: boolean } | { center?: boolean };

type Props = {
  style?: StyleObj,
  spacer?: number,
  children: Node,
} & Direction;

class View extends PureComponent<Props> {
  static defaultProps = {
    spacer: 100,
    row: false,
    col: true,
    style: {},
  };

  getFlexDirection = () => {
    const { row, col } = this.props;
    return { flexDirection: col && !row ? "column" : "row" };
  };

  getMarginTop = () => {
    const { spacer } = this.props;
    return { marginTop: spacer };
  };

  getDerivedStyles = () => {
    return {
      ...this.getFlexDirection(),
      ...this.getMarginTop(),
    };
  };

  render() {
    const { style, spacer, children, ...rest } = this.props;
    const derivedStyles = this.getDerivedStyles;
    return (
      <RNView style={[styles.row, derivedStyles, style]} {...rest}>
        {children}
      </RNView>
    );
  }
}

export default View;

const styles = StyleSheet.create({
  row: {
    width: "100%",
    maxWidth: "100%",
  },
});
