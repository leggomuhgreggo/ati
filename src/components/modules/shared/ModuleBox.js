// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import elevation from "elevation.js";

import { Pattern } from "components/modules";

import type { CategoryColors } from "components/types";
import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import type { Node } from "react";

const OFFSET = {
  LEFT: "left",
  RIGHT: "right",
};

type Props = {
  style?: StyleObj,
  children: Node,
  patternColor: CategoryColors,
  offsetDirection?: OFFSET.LEFT | OFFSET.RIGHT,
};

class ModuleBox extends PureComponent<Props> {
  static defaultProps = {
    style: {},
    offsetDirection: OFFSET.LEFT,
  };

  render() {
    const { children, patternColor, offsetDirection, style } = this.props;

    return patternColor ? (
      <Pattern offsetDirection={offsetDirection} color={patternColor}>
        <Box style={style}>{children}</Box>
      </Pattern>
    ) : (
      <Box style={style}>{children}</Box>
    );
  }
}

export default ModuleBox;

const styles = StyleSheet.create({
  inner: {
    padding: 30,
    width: "100%",
  },
  wrap: {
    ...elevation(1),
    backgroundColor: "white",
  },
});

const Box = ({ children, style }) => (
  <View style={[styles.wrap, styles.inner, style]}>{children}</View>
);
