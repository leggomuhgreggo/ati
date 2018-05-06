// DotsWrap
// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import elevation from "elevation.js";

import { Container } from "components/primitives";
import Pattern from "./Pattern";

import { COLOR_MAP } from "constants.js";

class ModuleWrap extends Component<Props> {
  render() {
    const { children, style } = this.props;
    return (
      <Pattern color={COLOR_MAP.PURPLE}>
        <Container style={[styles.wrap, style]}>{children}</Container>
      </Pattern>
    );
  }
}

export default ModuleWrap;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "white",
    padding: 20,
    ...elevation(1),
  },
});
