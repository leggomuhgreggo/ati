// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import type { Node } from "react";

type Props = {
  style?: any,
  spacer?: number,
  children: Node,
};

class Row extends Component<Props> {
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

export default Row;

const styles = StyleSheet.create({
  row: {
    width: "100%",
    alignItems: "center",
  },
});
