// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import type { Node } from "react";
import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type Props = {
  style?: StyleObj,
  children: Node,
  rest: any,
};

class Row extends PureComponent<Props> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { style, spacer, children, ...rest } = this.props;
    return (
      <View style={[styles.row, style]} {...rest}>
        {children}
      </View>
    );
  }
}

export default Row;

const styles = StyleSheet.create({
  row: {
    width: "100%",
  },
});
