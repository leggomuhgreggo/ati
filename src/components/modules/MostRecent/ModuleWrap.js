// DotsWrap
// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import elevation from "../../../elevation";

import { Container } from "../../primitives";
import Pattern from "./Pattern";

class ModuleWrap extends Component<Props> {
  render() {
    const { children, style } = this.props;
    return (
      <Pattern color="purple">
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
