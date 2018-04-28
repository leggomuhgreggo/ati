// DotsWrap
// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import elevation from "../../../elevation";

import { Container } from "../../primitives";

class ModuleWrap extends Component<Props> {
  render() {
    const { children, style } = this.props;
    return <Container style={[styles.wrap, style]}>{children}</Container>;
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
