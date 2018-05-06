// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import elevation from "elevation.js";

import { Pattern } from "components/modules";

import { COLOR_MAP } from "constants.js";

type Props = {
  style: any,
  contentStyles: any,
  children: any,
};

class ModuleBox extends Component<Props> {
  static defaultProps = {
    style: {},
    contentStyles: {},
  };
  render() {
    const { children, style, color, contentStyles } = this.props;
    return (
      <Pattern color={color}>
        <View style={[styles.wrap, styles.inner, style]}>{children}</View>
      </Pattern>
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
