// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Container } from "./primitives";

type Props = {
  children: React.Node,
};

class AppWrap extends Component<Props> {
  render() {
    const { children } = this.props;
    return (
      <View style={styles.app}>
        <Container type="content">{children}</Container>
      </View>
    );
  }
}

export default AppWrap;

const styles = StyleSheet.create({
  app: {
    // flex: 1,
    alignItems: "center",
  },
});
