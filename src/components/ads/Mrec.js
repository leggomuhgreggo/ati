// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
// import { Text } from "components/primitives";

type Props = {
  style?: any,
};

class Mrec extends Component<Props> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { style } = this.props;
    return <View style={[styles.ad, { style }]} />;
  }
}

export default Mrec;

const styles = StyleSheet.create({
  ad: {
    width: 300,
    height: 250,
    backgroundColor: "#ebebeb",
    borderColor: "#cccccc",
    borderWidth: 1,
  },
});
