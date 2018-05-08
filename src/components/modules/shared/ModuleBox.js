// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import elevation from "elevation.js";

import { Pattern } from "components/modules";

import { COLOR_MAP } from "constants.js";
import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type Props = {
  style?: StyleObj,
  contentStyles: any,
  children: any,
};

class ModuleBox extends Component<Props> {
  static defaultProps = {
    style: {},
    contentStyles: {},
  };
  renderInner = () => {
    const { children, style } = this.props;
    return <View style={[styles.wrap, styles.inner, style]}>{children}</View>;
  };
  render() {
    const { color, offsetDirection } = this.props;

    return color ? (
      <Pattern offsetDirection={offsetDirection} color={color}>
        {this.renderInner()}
      </Pattern>
    ) : (
      this.renderInner()
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
