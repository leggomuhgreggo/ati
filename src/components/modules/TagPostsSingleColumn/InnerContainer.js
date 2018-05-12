// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

class InnerContainer extends PureComponent {
  render() {
    const { children, style } = this.props;
    return <View style={[styles.container, style]}>{children}</View>;
  }
}

export default InnerContainer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 45,
    width: "100%",
  },
});
