// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import type { RNW$Styles } from "react-native";

type Props = {
  style?: RNW$Styles,
};

class Mrec extends PureComponent<Props> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { style } = this.props;
    return <View style={[styles.ad, style]} />;
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
