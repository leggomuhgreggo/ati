// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import elevation from "elevation.js";

import { Pattern } from "components/modules";

import type { CategoryColors } from "components/types";
import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import type { Node } from "react";

type Props = {
  style?: StyleObj,
  children: Node,
  color: CategoryColors,
  offsetDirection: "left" | "right",
};

class ModuleBox extends PureComponent<Props> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { children, color, offsetDirection, styles } = this.props;

    return color ? (
      <Pattern offsetDirection={offsetDirection} color={color}>
        <Box styles={styles}>{children}</Box>
      </Pattern>
    ) : (
      <Box styles={styles}>{children}</Box>
    );
  }
}

export default ModuleBox;

const styles = StyleSheet.create({
  inner: {
    padding: 30,
  },
  wrap: {
    ...elevation(1),
    backgroundColor: "white",
  },
});

const Box = ({ children, style }) => (
  <View style={[styles.wrap, styles.inner, style]}>{children}</View>
);
