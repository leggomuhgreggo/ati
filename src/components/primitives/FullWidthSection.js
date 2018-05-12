// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import type { Node } from "react";
import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type Props = {
  style?: StyleObj,
  spacer?: number,
  children: Node,
};

class FullWidthSection extends PureComponent<Props> {
  static defaultProps = {
    spacer: 100,
    style: {},
  };

  render() {
    const { style, spacer, children } = this.props;
    return (
      <View style={[styles.row, { marginTop: spacer }, style]}>{children}</View>
    );
  }
}

export default FullWidthSection;

const styles = StyleSheet.create({
  row: {
    width: "100%",
    alignItems: "center",
  },
});
