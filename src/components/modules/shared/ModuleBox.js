// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import elevation from "elevation.js";

import { Pattern } from "components/modules";

import { COLOR_MAP } from "constants.js";

class ModuleBox extends Component<Props> {
  render() {
    const { children, style } = this.props;
    return (
      <Pattern color={COLOR_MAP.PURPLE}>
        <View style={[styles.wrap, style]}>{children}</View>
      </Pattern>
    );
  }
}

export default ModuleBox;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "white",
    padding: 20,
    ...elevation(1),
  },
});
